this.wc=this.wc||{},this.wc.onboardingProductImportNotice=function(t){var n={};function r(e){if(n[e])return n[e].exports;var o=n[e]={i:e,l:!1,exports:{}};return t[e].call(o.exports,o,o.exports,r),o.l=!0,o.exports}return r.m=t,r.c=n,r.d=function(t,n,e){r.o(t,n)||Object.defineProperty(t,n,{enumerable:!0,get:e})},r.r=function(t){"undefined"!=typeof Symbol&&Symbol.toStringTag&&Object.defineProperty(t,Symbol.toStringTag,{value:"Module"}),Object.defineProperty(t,"__esModule",{value:!0})},r.t=function(t,n){if(1&n&&(t=r(t)),8&n)return t;if(4&n&&"object"==typeof t&&t&&t.__esModule)return t;var e=Object.create(null);if(r.r(e),Object.defineProperty(e,"default",{enumerable:!0,value:t}),2&n&&"string"!=typeof t)for(var o in t)r.d(e,o,function(n){return t[n]}.bind(null,o));return e},r.n=function(t){var n=t&&t.__esModule?function(){return t.default}:function(){return t};return r.d(n,"a",n),n},r.o=function(t,n){return Object.prototype.hasOwnProperty.call(t,n)},r.p="",r(r.s=605)}({102:function(t,n,r){var e=r(52),o=Math.max,u=Math.min;t.exports=function(t,n){var r=e(t);return r<0?o(r+n,0):u(r,n)}},103:function(t,n,r){var e=r(36),o=r(74),u=r(88),i=r(19);t.exports=e("Reflect","ownKeys")||function(t){var n=o.f(i(t)),r=u.f;return r?n.concat(r(t)):n}},105:function(t,n,r){var e=r(25),o=r(27),u=r(19),i=r(63);t.exports=e?Object.defineProperties:function(t,n){u(t);for(var r,e=i(n),c=e.length,f=0;c>f;)o.f(t,r=e[f++],n[r]);return t}},107:function(t,n,r){"use strict";var e=r(26),o=r(85).includes,u=r(118);e({target:"Array",proto:!0},{includes:function(t){return o(this,t,arguments.length>1?arguments[1]:void 0)}}),u("includes")},108:function(t,n,r){var e=r(22),o=r(103),u=r(45),i=r(27);t.exports=function(t,n){for(var r=o(n),c=i.f,f=u.f,a=0;a<r.length;a++){var s=r[a];e(t,s)||c(t,s,f(n,s))}}},109:function(t,n,r){var e=r(8),o=r(65),u=e.WeakMap;t.exports="function"==typeof u&&/native code/.test(o(u))},110:function(t,n,r){var e=r(76);t.exports=e&&!Symbol.sham&&"symbol"==typeof Symbol.iterator},118:function(t,n,r){var e=r(18),o=r(69),u=r(27),i=e("unscopables"),c=Array.prototype;null==c[i]&&u.f(c,i,{configurable:!0,value:o(null)}),t.exports=function(t){c[i][t]=!0}},12:function(t,n){t.exports=function(t){try{return!!t()}catch(t){return!0}}},172:function(t,n){t.exports=window.wp.domReady},18:function(t,n,r){var e=r(8),o=r(70),u=r(22),i=r(68),c=r(76),f=r(110),a=o("wks"),s=e.Symbol,p=f?s:s&&s.withoutSetter||i;t.exports=function(t){return u(a,t)&&(c||"string"==typeof a[t])||(c&&u(s,t)?a[t]=s[t]:a[t]=p("Symbol."+t)),a[t]}},19:function(t,n,r){var e=r(23);t.exports=function(t){if(!e(t))throw TypeError(String(t)+" is not an object");return t}},2:function(t,n){t.exports=window.wp.i18n},22:function(t,n){var r={}.hasOwnProperty;t.exports=function(t,n){return r.call(t,n)}},23:function(t,n){t.exports=function(t){return"object"==typeof t?null!==t:"function"==typeof t}},25:function(t,n,r){var e=r(12);t.exports=!e((function(){return 7!=Object.defineProperty({},1,{get:function(){return 7}})[1]}))},26:function(t,n,r){var e=r(8),o=r(45).f,u=r(31),i=r(37),c=r(54),f=r(108),a=r(82);t.exports=function(t,n){var r,s,p,l,d,v=t.target,y=t.global,b=t.stat;if(r=y?e:b?e[v]||c(v,{}):(e[v]||{}).prototype)for(s in n){if(l=n[s],p=t.noTargetGet?(d=o(r,s))&&d.value:r[s],!a(y?s:v+(b?".":"#")+s,t.forced)&&void 0!==p){if(typeof l==typeof p)continue;f(l,p)}(t.sham||p&&p.sham)&&u(l,"sham",!0),i(r,s,l,t)}}},27:function(t,n,r){var e=r(25),o=r(73),u=r(19),i=r(53),c=Object.defineProperty;n.f=e?c:function(t,n,r){if(u(t),n=i(n,!0),u(r),o)try{return c(t,n,r)}catch(t){}if("get"in r||"set"in r)throw TypeError("Accessors not supported");return"value"in r&&(t[n]=r.value),t}},31:function(t,n,r){var e=r(25),o=r(27),u=r(46);t.exports=e?function(t,n,r){return o.f(t,n,u(1,r))}:function(t,n,r){return t[n]=r,t}},35:function(t,n,r){var e=r(81),o=r(40);t.exports=function(t){return e(o(t))}},36:function(t,n,r){var e=r(94),o=r(8),u=function(t){return"function"==typeof t?t:void 0};t.exports=function(t,n){return arguments.length<2?u(e[t])||u(o[t]):e[t]&&e[t][n]||o[t]&&o[t][n]}},37:function(t,n,r){var e=r(8),o=r(31),u=r(22),i=r(54),c=r(65),f=r(50),a=f.get,s=f.enforce,p=String(String).split("String");(t.exports=function(t,n,r,c){var f,a=!!c&&!!c.unsafe,l=!!c&&!!c.enumerable,d=!!c&&!!c.noTargetGet;"function"==typeof r&&("string"!=typeof n||u(r,"name")||o(r,"name",n),(f=s(r)).source||(f.source=p.join("string"==typeof n?n:""))),t!==e?(a?!d&&t[n]&&(l=!0):delete t[n],l?t[n]=r:o(t,n,r)):l?t[n]=r:i(n,r)})(Function.prototype,"toString",(function(){return"function"==typeof this&&a(this).source||c(this)}))},40:function(t,n){t.exports=function(t){if(null==t)throw TypeError("Can't call method on "+t);return t}},41:function(t,n){var r={}.toString;t.exports=function(t){return r.call(t).slice(8,-1)}},42:function(t,n,r){"use strict";r.d(n,"a",(function(){return a})),r.d(n,"b",(function(){return s})),r.d(n,"c",(function(){return p})),r.d(n,"d",(function(){return l})),r.d(n,"e",(function(){return d})),r.d(n,"g",(function(){return v})),r.d(n,"h",(function(){return y})),r.d(n,"f",(function(){return b}));var e=r(62),o=r.n(e),u=(r(83),r(107),r(2)),i=["wcAdminSettings","preloadSettings"],c="object"===("undefined"==typeof wcSettings?"undefined":o()(wcSettings))?wcSettings:{},f=Object.keys(c).reduce((function(t,n){return i.includes(n)||(t[n]=c[n]),t}),{}),a=f.adminUrl,s=(f.countries,f.currency),p=f.locale,l=f.orderStatuses,d=(f.siteTitle,f.wcAssetUrl);function v(t){var n=arguments.length>1&&void 0!==arguments[1]&&arguments[1],r=arguments.length>2&&void 0!==arguments[2]?arguments[2]:function(t){return t};if(i.includes(t))throw new Error(Object(u.__)("Mutable settings should be accessed via data store."));var e=f.hasOwnProperty(t)?f[t]:n;return r(e,n)}function y(t,n){var r=arguments.length>2&&void 0!==arguments[2]?arguments[2]:function(t){return t};if(i.includes(t))throw new Error(Object(u.__)("Mutable settings should be mutated via data store."));f[t]=r(n)}function b(t){return(a||"")+t}},43:function(t,n,r){var e=r(52),o=Math.min;t.exports=function(t){return t>0?o(e(t),9007199254740991):0}},45:function(t,n,r){var e=r(25),o=r(84),u=r(46),i=r(35),c=r(53),f=r(22),a=r(73),s=Object.getOwnPropertyDescriptor;n.f=e?s:function(t,n){if(t=i(t),n=c(n,!0),a)try{return s(t,n)}catch(t){}if(f(t,n))return u(!o.f.call(t,n),t[n])}},46:function(t,n){t.exports=function(t,n){return{enumerable:!(1&t),configurable:!(2&t),writable:!(4&t),value:n}}},47:function(t,n){t.exports={}},49:function(t,n,r){var e=r(40);t.exports=function(t){return Object(e(t))}},50:function(t,n,r){var e,o,u,i=r(109),c=r(8),f=r(23),a=r(31),s=r(22),p=r(55),l=r(60),d=r(47),v=c.WeakMap;if(i){var y=p.state||(p.state=new v),b=y.get,m=y.has,h=y.set;e=function(t,n){return n.facade=t,h.call(y,t,n),n},o=function(t){return b.call(y,t)||{}},u=function(t){return m.call(y,t)}}else{var x=l("state");d[x]=!0,e=function(t,n){return n.facade=t,a(t,x,n),n},o=function(t){return s(t,x)?t[x]:{}},u=function(t){return s(t,x)}}t.exports={set:e,get:o,has:u,enforce:function(t){return u(t)?o(t):e(t,{})},getterFor:function(t){return function(n){var r;if(!f(n)||(r=o(n)).type!==t)throw TypeError("Incompatible receiver, "+t+" required");return r}}}},52:function(t,n){var r=Math.ceil,e=Math.floor;t.exports=function(t){return isNaN(t=+t)?0:(t>0?e:r)(t)}},53:function(t,n,r){var e=r(23);t.exports=function(t,n){if(!e(t))return t;var r,o;if(n&&"function"==typeof(r=t.toString)&&!e(o=r.call(t)))return o;if("function"==typeof(r=t.valueOf)&&!e(o=r.call(t)))return o;if(!n&&"function"==typeof(r=t.toString)&&!e(o=r.call(t)))return o;throw TypeError("Can't convert object to primitive value")}},54:function(t,n,r){var e=r(8),o=r(31);t.exports=function(t,n){try{o(e,t,n)}catch(r){e[t]=n}return n}},55:function(t,n,r){var e=r(8),o=r(54),u=e["__core-js_shared__"]||o("__core-js_shared__",{});t.exports=u},56:function(t,n){t.exports=["constructor","hasOwnProperty","isPrototypeOf","propertyIsEnumerable","toLocaleString","toString","valueOf"]},59:function(t,n){t.exports=!1},60:function(t,n,r){var e=r(70),o=r(68),u=e("keys");t.exports=function(t){return u[t]||(u[t]=o(t))}},605:function(t,n,r){"use strict";r.r(n);var e=r(2),o=r(172),u=r.n(o),i=r(42);u()((function(){var t=document.querySelector(".wc-actions");if(t){var n=document.querySelector(".wc-actions .button-primary");n&&(n.classList.remove("button"),n.classList.remove("button-primary"));var r=document.createElement("a");r.classList.add("button"),r.classList.add("button-primary"),r.setAttribute("href",Object(i.f)("admin.php?page=wc-admin")),r.innerText=Object(e.__)("Continue setup","woocommerce-admin"),t.appendChild(r)}}))},62:function(t,n){function r(n){return"function"==typeof Symbol&&"symbol"==typeof Symbol.iterator?(t.exports=r=function(t){return typeof t},t.exports.default=t.exports,t.exports.__esModule=!0):(t.exports=r=function(t){return t&&"function"==typeof Symbol&&t.constructor===Symbol&&t!==Symbol.prototype?"symbol":typeof t},t.exports.default=t.exports,t.exports.__esModule=!0),r(n)}t.exports=r,t.exports.default=t.exports,t.exports.__esModule=!0},63:function(t,n,r){var e=r(75),o=r(56);t.exports=Object.keys||function(t){return e(t,o)}},64:function(t,n,r){var e=r(8),o=r(23),u=e.document,i=o(u)&&o(u.createElement);t.exports=function(t){return i?u.createElement(t):{}}},65:function(t,n,r){var e=r(55),o=Function.toString;"function"!=typeof e.inspectSource&&(e.inspectSource=function(t){return o.call(t)}),t.exports=e.inspectSource},68:function(t,n){var r=0,e=Math.random();t.exports=function(t){return"Symbol("+String(void 0===t?"":t)+")_"+(++r+e).toString(36)}},69:function(t,n,r){var e,o=r(19),u=r(105),i=r(56),c=r(47),f=r(97),a=r(64),s=r(60),p=s("IE_PROTO"),l=function(){},d=function(t){return"<script>"+t+"<\/script>"},v=function(){try{e=document.domain&&new ActiveXObject("htmlfile")}catch(t){}var t,n;v=e?function(t){t.write(d("")),t.close();var n=t.parentWindow.Object;return t=null,n}(e):((n=a("iframe")).style.display="none",f.appendChild(n),n.src=String("javascript:"),(t=n.contentWindow.document).open(),t.write(d("document.F=Object")),t.close(),t.F);for(var r=i.length;r--;)delete v.prototype[i[r]];return v()};c[p]=!0,t.exports=Object.create||function(t,n){var r;return null!==t?(l.prototype=o(t),r=new l,l.prototype=null,r[p]=t):r=v(),void 0===n?r:u(r,n)}},70:function(t,n,r){var e=r(59),o=r(55);(t.exports=function(t,n){return o[t]||(o[t]=void 0!==n?n:{})})("versions",[]).push({version:"3.9.1",mode:e?"pure":"global",copyright:"© 2021 Denis Pushkarev (zloirock.ru)"})},73:function(t,n,r){var e=r(25),o=r(12),u=r(64);t.exports=!e&&!o((function(){return 7!=Object.defineProperty(u("div"),"a",{get:function(){return 7}}).a}))},74:function(t,n,r){var e=r(75),o=r(56).concat("length","prototype");n.f=Object.getOwnPropertyNames||function(t){return e(t,o)}},75:function(t,n,r){var e=r(22),o=r(35),u=r(85).indexOf,i=r(47);t.exports=function(t,n){var r,c=o(t),f=0,a=[];for(r in c)!e(i,r)&&e(c,r)&&a.push(r);for(;n.length>f;)e(c,r=n[f++])&&(~u(a,r)||a.push(r));return a}},76:function(t,n,r){var e=r(77),o=r(78),u=r(12);t.exports=!!Object.getOwnPropertySymbols&&!u((function(){return!Symbol.sham&&(e?38===o:o>37&&o<41)}))},77:function(t,n,r){var e=r(41),o=r(8);t.exports="process"==e(o.process)},78:function(t,n,r){var e,o,u=r(8),i=r(89),c=u.process,f=c&&c.versions,a=f&&f.v8;a?o=(e=a.split("."))[0]+e[1]:i&&(!(e=i.match(/Edge\/(\d+)/))||e[1]>=74)&&(e=i.match(/Chrome\/(\d+)/))&&(o=e[1]),t.exports=o&&+o},8:function(t,n,r){(function(n){var r=function(t){return t&&t.Math==Math&&t};t.exports=r("object"==typeof globalThis&&globalThis)||r("object"==typeof window&&window)||r("object"==typeof self&&self)||r("object"==typeof n&&n)||function(){return this}()||Function("return this")()}).call(this,r(93))},81:function(t,n,r){var e=r(12),o=r(41),u="".split;t.exports=e((function(){return!Object("z").propertyIsEnumerable(0)}))?function(t){return"String"==o(t)?u.call(t,""):Object(t)}:Object},82:function(t,n,r){var e=r(12),o=/#|\.prototype\./,u=function(t,n){var r=c[i(t)];return r==a||r!=f&&("function"==typeof n?e(n):!!n)},i=u.normalize=function(t){return String(t).replace(o,".").toLowerCase()},c=u.data={},f=u.NATIVE="N",a=u.POLYFILL="P";t.exports=u},83:function(t,n,r){var e=r(26),o=r(49),u=r(63);e({target:"Object",stat:!0,forced:r(12)((function(){u(1)}))},{keys:function(t){return u(o(t))}})},84:function(t,n,r){"use strict";var e={}.propertyIsEnumerable,o=Object.getOwnPropertyDescriptor,u=o&&!e.call({1:2},1);n.f=u?function(t){var n=o(this,t);return!!n&&n.enumerable}:e},85:function(t,n,r){var e=r(35),o=r(43),u=r(102),i=function(t){return function(n,r,i){var c,f=e(n),a=o(f.length),s=u(i,a);if(t&&r!=r){for(;a>s;)if((c=f[s++])!=c)return!0}else for(;a>s;s++)if((t||s in f)&&f[s]===r)return t||s||0;return!t&&-1}};t.exports={includes:i(!0),indexOf:i(!1)}},88:function(t,n){n.f=Object.getOwnPropertySymbols},89:function(t,n,r){var e=r(36);t.exports=e("navigator","userAgent")||""},93:function(t,n){var r;r=function(){return this}();try{r=r||new Function("return this")()}catch(t){"object"==typeof window&&(r=window)}t.exports=r},94:function(t,n,r){var e=r(8);t.exports=e},97:function(t,n,r){var e=r(36);t.exports=e("document","documentElement")}});