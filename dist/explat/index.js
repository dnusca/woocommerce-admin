/*! For license information please see index.js.LICENSE.txt */
this.wc=this.wc||{},this.wc.explat=function(e){var t={};function r(n){if(t[n])return t[n].exports;var o=t[n]={i:n,l:!1,exports:{}};return e[n].call(o.exports,o,o.exports,r),o.l=!0,o.exports}return r.m=e,r.c=t,r.d=function(e,t,n){r.o(e,t)||Object.defineProperty(e,t,{enumerable:!0,get:n})},r.r=function(e){"undefined"!=typeof Symbol&&Symbol.toStringTag&&Object.defineProperty(e,Symbol.toStringTag,{value:"Module"}),Object.defineProperty(e,"__esModule",{value:!0})},r.t=function(e,t){if(1&t&&(e=r(e)),8&t)return e;if(4&t&&"object"==typeof e&&e&&e.__esModule)return e;var n=Object.create(null);if(r.r(n),Object.defineProperty(n,"default",{enumerable:!0,value:e}),2&t&&"string"!=typeof e)for(var o in e)r.d(n,o,function(t){return e[t]}.bind(null,o));return n},r.n=function(e){var t=e&&e.__esModule?function(){return e.default}:function(){return e};return r.d(t,"a",t),t},r.o=function(e,t){return Object.prototype.hasOwnProperty.call(e,t)},r.p="",r(r.s=609)}({11:function(e,t){e.exports=window.React},122:function(e,t,r){"use strict";var n=r(215),o=r(216),i=r(133);e.exports={formats:i,parse:o,stringify:n}},133:function(e,t,r){"use strict";var n=String.prototype.replace,o=/%20/g,i="RFC1738",a="RFC3986";e.exports={default:a,formatters:{RFC1738:function(e){return n.call(e,o,"+")},RFC3986:function(e){return String(e)}},RFC1738:i,RFC3986:a}},171:function(e,t,r){"use strict";var n=r(133),o=Object.prototype.hasOwnProperty,i=Array.isArray,a=function(){for(var e=[],t=0;t<256;++t)e.push("%"+((t<16?"0":"")+t.toString(16)).toUpperCase());return e}(),c=function(e,t){for(var r=t&&t.plainObjects?Object.create(null):{},n=0;n<e.length;++n)void 0!==e[n]&&(r[n]=e[n]);return r};e.exports={arrayToObject:c,assign:function(e,t){return Object.keys(t).reduce((function(e,r){return e[r]=t[r],e}),e)},combine:function(e,t){return[].concat(e,t)},compact:function(e){for(var t=[{obj:{o:e},prop:"o"}],r=[],n=0;n<t.length;++n)for(var o=t[n],a=o.obj[o.prop],c=Object.keys(a),s=0;s<c.length;++s){var u=c[s],l=a[u];"object"==typeof l&&null!==l&&-1===r.indexOf(l)&&(t.push({obj:a,prop:u}),r.push(l))}return function(e){for(;e.length>1;){var t=e.pop(),r=t.obj[t.prop];if(i(r)){for(var n=[],o=0;o<r.length;++o)void 0!==r[o]&&n.push(r[o]);t.obj[t.prop]=n}}}(t),e},decode:function(e,t,r){var n=e.replace(/\+/g," ");if("iso-8859-1"===r)return n.replace(/%[0-9a-f]{2}/gi,unescape);try{return decodeURIComponent(n)}catch(e){return n}},encode:function(e,t,r,o,i){if(0===e.length)return e;var c=e;if("symbol"==typeof e?c=Symbol.prototype.toString.call(e):"string"!=typeof e&&(c=String(e)),"iso-8859-1"===r)return escape(c).replace(/%u[0-9a-f]{4}/gi,(function(e){return"%26%23"+parseInt(e.slice(2),16)+"%3B"}));for(var s="",u=0;u<c.length;++u){var l=c.charCodeAt(u);45===l||46===l||95===l||126===l||l>=48&&l<=57||l>=65&&l<=90||l>=97&&l<=122||i===n.RFC1738&&(40===l||41===l)?s+=c.charAt(u):l<128?s+=a[l]:l<2048?s+=a[192|l>>6]+a[128|63&l]:l<55296||l>=57344?s+=a[224|l>>12]+a[128|l>>6&63]+a[128|63&l]:(u+=1,l=65536+((1023&l)<<10|1023&c.charCodeAt(u)),s+=a[240|l>>18]+a[128|l>>12&63]+a[128|l>>6&63]+a[128|63&l])}return s},isBuffer:function(e){return!(!e||"object"!=typeof e)&&!!(e.constructor&&e.constructor.isBuffer&&e.constructor.isBuffer(e))},isRegExp:function(e){return"[object RegExp]"===Object.prototype.toString.call(e)},maybeMap:function(e,t){if(i(e)){for(var r=[],n=0;n<e.length;n+=1)r.push(t(e[n]));return r}return t(e)},merge:function e(t,r,n){if(!r)return t;if("object"!=typeof r){if(i(t))t.push(r);else{if(!t||"object"!=typeof t)return[t,r];(n&&(n.plainObjects||n.allowPrototypes)||!o.call(Object.prototype,r))&&(t[r]=!0)}return t}if(!t||"object"!=typeof t)return[t].concat(r);var a=t;return i(t)&&!i(r)&&(a=c(t,n)),i(t)&&i(r)?(r.forEach((function(r,i){if(o.call(t,i)){var a=t[i];a&&"object"==typeof a&&r&&"object"==typeof r?t[i]=e(a,r,n):t.push(r)}else t[i]=r})),t):Object.keys(r).reduce((function(t,i){var a=r[i];return o.call(t,i)?t[i]=e(t[i],a,n):t[i]=a,t}),a)}}},196:function(e,t){e.exports=function(e,t){if(null==e)return{};var r,n,o={},i=Object.keys(e);for(n=0;n<i.length;n++)r=i[n],t.indexOf(r)>=0||(o[r]=e[r]);return o},e.exports.default=e.exports,e.exports.__esModule=!0},215:function(e,t,r){"use strict";var n=r(171),o=r(133),i=Object.prototype.hasOwnProperty,a={brackets:function(e){return e+"[]"},comma:"comma",indices:function(e,t){return e+"["+t+"]"},repeat:function(e){return e}},c=Array.isArray,s=Array.prototype.push,u=function(e,t){s.apply(e,c(t)?t:[t])},l=Date.prototype.toISOString,f=o.default,p={addQueryPrefix:!1,allowDots:!1,charset:"utf-8",charsetSentinel:!1,delimiter:"&",encode:!0,encoder:n.encode,encodeValuesOnly:!1,format:f,formatter:o.formatters[f],indices:!1,serializeDate:function(e){return l.call(e)},skipNulls:!1,strictNullHandling:!1},m=function e(t,r,o,i,a,s,l,f,m,d,y,h,v,g){var b,w=t;if("function"==typeof l?w=l(r,w):w instanceof Date?w=d(w):"comma"===o&&c(w)&&(w=n.maybeMap(w,(function(e){return e instanceof Date?d(e):e}))),null===w){if(i)return s&&!v?s(r,p.encoder,g,"key",y):r;w=""}if("string"==typeof(b=w)||"number"==typeof b||"boolean"==typeof b||"symbol"==typeof b||"bigint"==typeof b||n.isBuffer(w))return s?[h(v?r:s(r,p.encoder,g,"key",y))+"="+h(s(w,p.encoder,g,"value",y))]:[h(r)+"="+h(String(w))];var x,E=[];if(void 0===w)return E;if("comma"===o&&c(w))x=[{value:w.length>0?w.join(",")||null:void 0}];else if(c(l))x=l;else{var O=Object.keys(w);x=f?O.sort(f):O}for(var j=0;j<x.length;++j){var S=x[j],N="object"==typeof S&&void 0!==S.value?S.value:w[S];if(!a||null!==N){var A=c(w)?"function"==typeof o?o(r,S):r:r+(m?"."+S:"["+S+"]");u(E,e(N,A,o,i,a,s,l,f,m,d,y,h,v,g))}}return E};e.exports=function(e,t){var r,n=e,s=function(e){if(!e)return p;if(null!==e.encoder&&void 0!==e.encoder&&"function"!=typeof e.encoder)throw new TypeError("Encoder has to be a function.");var t=e.charset||p.charset;if(void 0!==e.charset&&"utf-8"!==e.charset&&"iso-8859-1"!==e.charset)throw new TypeError("The charset option must be either utf-8, iso-8859-1, or undefined");var r=o.default;if(void 0!==e.format){if(!i.call(o.formatters,e.format))throw new TypeError("Unknown format option provided.");r=e.format}var n=o.formatters[r],a=p.filter;return("function"==typeof e.filter||c(e.filter))&&(a=e.filter),{addQueryPrefix:"boolean"==typeof e.addQueryPrefix?e.addQueryPrefix:p.addQueryPrefix,allowDots:void 0===e.allowDots?p.allowDots:!!e.allowDots,charset:t,charsetSentinel:"boolean"==typeof e.charsetSentinel?e.charsetSentinel:p.charsetSentinel,delimiter:void 0===e.delimiter?p.delimiter:e.delimiter,encode:"boolean"==typeof e.encode?e.encode:p.encode,encoder:"function"==typeof e.encoder?e.encoder:p.encoder,encodeValuesOnly:"boolean"==typeof e.encodeValuesOnly?e.encodeValuesOnly:p.encodeValuesOnly,filter:a,format:r,formatter:n,serializeDate:"function"==typeof e.serializeDate?e.serializeDate:p.serializeDate,skipNulls:"boolean"==typeof e.skipNulls?e.skipNulls:p.skipNulls,sort:"function"==typeof e.sort?e.sort:null,strictNullHandling:"boolean"==typeof e.strictNullHandling?e.strictNullHandling:p.strictNullHandling}}(t);"function"==typeof s.filter?n=(0,s.filter)("",n):c(s.filter)&&(r=s.filter);var l,f=[];if("object"!=typeof n||null===n)return"";l=t&&t.arrayFormat in a?t.arrayFormat:t&&"indices"in t?t.indices?"indices":"repeat":"indices";var d=a[l];r||(r=Object.keys(n)),s.sort&&r.sort(s.sort);for(var y=0;y<r.length;++y){var h=r[y];s.skipNulls&&null===n[h]||u(f,m(n[h],h,d,s.strictNullHandling,s.skipNulls,s.encode?s.encoder:null,s.filter,s.sort,s.allowDots,s.serializeDate,s.format,s.formatter,s.encodeValuesOnly,s.charset))}var v=f.join(s.delimiter),g=!0===s.addQueryPrefix?"?":"";return s.charsetSentinel&&("iso-8859-1"===s.charset?g+="utf8=%26%2310003%3B&":g+="utf8=%E2%9C%93&"),v.length>0?g+v:""}},216:function(e,t,r){"use strict";var n=r(171),o=Object.prototype.hasOwnProperty,i=Array.isArray,a={allowDots:!1,allowPrototypes:!1,arrayLimit:20,charset:"utf-8",charsetSentinel:!1,comma:!1,decoder:n.decode,delimiter:"&",depth:5,ignoreQueryPrefix:!1,interpretNumericEntities:!1,parameterLimit:1e3,parseArrays:!0,plainObjects:!1,strictNullHandling:!1},c=function(e){return e.replace(/&#(\d+);/g,(function(e,t){return String.fromCharCode(parseInt(t,10))}))},s=function(e,t){return e&&"string"==typeof e&&t.comma&&e.indexOf(",")>-1?e.split(","):e},u=function(e,t,r,n){if(e){var i=r.allowDots?e.replace(/\.([^.[]+)/g,"[$1]"):e,a=/(\[[^[\]]*])/g,c=r.depth>0&&/(\[[^[\]]*])/.exec(i),u=c?i.slice(0,c.index):i,l=[];if(u){if(!r.plainObjects&&o.call(Object.prototype,u)&&!r.allowPrototypes)return;l.push(u)}for(var f=0;r.depth>0&&null!==(c=a.exec(i))&&f<r.depth;){if(f+=1,!r.plainObjects&&o.call(Object.prototype,c[1].slice(1,-1))&&!r.allowPrototypes)return;l.push(c[1])}return c&&l.push("["+i.slice(c.index)+"]"),function(e,t,r,n){for(var o=n?t:s(t,r),i=e.length-1;i>=0;--i){var a,c=e[i];if("[]"===c&&r.parseArrays)a=[].concat(o);else{a=r.plainObjects?Object.create(null):{};var u="["===c.charAt(0)&&"]"===c.charAt(c.length-1)?c.slice(1,-1):c,l=parseInt(u,10);r.parseArrays||""!==u?!isNaN(l)&&c!==u&&String(l)===u&&l>=0&&r.parseArrays&&l<=r.arrayLimit?(a=[])[l]=o:a[u]=o:a={0:o}}o=a}return o}(l,t,r,n)}};e.exports=function(e,t){var r=function(e){if(!e)return a;if(null!==e.decoder&&void 0!==e.decoder&&"function"!=typeof e.decoder)throw new TypeError("Decoder has to be a function.");if(void 0!==e.charset&&"utf-8"!==e.charset&&"iso-8859-1"!==e.charset)throw new TypeError("The charset option must be either utf-8, iso-8859-1, or undefined");var t=void 0===e.charset?a.charset:e.charset;return{allowDots:void 0===e.allowDots?a.allowDots:!!e.allowDots,allowPrototypes:"boolean"==typeof e.allowPrototypes?e.allowPrototypes:a.allowPrototypes,arrayLimit:"number"==typeof e.arrayLimit?e.arrayLimit:a.arrayLimit,charset:t,charsetSentinel:"boolean"==typeof e.charsetSentinel?e.charsetSentinel:a.charsetSentinel,comma:"boolean"==typeof e.comma?e.comma:a.comma,decoder:"function"==typeof e.decoder?e.decoder:a.decoder,delimiter:"string"==typeof e.delimiter||n.isRegExp(e.delimiter)?e.delimiter:a.delimiter,depth:"number"==typeof e.depth||!1===e.depth?+e.depth:a.depth,ignoreQueryPrefix:!0===e.ignoreQueryPrefix,interpretNumericEntities:"boolean"==typeof e.interpretNumericEntities?e.interpretNumericEntities:a.interpretNumericEntities,parameterLimit:"number"==typeof e.parameterLimit?e.parameterLimit:a.parameterLimit,parseArrays:!1!==e.parseArrays,plainObjects:"boolean"==typeof e.plainObjects?e.plainObjects:a.plainObjects,strictNullHandling:"boolean"==typeof e.strictNullHandling?e.strictNullHandling:a.strictNullHandling}}(t);if(""===e||null==e)return r.plainObjects?Object.create(null):{};for(var l="string"==typeof e?function(e,t){var r,u={},l=t.ignoreQueryPrefix?e.replace(/^\?/,""):e,f=t.parameterLimit===1/0?void 0:t.parameterLimit,p=l.split(t.delimiter,f),m=-1,d=t.charset;if(t.charsetSentinel)for(r=0;r<p.length;++r)0===p[r].indexOf("utf8=")&&("utf8=%E2%9C%93"===p[r]?d="utf-8":"utf8=%26%2310003%3B"===p[r]&&(d="iso-8859-1"),m=r,r=p.length);for(r=0;r<p.length;++r)if(r!==m){var y,h,v=p[r],g=v.indexOf("]="),b=-1===g?v.indexOf("="):g+1;-1===b?(y=t.decoder(v,a.decoder,d,"key"),h=t.strictNullHandling?null:""):(y=t.decoder(v.slice(0,b),a.decoder,d,"key"),h=n.maybeMap(s(v.slice(b+1),t),(function(e){return t.decoder(e,a.decoder,d,"value")}))),h&&t.interpretNumericEntities&&"iso-8859-1"===d&&(h=c(h)),v.indexOf("[]=")>-1&&(h=i(h)?[h]:h),o.call(u,y)?u[y]=n.combine(u[y],h):u[y]=h}return u}(e,r):e,f=r.plainObjects?Object.create(null):{},p=Object.keys(l),m=0;m<p.length;++m){var d=p[m],y=u(d,l[d],r,"string"==typeof e);f=n.merge(f,y,r)}return n.compact(f)}},4:function(e,t){e.exports=function(e,t,r){return t in e?Object.defineProperty(e,t,{value:r,enumerable:!0,configurable:!0,writable:!0}):e[t]=r,e},e.exports.default=e.exports,e.exports.__esModule=!0},434:function(e,t,r){"use strict";t.parse=function(e,t){if("string"!=typeof e)throw new TypeError("argument str must be a string");for(var r={},o=t||{},a=e.split(i),s=o.decode||n,u=0;u<a.length;u++){var l=a[u],f=l.indexOf("=");if(!(f<0)){var p=l.substr(0,f).trim(),m=l.substr(++f,l.length).trim();'"'==m[0]&&(m=m.slice(1,-1)),null==r[p]&&(r[p]=c(m,s))}}return r},t.serialize=function(e,t,r){var n=r||{},i=n.encode||o;if("function"!=typeof i)throw new TypeError("option encode is invalid");if(!a.test(e))throw new TypeError("argument name is invalid");var c=i(t);if(c&&!a.test(c))throw new TypeError("argument val is invalid");var s=e+"="+c;if(null!=n.maxAge){var u=n.maxAge-0;if(isNaN(u)||!isFinite(u))throw new TypeError("option maxAge is invalid");s+="; Max-Age="+Math.floor(u)}if(n.domain){if(!a.test(n.domain))throw new TypeError("option domain is invalid");s+="; Domain="+n.domain}if(n.path){if(!a.test(n.path))throw new TypeError("option path is invalid");s+="; Path="+n.path}if(n.expires){if("function"!=typeof n.expires.toUTCString)throw new TypeError("option expires is invalid");s+="; Expires="+n.expires.toUTCString()}n.httpOnly&&(s+="; HttpOnly");n.secure&&(s+="; Secure");if(n.sameSite){switch("string"==typeof n.sameSite?n.sameSite.toLowerCase():n.sameSite){case!0:s+="; SameSite=Strict";break;case"lax":s+="; SameSite=Lax";break;case"strict":s+="; SameSite=Strict";break;case"none":s+="; SameSite=None";break;default:throw new TypeError("option sameSite is invalid")}}return s};var n=decodeURIComponent,o=encodeURIComponent,i=/; */,a=/^[\u0009\u0020-\u007e\u0080-\u00ff]+$/;function c(e,t){try{return t(e)}catch(t){return e}}},6:function(e,t){e.exports=window.regeneratorRuntime},609:function(e,t,r){"use strict";r.r(t),r.d(t,"initializeExPlat",(function(){return L})),r.d(t,"loadExperimentAssignment",(function(){return B})),r.d(t,"dangerouslyGetExperimentAssignment",(function(){return U})),r.d(t,"useExperiment",(function(){return G})),r.d(t,"Experiment",(function(){return W})),r.d(t,"ProvideExperimentData",(function(){return $}));var n=function(e,t){return(n=Object.setPrototypeOf||{__proto__:[]}instanceof Array&&function(e,t){e.__proto__=t}||function(e,t){for(var r in t)t.hasOwnProperty(r)&&(e[r]=t[r])})(e,t)};function o(e,t,r,n){return new(r||(r=Promise))((function(o,i){function a(e){try{s(n.next(e))}catch(e){i(e)}}function c(e){try{s(n.throw(e))}catch(e){i(e)}}function s(e){var t;e.done?o(e.value):(t=e.value,t instanceof r?t:new r((function(e){e(t)}))).then(a,c)}s((n=n.apply(e,t||[])).next())}))}function i(e,t){var r,n,o,i,a={label:0,sent:function(){if(1&o[0])throw o[1];return o[1]},trys:[],ops:[]};return i={next:c(0),throw:c(1),return:c(2)},"function"==typeof Symbol&&(i[Symbol.iterator]=function(){return this}),i;function c(i){return function(c){return function(i){if(r)throw new TypeError("Generator is already executing.");for(;a;)try{if(r=1,n&&(o=2&i[0]?n.return:i[0]?n.throw||((o=n.return)&&o.call(n),0):n.next)&&!(o=o.call(n,i[1])).done)return o;switch(n=0,o&&(i=[2&i[0],o.value]),i[0]){case 0:case 1:o=i;break;case 4:return a.label++,{value:i[1],done:!1};case 5:a.label++,n=i[1],i=[0];continue;case 7:i=a.ops.pop(),a.trys.pop();continue;default:if(!(o=a.trys,(o=o.length>0&&o[o.length-1])||6!==i[0]&&2!==i[0])){a=0;continue}if(3===i[0]&&(!o||i[1]>o[0]&&i[1]<o[3])){a.label=i[1];break}if(6===i[0]&&a.label<o[1]){a.label=o[1],o=i;break}if(o&&a.label<o[2]){a.label=o[2],a.ops.push(i);break}o[2]&&a.ops.pop(),a.trys.pop();continue}i=t.call(e,a)}catch(e){i=[6,e],n=0}finally{r=o=0}if(5&i[0])throw i[1];return{value:i[0]?i[1]:void 0,done:!0}}([i,c])}}}var a=Date.now();function c(){var e=Date.now();return a=a<e?e:a+1}function s(e){return c()<1e3*e.ttl+e.retrievedTimestamp}var u=function(e,t){return void 0===t&&(t=60),{experimentName:e,variationName:null,retrievedTimestamp:c(),ttl:Math.max(60,t),isFallbackExperimentAssignment:!0}};function l(e){return"object"==typeof e&&null!==e}function f(e){return"string"==typeof e&&""!==e}function p(e){if(!function(e){return l(e)&&f(e.experimentName)&&(f(e.variationName)||null===e.variationName)&&"number"==typeof e.retrievedTimestamp&&"number"==typeof e.ttl&&0!==e.ttl}(e))throw new Error("Invalid ExperimentAssignment");return e}function m(e){if(function(e){return l(e)&&l(e.variations)&&"number"==typeof e.ttl&&0<e.ttl}(e))return e;throw new Error("Invalid FetchExperimentAssignmentResponse")}function d(e,t){return o(this,void 0,void 0,(function(){var r,n,o,a,l,f,d,y,h,v,g;return i(this,(function(i){switch(i.label){case 0:return r=c(),l=m,d=(f=e).fetchExperimentAssignment,g={},[4,e.getAnonId()];case 1:return[4,d.apply(f,[(g.anonId=i.sent(),g.experimentName=t,g)])];case 2:if(n=l.apply(void 0,[i.sent()]),o=n.variations,a=n.ttl,y=Math.max(60,a),(h=Object.entries(o).map((function(e){return{experimentName:e[0],variationName:e[1],retrievedTimestamp:r,ttl:y}})).map(p)).length>1)throw new Error("Received multiple experiment assignments while trying to fetch exactly one.");if(0===h.length)return[2,u(t,y)];if((v=h[0]).experimentName!==t)throw new Error("Newly fetched ExperimentAssignment's experiment name does not match request.");if(!s(v))throw new Error("Newly fetched experiment isn't alive.");return[2,v]}}))}))}var y=function(){function e(){this.experimentNameToExperimentAssignment={}}return e.prototype.store=function(e){p(e);var t=this.experimentNameToExperimentAssignment[e.experimentName];if(t&&e.retrievedTimestamp<t.retrievedTimestamp)throw new Error("Trying to store an older experiment assignment than is present in the store, likely a race condition.");this.experimentNameToExperimentAssignment[e.experimentName]=e},e.prototype.retrieve=function(e){return this.experimentNameToExperimentAssignment[e]},e}(),h=function(e){function t(r){var n=e.call(this,r)||this;return Error.captureStackTrace&&Error.captureStackTrace(n,t),n.name="MissingExperimentAssignmentError",n}return function(e,t){function r(){this.constructor=e}n(e,t),e.prototype=null===t?Object.create(t):(r.prototype=t.prototype,new r)}(t,e),t}(Error);var v="undefined"==typeof window?function(e){var t=this;return{loadExperimentAssignment:function(r){return o(t,void 0,void 0,(function(){return i(this,(function(t){return e.logError({message:"Attempting to load ExperimentAssignment in SSR context",experimentName:r}),[2,u(r)]}))}))},dangerouslyGetExperimentAssignment:function(t){return e.logError({message:"Attempting to dangerously get ExperimentAssignment in SSR context",experimentName:t}),u(t)},config:e}}:function(e){var t=this;if("undefined"==typeof window)throw new Error("Running outside of a browser context.");var r=new y,n={},a=function(){for(var t=[],r=0;r<arguments.length;r++)t[r]=arguments[r];try{e.logError.apply(e,t)}catch(e){}};return{loadExperimentAssignment:function(c){return o(t,void 0,void 0,(function(){var l,p,m,y;return i(this,(function(h){switch(h.label){case 0:if(h.trys.push([0,2,,3]),!f(c))throw new Error('Invalid experimentName: "'+c+'"');return(m=r.retrieve(c))&&s(m)?[2,m]:(void 0===n[c]&&(n[c]=function(n){return a=function(){return o(t,void 0,void 0,(function(){var t;return i(this,(function(o){switch(o.label){case 0:return[4,d(e,n)];case 1:return t=o.sent(),r.store(t),[2,t]}}))}))},c=null,function(){return c||(c=a().finally((function(){c=null}))),c};var a,c}(c)),[4,(v=n[c](),g=1e4,Promise.race([v,new Promise((function(e,t){return setTimeout((function(){return t(new Error("Promise has timed-out."))}),g)}))]))]);case 1:if(!(l=h.sent()))throw new Error("Could not fetch ExperimentAssignment");return[2,l];case 2:return p=h.sent(),a({message:p.message,experimentName:c,source:"loadExperimentAssignment-initialError"}),[3,3];case 3:try{return(m=r.retrieve(c))?[2,m]:(y=u(c),r.store(y),[2,y])}catch(e){return a({message:e.message,experimentName:c,source:"loadExperimentAssignment-fallbackError"}),[2,u(c)]}return[2]}var v,g}))}))},dangerouslyGetExperimentAssignment:function(t){if(!f(t))throw new Error("Invalid experimentName: "+t);var n=r.retrieve(t);if(!n)throw new h("Trying to dangerously get an ExperimentAssignment that hasn't loaded.");if(e.isDevelopmentMode&&n&&c()-n.retrievedTimestamp<1e3)throw new Error("Warning: Trying to dangerously get an ExperimentAssignment too soon after loading it.");return n},config:e}},g=r(11),b=r.n(g);var w=r(4),x=r.n(w),E=r(66),O=r.n(E);function j(e,t){var r=Object.keys(e);if(Object.getOwnPropertySymbols){var n=Object.getOwnPropertySymbols(e);t&&(n=n.filter((function(t){return Object.getOwnPropertyDescriptor(e,t).enumerable}))),r.push.apply(r,n)}return r}function S(e){for(var t=1;t<arguments.length;t++){var r=null!=arguments[t]?arguments[t]:{};t%2?j(Object(r),!0).forEach((function(t){x()(e,t,r[t])})):Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(r)):j(Object(r)).forEach((function(t){Object.defineProperty(e,t,Object.getOwnPropertyDescriptor(r,t))}))}return e}var N=function(e){var t=function(e){0};try{var r,n={message:e.message,properties:S(S({},O()(e,["message"])),{},{context:"explat",explat_client:"woocommerce"})};if(null===(r=window.wcTracks)||void 0===r||!r.isEnabled)throw new Error("Tracking is disabled, can't send error to the server");var o=new window.FormData;o.append("error",JSON.stringify(n)),window.fetch("https://public-api.wordpress.com/rest/v1.1/js-error",{method:"POST",body:o}).catch(t)}catch(e){t()}},A=r(67),P=r.n(A),k=r(6),T=r.n(k),D=r(122),_=function(){var e=P()(T.a.mark((function e(t){var r,n,o,i,a;return T.a.wrap((function(e){for(;;)switch(e.prev=e.next){case 0:if(n=t.experimentName,o=t.anonId,null!==(r=window.wcTracks)&&void 0!==r&&r.isEnabled){e.next=3;break}throw new Error("Tracking is disabled, can't fetch experimentAssignment");case 3:return i=Object(D.stringify)({experiment_name:n,anon_id:null!=o?o:void 0}),e.next=6,window.fetch("https://public-api.wordpress.com/wpcom/v2/experiments/".concat("0.1.0","/assignments/woocommerce?").concat(i));case 6:return a=e.sent,e.next=9,a.json();case 9:return e.abrupt("return",e.sent);case 10:case"end":return e.stop()}}),e)})));return function(t){return e.apply(this,arguments)}}(),C=r(434),R=r.n(C),I=null,M=function(){var e=P()(T.a.mark((function e(){var t;return T.a.wrap((function(e){for(;;)switch(e.prev=e.next){case 0:return t=0,I=new Promise((function(e){var r,n,o=(n=50,(r=function(){var r=R.a.parse(document.cookie).tk_ai||null;return"string"==typeof r&&""!==r?(clearInterval(o),void e(r)):99<=t?(clearInterval(o),void e(null)):void(t+=1)})(),setInterval(r,n))})),e.abrupt("return",I);case 3:case"end":return e.stop()}}),e)})));return function(){return e.apply(this,arguments)}}(),F=function(){var e=P()(T.a.mark((function e(){var t;return T.a.wrap((function(e){for(;;)switch(e.prev=e.next){case 0:if(null!==(t=window.wcTracks)&&void 0!==t&&t.isEnabled){e.next=2;break}return e.abrupt("return",null);case 2:return e.next=4,I;case 4:return e.abrupt("return",e.sent);case 5:case"end":return e.stop()}}),e)})));return function(){return e.apply(this,arguments)}}(),L=function(){var e;null!==(e=window.wcTracks)&&void 0!==e&&e.isEnabled&&M().catch((function(e){return N({message:e.message})}))};L();var H,Q,z=v({fetchExperimentAssignment:_,getAnonId:F,logError:N,isDevelopmentMode:!1}),B=z.loadExperimentAssignment,U=z.dangerouslyGetExperimentAssignment,V=(H=z,{useExperiment:Q=function(e){var t=Object(g.useState)(e)[0],r=Object(g.useState)([!0,null]),n=r[0],o=r[1];return Object(g.useEffect)((function(){var t=!0;return H.loadExperimentAssignment(e).then((function(e){t&&o([!1,e])})),function(){t=!1}}),[]),e===t||t.startsWith("explat_test")||H.config.logError({message:"[ExPlat] useExperiment: experimentName should never change between renders!"}),n},Experiment:function(e){var t=e.defaultExperience,r=e.treatmentExperience,n=e.loadingExperience,o=e.name,i=Q(o),a=i[0],c=i[1];return a?b.a.createElement(b.a.Fragment,null,n):(null==c?void 0:c.variationName)?b.a.createElement(b.a.Fragment,null,r):b.a.createElement(b.a.Fragment,null,t)},ProvideExperimentData:function(e){var t=e.children,r=e.name,n=Q(r);return t(n[0],n[1])}}),G=V.useExperiment,W=V.Experiment,$=V.ProvideExperimentData},66:function(e,t,r){var n=r(196);e.exports=function(e,t){if(null==e)return{};var r,o,i=n(e,t);if(Object.getOwnPropertySymbols){var a=Object.getOwnPropertySymbols(e);for(o=0;o<a.length;o++)r=a[o],t.indexOf(r)>=0||Object.prototype.propertyIsEnumerable.call(e,r)&&(i[r]=e[r])}return i},e.exports.default=e.exports,e.exports.__esModule=!0},67:function(e,t){function r(e,t,r,n,o,i,a){try{var c=e[i](a),s=c.value}catch(e){return void r(e)}c.done?t(s):Promise.resolve(s).then(n,o)}e.exports=function(e){return function(){var t=this,n=arguments;return new Promise((function(o,i){var a=e.apply(t,n);function c(e){r(a,o,i,c,s,"next",e)}function s(e){r(a,o,i,c,s,"throw",e)}c(void 0)}))}},e.exports.default=e.exports,e.exports.__esModule=!0}});