(window.__wcAdmin_webpackJsonp=window.__wcAdmin_webpackJsonp||[]).push([[20],{194:function(e,t,r){"use strict";function o(e){return function(){return e}}var n=function(){};n.thatReturns=o,n.thatReturnsFalse=o(!1),n.thatReturnsTrue=o(!0),n.thatReturnsNull=o(null),n.thatReturnsThis=function(){return this},n.thatReturnsArgument=function(e){return e},e.exports=n},235:function(e,t,r){"use strict";var o=r(11),n="function"==typeof Symbol&&Symbol.for&&Symbol.for("react.element")||60103,a=r(194),c=r(236),i=r(237),s="function"==typeof Symbol&&Symbol.iterator;function l(e,t){return e&&"object"==typeof e&&null!=e.key?(r=e.key,o={"=":"=0",":":"=2"},"$"+(""+r).replace(/[=:]/g,(function(e){return o[e]}))):t.toString(36);var r,o}function u(e,t,r,o){var a,i=typeof e;if("undefined"!==i&&"boolean"!==i||(e=null),null===e||"string"===i||"number"===i||"object"===i&&e.$$typeof===n)return r(o,e,""===t?"."+l(e,0):t),1;var m=0,d=""===t?".":t+":";if(Array.isArray(e))for(var p=0;p<e.length;p++)m+=u(a=e[p],d+l(a,p),r,o);else{var f=function(e){var t=e&&(s&&e[s]||e["@@iterator"]);if("function"==typeof t)return t}(e);if(f){0;for(var b,h=f.call(e),v=0;!(b=h.next()).done;)m+=u(a=b.value,d+l(a,v++),r,o)}else if("object"===i){0;var g=""+e;c(!1,"Objects are not valid as a React child (found: %s).%s","[object Object]"===g?"object with keys {"+Object.keys(e).join(", ")+"}":g,"")}}return m}var m=/\/+/g;function d(e){return(""+e).replace(m,"$&/")}var p,f,b=h,h=function(e){if(this.instancePool.length){var t=this.instancePool.pop();return this.call(t,e),t}return new this(e)},v=function(e){c(e instanceof this,"Trying to release an instance into a pool of a different type."),e.destructor(),this.instancePool.length<this.poolSize&&this.instancePool.push(e)};function g(e,t,r,o){this.result=e,this.keyPrefix=t,this.func=r,this.context=o,this.count=0}function O(e,t,r){var n,c,i=e.result,s=e.keyPrefix,l=e.func,u=e.context,m=l.call(u,t,e.count++);Array.isArray(m)?_(m,i,r,a.thatReturnsArgument):null!=m&&(o.isValidElement(m)&&(n=m,c=s+(!m.key||t&&t.key===m.key?"":d(m.key)+"/")+r,m=o.cloneElement(n,{key:c},void 0!==n.props?n.props.children:void 0)),i.push(m))}function _(e,t,r,o,n){var a="";null!=r&&(a=d(r)+"/");var c=g.getPooled(t,a,o,n);!function(e,t,r){null==e||u(e,"",t,r)}(e,O,c),g.release(c)}g.prototype.destructor=function(){this.result=null,this.keyPrefix=null,this.func=null,this.context=null,this.count=0},p=function(e,t,r,o){if(this.instancePool.length){var n=this.instancePool.pop();return this.call(n,e,t,r,o),n}return new this(e,t,r,o)},(f=g).instancePool=[],f.getPooled=p||b,f.poolSize||(f.poolSize=10),f.release=v;e.exports=function(e){if("object"!=typeof e||!e||Array.isArray(e))return i(!1,"React.addons.createFragment only accepts a single object. Got: %s",e),e;if(o.isValidElement(e))return i(!1,"React.addons.createFragment does not accept a ReactElement without a wrapper object."),e;c(1!==e.nodeType,"React.addons.createFragment(...): Encountered an invalid child; DOM elements are not valid children of React components.");var t=[];for(var r in e)_(e[r],t,r,a.thatReturnsArgument);return t}},236:function(e,t,r){"use strict";e.exports=function(e,t,r,o,n,a,c,i){if(!e){var s;if(void 0===t)s=new Error("Minified exception occurred; use the non-minified dev environment for the full error message and additional helpful warnings.");else{var l=[r,o,n,a,c,i],u=0;(s=new Error(t.replace(/%s/g,(function(){return l[u++]})))).name="Invariant Violation"}throw s.framesToPop=1,s}}},237:function(e,t,r){"use strict";var o=r(194);e.exports=o},238:function(e,t,r){"use strict";function o(e){return e.match(/^\{\{\//)?{type:"componentClose",value:e.replace(/\W/g,"")}:e.match(/\/\}\}$/)?{type:"componentSelfClosing",value:e.replace(/\W/g,"")}:e.match(/^\{\{/)?{type:"componentOpen",value:e.replace(/\W/g,"")}:{type:"string",value:e}}e.exports=function(e){return e.split(/(\{\{\/?\s*\w+\s*\/?\}\})/g).map(o)}},51:function(e,t,r){"use strict";Object.defineProperty(t,"__esModule",{value:!0});var o="function"==typeof Symbol&&"symbol"==typeof Symbol.iterator?function(e){return typeof e}:function(e){return e&&"function"==typeof Symbol&&e.constructor===Symbol&&e!==Symbol.prototype?"symbol":typeof e},n=i(r(11)),a=i(r(235)),c=i(r(238));function i(e){return e&&e.__esModule?e:{default:e}}var s=void 0;function l(e,t){var r,c,i,u,m,d,p,f,b=[],h={};for(d=0;d<e.length;d++)if("string"!==(m=e[d]).type){if(!t.hasOwnProperty(m.value)||void 0===t[m.value])throw new Error("Invalid interpolation, missing component node: `"+m.value+"`");if("object"!==o(t[m.value]))throw new Error("Invalid interpolation, component node must be a ReactElement or null: `"+m.value+"`","\n> "+s);if("componentClose"===m.type)throw new Error("Missing opening component token: `"+m.value+"`");if("componentOpen"===m.type){r=t[m.value],i=d;break}b.push(t[m.value])}else b.push(m.value);return r&&(u=function(e,t){var r,o,n=t[e],a=0;for(o=e+1;o<t.length;o++)if((r=t[o]).value===n.value){if("componentOpen"===r.type){a++;continue}if("componentClose"===r.type){if(0===a)return o;a--}}throw new Error("Missing closing component token `"+n.value+"`")}(i,e),p=l(e.slice(i+1,u),t),c=n.default.cloneElement(r,{},p),b.push(c),u<e.length-1&&(f=l(e.slice(u+1),t),b=b.concat(f))),1===b.length?b[0]:(b.forEach((function(e,t){e&&(h["interpolation-child-"+t]=e)})),(0,a.default)(h))}t.default=function(e){var t=e.mixedString,r=e.components,n=e.throwErrors;if(s=t,!r)return t;if("object"!==(void 0===r?"undefined":o(r))){if(n)throw new Error("Interpolation Error: unable to process `"+t+"` because components is not an object");return t}var a=(0,c.default)(t);try{return l(a,r)}catch(e){if(n)throw new Error("Interpolation Error: unable to process `"+t+"` because of error `"+e.message+"`");return t}}},674:function(e,t,r){"use strict";r.d(t,"a",(function(){return f})),r.d(t,"b",(function(){return O}));var o=r(0),n=(r(115),r(131),r(83),r(107),r(2)),a=r(101),c=r(51),i=r.n(c),s=r(42),l=(r(116),r(158),r(122)),u=r(111),m=r(33),d=r(57),p=function(e){var t=e.value,r=e.onChange,n=Object(m.useSettings)("wc_admin",["wcAdminSettings"]).wcAdminSettings.woocommerce_default_date_range,a=Object(l.parse)(t.replace(/&amp;/g,"&")),c=Object(d.getDateParamsFromQuery)(a,n),i=c.period,s=c.compare,p=c.before,f=c.after,b=Object(d.getCurrentDates)(a,n),h={period:i,compare:s,before:p,after:f,primaryDate:b.primary,secondaryDate:b.secondary};return Object(o.createElement)(u.DateRangeFilterPicker,{query:a,onRangeSelect:function(e){r({target:{name:"woocommerce_default_date_range",value:Object(l.stringify)(e)}})},dateQuery:h,isoDateFormat:d.isoDateFormat})},f=["processing","on-hold"],b=["completed","processing","refunded","cancelled","failed","pending","on-hold"],h=Object.keys(s.d).filter((function(e){return"refunded"!==e})).map((function(e){return{value:e,label:s.d[e],description:Object(n.sprintf)(Object(n.__)("Exclude the %s status from reports","woocommerce-admin"),s.d[e])}})),v=Object(s.g)("unregisteredOrderStatuses",{}),g=[{key:"defaultStatuses",options:h.filter((function(e){return b.includes(e.value)}))},{key:"customStatuses",label:Object(n.__)("Custom Statuses","woocommerce-admin"),options:h.filter((function(e){return!b.includes(e.value)}))},{key:"unregisteredStatuses",label:Object(n.__)("Unregistered Statuses","woocommerce-admin"),options:Object.keys(v).map((function(e){return{value:e,label:e,description:Object(n.sprintf)(Object(n.__)("Exclude the %s status from reports","woocommerce-admin"),e)}}))}],O=Object(a.applyFilters)("woocommerce_admin_analytics_settings",{woocommerce_excluded_report_order_statuses:{label:Object(n.__)("Excluded Statuses:","woocommerce-admin"),inputType:"checkboxGroup",options:g,helpText:i()({mixedString:Object(n.__)("Orders with these statuses are excluded from the totals in your reports. The {{strong}}Refunded{{/strong}} status can not be excluded.","woocommerce-admin"),components:{strong:Object(o.createElement)("strong",null)}}),defaultValue:["pending","cancelled","failed"]},woocommerce_actionable_order_statuses:{label:Object(n.__)("Actionable Statuses:","woocommerce-admin"),inputType:"checkboxGroup",options:g,helpText:Object(n.__)("Orders with these statuses require action on behalf of the store admin. These orders will show up in the Home Screen - Orders task.","woocommerce-admin"),defaultValue:f},woocommerce_default_date_range:{name:"woocommerce_default_date_range",label:Object(n.__)("Default Date Range:","woocommerce-admin"),inputType:"component",component:p,helpText:Object(n.__)("Select a default date range. When no range is selected, reports will be viewed by the default date range.","woocommerce-admin"),defaultValue:"period=month&compare=previous_year"}})},685:function(e,t,r){},686:function(e,t,r){},687:function(e,t,r){},764:function(e,t,r){"use strict";r.r(t);r(125),r(150),r(126),r(151);var o=r(39),n=r.n(o),a=r(29),c=r.n(a),i=r(4),s=r.n(i),l=r(0),u=(r(83),r(281),r(127),r(131),r(115),r(2)),m=r(5),d=r(34),p=r(15),f=r(111),b=r(33),h=r(44),v=(r(685),r(674)),g=(r(174),r(13)),O=r.n(g),_=r(14),y=r.n(_),j=r(10),w=r.n(j),S=r(16),E=r.n(S),k=r(17),I=r.n(k),C=r(7),T=r.n(C),P=(r(113),r(157),r(107),r(204),r(1)),N=r.n(P),R=r(3);r(686);function x(e){var t=function(){if("undefined"==typeof Reflect||!Reflect.construct)return!1;if(Reflect.construct.sham)return!1;if("function"==typeof Proxy)return!0;try{return Boolean.prototype.valueOf.call(Reflect.construct(Boolean,[],(function(){}))),!0}catch(e){return!1}}();return function(){var r,o=T()(e);if(t){var n=T()(this).constructor;r=Reflect.construct(o,arguments,n)}else r=o.apply(this,arguments);return I()(this,r)}}var D=function(e){E()(r,e);var t=x(r);function r(e){var o;return O()(this,r),o=t.call(this,e),s()(w()(o),"renderInput",(function(){var e=o.props,t=e.handleChange,r=e.name,a=e.inputText,c=e.inputType,i=e.options,s=e.value,u=e.component,d=o.state.disabled;switch(c){case"checkboxGroup":return i.map((function(e){return e.options.length>0&&Object(l.createElement)("div",{className:"woocommerce-setting__options-group",key:e.key,"aria-labelledby":r+"-label"},e.label&&Object(l.createElement)("span",{className:"woocommerce-setting__options-group-label"},e.label),o.renderCheckboxOptions(e.options))}));case"checkbox":return o.renderCheckboxOptions(i);case"button":return Object(l.createElement)(m.Button,{isSecondary:!0,onClick:o.handleInputCallback,disabled:d},a);case"component":var p=u;return Object(l.createElement)(p,n()({value:s,onChange:t},o.props));case"text":default:var f=Object(R.uniqueId)(r);return Object(l.createElement)("input",{id:f,type:"text",name:r,onChange:t,value:s,placeholder:a,disabled:d})}})),s()(w()(o),"handleInputCallback",(function(){var e=o.props,t=e.createNotice,r=e.callback;if("function"==typeof r)return new Promise((function(e,n){o.setState({disabled:!0}),r(e,n,t)})).then((function(){o.setState({disabled:!1})})).catch((function(){o.setState({disabled:!1})}))})),o.state={disabled:!1},o}return y()(r,[{key:"renderCheckboxOptions",value:function(e){var t=this.props,r=t.handleChange,o=t.name,n=t.value,a=this.state.disabled;return e.map((function(e){return Object(l.createElement)(m.CheckboxControl,{key:o+"-"+e.value,label:e.label,name:o,checked:n&&n.includes(e.value),onChange:function(t){return r({target:{checked:t,name:o,type:"checkbox",value:e.value}})},disabled:a})}))}},{key:"render",value:function(){var e=this.props,t=e.helpText,r=e.label,o=e.name;return Object(l.createElement)("div",{className:"woocommerce-setting"},Object(l.createElement)("div",{className:"woocommerce-setting__label",id:o+"-label"},r),Object(l.createElement)("div",{className:"woocommerce-setting__input"},this.renderInput(),t&&Object(l.createElement)("span",{className:"woocommerce-setting__help"},t)))}}]),r}(l.Component);D.propTypes={callback:N.a.func,handleChange:N.a.func.isRequired,helpText:N.a.oneOfType([N.a.string,N.a.array]),inputText:N.a.string,inputType:N.a.oneOf(["button","checkbox","checkboxGroup","text","component"]),label:N.a.string.isRequired,name:N.a.string.isRequired,options:N.a.arrayOf(N.a.shape({value:N.a.string,label:N.a.string,description:N.a.string,key:N.a.string,options:N.a.array})),value:N.a.oneOfType([N.a.string,N.a.array])};var A=Object(d.compose)(Object(p.withDispatch)((function(e){return{createNotice:e("core/notices").createNotice}})))(D),F=(r(328),r(21)),M=r.n(F),B=function(e,t,r){var o={};if(r&&(o.skip_existing=!0),"all"!==t.label)if("custom"===t.label){var n=M()().diff(M()(t.date,e),"days",!0);o.days=Math.floor(n)}else o.days=parseInt(t.label,10);return o},V=r(38);var z=Object(d.compose)([Object(p.withSelect)((function(e){var t=(0,e(b.IMPORT_STORE_NAME).getFormSettings)();return{selectedPeriod:t.period,skipChecked:t.skipPrevious}})),Object(p.withDispatch)((function(e){var t=e(b.IMPORT_STORE_NAME),r=t.updateImportation,o=t.setImportStarted;return{createNotice:e("core/notices").createNotice,setImportStarted:o,updateImportation:r}}))])((function(e){var t,r=e.clearStatusAndTotalsCache,o=e.createNotice,n=e.dateFormat,a=e.importDate,c=e.onImportStarted,i=e.selectedPeriod,s=e.stopImport,d=e.skipChecked,p=e.status,f=e.setImportStarted,b=e.updateImportation,v=function(){var e=Object(V.addQueryArgs)("/wc-analytics/reports/import",B(n,i,d)),t=Object(u.__)("There was a problem rebuilding your report data.","woocommerce-admin");O(e,t,!0),c()},g=function(){s();var e=Object(u.__)("There was a problem stopping your current import.","woocommerce-admin");O("/wc-analytics/reports/import/cancel",e)},O=function(e,t){var r=arguments.length>2&&void 0!==arguments[2]&&arguments[2];b(e,r).then((function(e){"success"===e.status?o("success",e.message):(o("error",t),f(!1),s())})).catch((function(e){e&&e.message&&(o("error",e.message),f(!1),s())}))},_=function(){var e=Object(u.__)("There was a problem deleting your previous data.","woocommerce-admin");O("/wc-analytics/reports/import/delete",e),Object(h.recordEvent)("analytics_import_delete_previous"),f(!1)},y=function(){f(!1),r()};return Object(l.createElement)("div",{className:"woocommerce-settings__actions woocommerce-settings-historical-data__actions"},(t="ready"!==p,["initializing","customers","orders","finalizing"].includes(p)?Object(l.createElement)(l.Fragment,null,Object(l.createElement)(m.Button,{className:"woocommerce-settings-historical-data__action-button",isPrimary:!0,onClick:g},Object(u.__)("Stop Import","woocommerce-admin")),Object(l.createElement)("div",{className:"woocommerce-setting__help woocommerce-settings-historical-data__action-help"},Object(u.__)("Imported data will not be lost if the import is stopped.","woocommerce-admin"),Object(l.createElement)("br",null),Object(u.__)("Navigating away from this page will not affect the import.","woocommerce-admin"))):["ready","nothing"].includes(p)?a?Object(l.createElement)(l.Fragment,null,Object(l.createElement)(m.Button,{isPrimary:!0,onClick:v,disabled:t},Object(u.__)("Start","woocommerce-admin")),Object(l.createElement)(m.Button,{isSecondary:!0,onClick:_},Object(u.__)("Delete Previously Imported Data","woocommerce-admin"))):Object(l.createElement)(l.Fragment,null,Object(l.createElement)(m.Button,{isPrimary:!0,onClick:v,disabled:t},Object(u.__)("Start","woocommerce-admin"))):("error"===p&&o("error",Object(u.__)("Something went wrong with the importation process.","woocommerce-admin")),Object(l.createElement)(l.Fragment,null,Object(l.createElement)(m.Button,{isSecondary:!0,onClick:y},Object(u.__)("Re-import Data","woocommerce-admin")),Object(l.createElement)(m.Button,{isSecondary:!0,onClick:_},Object(u.__)("Delete Previously Imported Data","woocommerce-admin"))))))})),Y=r(57);var q=Object(p.withDispatch)((function(e){return{setImportPeriod:e(b.IMPORT_STORE_NAME).setImportPeriod}}))((function(e){var t,r=e.dateFormat,o=e.disabled,n=e.setImportPeriod,a=e.value,c=function(e){e.date&&e.date.isValid?n(e.date.format(r),!0):n(e.text,!0)},i=function(e){return e.isValid()&&a.date.length===r.length?e.isAfter(new Date,"day")?Y.dateValidationMessages.future:null:Y.dateValidationMessages.invalid};return Object(l.createElement)("div",{className:"woocommerce-settings-historical-data__columns"},Object(l.createElement)("div",{className:"woocommerce-settings-historical-data__column"},Object(l.createElement)(m.SelectControl,{label:Object(u.__)("Import Historical Data","woocommerce-admin"),value:a.label,disabled:o,onChange:function(e){n(e)},options:[{label:"All",value:"all"},{label:"Last 365 days",value:"365"},{label:"Last 90 days",value:"90"},{label:"Last 30 days",value:"30"},{label:"Last 7 days",value:"7"},{label:"Last 24 hours",value:"1"},{label:"Custom",value:"custom"}]})),"custom"===a.label&&(t=M()(a.date,r),Object(l.createElement)("div",{className:"woocommerce-settings-historical-data__column"},Object(l.createElement)("div",{className:"woocommerce-settings-historical-data__column-label"},Object(u.__)("Beginning on","woocommerce-admin")),Object(l.createElement)(f.DatePicker,{date:t.isValid()?t.toDate():null,dateFormat:r,disabled:o,error:i(t),isInvalidDate:function(e){return M()(e).isAfter(new Date,"day")},onUpdate:c,text:a.date}))))}));var L=function(e){var t=e.label,r=e.progress,o=e.total,n=Object(u.sprintf)(Object(u.__)("Imported %(label)s","woocommerce-admin"),{label:t}),a=Object(R.isNil)(o)?null:Object(u.sprintf)(Object(u.__)("%(progress)s of %(total)s","woocommerce-admin"),{progress:r||0,total:o});return Object(l.createElement)("div",{className:"woocommerce-settings-historical-data__progress"},Object(l.createElement)("span",{className:"woocommerce-settings-historical-data__progress-label"},n),a&&Object(l.createElement)("span",{className:"woocommerce-settings-historical-data__progress-label"},a),Object(l.createElement)("progress",{className:"woocommerce-settings-historical-data__progress-bar",max:o,value:r||0}))},H=r(101);var U=function(e){var t=e.importDate,r=e.status,o=Object(H.applyFilters)("woocommerce_admin_import_status",{nothing:Object(u.__)("Nothing To Import","woocommerce-admin"),ready:Object(u.__)("Ready To Import","woocommerce-admin"),initializing:[Object(u.__)("Initializing","woocommerce-admin"),Object(l.createElement)(m.Spinner,{key:"spinner"})],customers:[Object(u.__)("Importing Customers","woocommerce-admin"),Object(l.createElement)(m.Spinner,{key:"spinner"})],orders:[Object(u.__)("Importing Orders","woocommerce-admin"),Object(l.createElement)(m.Spinner,{key:"spinner"})],finalizing:[Object(u.__)("Finalizing","woocommerce-admin"),Object(l.createElement)(m.Spinner,{key:"spinner"})],finished:-1===t?Object(u.__)("All historical data imported","woocommerce-admin"):Object(u.sprintf)(Object(u.__)("Historical data from %s onward imported","woocommerce-admin"),M()(t).format("YYYY-MM-DD"))});return Object(l.createElement)("span",{className:"woocommerce-settings-historical-data__status"},Object(u.__)("Status:","woocommerce-admin")+" ",o[r])};var G=Object(p.withDispatch)((function(e){return{setSkipPrevious:e(b.IMPORT_STORE_NAME).setSkipPrevious}}))((function(e){var t=e.checked,r=e.disabled,o=e.setSkipPrevious;return Object(l.createElement)(m.CheckboxControl,{className:"woocommerce-settings-historical-data__skip-checkbox",checked:t,disabled:r,label:Object(u.__)("Skip previously imported customers and orders","woocommerce-admin"),onChange:function(e){o(e)}})}));r(687);function W(e,t){var r=Object.keys(e);if(Object.getOwnPropertySymbols){var o=Object.getOwnPropertySymbols(e);t&&(o=o.filter((function(t){return Object.getOwnPropertyDescriptor(e,t).enumerable}))),r.push.apply(r,o)}return r}function $(e){for(var t=1;t<arguments.length;t++){var r=null!=arguments[t]?arguments[t]:{};t%2?W(Object(r),!0).forEach((function(t){s()(e,t,r[t])})):Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(r)):W(Object(r)).forEach((function(t){Object.defineProperty(e,t,Object.getOwnPropertyDescriptor(r,t))}))}return e}function Q(e){var t=function(){if("undefined"==typeof Reflect||!Reflect.construct)return!1;if(Reflect.construct.sham)return!1;if("function"==typeof Proxy)return!0;try{return Boolean.prototype.valueOf.call(Reflect.construct(Boolean,[],(function(){}))),!0}catch(e){return!1}}();return function(){var r,o=T()(e);if(t){var n=T()(this).constructor;r=Reflect.construct(o,arguments,n)}else r=o.apply(this,arguments);return I()(this,r)}}var J=function(e){E()(r,e);var t=Q(r);function r(){return O()(this,r),t.apply(this,arguments)}return y()(r,[{key:"render",value:function(){var e=this.props,t=e.customersProgress,r=e.customersTotal,o=e.dateFormat,n=e.importDate,a=e.inProgress,c=e.lastImportStartTimestamp,i=e.clearStatusAndTotalsCache,s=e.ordersProgress,m=e.ordersTotal,d=e.onImportStarted,p=e.period,b=e.stopImport,h=e.skipChecked,v=e.status;return Object(l.createElement)(l.Fragment,null,Object(l.createElement)(f.SectionHeader,{title:Object(u.__)("Import Historical Data","woocommerce-admin")}),Object(l.createElement)("div",{className:"woocommerce-settings__wrapper"},Object(l.createElement)("div",{className:"woocommerce-setting"},Object(l.createElement)("div",{className:"woocommerce-setting__input"},Object(l.createElement)("span",{className:"woocommerce-setting__help"},Object(u.__)("This tool populates historical analytics data by processing customers and orders created prior to activating WooCommerce Admin.","woocommerce-admin")),"finished"!==v&&Object(l.createElement)(l.Fragment,null,Object(l.createElement)(q,{dateFormat:o,disabled:a,value:p}),Object(l.createElement)(G,{disabled:a,checked:h}),Object(l.createElement)(L,{label:Object(u.__)("Registered Customers","woocommerce-admin"),progress:t,total:r}),Object(l.createElement)(L,{label:Object(u.__)("Orders and Refunds","woocommerce-admin"),progress:s,total:m})),Object(l.createElement)(U,{importDate:n,status:v})))),Object(l.createElement)(z,{clearStatusAndTotalsCache:i,dateFormat:o,importDate:n,lastImportStartTimestamp:c,onImportStarted:d,stopImport:b,status:v}))}}]),r}(l.Component),K=Object(p.withSelect)((function(e,t){var r=e(b.IMPORT_STORE_NAME),o=r.getImportError,n=r.getImportStatus,a=r.getImportTotals,c=t.activeImport,i=t.cacheNeedsClearing,s=t.dateFormat,l=t.inProgress,u=t.onImportStarted,m=t.onImportFinished,d=t.period,p=t.startStatusCheckInterval,f=t.skipChecked,h=B(s,d,f),v=a(h),g=v.customers,O=v.orders,_=v.lastImportStartTimestamp,y=n(_),j=y.customers,w=y.imported_from,S=y.is_importing,E=y.orders,k=j||{},I=k.imported,C=k.total,T=E||{},P=T.imported,N=T.total,x=Boolean(o(_)||o(h));Boolean(!_&&!l&&!0===S)&&u();var D=Boolean(l&&!i&&!1===S&&(C>0||N>0)&&I===C&&P===N),A={customersTotal:g,isError:x,ordersTotal:O};c&&(A={cacheNeedsClearing:i,customersProgress:I,customersTotal:Object(R.isNil)(C)?g:C,inProgress:l,isError:x,ordersProgress:P,ordersTotal:Object(R.isNil)(N)?O:N});var F=function(e){var t=e.cacheNeedsClearing,r=e.customersProgress,o=e.customersTotal,n=e.isError,a=e.inProgress,c=e.ordersProgress,i=e.ordersTotal;return n?"error":a?Object(R.isNil)(r)||Object(R.isNil)(c)||Object(R.isNil)(o)||Object(R.isNil)(i)||t?"initializing":r<o?"customers":c<i?"orders":"finalizing":o>0||i>0?r===o&&c===i?"finished":"ready":"nothing"}(A);return"initializing"===F&&p(),D&&m(),$($({},A),{},{importDate:w,status:F})}))(J);function X(e){var t=function(){if("undefined"==typeof Reflect||!Reflect.construct)return!1;if(Reflect.construct.sham)return!1;if("function"==typeof Proxy)return!0;try{return Boolean.prototype.valueOf.call(Reflect.construct(Boolean,[],(function(){}))),!0}catch(e){return!1}}();return function(){var r,o=T()(e);if(t){var n=T()(this).constructor;r=Reflect.construct(o,arguments,n)}else r=o.apply(this,arguments);return I()(this,r)}}var Z=function(e){E()(r,e);var t=X(r);function r(){var e;return O()(this,r),(e=t.apply(this,arguments)).dateFormat=Object(u.__)("MM/DD/YYYY","woocommerce-admin"),e.intervalId=-1,e.lastImportStopTimestamp=0,e.cacheNeedsClearing=!0,e.onImportFinished=e.onImportFinished.bind(w()(e)),e.onImportStarted=e.onImportStarted.bind(w()(e)),e.clearStatusAndTotalsCache=e.clearStatusAndTotalsCache.bind(w()(e)),e.stopImport=e.stopImport.bind(w()(e)),e.startStatusCheckInterval=e.startStatusCheckInterval.bind(w()(e)),e.cancelStatusCheckInterval=e.cancelStatusCheckInterval.bind(w()(e)),e}return y()(r,[{key:"startStatusCheckInterval",value:function(){var e=this;this.intervalId<0&&(this.cacheNeedsClearing=!0,this.intervalId=setInterval((function(){e.clearCache("getImportStatus")}),3*b.SECOND))}},{key:"cancelStatusCheckInterval",value:function(){clearInterval(this.intervalId),this.intervalId=-1}},{key:"clearCache",value:function(e,t){var r=this,o=this.props,n=o.invalidateResolution,a=o.lastImportStartTimestamp;n(e,["getImportStatus"===e?a:t]).then((function(){r.cacheNeedsClearing=!1}))}},{key:"stopImport",value:function(){this.cancelStatusCheckInterval(),this.lastImportStopTimestamp=Date.now()}},{key:"onImportFinished",value:function(){var e=this.props.debouncedSpeak;this.cacheNeedsClearing||(e("Import complete"),this.stopImport())}},{key:"onImportStarted",value:function(){var e=this.props,t=e.notes,r=e.setImportStarted,o=e.updateNote,n=t.find((function(e){return"wc-admin-historical-data"===e.name}));n&&o(n.id,{status:"actioned"}),r(!0)}},{key:"clearStatusAndTotalsCache",value:function(){var e=this.props,t=e.selectedPeriod,r=e.skipChecked,o=B(this.dateFormat,t,r);this.clearCache("getImportTotals",o),this.clearCache("getImportStatus")}},{key:"isImportationInProgress",value:function(){var e=this.props.lastImportStartTimestamp;return void 0!==e&&void 0===this.lastImportStopTimestamp||e>this.lastImportStopTimestamp}},{key:"render",value:function(){var e=this.props,t=e.activeImport,r=e.createNotice,o=e.lastImportStartTimestamp,n=e.selectedPeriod,a=e.skipChecked;return Object(l.createElement)(K,{activeImport:t,cacheNeedsClearing:this.cacheNeedsClearing,createNotice:r,dateFormat:this.dateFormat,inProgress:this.isImportationInProgress(),onImportFinished:this.onImportFinished,onImportStarted:this.onImportStarted,lastImportStartTimestamp:o,clearStatusAndTotalsCache:this.clearStatusAndTotalsCache,period:n,skipChecked:a,startStatusCheckInterval:this.startStatusCheckInterval,stopImport:this.stopImport})}}]),r}(l.Component),ee=Object(d.compose)([Object(p.withSelect)((function(e){var t=e(b.NOTES_STORE_NAME).getNotes,r=e(b.IMPORT_STORE_NAME),o=r.getImportStarted,n=r.getFormSettings,a=t({page:1,per_page:b.QUERY_DEFAULTS.pageSize,type:"update",status:"unactioned"}),c=o(),i=c.activeImport,s=c.lastImportStartTimestamp,l=n();return{activeImport:i,lastImportStartTimestamp:s,notes:a,selectedPeriod:l.period,skipChecked:l.skipPrevious}})),Object(p.withDispatch)((function(e){var t=e(b.NOTES_STORE_NAME).updateNote,r=e(b.IMPORT_STORE_NAME);return{invalidateResolution:r.invalidateResolution,setImportStarted:r.setImportStarted,updateNote:t}})),m.withSpokenMessages])(Z);function te(e,t){var r=Object.keys(e);if(Object.getOwnPropertySymbols){var o=Object.getOwnPropertySymbols(e);t&&(o=o.filter((function(t){return Object.getOwnPropertyDescriptor(e,t).enumerable}))),r.push.apply(r,o)}return r}t.default=Object(d.compose)(Object(p.withDispatch)((function(e){return{createNotice:e("core/notices").createNotice}})))((function(e){var t=e.createNotice,r=e.query,o=Object(b.useSettings)("wc_admin",["wcAdminSettings"]),a=o.settingsError,i=o.isRequesting,d=o.isDirty,p=o.persistSettings,g=o.updateAndPersistSettings,O=o.updateSettings,_=o.wcAdminSettings,y=Object(l.useRef)(!1);Object(l.useEffect)((function(){function e(e){if(d)return e.returnValue=Object(u.__)("You have unsaved changes. If you proceed, they will be lost.","woocommerce-admin"),e.returnValue}return window.addEventListener("beforeunload",e),function(){return window.removeEventListener("beforeunload",e)}}),[d]),Object(l.useEffect)((function(){i?y.current=!0:!i&&y.current&&(a?t("error",Object(u.__)("There was an error saving your settings. Please try again.","woocommerce-admin")):t("success",Object(u.__)("Your settings have been successfully saved.","woocommerce-admin")),y.current=!1)}),[i,a,t]);var j=function(e){var t=e.target,r=t.checked,o=t.name,n=t.type,a=t.value,i=function(e){for(var t=1;t<arguments.length;t++){var r=null!=arguments[t]?arguments[t]:{};t%2?te(Object(r),!0).forEach((function(t){s()(e,t,r[t])})):Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(r)):te(Object(r)).forEach((function(t){Object.defineProperty(e,t,Object.getOwnPropertyDescriptor(r,t))}))}return e}({},_);i[o]="checkbox"===n?r?[].concat(c()(i[o]),[a]):i[o].filter((function(e){return e!==a})):a,O("wcAdminSettings",i)};return Object(l.createElement)(l.Fragment,null,Object(l.createElement)(f.SectionHeader,{title:Object(u.__)("Analytics Settings","woocommerce-admin")}),Object(l.createElement)("div",{className:"woocommerce-settings__wrapper"},Object.keys(v.b).map((function(e){return Object(l.createElement)(A,n()({handleChange:j,value:_[e],key:e,name:e},v.b[e]))})),Object(l.createElement)("div",{className:"woocommerce-settings__actions"},Object(l.createElement)(m.Button,{isSecondary:!0,onClick:function(){if(window.confirm(Object(u.__)("Are you sure you want to reset all settings to default values?","woocommerce-admin"))){var e=Object.keys(v.b).reduce((function(e,t){return e[t]=v.b[t].defaultValue,e}),{});g("wcAdminSettings",e),Object(h.recordEvent)("analytics_settings_reset_defaults")}}},Object(u.__)("Reset Defaults","woocommerce-admin")),Object(l.createElement)(m.Button,{isPrimary:!0,isBusy:i,onClick:function(){p(),Object(h.recordEvent)("analytics_settings_save",_),r.period=void 0,r.compare=void 0,r.before=void 0,r.after=void 0,r.interval=void 0,r.type=void 0,window.wpNavMenuUrlUpdate(r)}},Object(u.__)("Save Settings","woocommerce-admin")))),"true"===r.import?Object(l.createElement)(f.ScrollTo,{offset:"-56"},Object(l.createElement)(ee,{createNotice:t})):Object(l.createElement)(ee,{createNotice:t}))}))}}]);