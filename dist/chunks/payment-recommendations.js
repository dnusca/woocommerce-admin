(window.__wcAdmin_webpackJsonp=window.__wcAdmin_webpackJsonp||[]).push([[47,54],{197:function(e,t,n){"use strict";function o(e){return function(){return e}}var r=function(){};r.thatReturns=o,r.thatReturnsFalse=o(!1),r.thatReturnsTrue=o(!0),r.thatReturnsNull=o(null),r.thatReturnsThis=function(){return this},r.thatReturnsArgument=function(e){return e},e.exports=r},234:function(e,t,n){"use strict";var o=n(11),r="function"==typeof Symbol&&Symbol.for&&Symbol.for("react.element")||60103,c=n(197),i=n(235),a=n(236),s="function"==typeof Symbol&&Symbol.iterator;function u(e,t){return e&&"object"==typeof e&&null!=e.key?(n=e.key,o={"=":"=0",":":"=2"},"$"+(""+n).replace(/[=:]/g,(function(e){return o[e]}))):t.toString(36);var n,o}function l(e,t,n,o){var c,a=typeof e;if("undefined"!==a&&"boolean"!==a||(e=null),null===e||"string"===a||"number"===a||"object"===a&&e.$$typeof===r)return n(o,e,""===t?"."+u(e,0):t),1;var m=0,d=""===t?".":t+":";if(Array.isArray(e))for(var f=0;f<e.length;f++)m+=l(c=e[f],d+u(c,f),n,o);else{var p=function(e){var t=e&&(s&&e[s]||e["@@iterator"]);if("function"==typeof t)return t}(e);if(p){0;for(var h,y=p.call(e),v=0;!(h=y.next()).done;)m+=l(c=h.value,d+u(c,v++),n,o)}else if("object"===a){0;var g=""+e;i(!1,"Objects are not valid as a React child (found: %s).%s","[object Object]"===g?"object with keys {"+Object.keys(e).join(", ")+"}":g,"")}}return m}var m=/\/+/g;function d(e){return(""+e).replace(m,"$&/")}var f,p,h=y,y=function(e){if(this.instancePool.length){var t=this.instancePool.pop();return this.call(t,e),t}return new this(e)},v=function(e){i(e instanceof this,"Trying to release an instance into a pool of a different type."),e.destructor(),this.instancePool.length<this.poolSize&&this.instancePool.push(e)};function g(e,t,n,o){this.result=e,this.keyPrefix=t,this.func=n,this.context=o,this.count=0}function b(e,t,n){var r,i,a=e.result,s=e.keyPrefix,u=e.func,l=e.context,m=u.call(l,t,e.count++);Array.isArray(m)?w(m,a,n,c.thatReturnsArgument):null!=m&&(o.isValidElement(m)&&(r=m,i=s+(!m.key||t&&t.key===m.key?"":d(m.key)+"/")+n,m=o.cloneElement(r,{key:i},void 0!==r.props?r.props.children:void 0)),a.push(m))}function w(e,t,n,o,r){var c="";null!=n&&(c=d(n)+"/");var i=g.getPooled(t,c,o,r);!function(e,t,n){null==e||l(e,"",t,n)}(e,b,i),g.release(i)}g.prototype.destructor=function(){this.result=null,this.keyPrefix=null,this.func=null,this.context=null,this.count=0},f=function(e,t,n,o){if(this.instancePool.length){var r=this.instancePool.pop();return this.call(r,e,t,n,o),r}return new this(e,t,n,o)},(p=g).instancePool=[],p.getPooled=f||h,p.poolSize||(p.poolSize=10),p.release=v;e.exports=function(e){if("object"!=typeof e||!e||Array.isArray(e))return a(!1,"React.addons.createFragment only accepts a single object. Got: %s",e),e;if(o.isValidElement(e))return a(!1,"React.addons.createFragment does not accept a ReactElement without a wrapper object."),e;i(1!==e.nodeType,"React.addons.createFragment(...): Encountered an invalid child; DOM elements are not valid children of React components.");var t=[];for(var n in e)w(e[n],t,n,c.thatReturnsArgument);return t}},235:function(e,t,n){"use strict";e.exports=function(e,t,n,o,r,c,i,a){if(!e){var s;if(void 0===t)s=new Error("Minified exception occurred; use the non-minified dev environment for the full error message and additional helpful warnings.");else{var u=[n,o,r,c,i,a],l=0;(s=new Error(t.replace(/%s/g,(function(){return u[l++]})))).name="Invariant Violation"}throw s.framesToPop=1,s}}},236:function(e,t,n){"use strict";var o=n(197);e.exports=o},237:function(e,t,n){"use strict";function o(e){return e.match(/^\{\{\//)?{type:"componentClose",value:e.replace(/\W/g,"")}:e.match(/\/\}\}$/)?{type:"componentSelfClosing",value:e.replace(/\W/g,"")}:e.match(/^\{\{/)?{type:"componentOpen",value:e.replace(/\W/g,"")}:{type:"string",value:e}}e.exports=function(e){return e.split(/(\{\{\/?\s*\w+\s*\/?\}\})/g).map(o)}},51:function(e,t,n){"use strict";Object.defineProperty(t,"__esModule",{value:!0});var o="function"==typeof Symbol&&"symbol"==typeof Symbol.iterator?function(e){return typeof e}:function(e){return e&&"function"==typeof Symbol&&e.constructor===Symbol&&e!==Symbol.prototype?"symbol":typeof e},r=a(n(11)),c=a(n(234)),i=a(n(237));function a(e){return e&&e.__esModule?e:{default:e}}var s=void 0;function u(e,t){var n,i,a,l,m,d,f,p,h=[],y={};for(d=0;d<e.length;d++)if("string"!==(m=e[d]).type){if(!t.hasOwnProperty(m.value)||void 0===t[m.value])throw new Error("Invalid interpolation, missing component node: `"+m.value+"`");if("object"!==o(t[m.value]))throw new Error("Invalid interpolation, component node must be a ReactElement or null: `"+m.value+"`","\n> "+s);if("componentClose"===m.type)throw new Error("Missing opening component token: `"+m.value+"`");if("componentOpen"===m.type){n=t[m.value],a=d;break}h.push(t[m.value])}else h.push(m.value);return n&&(l=function(e,t){var n,o,r=t[e],c=0;for(o=e+1;o<t.length;o++)if((n=t[o]).value===r.value){if("componentOpen"===n.type){c++;continue}if("componentClose"===n.type){if(0===c)return o;c--}}throw new Error("Missing closing component token `"+r.value+"`")}(a,e),f=u(e.slice(a+1,l),t),i=r.default.cloneElement(n,{},f),h.push(i),l<e.length-1&&(p=u(e.slice(l+1),t),h=h.concat(p))),1===h.length?h[0]:(h.forEach((function(e,t){e&&(y["interpolation-child-"+t]=e)})),(0,c.default)(y))}t.default=function(e){var t=e.mixedString,n=e.components,r=e.throwErrors;if(s=t,!n)return t;if("object"!==(void 0===n?"undefined":o(n))){if(r)throw new Error("Interpolation Error: unable to process `"+t+"` because components is not an object");return t}var c=(0,i.default)(t);try{return u(c,n)}catch(e){if(r)throw new Error("Interpolation Error: unable to process `"+t+"` because of error `"+e.message+"`");return t}}},634:function(e,t,n){"use strict";n.d(t,"a",(function(){return r}));n(83),n(127),n(277);var o=n(15);function r(e){var t=Object(o.dispatch)("core/notices").createNotice;e.error_data&&e.errors&&Object.keys(e.errors).length?Object.keys(e.errors).forEach((function(n){t("error",e.errors[n].join(" "))})):e.message&&t(e.code?"error":"success",e.message)}},639:function(e,t,n){"use strict";n.r(t);var o=n(30),r=n.n(o),c=n(0),i=n(2),a=n(28),s=n(51),u=n.n(s),l=n(112),m=n(641);t.default=function(){var e="1"===Object(a.getQuery)()["wcpay-connection-success"],t=Object(c.useState)(e),n=r()(t,2),o=n[0],s=n[1];if(!o)return null;var d=function(){s(!1),Object(a.updateQueryString)({"wcpay-connection-success":void 0})},f=Object(i.__)("Help us build a better WooCommerce Payments experience","woocommerce-admin"),p=u()({mixedString:Object(i.__)("By agreeing to share non-sensitive {{link}}usage data{{/link}}, you’ll help us improve features and optimize the WooCommerce Payments experience. You can opt out at any time.","woocommerce-admin"),components:{link:Object(c.createElement)(l.Link,{href:"https://woocommerce.com/usage-tracking",target:"_blank",type:"external"})}});return Object(c.createElement)(m.a,{isDismissible:!1,title:f,message:p,acceptActionText:Object(i.__)("I agree","woocommerce-admin"),dismissActionText:Object(i.__)("No thanks","woocommerce-admin"),onContinue:d,onClose:d})}},641:function(e,t,n){"use strict";n(174);var o=n(67),r=n.n(o),c=n(13),i=n.n(c),a=n(14),s=n.n(a),u=n(16),l=n.n(u),m=n(17),d=n.n(m),f=n(7),p=n.n(f),h=n(0),y=n(6),v=n.n(y),g=n(2),b=n(34),w=n(15),_=n(51),O=n.n(_),j=n(5),E=n(112),k=n(33),S=n(284);function R(e){var t=function(){if("undefined"==typeof Reflect||!Reflect.construct)return!1;if(Reflect.construct.sham)return!1;if("function"==typeof Proxy)return!0;try{return Boolean.prototype.valueOf.call(Reflect.construct(Boolean,[],(function(){}))),!0}catch(e){return!1}}();return function(){var n,o=p()(e);if(t){var r=p()(this).constructor;n=Reflect.construct(o,arguments,r)}else n=o.apply(this,arguments);return d()(this,n)}}var x=function(e){l()(o,e);var t,n=R(o);function o(e){var t;return i()(this,o),(t=n.call(this,e)).state={isLoadingScripts:!1,isRequestStarted:!1},t}return s()(o,[{key:"componentDidUpdate",value:(t=r()(v.a.mark((function e(t,n){var o,r,c,i,a,s,u,l,m,d;return v.a.wrap((function(e){for(;;)switch(e.prev=e.next){case 0:if(o=this.props,r=o.hasErrors,c=o.isRequesting,i=o.onClose,a=o.onContinue,s=o.createNotice,u=this.state,l=u.isLoadingScripts,u.isRequestStarted){e.next=4;break}return e.abrupt("return");case 4:m=!c&&!l&&(t.isRequesting||n.isLoadingScripts)&&!r,d=!c&&t.isRequesting&&r,m&&(i(),a()),d&&(s("error",Object(g.__)("There was a problem updating your preferences","woocommerce-admin")),i());case 8:case"end":return e.stop()}}),e,this)}))),function(e,n){return t.apply(this,arguments)})},{key:"updateTracking",value:function(e){var t=this,n=e.allowTracking,o=this.props.updateOptions;n&&"function"==typeof window.wcTracks.enable?(this.setState({isLoadingScripts:!0}),window.wcTracks.enable((function(){t._isMounted&&(Object(S.initializeExPlat)(),t.setState({isLoadingScripts:!1}))}))):n||(window.wcTracks.isEnabled=!1);var r=n?"yes":"no";this.setState({isRequestStarted:!0}),o({woocommerce_allow_tracking:r})}},{key:"componentDidMount",value:function(){this._isMounted=!0}},{key:"componentWillUnmount",value:function(){this._isMounted=!1}},{key:"render",value:function(){var e=this;if(this.props.allowTracking){var t=this.props,n=t.onClose,o=t.onContinue;return n(),o(),null}var r=this.props,c=r.isRequesting,i=r.title,a=void 0===i?Object(g.__)("Build a better WooCommerce","woocommerce-admin"):i,s=r.message,u=void 0===s?O()({mixedString:Object(g.__)("Get improved features and faster fixes by sharing non-sensitive data via {{link}}usage tracking{{/link}} that shows us how WooCommerce is used. No personal data is tracked or stored.","woocommerce-admin"),components:{link:Object(h.createElement)(E.Link,{href:"https://woocommerce.com/usage-tracking",target:"_blank",type:"external"})}}):s,l=r.dismissActionText,m=void 0===l?Object(g.__)("No thanks","woocommerce-admin"):l,d=r.acceptActionText,f=void 0===d?Object(g.__)("Yes, count me in!","woocommerce-admin"):d,p=this.state.isRequestStarted&&c;return Object(h.createElement)(j.Modal,{title:a,isDismissible:this.props.isDismissible,onRequestClose:function(){return e.props.onClose()},className:"woocommerce-usage-modal"},Object(h.createElement)("div",{className:"woocommerce-usage-modal__wrapper"},Object(h.createElement)("div",{className:"woocommerce-usage-modal__message"},u),Object(h.createElement)("div",{className:"woocommerce-usage-modal__actions"},Object(h.createElement)(j.Button,{isSecondary:!0,isBusy:p,onClick:function(){return e.updateTracking({allowTracking:!1})}},m),Object(h.createElement)(j.Button,{isPrimary:!0,isBusy:p,onClick:function(){return e.updateTracking({allowTracking:!0})}},f))))}}]),o}(h.Component);t.a=Object(b.compose)(Object(w.withSelect)((function(e){var t=e(k.OPTIONS_STORE_NAME),n=t.getOption,o=t.getOptionsUpdatingError,r=t.isOptionsUpdating;return{allowTracking:"yes"===n("woocommerce_allow_tracking"),isRequesting:Boolean(r()),hasErrors:Boolean(o())}})),Object(w.withDispatch)((function(e){return{createNotice:e("core/notices").createNotice,updateOptions:e(k.OPTIONS_STORE_NAME).updateOptions}})))(x)},643:function(e,t,n){"use strict";n.d(t,"d",(function(){return _})),n.d(t,"c",(function(){return R})),n.d(t,"a",(function(){return w})),n.d(t,"b",(function(){return o.default}));var o=n(639),r=(n(174),n(13)),c=n.n(r),i=n(14),a=n.n(i),s=n(16),u=n.n(s),l=n(17),m=n.n(l),d=n(7),f=n.n(d),p=n(2),h=n(0),y=n(15),v=n(28);function g(e){var t=function(){if("undefined"==typeof Reflect||!Reflect.construct)return!1;if(Reflect.construct.sham)return!1;if("function"==typeof Proxy)return!0;try{return Boolean.prototype.valueOf.call(Reflect.construct(Boolean,[],(function(){}))),!0}catch(e){return!1}}();return function(){var n,o=f()(e);if(t){var r=f()(this).constructor;n=Reflect.construct(o,arguments,r)}else n=o.apply(this,arguments);return m()(this,n)}}var b=function(e){u()(n,e);var t=g(n);function n(){return c()(this,n),t.apply(this,arguments)}return a()(n,[{key:"componentDidMount",value:function(){var e=this.props,t=e.createNotice,n=e.markConfigured;Object(v.getQuery)()["wcpay-connection-success"]&&(t("success",Object(p.__)("WooCommerce Payments connected successfully.","woocommerce-admin")),n("wcpay",{"wcpay-connection-success":"1"}))}},{key:"render",value:function(){return null}}]),n}(h.Component),w=Object(y.withDispatch)((function(e){return{createNotice:e("core/notices").createNotice}}))(b);n(108);function _(e){var t=["US","PR"];return window.wcAdminFeatures&&window.wcAdminFeatures["wcpay/support-international-countries"]&&t.push("AU","CA","DE","ES","FR","GB","IE","IT","NZ"),t.includes(e)}var O=n(48),j=n.n(O),E=n(33),k=n(44),S=n(634);function R(e,t,n){var o=Object(p.__)("There was an error connecting to WooCommerce Payments. Please try again or connect later in store settings.","woocommerce-admin");n(["woocommerce-payments"]).then((function(){Object(k.recordEvent)("woocommerce_payments_install",{context:"tasklist"}),j()({path:E.WC_ADMIN_NAMESPACE+"/plugins/connect-wcpay",method:"POST"}).then((function(e){window.location=e.connectUrl})).catch((function(){t("error",o),e()}))})).catch((function(t){Object(S.a)(t),e()}))}},721:function(e,t,n){"use strict";var o=Object.assign||function(e){for(var t,n=1;n<arguments.length;n++)for(var o in t=arguments[n])Object.prototype.hasOwnProperty.call(t,o)&&(e[o]=t[o]);return e};Object.defineProperty(t,"__esModule",{value:!0}),t.default=function(e){var t,n=e.size,r=void 0===n?24:n,c=e.onClick,a=(e.icon,e.className),s=function(e,t){var n={};for(var o in e)0<=t.indexOf(o)||Object.prototype.hasOwnProperty.call(e,o)&&(n[o]=e[o]);return n}(e,["size","onClick","icon","className"]),u=["gridicon","gridicons-external",a,(t=r,!(0!=t%18)&&"needs-offset"),!1,!1].filter(Boolean).join(" ");return i.default.createElement("svg",o({className:u,height:r,width:r,onClick:c},s,{xmlns:"http://www.w3.org/2000/svg",viewBox:"0 0 24 24"}),i.default.createElement("g",null,i.default.createElement("path",{d:"M19 13v6c0 1.105-.895 2-2 2H5c-1.105 0-2-.895-2-2V7c0-1.105.895-2 2-2h6v2H5v12h12v-6h2zM13 3v2h4.586l-7.793 7.793 1.414 1.414L19 6.414V11h2V3h-8z"})))};var r,c=n(11),i=(r=c)&&r.__esModule?r:{default:r};e.exports=t.default},722:function(e,t,n){},748:function(e,t,n){"use strict";n.r(t),n.d(t,"getPaymentRecommendationData",(function(){return j}));var o=n(4),r=n.n(o),c=n(30),i=n.n(c),a=n(0),s=(n(118),n(159),n(117),n(2)),u=n(15),l=n(99),m=n(5),d=n(112),f=n(58),p=n(33),h=n(44),y=n(721),v=n.n(y),g=(n(722),n(219)),b=n(42),w=n(634),_=n(643),O="woocommerce_setting_payments_recommendations_hidden";function j(e){var t,n=e(p.OPTIONS_STORE_NAME),o=n.getOption,r=n.isResolving,c=e(p.SETTINGS_STORE_NAME).getSettings,i=e(p.PLUGINS_STORE_NAME).getRecommendedPlugins,a=c("general").general,s=void 0===a?{}:a,u=o("woocommerce_show_marketplace_suggestions"),l=o(O),m=s.woocommerce_default_country?Object(g.b)(s.woocommerce_default_country):null,d=!!m&&Object(_.d)(m),f=!(r("getOption",[O])||r("getOption",["woocommerce_show_marketplace_suggestions"]))&&"yes"!==l&&"yes"===u&&d;return f&&(t=i("payments")),{displayable:f,recommendedPlugins:t}}t.default=function(){var e=Object(a.useState)(null),t=i()(e,2),n=t[0],o=t[1],c=Object(u.useDispatch)(p.OPTIONS_STORE_NAME).updateOptions,y=Object(u.useDispatch)(p.PLUGINS_STORE_NAME).installAndActivatePlugins,g=Object(u.useSelect)(j),_=g.displayable,E=g.recommendedPlugins,k=Object(a.useRef)(!1),S=_&&E&&E.length>0;if(Object(a.useEffect)((function(){S&&!k.current&&(k.current=!0,Object(h.recordEvent)("settings_payments_recommendations_pageview",{}))}),[S]),!S)return null;var R=function(){Object(h.recordEvent)("settings_payments_recommendations_dismiss",{}),c(r()({},O,"yes"))},x=(E||[]).map((function(e){return{key:e.slug,title:Object(a.createElement)(a.Fragment,null,e.title,e.recommended&&Object(a.createElement)(d.Pill,null,Object(s.__)("Recommended","woocommerce-admin"))),content:Object(l.decodeEntities)(e.copy),after:Object(a.createElement)(m.Button,{isSecondary:!0,onClick:function(){return function(e){n||(o(e.product),Object(h.recordEvent)("settings_payments_recommendations_setup",{extension_selected:e.product}),y([e.product]).then((function(){window.location.href=Object(b.f)(e["setup-link"].replace("/wp-admin/",""))})).catch((function(e){Object(w.a)(e),o(null)})))}(e)},isBusy:n===e.product,disabled:!!n},e["button-text"]),before:Object(a.createElement)("img",{src:e.icon,alt:""})}}));return Object(a.createElement)(m.Card,{size:"large",className:"woocommerce-recommended-payments-card"},Object(a.createElement)(m.CardHeader,{size:"medium"},Object(a.createElement)("div",{className:"woocommerce-recommended-payments-card__header"},Object(a.createElement)(f.Text,{variant:"title.small"},Object(s.__)("Recommended ways to get paid","woocommerce-admin")),Object(a.createElement)(f.Text,{className:"woocommerce-recommended-payments__header-heading",variant:"caption"},Object(s.__)('We recommend adding one of the following payment extensions to your store. The extension will be installed and activated for you when you click "Get started".',"woocommerce-admin"))),Object(a.createElement)("div",{className:"woocommerce-card__menu woocommerce-card__header-item"},Object(a.createElement)(d.EllipsisMenu,{label:Object(s.__)("Task List Options","woocommerce-admin"),renderContent:function(){return Object(a.createElement)("div",{className:"woocommerce-review-activity-card__section-controls"},Object(a.createElement)(m.Button,{onClick:R},Object(s.__)("Hide this","woocommerce-admin")))}}))),Object(a.createElement)(m.CardBody,null,Object(a.createElement)(d.List,{items:x})),Object(a.createElement)(m.CardFooter,null,Object(a.createElement)(m.Button,{href:"https://woocommerce.com/product-category/woocommerce-extensions/payment-gateways/?utm_source=payments_recommendations",isTertiary:!0},Object(s.__)("See more options","woocommerce-admin"),Object(a.createElement)(v.a,{size:18}))))}}}]);