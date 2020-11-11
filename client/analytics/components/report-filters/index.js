/**
 * External dependencies
 */
import { Component } from '@wordpress/element';
import PropTypes from 'prop-types';
import { omitBy, isUndefined, snakeCase } from 'lodash';
import { withSelect } from '@wordpress/data';
import { ReportFilters as Filters } from '@woocommerce/components';
import { LOCALE } from '@woocommerce/wc-admin-settings';
import { SETTINGS_STORE_NAME } from '@woocommerce/data';
import {
	getCurrentDates,
	getDateParamsFromQuery,
	isoDateFormat,
} from '@woocommerce/date';
import { recordEvent } from '@woocommerce/tracks';

/**
 * Internal dependencies
 */
import { CurrencyContext } from '../../../lib/currency-context';

class ReportFilters extends Component {
	constructor() {
		super();
		this.trackDateSelect = this.trackDateSelect.bind( this );
		this.trackFilterSelect = this.trackFilterSelect.bind( this );
		this.trackAdvancedFilterAction = this.trackAdvancedFilterAction.bind(
			this
		);
	}

	trackDateSelect( data ) {
		wp.hooks.doAction(
			'woocommerce.admin.analytics.filtered',
			'datepicker_update'
		);
		const { report } = this.props;
		recordEvent( 'datepicker_update', {
			report,
			...omitBy( data, isUndefined ),
		} );
	}

	trackFilterSelect( data ) {
		wp.hooks.doAction(
			'woocommerce.admin.analytics.filtered',
			'analytics_filter'
		);
		const { report } = this.props;
		recordEvent( 'analytics_filter', {
			report,
			filter: data.filter || 'all',
		} );
	}

	trackAdvancedFilterAction( action, data ) {
		const { report } = this.props;

		switch ( action ) {
			case 'add':
				recordEvent( 'analytics_filters_add', {
					report,
					filter: data.key,
				} );
				break;
			case 'remove':
				recordEvent( 'analytics_filters_remove', {
					report,
					filter: data.key,
				} );
				break;
			case 'filter':
				wp.hooks.doAction(
					'woocommerce.admin.analytics.filtered',
					'analytics_filters_filter'
				);
				const snakeCaseData = Object.keys( data ).reduce(
					( result, property ) => {
						result[ snakeCase( property ) ] = data[ property ];
						return result;
					},
					{}
				);
				recordEvent( 'analytics_filters_filter', {
					report,
					...snakeCaseData,
				} );
				break;
			case 'clear_all':
				recordEvent( 'analytics_filters_clear_all', { report } );
				break;
			case 'match':
				recordEvent( 'analytics_filters_all_any', {
					report,
					value: data.match,
				} );
				break;
		}
	}

	render() {
		const {
			advancedFilters,
			filters,
			path,
			query,
			showDatePicker,
			defaultDateRange,
		} = this.props;
		const { period, compare, before, after } = getDateParamsFromQuery(
			query,
			defaultDateRange
		);
		const {
			primary: primaryDate,
			secondary: secondaryDate,
		} = getCurrentDates( query, defaultDateRange );
		const dateQuery = {
			period,
			compare,
			before,
			after,
			primaryDate,
			secondaryDate,
		};
		const Currency = this.context;

		return (
			<Filters
				query={ query }
				siteLocale={ LOCALE.siteLocale }
				currency={ Currency.getCurrencyConfig() }
				path={ path }
				filters={ filters }
				advancedFilters={ advancedFilters }
				showDatePicker={ showDatePicker }
				onDateSelect={ this.trackDateSelect }
				onFilterSelect={ this.trackFilterSelect }
				onAdvancedFilterAction={ this.trackAdvancedFilterAction }
				dateQuery={ dateQuery }
				isoDateFormat={ isoDateFormat }
			/>
		);
	}
}

ReportFilters.contextType = CurrencyContext;

export default withSelect( ( select ) => {
	const { woocommerce_default_date_range: defaultDateRange } = select(
		SETTINGS_STORE_NAME
	).getSetting( 'wc_admin', 'wcAdminSettings' );
	return { defaultDateRange };
} )( ReportFilters );

ReportFilters.propTypes = {
	/**
	 * Config option passed through to `AdvancedFilters`
	 */
	advancedFilters: PropTypes.object,
	/**
	 * Config option passed through to `FilterPicker` - if not used, `FilterPicker` is not displayed.
	 */
	filters: PropTypes.array,
	/**
	 * The `path` parameter supplied by React-Router
	 */
	path: PropTypes.string.isRequired,
	/**
	 * The query string represented in object form
	 */
	query: PropTypes.object,
	/**
	 * Whether the date picker must be shown..
	 */
	showDatePicker: PropTypes.bool,
	/**
	 * The report where filter are placed.
	 */
	report: PropTypes.string.isRequired,
};
