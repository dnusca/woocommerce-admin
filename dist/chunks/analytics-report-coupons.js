(window.__wcAdmin_webpackJsonp=window.__wcAdmin_webpackJsonp||[]).push([[11],{617:function(e,t,r){"use strict";r.r(t);r(174),r(83),r(126),r(151),r(127),r(152);var n=r(4),a=r.n(n),o=r(13),c=r.n(o),i=r(14),u=r.n(i),s=r(16),l=r.n(s),m=r(17),d=r.n(m),p=r(7),f=r.n(p),y=r(0),b=(r(132),r(118),r(238),r(322),r(1)),v=r.n(b),g=r(2),h=r(15),O=r(662),_=r(10),j=r.n(_),w=r(3),C=r(112),R=r(28),q=r(278),D=r(42),k=r(57),E=r(638),P=r(627);function S(e){var t=function(){if("undefined"==typeof Reflect||!Reflect.construct)return!1;if(Reflect.construct.sham)return!1;if("function"==typeof Proxy)return!0;try{return Boolean.prototype.valueOf.call(Reflect.construct(Boolean,[],(function(){}))),!0}catch(e){return!1}}();return function(){var r,n=f()(e);if(t){var a=f()(this).constructor;r=Reflect.construct(n,arguments,a)}else r=n.apply(this,arguments);return d()(this,r)}}var F=function(e){l()(r,e);var t=S(r);function r(){var e;return c()(this,r),(e=t.call(this)).getHeadersContent=e.getHeadersContent.bind(j()(e)),e.getRowsContent=e.getRowsContent.bind(j()(e)),e.getSummary=e.getSummary.bind(j()(e)),e}return u()(r,[{key:"getHeadersContent",value:function(){return[{label:Object(g.__)("Coupon Code","woocommerce-admin"),key:"code",required:!0,isLeftAligned:!0,isSortable:!0},{label:Object(g.__)("Orders","woocommerce-admin"),key:"orders_count",required:!0,defaultSort:!0,isSortable:!0,isNumeric:!0},{label:Object(g.__)("Amount Discounted","woocommerce-admin"),key:"amount",isSortable:!0,isNumeric:!0},{label:Object(g.__)("Created","woocommerce-admin"),key:"created"},{label:Object(g.__)("Expires","woocommerce-admin"),key:"expires"},{label:Object(g.__)("Type","woocommerce-admin"),key:"type"}]}},{key:"getRowsContent",value:function(e){var t=this,r=this.props.query,n=Object(R.getPersistedQuery)(r),a=Object(D.g)("dateFormat",k.defaultTableDateFormat),o=this.context,c=o.formatAmount,i=o.formatDecimal,u=o.getCurrencyConfig;return Object(w.map)(e,(function(e){var r=e.amount,o=e.coupon_id,s=e.orders_count,l=e.extended_info||{},m=l.code,d=l.date_created,p=l.date_expires,f=l.discount_type,b=o>0?Object(R.getNewPath)(n,"/analytics/coupons",{filter:"single_coupon",coupons:o}):null,v=null===b?m:Object(y.createElement)(C.Link,{href:b,type:"wc-admin"},m),h=o>0?Object(R.getNewPath)(n,"/analytics/orders",{filter:"advanced",coupon_includes:o}):null;return[{display:v,value:m},{display:null===h?s:Object(y.createElement)(C.Link,{href:h,type:"wc-admin"},Object(q.formatValue)(u(),"number",s)),value:s},{display:c(r),value:i(r)},{display:d?Object(y.createElement)(C.Date,{date:d,visibleFormat:a}):Object(g.__)("N/A","woocommerce-admin"),value:d},{display:p?Object(y.createElement)(C.Date,{date:p,visibleFormat:a}):Object(g.__)("N/A","woocommerce-admin"),value:p},{display:t.getCouponType(f),value:f}]}))}},{key:"getSummary",value:function(e){var t=e.coupons_count,r=void 0===t?0:t,n=e.orders_count,a=void 0===n?0:n,o=e.amount,c=void 0===o?0:o,i=this.context,u=i.formatAmount,s=(0,i.getCurrencyConfig)();return[{label:Object(g._n)("coupon","coupons",r,"woocommerce-admin"),value:Object(q.formatValue)(s,"number",r)},{label:Object(g._n)("order","orders",a,"woocommerce-admin"),value:Object(q.formatValue)(s,"number",a)},{label:Object(g.__)("amount discounted","woocommerce-admin"),value:u(c)}]}},{key:"getCouponType",value:function(e){return{percent:Object(g.__)("Percentage","woocommerce-admin"),fixed_cart:Object(g.__)("Fixed cart","woocommerce-admin"),fixed_product:Object(g.__)("Fixed product","woocommerce-admin")}[e]||Object(g.__)("N/A","woocommerce-admin")}},{key:"render",value:function(){var e=this.props,t=e.advancedFilters,r=e.filters,n=e.isRequesting,a=e.query;return Object(y.createElement)(E.a,{compareBy:"coupons",endpoint:"coupons",getHeadersContent:this.getHeadersContent,getRowsContent:this.getRowsContent,getSummary:this.getSummary,summaryFields:["coupons_count","orders_count","amount"],isRequesting:n,itemIdField:"coupon_id",query:a,searchBy:"coupons",tableQuery:{orderby:a.orderby||"orders_count",order:a.order||"desc",extended_info:!0},title:Object(g.__)("Coupons","woocommerce-admin"),columnPrefsKey:"coupons_report_columns",filters:r,advancedFilters:t})}}]),r}(y.Component);F.contextType=P.a;var T=F,A=r(635),x=r(633),N=r(636),L=r(637),M=r(184);function V(e,t){var r=Object.keys(e);if(Object.getOwnPropertySymbols){var n=Object.getOwnPropertySymbols(e);t&&(n=n.filter((function(t){return Object.getOwnPropertyDescriptor(e,t).enumerable}))),r.push.apply(r,n)}return r}function B(e){var t=function(){if("undefined"==typeof Reflect||!Reflect.construct)return!1;if(Reflect.construct.sham)return!1;if("function"==typeof Proxy)return!0;try{return Boolean.prototype.valueOf.call(Reflect.construct(Boolean,[],(function(){}))),!0}catch(e){return!1}}();return function(){var r,n=f()(e);if(t){var a=f()(this).constructor;r=Reflect.construct(n,arguments,a)}else r=n.apply(this,arguments);return d()(this,r)}}var I=function(e){l()(r,e);var t=B(r);function r(){return c()(this,r),t.apply(this,arguments)}return u()(r,[{key:"getChartMeta",value:function(){var e=this.props.query,t="compare-coupons"===e.filter&&e.coupons&&e.coupons.split(",").length>1?"item-comparison":"time-comparison";return{itemsLabel:Object(g.__)("%d coupons","woocommerce-admin"),mode:t}}},{key:"render",value:function(){var e=this.props,t=e.isRequesting,r=e.query,n=e.path,o=e.addCesSurveyForAnalytics,c=this.getChartMeta(),i=c.mode,u=c.itemsLabel;O.c[0].filters.find((function(e){return"compare-coupons"===e.value})).settings.onClick=o;var s=function(e){for(var t=1;t<arguments.length;t++){var r=null!=arguments[t]?arguments[t]:{};t%2?V(Object(r),!0).forEach((function(t){a()(e,t,r[t])})):Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(r)):V(Object(r)).forEach((function(t){Object.defineProperty(e,t,Object.getOwnPropertyDescriptor(r,t))}))}return e}({},r);return"item-comparison"===i&&(s.segmentby="coupon"),Object(y.createElement)(y.Fragment,null,Object(y.createElement)(L.a,{query:r,path:n,filters:O.c,advancedFilters:O.a,report:"coupons"}),Object(y.createElement)(N.a,{charts:O.b,endpoint:"coupons",isRequesting:t,query:s,selectedChart:Object(A.a)(r.chart,O.b),filters:O.c,advancedFilters:O.a}),Object(y.createElement)(x.a,{charts:O.b,filters:O.c,advancedFilters:O.a,mode:i,endpoint:"coupons",path:n,query:s,isRequesting:t,itemsLabel:u,selectedChart:Object(A.a)(r.chart,O.b)}),Object(y.createElement)(T,{isRequesting:t,query:r,filters:O.c,advancedFilters:O.a}))}}]),r}(y.Component);I.propTypes={query:v.a.object.isRequired};t.default=Object(h.withDispatch)((function(e){return{addCesSurveyForAnalytics:e(M.c).addCesSurveyForAnalytics}}))(I)},629:function(e,t,r){"use strict";r.d(t,"e",(function(){return m})),r.d(t,"a",(function(){return d})),r.d(t,"b",(function(){return p})),r.d(t,"c",(function(){return f})),r.d(t,"d",(function(){return y})),r.d(t,"f",(function(){return b})),r.d(t,"h",(function(){return v})),r.d(t,"g",(function(){return g}));r(115),r(158),r(277),r(117),r(276);var n=r(38),a=r(48),o=r.n(a),c=r(3),i=r(28),u=r(33),s=r(42),l=r(632);function m(e){var t=arguments.length>1&&void 0!==arguments[1]?arguments[1]:c.identity;return function(){var r=arguments.length>0&&void 0!==arguments[0]?arguments[0]:"",a=arguments.length>1?arguments[1]:void 0,c="function"==typeof e?e(a):e,u=Object(i.getIdsFromQuery)(r);if(u.length<1)return Promise.resolve([]);var s={include:u.join(","),per_page:u.length};return o()({path:Object(n.addQueryArgs)(c,s)}).then((function(e){return e.map(t)}))}}m(u.NAMESPACE+"/products/attributes",(function(e){return{key:e.id,label:e.name}}));var d=m(u.NAMESPACE+"/products/categories",(function(e){return{key:e.id,label:e.name}})),p=m(u.NAMESPACE+"/coupons",(function(e){return{key:e.id,label:e.code}})),f=m(u.NAMESPACE+"/customers",(function(e){return{key:e.id,label:e.name}})),y=m(u.NAMESPACE+"/products",(function(e){return{key:e.id,label:e.name}})),b=m(u.NAMESPACE+"/taxes",(function(e){return{key:e.id,label:Object(l.a)(e)}}));function v(e){var t=e.attributes,r=e.name,n=Object(s.g)("variationTitleAttributesSeparator"," - ");if(r.indexOf(n)>-1)return r;var a=t.map((function(e){return e.option})).join(", ");return a?r+n+a:r}var g=m((function(e){var t=e.products;return t?u.NAMESPACE+"/products/".concat(t,"/variations"):u.NAMESPACE+"/variations"}),(function(e){return{key:e.id,label:v(e)}}))},630:function(e,t,r){"use strict";var n=r(26),a=r(280).trim;n({target:"String",proto:!0,forced:r(631)("trim")},{trim:function(){return a(this)}})},631:function(e,t,r){var n=r(12),a=r(281);e.exports=function(e){return n((function(){return!!a[e]()||"​᠎"!="​᠎"[e]()||a[e].name!==e}))}},632:function(e,t,r){"use strict";r.d(t,"a",(function(){return a}));r(277),r(132),r(117),r(276),r(630),r(115),r(255);var n=r(2);function a(e){return[e.country,e.state,e.name||Object(n.__)("TAX","woocommerce-admin"),e.priority].map((function(e){return e.toString().toUpperCase().trim()})).filter(Boolean).join("-")}},633:function(e,t,r){"use strict";r(174),r(83),r(126),r(132),r(151),r(152);var n=r(4),a=r.n(n),o=r(13),c=r.n(o),i=r(14),u=r.n(i),s=r(16),l=r.n(s),m=r(17),d=r.n(m),p=r(7),f=r.n(p),y=r(0),b=(r(117),r(127),r(128),r(118),r(253),r(2)),v=r(34),g=r(185),h=r(15),O=r(3),_=r(1),j=r.n(_),w=r(112),C=r(33),R=r(57),q=r(627),D=r(628),k=(r(279),r(108),r(205),r(28));function E(e,t){var r=Object.keys(e);if(Object.getOwnPropertySymbols){var n=Object.getOwnPropertySymbols(e);t&&(n=n.filter((function(t){return Object.getOwnPropertyDescriptor(e,t).enumerable}))),r.push.apply(r,n)}return r}function P(e){for(var t=1;t<arguments.length;t++){var r=null!=arguments[t]?arguments[t]:{};t%2?E(Object(r),!0).forEach((function(t){a()(e,t,r[t])})):Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(r)):E(Object(r)).forEach((function(t){Object.defineProperty(e,t,Object.getOwnPropertyDescriptor(r,t))}))}return e}function S(e){var t=function(){if("undefined"==typeof Reflect||!Reflect.construct)return!1;if(Reflect.construct.sham)return!1;if("function"==typeof Proxy)return!0;try{return Boolean.prototype.valueOf.call(Reflect.construct(Boolean,[],(function(){}))),!0}catch(e){return!1}}();return function(){var r,n=f()(e);if(t){var a=f()(this).constructor;r=Reflect.construct(n,arguments,a)}else r=n.apply(this,arguments);return d()(this,r)}}var F=function(e){l()(r,e);var t=S(r);function r(){return c()(this,r),t.apply(this,arguments)}return u()(r,[{key:"shouldComponentUpdate",value:function(e){return e.isRequesting!==this.props.isRequesting||e.primaryData.isRequesting!==this.props.primaryData.isRequesting||e.secondaryData.isRequesting!==this.props.secondaryData.isRequesting||!Object(O.isEqual)(e.query,this.props.query)}},{key:"getItemChartData",value:function(){var e=this.props,t=e.primaryData,r=e.selectedChart;return t.data.intervals.map((function(e){var t={};return e.subtotals.segments.forEach((function(e){if(e.segment_label){var n=t[e.segment_label]?e.segment_label+" (#"+e.segment_id+")":e.segment_label;t[e.segment_id]={label:n,value:e.subtotals[r.key]||0}}})),P({date:Object(g.format)("Y-m-d\\TH:i:s",e.date_start)},t)}))}},{key:"getTimeChartData",value:function(){var e=this.props,t=e.query,r=e.primaryData,n=e.secondaryData,a=e.selectedChart,o=e.defaultDateRange,c=Object(R.getIntervalForQuery)(t),i=Object(R.getCurrentDates)(t,o),u=i.primary,s=i.secondary;return r.data.intervals.map((function(e,r){var o=Object(R.getPreviousDate)(e.date_start,u.after,s.after,t.compare,c),i=n.data.intervals[r];return{date:Object(g.format)("Y-m-d\\TH:i:s",e.date_start),primary:{label:"".concat(u.label," (").concat(u.range,")"),labelDate:e.date_start,value:e.subtotals[a.key]||0},secondary:{label:"".concat(s.label," (").concat(s.range,")"),labelDate:o.format("YYYY-MM-DD HH:mm:ss"),value:i&&i.subtotals[a.key]||0}}}))}},{key:"getTimeChartTotals",value:function(){var e=this.props,t=e.primaryData,r=e.secondaryData,n=e.selectedChart;return{primary:Object(O.get)(t,["data","totals",n.key],null),secondary:Object(O.get)(r,["data","totals",n.key],null)}}},{key:"renderChart",value:function(e,t,r,n){var a=this.props,o=a.emptySearchResults,c=a.filterParam,i=a.interactiveLegend,u=a.itemsLabel,s=a.legendPosition,l=a.path,m=a.query,d=a.selectedChart,p=a.showHeaderControls,f=a.primaryData,v=Object(R.getIntervalForQuery)(m),g=Object(R.getAllowedIntervalsForQuery)(m),h=Object(R.getDateFormatsForInterval)(v,f.data.intervals.length),O=o?Object(b.__)("No data for the current search","woocommerce-admin"):Object(b.__)("No data for the selected date range","woocommerce-admin"),_=this.context,j=_.formatAmount,q=_.getCurrencyConfig;return Object(y.createElement)(w.Chart,{allowedIntervals:g,data:r,dateParser:"%Y-%m-%dT%H:%M:%S",emptyMessage:O,filterParam:c,interactiveLegend:i,interval:v,isRequesting:t,itemsLabel:u,legendPosition:s,legendTotals:n,mode:e,path:l,query:m,screenReaderFormat:h.screenReaderFormat,showHeaderControls:p,title:d.label,tooltipLabelFormat:h.tooltipLabelFormat,tooltipTitle:"time-comparison"===e&&d.label||null,tooltipValueFormat:Object(C.getTooltipValueFormat)(d.type,j),chartType:Object(R.getChartTypeForQuery)(m),valueType:d.type,xFormat:h.xFormat,x2Format:h.x2Format,currency:q()})}},{key:"renderItemComparison",value:function(){var e=this.props,t=e.isRequesting,r=e.primaryData;if(r.isError)return Object(y.createElement)(D.a,{isError:!0});var n=t||r.isRequesting,a=this.getItemChartData();return this.renderChart("item-comparison",n,a)}},{key:"renderTimeComparison",value:function(){var e=this.props,t=e.isRequesting,r=e.primaryData,n=e.secondaryData;if(!r||r.isError||n.isError)return Object(y.createElement)(D.a,{isError:!0});var a=t||r.isRequesting||n.isRequesting,o=this.getTimeChartData(),c=this.getTimeChartTotals();return this.renderChart("time-comparison",a,o,c)}},{key:"render",value:function(){return"item-comparison"===this.props.mode?this.renderItemComparison():this.renderTimeComparison()}}]),r}(y.Component);F.contextType=q.a,F.propTypes={filters:j.a.array,isRequesting:j.a.bool,itemsLabel:j.a.string,limitProperties:j.a.array,mode:j.a.string,path:j.a.string.isRequired,primaryData:j.a.object,query:j.a.object.isRequired,secondaryData:j.a.object,selectedChart:j.a.shape({key:j.a.string.isRequired,label:j.a.string.isRequired,order:j.a.oneOf(["asc","desc"]),orderby:j.a.string,type:j.a.oneOf(["average","number","currency"]).isRequired}).isRequired},F.defaultProps={isRequesting:!1,primaryData:{data:{intervals:[]},isError:!1,isRequesting:!1},secondaryData:{data:{intervals:[]},isError:!1,isRequesting:!1}};t.a=Object(v.compose)(Object(h.withSelect)((function(e,t){var r=t.charts,n=t.endpoint,a=t.filters,o=t.isRequesting,c=t.limitProperties,i=t.query,u=t.advancedFilters,s=c||[n],l=function e(t,r){var n=arguments.length>2&&void 0!==arguments[2]?arguments[2]:{};if(!t||0===t.length)return null;var a=t.slice(0),o=a.pop();if(o.showFilters(r,n)){var c=Object(k.flattenFilters)(o.filters),i=r[o.param]||o.defaultValue||"all";return Object(O.find)(c,{value:i})}return e(a,r,n)}(a,i),m=Object(O.get)(l,["settings","param"]),d=t.mode||function(e,t){if(e&&t){var r=Object(O.get)(e,["settings","param"]);if(!r||Object.keys(t).includes(r))return Object(O.get)(e,["chartMode"])}return null}(l,i)||"time-comparison",p=e(C.SETTINGS_STORE_NAME).getSetting("wc_admin","wcAdminSettings").woocommerce_default_date_range,f={mode:d,filterParam:m,defaultDateRange:p};if(o)return f;var y=s.some((function(e){return i[e]&&i[e].length}));if(i.search&&!y)return P(P({},f),{},{emptySearchResults:!0});var b=r&&r.map((function(e){return e.key})),v=Object(C.getReportChartData)({endpoint:n,dataType:"primary",query:i,select:e,limitBy:s,filters:a,advancedFilters:u,defaultDateRange:p,fields:b});if("item-comparison"===d)return P(P({},f),{},{primaryData:v});var g=Object(C.getReportChartData)({endpoint:n,dataType:"secondary",query:i,select:e,limitBy:s,filters:a,advancedFilters:u,defaultDateRange:p,fields:b});return P(P({},f),{},{primaryData:v,secondaryData:g})})))(F)},635:function(e,t,r){"use strict";r.d(t,"a",(function(){return a}));var n=r(3);function a(e){var t=arguments.length>1&&void 0!==arguments[1]?arguments[1]:[],r=Object(n.find)(t,{key:e});return r||t[0]}},636:function(e,t,r){"use strict";r(174);var n=r(13),a=r.n(n),o=r(14),c=r.n(o),i=r(16),u=r.n(i),s=r(17),l=r.n(s),m=r(7),d=r.n(m),p=r(0),f=(r(117),r(118),r(253),r(2)),y=r(34),b=r(15),v=r(1),g=r.n(v),h=r(28),O=r(112),_=r(278),j=r(33),w=r(57),C=r(44),R=r(628),q=r(627);function D(e){var t=function(){if("undefined"==typeof Reflect||!Reflect.construct)return!1;if(Reflect.construct.sham)return!1;if("function"==typeof Proxy)return!0;try{return Boolean.prototype.valueOf.call(Reflect.construct(Boolean,[],(function(){}))),!0}catch(e){return!1}}();return function(){var r,n=d()(e);if(t){var a=d()(this).constructor;r=Reflect.construct(n,arguments,a)}else r=n.apply(this,arguments);return l()(this,r)}}var k=function(e){u()(r,e);var t=D(r);function r(){return a()(this,r),t.apply(this,arguments)}return c()(r,[{key:"formatVal",value:function(e,t){var r=this.context,n=r.formatAmount,a=r.getCurrencyConfig;return"currency"===t?n(e):Object(_.formatValue)(a(),t,e)}},{key:"getValues",value:function(e,t){var r=this.props,n=r.emptySearchResults,a=r.summaryData.totals,o=a.primary?a.primary[e]:0,c=a.secondary?a.secondary[e]:0,i=n?0:o,u=n?0:c;return{delta:Object(_.calculateDelta)(i,u),prevValue:this.formatVal(u,t),value:this.formatVal(i,t)}}},{key:"render",value:function(){var e=this,t=this.props,r=t.charts,n=t.query,a=t.selectedChart,o=t.summaryData,c=t.endpoint,i=t.report,u=t.defaultDateRange,s=o.isError,l=o.isRequesting;if(s)return Object(p.createElement)(R.a,{isError:!0});if(l)return Object(p.createElement)(O.SummaryListPlaceholder,{numberOfItems:r.length});var m=Object(w.getDateParamsFromQuery)(n,u).compare;return Object(p.createElement)(O.SummaryList,null,(function(t){var n=t.onToggle;return r.map((function(t){var r=t.key,o=t.order,u=t.orderby,s=t.label,l=t.type,d={chart:r};u&&(d.orderby=u),o&&(d.order=o);var y=Object(h.getNewPath)(d),b=a.key===r,v=e.getValues(r,l),g=v.delta,_=v.prevValue,j=v.value;return Object(p.createElement)(O.SummaryNumber,{key:r,delta:g,href:y,label:s,prevLabel:"previous_period"===m?Object(f.__)("Previous Period:","woocommerce-admin"):Object(f.__)("Previous Year:","woocommerce-admin"),prevValue:_,selected:b,value:j,onLinkClickCallback:function(){n&&n(),Object(C.recordEvent)("analytics_chart_tab_click",{report:i||c,key:r})}})}))}))}}]),r}(p.Component);k.propTypes={charts:g.a.array.isRequired,endpoint:g.a.string.isRequired,limitProperties:g.a.array,query:g.a.object.isRequired,selectedChart:g.a.shape({key:g.a.string.isRequired,label:g.a.string.isRequired,order:g.a.oneOf(["asc","desc"]),orderby:g.a.string,type:g.a.oneOf(["average","number","currency"]).isRequired}).isRequired,summaryData:g.a.object,report:g.a.string},k.defaultProps={summaryData:{totals:{primary:{},secondary:{}},isError:!1}},k.contextType=q.a,t.a=Object(y.compose)(Object(b.withSelect)((function(e,t){var r=t.charts,n=t.endpoint,a=t.limitProperties,o=t.query,c=t.filters,i=t.advancedFilters,u=a||[n],s=u.some((function(e){return o[e]&&o[e].length}));if(o.search&&!s)return{emptySearchResults:!0};var l=r&&r.map((function(e){return e.key})),m=e(j.SETTINGS_STORE_NAME).getSetting("wc_admin","wcAdminSettings").woocommerce_default_date_range;return{summaryData:Object(j.getSummaryNumbers)({endpoint:n,query:o,select:e,limitBy:u,filters:c,advancedFilters:i,defaultDateRange:m,fields:l}),defaultDateRange:m}})))(k)},662:function(e,t,r){"use strict";r.d(t,"b",(function(){return c})),r.d(t,"c",(function(){return i})),r.d(t,"a",(function(){return u}));var n=r(2),a=r(101),o=r(629),c=Object(a.applyFilters)("woocommerce_admin_coupons_report_charts",[{key:"orders_count",label:Object(n.__)("Discounted Orders","woocommerce-admin"),order:"desc",orderby:"orders_count",type:"number"},{key:"amount",label:Object(n.__)("Amount","woocommerce-admin"),order:"desc",orderby:"amount",type:"currency"}]),i=Object(a.applyFilters)("woocommerce_admin_coupons_report_filters",[{label:Object(n.__)("Show","woocommerce-admin"),staticParams:["chartType","paged","per_page"],param:"filter",showFilters:function(){return!0},filters:[{label:Object(n.__)("All Coupons","woocommerce-admin"),value:"all"},{label:Object(n.__)("Single Coupon","woocommerce-admin"),value:"select_coupon",chartMode:"item-comparison",subFilters:[{component:"Search",value:"single_coupon",chartMode:"item-comparison",path:["select_coupon"],settings:{type:"coupons",param:"coupons",getLabels:o.b,labels:{placeholder:Object(n.__)("Type to search for a coupon","woocommerce-admin"),button:Object(n.__)("Single Coupon","woocommerce-admin")}}}]},{label:Object(n.__)("Comparison","woocommerce-admin"),value:"compare-coupons",settings:{type:"coupons",param:"coupons",getLabels:o.b,labels:{title:Object(n.__)("Compare Coupon Codes","woocommerce-admin"),update:Object(n.__)("Compare","woocommerce-admin"),helpText:Object(n.__)("Check at least two coupon codes below to compare","woocommerce-admin")}}}]}]),u=Object(a.applyFilters)("woocommerce_admin_coupon_report_advanced_filters",{})}}]);