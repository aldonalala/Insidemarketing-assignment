/*! For license information please see main.js.LICENSE.txt */
!function(){var t={2702:function(t,e,n){t.exports=function(){"use strict";function t(t){var e=typeof t;return null!==t&&("object"===e||"function"===e)}function e(t){return"function"==typeof t}var r=Array.isArray?Array.isArray:function(t){return"[object Array]"===Object.prototype.toString.call(t)},s=0,o=void 0,i=void 0,a=function(t,e){_[s]=t,_[s+1]=e,2===(s+=2)&&(i?i(m):b())};function c(t){i=t}function u(t){a=t}var d="undefined"!=typeof window?window:void 0,l=d||{},f=l.MutationObserver||l.WebKitMutationObserver,h="undefined"==typeof self&&"undefined"!=typeof process&&"[object process]"==={}.toString.call(process),p="undefined"!=typeof Uint8ClampedArray&&"undefined"!=typeof importScripts&&"undefined"!=typeof MessageChannel;function v(){return function(){return process.nextTick(m)}}function w(){return void 0!==o?function(){o(m)}:E()}function g(){var t=0,e=new f(m),n=document.createTextNode("");return e.observe(n,{characterData:!0}),function(){n.data=t=++t%2}}function y(){var t=new MessageChannel;return t.port1.onmessage=m,function(){return t.port2.postMessage(0)}}function E(){var t=setTimeout;return function(){return t(m,1)}}var _=new Array(1e3);function m(){for(var t=0;t<s;t+=2)(0,_[t])(_[t+1]),_[t]=void 0,_[t+1]=void 0;s=0}function I(){try{var t=Function("return this")().require("vertx");return o=t.runOnLoop||t.runOnContext,w()}catch(t){return E()}}var b=void 0;function C(t,e){var n=this,r=new this.constructor(A);void 0===r[T]&&B(r);var s=n._state;if(s){var o=arguments[s-1];a((function(){return z(s,r,o,n._result)}))}else U(n,r,t,e);return r}function S(t){var e=this;if(t&&"object"==typeof t&&t.constructor===e)return t;var n=new e(A);return M(n,t),n}b=h?v():f?g():p?y():void 0===d?I():E();var T=Math.random().toString(36).substring(2);function A(){}var N=void 0,O=1,x=2;function D(){return new TypeError("You cannot resolve a promise with itself")}function L(){return new TypeError("A promises callback cannot return that same promise.")}function j(t,e,n,r){try{t.call(e,n,r)}catch(t){return t}}function P(t,e,n){a((function(t){var r=!1,s=j(n,e,(function(n){r||(r=!0,e!==n?M(t,n):H(t,n))}),(function(e){r||(r=!0,k(t,e))}),"Settle: "+(t._label||" unknown promise"));!r&&s&&(r=!0,k(t,s))}),t)}function G(t,e){e._state===O?H(t,e._result):e._state===x?k(t,e._result):U(e,void 0,(function(e){return M(t,e)}),(function(e){return k(t,e)}))}function F(t,n,r){n.constructor===t.constructor&&r===C&&n.constructor.resolve===S?G(t,n):void 0===r?H(t,n):e(r)?P(t,n,r):H(t,n)}function M(e,n){if(e===n)k(e,D());else if(t(n)){var r=void 0;try{r=n.then}catch(t){return void k(e,t)}F(e,n,r)}else H(e,n)}function R(t){t._onerror&&t._onerror(t._result),V(t)}function H(t,e){t._state===N&&(t._result=e,t._state=O,0!==t._subscribers.length&&a(V,t))}function k(t,e){t._state===N&&(t._state=x,t._result=e,a(R,t))}function U(t,e,n,r){var s=t._subscribers,o=s.length;t._onerror=null,s[o]=e,s[o+O]=n,s[o+x]=r,0===o&&t._state&&a(V,t)}function V(t){var e=t._subscribers,n=t._state;if(0!==e.length){for(var r=void 0,s=void 0,o=t._result,i=0;i<e.length;i+=3)r=e[i],s=e[i+n],r?z(n,r,s,o):s(o);t._subscribers.length=0}}function z(t,n,r,s){var o=e(r),i=void 0,a=void 0,c=!0;if(o){try{i=r(s)}catch(t){c=!1,a=t}if(n===i)return void k(n,L())}else i=s;n._state!==N||(o&&c?M(n,i):!1===c?k(n,a):t===O?H(n,i):t===x&&k(n,i))}function Z(t,e){try{e((function(e){M(t,e)}),(function(e){k(t,e)}))}catch(e){k(t,e)}}var W=0;function Y(){return W++}function B(t){t[T]=W++,t._state=void 0,t._result=void 0,t._subscribers=[]}function J(){return new Error("Array Methods must be provided an Array")}var q=function(){function t(t,e){this._instanceConstructor=t,this.promise=new t(A),this.promise[T]||B(this.promise),r(e)?(this.length=e.length,this._remaining=e.length,this._result=new Array(this.length),0===this.length?H(this.promise,this._result):(this.length=this.length||0,this._enumerate(e),0===this._remaining&&H(this.promise,this._result))):k(this.promise,J())}return t.prototype._enumerate=function(t){for(var e=0;this._state===N&&e<t.length;e++)this._eachEntry(t[e],e)},t.prototype._eachEntry=function(t,e){var n=this._instanceConstructor,r=n.resolve;if(r===S){var s=void 0,o=void 0,i=!1;try{s=t.then}catch(t){i=!0,o=t}if(s===C&&t._state!==N)this._settledAt(t._state,e,t._result);else if("function"!=typeof s)this._remaining--,this._result[e]=t;else if(n===et){var a=new n(A);i?k(a,o):F(a,t,s),this._willSettleAt(a,e)}else this._willSettleAt(new n((function(e){return e(t)})),e)}else this._willSettleAt(r(t),e)},t.prototype._settledAt=function(t,e,n){var r=this.promise;r._state===N&&(this._remaining--,t===x?k(r,n):this._result[e]=n),0===this._remaining&&H(r,this._result)},t.prototype._willSettleAt=function(t,e){var n=this;U(t,void 0,(function(t){return n._settledAt(O,e,t)}),(function(t){return n._settledAt(x,e,t)}))},t}();function K(t){return new q(this,t).promise}function X(t){var e=this;return r(t)?new e((function(n,r){for(var s=t.length,o=0;o<s;o++)e.resolve(t[o]).then(n,r)})):new e((function(t,e){return e(new TypeError("You must pass an array to race."))}))}function Q(t){var e=new this(A);return k(e,t),e}function $(){throw new TypeError("You must pass a resolver function as the first argument to the promise constructor")}function tt(){throw new TypeError("Failed to construct 'Promise': Please use the 'new' operator, this object constructor cannot be called as a function.")}var et=function(){function t(e){this[T]=Y(),this._result=this._state=void 0,this._subscribers=[],A!==e&&("function"!=typeof e&&$(),this instanceof t?Z(this,e):tt())}return t.prototype.catch=function(t){return this.then(null,t)},t.prototype.finally=function(t){var n=this,r=n.constructor;return e(t)?n.then((function(e){return r.resolve(t()).then((function(){return e}))}),(function(e){return r.resolve(t()).then((function(){throw e}))})):n.then(t,t)},t}();function nt(){var t=void 0;if(void 0!==n.g)t=n.g;else if("undefined"!=typeof self)t=self;else try{t=Function("return this")()}catch(t){throw new Error("polyfill failed because global object is unavailable in this environment")}var e=t.Promise;if(e){var r=null;try{r=Object.prototype.toString.call(e.resolve())}catch(t){}if("[object Promise]"===r&&!e.cast)return}t.Promise=et}return et.prototype.then=C,et.all=K,et.race=X,et.resolve=S,et.reject=Q,et._setScheduler=c,et._setAsap=u,et._asap=a,et.polyfill=nt,et.Promise=et,et}()},8925:function(){"use strict";Array.prototype.find||Object.defineProperty(Array.prototype,"find",{value:function(t){if(null==this)throw new TypeError('"this" is null or not defined');var e=Object(this),n=e.length>>>0;if("function"!=typeof t)throw new TypeError("predicate must be a function");for(var r=arguments[1],s=0;s<n;){var o=e[s];if(t.call(r,o,s,e))return o;s++}},configurable:!0,writable:!0}),Array.prototype.includes||Object.defineProperty(Array.prototype,"includes",{value:function(t,e){if(null==this)throw new TypeError('"this" is null or not defined');var n=Object(this),r=n.length>>>0;if(0===r)return!1;var s,o,i=0|e,a=Math.max(i>=0?i:r-Math.abs(i),0);for(;a<r;){if((s=n[a])===(o=t)||"number"==typeof s&&"number"==typeof o&&isNaN(s)&&isNaN(o))return!0;a++}return!1},configurable:!0,writable:!0})},9050:function(t,e){"use strict";Object.defineProperty(e,"__esModule",{value:!0}),e.DataExchangeEventTypes=void 0,function(t){t.CONSENTS_INITIALIZED_STORAGE="consents_initialized_storage",t.CONSENTS_INITIALIZED_SERVER="consents_initialized_setting",t.CONSENTS_CHANGED_FINISHED="consents_changed finished",t.CONSENT_CHANGED="consents_changed",t.SPECIFIC_CONSENT_CHANGED="specific_consents_changed",t.all_consents_given_status="all_consents_given_status",t.CATEGORY_CHANGED="category_status_changed",t.SPECIFIC_CATEGORY_CHANGED="specific_category_status_changed"}(e.DataExchangeEventTypes||(e.DataExchangeEventTypes={}))},7260:function(t,e){"use strict";Object.defineProperty(e,"__esModule",{value:!0});var n=function(){function t(){}return t.USC_ORIGIN_SERVER="from server setting",t.USC_ORIGIN_LOCAL="from local storage",t.CONSENT_INITIALIZED_EVENT="consents_initialized",t.CONSENT_CHANGED_EVENT="consent_changed",t.CONSENTS_CHANGED_FINISHED="consents_changed_finished",t.all_consents_given_status="all_consents_given_status",t.BASE_URL="https://app.usercentrics.eu",t.LATEST_CONSENT_STRING_VERSION=1,t.USERCENTRICS_STRING="usercentrics",t.EU_COUNTRIES=["AT","BE","BG","HR","CY","CZ","DK","EE","FI","FR","DE","GR","HU","IE","IT","LV","LT","LU","MT","NL","PL","PT","RO","SK","SI","ES","SE","GB"],t}();e.default=n},4422:function(t,e,n){"use strict";Object.defineProperty(e,"__esModule",{value:!0});var r=n(9050),s=n(7260),o=["B1Hk_zoTX","ByzZ5EsOsZX","dqFgQeZH","LykAT-gy","twMyStLkn","pxiRY9112","UekC8ye4S","DHS2sEi4b","S1_9Vsuj-Q","dyHOCwp5Y"],i=["HkocEodjb7","87JYasXPF"],a="ads_data_redaction",c="dataLayer",u=function(){window.dataLayer.push(arguments)},d=function(){function t(){this.dataExchangeArray=[]}return t.prototype.consentInitializedFromStorage=function(e,n){var o=t.createConsentInitializedObject(s.default.USC_ORIGIN_LOCAL,e,n);this.dispatchEvent(r.DataExchangeEventTypes.CONSENTS_INITIALIZED_STORAGE,o)},t.prototype.dispatchConsentsInitializedEvent=function(e,n){var o=t.createConsentInitializedObject(s.default.USC_ORIGIN_SERVER,e,n);this.dispatchEvent(r.DataExchangeEventTypes.CONSENTS_INITIALIZED_SERVER,o)},t.createConsentInitializedObject=function(t,e,n){var r={usc_origin:t,event:s.default.CONSENT_INITIALIZED_EVENT},o=n||{};return e.forEach((function(t){o[t.templateId]&&o[t.templateId][t.version]?o[t.templateId][t.version].dataProcessors.forEach((function(e){r[e]=t.unsavedConsentStatus})):console.error("Consent "+t.templateId+" with version "+t.version+" not found")})),r},t.prototype.dispatchCategoryChangedEventByCategory=function(t){var e={event:"category_status_changed",category:t.label,slug:t.categorySlug,status:t.status,isIntermediate:t.isIntermediateState},n={event:"specific_category_status_changed "+t.categorySlug,category:t.label,slug:t.categorySlug,status:t.status,isIntermediate:t.isIntermediateState};this.dispatchEvent(r.DataExchangeEventTypes.CATEGORY_CHANGED,e),this.dispatchEvent(r.DataExchangeEventTypes.SPECIFIC_CATEGORY_CHANGED,n)},t.prototype.dispatchEventForConsent=function(e,n){var s=this;t.createConsentChangedEvents(e,n).forEach((function(t){s.dispatchEvent(r.DataExchangeEventTypes.CONSENT_CHANGED,t)})),t.createConsentChangedEventsWithName(e,n).forEach((function(t){s.dispatchEvent(r.DataExchangeEventTypes.SPECIFIC_CONSENT_CHANGED,t)}))},t.createConsentChangedEvents=function(t,e){var n=[];if(t&&e[t.templateId]&&e[t.templateId][t.version])return e[t.templateId][t.version].dataProcessors.forEach((function(e){var r,o=((r={})[e]=t.consentStatus,r.event=s.default.CONSENT_CHANGED_EVENT,r);n.push(o)})),n;console.error("Consent ".concat(t.templateId," with version ").concat(t.version," not found"))},t.createConsentChangedEventsWithName=function(t,e){var n=[];if(e[t.templateId]&&e[t.templateId][t.version])return e[t.templateId][t.version].dataProcessors.forEach((function(e){var r,o=((r={})[e]=t.consentStatus,r.event=s.default.CONSENT_CHANGED_EVENT+" "+e,r);n.push(o)})),n;console.error("Consent ".concat(t.templateId," with version ").concat(t.version," not found"))},t.prototype.dispatchConsentChangeFinishedEvent=function(e,n){var s=t.createConsentChangeFinishedEventForConsentArray(e,n);this.dispatchEvent(r.DataExchangeEventTypes.CONSENTS_CHANGED_FINISHED,s)},t.createConsentChangeFinishedEventForConsentArray=function(t,e){var n={event:s.default.CONSENTS_CHANGED_FINISHED};return t.forEach((function(t){if(e[t.templateId]&&e[t.templateId][t.version]){var r=e[t.templateId][t.version];for(var s in r.dataProcessors)if(Object.prototype.hasOwnProperty.call(r.dataProcessors,s)){var o=r.dataProcessors[s];n[o]=t.consentStatus}}else console.error("Consent "+t.templateId+" with version "+t.version+" not found")})),n},t.prototype.dispatchEvent=function(e,n){var r=this,s=Object.keys(n);!s.length||1===s.length&&"event"===s[0]||this.dataExchangeArray.forEach((function(s){switch(s.type){case 1:t.isEventInDataExchangeElementArray(e,s.events)&&r.pushDataIntoGivenDatalayer(n,s.names);break;case 3:t.isEventInDataExchangeElementArray(e,s.events)&&r.updateGivenVariableWithData(n,s.names);break;case 4:t.isEventInDataExchangeElementArray(e,s.events)&&r.triggerGivenEventWithData(n,s.names)}}))},t.updatePrivacyProxy=function(t){"object"==typeof window.uc&&"function"==typeof window.uc.setStatus&&t.forEach((function(t){window.uc.setStatus(t.templateId,t.consentStatus)}))},t.prototype.pushGCMId=function(t){t&&(window.dataLayer=window.dataLayer||[],u("set","developer_id.dOThhZD",!0))},t.prototype.pushGCMData=function(t,e){if(e){var n=this.dataExchangeArray.find((function(t){return 1===t.type}));if(n&&n.names.includes(c)){var r=!1,s=!1,d=!1,l=!1;t.forEach((function(t){void 0!==t&&(i.includes(t.templateId)&&t.unsavedConsentStatus&&(r=!0),o.includes(t.templateId)&&(l=!0,t.unsavedConsentStatus||(d=!0)))})),l&&!d&&(s=!0),u("consent","update",{ad_storage:s?"granted":"denied",analytics_storage:r?"granted":"denied"}),u("set",a,!s)}}},t.prototype.pushDataIntoGivenDatalayer=function(t,e){var n=this;e.forEach((function(e){var r=window[e]||[],s=e.split(".");if(s&&s.length>1)window[s[0]]=window[s[0]]||{},n.setValueInSubObject(window,s,t,!0);else{if(!Array.isArray(r)&&!r.hasOwnProperty("push"))return void console.error("".concat(e," should be an array or object with push function, but its value is "),r);r.push(t),window[e]=r}}))},t.prototype.triggerGivenEventWithData=function(t,e){e.forEach((function(e){var n=document.createEvent("HTMLEvents");n.initEvent(e,true,true),n.event=t.event,n.data=t,window.dispatchEvent(n)}))},t.prototype.updateGivenVariableWithData=function(t,e){for(var n in e)if(Object.prototype.hasOwnProperty.call(e,n)){var r=e[n],s=r.split(".");s&&s.length>1?(window[s[0]]=window[s[0]]||{},this.setValueInSubObject(window,s,t)):window[r]=t}},t.prototype.setValueInSubObject=function(t,e,n,r){if(e.length>1){t[e[0]]=t[e[0]]||{};var s=t[e[0]];e.shift(),this.setValueInSubObject(s,e,n,r)}else if(r){if(t[e[0]]=t[e[0]]||[],!Array.isArray(t[e[0]])&&!t[e[0]].hasOwnProperty("push"))return void console.error("".concat(e[0]," should be an array or object with push function, but its value is "),t[e[0]]);t[e[0]].push(n)}else t[e[0]]=n},t.isEventInDataExchangeElementArray=function(t,e){return-1!==e.indexOf(t)},t}();e.default=d},5275:function(t,e,n){"use strict";var r=n(2702),s=this&&this.__awaiter||function(t,e,n,s){return new(n||(n=r))((function(r,o){function i(t){try{c(s.next(t))}catch(t){o(t)}}function a(t){try{c(s.throw(t))}catch(t){o(t)}}function c(t){var e;t.done?r(t.value):(e=t.value,e instanceof n?e:new n((function(t){t(e)}))).then(i,a)}c((s=s.apply(t,e||[])).next())}))},o=this&&this.__generator||function(t,e){var n,r,s,o,i={label:0,sent:function(){if(1&s[0])throw s[1];return s[1]},trys:[],ops:[]};return o={next:a(0),throw:a(1),return:a(2)},"function"==typeof Symbol&&(o[Symbol.iterator]=function(){return this}),o;function a(o){return function(a){return function(o){if(n)throw new TypeError("Generator is already executing.");for(;i;)try{if(n=1,r&&(s=2&o[0]?r.return:o[0]?r.throw||((s=r.return)&&s.call(r),0):r.next)&&!(s=s.call(r,o[1])).done)return s;switch(r=0,s&&(o=[2&o[0],s.value]),o[0]){case 0:case 1:s=o;break;case 4:return i.label++,{value:o[1],done:!1};case 5:i.label++,r=o[1],o=[0];continue;case 7:o=i.ops.pop(),i.trys.pop();continue;default:if(!(s=i.trys,(s=s.length>0&&s[s.length-1])||6!==o[0]&&2!==o[0])){i=0;continue}if(3===o[0]&&(!s||o[1]>s[0]&&o[1]<s[3])){i.label=o[1];break}if(6===o[0]&&i.label<s[1]){i.label=s[1],s=o;break}if(s&&i.label<s[2]){i.label=s[2],i.ops.push(o);break}s[2]&&i.ops.pop(),i.trys.pop();continue}o=e.call(t,i)}catch(t){o=[6,t],r=0}finally{n=s=0}if(5&o[0])throw o[1];return{value:o[0]?o[1]:void 0,done:!0}}([o,a])}}};Object.defineProperty(e,"__esModule",{value:!0}),e.UcFortTagManagerService=void 0;var i=function(){function t(t){this.isFromMainScript=t,this.isTagExecuted={},this.isConsentExecuted={},t?window.usercentrics.isConsentExecuted={}:window.usercentrics.isConsentExecuted&&(this.isConsentExecuted=window.usercentrics.isConsentExecuted,delete window.usercentrics.isConsentExecuted)}return t.prototype.updateScriptsTypeForConsents=function(t){var e=this;t.consents.forEach((function(n){var r=t.consentTemplates[n.templateId]&&t.consentTemplates[n.templateId][n.version]?t.consentTemplates[n.templateId][n.version]:null;e.updateScriptsTypeForConsent(n,r)}))},t.prototype.updateScriptsTypeForConsent=function(t,e){return s(this,void 0,void 0,(function(){var n,r,s;return o(this,(function(o){switch(o.label){case 0:if(!t||!e||!e.dataProcessors||this.isConsentExecuted[t.templateId])return[2];if(!(n=document.querySelectorAll("[data-usercentrics='".concat(e.dataProcessors[0],"']")))||!n.length)return[3,4];this.isFromMainScript?window.usercentrics.isConsentExecuted[t.templateId]=t.unsavedConsentStatus:this.isConsentExecuted[t.templateId]=t.unsavedConsentStatus,r=Array.from(n),s=0,o.label=1;case 1:return s<r.length?[4,this.updateScriptTypeForConsent(r[s],t)]:[3,4];case 2:o.sent(),o.label=3;case 3:return s++,[3,1];case 4:return[2]}}))}))},t.prototype.updateScriptTypeForConsent=function(t,e){return s(this,void 0,void 0,(function(){var n,r;return o(this,(function(s){switch(s.label){case 0:return e.unsavedConsentStatus&&"text/plain"===t.getAttribute("Type")?this.isTagExecuted[t.getAttribute("src")]?(t.setAttribute("Type","text/javascript"),[2]):(n=t.parentNode,r=document.createElement("script"),Object.keys(t.attributes).forEach((function(e){var n=t.attributes[e].name;r.setAttribute(n,t.getAttribute(n))})),r.setAttribute("Type","text/javascript"),t.getAttribute("src")?this.isTagExecuted[t.getAttribute("src")]=!0:t.textContent&&(r.textContent=t.textContent),n.removeChild(t),n.appendChild(r),t.getAttribute("src")?[4,this.loadScript(r)]:[3,2]):[3,3];case 1:s.sent(),s.label=2;case 2:return[3,4];case 3:e.unsavedConsentStatus?t.getAttribute("src")&&(this.isTagExecuted[t.getAttribute("src")]=!0):t.setAttribute("Type","text/plain"),s.label=4;case 4:return[2]}}))}))},t.prototype.loadScript=function(t){return s(this,void 0,void 0,(function(){return o(this,(function(e){return[2,new r((function(e){t.onload=function(){e()},t.onerror=function(){e()}}))]}))}))},t}();e.UcFortTagManagerService=i},8611:function(t,e){"use strict";Object.defineProperty(e,"__esModule",{value:!0}),e.WhitelistedDomainService=void 0;var n=function(){function t(){}return t.verifyDomain=function(t){var e=window.location.hostname;return!(-1===t.indexOf(e)&&!this.isLocalhost(window.location.hostname))&&(console.log("app is accessed from localhost"),!0)},t.isLocalhost=function(t){return["localhost","10.0.2.2"].some((function(e){return t===e}))},t}();e.WhitelistedDomainService=n}},e={};function n(r){var s=e[r];if(void 0!==s)return s.exports;var o=e[r]={exports:{}};return t[r].call(o.exports,o,o.exports,n),o.exports}n.g=function(){if("object"==typeof globalThis)return globalThis;try{return this||new Function("return this")()}catch(t){if("object"==typeof window)return window}}();!function(){"use strict";n(8925);var t=n(4422),e=n(8611),r=n(5275),s=function(t){return JSON.parse(t)},o=function(t,e){var n,r=t.split(":");if(a(r),1===r.length)n=0;else if(e&&e.settingsId&&r.indexOf(e.settingsId)>-1)n=r.indexOf(e.settingsId);else{n=Math.floor(Math.random()*r.length);var o=localStorage.getItem("ucSettings");if(null!==o)try{for(var i=s(o),c=0;c<r.length;c++)if(i.hasOwnProperty(r[c])){n=c;break}}catch(t){console.error(t)}}return r[n]},i=function(t,e){try{localStorage.setItem(t,e)}catch(e){console.warn("UC Warning: localstoage failed for key ".concat(t)),console.warn(e)}},a=function(t){var e=localStorage.getItem("usercentrics"),n=e?s(e):{};n.settingsIds=t,i("usercentrics",JSON.stringify(n))},c=function(t){var e=localStorage.getItem("usercentrics"),n=null;if(!e)return n;var r=s(e);return r&&"object"==typeof r&&r.hasOwnProperty(t)?n=r[t]:n},u=function(t,n){if(!(window.usercentrics.settingsId||window.usercentrics.paths&&window.usercentrics.paths.settings))throw new Error("No settingsId found");var r=c("settings");if(r){if(window.usercentrics.settingsId&&r.settingsId!==window.usercentrics.settingsId){localStorage.removeItem("usercentrics"),localStorage.removeItem("ucConsents");var o=localStorage.getItem("ucSettings");if(null!==o)try{var a=s(o);a.hasOwnProperty(window.usercentrics.settingsId)&&(i("usercentrics",JSON.stringify(a[window.usercentrics.settingsId].usercentrics)),i("ucConsents",JSON.stringify(a[window.usercentrics.settingsId].ucConsents)))}catch(t){console.error(t)}}h(r)}var u=window.usercentrics.version,d=document.createElement("script");d.type="text/javascript",d.async=!0;var l="bundle.js";window.usercentrics.paths&&window.usercentrics.paths.bundle?(window.usercentrics.baseUrl=t,d.setAttribute("src",window.usercentrics.paths.bundle)):n?(window.localhost=!0,t=e.WhitelistedDomainService.isLocalhost(window.location.hostname)?window.location.origin:"http://localhost:8080",window.usercentrics.baseUrl=t,d.setAttribute("src","".concat(t,"/").concat(l))):d.setAttribute("src","".concat(t,"/").concat(u,"/").concat(l)),document.head.appendChild(d)},d=function(){var t=localStorage.getItem("ucConsents");if(!t)return null;var e=s(t);return e&&"object"==typeof e&&e.hasOwnProperty("consents")?e:null},l=function(t){var e=[],n=d();return n?(n.consents.forEach((function(r){if((void 0===t||r.templateId===t)&&void 0!==n.consentTemplates[r.templateId]&&void 0!==n.consentTemplates[r.templateId][r.version]){var s=n.consentTemplates[r.templateId][r.version];for(var o in s)r[o]=s[o];e.push(r)}})),e.sort((function(t,e){var n=t.dataProcessors[0].toUpperCase(),r=e.dataProcessors[0].toUpperCase();return n<r?-1:n>r?1:void 0})),void 0!==t&&e.length?e[0]:e):e},f=function(t,e,n){if(!t||localStorage&&localStorage.getItem("usercentrics"))window.usercentrics.isSinglePageApp?window.addEventListener("load",(function(){u(e,n)})):document.head?u(e,n):document.addEventListener("DOMContentLoaded",(function(){u(e,n)}));else{var r=function(){return function(t,e,n){document.removeEventListener("mousemove",n,!1),document.removeEventListener("touchstart",n,!1),document.removeEventListener("keyup",n,!1),u(t,e)}(e,n,r)};document.addEventListener("mousemove",r,!1),document.addEventListener("touchstart",r,!1),document.addEventListener("keyup",r,!1)}},h=function(e){var n=d();if(n&&n.consents&&e){var s=new t.default;s.dataExchangeArray=e.dataExchangeOnPage,s.consentInitializedFromStorage(n.consents,n.consentTemplates),(null==e?void 0:e.googleConsentMode)&&(s.pushGCMId(!0),s.pushGCMData(n.consents,!0)),t.default.updatePrivacyProxy(n.consents);var o=new r.UcFortTagManagerService(!0);"complete"===document.readyState||"interactive"===document.readyState?o.updateScriptsTypeForConsents({consents:n.consents,consentTemplates:n.consentTemplates}):document.addEventListener("DOMContentLoaded",(function(){o.updateScriptsTypeForConsents({consents:n.consents,consentTemplates:n.consentTemplates})}))}};!function(){if(window.usercentrics=window.usercentrics||{},window.usercentrics.getConsents=l,!function(){var t=localStorage.getItem("usercentrics"),e=!1;if(null!==t)try{var n=s(t);void 0!==n.blockLoading&&(e=n.blockLoading)}catch(r){console.warn(r)}if(void 0!==window.usercentrics.appLoaded&&window.usercentrics.appLoaded||e){var r="Tried to load Usercentrics twice. (Setting "+window.usercentrics.settingsId+" already loaded) Second load is stopped";return console.error(r),!0}return!1}()){window.usercentrics.appLoaded=!0;var t=c("settings");window.usercentrics.settingsIds&&!window.usercentrics.settingsId&&(window.usercentrics.settingsId=o(window.usercentrics.settingsIds,t));var e="https://app.usercentrics.eu",n=!1,r="latest";if(window.usercentrics.paths&&window.usercentrics.paths.bundle)f(!1,e,n);else{var i=window.location.origin?window.location.origin:window.location.href;if(i.match(/http:\/\/localhost:([0-9]){2,4}/)||window.localhost||i.match(/http:\/\/10.0.2.2:([0-9]){2,4}/))return e=i,n=!0,window.usercentrics.version=r,window.usercentrics.settingsIds?window.usercentrics.settingsId=o(window.usercentrics.settingsIds,t):window.usercentrics.settingsId&&(window.usercentrics.settingsIds=window.usercentrics.settingsId),void f(!1,e,n);for(var a=document.getElementsByTagName("script"),u=0;u<a.length;u++){var d=a[u].getAttribute("id");if(a[u].src&&a[u].src.match(/https:\/\/app\.usercentrics\.eu\/([A-Za-z0-9_\-./])*\/main(-headless)?.js/g)){n=!1;var h=a[u].src.split("/");h.length>4&&(r=h[h.length-2],e=a[u].src.slice(0,a[u].src.indexOf(r)-1));var p=null;a[u].getAttribute("language")&&(p=a[u].getAttribute("language")),a[u].dataset&&void 0!==a[u].dataset.language&&(p=a[u].dataset.language),void 0!==window.usercentrics.defaultLanguage&&(p=window.usercentrics.defaultLanguage),null!==p&&null!==p&&""!==p&&"automatic"!==p&&(window.usercentrics.language=p.split("-")[0].toLowerCase()),window.usercentrics.baseUrl=e,d&&void 0!==d?(window.usercentrics.settingsIds=d,window.usercentrics.settingsId=o(d,t)):window.usercentrics.settingsId&&(window.usercentrics.settingsIds=window.usercentrics.settingsId),window.usercentrics.version=r,f(a[u].getAttribute("data-lazyload"),e,n);break}}window.usercentrics.version=r}}}()}()}();