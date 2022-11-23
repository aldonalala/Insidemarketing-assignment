!function(a,b){"object"==typeof module&&"object"==typeof module.exports?module.exports=a.document?b(a,!0):function(a){if(!a.document)throw new Error("jQuery requires a window with a document");return b(a)}:b(a)}("undefined"!=typeof window?window:this,function(a,b){var c=[],d=a.document,e=c.slice,f=c.concat,g=c.push,h=c.indexOf,i={},j=i.toString,k=i.hasOwnProperty,l={},m="1.12.4",n=function(a,b){return new n.fn.init(a,b)},o=/^[\s\uFEFF\xA0]+|[\s\uFEFF\xA0]+$/g,p=/^-ms-/,q=/-([\da-z])/gi,r=function(a,b){return b.toUpperCase()};n.fn=n.prototype={jquery:m,constructor:n,selector:"",length:0,toArray:function(){return e.call(this)},get:function(a){return null!=a?a<0?this[a+this.length]:this[a]:e.call(this)},pushStack:function(a){var b=n.merge(this.constructor(),a);return b.prevObject=this,b.context=this.context,b},each:function(a){return n.each(this,a)},map:function(a){return this.pushStack(n.map(this,function(b,c){return a.call(b,c,b)}))},slice:function(){return this.pushStack(e.apply(this,arguments))},first:function(){return this.eq(0)},last:function(){return this.eq(-1)},eq:function(a){var b=this.length,c=+a+(a<0?b:0);return this.pushStack(c>=0&&c<b?[this[c]]:[])},end:function(){return this.prevObject||this.constructor()},push:g,sort:c.sort,splice:c.splice},n.extend=n.fn.extend=function(){var a,b,c,d,e,f,g=arguments[0]||{},h=1,i=arguments.length,j=!1;for("boolean"==typeof g&&(j=g,g=arguments[h]||{},h++),"object"==typeof g||n.isFunction(g)||(g={}),h===i&&(g=this,h--);h<i;h++)if(null!=(e=arguments[h]))for(d in e)a=g[d],c=e[d],"__proto__"!==d&&g!==c&&(j&&c&&(n.isPlainObject(c)||(b=n.isArray(c)))?(b?(b=!1,f=a&&n.isArray(a)?a:[]):f=a&&n.isPlainObject(a)?a:{},g[d]=n.extend(j,f,c)):void 0!==c&&(g[d]=c));return g},n.extend({expando:"jQuery"+(m+Math.random()).replace(/\D/g,""),isReady:!0,error:function(a){throw new Error(a)},noop:function(){},isFunction:function(a){return"function"===n.type(a)},isArray:Array.isArray||function(a){return"array"===n.type(a)},isWindow:function(a){return null!=a&&a==a.window},isNumeric:function(a){var b=a&&a.toString();return!n.isArray(a)&&b-parseFloat(b)+1>=0},isEmptyObject:function(a){var b;for(b in a)return!1;return!0},isPlainObject:function(a){var b;if(!a||"object"!==n.type(a)||a.nodeType||n.isWindow(a))return!1;try{if(a.constructor&&!k.call(a,"constructor")&&!k.call(a.constructor.prototype,"isPrototypeOf"))return!1}catch(c){return!1}if(!l.ownFirst)for(b in a)return k.call(a,b);for(b in a);return void 0===b||k.call(a,b)},type:function(a){return null==a?a+"":"object"==typeof a||"function"==typeof a?i[j.call(a)]||"object":typeof a},globalEval:function(b){b&&n.trim(b)&&(a.execScript||function(b){a.eval.call(a,b)})(b)},camelCase:function(a){return a.replace(p,"ms-").replace(q,r)},nodeName:function(a,b){return a.nodeName&&a.nodeName.toLowerCase()===b.toLowerCase()},each:function(a,b){var c,d=0;if(s(a)){for(c=a.length;d<c;d++)if(!1===b.call(a[d],d,a[d]))break}else for(d in a)if(!1===b.call(a[d],d,a[d]))break;return a},trim:function(a){return null==a?"":(a+"").replace(o,"")},makeArray:function(a,b){var c=b||[];return null!=a&&(s(Object(a))?n.merge(c,"string"==typeof a?[a]:a):g.call(c,a)),c},inArray:function(a,b,c){var d;if(b){if(h)return h.call(b,a,c);for(d=b.length,c=c?c<0?Math.max(0,d+c):c:0;c<d;c++)if(c in b&&b[c]===a)return c}return-1},merge:function(a,b){var c=+b.length,d=0,e=a.length;while(d<c)a[e++]=b[d++];if(c!==c)while(void 0!==b[d])a[e++]=b[d++];return a.length=e,a},grep:function(a,b,c){for(var d,e=[],f=0,g=a.length,h=!c;f<g;f++)(d=!b(a[f],f))!==h&&e.push(a[f]);return e},map:function(a,b,c){var d,e,g=0,h=[];if(s(a))for(d=a.length;g<d;g++)null!=(e=b(a[g],g,c))&&h.push(e);else for(g in a)null!=(e=b(a[g],g,c))&&h.push(e);return f.apply([],h)},guid:1,proxy:function(a,b){var c,d,f;if("string"==typeof b&&(f=a[b],b=a,a=f),n.isFunction(a))return c=e.call(arguments,2),d=function(){return a.apply(b||this,c.concat(e.call(arguments)))},d.guid=a.guid=a.guid||n.guid++,d},now:function(){return+new Date},support:l}),"function"==typeof Symbol&&(n.fn[Symbol.iterator]=c[Symbol.iterator]),n.each("Boolean Number String Function Array Date RegExp Object Error Symbol".split(" "),function(a,b){i["[object "+b+"]"]=b.toLowerCase()});function s(a){var b=!!a&&"length"in a&&a.length,c=n.type(a);return"function"!==c&&!n.isWindow(a)&&("array"===c||0===b||"number"==typeof b&&b>0&&b-1 in a)}var t=function(a){var b,c,d,e,f,g,h,i,j,k,l,m,n,o,p,q,r,s,t,u="sizzle"+1*new Date,v=a.document,w=0,x=0,y=fa(),z=fa(),A=fa(),B=function(a,b){return a===b&&(l=!0),0},C=1<<31,D={}.hasOwnProperty,E=[],F=E.pop,G=E.push,H=E.push,I=E.slice,J=function(a,b){for(var c=0,d=a.length;c<d;c++)if(a[c]===b)return c;return-1},K="checked|selected|async|autofocus|autoplay|controls|defer|disabled|hidden|ismap|loop|multiple|open|readonly|required|scoped",L="[\\x20\\t\\r\\n\\f]",M="(?:\\\\.|[\\w-]|[^\\x00-\\xa0])+",N="\\["+L+"*("+M+")(?:"+L+"*([*^$|!~]?=)"+L+"*(?:'((?:\\\\.|[^\\\\'])*)'|\"((?:\\\\.|[^\\\\\"])*)\"|("+M+"))|)"+L+"*\\]",O=":("+M+")(?:\\((('((?:\\\\.|[^\\\\'])*)'|\"((?:\\\\.|[^\\\\\"])*)\")|((?:\\\\.|[^\\\\()[\\]]|"+N+")*)|.*)\\)|)",P=new RegExp(L+"+","g"),Q=new RegExp("^"+L+"+|((?:^|[^\\\\])(?:\\\\.)*)"+L+"+$","g"),R=new RegExp("^"+L+"*,"+L+"*"),S=new RegExp("^"+L+"*([>+~]|"+L+")"+L+"*"),T=new RegExp("="+L+"*([^\\]'\"]*?)"+L+"*\\]","g"),U=new RegExp(O),V=new RegExp("^"+M+"$"),W={ID:new RegExp("^#("+M+")"),CLASS:new RegExp("^\\.("+M+")"),TAG:new RegExp("^("+M+"|[*])"),ATTR:new RegExp("^"+N),PSEUDO:new RegExp("^"+O),CHILD:new RegExp("^:(only|first|last|nth|nth-last)-(child|of-type)(?:\\("+L+"*(even|odd|(([+-]|)(\\d*)n|)"+L+"*(?:([+-]|)"+L+"*(\\d+)|))"+L+"*\\)|)","i"),bool:new RegExp("^(?:"+K+")$","i"),needsContext:new RegExp("^"+L+"*[>+~]|:(even|odd|eq|gt|lt|nth|first|last)(?:\\("+L+"*((?:-\\d)?\\d*)"+L+"*\\)|)(?=[^-]|$)","i")},X=/^(?:input|select|textarea|button)$/i,Y=/^h\d$/i,Z=/^[^{]+\{\s*\[native \w/,$=/^(?:#([\w-]+)|(\w+)|\.([\w-]+))$/,_=/[+~]/,aa=/'|\\/g,ba=new RegExp("\\\\([\\da-f]{1,6}"+L+"?|("+L+")|.)","ig"),ca=function(a,b,c){var d="0x"+b-65536;return d!==d||c?b:d<0?String.fromCharCode(d+65536):String.fromCharCode(d>>10|55296,1023&d|56320)},da=function(){m()};try{H.apply(E=I.call(v.childNodes),v.childNodes),E[v.childNodes.length].nodeType}catch(xa){H={apply:E.length?function(a,b){G.apply(a,I.call(b))}:function(a,b){var c=a.length,d=0;while(a[c++]=b[d++]);a.length=c-1}}}function ea(a,b,d,e){var f,h,j,k,l,o,r,s,w=b&&b.ownerDocument,x=b?b.nodeType:9;if(d=d||[],"string"!=typeof a||!a||1!==x&&9!==x&&11!==x)return d;if(!e&&((b?b.ownerDocument||b:v)!==n&&m(b),b=b||n,p)){if(11!==x&&(o=$.exec(a)))if(f=o[1]){if(9===x){if(!(j=b.getElementById(f)))return d;if(j.id===f)return d.push(j),d}else if(w&&(j=w.getElementById(f))&&t(b,j)&&j.id===f)return d.push(j),d}else{if(o[2])return H.apply(d,b.getElementsByTagName(a)),d;if((f=o[3])&&c.getElementsByClassName&&b.getElementsByClassName)return H.apply(d,b.getElementsByClassName(f)),d}if(c.qsa&&!A[a+" "]&&(!q||!q.test(a))){if(1!==x)w=b,s=a;else if("object"!==b.nodeName.toLowerCase()){(k=b.getAttribute("id"))?k=k.replace(aa,"\\$&"):b.setAttribute("id",k=u),r=g(a),h=r.length,l=V.test(k)?"#"+k:"[id='"+k+"']";while(h--)r[h]=l+" "+pa(r[h]);s=r.join(","),w=_.test(a)&&na(b.parentNode)||b}if(s)try{return H.apply(d,w.querySelectorAll(s)),d}catch(y){}finally{k===u&&b.removeAttribute("id")}}}return i(a.replace(Q,"$1"),b,d,e)}function fa(){var a=[];function b(c,e){return a.push(c+" ")>d.cacheLength&&delete b[a.shift()],b[c+" "]=e}return b}function ga(a){return a[u]=!0,a}function ha(a){var b=n.createElement("div");try{return!!a(b)}catch(xa){return!1}finally{b.parentNode&&b.parentNode.removeChild(b),b=null}}function ia(a,b){var c=a.split("|"),e=c.length;while(e--)d.attrHandle[c[e]]=b}function ja(a,b){var c=b&&a,d=c&&1===a.nodeType&&1===b.nodeType&&(~b.sourceIndex||C)-(~a.sourceIndex||C);if(d)return d;if(c)while(c=c.nextSibling)if(c===b)return-1;return a?1:-1}function ka(a){return function(b){return"input"===b.nodeName.toLowerCase()&&b.type===a}}function la(a){return function(b){var c=b.nodeName.toLowerCase();return("input"===c||"button"===c)&&b.type===a}}function ma(a){return ga(function(b){return b=+b,ga(function(c,d){var e,f=a([],c.length,b),g=f.length;while(g--)c[e=f[g]]&&(c[e]=!(d[e]=c[e]))})})}function na(a){return a&&void 0!==a.getElementsByTagName&&a}c=ea.support={},f=ea.isXML=function(a){var b=a&&(a.ownerDocument||a).documentElement;return!!b&&"HTML"!==b.nodeName},m=ea.setDocument=function(a){var b,e,g=a?a.ownerDocument||a:v;return g!==n&&9===g.nodeType&&g.documentElement?(n=g,o=n.documentElement,p=!f(n),(e=n.defaultView)&&e.top!==e&&(e.addEventListener?e.addEventListener("unload",da,!1):e.attachEvent&&e.attachEvent("onunload",da)),c.attributes=ha(function(a){return a.className="i",!a.getAttribute("className")}),c.getElementsByTagName=ha(function(a){return a.appendChild(n.createComment("")),!a.getElementsByTagName("*").length}),c.getElementsByClassName=Z.test(n.getElementsByClassName),c.getById=ha(function(a){return o.appendChild(a).id=u,!n.getElementsByName||!n.getElementsByName(u).length}),c.getById?(d.find.ID=function(a,b){if(void 0!==b.getElementById&&p){var c=b.getElementById(a);return c?[c]:[]}},d.filter.ID=function(a){var b=a.replace(ba,ca);return function(a){return a.getAttribute("id")===b}}):(delete d.find.ID,d.filter.ID=function(a){var b=a.replace(ba,ca);return function(a){var c=void 0!==a.getAttributeNode&&a.getAttributeNode("id");return c&&c.value===b}}),d.find.TAG=c.getElementsByTagName?function(a,b){return void 0!==b.getElementsByTagName?b.getElementsByTagName(a):c.qsa?b.querySelectorAll(a):void 0}:function(a,b){var c,d=[],e=0,f=b.getElementsByTagName(a);if("*"===a){while(c=f[e++])1===c.nodeType&&d.push(c);return d}return f},d.find.CLASS=c.getElementsByClassName&&function(a,b){if(void 0!==b.getElementsByClassName&&p)return b.getElementsByClassName(a)},r=[],q=[],(c.qsa=Z.test(n.querySelectorAll))&&(ha(function(a){o.appendChild(a).innerHTML="<a id='"+u+"'></a><select id='"+u+"-\r\\' msallowcapture=''><option selected=''></option></select>",a.querySelectorAll("[msallowcapture^='']").length&&q.push("[*^$]="+L+"*(?:''|\"\")"),a.querySelectorAll("[selected]").length||q.push("\\["+L+"*(?:value|"+K+")"),a.querySelectorAll("[id~="+u+"-]").length||q.push("~="),a.querySelectorAll(":checked").length||q.push(":checked"),a.querySelectorAll("a#"+u+"+*").length||q.push(".#.+[+~]")}),ha(function(a){var b=n.createElement("input");b.setAttribute("type","hidden"),a.appendChild(b).setAttribute("name","D"),a.querySelectorAll("[name=d]").length&&q.push("name"+L+"*[*^$|!~]?="),a.querySelectorAll(":enabled").length||q.push(":enabled",":disabled"),a.querySelectorAll("*,:x"),q.push(",.*:")})),(c.matchesSelector=Z.test(s=o.matches||o.webkitMatchesSelector||o.mozMatchesSelector||o.oMatchesSelector||o.msMatchesSelector))&&ha(function(a){c.disconnectedMatch=s.call(a,"div"),s.call(a,"[s!='']:x"),r.push("!=",O)}),q=q.length&&new RegExp(q.join("|")),r=r.length&&new RegExp(r.join("|")),b=Z.test(o.compareDocumentPosition),t=b||Z.test(o.contains)?function(a,b){var c=9===a.nodeType?a.documentElement:a,d=b&&b.parentNode;return a===d||!(!d||1!==d.nodeType||!(c.contains?c.contains(d):a.compareDocumentPosition&&16&a.compareDocumentPosition(d)))}:function(a,b){if(b)while(b=b.parentNode)if(b===a)return!0;return!1},B=b?function(a,b){if(a===b)return l=!0,0;var d=!a.compareDocumentPosition-!b.compareDocumentPosition;return d||(d=(a.ownerDocument||a)===(b.ownerDocument||b)?a.compareDocumentPosition(b):1,1&d||!c.sortDetached&&b.compareDocumentPosition(a)===d?a===n||a.ownerDocument===v&&t(v,a)?-1:b===n||b.ownerDocument===v&&t(v,b)?1:k?J(k,a)-J(k,b):0:4&d?-1:1)}:function(a,b){if(a===b)return l=!0,0;var c,d=0,e=a.parentNode,f=b.parentNode,g=[a],h=[b];if(!e||!f)return a===n?-1:b===n?1:e?-1:f?1:k?J(k,a)-J(k,b):0;if(e===f)return ja(a,b);c=a;while(c=c.parentNode)g.unshift(c);c=b;while(c=c.parentNode)h.unshift(c);while(g[d]===h[d])d++;return d?ja(g[d],h[d]):g[d]===v?-1:h[d]===v?1:0},n):n},ea.matches=function(a,b){return ea(a,null,null,b)},ea.matchesSelector=function(a,b){if((a.ownerDocument||a)!==n&&m(a),b=b.replace(T,"='$1']"),c.matchesSelector&&p&&!A[b+" "]&&(!r||!r.test(b))&&(!q||!q.test(b)))try{var d=s.call(a,b);if(d||c.disconnectedMatch||a.document&&11!==a.document.nodeType)return d}catch(xa){}return ea(b,n,null,[a]).length>0},ea.contains=function(a,b){return(a.ownerDocument||a)!==n&&m(a),t(a,b)},ea.attr=function(a,b){(a.ownerDocument||a)!==n&&m(a);var e=d.attrHandle[b.toLowerCase()],f=e&&D.call(d.attrHandle,b.toLowerCase())?e(a,b,!p):void 0;return void 0!==f?f:c.attributes||!p?a.getAttribute(b):(f=a.getAttributeNode(b))&&f.specified?f.value:null},ea.error=function(a){throw new Error("Syntax error, unrecognized expression: "+a)},ea.uniqueSort=function(a){var b,d=[],e=0,f=0;if(l=!c.detectDuplicates,k=!c.sortStable&&a.slice(0),a.sort(B),l){while(b=a[f++])b===a[f]&&(e=d.push(f));while(e--)a.splice(d[e],1)}return k=null,a},e=ea.getText=function(a){var b,c="",d=0,f=a.nodeType;if(f){if(1===f||9===f||11===f){if("string"==typeof a.textContent)return a.textContent;for(a=a.firstChild;a;a=a.nextSibling)c+=e(a)}else if(3===f||4===f)return a.nodeValue}else while(b=a[d++])c+=e(b);return c},d=ea.selectors={cacheLength:50,createPseudo:ga,match:W,attrHandle:{},find:{},relative:{">":{dir:"parentNode",first:!0}," ":{dir:"parentNode"},"+":{dir:"previousSibling",first:!0},"~":{dir:"previousSibling"}},preFilter:{ATTR:function(a){return a[1]=a[1].replace(ba,ca),a[3]=(a[3]||a[4]||a[5]||"").replace(ba,ca),"~="===a[2]&&(a[3]=" "+a[3]+" "),a.slice(0,4)},CHILD:function(a){return a[1]=a[1].toLowerCase(),"nth"===a[1].slice(0,3)?(a[3]||ea.error(a[0]),a[4]=+(a[4]?a[5]+(a[6]||1):2*("even"===a[3]||"odd"===a[3])),a[5]=+(a[7]+a[8]||"odd"===a[3])):a[3]&&ea.error(a[0]),a},PSEUDO:function(a){var b,c=!a[6]&&a[2];return W.CHILD.test(a[0])?null:(a[3]?a[2]=a[4]||a[5]||"":c&&U.test(c)&&(b=g(c,!0))&&(b=c.indexOf(")",c.length-b)-c.length)&&(a[0]=a[0].slice(0,b),a[2]=c.slice(0,b)),a.slice(0,3))}},filter:{TAG:function(a){var b=a.replace(ba,ca).toLowerCase();return"*"===a?function(){return!0}:function(a){return a.nodeName&&a.nodeName.toLowerCase()===b}},CLASS:function(a){var b=y[a+" "];return b||(b=new RegExp("(^|"+L+")"+a+"("+L+"|$)"))&&y(a,function(a){return b.test("string"==typeof a.className&&a.className||void 0!==a.getAttribute&&a.getAttribute("class")||"")})},ATTR:function(a,b,c){return function(d){var e=ea.attr(d,a);return null==e?"!="===b:!b||(e+="","="===b?e===c:"!="===b?e!==c:"^="===b?c&&0===e.indexOf(c):"*="===b?c&&e.indexOf(c)>-1:"$="===b?c&&e.slice(-c.length)===c:"~="===b?(" "+e.replace(P," ")+" ").indexOf(c)>-1:"|="===b&&(e===c||e.slice(0,c.length+1)===c+"-"))}},CHILD:function(a,b,c,d,e){var f="nth"!==a.slice(0,3),g="last"!==a.slice(-4),h="of-type"===b;return 1===d&&0===e?function(a){return!!a.parentNode}:function(b,c,i){var j,k,l,m,n,o,p=f!==g?"nextSibling":"previousSibling",q=b.parentNode,r=h&&b.nodeName.toLowerCase(),s=!i&&!h,t=!1;if(q){if(f){while(p){m=b;while(m=m[p])if(h?m.nodeName.toLowerCase()===r:1===m.nodeType)return!1;o=p="only"===a&&!o&&"nextSibling"}return!0}if(o=[g?q.firstChild:q.lastChild],g&&s){m=q,l=m[u]||(m[u]={}),k=l[m.uniqueID]||(l[m.uniqueID]={}),j=k[a]||[],n=j[0]===w&&j[1],t=n&&j[2],m=n&&q.childNodes[n];while(m=++n&&m&&m[p]||(t=n=0)||o.pop())if(1===m.nodeType&&++t&&m===b){k[a]=[w,n,t];break}}else if(s&&(m=b,l=m[u]||(m[u]={}),k=l[m.uniqueID]||(l[m.uniqueID]={}),j=k[a]||[],n=j[0]===w&&j[1],t=n),!1===t)while(m=++n&&m&&m[p]||(t=n=0)||o.pop())if((h?m.nodeName.toLowerCase()===r:1===m.nodeType)&&++t&&(s&&(l=m[u]||(m[u]={}),k=l[m.uniqueID]||(l[m.uniqueID]={}),k[a]=[w,t]),m===b))break;return(t-=e)===d||t%d==0&&t/d>=0}}},PSEUDO:function(a,b){var c,e=d.pseudos[a]||d.setFilters[a.toLowerCase()]||ea.error("unsupported pseudo: "+a);return e[u]?e(b):e.length>1?(c=[a,a,"",b],d.setFilters.hasOwnProperty(a.toLowerCase())?ga(function(a,c){var d,f=e(a,b),g=f.length;while(g--)d=J(a,f[g]),a[d]=!(c[d]=f[g])}):function(a){return e(a,0,c)}):e}},pseudos:{not:ga(function(a){var b=[],c=[],d=h(a.replace(Q,"$1"));return d[u]?ga(function(a,b,c,e){var f,g=d(a,null,e,[]),h=a.length;while(h--)(f=g[h])&&(a[h]=!(b[h]=f))}):function(a,e,f){return b[0]=a,d(b,null,f,c),b[0]=null,!c.pop()}}),has:ga(function(a){return function(b){return ea(a,b).length>0}}),contains:ga(function(a){return a=a.replace(ba,ca),function(b){return(b.textContent||b.innerText||e(b)).indexOf(a)>-1}}),lang:ga(function(a){return V.test(a||"")||ea.error("unsupported lang: "+a),a=a.replace(ba,ca).toLowerCase(),function(b){var c;do{if(c=p?b.lang:b.getAttribute("xml:lang")||b.getAttribute("lang"))return(c=c.toLowerCase())===a||0===c.indexOf(a+"-")}while((b=b.parentNode)&&1===b.nodeType);return!1}}),target:function(b){var c=a.location&&a.location.hash;return c&&c.slice(1)===b.id},root:function(a){return a===o},focus:function(a){return a===n.activeElement&&(!n.hasFocus||n.hasFocus())&&!!(a.type||a.href||~a.tabIndex)},enabled:function(a){return!1===a.disabled},disabled:function(a){return!0===a.disabled},checked:function(a){var b=a.nodeName.toLowerCase();return"input"===b&&!!a.checked||"option"===b&&!!a.selected},selected:function(a){return a.parentNode&&a.parentNode.selectedIndex,!0===a.selected},empty:function(a){for(a=a.firstChild;a;a=a.nextSibling)if(a.nodeType<6)return!1;return!0},parent:function(a){return!d.pseudos.empty(a)},header:function(a){return Y.test(a.nodeName)},input:function(a){return X.test(a.nodeName)},button:function(a){var b=a.nodeName.toLowerCase();return"input"===b&&"button"===a.type||"button"===b},text:function(a){var b;return"input"===a.nodeName.toLowerCase()&&"text"===a.type&&(null==(b=a.getAttribute("type"))||"text"===b.toLowerCase())},first:ma(function(){return[0]}),last:ma(function(a,b){return[b-1]}),eq:ma(function(a,b,c){return[c<0?c+b:c]}),even:ma(function(a,b){for(var c=0;c<b;c+=2)a.push(c);return a}),odd:ma(function(a,b){for(var c=1;c<b;c+=2)a.push(c);return a}),lt:ma(function(a,b,c){for(var d=c<0?c+b:c;--d>=0;)a.push(d);return a}),gt:ma(function(a,b,c){for(var d=c<0?c+b:c;++d<b;)a.push(d);return a})}},d.pseudos.nth=d.pseudos.eq;for(b in{radio:!0,checkbox:!0,file:!0,password:!0,image:!0})d.pseudos[b]=ka(b);for(b in{submit:!0,reset:!0})d.pseudos[b]=la(b);function oa(){}oa.prototype=d.filters=d.pseudos,d.setFilters=new oa,g=ea.tokenize=function(a,b){var c,e,f,g,h,i,j,k=z[a+" "];if(k)return b?0:k.slice(0);h=a,i=[],j=d.preFilter;while(h){c&&!(e=R.exec(h))||(e&&(h=h.slice(e[0].length)||h),i.push(f=[])),c=!1,(e=S.exec(h))&&(c=e.shift(),f.push({value:c,type:e[0].replace(Q," ")}),h=h.slice(c.length));for(g in d.filter)!(e=W[g].exec(h))||j[g]&&!(e=j[g](e))||(c=e.shift(),f.push({value:c,type:g,matches:e}),h=h.slice(c.length));if(!c)break}return b?h.length:h?ea.error(a):z(a,i).slice(0)};function pa(a){for(var b=0,c=a.length,d="";b<c;b++)d+=a[b].value;return d}function qa(a,b,c){var d=b.dir,e=c&&"parentNode"===d,f=x++;return b.first?function(b,c,f){while(b=b[d])if(1===b.nodeType||e)return a(b,c,f)}:function(b,c,g){var h,i,j,k=[w,f];if(g){while(b=b[d])if((1===b.nodeType||e)&&a(b,c,g))return!0}else while(b=b[d])if(1===b.nodeType||e){if(j=b[u]||(b[u]={}),i=j[b.uniqueID]||(j[b.uniqueID]={}),(h=i[d])&&h[0]===w&&h[1]===f)return k[2]=h[2];if(i[d]=k,k[2]=a(b,c,g))return!0}}}function ra(a){return a.length>1?function(b,c,d){var e=a.length;while(e--)if(!a[e](b,c,d))return!1;return!0}:a[0]}function sa(a,b,c){for(var d=0,e=b.length;d<e;d++)ea(a,b[d],c);return c}function ta(a,b,c,d,e){for(var f,g=[],h=0,i=a.length,j=null!=b;h<i;h++)(f=a[h])&&(c&&!c(f,d,e)||(g.push(f),j&&b.push(h)));return g}function ua(a,b,c,d,e,f){return d&&!d[u]&&(d=ua(d)),e&&!e[u]&&(e=ua(e,f)),ga(function(f,g,h,i){var j,k,l,m=[],n=[],o=g.length,p=f||sa(b||"*",h.nodeType?[h]:h,[]),q=!a||!f&&b?p:ta(p,m,a,h,i),r=c?e||(f?a:o||d)?[]:g:q;if(c&&c(q,r,h,i),d){j=ta(r,n),d(j,[],h,i),k=j.length;while(k--)(l=j[k])&&(r[n[k]]=!(q[n[k]]=l))}if(f){if(e||a){if(e){j=[],k=r.length;while(k--)(l=r[k])&&j.push(q[k]=l);e(null,r=[],j,i)}k=r.length;while(k--)(l=r[k])&&(j=e?J(f,l):m[k])>-1&&(f[j]=!(g[j]=l))}}else r=ta(r===g?r.splice(o,r.length):r),e?e(null,g,r,i):H.apply(g,r)})}function va(a){for(var b,c,e,f=a.length,g=d.relative[a[0].type],h=g||d.relative[" "],i=g?1:0,k=qa(function(a){return a===b},h,!0),l=qa(function(a){return J(b,a)>-1},h,!0),m=[function(a,c,d){var e=!g&&(d||c!==j)||((b=c).nodeType?k(a,c,d):l(a,c,d));return b=null,e}];i<f;i++)if(c=d.relative[a[i].type])m=[qa(ra(m),c)];else{if(c=d.filter[a[i].type].apply(null,a[i].matches),c[u]){for(e=++i;e<f;e++)if(d.relative[a[e].type])break;return ua(i>1&&ra(m),i>1&&pa(a.slice(0,i-1).concat({value:" "===a[i-2].type?"*":""})).replace(Q,"$1"),c,i<e&&va(a.slice(i,e)),e<f&&va(a=a.slice(e)),e<f&&pa(a))}m.push(c)}return ra(m)}function wa(a,b){var c=b.length>0,e=a.length>0,f=function(f,g,h,i,k){var l,o,q,r=0,s="0",t=f&&[],u=[],v=j,x=f||e&&d.find.TAG("*",k),y=w+=null==v?1:Math.random()||.1,z=x.length;for(k&&(j=g===n||g||k);s!==z&&null!=(l=x[s]);s++){if(e&&l){o=0,g||l.ownerDocument===n||(m(l),h=!p);while(q=a[o++])if(q(l,g||n,h)){i.push(l);break}k&&(w=y)}c&&((l=!q&&l)&&r--,f&&t.push(l))}if(r+=s,c&&s!==r){o=0;while(q=b[o++])q(t,u,g,h);if(f){if(r>0)while(s--)t[s]||u[s]||(u[s]=F.call(i));u=ta(u)}H.apply(i,u),k&&!f&&u.length>0&&r+b.length>1&&ea.uniqueSort(i)}return k&&(w=y,j=v),t};return c?ga(f):f}return h=ea.compile=function(a,b){var c,d=[],e=[],f=A[a+" "];if(!f){b||(b=g(a)),c=b.length;while(c--)f=va(b[c]),f[u]?d.push(f):e.push(f);f=A(a,wa(e,d)),f.selector=a}return f},i=ea.select=function(a,b,e,f){var i,j,k,l,m,n="function"==typeof a&&a,o=!f&&g(a=n.selector||a);if(e=e||[],1===o.length){if(j=o[0]=o[0].slice(0),j.length>2&&"ID"===(k=j[0]).type&&c.getById&&9===b.nodeType&&p&&d.relative[j[1].type]){if(!(b=(d.find.ID(k.matches[0].replace(ba,ca),b)||[])[0]))return e;n&&(b=b.parentNode),a=a.slice(j.shift().value.length)}i=W.needsContext.test(a)?0:j.length;while(i--){if(k=j[i],d.relative[l=k.type])break;if((m=d.find[l])&&(f=m(k.matches[0].replace(ba,ca),_.test(j[0].type)&&na(b.parentNode)||b))){if(j.splice(i,1),!(a=f.length&&pa(j)))return H.apply(e,f),e;break}}}return(n||h(a,o))(f,b,!p,e,!b||_.test(a)&&na(b.parentNode)||b),e},c.sortStable=u.split("").sort(B).join("")===u,c.detectDuplicates=!!l,m(),c.sortDetached=ha(function(a){return 1&a.compareDocumentPosition(n.createElement("div"))}),ha(function(a){return a.innerHTML="<a href='#'></a>","#"===a.firstChild.getAttribute("href")})||ia("type|href|height|width",function(a,b,c){if(!c)return a.getAttribute(b,"type"===b.toLowerCase()?1:2)}),c.attributes&&ha(function(a){return a.innerHTML="<input/>",a.firstChild.setAttribute("value",""),""===a.firstChild.getAttribute("value")})||ia("value",function(a,b,c){if(!c&&"input"===a.nodeName.toLowerCase())return a.defaultValue}),ha(function(a){return null==a.getAttribute("disabled")})||ia(K,function(a,b,c){var d;if(!c)return!0===a[b]?b.toLowerCase():(d=a.getAttributeNode(b))&&d.specified?d.value:null}),ea}(a);n.find=t,n.expr=t.selectors,n.expr[":"]=n.expr.pseudos,n.uniqueSort=n.unique=t.uniqueSort,n.text=t.getText,n.isXMLDoc=t.isXML,n.contains=t.contains;var u=function(a,b,c){var d=[],e=void 0!==c;while((a=a[b])&&9!==a.nodeType)if(1===a.nodeType){if(e&&n(a).is(c))break;d.push(a)}return d},v=function(a,b){for(var c=[];a;a=a.nextSibling)1===a.nodeType&&a!==b&&c.push(a);return c},w=n.expr.match.needsContext,x=/^<([\w-]+)\s*\/?>(?:<\/\1>|)$/,y=/^.[^:#\[\.,]*$/;function z(a,b,c){if(n.isFunction(b))return n.grep(a,function(a,d){return!!b.call(a,d,a)!==c});if(b.nodeType)return n.grep(a,function(a){return a===b!==c});if("string"==typeof b){if(y.test(b))return n.filter(b,a,c);b=n.filter(b,a)}return n.grep(a,function(a){return n.inArray(a,b)>-1!==c})}n.filter=function(a,b,c){var d=b[0];return c&&(a=":not("+a+")"),1===b.length&&1===d.nodeType?n.find.matchesSelector(d,a)?[d]:[]:n.find.matches(a,n.grep(b,function(a){return 1===a.nodeType}))},n.fn.extend({find:function(a){var b,c=[],d=this,e=d.length;if("string"!=typeof a)return this.pushStack(n(a).filter(function(){for(b=0;b<e;b++)if(n.contains(d[b],this))return!0}));for(b=0;b<e;b++)n.find(a,d[b],c);return c=this.pushStack(e>1?n.unique(c):c),c.selector=this.selector?this.selector+" "+a:a,c},filter:function(a){return this.pushStack(z(this,a||[],!1))},not:function(a){return this.pushStack(z(this,a||[],!0))},is:function(a){return!!z(this,"string"==typeof a&&w.test(a)?n(a):a||[],!1).length}});var A,B=/^(?:\s*(<[\w\W]+>)[^>]*|#([\w-]*))$/;(n.fn.init=function(a,b,c){var e,f;if(!a)return this;if(c=c||A,"string"==typeof a){if(!(e="<"===a.charAt(0)&&">"===a.charAt(a.length-1)&&a.length>=3?[null,a,null]:B.exec(a))||!e[1]&&b)return!b||b.jquery?(b||c).find(a):this.constructor(b).find(a);if(e[1]){if(b=b instanceof n?b[0]:b,n.merge(this,n.parseHTML(e[1],b&&b.nodeType?b.ownerDocument||b:d,!0)),x.test(e[1])&&n.isPlainObject(b))for(e in b)n.isFunction(this[e])?this[e](b[e]):this.attr(e,b[e]);return this}if((f=d.getElementById(e[2]))&&f.parentNode){if(f.id!==e[2])return A.find(a);this.length=1,this[0]=f}return this.context=d,this.selector=a,this}return a.nodeType?(this.context=this[0]=a,this.length=1,this):n.isFunction(a)?void 0!==c.ready?c.ready(a):a(n):(void 0!==a.selector&&(this.selector=a.selector,this.context=a.context),n.makeArray(a,this))}).prototype=n.fn,A=n(d);var C=/^(?:parents|prev(?:Until|All))/,D={children:!0,contents:!0,next:!0,prev:!0};n.fn.extend({has:function(a){var b,c=n(a,this),d=c.length;return this.filter(function(){for(b=0;b<d;b++)if(n.contains(this,c[b]))return!0})},closest:function(a,b){for(var c,d=0,e=this.length,f=[],g=w.test(a)||"string"!=typeof a?n(a,b||this.context):0;d<e;d++)for(c=this[d];c&&c!==b;c=c.parentNode)if(c.nodeType<11&&(g?g.index(c)>-1:1===c.nodeType&&n.find.matchesSelector(c,a))){f.push(c);break}return this.pushStack(f.length>1?n.uniqueSort(f):f)},index:function(a){return a?"string"==typeof a?n.inArray(this[0],n(a)):n.inArray(a.jquery?a[0]:a,this):this[0]&&this[0].parentNode?this.first().prevAll().length:-1},add:function(a,b){return this.pushStack(n.uniqueSort(n.merge(this.get(),n(a,b))))},addBack:function(a){return this.add(null==a?this.prevObject:this.prevObject.filter(a))}});function E(a,b){do{a=a[b]}while(a&&1!==a.nodeType);return a}n.each({parent:function(a){var b=a.parentNode;return b&&11!==b.nodeType?b:null},parents:function(a){return u(a,"parentNode")},parentsUntil:function(a,b,c){return u(a,"parentNode",c)},next:function(a){return E(a,"nextSibling")},prev:function(a){return E(a,"previousSibling")},nextAll:function(a){return u(a,"nextSibling")},prevAll:function(a){return u(a,"previousSibling")},nextUntil:function(a,b,c){return u(a,"nextSibling",c)},prevUntil:function(a,b,c){return u(a,"previousSibling",c)},siblings:function(a){return v((a.parentNode||{}).firstChild,a)},children:function(a){return v(a.firstChild)},contents:function(a){return n.nodeName(a,"iframe")?a.contentDocument||a.contentWindow.document:n.merge([],a.childNodes)}},function(a,b){n.fn[a]=function(c,d){var e=n.map(this,b,c);return"Until"!==a.slice(-5)&&(d=c),d&&"string"==typeof d&&(e=n.filter(d,e)),this.length>1&&(D[a]||(e=n.uniqueSort(e)),C.test(a)&&(e=e.reverse())),this.pushStack(e)}});var F=/\S+/g;function G(a){var b={};return n.each(a.match(F)||[],function(a,c){b[c]=!0}),b}n.Callbacks=function(a){a="string"==typeof a?G(a):n.extend({},a);var b,c,d,e,f=[],g=[],h=-1,i=function(){for(e=a.once,d=b=!0;g.length;h=-1){c=g.shift();while(++h<f.length)!1===f[h].apply(c[0],c[1])&&a.stopOnFalse&&(h=f.length,c=!1)}a.memory||(c=!1),b=!1,e&&(f=c?[]:"")},j={add:function(){return f&&(c&&!b&&(h=f.length-1,g.push(c)),function b(c){n.each(c,function(c,d){n.isFunction(d)?a.unique&&j.has(d)||f.push(d):d&&d.length&&"string"!==n.type(d)&&b(d)})}(arguments),c&&!b&&i()),this},remove:function(){return n.each(arguments,function(a,b){var c;while((c=n.inArray(b,f,c))>-1)f.splice(c,1),c<=h&&h--}),this},has:function(a){return a?n.inArray(a,f)>-1:f.length>0},empty:function(){return f&&(f=[]),this},disable:function(){return e=g=[],f=c="",this},disabled:function(){return!f},lock:function(){return e=!0,c||j.disable(),this},locked:function(){return!!e},fireWith:function(a,c){return e||(c=c||[],c=[a,c.slice?c.slice():c],g.push(c),b||i()),this},fire:function(){return j.fireWith(this,arguments),this},fired:function(){return!!d}};return j},n.extend({Deferred:function(a){var b=[["resolve","done",n.Callbacks("once memory"),"resolved"],["reject","fail",n.Callbacks("once memory"),"rejected"],["notify","progress",n.Callbacks("memory")]],c="pending",d={state:function(){return c},always:function(){return e.done(arguments).fail(arguments),this},then:function(){var a=arguments;return n.Deferred(function(c){n.each(b,function(b,f){var g=n.isFunction(a[b])&&a[b];e[f[1]](function(){var a=g&&g.apply(this,arguments);a&&n.isFunction(a.promise)?a.promise().progress(c.notify).done(c.resolve).fail(c.reject):c[f[0]+"With"](this===d?c.promise():this,g?[a]:arguments)})}),a=null}).promise()},promise:function(a){return null!=a?n.extend(a,d):d}},e={};return d.pipe=d.then,n.each(b,function(a,f){var g=f[2],h=f[3];d[f[1]]=g.add,h&&g.add(function(){c=h},b[1^a][2].disable,b[2][2].lock),e[f[0]]=function(){return e[f[0]+"With"](this===e?d:this,arguments),this},e[f[0]+"With"]=g.fireWith}),d.promise(e),a&&a.call(e,e),e},when:function(a){var b=0,c=e.call(arguments),d=c.length,f=1!==d||a&&n.isFunction(a.promise)?d:0,g=1===f?a:n.Deferred(),h=function(a,b,c){return function(d){b[a]=this,c[a]=arguments.length>1?e.call(arguments):d,c===i?g.notifyWith(b,c):--f||g.resolveWith(b,c)}},i,j,k;if(d>1)for(i=new Array(d),j=new Array(d),k=new Array(d);b<d;b++)c[b]&&n.isFunction(c[b].promise)?c[b].promise().progress(h(b,j,i)).done(h(b,k,c)).fail(g.reject):--f;return f||g.resolveWith(k,c),g.promise()}});var H;n.fn.ready=function(a){return n.ready.promise().done(a),this},n.extend({isReady:!1,readyWait:1,holdReady:function(a){a?n.readyWait++:n.ready(!0)},ready:function(a){(!0===a?--n.readyWait:n.isReady)||(n.isReady=!0,!0!==a&&--n.readyWait>0||(H.resolveWith(d,[n]),n.fn.triggerHandler&&(n(d).triggerHandler("ready"),n(d).off("ready"))))}});function I(){d.addEventListener?(d.removeEventListener("DOMContentLoaded",J),a.removeEventListener("load",J)):(d.detachEvent("onreadystatechange",J),a.detachEvent("onload",J))}function J(){(d.addEventListener||"load"===a.event.type||"complete"===d.readyState)&&(I(),n.ready())}n.ready.promise=function(b){if(!H)if(H=n.Deferred(),"complete"===d.readyState||"loading"!==d.readyState&&!d.documentElement.doScroll)a.setTimeout(n.ready);else if(d.addEventListener)d.addEventListener("DOMContentLoaded",J),a.addEventListener("load",J);else{d.attachEvent("onreadystatechange",J),a.attachEvent("onload",J);var c=!1;try{c=null==a.frameElement&&d.documentElement}catch(e){}c&&c.doScroll&&function b(){if(!n.isReady){try{c.doScroll("left")}catch(e){return a.setTimeout(b,50)}I(),n.ready()}}()}return H.promise(b)},n.ready.promise();var K;for(K in n(l))break;l.ownFirst="0"===K,l.inlineBlockNeedsLayout=!1,n(function(){var a,b,c,e;(c=d.getElementsByTagName("body")[0])&&c.style&&(b=d.createElement("div"),e=d.createElement("div"),e.style.cssText="position:absolute;border:0;width:0;height:0;top:0;left:-9999px",c.appendChild(e).appendChild(b),void 0!==b.style.zoom&&(b.style.cssText="display:inline;margin:0;border:0;padding:1px;width:1px;zoom:1",l.inlineBlockNeedsLayout=a=3===b.offsetWidth,a&&(c.style.zoom=1)),c.removeChild(e))}),function(){var a=d.createElement("div");l.deleteExpando=!0;try{delete a.test}catch(b){l.deleteExpando=!1}a=null}();var L=function(a){var b=n.noData[(a.nodeName+" ").toLowerCase()],c=+a.nodeType||1;return(1===c||9===c)&&(!b||!0!==b&&a.getAttribute("classid")===b)},M=/^(?:\{[\w\W]*\}|\[[\w\W]*\])$/,N=/([A-Z])/g;function O(a,b,c){if(void 0===c&&1===a.nodeType){var d="data-"+b.replace(N,"-$1").toLowerCase();if("string"==typeof(c=a.getAttribute(d))){try{c="true"===c||"false"!==c&&("null"===c?null:+c+""===c?+c:M.test(c)?n.parseJSON(c):c)}catch(e){}n.data(a,b,c)}else c=void 0}return c}function P(a){var b
;for(b in a)if(("data"!==b||!n.isEmptyObject(a[b]))&&"toJSON"!==b)return!1;return!0}function Q(a,b,d,e){if(L(a)){var f,g,h=n.expando,i=a.nodeType,j=i?n.cache:a,k=i?a[h]:a[h]&&h;if(k&&j[k]&&(e||j[k].data)||void 0!==d||"string"!=typeof b)return k||(k=i?a[h]=c.pop()||n.guid++:h),j[k]||(j[k]=i?{}:{toJSON:n.noop}),"object"!=typeof b&&"function"!=typeof b||(e?j[k]=n.extend(j[k],b):j[k].data=n.extend(j[k].data,b)),g=j[k],e||(g.data||(g.data={}),g=g.data),void 0!==d&&(g[n.camelCase(b)]=d),"string"==typeof b?null==(f=g[b])&&(f=g[n.camelCase(b)]):f=g,f}}function R(a,b,c){if(L(a)){var d,e,f=a.nodeType,g=f?n.cache:a,h=f?a[n.expando]:n.expando;if(g[h]){if(b&&(d=c?g[h]:g[h].data)){n.isArray(b)?b=b.concat(n.map(b,n.camelCase)):b in d?b=[b]:(b=n.camelCase(b),b=b in d?[b]:b.split(" ")),e=b.length;while(e--)delete d[b[e]];if(c?!P(d):!n.isEmptyObject(d))return}(c||(delete g[h].data,P(g[h])))&&(f?n.cleanData([a],!0):l.deleteExpando||g!=g.window?delete g[h]:g[h]=void 0)}}}n.extend({cache:{},noData:{"applet ":!0,"embed ":!0,"object ":"clsid:D27CDB6E-AE6D-11cf-96B8-444553540000"},hasData:function(a){return!!(a=a.nodeType?n.cache[a[n.expando]]:a[n.expando])&&!P(a)},data:function(a,b,c){return Q(a,b,c)},removeData:function(a,b){return R(a,b)},_data:function(a,b,c){return Q(a,b,c,!0)},_removeData:function(a,b){return R(a,b,!0)}}),n.fn.extend({data:function(a,b){var c,d,e,f=this[0],g=f&&f.attributes;if(void 0===a){if(this.length&&(e=n.data(f),1===f.nodeType&&!n._data(f,"parsedAttrs"))){c=g.length;while(c--)g[c]&&(d=g[c].name,0===d.indexOf("data-")&&(d=n.camelCase(d.slice(5)),O(f,d,e[d])));n._data(f,"parsedAttrs",!0)}return e}return"object"==typeof a?this.each(function(){n.data(this,a)}):arguments.length>1?this.each(function(){n.data(this,a,b)}):f?O(f,a,n.data(f,a)):void 0},removeData:function(a){return this.each(function(){n.removeData(this,a)})}}),n.extend({queue:function(a,b,c){var d;if(a)return b=(b||"fx")+"queue",d=n._data(a,b),c&&(!d||n.isArray(c)?d=n._data(a,b,n.makeArray(c)):d.push(c)),d||[]},dequeue:function(a,b){b=b||"fx";var c=n.queue(a,b),d=c.length,e=c.shift(),f=n._queueHooks(a,b),g=function(){n.dequeue(a,b)};"inprogress"===e&&(e=c.shift(),d--),e&&("fx"===b&&c.unshift("inprogress"),delete f.stop,e.call(a,g,f)),!d&&f&&f.empty.fire()},_queueHooks:function(a,b){var c=b+"queueHooks";return n._data(a,c)||n._data(a,c,{empty:n.Callbacks("once memory").add(function(){n._removeData(a,b+"queue"),n._removeData(a,c)})})}}),n.fn.extend({queue:function(a,b){var c=2;return"string"!=typeof a&&(b=a,a="fx",c--),arguments.length<c?n.queue(this[0],a):void 0===b?this:this.each(function(){var c=n.queue(this,a,b);n._queueHooks(this,a),"fx"===a&&"inprogress"!==c[0]&&n.dequeue(this,a)})},dequeue:function(a){return this.each(function(){n.dequeue(this,a)})},clearQueue:function(a){return this.queue(a||"fx",[])},promise:function(a,b){var c,d=1,e=n.Deferred(),f=this,g=this.length,h=function(){--d||e.resolveWith(f,[f])};"string"!=typeof a&&(b=a,a=void 0),a=a||"fx";while(g--)(c=n._data(f[g],a+"queueHooks"))&&c.empty&&(d++,c.empty.add(h));return h(),e.promise(b)}}),function(){var a;l.shrinkWrapBlocks=function(){if(null!=a)return a;a=!1;var b,c,e;return(c=d.getElementsByTagName("body")[0])&&c.style?(b=d.createElement("div"),e=d.createElement("div"),e.style.cssText="position:absolute;border:0;width:0;height:0;top:0;left:-9999px",c.appendChild(e).appendChild(b),void 0!==b.style.zoom&&(b.style.cssText="-webkit-box-sizing:content-box;-moz-box-sizing:content-box;box-sizing:content-box;display:block;margin:0;border:0;padding:1px;width:1px;zoom:1",b.appendChild(d.createElement("div")).style.width="5px",a=3!==b.offsetWidth),c.removeChild(e),a):void 0}}();var S=/[+-]?(?:\d*\.|)\d+(?:[eE][+-]?\d+|)/.source,T=new RegExp("^(?:([+-])=|)("+S+")([a-z%]*)$","i"),U=["Top","Right","Bottom","Left"],V=function(a,b){return a=b||a,"none"===n.css(a,"display")||!n.contains(a.ownerDocument,a)};function W(a,b,c,d){var e,f=1,g=20,h=d?function(){return d.cur()}:function(){return n.css(a,b,"")},i=h(),j=c&&c[3]||(n.cssNumber[b]?"":"px"),k=(n.cssNumber[b]||"px"!==j&&+i)&&T.exec(n.css(a,b));if(k&&k[3]!==j){j=j||k[3],c=c||[],k=+i||1;do{f=f||".5",k/=f,n.style(a,b,k+j)}while(f!==(f=h()/i)&&1!==f&&--g)}return c&&(k=+k||+i||0,e=c[1]?k+(c[1]+1)*c[2]:+c[2],d&&(d.unit=j,d.start=k,d.end=e)),e}var X=function(a,b,c,d,e,f,g){var h=0,i=a.length,j=null==c;if("object"===n.type(c)){e=!0;for(h in c)X(a,b,h,c[h],!0,f,g)}else if(void 0!==d&&(e=!0,n.isFunction(d)||(g=!0),j&&(g?(b.call(a,d),b=null):(j=b,b=function(a,b,c){return j.call(n(a),c)})),b))for(;h<i;h++)b(a[h],c,g?d:d.call(a[h],h,b(a[h],c)));return e?a:j?b.call(a):i?b(a[0],c):f},Y=/^(?:checkbox|radio)$/i,Z=/<([\w:-]+)/,$=/^$|\/(?:java|ecma)script/i,_=/^\s+/,aa="abbr|article|aside|audio|bdi|canvas|data|datalist|details|dialog|figcaption|figure|footer|header|hgroup|main|mark|meter|nav|output|picture|progress|section|summary|template|time|video";function ba(a){var b=aa.split("|"),c=a.createDocumentFragment();if(c.createElement)while(b.length)c.createElement(b.pop());return c}!function(){var a=d.createElement("div"),b=d.createDocumentFragment(),c=d.createElement("input");a.innerHTML="  <link/><table></table><a href='/a'>a</a><input type='checkbox'/>",l.leadingWhitespace=3===a.firstChild.nodeType,l.tbody=!a.getElementsByTagName("tbody").length,l.htmlSerialize=!!a.getElementsByTagName("link").length,l.html5Clone="<:nav></:nav>"!==d.createElement("nav").cloneNode(!0).outerHTML,c.type="checkbox",c.checked=!0,b.appendChild(c),l.appendChecked=c.checked,a.innerHTML="<textarea>x</textarea>",l.noCloneChecked=!!a.cloneNode(!0).lastChild.defaultValue,b.appendChild(a),c=d.createElement("input"),c.setAttribute("type","radio"),c.setAttribute("checked","checked"),c.setAttribute("name","t"),a.appendChild(c),l.checkClone=a.cloneNode(!0).cloneNode(!0).lastChild.checked,l.noCloneEvent=!!a.addEventListener,a[n.expando]=1,l.attributes=!a.getAttribute(n.expando)}();var ca={option:[1,"<select multiple='multiple'>","</select>"],legend:[1,"<fieldset>","</fieldset>"],area:[1,"<map>","</map>"],param:[1,"<object>","</object>"],thead:[1,"<table>","</table>"],tr:[2,"<table><tbody>","</tbody></table>"],col:[2,"<table><tbody></tbody><colgroup>","</colgroup></table>"],td:[3,"<table><tbody><tr>","</tr></tbody></table>"],_default:l.htmlSerialize?[0,"",""]:[1,"X<div>","</div>"]};ca.optgroup=ca.option,ca.tbody=ca.tfoot=ca.colgroup=ca.caption=ca.thead,ca.th=ca.td;function da(a,b){var c,d,e=0,f=void 0!==a.getElementsByTagName?a.getElementsByTagName(b||"*"):void 0!==a.querySelectorAll?a.querySelectorAll(b||"*"):void 0;if(!f)for(f=[],c=a.childNodes||a;null!=(d=c[e]);e++)!b||n.nodeName(d,b)?f.push(d):n.merge(f,da(d,b));return void 0===b||b&&n.nodeName(a,b)?n.merge([a],f):f}function ea(a,b){for(var c,d=0;null!=(c=a[d]);d++)n._data(c,"globalEval",!b||n._data(b[d],"globalEval"))}var fa=/<|&#?\w+;/,ga=/<tbody/i;function ha(a){Y.test(a.type)&&(a.defaultChecked=a.checked)}function ia(a,b,c,d,e){for(var f,g,h,i,j,k,m,o=a.length,p=ba(b),q=[],r=0;r<o;r++)if((g=a[r])||0===g)if("object"===n.type(g))n.merge(q,g.nodeType?[g]:g);else if(fa.test(g)){i=i||p.appendChild(b.createElement("div")),j=(Z.exec(g)||["",""])[1].toLowerCase(),m=ca[j]||ca._default,i.innerHTML=m[1]+n.htmlPrefilter(g)+m[2],f=m[0];while(f--)i=i.lastChild;if(!l.leadingWhitespace&&_.test(g)&&q.push(b.createTextNode(_.exec(g)[0])),!l.tbody){g="table"!==j||ga.test(g)?"<table>"!==m[1]||ga.test(g)?0:i:i.firstChild,f=g&&g.childNodes.length;while(f--)n.nodeName(k=g.childNodes[f],"tbody")&&!k.childNodes.length&&g.removeChild(k)}n.merge(q,i.childNodes),i.textContent="";while(i.firstChild)i.removeChild(i.firstChild);i=p.lastChild}else q.push(b.createTextNode(g));i&&p.removeChild(i),l.appendChecked||n.grep(da(q,"input"),ha),r=0;while(g=q[r++])if(d&&n.inArray(g,d)>-1)e&&e.push(g);else if(h=n.contains(g.ownerDocument,g),i=da(p.appendChild(g),"script"),h&&ea(i),c){f=0;while(g=i[f++])$.test(g.type||"")&&c.push(g)}return i=null,p}!function(){var b,c,e=d.createElement("div");for(b in{submit:!0,change:!0,focusin:!0})c="on"+b,(l[b]=c in a)||(e.setAttribute(c,"t"),l[b]=!1===e.attributes[c].expando);e=null}();var ja=/^(?:input|select|textarea)$/i,ka=/^key/,la=/^(?:mouse|pointer|contextmenu|drag|drop)|click/,ma=/^(?:focusinfocus|focusoutblur)$/,na=/^([^.]*)(?:\.(.+)|)/;function oa(){return!0}function pa(){return!1}function qa(){try{return d.activeElement}catch(a){}}function ra(a,b,c,d,e,f){var g,h;if("object"==typeof b){"string"!=typeof c&&(d=d||c,c=void 0);for(h in b)ra(a,h,c,d,b[h],f);return a}if(null==d&&null==e?(e=c,d=c=void 0):null==e&&("string"==typeof c?(e=d,d=void 0):(e=d,d=c,c=void 0)),!1===e)e=pa;else if(!e)return a;return 1===f&&(g=e,e=function(a){return n().off(a),g.apply(this,arguments)},e.guid=g.guid||(g.guid=n.guid++)),a.each(function(){n.event.add(this,b,e,d,c)})}n.event={global:{},add:function(a,b,c,d,e){var f,g,h,i,j,k,l,m,o,p,q,r=n._data(a);if(r){c.handler&&(i=c,c=i.handler,e=i.selector),c.guid||(c.guid=n.guid++),(g=r.events)||(g=r.events={}),(k=r.handle)||(k=r.handle=function(a){return void 0===n||a&&n.event.triggered===a.type?void 0:n.event.dispatch.apply(k.elem,arguments)},k.elem=a),b=(b||"").match(F)||[""],h=b.length;while(h--)f=na.exec(b[h])||[],o=q=f[1],p=(f[2]||"").split(".").sort(),o&&(j=n.event.special[o]||{},o=(e?j.delegateType:j.bindType)||o,j=n.event.special[o]||{},l=n.extend({type:o,origType:q,data:d,handler:c,guid:c.guid,selector:e,needsContext:e&&n.expr.match.needsContext.test(e),namespace:p.join(".")},i),(m=g[o])||(m=g[o]=[],m.delegateCount=0,j.setup&&!1!==j.setup.call(a,d,p,k)||(a.addEventListener?a.addEventListener(o,k,!1):a.attachEvent&&a.attachEvent("on"+o,k))),j.add&&(j.add.call(a,l),l.handler.guid||(l.handler.guid=c.guid)),e?m.splice(m.delegateCount++,0,l):m.push(l),n.event.global[o]=!0);a=null}},remove:function(a,b,c,d,e){var f,g,h,i,j,k,l,m,o,p,q,r=n.hasData(a)&&n._data(a);if(r&&(k=r.events)){b=(b||"").match(F)||[""],j=b.length;while(j--)if(h=na.exec(b[j])||[],o=q=h[1],p=(h[2]||"").split(".").sort(),o){l=n.event.special[o]||{},o=(d?l.delegateType:l.bindType)||o,m=k[o]||[],h=h[2]&&new RegExp("(^|\\.)"+p.join("\\.(?:.*\\.|)")+"(\\.|$)"),i=f=m.length;while(f--)g=m[f],!e&&q!==g.origType||c&&c.guid!==g.guid||h&&!h.test(g.namespace)||d&&d!==g.selector&&("**"!==d||!g.selector)||(m.splice(f,1),g.selector&&m.delegateCount--,l.remove&&l.remove.call(a,g));i&&!m.length&&(l.teardown&&!1!==l.teardown.call(a,p,r.handle)||n.removeEvent(a,o,r.handle),delete k[o])}else for(o in k)n.event.remove(a,o+b[j],c,d,!0);n.isEmptyObject(k)&&(delete r.handle,n._removeData(a,"events"))}},trigger:function(b,c,e,f){var g,h,i,j,l,m,o,p=[e||d],q=k.call(b,"type")?b.type:b,r=k.call(b,"namespace")?b.namespace.split("."):[];if(i=m=e=e||d,3!==e.nodeType&&8!==e.nodeType&&!ma.test(q+n.event.triggered)&&(q.indexOf(".")>-1&&(r=q.split("."),q=r.shift(),r.sort()),h=q.indexOf(":")<0&&"on"+q,b=b[n.expando]?b:new n.Event(q,"object"==typeof b&&b),b.isTrigger=f?2:3,b.namespace=r.join("."),b.rnamespace=b.namespace?new RegExp("(^|\\.)"+r.join("\\.(?:.*\\.|)")+"(\\.|$)"):null,b.result=void 0,b.target||(b.target=e),c=null==c?[b]:n.makeArray(c,[b]),l=n.event.special[q]||{},f||!l.trigger||!1!==l.trigger.apply(e,c))){if(!f&&!l.noBubble&&!n.isWindow(e)){for(j=l.delegateType||q,ma.test(j+q)||(i=i.parentNode);i;i=i.parentNode)p.push(i),m=i;m===(e.ownerDocument||d)&&p.push(m.defaultView||m.parentWindow||a)}o=0;while((i=p[o++])&&!b.isPropagationStopped())b.type=o>1?j:l.bindType||q,g=(n._data(i,"events")||{})[b.type]&&n._data(i,"handle"),g&&g.apply(i,c),(g=h&&i[h])&&g.apply&&L(i)&&(b.result=g.apply(i,c),!1===b.result&&b.preventDefault());if(b.type=q,!f&&!b.isDefaultPrevented()&&(!l._default||!1===l._default.apply(p.pop(),c))&&L(e)&&h&&e[q]&&!n.isWindow(e)){m=e[h],m&&(e[h]=null),n.event.triggered=q;try{e[q]()}catch(s){}n.event.triggered=void 0,m&&(e[h]=m)}return b.result}},dispatch:function(a){a=n.event.fix(a);var b,c,d,f,g,h=[],i=e.call(arguments),j=(n._data(this,"events")||{})[a.type]||[],k=n.event.special[a.type]||{};if(i[0]=a,a.delegateTarget=this,!k.preDispatch||!1!==k.preDispatch.call(this,a)){h=n.event.handlers.call(this,a,j),b=0;while((f=h[b++])&&!a.isPropagationStopped()){a.currentTarget=f.elem,c=0;while((g=f.handlers[c++])&&!a.isImmediatePropagationStopped())a.rnamespace&&!a.rnamespace.test(g.namespace)||(a.handleObj=g,a.data=g.data,void 0!==(d=((n.event.special[g.origType]||{}).handle||g.handler).apply(f.elem,i))&&!1===(a.result=d)&&(a.preventDefault(),a.stopPropagation()))}return k.postDispatch&&k.postDispatch.call(this,a),a.result}},handlers:function(a,b){var c,d,e,f,g=[],h=b.delegateCount,i=a.target;if(h&&i.nodeType&&("click"!==a.type||isNaN(a.button)||a.button<1))for(;i!=this;i=i.parentNode||this)if(1===i.nodeType&&(!0!==i.disabled||"click"!==a.type)){for(d=[],c=0;c<h;c++)f=b[c],e=f.selector+" ",void 0===d[e]&&(d[e]=f.needsContext?n(e,this).index(i)>-1:n.find(e,this,null,[i]).length),d[e]&&d.push(f);d.length&&g.push({elem:i,handlers:d})}return h<b.length&&g.push({elem:this,handlers:b.slice(h)}),g},fix:function(a){if(a[n.expando])return a;var b,c,e,f=a.type,g=a,h=this.fixHooks[f];h||(this.fixHooks[f]=h=la.test(f)?this.mouseHooks:ka.test(f)?this.keyHooks:{}),e=h.props?this.props.concat(h.props):this.props,a=new n.Event(g),b=e.length;while(b--)c=e[b],a[c]=g[c];return a.target||(a.target=g.srcElement||d),3===a.target.nodeType&&(a.target=a.target.parentNode),a.metaKey=!!a.metaKey,h.filter?h.filter(a,g):a},props:"altKey bubbles cancelable ctrlKey currentTarget detail eventPhase metaKey relatedTarget shiftKey target timeStamp view which".split(" "),fixHooks:{},keyHooks:{props:"char charCode key keyCode".split(" "),filter:function(a,b){return null==a.which&&(a.which=null!=b.charCode?b.charCode:b.keyCode),a}},mouseHooks:{props:"button buttons clientX clientY fromElement offsetX offsetY pageX pageY screenX screenY toElement".split(" "),filter:function(a,b){var c,e,f,g=b.button,h=b.fromElement;return null==a.pageX&&null!=b.clientX&&(e=a.target.ownerDocument||d,f=e.documentElement,c=e.body,a.pageX=b.clientX+(f&&f.scrollLeft||c&&c.scrollLeft||0)-(f&&f.clientLeft||c&&c.clientLeft||0),a.pageY=b.clientY+(f&&f.scrollTop||c&&c.scrollTop||0)-(f&&f.clientTop||c&&c.clientTop||0)),!a.relatedTarget&&h&&(a.relatedTarget=h===a.target?b.toElement:h),a.which||void 0===g||(a.which=1&g?1:2&g?3:4&g?2:0),a}},special:{load:{noBubble:!0},focus:{trigger:function(){if(this!==qa()&&this.focus)try{return this.focus(),!1}catch(a){}},delegateType:"focusin"},blur:{trigger:function(){if(this===qa()&&this.blur)return this.blur(),!1},delegateType:"focusout"},click:{trigger:function(){if(n.nodeName(this,"input")&&"checkbox"===this.type&&this.click)return this.click(),!1},_default:function(a){return n.nodeName(a.target,"a")}},beforeunload:{postDispatch:function(a){void 0!==a.result&&a.originalEvent&&(a.originalEvent.returnValue=a.result)}}},simulate:function(a,b,c){var d=n.extend(new n.Event,c,{type:a,isSimulated:!0});n.event.trigger(d,null,b),d.isDefaultPrevented()&&c.preventDefault()}},n.removeEvent=d.removeEventListener?function(a,b,c){a.removeEventListener&&a.removeEventListener(b,c)}:function(a,b,c){var d="on"+b;a.detachEvent&&(void 0===a[d]&&(a[d]=null),a.detachEvent(d,c))},n.Event=function(a,b){if(!(this instanceof n.Event))return new n.Event(a,b);a&&a.type?(this.originalEvent=a,this.type=a.type,this.isDefaultPrevented=a.defaultPrevented||void 0===a.defaultPrevented&&!1===a.returnValue?oa:pa):this.type=a,b&&n.extend(this,b),this.timeStamp=a&&a.timeStamp||n.now(),this[n.expando]=!0},n.Event.prototype={constructor:n.Event,isDefaultPrevented:pa,isPropagationStopped:pa,isImmediatePropagationStopped:pa,preventDefault:function(){var a=this.originalEvent;this.isDefaultPrevented=oa,a&&(a.preventDefault?a.preventDefault():a.returnValue=!1)},stopPropagation:function(){var a=this.originalEvent;this.isPropagationStopped=oa,a&&!this.isSimulated&&(a.stopPropagation&&a.stopPropagation(),a.cancelBubble=!0)},stopImmediatePropagation:function(){var a=this.originalEvent;this.isImmediatePropagationStopped=oa,a&&a.stopImmediatePropagation&&a.stopImmediatePropagation(),this.stopPropagation()}},n.each({mouseenter:"mouseover",mouseleave:"mouseout",pointerenter:"pointerover",pointerleave:"pointerout"},function(a,b){n.event.special[a]={delegateType:b,bindType:b,handle:function(a){var c,d=this,e=a.relatedTarget,f=a.handleObj;return e&&(e===d||n.contains(d,e))||(a.type=f.origType,c=f.handler.apply(this,arguments),a.type=b),c}}}),l.submit||(n.event.special.submit={setup:function(){if(n.nodeName(this,"form"))return!1;n.event.add(this,"click._submit keypress._submit",function(a){var b=a.target,c=n.nodeName(b,"input")||n.nodeName(b,"button")?n.prop(b,"form"):void 0;c&&!n._data(c,"submit")&&(n.event.add(c,"submit._submit",function(a){a._submitBubble=!0}),n._data(c,"submit",!0))})},postDispatch:function(a){a._submitBubble&&(delete a._submitBubble,this.parentNode&&!a.isTrigger&&n.event.simulate("submit",this.parentNode,a))},teardown:function(){if(n.nodeName(this,"form"))return!1;n.event.remove(this,"._submit")}}),l.change||(n.event.special.change={setup:function(){if(ja.test(this.nodeName))return"checkbox"!==this.type&&"radio"!==this.type||(n.event.add(this,"propertychange._change",function(a){"checked"===a.originalEvent.propertyName&&(this._justChanged=!0)}),n.event.add(this,"click._change",function(a){this._justChanged&&!a.isTrigger&&(this._justChanged=!1),n.event.simulate("change",this,a)})),!1;n.event.add(this,"beforeactivate._change",function(a){var b=a.target;ja.test(b.nodeName)&&!n._data(b,"change")&&(n.event.add(b,"change._change",function(a){!this.parentNode||a.isSimulated||a.isTrigger||n.event.simulate("change",this.parentNode,a)}),n._data(b,"change",!0))})},handle:function(a){var b=a.target;if(this!==b||a.isSimulated||a.isTrigger||"radio"!==b.type&&"checkbox"!==b.type)return a.handleObj.handler.apply(this,arguments)},teardown:function(){return n.event.remove(this,"._change"),!ja.test(this.nodeName)}}),l.focusin||n.each({focus:"focusin",blur:"focusout"},function(a,b){var c=function(a){n.event.simulate(b,a.target,n.event.fix(a))};n.event.special[b]={setup:function(){var d=this.ownerDocument||this,e=n._data(d,b);e||d.addEventListener(a,c,!0),n._data(d,b,(e||0)+1)},teardown:function(){var d=this.ownerDocument||this,e=n._data(d,b)-1;e?n._data(d,b,e):(d.removeEventListener(a,c,!0),n._removeData(d,b))}}}),n.fn.extend({on:function(a,b,c,d){return ra(this,a,b,c,d)},one:function(a,b,c,d){return ra(this,a,b,c,d,1)},off:function(a,b,c){var d,e;if(a&&a.preventDefault&&a.handleObj)return d=a.handleObj,n(a.delegateTarget).off(d.namespace?d.origType+"."+d.namespace:d.origType,d.selector,d.handler),this;if("object"==typeof a){for(e in a)this.off(e,b,a[e]);return this}return!1!==b&&"function"!=typeof b||(c=b,b=void 0),!1===c&&(c=pa),this.each(function(){n.event.remove(this,a,c,b)})},trigger:function(a,b){return this.each(function(){n.event.trigger(a,b,this)})},triggerHandler:function(a,b){var c=this[0];if(c)return n.event.trigger(a,b,c,!0)}});var sa=/ jQuery\d+="(?:null|\d+)"/g,ta=new RegExp("<(?:"+aa+")[\\s/>]","i"),ua=/<(?!area|br|col|embed|hr|img|input|link|meta|param)(([\w:-]+)[^>]*)\/>/gi,va=/<script|<style|<link/i,wa=/checked\s*(?:[^=]|=\s*.checked.)/i,xa=/^true\/(.*)/,ya=/^\s*<!(?:\[CDATA\[|--)|(?:\]\]|--)>\s*$/g,za=ba(d),Aa=za.appendChild(d.createElement("div"));function Ba(a,b){return n.nodeName(a,"table")&&n.nodeName(11!==b.nodeType?b:b.firstChild,"tr")?a.getElementsByTagName("tbody")[0]||a.appendChild(a.ownerDocument.createElement("tbody")):a}function Ca(a){return a.type=(null!==n.find.attr(a,"type"))+"/"+a.type,a}function Da(a){var b=xa.exec(a.type);return b?a.type=b[1]:a.removeAttribute("type"),a}function Ea(a,b){if(1===b.nodeType&&n.hasData(a)){var c,d,e,f=n._data(a),g=n._data(b,f),h=f.events;if(h){delete g.handle,g.events={};for(c in h)for(d=0,e=h[c].length;d<e;d++)n.event.add(b,c,h[c][d])}g.data&&(g.data=n.extend({},g.data))}}function Fa(a,b){var c,d,e;if(1===b.nodeType){if(c=b.nodeName.toLowerCase(),!l.noCloneEvent&&b[n.expando]){e=n._data(b);for(d in e.events)n.removeEvent(b,d,e.handle);b.removeAttribute(n.expando)}"script"===c&&b.text!==a.text?(Ca(b).text=a.text,Da(b)):"object"===c?(b.parentNode&&(b.outerHTML=a.outerHTML),l.html5Clone&&a.innerHTML&&!n.trim(b.innerHTML)&&(b.innerHTML=a.innerHTML)):"input"===c&&Y.test(a.type)?(b.defaultChecked=b.checked=a.checked,b.value!==a.value&&(b.value=a.value)):"option"===c?b.defaultSelected=b.selected=a.defaultSelected:"input"!==c&&"textarea"!==c||(b.defaultValue=a.defaultValue)}}function Ga(a,b,c,d){b=f.apply([],b);var e,g,h,i,j,k,m=0,o=a.length,p=o-1,q=b[0],r=n.isFunction(q);if(r||o>1&&"string"==typeof q&&!l.checkClone&&wa.test(q))return a.each(function(e){var f=a.eq(e);r&&(b[0]=q.call(this,e,f.html())),Ga(f,b,c,d)});if(o&&(k=ia(b,a[0].ownerDocument,!1,a,d),e=k.firstChild,1===k.childNodes.length&&(k=e),e||d)){for(i=n.map(da(k,"script"),Ca),h=i.length;m<o;m++)g=k,m!==p&&(g=n.clone(g,!0,!0),h&&n.merge(i,da(g,"script"))),c.call(a[m],g,m);if(h)for(j=i[i.length-1].ownerDocument,n.map(i,Da),m=0;m<h;m++)g=i[m],$.test(g.type||"")&&!n._data(g,"globalEval")&&n.contains(j,g)&&(g.src?n._evalUrl&&n._evalUrl(g.src):n.globalEval((g.text||g.textContent||g.innerHTML||"").replace(ya,"")));k=e=null}return a}function Ha(a,b,c){for(var d,e=b?n.filter(b,a):a,f=0;null!=(d=e[f]);f++)c||1!==d.nodeType||n.cleanData(da(d)),d.parentNode&&(c&&n.contains(d.ownerDocument,d)&&ea(da(d,"script")),d.parentNode.removeChild(d));return a}n.extend({htmlPrefilter:function(a){return a.replace(ua,"<$1></$2>")},clone:function(a,b,c){var d,e,f,g,h,i=n.contains(a.ownerDocument,a);if(l.html5Clone||n.isXMLDoc(a)||!ta.test("<"+a.nodeName+">")?f=a.cloneNode(!0):(Aa.innerHTML=a.outerHTML,Aa.removeChild(f=Aa.firstChild)),!(l.noCloneEvent&&l.noCloneChecked||1!==a.nodeType&&11!==a.nodeType||n.isXMLDoc(a)))for(d=da(f),h=da(a),g=0;null!=(e=h[g]);++g)d[g]&&Fa(e,d[g]);if(b)if(c)for(h=h||da(a),d=d||da(f),g=0;null!=(e=h[g]);g++)Ea(e,d[g]);else Ea(a,f);return d=da(f,"script"),d.length>0&&ea(d,!i&&da(a,"script")),d=h=e=null,f},cleanData:function(a,b){for(var d,e,f,g,h=0,i=n.expando,j=n.cache,k=l.attributes,m=n.event.special;null!=(d=a[h]);h++)if((b||L(d))&&(f=d[i],g=f&&j[f])){if(g.events)for(e in g.events)m[e]?n.event.remove(d,e):n.removeEvent(d,e,g.handle);j[f]&&(delete j[f],k||void 0===d.removeAttribute?d[i]=void 0:d.removeAttribute(i),c.push(f))}}}),n.fn.extend({domManip:Ga,detach:function(a){return Ha(this,a,!0)},remove:function(a){return Ha(this,a)},text:function(a){return X(this,function(a){return void 0===a?n.text(this):this.empty().append((this[0]&&this[0].ownerDocument||d).createTextNode(a))},null,a,arguments.length)},append:function(){return Ga(this,arguments,function(a){if(1===this.nodeType||11===this.nodeType||9===this.nodeType){Ba(this,a).appendChild(a)}})},prepend:function(){return Ga(this,arguments,function(a){if(1===this.nodeType||11===this.nodeType||9===this.nodeType){var b=Ba(this,a);b.insertBefore(a,b.firstChild)}})},before:function(){return Ga(this,arguments,function(a){this.parentNode&&this.parentNode.insertBefore(a,this)})},after:function(){return Ga(this,arguments,function(a){this.parentNode&&this.parentNode.insertBefore(a,this.nextSibling)})},empty:function(){for(var a,b=0;null!=(a=this[b]);b++){1===a.nodeType&&n.cleanData(da(a,!1));while(a.firstChild)a.removeChild(a.firstChild);a.options&&n.nodeName(a,"select")&&(a.options.length=0)}return this},clone:function(a,b){return a=null!=a&&a,b=null==b?a:b,this.map(function(){return n.clone(this,a,b)})},html:function(a){return X(this,function(a){var b=this[0]||{},c=0,d=this.length;if(void 0===a)return 1===b.nodeType?b.innerHTML.replace(sa,""):void 0;if("string"==typeof a&&!va.test(a)&&(l.htmlSerialize||!ta.test(a))&&(l.leadingWhitespace||!_.test(a))&&!ca[(Z.exec(a)||["",""])[1].toLowerCase()]){a=n.htmlPrefilter(a);try{for(;c<d;c++)b=this[c]||{},1===b.nodeType&&(n.cleanData(da(b,!1)),b.innerHTML=a);b=0}catch(e){}}b&&this.empty().append(a)},null,a,arguments.length)},replaceWith:function(){var a=[];return Ga(this,arguments,function(b){var c=this.parentNode;n.inArray(this,a)<0&&(n.cleanData(da(this)),c&&c.replaceChild(b,this))},a)}}),n.each({appendTo:"append",prependTo:"prepend",insertBefore:"before",insertAfter:"after",replaceAll:"replaceWith"},function(a,b){n.fn[a]=function(a){for(var c,d=0,e=[],f=n(a),h=f.length-1;d<=h;d++)c=d===h?this:this.clone(!0),n(f[d])[b](c),g.apply(e,c.get());return this.pushStack(e)}});var Ia,Ja={HTML:"block",BODY:"block"};function Ka(a,b){var c=n(b.createElement(a)).appendTo(b.body),d=n.css(c[0],"display");return c.detach(),d}function La(a){var b=d,c=Ja[a];return c||(c=Ka(a,b),"none"!==c&&c||(Ia=(Ia||n("<iframe frameborder='0' width='0' height='0'/>")).appendTo(b.documentElement),b=(Ia[0].contentWindow||Ia[0].contentDocument).document,b.write(),b.close(),c=Ka(a,b),Ia.detach()),Ja[a]=c),c}var Ma=/^margin/,Na=new RegExp("^("+S+")(?!px)[a-z%]+$","i"),Oa=function(a,b,c,d){var e,f,g={};for(f in b)g[f]=a.style[f],a.style[f]=b[f];e=c.apply(a,d||[]);for(f in b)a.style[f]=g[f];return e},Pa=d.documentElement;!function(){var b,c,e,f,g,h,i=d.createElement("div"),j=d.createElement("div");function k(){var k,l,m=d.documentElement;m.appendChild(i),j.style.cssText="-webkit-box-sizing:border-box;box-sizing:border-box;position:relative;display:block;margin:auto;border:1px;padding:1px;top:1%;width:50%",b=e=h=!1,c=g=!0,a.getComputedStyle&&(l=a.getComputedStyle(j),b="1%"!==(l||{}).top,h="2px"===(l||{}).marginLeft,e="4px"===(l||{width:"4px"}).width,j.style.marginRight="50%",c="4px"===(l||{marginRight:"4px"}).marginRight,k=j.appendChild(d.createElement("div")),k.style.cssText=j.style.cssText="-webkit-box-sizing:content-box;-moz-box-sizing:content-box;box-sizing:content-box;display:block;margin:0;border:0;padding:0",k.style.marginRight=k.style.width="0",j.style.width="1px",g=!parseFloat((a.getComputedStyle(k)||{}).marginRight),j.removeChild(k)),j.style.display="none",f=0===j.getClientRects().length,f&&(j.style.display="",j.innerHTML="<table><tr><td></td><td>t</td></tr></table>",j.childNodes[0].style.borderCollapse="separate",k=j.getElementsByTagName("td"),k[0].style.cssText="margin:0;border:0;padding:0;display:none",(f=0===k[0].offsetHeight)&&(k[0].style.display="",k[1].style.display="none",f=0===k[0].offsetHeight)),m.removeChild(i)}j.style&&(j.style.cssText="float:left;opacity:.5",l.opacity="0.5"===j.style.opacity,l.cssFloat=!!j.style.cssFloat,j.style.backgroundClip="content-box",j.cloneNode(!0).style.backgroundClip="",l.clearCloneStyle="content-box"===j.style.backgroundClip,i=d.createElement("div"),i.style.cssText="border:0;width:8px;height:0;top:0;left:-9999px;padding:0;margin-top:1px;position:absolute",j.innerHTML="",i.appendChild(j),l.boxSizing=""===j.style.boxSizing||""===j.style.MozBoxSizing||""===j.style.WebkitBoxSizing,n.extend(l,{reliableHiddenOffsets:function(){return null==b&&k(),f},boxSizingReliable:function(){return null==b&&k(),e},pixelMarginRight:function(){return null==b&&k(),c},pixelPosition:function(){return null==b&&k(),b},reliableMarginRight:function(){return null==b&&k(),g},reliableMarginLeft:function(){return null==b&&k(),h}}))}();var Qa,Ra,Sa=/^(top|right|bottom|left)$/;a.getComputedStyle?(Qa=function(b){var c=b.ownerDocument.defaultView;return c&&c.opener||(c=a),c.getComputedStyle(b)},Ra=function(a,b,c){var d,e,f,g,h=a.style;return c=c||Qa(a),g=c?c.getPropertyValue(b)||c[b]:void 0,""!==g&&void 0!==g||n.contains(a.ownerDocument,a)||(g=n.style(a,b)),c&&!l.pixelMarginRight()&&Na.test(g)&&Ma.test(b)&&(d=h.width,e=h.minWidth,f=h.maxWidth,h.minWidth=h.maxWidth=h.width=g,g=c.width,h.width=d,h.minWidth=e,h.maxWidth=f),void 0===g?g:g+""}):Pa.currentStyle&&(Qa=function(a){return a.currentStyle},Ra=function(a,b,c){var d,e,f,g,h=a.style;return c=c||Qa(a),g=c?c[b]:void 0,null==g&&h&&h[b]&&(g=h[b]),Na.test(g)&&!Sa.test(b)&&(d=h.left,e=a.runtimeStyle,f=e&&e.left,f&&(e.left=a.currentStyle.left),h.left="fontSize"===b?"1em":g,g=h.pixelLeft+"px",h.left=d,f&&(e.left=f)),void 0===g?g:g+""||"auto"});function Ta(a,b){return{get:function(){return a()?void delete this.get:(this.get=b).apply(this,arguments)}}}var Ua=/alpha\([^)]*\)/i,Va=/opacity\s*=\s*([^)]*)/i,Wa=/^(none|table(?!-c[ea]).+)/,Xa=new RegExp("^("+S+")(.*)$","i"),Ya={position:"absolute",visibility:"hidden",display:"block"},Za={letterSpacing:"0",fontWeight:"400"},$a=["Webkit","O","Moz","ms"],_a=d.createElement("div").style;function ab(a){if(a in _a)return a;var b=a.charAt(0).toUpperCase()+a.slice(1),c=$a.length;while(c--)if((a=$a[c]+b)in _a)return a}function bb(a,b){for(var c,d,e,f=[],g=0,h=a.length;g<h;g++)d=a[g],d.style&&(f[g]=n._data(d,"olddisplay"),c=d.style.display,b?(f[g]||"none"!==c||(d.style.display=""),""===d.style.display&&V(d)&&(f[g]=n._data(d,"olddisplay",La(d.nodeName)))):(e=V(d),(c&&"none"!==c||!e)&&n._data(d,"olddisplay",e?c:n.css(d,"display"))));for(g=0;g<h;g++)d=a[g],d.style&&(b&&"none"!==d.style.display&&""!==d.style.display||(d.style.display=b?f[g]||"":"none"));return a}function cb(a,b,c){var d=Xa.exec(b);return d?Math.max(0,d[1]-(c||0))+(d[2]||"px"):b}function db(a,b,c,d,e){for(var f=c===(d?"border":"content")?4:"width"===b?1:0,g=0;f<4;f+=2)"margin"===c&&(g+=n.css(a,c+U[f],!0,e)),d?("content"===c&&(g-=n.css(a,"padding"+U[f],!0,e)),"margin"!==c&&(g-=n.css(a,"border"+U[f]+"Width",!0,e))):(g+=n.css(a,"padding"+U[f],!0,e),"padding"!==c&&(g+=n.css(a,"border"+U[f]+"Width",!0,e)));return g}function eb(a,b,c){var d=!0,e="width"===b?a.offsetWidth:a.offsetHeight,f=Qa(a),g=l.boxSizing&&"border-box"===n.css(a,"boxSizing",!1,f);if(e<=0||null==e){if(e=Ra(a,b,f),(e<0||null==e)&&(e=a.style[b]),Na.test(e))return e;d=g&&(l.boxSizingReliable()||e===a.style[b]),e=parseFloat(e)||0}return e+db(a,b,c||(g?"border":"content"),d,f)+"px"}n.extend({cssHooks:{opacity:{get:function(a,b){if(b){var c=Ra(a,"opacity");return""===c?"1":c}}}},cssNumber:{animationIterationCount:!0,columnCount:!0,fillOpacity:!0,flexGrow:!0,flexShrink:!0,fontWeight:!0,lineHeight:!0,opacity:!0,order:!0,orphans:!0,widows:!0,zIndex:!0,zoom:!0},cssProps:{float:l.cssFloat?"cssFloat":"styleFloat"},style:function(a,b,c,d){if(a&&3!==a.nodeType&&8!==a.nodeType&&a.style){var e,f,g,h=n.camelCase(b),i=a.style;if(b=n.cssProps[h]||(n.cssProps[h]=ab(h)||h),g=n.cssHooks[b]||n.cssHooks[h],void 0===c)return g&&"get"in g&&void 0!==(e=g.get(a,!1,d))?e:i[b];if(f=typeof c,"string"===f&&(e=T.exec(c))&&e[1]&&(c=W(a,b,e),f="number"),null!=c&&c===c&&("number"===f&&(c+=e&&e[3]||(n.cssNumber[h]?"":"px")),l.clearCloneStyle||""!==c||0!==b.indexOf("background")||(i[b]="inherit"),!(g&&"set"in g&&void 0===(c=g.set(a,c,d)))))try{i[b]=c}catch(j){}}},css:function(a,b,c,d){var e,f,g,h=n.camelCase(b);return b=n.cssProps[h]||(n.cssProps[h]=ab(h)||h),g=n.cssHooks[b]||n.cssHooks[h],g&&"get"in g&&(f=g.get(a,!0,c)),void 0===f&&(f=Ra(a,b,d)),"normal"===f&&b in Za&&(f=Za[b]),""===c||c?(e=parseFloat(f),!0===c||isFinite(e)?e||0:f):f}}),n.each(["height","width"],function(a,b){n.cssHooks[b]={get:function(a,c,d){if(c)return Wa.test(n.css(a,"display"))&&0===a.offsetWidth?Oa(a,Ya,function(){return eb(a,b,d)}):eb(a,b,d)},set:function(a,c,d){var e=d&&Qa(a);return cb(a,c,d?db(a,b,d,l.boxSizing&&"border-box"===n.css(a,"boxSizing",!1,e),e):0)}}}),l.opacity||(n.cssHooks.opacity={get:function(a,b){return Va.test((b&&a.currentStyle?a.currentStyle.filter:a.style.filter)||"")?.01*parseFloat(RegExp.$1)+"":b?"1":""},set:function(a,b){var c=a.style,d=a.currentStyle,e=n.isNumeric(b)?"alpha(opacity="+100*b+")":"",f=d&&d.filter||c.filter||"";c.zoom=1,(b>=1||""===b)&&""===n.trim(f.replace(Ua,""))&&c.removeAttribute&&(c.removeAttribute("filter"),""===b||d&&!d.filter)||(c.filter=Ua.test(f)?f.replace(Ua,e):f+" "+e)}}),n.cssHooks.marginRight=Ta(l.reliableMarginRight,function(a,b){if(b)return Oa(a,{display:"inline-block"},Ra,[a,"marginRight"])}),n.cssHooks.marginLeft=Ta(l.reliableMarginLeft,function(a,b){if(b)return(parseFloat(Ra(a,"marginLeft"))||(n.contains(a.ownerDocument,a)?a.getBoundingClientRect().left-Oa(a,{marginLeft:0},function(){return a.getBoundingClientRect().left}):0))+"px"}),n.each({
margin:"",padding:"",border:"Width"},function(a,b){n.cssHooks[a+b]={expand:function(c){for(var d=0,e={},f="string"==typeof c?c.split(" "):[c];d<4;d++)e[a+U[d]+b]=f[d]||f[d-2]||f[0];return e}},Ma.test(a)||(n.cssHooks[a+b].set=cb)}),n.fn.extend({css:function(a,b){return X(this,function(a,b,c){var d,e,f={},g=0;if(n.isArray(b)){for(d=Qa(a),e=b.length;g<e;g++)f[b[g]]=n.css(a,b[g],!1,d);return f}return void 0!==c?n.style(a,b,c):n.css(a,b)},a,b,arguments.length>1)},show:function(){return bb(this,!0)},hide:function(){return bb(this)},toggle:function(a){return"boolean"==typeof a?a?this.show():this.hide():this.each(function(){V(this)?n(this).show():n(this).hide()})}});function fb(a,b,c,d,e){return new fb.prototype.init(a,b,c,d,e)}n.Tween=fb,fb.prototype={constructor:fb,init:function(a,b,c,d,e,f){this.elem=a,this.prop=c,this.easing=e||n.easing._default,this.options=b,this.start=this.now=this.cur(),this.end=d,this.unit=f||(n.cssNumber[c]?"":"px")},cur:function(){var a=fb.propHooks[this.prop];return a&&a.get?a.get(this):fb.propHooks._default.get(this)},run:function(a){var b,c=fb.propHooks[this.prop];return this.options.duration?this.pos=b=n.easing[this.easing](a,this.options.duration*a,0,1,this.options.duration):this.pos=b=a,this.now=(this.end-this.start)*b+this.start,this.options.step&&this.options.step.call(this.elem,this.now,this),c&&c.set?c.set(this):fb.propHooks._default.set(this),this}},fb.prototype.init.prototype=fb.prototype,fb.propHooks={_default:{get:function(a){var b;return 1!==a.elem.nodeType||null!=a.elem[a.prop]&&null==a.elem.style[a.prop]?a.elem[a.prop]:(b=n.css(a.elem,a.prop,""),b&&"auto"!==b?b:0)},set:function(a){n.fx.step[a.prop]?n.fx.step[a.prop](a):1!==a.elem.nodeType||null==a.elem.style[n.cssProps[a.prop]]&&!n.cssHooks[a.prop]?a.elem[a.prop]=a.now:n.style(a.elem,a.prop,a.now+a.unit)}}},fb.propHooks.scrollTop=fb.propHooks.scrollLeft={set:function(a){a.elem.nodeType&&a.elem.parentNode&&(a.elem[a.prop]=a.now)}},n.easing={linear:function(a){return a},swing:function(a){return.5-Math.cos(a*Math.PI)/2},_default:"swing"},n.fx=fb.prototype.init,n.fx.step={};var gb,hb,ib=/^(?:toggle|show|hide)$/,jb=/queueHooks$/;function kb(){return a.setTimeout(function(){gb=void 0}),gb=n.now()}function lb(a,b){var c,d={height:a},e=0;for(b=b?1:0;e<4;e+=2-b)c=U[e],d["margin"+c]=d["padding"+c]=a;return b&&(d.opacity=d.width=a),d}function mb(a,b,c){for(var d,e=(pb.tweeners[b]||[]).concat(pb.tweeners["*"]),f=0,g=e.length;f<g;f++)if(d=e[f].call(c,b,a))return d}function nb(a,b,c){var d,e,f,g,h,i,j,k,m=this,o={},p=a.style,q=a.nodeType&&V(a),r=n._data(a,"fxshow");c.queue||(h=n._queueHooks(a,"fx"),null==h.unqueued&&(h.unqueued=0,i=h.empty.fire,h.empty.fire=function(){h.unqueued||i()}),h.unqueued++,m.always(function(){m.always(function(){h.unqueued--,n.queue(a,"fx").length||h.empty.fire()})})),1===a.nodeType&&("height"in b||"width"in b)&&(c.overflow=[p.overflow,p.overflowX,p.overflowY],j=n.css(a,"display"),"inline"===(k="none"===j?n._data(a,"olddisplay")||La(a.nodeName):j)&&"none"===n.css(a,"float")&&(l.inlineBlockNeedsLayout&&"inline"!==La(a.nodeName)?p.zoom=1:p.display="inline-block")),c.overflow&&(p.overflow="hidden",l.shrinkWrapBlocks()||m.always(function(){p.overflow=c.overflow[0],p.overflowX=c.overflow[1],p.overflowY=c.overflow[2]}));for(d in b)if(e=b[d],ib.exec(e)){if(delete b[d],f=f||"toggle"===e,e===(q?"hide":"show")){if("show"!==e||!r||void 0===r[d])continue;q=!0}o[d]=r&&r[d]||n.style(a,d)}else j=void 0;if(n.isEmptyObject(o))"inline"===("none"===j?La(a.nodeName):j)&&(p.display=j);else{r?"hidden"in r&&(q=r.hidden):r=n._data(a,"fxshow",{}),f&&(r.hidden=!q),q?n(a).show():m.done(function(){n(a).hide()}),m.done(function(){var b;n._removeData(a,"fxshow");for(b in o)n.style(a,b,o[b])});for(d in o)g=mb(q?r[d]:0,d,m),d in r||(r[d]=g.start,q&&(g.end=g.start,g.start="width"===d||"height"===d?1:0))}}function ob(a,b){var c,d,e,f,g;for(c in a)if(d=n.camelCase(c),e=b[d],f=a[c],n.isArray(f)&&(e=f[1],f=a[c]=f[0]),c!==d&&(a[d]=f,delete a[c]),(g=n.cssHooks[d])&&"expand"in g){f=g.expand (f),delete a[d];for(c in f)c in a||(a[c]=f[c],b[c]=e)}else b[d]=e}function pb(a,b,c){var d,e,f=0,g=pb.prefilters.length,h=n.Deferred().always(function(){delete i.elem}),i=function(){if(e)return!1;for(var b=gb||kb(),c=Math.max(0,j.startTime+j.duration-b),d=c/j.duration||0,f=1-d,g=0,i=j.tweens.length;g<i;g++)j.tweens[g].run(f);return h.notifyWith(a,[j,f,c]),f<1&&i?c:(h.resolveWith(a,[j]),!1)},j=h.promise({elem:a,props:n.extend({},b),opts:n.extend(!0,{specialEasing:{},easing:n.easing._default},c),originalProperties:b,originalOptions:c,startTime:gb||kb(),duration:c.duration,tweens:[],createTween:function(b,c){var d=n.Tween(a,j.opts,b,c,j.opts.specialEasing[b]||j.opts.easing);return j.tweens.push(d),d},stop:function(b){var c=0,d=b?j.tweens.length:0;if(e)return this;for(e=!0;c<d;c++)j.tweens[c].run(1);return b?(h.notifyWith(a,[j,1,0]),h.resolveWith(a,[j,b])):h.rejectWith(a,[j,b]),this}}),k=j.props;for(ob(k,j.opts.specialEasing);f<g;f++)if(d=pb.prefilters[f].call(j,a,k,j.opts))return n.isFunction(d.stop)&&(n._queueHooks(j.elem,j.opts.queue).stop=n.proxy(d.stop,d)),d;return n.map(k,mb,j),n.isFunction(j.opts.start)&&j.opts.start.call(a,j),n.fx.timer(n.extend(i,{elem:a,anim:j,queue:j.opts.queue})),j.progress(j.opts.progress).done(j.opts.done,j.opts.complete).fail(j.opts.fail).always(j.opts.always)}n.Animation=n.extend(pb,{tweeners:{"*":[function(a,b){var c=this.createTween(a,b);return W(c.elem,a,T.exec(b),c),c}]},tweener:function(a,b){n.isFunction(a)?(b=a,a=["*"]):a=a.match(F);for(var c,d=0,e=a.length;d<e;d++)c=a[d],pb.tweeners[c]=pb.tweeners[c]||[],pb.tweeners[c].unshift(b)},prefilters:[nb],prefilter:function(a,b){b?pb.prefilters.unshift(a):pb.prefilters.push(a)}}),n.speed=function(a,b,c){var d=a&&"object"==typeof a?n.extend({},a):{complete:c||!c&&b||n.isFunction(a)&&a,duration:a,easing:c&&b||b&&!n.isFunction(b)&&b};return d.duration=n.fx.off?0:"number"==typeof d.duration?d.duration:d.duration in n.fx.speeds?n.fx.speeds[d.duration]:n.fx.speeds._default,null!=d.queue&&!0!==d.queue||(d.queue="fx"),d.old=d.complete,d.complete=function(){n.isFunction(d.old)&&d.old.call(this),d.queue&&n.dequeue(this,d.queue)},d},n.fn.extend({fadeTo:function(a,b,c,d){return this.filter(V).css("opacity",0).show().end().animate({opacity:b},a,c,d)},animate:function(a,b,c,d){var e=n.isEmptyObject(a),f=n.speed(b,c,d),g=function(){var b=pb(this,n.extend({},a),f);(e||n._data(this,"finish"))&&b.stop(!0)};return g.finish=g,e||!1===f.queue?this.each(g):this.queue(f.queue,g)},stop:function(a,b,c){var d=function(a){var b=a.stop;delete a.stop,b(c)};return"string"!=typeof a&&(c=b,b=a,a=void 0),b&&!1!==a&&this.queue(a||"fx",[]),this.each(function(){var b=!0,e=null!=a&&a+"queueHooks",f=n.timers,g=n._data(this);if(e)g[e]&&g[e].stop&&d(g[e]);else for(e in g)g[e]&&g[e].stop&&jb.test(e)&&d(g[e]);for(e=f.length;e--;)f[e].elem!==this||null!=a&&f[e].queue!==a||(f[e].anim.stop(c),b=!1,f.splice(e,1));!b&&c||n.dequeue(this,a)})},finish:function(a){return!1!==a&&(a=a||"fx"),this.each(function(){var b,c=n._data(this),d=c[a+"queue"],e=c[a+"queueHooks"],f=n.timers,g=d?d.length:0;for(c.finish=!0,n.queue(this,a,[]),e&&e.stop&&e.stop.call(this,!0),b=f.length;b--;)f[b].elem===this&&f[b].queue===a&&(f[b].anim.stop(!0),f.splice(b,1));for(b=0;b<g;b++)d[b]&&d[b].finish&&d[b].finish.call(this);delete c.finish})}}),n.each(["toggle","show","hide"],function(a,b){var c=n.fn[b];n.fn[b]=function(a,d,e){return null==a||"boolean"==typeof a?c.apply(this,arguments):this.animate(lb(b,!0),a,d,e)}}),n.each({slideDown:lb("show"),slideUp:lb("hide"),slideToggle:lb("toggle"),fadeIn:{opacity:"show"},fadeOut:{opacity:"hide"},fadeToggle:{opacity:"toggle"}},function(a,b){n.fn[a]=function(a,c,d){return this.animate(b,a,c,d)}}),n.timers=[],n.fx.tick=function(){var a,b=n.timers,c=0;for(gb=n.now();c<b.length;c++)(a=b[c])()||b[c]!==a||b.splice(c--,1);b.length||n.fx.stop(),gb=void 0},n.fx.timer=function(a){n.timers.push(a),a()?n.fx.start():n.timers.pop()},n.fx.interval=13,n.fx.start=function(){hb||(hb=a.setInterval(n.fx.tick,n.fx.interval))},n.fx.stop=function(){a.clearInterval(hb),hb=null},n.fx.speeds={slow:600,fast:200,_default:400},n.fn.delay=function(b,c){return b=n.fx?n.fx.speeds[b]||b:b,c=c||"fx",this.queue(c,function(c,d){var e=a.setTimeout(c,b);d.stop=function(){a.clearTimeout(e)}})},function(){var a,b=d.createElement("input"),c=d.createElement("div"),e=d.createElement("select"),f=e.appendChild(d.createElement("option"));c=d.createElement("div"),c.setAttribute("className","t"),c.innerHTML="  <link/><table></table><a href='/a'>a</a><input type='checkbox'/>",a=c.getElementsByTagName("a")[0],b.setAttribute("type","checkbox"),c.appendChild(b),a=c.getElementsByTagName("a")[0],a.style.cssText="top:1px",l.getSetAttribute="t"!==c.className,l.style=/top/.test(a.getAttribute("style")),l.hrefNormalized="/a"===a.getAttribute("href"),l.checkOn=!!b.value,l.optSelected=f.selected,l.enctype=!!d.createElement("form").enctype,e.disabled=!0,l.optDisabled=!f.disabled,b=d.createElement("input"),b.setAttribute("value",""),l.input=""===b.getAttribute("value"),b.value="t",b.setAttribute("type","radio"),l.radioValue="t"===b.value}();var qb=/\r/g,rb=/[\x20\t\r\n\f]+/g;n.fn.extend({val:function(a){var b,c,d,e=this[0];{if(arguments.length)return d=n.isFunction(a),this.each(function(c){var e;1===this.nodeType&&(e=d?a.call(this,c,n(this).val()):a,null==e?e="":"number"==typeof e?e+="":n.isArray(e)&&(e=n.map(e,function(a){return null==a?"":a+""})),(b=n.valHooks[this.type]||n.valHooks[this.nodeName.toLowerCase()])&&"set"in b&&void 0!==b.set(this,e,"value")||(this.value=e))});if(e)return(b=n.valHooks[e.type]||n.valHooks[e.nodeName.toLowerCase()])&&"get"in b&&void 0!==(c=b.get(e,"value"))?c:(c=e.value,"string"==typeof c?c.replace(qb,""):null==c?"":c)}}}),n.extend({valHooks:{option:{get:function(a){var b=n.find.attr(a,"value");return null!=b?b:n.trim(n.text(a)).replace(rb," ")}},select:{get:function(a){for(var b,c,d=a.options,e=a.selectedIndex,f="select-one"===a.type||e<0,g=f?null:[],h=f?e+1:d.length,i=e<0?h:f?e:0;i<h;i++)if(c=d[i],(c.selected||i===e)&&(l.optDisabled?!c.disabled:null===c.getAttribute("disabled"))&&(!c.parentNode.disabled||!n.nodeName(c.parentNode,"optgroup"))){if(b=n(c).val(),f)return b;g.push(b)}return g},set:function(a,b){var c,d,e=a.options,f=n.makeArray(b),g=e.length;while(g--)if(d=e[g],n.inArray(n.valHooks.option.get(d),f)>-1)try{d.selected=c=!0}catch(h){d.scrollHeight}else d.selected=!1;return c||(a.selectedIndex=-1),e}}}}),n.each(["radio","checkbox"],function(){n.valHooks[this]={set:function(a,b){if(n.isArray(b))return a.checked=n.inArray(n(a).val(),b)>-1}},l.checkOn||(n.valHooks[this].get=function(a){return null===a.getAttribute("value")?"on":a.value})});var sb,tb,ub=n.expr.attrHandle,vb=/^(?:checked|selected)$/i,wb=l.getSetAttribute,xb=l.input;n.fn.extend({attr:function(a,b){return X(this,n.attr,a,b,arguments.length>1)},removeAttr:function(a){return this.each(function(){n.removeAttr(this,a)})}}),n.extend({attr:function(a,b,c){var d,e,f=a.nodeType;if(3!==f&&8!==f&&2!==f)return void 0===a.getAttribute?n.prop(a,b,c):(1===f&&n.isXMLDoc(a)||(b=b.toLowerCase(),e=n.attrHooks[b]||(n.expr.match.bool.test(b)?tb:sb)),void 0!==c?null===c?void n.removeAttr(a,b):e&&"set"in e&&void 0!==(d=e.set(a,c,b))?d:(a.setAttribute(b,c+""),c):e&&"get"in e&&null!==(d=e.get(a,b))?d:(d=n.find.attr(a,b),null==d?void 0:d))},attrHooks:{type:{set:function(a,b){if(!l.radioValue&&"radio"===b&&n.nodeName(a,"input")){var c=a.value;return a.setAttribute("type",b),c&&(a.value=c),b}}}},removeAttr:function(a,b){var c,d,e=0,f=b&&b.match(F);if(f&&1===a.nodeType)while(c=f[e++])d=n.propFix[c]||c,n.expr.match.bool.test(c)?xb&&wb||!vb.test(c)?a[d]=!1:a[n.camelCase("default-"+c)]=a[d]=!1:n.attr(a,c,""),a.removeAttribute(wb?c:d)}}),tb={set:function(a,b,c){return!1===b?n.removeAttr(a,c):xb&&wb||!vb.test(c)?a.setAttribute(!wb&&n.propFix[c]||c,c):a[n.camelCase("default-"+c)]=a[c]=!0,c}},n.each(n.expr.match.bool.source.match(/\w+/g),function(a,b){var c=ub[b]||n.find.attr;xb&&wb||!vb.test(b)?ub[b]=function(a,b,d){var e,f;return d||(f=ub[b],ub[b]=e,e=null!=c(a,b,d)?b.toLowerCase():null,ub[b]=f),e}:ub[b]=function(a,b,c){if(!c)return a[n.camelCase("default-"+b)]?b.toLowerCase():null}}),xb&&wb||(n.attrHooks.value={set:function(a,b,c){if(!n.nodeName(a,"input"))return sb&&sb.set(a,b,c);a.defaultValue=b}}),wb||(sb={set:function(a,b,c){var d=a.getAttributeNode(c);if(d||a.setAttributeNode(d=a.ownerDocument.createAttribute(c)),d.value=b+="","value"===c||b===a.getAttribute(c))return b}},ub.id=ub.name=ub.coords=function(a,b,c){var d;if(!c)return(d=a.getAttributeNode(b))&&""!==d.value?d.value:null},n.valHooks.button={get:function(a,b){var c=a.getAttributeNode(b);if(c&&c.specified)return c.value},set:sb.set},n.attrHooks.contenteditable={set:function(a,b,c){sb.set(a,""!==b&&b,c)}},n.each(["width","height"],function(a,b){n.attrHooks[b]={set:function(a,c){if(""===c)return a.setAttribute(b,"auto"),c}}})),l.style||(n.attrHooks.style={get:function(a){return a.style.cssText||void 0},set:function(a,b){return a.style.cssText=b+""}});var yb=/^(?:input|select|textarea|button|object)$/i,zb=/^(?:a|area)$/i;n.fn.extend({prop:function(a,b){return X(this,n.prop,a,b,arguments.length>1)},removeProp:function(a){return a=n.propFix[a]||a,this.each(function(){try{this[a]=void 0,delete this[a]}catch(b){}})}}),n.extend({prop:function(a,b,c){var d,e,f=a.nodeType;if(3!==f&&8!==f&&2!==f)return 1===f&&n.isXMLDoc(a)||(b=n.propFix[b]||b,e=n.propHooks[b]),void 0!==c?e&&"set"in e&&void 0!==(d=e.set(a,c,b))?d:a[b]=c:e&&"get"in e&&null!==(d=e.get(a,b))?d:a[b]},propHooks:{tabIndex:{get:function(a){var b=n.find.attr(a,"tabindex");return b?parseInt(b,10):yb.test(a.nodeName)||zb.test(a.nodeName)&&a.href?0:-1}}},propFix:{for:"htmlFor",class:"className"}}),l.hrefNormalized||n.each(["href","src"],function(a,b){n.propHooks[b]={get:function(a){return a.getAttribute(b,4)}}}),l.optSelected||(n.propHooks.selected={get:function(a){var b=a.parentNode;return b&&(b.selectedIndex,b.parentNode&&b.parentNode.selectedIndex),null},set:function(a){var b=a.parentNode;b&&(b.selectedIndex,b.parentNode&&b.parentNode.selectedIndex)}}),n.each(["tabIndex","readOnly","maxLength","cellSpacing","cellPadding","rowSpan","colSpan","useMap","frameBorder","contentEditable"],function(){n.propFix[this.toLowerCase()]=this}),l.enctype||(n.propFix.enctype="encoding");var Ab=/[\t\r\n\f]/g;function Bb(a){return n.attr(a,"class")||""}n.fn.extend({addClass:function(a){var b,c,d,e,f,g,h,i=0;if(n.isFunction(a))return this.each(function(b){n(this).addClass(a.call(this,b,Bb(this)))});if("string"==typeof a&&a){b=a.match(F)||[];while(c=this[i++])if(e=Bb(c),d=1===c.nodeType&&(" "+e+" ").replace(Ab," ")){g=0;while(f=b[g++])d.indexOf(" "+f+" ")<0&&(d+=f+" ");h=n.trim(d),e!==h&&n.attr(c,"class",h)}}return this},removeClass:function(a){var b,c,d,e,f,g,h,i=0;if(n.isFunction(a))return this.each(function(b){n(this).removeClass(a.call(this,b,Bb(this)))});if(!arguments.length)return this.attr("class","");if("string"==typeof a&&a){b=a.match(F)||[];while(c=this[i++])if(e=Bb(c),d=1===c.nodeType&&(" "+e+" ").replace(Ab," ")){g=0;while(f=b[g++])while(d.indexOf(" "+f+" ")>-1)d=d.replace(" "+f+" "," ");h=n.trim(d),e!==h&&n.attr(c,"class",h)}}return this},toggleClass:function(a,b){var c=typeof a;return"boolean"==typeof b&&"string"===c?b?this.addClass(a):this.removeClass(a):n.isFunction(a)?this.each(function(c){n(this).toggleClass(a.call(this,c,Bb(this),b),b)}):this.each(function(){var b,d,e,f;if("string"===c){d=0,e=n(this),f=a.match(F)||[];while(b=f[d++])e.hasClass(b)?e.removeClass(b):e.addClass(b)}else void 0!==a&&"boolean"!==c||(b=Bb(this),b&&n._data(this,"__className__",b),n.attr(this,"class",b||!1===a?"":n._data(this,"__className__")||""))})},hasClass:function(a){var b,c,d=0;b=" "+a+" ";while(c=this[d++])if(1===c.nodeType&&(" "+Bb(c)+" ").replace(Ab," ").indexOf(b)>-1)return!0;return!1}}),n.each("blur focus focusin focusout load resize scroll unload click dblclick mousedown mouseup mousemove mouseover mouseout mouseenter mouseleave change select submit keydown keypress keyup error contextmenu".split(" "),function(a,b){n.fn[b]=function(a,c){return arguments.length>0?this.on(b,null,a,c):this.trigger(b)}}),n.fn.extend({hover:function(a,b){return this.mouseenter(a).mouseleave(b||a)}});var Cb=a.location,Db=n.now(),Eb=/\?/,Fb=/(,)|(\[|{)|(}|])|"(?:[^"\\\r\n]|\\["\\\/bfnrt]|\\u[\da-fA-F]{4})*"\s*:?|true|false|null|-?(?!0\d)\d+(?:\.\d+|)(?:[eE][+-]?\d+|)/g;n.parseJSON=function(b){if(a.JSON&&a.JSON.parse)return a.JSON.parse(b+"");var c,d=null,e=n.trim(b+"");return e&&!n.trim(e.replace(Fb,function(a,b,e,f){return c&&b&&(d=0),0===d?a:(c=e||b,d+=!f-!e,"")}))?Function("return "+e)():n.error("Invalid JSON: "+b)},n.parseXML=function(b){var c,d;if(!b||"string"!=typeof b)return null;try{a.DOMParser?(d=new a.DOMParser,c=d.parseFromString(b,"text/xml")):(c=new a.ActiveXObject("Microsoft.XMLDOM"),c.async="false",c.loadXML(b))}catch(e){c=void 0}return c&&c.documentElement&&!c.getElementsByTagName("parsererror").length||n.error("Invalid XML: "+b),c};var Gb=/#.*$/,Hb=/([?&])_=[^&]*/,Ib=/^(.*?):[ \t]*([^\r\n]*)\r?$/gm,Jb=/^(?:about|app|app-storage|.+-extension|file|res|widget):$/,Kb=/^(?:GET|HEAD)$/,Lb=/^\/\//,Mb=/^([\w.+-]+:)(?:\/\/(?:[^\/?#]*@|)([^\/?#:]*)(?::(\d+)|)|)/,Nb={},Ob={},Pb="*/".concat("*"),Qb=Cb.href,Rb=Mb.exec(Qb.toLowerCase())||[];function Sb(a){return function(b,c){"string"!=typeof b&&(c=b,b="*");var d,e=0,f=b.toLowerCase().match(F)||[];if(n.isFunction(c))while(d=f[e++])"+"===d.charAt(0)?(d=d.slice(1)||"*",(a[d]=a[d]||[]).unshift(c)):(a[d]=a[d]||[]).push(c)}}function Tb(a,b,c,d){var e={},f=a===Ob;function g(h){var i;return e[h]=!0,n.each(a[h]||[],function(a,h){var j=h(b,c,d);return"string"!=typeof j||f||e[j]?f?!(i=j):void 0:(b.dataTypes.unshift(j),g(j),!1)}),i}return g(b.dataTypes[0])||!e["*"]&&g("*")}function Ub(a,b){var c,d,e=n.ajaxSettings.flatOptions||{};for(d in b)void 0!==b[d]&&((e[d]?a:c||(c={}))[d]=b[d]);return c&&n.extend(!0,a,c),a}function Vb(a,b,c){var d,e,f,g,h=a.contents,i=a.dataTypes;while("*"===i[0])i.shift(),void 0===e&&(e=a.mimeType||b.getResponseHeader("Content-Type"));if(e)for(g in h)if(h[g]&&h[g].test(e)){i.unshift(g);break}if(i[0]in c)f=i[0];else{for(g in c){if(!i[0]||a.converters[g+" "+i[0]]){f=g;break}d||(d=g)}f=f||d}if(f)return f!==i[0]&&i.unshift(f),c[f]}function Wb(a,b,c,d){var e,f,g,h,i,j={},k=a.dataTypes.slice();if(k[1])for(g in a.converters)j[g.toLowerCase()]=a.converters[g];f=k.shift();while(f)if(a.responseFields[f]&&(c[a.responseFields[f]]=b),!i&&d&&a.dataFilter&&(b=a.dataFilter(b,a.dataType)),i=f,f=k.shift())if("*"===f)f=i;else if("*"!==i&&i!==f){if(!(g=j[i+" "+f]||j["* "+f]))for(e in j)if(h=e.split(" "),h[1]===f&&(g=j[i+" "+h[0]]||j["* "+h[0]])){!0===g?g=j[e]:!0!==j[e]&&(f=h[0],k.unshift(h[1]));break}if(!0!==g)if(g&&a.throws)b=g(b);else try{b=g(b)}catch(l){return{state:"parsererror",error:g?l:"No conversion from "+i+" to "+f}}}return{state:"success",data:b}}n.extend({active:0,lastModified:{},etag:{},ajaxSettings:{url:Qb,type:"GET",isLocal:Jb.test(Rb[1]),global:!0,processData:!0,async:!0,contentType:"application/x-www-form-urlencoded; charset=UTF-8",accepts:{"*":Pb,text:"text/plain",html:"text/html",xml:"application/xml, text/xml",json:"application/json, text/javascript"},contents:{xml:/\bxml\b/,html:/\bhtml/,json:/\bjson\b/},responseFields:{xml:"responseXML",text:"responseText",json:"responseJSON"},converters:{"* text":String,"text html":!0,"text json":n.parseJSON,"text xml":n.parseXML},flatOptions:{url:!0,context:!0}},ajaxSetup:function(a,b){return b?Ub(Ub(a,n.ajaxSettings),b):Ub(n.ajaxSettings,a)},ajaxPrefilter:Sb(Nb),ajaxTransport:Sb(Ob),ajax:function(b,c){"object"==typeof b&&(c=b,b=void 0),c=c||{};var d,e,f,g,h,i,j,k,l=n.ajaxSetup({},c),m=l.context||l,o=l.context&&(m.nodeType||m.jquery)?n(m):n.event,p=n.Deferred(),q=n.Callbacks("once memory"),r=l.statusCode||{},s={},t={},u=0,v="canceled",w={readyState:0,getResponseHeader:function(a){var b;if(2===u){if(!k){k={};while(b=Ib.exec(g))k[b[1].toLowerCase()]=b[2]}b=k[a.toLowerCase()]}return null==b?null:b},getAllResponseHeaders:function(){return 2===u?g:null},setRequestHeader:function(a,b){var c=a.toLowerCase();return u||(a=t[c]=t[c]||a,s[a]=b),this},overrideMimeType:function(a){return u||(l.mimeType=a),this},statusCode:function(a){var b;if(a)if(u<2)for(b in a)r[b]=[r[b],a[b]];else w.always(a[w.status]);return this},abort:function(a){var b=a||v;return j&&j.abort(b),x(0,b),this}};if(p.promise(w).complete=q.add,w.success=w.done,w.error=w.fail,l.url=((b||l.url||Qb)+"").replace(Gb,"").replace(Lb,Rb[1]+"//"),l.type=c.method||c.type||l.method||l.type,l.dataTypes=n.trim(l.dataType||"*").toLowerCase().match(F)||[""],null==l.crossDomain&&(d=Mb.exec(l.url.toLowerCase()),l.crossDomain=!(!d||d[1]===Rb[1]&&d[2]===Rb[2]&&(d[3]||("http:"===d[1]?"80":"443"))===(Rb[3]||("http:"===Rb[1]?"80":"443")))),l.data&&l.processData&&"string"!=typeof l.data&&(l.data=n.param(l.data,l.traditional)),Tb(Nb,l,c,w),2===u)return w;i=n.event&&l.global,i&&0==n.active++&&n.event.trigger("ajaxStart"),l.type=l.type.toUpperCase(),l.hasContent=!Kb.test(l.type),f=l.url,l.hasContent||(l.data&&(f=l.url+=(Eb.test(f)?"&":"?")+l.data,delete l.data),!1===l.cache&&(l.url=Hb.test(f)?f.replace(Hb,"$1_="+Db++):f+(Eb.test(f)?"&":"?")+"_="+Db++)),l.ifModified&&(n.lastModified[f]&&w.setRequestHeader("If-Modified-Since",n.lastModified[f]),n.etag[f]&&w.setRequestHeader("If-None-Match",n.etag[f])),(l.data&&l.hasContent&&!1!==l.contentType||c.contentType)&&w.setRequestHeader("Content-Type",l.contentType),w.setRequestHeader("Accept",l.dataTypes[0]&&l.accepts[l.dataTypes[0]]?l.accepts[l.dataTypes[0]]+("*"!==l.dataTypes[0]?", "+Pb+"; q=0.01":""):l.accepts["*"]);for(e in l.headers)w.setRequestHeader(e,l.headers[e]);if(l.beforeSend&&(!1===l.beforeSend.call(m,w,l)||2===u))return w.abort();v="abort";for(e in{success:1,error:1,complete:1})w[e](l[e]);if(j=Tb(Ob,l,c,w)){if(w.readyState=1,i&&o.trigger("ajaxSend",[w,l]),2===u)return w;l.async&&l.timeout>0&&(h=a.setTimeout(function(){w.abort("timeout")},l.timeout));try{u=1,j.send(s,x)}catch(y){if(!(u<2))throw y;x(-1,y)}}else x(-1,"No Transport");function x(b,c,d,e){var k,s,t,v,x,y=c;2!==u&&(u=2,h&&a.clearTimeout(h),j=void 0,g=e||"",w.readyState=b>0?4:0,k=b>=200&&b<300||304===b,d&&(v=Vb(l,w,d)),v=Wb(l,v,w,k),k?(l.ifModified&&(x=w.getResponseHeader("Last-Modified"),x&&(n.lastModified[f]=x),(x=w.getResponseHeader("etag"))&&(n.etag[f]=x)),204===b||"HEAD"===l.type?y="nocontent":304===b?y="notmodified":(y=v.state,s=v.data,t=v.error,k=!t)):(t=y,!b&&y||(y="error",b<0&&(b=0))),w.status=b,w.statusText=(c||y)+"",k?p.resolveWith(m,[s,y,w]):p.rejectWith(m,[w,y,t]),w.statusCode(r),r=void 0,i&&o.trigger(k?"ajaxSuccess":"ajaxError",[w,l,k?s:t]),q.fireWith(m,[w,y]),i&&(o.trigger("ajaxComplete",[w,l]),--n.active||n.event.trigger("ajaxStop")))}return w},getJSON:function(a,b,c){return n.get(a,b,c,"json")},getScript:function(a,b){return n.get(a,void 0,b,"script")}}),n.each(["get","post"],function(a,b){n[b]=function(a,c,d,e){return n.isFunction(c)&&(e=e||d,d=c,c=void 0),n.ajax(n.extend({url:a,type:b,dataType:e,data:c,success:d},n.isPlainObject(a)&&a))}}),n._evalUrl=function(a){return n.ajax({url:a,type:"GET",dataType:"script",cache:!0,async:!1,global:!1,throws:!0})},n.fn.extend({wrapAll:function(a){if(n.isFunction(a))return this.each(function(b){n(this).wrapAll(a.call(this,b))});if(this[0]){var b=n(a,this[0].ownerDocument).eq(0).clone(!0);this[0].parentNode&&b.insertBefore(this[0]),b.map(function(){var a=this;while(a.firstChild&&1===a.firstChild.nodeType)a=a.firstChild;return a}).append(this)}return this},wrapInner:function(a){return n.isFunction(a)?this.each(function(b){n(this).wrapInner(a.call(this,b))}):this.each(function(){var b=n(this),c=b.contents();c.length?c.wrapAll(a):b.append(a)})},wrap:function(a){var b=n.isFunction(a);return this.each(function(c){n(this).wrapAll(b?a.call(this,c):a)})},unwrap:function(){return this.parent().each(function(){n.nodeName(this,"body")||n(this).replaceWith(this.childNodes)}).end()}});function Xb(a){return a.style&&a.style.display||n.css(a,"display")}function Yb(a){if(!n.contains(a.ownerDocument||d,a))return!0;while(a&&1===a.nodeType){if("none"===Xb(a)||"hidden"===a.type)return!0;a=a.parentNode}return!1}n.expr.filters.hidden=function(a){return l.reliableHiddenOffsets()?a.offsetWidth<=0&&a.offsetHeight<=0&&!a.getClientRects().length:Yb(a)},n.expr.filters.visible=function(a){return!n.expr.filters.hidden(a)};var Zb=/%20/g,$b=/\[\]$/,_b=/\r?\n/g,ac=/^(?:submit|button|image|reset|file)$/i,bc=/^(?:input|select|textarea|keygen)/i;function cc(a,b,c,d){var e;if(n.isArray(b))n.each(b,function(b,e){c||$b.test(a)?d(a,e):cc(a+"["+("object"==typeof e&&null!=e?b:"")+"]",e,c,d)});else if(c||"object"!==n.type(b))d(a,b);else for(e in b)cc(a+"["+e+"]",b[e],c,d)}n.param=function(a,b){var c,d=[],e=function(a,b){b=n.isFunction(b)?b():null==b?"":b,d[d.length]=encodeURIComponent(a)+"="+encodeURIComponent(b)};if(void 0===b&&(b=n.ajaxSettings&&n.ajaxSettings.traditional),n.isArray(a)||a.jquery&&!n.isPlainObject(a))n.each(a,function(){e(this.name,this.value)});else for(c in a)cc(c,a[c],b,e);return d.join("&").replace(Zb,"+")},n.fn.extend({serialize:function(){return n.param(this.serializeArray())},serializeArray:function(){return this.map(function(){var a=n.prop(this,"elements");return a?n.makeArray(a):this}).filter(function(){var a=this.type;return this.name&&!n(this).is(":disabled")&&bc.test(this.nodeName)&&!ac.test(a)&&(this.checked||!Y.test(a))}).map(function(a,b){var c=n(this).val();return null==c?null:n.isArray(c)?n.map(c,function(a){return{name:b.name,value:a.replace(_b,"\r\n")}}):{name:b.name,value:c.replace(_b,"\r\n")}}).get()}}),n.ajaxSettings.xhr=void 0!==a.ActiveXObject?function(){return this.isLocal?hc():d.documentMode>8?gc():/^(get|post|head|put|delete|options)$/i.test(this.type)&&gc()||hc()}:gc;var dc=0,ec={},fc=n.ajaxSettings.xhr();a.attachEvent&&a.attachEvent("onunload",function(){for(var a in ec)ec[a](void 0,!0)}),l.cors=!!fc&&"withCredentials"in fc,(fc=l.ajax=!!fc)&&n.ajaxTransport(function(b){if(!b.crossDomain||l.cors){var c;return{send:function(d,e){var f,g=b.xhr(),h=++dc;if(g.open(b.type,b.url,b.async,b.username,b.password),b.xhrFields)for(f in b.xhrFields)g[f]=b.xhrFields[f];b.mimeType&&g.overrideMimeType&&g.overrideMimeType(b.mimeType),b.crossDomain||d["X-Requested-With"]||(d["X-Requested-With"]="XMLHttpRequest");for(f in d)void 0!==d[f]&&g.setRequestHeader(f,d[f]+"");g.send(b.hasContent&&b.data||null),c=function(a,d){var f,i,j;if(c&&(d||4===g.readyState))if(delete ec[h],c=void 0,g.onreadystatechange=n.noop,d)4!==g.readyState&&g.abort();else{j={},f=g.status,"string"==typeof g.responseText&&(j.text=g.responseText);try{i=g.statusText}catch(k){i=""}f||!b.isLocal||b.crossDomain?1223===f&&(f=204):f=j.text?200:404}j&&e(f,i,j,g.getAllResponseHeaders())},b.async?4===g.readyState?a.setTimeout(c):g.onreadystatechange=ec[h]=c:c()},abort:function(){c&&c(void 0,!0)}}}});function gc(){try{return new a.XMLHttpRequest}catch(b){}}function hc(){try{return new a.ActiveXObject("Microsoft.XMLHTTP")}catch(b){}}n.ajaxSetup({accepts:{script:"text/javascript, application/javascript, application/ecmascript, application/x-ecmascript"},contents:{script:/\b(?:java|ecma)script\b/},converters:{"text script":function(a){return n.globalEval(a),a}}}),n.ajaxPrefilter("script",function(a){void 0===a.cache&&(a.cache=!1),a.crossDomain&&(a.type="GET",a.global=!1)}),n.ajaxTransport("script",function(a){if(a.crossDomain){var b,c=d.head||n("head")[0]||d.documentElement;return{send:function(e,f){b=d.createElement("script"),b.async=!0,a.scriptCharset&&(b.charset=a.scriptCharset),b.src=a.url,b.onload=b.onreadystatechange=function(a,c){(c||!b.readyState||/loaded|complete/.test(b.readyState))&&(b.onload=b.onreadystatechange=null,b.parentNode&&b.parentNode.removeChild(b),b=null,c||f(200,"success"))},c.insertBefore(b,c.firstChild)},abort:function(){b&&b.onload(void 0,!0)}}}});var ic=[],jc=/(=)\?(?=&|$)|\?\?/;n.ajaxSetup({jsonp:"callback",jsonpCallback:function(){var a=ic.pop()||n.expando+"_"+Db++;return this[a]=!0,a}}),n.ajaxPrefilter("json jsonp",function(b,c,d){var e,f,g,h=!1!==b.jsonp&&(jc.test(b.url)?"url":"string"==typeof b.data&&0===(b.contentType||"").indexOf("application/x-www-form-urlencoded")&&jc.test(b.data)&&"data");if(h||"jsonp"===b.dataTypes[0])return e=b.jsonpCallback=n.isFunction(b.jsonpCallback)?b.jsonpCallback():b.jsonpCallback,h?b[h]=b[h].replace(jc,"$1"+e):!1!==b.jsonp&&(b.url+=(Eb.test(b.url)?"&":"?")+b.jsonp+"="+e),b.converters["script json"]=function(){return g||n.error(e+" was not called"),g[0]},b.dataTypes[0]="json",f=a[e],a[e]=function(){g=arguments},d.always(function(){void 0===f?n(a).removeProp(e):a[e]=f,b[e]&&(b.jsonpCallback=c.jsonpCallback,ic.push(e)),g&&n.isFunction(f)&&f(g[0]),g=f=void 0}),"script"}),n.parseHTML=function(a,b,c){if(!a||"string"!=typeof a)return null;"boolean"==typeof b&&(c=b,b=!1),b=b||d;var e=x.exec(a),f=!c&&[];return e?[b.createElement(e[1])]:(e=ia([a],b,f),f&&f.length&&n(f).remove(),n.merge([],e.childNodes))};var kc=n.fn.load;n.fn.load=function(a,b,c){if("string"!=typeof a&&kc)return kc.apply(this,arguments);var d,e,f,g=this,h=a.indexOf(" ");return h>-1&&(d=n.trim(a.slice(h,a.length)),a=a.slice(0,h)),n.isFunction(b)?(c=b,b=void 0):b&&"object"==typeof b&&(e="POST"),g.length>0&&n.ajax({url:a,type:e||"GET",dataType:"html",data:b}).done(function(a){f=arguments,g.html(d?n("<div>").append(n.parseHTML(a)).find(d):a)}).always(c&&function(a,b){g.each(function(){c.apply(this,f||[a.responseText,b,a])})}),this},n.each(["ajaxStart","ajaxStop","ajaxComplete","ajaxError","ajaxSuccess","ajaxSend"],function(a,b){n.fn[b]=function(a){return this.on(b,a)}}),n.expr.filters.animated=function(a){return n.grep(n.timers,function(b){return a===b.elem}).length};function lc(a){return n.isWindow(a)?a:9===a.nodeType&&(a.defaultView||a.parentWindow)}n.offset={setOffset:function(a,b,c){var d,e,f,g,h,i,j,k=n.css(a,"position"),l=n(a),m={};"static"===k&&(a.style.position="relative"),h=l.offset(),f=n.css(a,"top"),i=n.css(a,"left"),j=("absolute"===k||"fixed"===k)&&n.inArray("auto",[f,i])>-1,j?(d=l.position(),g=d.top,e=d.left):(g=parseFloat(f)||0,e=parseFloat(i)||0),n.isFunction(b)&&(b=b.call(a,c,n.extend({},h))),null!=b.top&&(m.top=b.top-h.top+g),null!=b.left&&(m.left=b.left-h.left+e),"using"in b?b.using.call(a,m):l.css(m)}},n.fn.extend({offset:function(a){if(arguments.length)return void 0===a?this:this.each(function(b){n.offset.setOffset(this,a,b)});var b,c,d={top:0,left:0},e=this[0],f=e&&e.ownerDocument;if(f)return b=f.documentElement,n.contains(b,e)?(void 0!==e.getBoundingClientRect&&(d=e.getBoundingClientRect()),c=lc(f),{top:d.top+(c.pageYOffset||b.scrollTop)-(b.clientTop||0),left:d.left+(c.pageXOffset||b.scrollLeft)-(b.clientLeft||0)}):d},position:function(){if(this[0]){var a,b,c={top:0,left:0},d=this[0];return"fixed"===n.css(d,"position")?b=d.getBoundingClientRect():(a=this.offsetParent(),b=this.offset(),n.nodeName(a[0],"html")||(c=a.offset()),c.top+=n.css(a[0],"borderTopWidth",!0),c.left+=n.css(a[0],"borderLeftWidth",!0)),{top:b.top-c.top-n.css(d,"marginTop",!0),left:b.left-c.left-n.css(d,"marginLeft",!0)}}},offsetParent:function(){return this.map(function(){var a=this.offsetParent;while(a&&!n.nodeName(a,"html")&&"static"===n.css(a,"position"))a=a.offsetParent;return a||Pa})}}),n.each({scrollLeft:"pageXOffset",scrollTop:"pageYOffset"},function(a,b){var c=/Y/.test(b);n.fn[a]=function(d){return X(this,function(a,d,e){var f=lc(a);if(void 0===e)return f?b in f?f[b]:f.document.documentElement[d]:a[d];f?f.scrollTo(c?n(f).scrollLeft():e,c?e:n(f).scrollTop()):a[d]=e},a,d,arguments.length,null)}}),n.each(["top","left"],function(a,b){n.cssHooks[b]=Ta(l.pixelPosition,function(a,c){if(c)return c=Ra(a,b),Na.test(c)?n(a).position()[b]+"px":c})}),n.each({Height:"height",Width:"width"},function(a,b){n.each({padding:"inner"+a,content:b,"":"outer"+a},function(c,d){n.fn[d]=function(d,e){var f=arguments.length&&(c||"boolean"!=typeof d),g=c||(!0===d||!0===e?"margin":"border")
;return X(this,function(b,c,d){var e;return n.isWindow(b)?b.document.documentElement["client"+a]:9===b.nodeType?(e=b.documentElement,Math.max(b.body["scroll"+a],e["scroll"+a],b.body["offset"+a],e["offset"+a],e["client"+a])):void 0===d?n.css(b,c,g):n.style(b,c,d,g)},b,f?d:void 0,f,null)}})}),n.fn.extend({bind:function(a,b,c){return this.on(a,null,b,c)},unbind:function(a,b){return this.off(a,null,b)},delegate:function(a,b,c,d){return this.on(b,a,c,d)},undelegate:function(a,b,c){return 1===arguments.length?this.off(a,"**"):this.off(b,a||"**",c)}}),n.fn.size=function(){return this.length},n.fn.andSelf=n.fn.addBack,"function"==typeof define&&define.amd&&define("jquery",[],function(){return n});var mc=a.jQuery,nc=a.$;return n.noConflict=function(b){return a.$===n&&(a.$=nc),b&&a.jQuery===n&&(a.jQuery=mc),n},b||(a.jQuery=a.$=n),n});
(function(jQuery, window, undefined){
jQuery.migrateVersion="1.4.1";
var warnedAbout={};
jQuery.migrateWarnings=[];
if(window.console&&window.console.log){
window.console.log("JQMIGRATE: Migrate is installed" +
(jQuery.migrateMute ? "":" with logging active") +
", version " + jQuery.migrateVersion);
}
if(jQuery.migrateTrace===undefined){
jQuery.migrateTrace=true;
}
jQuery.migrateReset=function(){
warnedAbout={};
jQuery.migrateWarnings.length=0;
};
function migrateWarn(msg){
var console=window.console;
var error=new Error();
var tracedError={
warning: msg,
trace: error.stack||error
};
jQuery.migrateWarnings.push(tracedError);
if(! warnedAbout[ msg ]){
warnedAbout[ msg ]=true;
if(console&&console.warn&&!jQuery.migrateMute){
console.warn("JQMIGRATE: " + msg);
if(jQuery.migrateTrace&&console.trace){
console.trace();
}}
}}
function migrateWarnProp(obj, prop, value, msg){
if(Object.defineProperty){
try {
Object.defineProperty(obj, prop, {
configurable: true,
enumerable: true,
get: function(){
migrateWarn(msg);
return value;
},
set: function(newValue){
migrateWarn(msg);
value=newValue;
}});
return;
} catch(err){
}}
jQuery._definePropertyBroken=true;
obj[ prop ]=value;
}
if(document.compatMode==="BackCompat"){
migrateWarn("jQuery is not compatible with Quirks Mode");
}
var attrFn=jQuery("<input/>", { size: 1 }).attr("size")&&jQuery.attrFn,
oldAttr=jQuery.attr,
valueAttrGet=jQuery.attrHooks.value&&jQuery.attrHooks.value.get ||
function(){ return null; },
valueAttrSet=jQuery.attrHooks.value&&jQuery.attrHooks.value.set ||
function(){ return undefined; },
rnoType=/^(?:input|button)$/i,
rnoAttrNodeType=/^[238]$/,
rboolean=/^(?:autofocus|autoplay|async|checked|controls|defer|disabled|hidden|loop|multiple|open|readonly|required|scoped|selected)$/i,
ruseDefault=/^(?:checked|selected)$/i;
migrateWarnProp(jQuery, "attrFn", attrFn||{}, "jQuery.attrFn is deprecated");
jQuery.attr=function(elem, name, value, pass){
var lowerName=name.toLowerCase(),
nType=elem&&elem.nodeType;
if(pass){
if(oldAttr.length < 4){
migrateWarn("jQuery.fn.attr(props, pass) is deprecated");
}
if(elem&&!rnoAttrNodeType.test(nType) &&
(attrFn ? name in attrFn:jQuery.isFunction(jQuery.fn[name]))){
return jQuery(elem)[ name ](value);
}}
if(name==="type"&&value!==undefined&&rnoType.test(elem.nodeName)&&elem.parentNode){
migrateWarn("Can't change the 'type' of an input or button in IE 6/7/8");
}
if(!jQuery.attrHooks[ lowerName ]&&rboolean.test(lowerName)){
jQuery.attrHooks[ lowerName ]={
get: function(elem, name){
var attrNode,
property=jQuery.prop(elem, name);
return property===true||typeof property!=="boolean" &&
(attrNode=elem.getAttributeNode(name))&&attrNode.nodeValue!==false ?
name.toLowerCase() :
undefined;
},
set: function(elem, value, name){
var propName;
if(value===false){
jQuery.removeAttr(elem, name);
}else{
propName=jQuery.propFix[ name ]||name;
if(propName in elem){
elem[ propName ]=true;
}
elem.setAttribute(name, name.toLowerCase());
}
return name;
}};
if(ruseDefault.test(lowerName)){
migrateWarn("jQuery.fn.attr('" + lowerName + "') might use property instead of attribute");
}}
return oldAttr.call(jQuery, elem, name, value);
};
jQuery.attrHooks.value={
get: function(elem, name){
var nodeName=(elem.nodeName||"").toLowerCase();
if(nodeName==="button"){
return valueAttrGet.apply(this, arguments);
}
if(nodeName!=="input"&&nodeName!=="option"){
migrateWarn("jQuery.fn.attr('value') no longer gets properties");
}
return name in elem ?
elem.value :
null;
},
set: function(elem, value){
var nodeName=(elem.nodeName||"").toLowerCase();
if(nodeName==="button"){
return valueAttrSet.apply(this, arguments);
}
if(nodeName!=="input"&&nodeName!=="option"){
migrateWarn("jQuery.fn.attr('value', val) no longer sets properties");
}
elem.value=value;
}};
var matched, browser,
oldInit=jQuery.fn.init,
oldFind=jQuery.find,
oldParseJSON=jQuery.parseJSON,
rspaceAngle=/^\s*</,
rattrHashTest=/\[(\s*[-\w]+\s*)([~|^$*]?=)\s*([-\w#]*?#[-\w#]*)\s*\]/,
rattrHashGlob=/\[(\s*[-\w]+\s*)([~|^$*]?=)\s*([-\w#]*?#[-\w#]*)\s*\]/g,
rquickExpr=/^([^<]*)(<[\w\W]+>)([^>]*)$/;
jQuery.fn.init=function(selector, context, rootjQuery){
var match, ret;
if(selector&&typeof selector==="string"){
if(!jQuery.isPlainObject(context) &&
(match=rquickExpr.exec(jQuery.trim(selector)))&&match[ 0 ]){
if(!rspaceAngle.test(selector)){
migrateWarn("$(html) HTML strings must start with '<' character");
}
if(match[ 3 ]){
migrateWarn("$(html) HTML text after last tag is ignored");
}
if(match[ 0 ].charAt(0)==="#"){
migrateWarn("HTML string cannot start with a '#' character");
jQuery.error("JQMIGRATE: Invalid selector string (XSS)");
}
if(context&&context.context&&context.context.nodeType){
context=context.context;
}
if(jQuery.parseHTML){
return oldInit.call(this,
jQuery.parseHTML(match[ 2 ], context&&context.ownerDocument ||
context||document, true), context, rootjQuery);
}}
}
ret=oldInit.apply(this, arguments);
if(selector&&selector.selector!==undefined){
ret.selector=selector.selector;
ret.context=selector.context;
}else{
ret.selector=typeof selector==="string" ? selector:"";
if(selector){
ret.context=selector.nodeType? selector:context||document;
}}
return ret;
};
jQuery.fn.init.prototype=jQuery.fn;
jQuery.find=function(selector){
var args=Array.prototype.slice.call(arguments);
if(typeof selector==="string"&&rattrHashTest.test(selector)){
try {
document.querySelector(selector);
} catch(err1){
selector=selector.replace(rattrHashGlob, function(_, attr, op, value){
return "[" + attr + op + "\"" + value + "\"]";
});
try {
document.querySelector(selector);
migrateWarn("Attribute selector with '#' must be quoted: " + args[ 0 ]);
args[ 0 ]=selector;
} catch(err2){
migrateWarn("Attribute selector with '#' was not fixed: " + args[ 0 ]);
}}
}
return oldFind.apply(this, args);
};
var findProp;
for(findProp in oldFind){
if(Object.prototype.hasOwnProperty.call(oldFind, findProp)){
jQuery.find[ findProp ]=oldFind[ findProp ];
}}
jQuery.parseJSON=function(json){
if(!json){
migrateWarn("jQuery.parseJSON requires a valid JSON string");
return null;
}
return oldParseJSON.apply(this, arguments);
};
jQuery.uaMatch=function(ua){
ua=ua.toLowerCase();
var match=/(chrome)[ \/]([\w.]+)/.exec(ua) ||
/(webkit)[ \/]([\w.]+)/.exec(ua) ||
/(opera)(?:.*version|)[ \/]([\w.]+)/.exec(ua) ||
/(msie) ([\w.]+)/.exec(ua) ||
ua.indexOf("compatible") < 0&&/(mozilla)(?:.*? rv:([\w.]+)|)/.exec(ua) ||
[];
return {
browser: match[ 1 ]||"",
version: match[ 2 ]||"0"
};};
if(!jQuery.browser){
matched=jQuery.uaMatch(navigator.userAgent);
browser={};
if(matched.browser){
browser[ matched.browser ]=true;
browser.version=matched.version;
}
if(browser.chrome){
browser.webkit=true;
}else if(browser.webkit){
browser.safari=true;
}
jQuery.browser=browser;
}
migrateWarnProp(jQuery, "browser", jQuery.browser, "jQuery.browser is deprecated");
jQuery.boxModel=jQuery.support.boxModel=(document.compatMode==="CSS1Compat");
migrateWarnProp(jQuery, "boxModel", jQuery.boxModel, "jQuery.boxModel is deprecated");
migrateWarnProp(jQuery.support, "boxModel", jQuery.support.boxModel, "jQuery.support.boxModel is deprecated");
jQuery.sub=function(){
function jQuerySub(selector, context){
return new jQuerySub.fn.init(selector, context);
}
jQuery.extend(true, jQuerySub, this);
jQuerySub.superclass=this;
jQuerySub.fn=jQuerySub.prototype=this();
jQuerySub.fn.constructor=jQuerySub;
jQuerySub.sub=this.sub;
jQuerySub.fn.init=function init(selector, context){
var instance=jQuery.fn.init.call(this, selector, context, rootjQuerySub);
return instance instanceof jQuerySub ?
instance :
jQuerySub(instance);
};
jQuerySub.fn.init.prototype=jQuerySub.fn;
var rootjQuerySub=jQuerySub(document);
migrateWarn("jQuery.sub() is deprecated");
return jQuerySub;
};
jQuery.fn.size=function(){
migrateWarn("jQuery.fn.size() is deprecated; use the .length property");
return this.length;
};
var internalSwapCall=false;
if(jQuery.swap){
jQuery.each([ "height", "width", "reliableMarginRight" ], function(_, name){
var oldHook=jQuery.cssHooks[ name ]&&jQuery.cssHooks[ name ].get;
if(oldHook){
jQuery.cssHooks[ name ].get=function(){
var ret;
internalSwapCall=true;
ret=oldHook.apply(this, arguments);
internalSwapCall=false;
return ret;
};}});
}
jQuery.swap=function(elem, options, callback, args){
var ret, name,
old={};
if(!internalSwapCall){
migrateWarn("jQuery.swap() is undocumented and deprecated");
}
for(name in options){
old[ name ]=elem.style[ name ];
elem.style[ name ]=options[ name ];
}
ret=callback.apply(elem, args||[]);
for(name in options){
elem.style[ name ]=old[ name ];
}
return ret;
};
jQuery.ajaxSetup({
converters: {
"text json": jQuery.parseJSON
}});
var oldFnData=jQuery.fn.data;
jQuery.fn.data=function(name){
var ret, evt,
elem=this[0];
if(elem&&name==="events"&&arguments.length===1){
ret=jQuery.data(elem, name);
evt=jQuery._data(elem, name);
if(( ret===undefined||ret===evt)&&evt!==undefined){
migrateWarn("Use of jQuery.fn.data('events') is deprecated");
return evt;
}}
return oldFnData.apply(this, arguments);
};
var rscriptType=/\/(java|ecma)script/i;
if(!jQuery.clean){
jQuery.clean=function(elems, context, fragment, scripts){
context=context||document;
context = !context.nodeType&&context[0]||context;
context=context.ownerDocument||context;
migrateWarn("jQuery.clean() is deprecated");
var i, elem, handleScript, jsTags,
ret=[];
jQuery.merge(ret, jQuery.buildFragment(elems, context).childNodes);
if(fragment){
handleScript=function(elem){
if(!elem.type||rscriptType.test(elem.type)){
return scripts ?
scripts.push(elem.parentNode ? elem.parentNode.removeChild(elem):elem) :
fragment.appendChild(elem);
}};
for(i=0; (elem=ret[i])!=null; i++){
if(!(jQuery.nodeName(elem, "script")&&handleScript(elem))){
fragment.appendChild(elem);
if(typeof elem.getElementsByTagName!=="undefined"){
jsTags=jQuery.grep(jQuery.merge([], elem.getElementsByTagName("script")), handleScript);
ret.splice.apply(ret, [i + 1, 0].concat(jsTags));
i +=jsTags.length;
}}
}}
return ret;
};}
var eventAdd=jQuery.event.add,
eventRemove=jQuery.event.remove,
eventTrigger=jQuery.event.trigger,
oldToggle=jQuery.fn.toggle,
oldLive=jQuery.fn.live,
oldDie=jQuery.fn.die,
oldLoad=jQuery.fn.load,
ajaxEvents="ajaxStart|ajaxStop|ajaxSend|ajaxComplete|ajaxError|ajaxSuccess",
rajaxEvent=new RegExp("\\b(?:" + ajaxEvents + ")\\b"),
rhoverHack=/(?:^|\s)hover(\.\S+|)\b/,
hoverHack=function(events){
if(typeof(events)!=="string"||jQuery.event.special.hover){
return events;
}
if(rhoverHack.test(events)){
migrateWarn("'hover' pseudo-event is deprecated, use 'mouseenter mouseleave'");
}
return events&&events.replace(rhoverHack, "mouseenter$1 mouseleave$1");
};
if(jQuery.event.props&&jQuery.event.props[ 0 ]!=="attrChange"){
jQuery.event.props.unshift("attrChange", "attrName", "relatedNode", "srcElement");
}
if(jQuery.event.dispatch){
migrateWarnProp(jQuery.event, "handle", jQuery.event.dispatch, "jQuery.event.handle is undocumented and deprecated");
}
jQuery.event.add=function(elem, types, handler, data, selector){
if(elem!==document&&rajaxEvent.test(types)){
migrateWarn("AJAX events should be attached to document: " + types);
}
eventAdd.call(this, elem, hoverHack(types||""), handler, data, selector);
};
jQuery.event.remove=function(elem, types, handler, selector, mappedTypes){
eventRemove.call(this, elem, hoverHack(types)||"", handler, selector, mappedTypes);
};
jQuery.each([ "load", "unload", "error" ], function(_, name){
jQuery.fn[ name ]=function(){
var args=Array.prototype.slice.call(arguments, 0);
if(name==="load"&&typeof args[ 0 ]==="string"){
return oldLoad.apply(this, args);
}
migrateWarn("jQuery.fn." + name + "() is deprecated");
args.splice(0, 0, name);
if(arguments.length){
return this.bind.apply(this, args);
}
this.triggerHandler.apply(this, args);
return this;
};});
jQuery.fn.toggle=function(fn, fn2){
if(!jQuery.isFunction(fn)||!jQuery.isFunction(fn2)){
return oldToggle.apply(this, arguments);
}
migrateWarn("jQuery.fn.toggle(handler, handler...) is deprecated");
var args=arguments,
guid=fn.guid||jQuery.guid++,
i=0,
toggler=function(event){
var lastToggle=(jQuery._data(this, "lastToggle" + fn.guid)||0) % i;
jQuery._data(this, "lastToggle" + fn.guid, lastToggle + 1);
event.preventDefault();
return args[ lastToggle ].apply(this, arguments)||false;
};
toggler.guid=guid;
while(i < args.length){
args[ i++ ].guid=guid;
}
return this.click(toggler);
};
jQuery.fn.live=function(types, data, fn){
migrateWarn("jQuery.fn.live() is deprecated");
if(oldLive){
return oldLive.apply(this, arguments);
}
jQuery(this.context).on(types, this.selector, data, fn);
return this;
};
jQuery.fn.die=function(types, fn){
migrateWarn("jQuery.fn.die() is deprecated");
if(oldDie){
return oldDie.apply(this, arguments);
}
jQuery(this.context).off(types, this.selector||"**", fn);
return this;
};
jQuery.event.trigger=function(event, data, elem, onlyHandlers){
if(!elem&&!rajaxEvent.test(event)){
migrateWarn("Global events are undocumented and deprecated");
}
return eventTrigger.call(this,  event, data, elem||document, onlyHandlers);
};
jQuery.each(ajaxEvents.split("|"),
function(_, name){
jQuery.event.special[ name ]={
setup: function(){
var elem=this;
if(elem!==document){
jQuery.event.add(document, name + "." + jQuery.guid, function(){
jQuery.event.trigger(name, Array.prototype.slice.call(arguments, 1), elem, true);
});
jQuery._data(this, name, jQuery.guid++);
}
return false;
},
teardown: function(){
if(this!==document){
jQuery.event.remove(document, name + "." + jQuery._data(this, name));
}
return false;
}};}
);
jQuery.event.special.ready={
setup: function(){
if(this===document){
migrateWarn("'ready' event is deprecated");
}}
};
var oldSelf=jQuery.fn.andSelf||jQuery.fn.addBack,
oldFnFind=jQuery.fn.find;
jQuery.fn.andSelf=function(){
migrateWarn("jQuery.fn.andSelf() replaced by jQuery.fn.addBack()");
return oldSelf.apply(this, arguments);
};
jQuery.fn.find=function(selector){
var ret=oldFnFind.apply(this, arguments);
ret.context=this.context;
ret.selector=this.selector ? this.selector + " " + selector:selector;
return ret;
};
if(jQuery.Callbacks){
var oldDeferred=jQuery.Deferred,
tuples=[
[ "resolve", "done", jQuery.Callbacks("once memory"),
jQuery.Callbacks("once memory"), "resolved" ],
[ "reject", "fail", jQuery.Callbacks("once memory"),
jQuery.Callbacks("once memory"), "rejected" ],
[ "notify", "progress", jQuery.Callbacks("memory"),
jQuery.Callbacks("memory") ]
];
jQuery.Deferred=function(func){
var deferred=oldDeferred(),
promise=deferred.promise();
deferred.pipe=promise.pipe=function(){
var fns=arguments;
migrateWarn("deferred.pipe() is deprecated");
return jQuery.Deferred(function(newDefer){
jQuery.each(tuples, function(i, tuple){
var fn=jQuery.isFunction(fns[ i ])&&fns[ i ];
deferred[ tuple[1] ](function(){
var returned=fn&&fn.apply(this, arguments);
if(returned&&jQuery.isFunction(returned.promise)){
returned.promise()
.done(newDefer.resolve)
.fail(newDefer.reject)
.progress(newDefer.notify);
}else{
newDefer[ tuple[ 0 ] + "With" ](
this===promise ? newDefer.promise():this,
fn ? [ returned ]:arguments
);
}});
});
fns=null;
}).promise();
};
deferred.isResolved=function(){
migrateWarn("deferred.isResolved is deprecated");
return deferred.state()==="resolved";
};
deferred.isRejected=function(){
migrateWarn("deferred.isRejected is deprecated");
return deferred.state()==="rejected";
};
if(func){
func.call(deferred, deferred);
}
return deferred;
};}})(jQuery, window);
(function(a){a.easytabs=function(j,e){var f=this,q=a(j),i={animate:true,panelActiveClass:"active",tabActiveClass:"active",defaultTab:"li:first-child",animationSpeed:"normal",tabs:"> ul > li",updateHash:true,cycle:false,collapsible:false,collapsedClass:"collapsed",collapsedByDefault:true,uiTabs:false,transitionIn:"fadeIn",transitionOut:"fadeOut",transitionInEasing:"swing",transitionOutEasing:"swing",transitionCollapse:"slideUp",transitionUncollapse:"slideDown",transitionCollapseEasing:"swing",transitionUncollapseEasing:"swing",containerClass:"",tabsClass:"",tabClass:"",panelClass:"",cache:true,event:"click",panelContext:q},h,l,v,m,d,t={fast:200,normal:400,slow:600},r;f.init=function(){f.settings=r=a.extend({},i,e);r.bind_str=r.event+".easytabs";if(r.uiTabs){r.tabActiveClass="ui-tabs-selected";r.containerClass="ui-tabs ui-widget ui-widget-content ui-corner-all";r.tabsClass="ui-tabs-nav ui-helper-reset ui-helper-clearfix ui-widget-header ui-corner-all";r.tabClass="ui-state-default ui-corner-top";r.panelClass="ui-tabs-panel ui-widget-content ui-corner-bottom"}if(r.collapsible&&e.defaultTab!==undefined&&e.collpasedByDefault===undefined){r.collapsedByDefault=false}if(typeof(r.animationSpeed)==="string"){r.animationSpeed=t[r.animationSpeed]}a("a.anchor").remove().prependTo("body");q.data("easytabs",{});f.setTransitions();f.getTabs();b();g();w();n();c();q.attr("data-easytabs",true)};f.setTransitions=function(){v=(r.animate)?{show:r.transitionIn,hide:r.transitionOut,speed:r.animationSpeed,collapse:r.transitionCollapse,uncollapse:r.transitionUncollapse,halfSpeed:r.animationSpeed/2}:{show:"show",hide:"hide",speed:0,collapse:"hide",uncollapse:"show",halfSpeed:0}};f.getTabs=function(){var x;f.tabs=q.find(r.tabs),f.panels=a(),f.tabs.each(function(){var A=a(this),z=A.children("a"),y=A.children("a").data("target");A.data("easytabs",{});if(y!==undefined&&y!==null){A.data("easytabs").ajax=z.attr("href")}else{y=z.attr("href")}y=y.match(/#([^\?]+)/)[1];x=r.panelContext.find("#"+y);if(x.length){x.data("easytabs",{position:x.css("position"),visibility:x.css("visibility")});x.not(r.panelActiveClass).hide();f.panels=f.panels.add(x);A.data("easytabs").panel=x}else{f.tabs=f.tabs.not(A);if("console" in window){console.warn("Warning: tab without matching panel for selector '#"+y+"' removed from set")}}})};f.selectTab=function(x,C){var y=window.location,B=y.hash.match(/^[^\?]*/)[0],z=x.parent().data("easytabs").panel,A=x.parent().data("easytabs").ajax;if(r.collapsible&&!d&&(x.hasClass(r.tabActiveClass)||x.hasClass(r.collapsedClass))){f.toggleTabCollapse(x,z,A,C)}else{if(!x.hasClass(r.tabActiveClass)||!z.hasClass(r.panelActiveClass)){o(x,z,A,C)}else{if(!r.cache){o(x,z,A,C)}}}};f.toggleTabCollapse=function(x,y,z,A){f.panels.stop(true,true);if(u(q,"easytabs:before",[x,y,r])){f.tabs.filter("."+r.tabActiveClass).removeClass(r.tabActiveClass).children().removeClass(r.tabActiveClass);if(x.hasClass(r.collapsedClass)){if(z&&(!r.cache||!x.parent().data("easytabs").cached)){q.trigger("easytabs:ajax:beforeSend",[x,y]);y.load(z,function(C,B,D){x.parent().data("easytabs").cached=true;q.trigger("easytabs:ajax:complete",[x,y,C,B,D])})}x.parent().removeClass(r.collapsedClass).addClass(r.tabActiveClass).children().removeClass(r.collapsedClass).addClass(r.tabActiveClass);y.addClass(r.panelActiveClass)[v.uncollapse](v.speed,r.transitionUncollapseEasing,function(){q.trigger("easytabs:midTransition",[x,y,r]);if(typeof A=="function"){A()}})}else{x.addClass(r.collapsedClass).parent().addClass(r.collapsedClass);y.removeClass(r.panelActiveClass)[v.collapse](v.speed,r.transitionCollapseEasing,function(){q.trigger("easytabs:midTransition",[x,y,r]);if(typeof A=="function"){A()}})}}};f.matchTab=function(x){return f.tabs.find("[href='"+x+"'],[data-target='"+x+"']").first()};f.matchInPanel=function(x){return(x&&f.validId(x)?f.panels.filter(":has("+x+")").first():[])};f.validId=function(x){return x.substr(1).match(/^[A-Za-z]+[A-Za-z0-9\-_:\.].$/)};f.selectTabFromHashChange=function(){var y=window.location.hash.match(/^[^\?]*/)[0],x=f.matchTab(y),z;if(r.updateHash){if(x.length){d=true;f.selectTab(x)}else{z=f.matchInPanel(y);if(z.length){y="#"+z.attr("id");x=f.matchTab(y);d=true;f.selectTab(x)}else{if(!h.hasClass(r.tabActiveClass)&&!r.cycle){if(y===""||f.matchTab(m).length||q.closest(y).length){d=true;f.selectTab(l)}}}}}};f.cycleTabs=function(x){if(r.cycle){x=x%f.tabs.length;$tab=a(f.tabs[x]).children("a").first();d=true;f.selectTab($tab,function(){setTimeout(function(){f.cycleTabs(x+1)},r.cycle)})}};f.publicMethods={select:function(x){var y;if((y=f.tabs.filter(x)).length===0){if((y=f.tabs.find("a[href='"+x+"']")).length===0){if((y=f.tabs.find("a"+x)).length===0){if((y=f.tabs.find("[data-target='"+x+"']")).length===0){if((y=f.tabs.find("a[href$='"+x+"']")).length===0){a.error("Tab '"+x+"' does not exist in tab set")}}}}}else{y=y.children("a").first()}f.selectTab(y)}};var u=function(A,x,z){var y=a.Event(x);A.trigger(y,z);return y.result!==false};var b=function(){q.addClass(r.containerClass);f.tabs.parent().addClass(r.tabsClass);f.tabs.addClass(r.tabClass);f.panels.addClass(r.panelClass)};var g=function(){var y=window.location.hash.match(/^[^\?]*/)[0],x=f.matchTab(y).parent(),z;if(x.length===1){h=x;r.cycle=false}else{z=f.matchInPanel(y);if(z.length){y="#"+z.attr("id");h=f.matchTab(y).parent()}else{h=f.tabs.parent().find(r.defaultTab);if(h.length===0){a.error("The specified default tab ('"+r.defaultTab+"') could not be found in the tab set ('"+r.tabs+"') out of "+f.tabs.length+" tabs.")}}}l=h.children("a").first();p(x)};var p=function(z){var y,x;if(r.collapsible&&z.length===0&&r.collapsedByDefault){h.addClass(r.collapsedClass).children().addClass(r.collapsedClass)}else{y=a(h.data("easytabs").panel);x=h.data("easytabs").ajax;if(x&&(!r.cache||!h.data("easytabs").cached)){q.trigger("easytabs:ajax:beforeSend",[l,y]);y.load(x,function(B,A,C){h.data("easytabs").cached=true;q.trigger("easytabs:ajax:complete",[l,y,B,A,C])})}h.data("easytabs").panel.show().addClass(r.panelActiveClass);h.addClass(r.tabActiveClass).children().addClass(r.tabActiveClass)}q.trigger("easytabs:initialised",[l,y])};var w=function(){f.tabs.children("a").bind(r.bind_str,function(x){r.cycle=false;d=false;f.selectTab(a(this));x.preventDefault?x.preventDefault():x.returnValue=false})};var o=function(z,D,E,H){f.panels.stop(true,true);if(u(q,"easytabs:before",[z,D,r])){var A=f.panels.filter(":visible"),y=D.parent(),F,x,C,G,B=window.location.hash.match(/^[^\?]*/)[0];if(r.animate){F=s(D);x=A.length?k(A):0;C=F-x}m=B;G=function(){q.trigger("easytabs:midTransition",[z,D,r]);if(r.animate&&r.transitionIn=="fadeIn"){if(C<0){y.animate({height:y.height()+C},v.halfSpeed).css({"min-height":""})}}if(r.updateHash&&!d){window.location.hash="#"+D.attr("id")}else{d=false}D[v.show](v.speed,r.transitionInEasing,function(){y.css({height:"","min-height":""});q.trigger("easytabs:after",[z,D,r]);if(typeof H=="function"){H()}})};if(E&&(!r.cache||!z.parent().data("easytabs").cached)){q.trigger("easytabs:ajax:beforeSend",[z,D]);D.load(E,function(J,I,K){z.parent().data("easytabs").cached=true;q.trigger("easytabs:ajax:complete",[z,D,J,I,K])})}if(r.animate&&r.transitionOut=="fadeOut"){if(C>0){y.animate({height:(y.height()+C)},v.halfSpeed)}else{y.css({"min-height":y.height()})}}f.tabs.filter("."+r.tabActiveClass).removeClass(r.tabActiveClass).children().removeClass(r.tabActiveClass);f.tabs.filter("."+r.collapsedClass).removeClass(r.collapsedClass).children().removeClass(r.collapsedClass);z.parent().addClass(r.tabActiveClass).children().addClass(r.tabActiveClass);f.panels.filter("."+r.panelActiveClass).removeClass(r.panelActiveClass);D.addClass(r.panelActiveClass);if(A.length){A[v.hide](v.speed,r.transitionOutEasing,G)}else{D[v.uncollapse](v.speed,r.transitionUncollapseEasing,G)}}};var s=function(z){if(z.data("easytabs")&&z.data("easytabs").lastHeight){return z.data("easytabs").lastHeight}var B=z.css("display"),y,x;try{y=a("<div></div>",{position:"absolute",visibility:"hidden",overflow:"hidden"})}catch(A){y=a("<div></div>",{visibility:"hidden",overflow:"hidden"})}x=z.wrap(y).css({position:"relative",visibility:"hidden",display:"block"}).outerHeight();z.unwrap();z.css({position:z.data("easytabs").position,visibility:z.data("easytabs").visibility,display:B});z.data("easytabs").lastHeight=x;return x};var k=function(y){var x=y.outerHeight();if(y.data("easytabs")){y.data("easytabs").lastHeight=x}else{y.data("easytabs",{lastHeight:x})}return x};var n=function(){if(typeof a(window).hashchange==="function"){a(window).hashchange(function(){f.selectTabFromHashChange()})}else{if(a.address&&typeof a.address.change==="function"){a.address.change(function(){f.selectTabFromHashChange()})}}};var c=function(){var x;if(r.cycle){x=f.tabs.index(h);setTimeout(function(){f.cycleTabs(x+1)},r.cycle)}};f.init()};a.fn.easytabs=function(c){var b=arguments;return this.each(function(){var e=a(this),d=e.data("easytabs");if(undefined===d){d=new a.easytabs(this,c);e.data("easytabs",d)}if(d.publicMethods[c]){return d.publicMethods[c](Array.prototype.slice.call(b,1))}})}})(jQuery);
(function($,e,b){var c="hashchange",h=document,f,g=$.event.special,i=h.documentMode,d="on"+c in e&&(i===b||i>7);function a(j){j=j||location.href;return"#"+j.replace(/^[^#]*#?(.*)$/,"$1")}$.fn[c]=function(j){return j?this.bind(c,j):this.trigger(c)};$.fn[c].delay=50;g[c]=$.extend(g[c],{setup:function(){if(d){return false}$(f.start)},teardown:function(){if(d){return false}$(f.stop)}});f=(function(){var j={},p,m=a(),k=function(q){return q},l=k,o=k;j.start=function(){p||n()};j.stop=function(){p&&clearTimeout(p);p=b};function n(){var r=a(),q=o(m);if(r!==m){l(m=r,q);$(e).trigger(c)}else{if(q!==m){location.href=location.href.replace(/#.*/,"")+q}}p=setTimeout(n,$.fn[c].delay)}$.browser.msie&&!d&&(function(){var q,r;j.start=function(){if(!q){r=$.fn[c].src;r=r&&r+a();q=$('<iframe tabindex="-1" title="empty"/>').hide().one("load",function(){r||l(a());n()}).attr("src",r||"javascript:0").insertAfter("body")[0].contentWindow;h.onpropertychange=function(){try{if(event.propertyName==="title"){q.document.title=h.title}}catch(s){}}}};j.stop=k;o=function(){return a(q.location.href)};l=function(v,s){var u=q.document,t=$.fn[c].domain;if(v!==s){u.title=h.title;u.open();t&&u.write('<script>document.domain="'+t+'"<\/script>');u.close();q.location.hash=v}}})();return j})()})(jQuery,this);
!function(a, b, c){
!function(a){
"use strict";
"function"==typeof define&&define.amd ? define(["jquery"], a):jQuery&&!jQuery.fn.qtip&&a(jQuery)
}(function(d){
"use strict";
function e(a, b, c, e){
this.id=c,
this.target=a,
this.tooltip=D,
this.elements={
target: a
},
this._id=P + "-" + c,
this.timers={
img: {}},
this.options=b,
this.plugins={},
this.cache={
event: {},
target: d(),
disabled: C,
attr: e,
onTooltip: C,
lastClass: ""
},
this.rendered=this.destroyed=this.disabled=this.waiting=this.hiddenDuringWait=this.positioning=this.triggering=C
}
function f(a){
return a===D||"object"!==d.type(a)
}
function g(a){
return !(d.isFunction(a)||a&&a.attr||a.length||"object"===d.type(a)&&(a.jquery||a.then))
}
function h(a){
var b, c, e, h;
return f(a) ? C:(f(a.metadata)&&(a.metadata={
type: a.metadata
}),
"content"in a&&(b=a.content,
f(b)||b.jquery||b.done ? (c=g(b) ? C:b,
b=a.content={
text: c
}):c=b.text,
"ajax"in b&&(e=b.ajax,
h=e&&e.once!==C,
delete b.ajax,
b.text=function(a, b){
var f=c||d(this).attr(b.options.content.attr)||"Loading..."
, g=d.ajax(d.extend({}, e, {
context: b
})).then(e.success, D, e.error).then(function(a){
return a&&h && b.set("content.text", a),
a
}, function(a, c, d){
b.destroyed||0===a.status||b.set("content.text", c + ": " + d)
});
return h ? f:(b.set("content.text", f),
g)
}
),
"title"in b&&(d.isPlainObject(b.title)&&(b.button=b.title.button,
b.title=b.title.text),
g(b.title||C)&&(b.title=C))),
"position"in a&&f(a.position)&&(a.position={
my: a.position,
at: a.position
}),
"show"in a&&f(a.show)&&(a.show=a.show.jquery ? {
target: a.show
}:a.show===B ? {
ready: B
}:{
event: a.show
}),
"hide"in a&&f(a.hide)&&(a.hide=a.hide.jquery ? {
target: a.hide
}:{
event: a.hide
}),
"style"in a&&f(a.style)&&(a.style={
classes: a.style
}),
d.each(O, function(){
this.sanitize&&this.sanitize(a)
}),
a)
}
function i(a, b){
for (var c, d=0, e=a, f=b.split("."); e=e[f[d++]];)
d < f.length&&(c=e);
return [c||a, f.pop()]
}
function j(a, b){
var c, d, e;
for (c in this.checks)
if(this.checks.hasOwnProperty(c))
for (d in this.checks[c])
this.checks[c].hasOwnProperty(d)&&(e=new RegExp(d,"i").exec(a))&&(b.push(e),
("builtin"===c||this.plugins[c])&&this.checks[c][d].apply(this.plugins[c]||this, b))
}
function k(a){
return S.concat("").join(a ? "-" + a + " ":" ")
}
function l(a, b){
return b > 0 ? setTimeout(d.proxy(a, this), b):void a.call(this)
}
function m(a){
this.tooltip.hasClass(Z)||(clearTimeout(this.timers.show),
clearTimeout(this.timers.hide),
this.timers.show=l.call(this, function(){
this.toggle(B, a)
}, this.options.show.delay))
}
function n(a){
if(!this.tooltip.hasClass(Z)&&!this.destroyed){
var b=d(a.relatedTarget)
, c=b.closest(T)[0]===this.tooltip[0]
, e=b[0]===this.options.show.target[0];
if(clearTimeout(this.timers.show),
clearTimeout(this.timers.hide),
this!==b[0]&&"mouse"===this.options.position.target&&c||this.options.hide.fixed&&/mouse(out|leave|move)/.test(a.type)&&(c||e))
try {
a.preventDefault(),
a.stopImmediatePropagation()
} catch (f){}
else
this.timers.hide=l.call(this, function(){
this.toggle(C, a)
}, this.options.hide.delay, this)
}}
function o(a){
!this.tooltip.hasClass(Z)&&this.options.hide.inactive&&(clearTimeout(this.timers.inactive),
this.timers.inactive=l.call(this, function(){
this.hide(a)
}, this.options.hide.inactive))
}
function p(a){
this.rendered&&this.tooltip[0].offsetWidth > 0&&this.reposition(a)
}
function q(a, c, e){
d(b.body).delegate(a, (c.split ? c:c.join("." + P + " ")) + "." + P, function(){
var a=w.api[d.attr(this, R)];
a&&!a.disabled&&e.apply(a, arguments)
})
}
function r(a, c, f){
var g, i, j, k, l, m=d(b.body), n=a[0]===b ? m:a, o=a.metadata ? a.metadata(f.metadata):D, p="html5"===f.metadata.type&&o ? o[f.metadata.name]:D, q=a.data(f.metadata.name||"qtipopts");
try {
q="string"==typeof q ? d.parseJSON(q):q
} catch (r){}
if(k=d.extend(B, {}, w.defaults, f, "object"==typeof q ? h(q):D, h(p||o)),
i=k.position,
k.id=c,
"boolean"==typeof k.content.text){
if(j=a.attr(k.content.attr),
k.content.attr===C||!j)
return C;
k.content.text=j
}
if(i.container.length||(i.container=m),
i.target===C&&(i.target=n),
k.show.target===C&&(k.show.target=n),
k.show.solo===B&&(k.show.solo=i.container.closest("body")),
k.hide.target===C&&(k.hide.target=n),
k.position.viewport===B&&(k.position.viewport=i.container),
i.container=i.container.eq(0),
i.at=new y(i.at,B),
i.my=new y(i.my),
a.data(P))
if(k.overwrite)
a.qtip("destroy", !0);
else if(k.overwrite===C)
return C;
return a.attr(Q, c),
k.suppress&&(l=a.attr("title"))&&a.removeAttr("title").attr(_, l).attr("title", ""),
g=new e(a,k,c,!!j),
a.data(P, g),
g
}
function s(a){
return a.charAt(0).toUpperCase() + a.slice(1)
}
function t(a, b){
var d, e, f=b.charAt(0).toUpperCase() + b.slice(1), g=(b + " " + sa.join(f + " ") + f).split(" "), h=0;
if(ra[b])
return a.css(ra[b]);
for (; d=g[h++];)
if((e=a.css(d))!==c)
return ra[b]=d,
e
}
function u(a, b){
return Math.ceil(parseFloat(t(a, b)))
}
function v(a, b){
this._ns="tip",
this.options=b,
this.offset=b.offset,
this.size=[b.width, b.height],
this.qtip=a,
this.init(a)
}
var w, x, y, z, A, B = !0, C = !1, D=null, E="x", F="y", G="width", H="height", I="top", J="left", K="bottom", L="right", M="center", N="shift", O={}, P="qtip", Q="data-hasqtip", R="data-qtip-id", S=["ui-widget", "ui-tooltip"], T="." + P, U="click dblclick mousedown mouseup mousemove mouseleave mouseenter".split(" "), V=P + "-fixed", W=P + "-default", X=P + "-focus", Y=P + "-hover", Z=P + "-disabled", $="_replacedByqTip", _="oldtitle", aa={
ie: function(){
var a, c;
for (a=4,
c=b.createElement("div"); (c.innerHTML="<!--[if gt IE " + a + "]><i></i><![endif]-->")&&c.getElementsByTagName("i")[0]; a +=1)
;
return a > 4 ? a:NaN
}(),
iOS: parseFloat(("" + (/CPU.*OS ([0-9_]{1,5})|(CPU like).*AppleWebKit.*Mobile/i.exec(navigator.userAgent)||[0, ""])[1]).replace("undefined", "3_2").replace("_", ".").replace("_", ""))||C
};
x=e.prototype,
x._when=function(a){
return d.when.apply(d, a)
}
,
x.render=function(a){
if(this.rendered||this.destroyed)
return this;
var b=this
, c=this.options
, e=this.cache
, f=this.elements
, g=c.content.text
, h=c.content.title
, i=c.content.button
, j=c.position
, k=[];
return d.attr(this.target[0], "aria-describedby", this._id),
e.posClass=this._createPosClass((this.position={
my: j.my,
at: j.at
}).my),
this.tooltip=f.tooltip=d("<div/>", {
id: this._id,
"class": [P, W, c.style.classes, e.posClass].join(" "),
width: c.style.width||"",
height: c.style.height||"",
tracking: "mouse"===j.target&&j.adjust.mouse,
role: "alert",
"aria-live": "polite",
"aria-atomic": C,
"aria-describedby": this._id + "-content",
"aria-hidden": B
}).toggleClass(Z, this.disabled).attr(R, this.id).data(P, this).appendTo(j.container).append(f.content=d("<div />", {
"class": P + "-content",
id: this._id + "-content",
"aria-atomic": B
})),
this.rendered=-1,
this.positioning=B,
h&&(this._createTitle(),
d.isFunction(h)||k.push(this._updateTitle(h, C))),
i&&this._createButton(),
d.isFunction(g)||k.push(this._updateContent(g, C)),
this.rendered=B,
this._setWidget(),
d.each(O, function(a){
var c;
"render"===this.initialize&&(c=this(b))&&(b.plugins[a]=c)
}),
this._unassignEvents(),
this._assignEvents(),
this._when(k).then(function(){
b._trigger("render"),
b.positioning=C,
b.hiddenDuringWait||!c.show.ready&&!a||b.toggle(B, e.event, C),
b.hiddenDuringWait=C
}),
w.api[this.id]=this,
this
}
,
x.destroy=function(a){
function b(){
if(!this.destroyed){
this.destroyed=B;
var a, b=this.target, c=b.attr(_);
this.rendered&&this.tooltip.stop(1, 0).find("*").remove().end().remove(),
d.each(this.plugins, function(){
this.destroy&&this.destroy()
});
for (a in this.timers)
this.timers.hasOwnProperty(a)&&clearTimeout(this.timers[a]);
b.removeData(P).removeAttr(R).removeAttr(Q).removeAttr("aria-describedby"),
this.options.suppress&&c && b.attr("title", c).removeAttr(_),
this._unassignEvents(),
this.options=this.elements=this.cache=this.timers=this.plugins=this.mouse=D,
delete w.api[this.id]
}}
return this.destroyed ? this.target:(a===B&&"hide"!==this.triggering||!this.rendered ? b.call(this):(this.tooltip.one("tooltiphidden", d.proxy(b, this)),
!this.triggering&&this.hide()),
this.target)
}
,
z=x.checks={
builtin: {
"^id$": function(a, b, c, e){
var f=c===B ? w.nextid:c
, g=P + "-" + f;
f!==C&&f.length > 0&&!d("#" + g).length ? (this._id=g,
this.rendered&&(this.tooltip[0].id=this._id,
this.elements.content[0].id=this._id + "-content",
this.elements.title[0].id=this._id + "-title")):a[b]=e
},
"^prerender": function(a, b, c){
c&&!this.rendered&&this.render(this.options.show.ready)
},
"^content.text$": function(a, b, c){
this._updateContent(c)
},
"^content.attr$": function(a, b, c, d){
this.options.content.text===this.target.attr(d)&&this._updateContent(this.target.attr(c))
},
"^content.title$": function(a, b, c){
return c ? (c&&!this.elements.title&&this._createTitle(),
void this._updateTitle(c)):this._removeTitle()
},
"^content.button$": function(a, b, c){
this._updateButton(c)
},
"^content.title.(text|button)$": function(a, b, c){
this.set("content." + b, c)
},
"^position.(my|at)$": function(a, b, c){
"string"==typeof c&&(this.position[b]=a[b]=new y(c,"at"===b))
},
"^position.container$": function(a, b, c){
this.rendered&&this.tooltip.appendTo(c)
},
"^show.ready$": function(a, b, c){
c&&(!this.rendered&&this.render(B)||this.toggle(B))
},
"^style.classes$": function(a, b, c, d){
this.rendered&&this.tooltip.removeClass(d).addClass(c)
},
"^style.(width|height)": function(a, b, c){
this.rendered&&this.tooltip.css(b, c)
},
"^style.widget|content.title": function(){
this.rendered&&this._setWidget()
},
"^style.def": function(a, b, c){
this.rendered&&this.tooltip.toggleClass(W, !!c)
},
"^events.(render|show|move|hide|focus|blur)$": function(a, b, c){
this.rendered&&this.tooltip[(d.isFunction(c) ? "":"un") + "bind"]("tooltip" + b, c)
},
"^(show|hide|position).(event|target|fixed|inactive|leave|distance|viewport|adjust)": function(){
if(this.rendered){
var a=this.options.position;
this.tooltip.attr("tracking", "mouse"===a.target&&a.adjust.mouse),
this._unassignEvents(),
this._assignEvents()
}}
}},
x.get=function(a){
if(this.destroyed)
return this;
var b=i(this.options, a.toLowerCase())
, c=b[0][b[1]];
return c.precedance ? c.string():c
}
;
var ba=/^position\.(my|at|adjust|target|container|viewport)|style|content|show\.ready/i
, ca=/^prerender|show\.ready/i;
x.set=function(a, b){
if(this.destroyed)
return this;
var c, e=this.rendered, f=C, g=this.options;
return "string"==typeof a ? (c=a,
a={},
a[c]=b):a=d.extend({}, a),
d.each(a, function(b, c){
if(e&&ca.test(b))
return void delete a[b];
var h, j=i(g, b.toLowerCase());
h=j[0][j[1]],
j[0][j[1]]=c&&c.nodeType ? d(c):c,
f=ba.test(b)||f,
a[b]=[j[0], j[1], c, h]
}),
h(g),
this.positioning=B,
d.each(a, d.proxy(j, this)),
this.positioning=C,
this.rendered&&this.tooltip[0].offsetWidth > 0&&f && this.reposition("mouse"===g.position.target ? D:this.cache.event),
this
}
,
x._update=function(a, b){
var c=this
, e=this.cache;
return this.rendered&&a ? (d.isFunction(a)&&(a=a.call(this.elements.target, e.event, this)||""),
d.isFunction(a.then) ? (e.waiting=B,
a.then(function(a){
return e.waiting=C,
c._update(a, b)
}, D, function(a){
return c._update(a, b)
})):a===C||!a&&""!==a ? C:(a.jquery&&a.length > 0 ? b.empty().append(a.css({
display: "block",
visibility: "visible"
})):b.html(a),
this._waitForContent(b).then(function(a){
c.rendered&&c.tooltip[0].offsetWidth > 0&&c.reposition(e.event, !a.length)
}))):C
}
,
x._waitForContent=function(a){
var b=this.cache;
return b.waiting=B,
(d.fn.imagesLoaded ? a.imagesLoaded():(new d.Deferred).resolve([])).done(function(){
b.waiting=C
}).promise()
}
,
x._updateContent=function(a, b){
this._update(a, this.elements.content, b)
}
,
x._updateTitle=function(a, b){
this._update(a, this.elements.title, b)===C&&this._removeTitle(C)
}
,
x._createTitle=function(){
var a=this.elements
, b=this._id + "-title";
a.titlebar&&this._removeTitle(),
a.titlebar=d("<div />", {
"class": P + "-titlebar " + (this.options.style.widget ? k("header"):"")
}).append(a.title=d("<div />", {
id: b,
"class": P + "-title",
"aria-atomic": B
})).insertBefore(a.content).delegate(".qtip-close", "mousedown keydown mouseup keyup mouseout", function(a){
d(this).toggleClass("ui-state-active ui-state-focus", "down"===a.type.substr(-4))
}).delegate(".qtip-close", "mouseover mouseout", function(a){
d(this).toggleClass("ui-state-hover", "mouseover click"===a.type)
}),
this.options.content.button&&this._createButton()
}
,
x._removeTitle=function(a){
var b=this.elements;
b.title&&(b.titlebar.remove(),
b.titlebar=b.title=b.button=D,
a!==C&&this.reposition())
}
,
x._createPosClass=function(a){
return P + "-pos-" + (a||this.options.position.my).abbrev()
}
,
x.reposition=function(c, e){
if(!this.rendered||this.positioning||this.destroyed)
return this;
this.positioning=B;
var f, g, h, i, j=this.cache, k=this.tooltip, l=this.options.position, m=l.target, n=l.my, o=l.at, p=l.viewport, q=l.container, r=l.adjust, s=r.method.split(" "), t=k.outerWidth(C), u=k.outerHeight(C), v=0, w=0, x=k.css("position"), y={
left: 0,
top: 0
}, z=k[0].offsetWidth > 0, A=c&&"scroll"===c.type, D=d(a), E=q[0].ownerDocument, F=this.mouse;
if(d.isArray(m)&&2===m.length)
o={
x: J,
y: I
},
y={
left: m[0],
top: m[1]
};
else if("mouse"===m)
o={
x: J,
y: I
},
(!r.mouse||this.options.hide.distance)&&j.origin&&j.origin.pageX ? c=j.origin:!c||c&&("resize"===c.type||"scroll"===c.type) ? c=j.event:F&&F.pageX&&(c=F),
"static"!==x&&(y=q.offset()),
E.body.offsetWidth!==(a.innerWidth||E.documentElement.clientWidth)&&(g=d(b.body).offset()),
y={
left: c.pageX - y.left + (g&&g.left||0),
top: c.pageY - y.top + (g&&g.top||0)
},
r.mouse&&A && F&&(y.left -=(F.scrollX||0) - D.scrollLeft(),
y.top -=(F.scrollY||0) - D.scrollTop());
else {
if("event"===m ? c&&c.target&&"scroll"!==c.type&&"resize"!==c.type ? j.target=d(c.target):c.target||(j.target=this.elements.target):"event"!==m&&(j.target=d(m.jquery ? m:this.elements.target)),
m=j.target,
m=d(m).eq(0),
0===m.length)
return this;
m[0]===b||m[0]===a ? (v=aa.iOS ? a.innerWidth:m.width(),
w=aa.iOS ? a.innerHeight:m.height(),
m[0]===a&&(y={
top: (p||m).scrollTop(),
left: (p||m).scrollLeft()
})):O.imagemap&&m.is("area") ? f=O.imagemap(this, m, o, O.viewport ? s:C):O.svg&&m && m[0].ownerSVGElement ? f=O.svg(this, m, o, O.viewport ? s:C):(v=m.outerWidth(C),
w=m.outerHeight(C),
y=m.offset()),
f&&(v=f.width,
w=f.height,
g=f.offset,
y=f.position),
y=this.reposition.offset(m, y, q),
(aa.iOS > 3.1&&aa.iOS < 4.1||aa.iOS >=4.3&&aa.iOS < 4.33||!aa.iOS&&"fixed"===x)&&(y.left -=D.scrollLeft(),
y.top -=D.scrollTop()),
(!f||f&&f.adjustable!==C)&&(y.left +=o.x===L ? v:o.x===M ? v / 2:0,
y.top +=o.y===K ? w:o.y===M ? w / 2:0)
}
return y.left +=r.x + (n.x===L ? -t:n.x===M ? -t / 2:0),
y.top +=r.y + (n.y===K ? -u:n.y===M ? -u / 2:0),
O.viewport ? (h=y.adjusted=O.viewport(this, y, l, v, w, t, u),
g&&h.left&&(y.left +=g.left),
g&&h.top&&(y.top +=g.top),
h.my&&(this.position.my=h.my)):y.adjusted={
left: 0,
top: 0
},
j.posClass!==(i=this._createPosClass(this.position.my))&&(j.posClass=i,
k.removeClass(j.posClass).addClass(i)),
this._trigger("move", [y, p.elem||p], c) ? (delete y.adjusted,
e===C||!z||isNaN(y.left)||isNaN(y.top)||"mouse"===m||!d.isFunction(l.effect) ? k.css(y):d.isFunction(l.effect)&&(l.effect.call(k, this, d.extend({}, y)),
k.queue(function(a){
d(this).css({
opacity: "",
height: ""
}),
aa.ie&&this.style.removeAttribute("filter"),
a()
})),
this.positioning=C,
this):this
}
,
x.reposition.offset=function(a, c, e){
function f(a, b){
c.left +=b * a.scrollLeft(),
c.top +=b * a.scrollTop()
}
if(!e[0])
return c;
var g, h, i, j, k=d(a[0].ownerDocument), l = !!aa.ie&&"CSS1Compat"!==b.compatMode, m=e[0];
do
"static"!==(h=d.css(m, "position"))&&("fixed"===h ? (i=m.getBoundingClientRect(),
f(k, -1)):(i=d(m).position(),
i.left +=parseFloat(d.css(m, "borderLeftWidth"))||0,
i.top +=parseFloat(d.css(m, "borderTopWidth"))||0),
c.left -=i.left + (parseFloat(d.css(m, "marginLeft"))||0),
c.top -=i.top + (parseFloat(d.css(m, "marginTop"))||0),
g||"hidden"===(j=d.css(m, "overflow"))||"visible"===j||(g=d(m)));
while (m=m.offsetParent);return g&&(g[0]!==k[0]||l)&&f(g, 1),
c
}
;
var da=(y=x.reposition.Corner=function(a, b){
a=("" + a).replace(/([A-Z])/, " $1").replace(/middle/gi, M).toLowerCase(),
this.x=(a.match(/left|right/i)||a.match(/center/)||["inherit"])[0].toLowerCase(),
this.y=(a.match(/top|bottom|center/i)||["inherit"])[0].toLowerCase(),
this.forceY = !!b;
var c=a.charAt(0);
this.precedance="t"===c||"b"===c ? F:E
}
).prototype;
da.invert=function(a, b){
this[a]=this[a]===J ? L:this[a]===L ? J:b||this[a]
}
,
da.string=function(a){
var b=this.x
, c=this.y
, d=b!==c ? "center"===b||"center"!==c&&(this.precedance===F||this.forceY) ? [c, b]:[b, c]:[b];
return a!==!1 ? d.join(" "):d
}
,
da.abbrev=function(){
var a=this.string(!1);
return a[0].charAt(0) + (a[1]&&a[1].charAt(0)||"")
}
,
da.clone=function(){
return new y(this.string(),this.forceY)
}
,
x.toggle=function(a, c){
var e=this.cache
, f=this.options
, g=this.tooltip;
if(c){
if(/over|enter/.test(c.type)&&e.event&&/out|leave/.test(e.event.type)&&f.show.target.add(c.target).length===f.show.target.length&&g.has(c.relatedTarget).length)
return this;
e.event=d.event.fix(c)
}
if(this.waiting&&!a&&(this.hiddenDuringWait=B),
!this.rendered)
return a ? this.render(1):this;
if(this.destroyed||this.disabled)
return this;
var h, i, j, k=a ? "show":"hide", l=this.options[k], m=this.options.position, n=this.options.content, o=this.tooltip.css("width"), p=this.tooltip.is(":visible"), q=a||1===l.target.length, r = !c||l.target.length < 2||e.target[0]===c.target;
return (typeof a).search("boolean|number")&&(a = !p),
h = !g.is(":animated")&&p===a&&r,
i=h ? D:!!this._trigger(k, [90]),
this.destroyed ? this:(i!==C&&a && this.focus(c),
!i||h ? this:(d.attr(g[0], "aria-hidden", !a),
a ? (this.mouse&&(e.origin=d.event.fix(this.mouse)),
d.isFunction(n.text)&&this._updateContent(n.text, C),
d.isFunction(n.title)&&this._updateTitle(n.title, C),
!A&&"mouse"===m.target&&m.adjust.mouse&&(d(b).bind("mousemove." + P, this._storeMouse),
A=B),
o||g.css("width", g.outerWidth(C)),
this.reposition(c, arguments[2]),
o||g.css("width", ""),
l.solo&&("string"==typeof l.solo ? d(l.solo):d(T, l.solo)).not(g).not(l.target).qtip("hide", new d.Event("tooltipsolo"))):(clearTimeout(this.timers.show),
delete e.origin,
A&&!d(T + '[tracking="true"]:visible', l.solo).not(g).length&&(d(b).unbind("mousemove." + P),
A=C),
this.blur(c)),
j=d.proxy(function(){
a ? (aa.ie&&g[0].style.removeAttribute("filter"),
g.css("overflow", ""),
"string"==typeof l.autofocus&&d(this.options.show.autofocus, g).focus(),
this.options.show.target.trigger("qtip-" + this.id + "-inactive")):g.css({
display: "",
visibility: "",
opacity: "",
left: "",
top: ""
}),
this._trigger(a ? "visible":"hidden")
}, this),
l.effect===C||q===C ? (g[k](),
j()):d.isFunction(l.effect) ? (g.stop(1, 1),
l.effect.call(g, this),
g.queue("fx", function(a){
j(),
a()
})):g.fadeTo(90, a ? 1:0, j),
a&&l.target.trigger("qtip-" + this.id + "-inactive"),
this))
}
,
x.show=function(a){
return this.toggle(B, a)
}
,
x.hide=function(a){
return this.toggle(C, a)
}
,
x.focus=function(a){
if(!this.rendered||this.destroyed)
return this;
var b=d(T)
, c=this.tooltip
, e=parseInt(c[0].style.zIndex, 10)
, f=w.zindex + b.length;
return c.hasClass(X)||this._trigger("focus", [f], a)&&(e!==f&&(b.each(function(){
this.style.zIndex > e&&(this.style.zIndex=this.style.zIndex - 1)
}),
b.filter("." + X).qtip("blur", a)),
c.addClass(X)[0].style.zIndex=f),
this
}
,
x.blur=function(a){
return !this.rendered||this.destroyed ? this:(this.tooltip.removeClass(X),
this._trigger("blur", [this.tooltip.css("zIndex")], a),
this)
}
,
x.disable=function(a){
return this.destroyed ? this:("toggle"===a ? a = !(this.rendered ? this.tooltip.hasClass(Z):this.disabled):"boolean"!=typeof a&&(a=B),
this.rendered&&this.tooltip.toggleClass(Z, a).attr("aria-disabled", a),
this.disabled = !!a,
this)
}
,
x.enable=function(){
return this.disable(C)
}
,
x._createButton=function(){
var a=this
, b=this.elements
, c=b.tooltip
, e=this.options.content.button
, f="string"==typeof e
, g=f ? e:"Close tooltip";
b.button&&b.button.remove(),
e.jquery ? b.button=e:b.button=d("<a />", {
"class": "qtip-close " + (this.options.style.widget ? "":P + "-icon"),
title: g,
"aria-label": g
}).prepend(d("<span />", {
"class": "ui-icon ui-icon-close",
html: "&times;"
})),
b.button.appendTo(b.titlebar||c).attr("role", "button").click(function(b){
return c.hasClass(Z)||a.hide(b),
C
})
}
,
x._updateButton=function(a){
if(!this.rendered)
return C;
var b=this.elements.button;
a ? this._createButton():b.remove()
}
,
x._setWidget=function(){
var a=this.options.style.widget
, b=this.elements
, c=b.tooltip
, d=c.hasClass(Z);
c.removeClass(Z),
Z=a ? "ui-state-disabled":"qtip-disabled",
c.toggleClass(Z, d),
c.toggleClass("ui-helper-reset " + k(), a).toggleClass(W, this.options.style.def&&!a),
b.content&&b.content.toggleClass(k("content"), a),
b.titlebar&&b.titlebar.toggleClass(k("header"), a),
b.button&&b.button.toggleClass(P + "-icon", !a)
}
,
x._storeMouse=function(a){
return (this.mouse=d.event.fix(a)).type="mousemove",
this
}
,
x._bind=function(a, b, c, e, f){
if(a&&c && b.length){
var g="." + this._id + (e ? "-" + e:"");
return d(a).bind((b.split ? b:b.join(g + " ")) + g, d.proxy(c, f||this)),
this
}}
,
x._unbind=function(a, b){
return a&&d(a).unbind("." + this._id + (b ? "-" + b:"")),
this
}
,
x._trigger=function(a, b, c){
var e=new d.Event("tooltip" + a);
return e.originalEvent=c&&d.extend({}, c)||this.cache.event||D,
this.triggering=a,
this.tooltip.trigger(e, [this].concat(b||[])),
this.triggering=C,
!e.isDefaultPrevented()
}
,
x._bindEvents=function(a, b, c, e, f, g){
var h=c.filter(e).add(e.filter(c))
, i=[];
h.length&&(d.each(b, function(b, c){
var e=d.inArray(c, a);
e > -1&&i.push(a.splice(e, 1)[0])
}),
i.length&&(this._bind(h, i, function(a){
var b=this.rendered ? this.tooltip[0].offsetWidth > 0:!1;
(b ? g:f).call(this, a)
}),
c=c.not(h),
e=e.not(h))),
this._bind(c, a, f),
this._bind(e, b, g)
}
,
x._assignInitialEvents=function(a){
function b(a){
return this.disabled||this.destroyed ? C:(this.cache.event=a&&d.event.fix(a),
this.cache.target=a&&d(a.target),
clearTimeout(this.timers.show),
void (this.timers.show=l.call(this, function(){
this.render("object"==typeof a||c.show.ready)
}, c.prerender ? 0:c.show.delay)))
}
var c=this.options
, e=c.show.target
, f=c.hide.target
, g=c.show.event ? d.trim("" + c.show.event).split(" "):[]
, h=c.hide.event ? d.trim("" + c.hide.event).split(" "):[];
this._bind(this.elements.target, ["remove", "removeqtip"], function(){
this.destroy(!0)
}, "destroy"),
/mouse(over|enter)/i.test(c.show.event)&&!/mouse(out|leave)/i.test(c.hide.event)&&h.push("mouseleave"),
this._bind(e, "mousemove", function(a){
this._storeMouse(a),
this.cache.onTarget=B
}),
this._bindEvents(g, h, e, f, b, function(){
return this.timers ? void clearTimeout(this.timers.show):C
}),
(c.show.ready||c.prerender)&&b.call(this, a)
}
,
x._assignEvents=function(){
var c=this
, e=this.options
, f=e.position
, g=this.tooltip
, h=e.show.target
, i=e.hide.target
, j=f.container
, k=f.viewport
, l=d(b)
, q=d(a)
, r=e.show.event ? d.trim("" + e.show.event).split(" "):[]
, s=e.hide.event ? d.trim("" + e.hide.event).split(" "):[];
d.each(e.events, function(a, b){
c._bind(g, "toggle"===a ? ["tooltipshow", "tooltiphide"]:["tooltip" + a], b, null, g)
}),
/mouse(out|leave)/i.test(e.hide.event)&&"window"===e.hide.leave&&this._bind(l, ["mouseout", "blur"], function(a){
/select|option/.test(a.target.nodeName)||a.relatedTarget||this.hide(a)
}),
e.hide.fixed ? i=i.add(g.addClass(V)):/mouse(over|enter)/i.test(e.show.event)&&this._bind(i, "mouseleave", function(){
clearTimeout(this.timers.show)
}),
("" + e.hide.event).indexOf("unfocus") > -1&&this._bind(j.closest("html"), ["mousedown", "touchstart"], function(a){
var b=d(a.target)
, c=this.rendered&&!this.tooltip.hasClass(Z)&&this.tooltip[0].offsetWidth > 0
, e=b.parents(T).filter(this.tooltip[0]).length > 0;
b[0]===this.target[0]||b[0]===this.tooltip[0]||e || this.target.has(b[0]).length||!c||this.hide(a)
}),
"number"==typeof e.hide.inactive&&(this._bind(h, "qtip-" + this.id + "-inactive", o, "inactive"),
this._bind(i.add(g), w.inactiveEvents, o)),
this._bindEvents(r, s, h, i, m, n),
this._bind(h.add(g), "mousemove", function(a){
if("number"==typeof e.hide.distance){
var b=this.cache.origin||{}
, c=this.options.hide.distance
, d=Math.abs;
(d(a.pageX - b.pageX) >=c||d(a.pageY - b.pageY) >=c)&&this.hide(a)
}
this._storeMouse(a)
}),
"mouse"===f.target&&f.adjust.mouse&&(e.hide.event&&this._bind(h, ["mouseenter", "mouseleave"], function(a){
return this.cache ? void (this.cache.onTarget="mouseenter"===a.type):C
}),
this._bind(l, "mousemove", function(a){
this.rendered&&this.cache.onTarget&&!this.tooltip.hasClass(Z)&&this.tooltip[0].offsetWidth > 0&&this.reposition(a)
})),
(f.adjust.resize||k.length)&&this._bind(d.event.special.resize ? k:q, "resize", p),
f.adjust.scroll&&this._bind(q.add(f.container), "scroll", p)
}
,
x._unassignEvents=function(){
var c=this.options
, e=c.show.target
, f=c.hide.target
, g=d.grep([this.elements.target[0], this.rendered&&this.tooltip[0], c.position.container[0], c.position.viewport[0], c.position.container.closest("html")[0], a, b], function(a){
return "object"==typeof a
});
e&&e.toArray&&(g=g.concat(e.toArray())),
f&&f.toArray&&(g=g.concat(f.toArray())),
this._unbind(g)._unbind(g, "destroy")._unbind(g, "inactive")
}
,
d(function(){
q(T, ["mouseenter", "mouseleave"], function(a){
var b="mouseenter"===a.type
, c=d(a.currentTarget)
, e=d(a.relatedTarget||a.target)
, f=this.options;
b ? (this.focus(a),
c.hasClass(V)&&!c.hasClass(Z)&&clearTimeout(this.timers.hide)):"mouse"===f.position.target&&f.position.adjust.mouse&&f.hide.event&&f.show.target&&!e.closest(f.show.target[0]).length&&this.hide(a),
c.toggleClass(Y, b)
}),
q("[" + R + "]", U, o)
}),
w=d.fn.qtip=function(a, b, e){
var f=("" + a).toLowerCase()
, g=D
, i=d.makeArray(arguments).slice(1)
, j=i[i.length - 1]
, k=this[0] ? d.data(this[0], P):D;
return !arguments.length&&k||"api"===f ? k:"string"==typeof a ? (this.each(function(){
var a=d.data(this, P);
if(!a)
return B;
if(j&&j.timeStamp&&(a.cache.event=j),
!b||"option"!==f&&"options"!==f)
a[f]&&a[f].apply(a, i);
else {
if(e===c&&!d.isPlainObject(b))
return g=a.get(b),
C;
a.set(b, e)
}}),
g!==D ? g:this):"object"!=typeof a&&arguments.length ? void 0:(k=h(d.extend(B, {}, a)),
this.each(function(a){
var b, c;
return c=d.isArray(k.id) ? k.id[a]:k.id,
c = !c||c===C||c.length < 1||w.api[c] ? w.nextid++:c,
b=r(d(this), c, k),
b===C ? B:(w.api[c]=b,
d.each(O, function(){
"initialize"===this.initialize&&this(b)
}),
void b._assignInitialEvents(j))
}))
}
,
d.qtip=e,
w.api={},
d.each({
attr: function(a, b){
if(this.length){
var c=this[0]
, e="title"
, f=d.data(c, "qtip");
if(a===e&&f && f.options&&"object"==typeof f&&"object"==typeof f.options&&f.options.suppress)
return arguments.length < 2 ? d.attr(c, _):(f&&f.options.content.attr===e&&f.cache.attr&&f.set("content.text", b),
this.attr(_, b))
}
return d.fn["attr" + $].apply(this, arguments)
},
clone: function(a){
var b=d.fn["clone" + $].apply(this, arguments);
return a||b.filter("[" + _ + "]").attr("title", function(){
return d.attr(this, _)
}).removeAttr(_),
b
}}, function(a, b){
if(!b||d.fn[a + $])
return B;
var c=d.fn[a + $]=d.fn[a];
d.fn[a]=function(){
return b.apply(this, arguments)||c.apply(this, arguments)
}}),
d.ui||(d["cleanData" + $]=d.cleanData,
d.cleanData=function(a){
for (var b, c=0; (b=d(a[c])).length; c++)
if(b.attr(Q))
try {
b.triggerHandler("removeqtip")
} catch (e){}
d["cleanData" + $].apply(this, arguments)
}
),
w.version="3.0.3",
w.nextid=0,
w.inactiveEvents=U,
w.zindex=15e3,
w.defaults={
prerender: C,
id: C,
overwrite: B,
suppress: B,
content: {
text: B,
attr: "title",
title: C,
button: C
},
position: {
my: "top left",
at: "bottom right",
target: C,
container: C,
viewport: C,
adjust: {
x: 0,
y: 0,
mouse: B,
scroll: B,
resize: B,
method: "flipinvert flipinvert"
},
effect: function(a, b){
d(this).animate(b, {
duration: 200,
queue: C
})
}},
show: {
target: C,
event: "mouseenter",
effect: B,
delay: 90,
solo: C,
ready: C,
autofocus: C
},
hide: {
target: C,
event: "mouseleave",
effect: B,
delay: 0,
fixed: C,
inactive: C,
leave: "window",
distance: C
},
style: {
classes: "",
widget: C,
width: C,
height: C,
def: B
},
events: {
render: D,
move: D,
show: D,
hide: D,
toggle: D,
visible: D,
hidden: D,
focus: D,
blur: D
}};
var ea, fa, ga, ha, ia, ja="margin", ka="border", la="color", ma="background-color", na="transparent", oa=" !important", pa = !!b.createElement("canvas").getContext, qa=/rgba?\(0, 0, 0(, 0)?\)|transparent|#123456/i, ra={}, sa=["Webkit", "O", "Moz", "ms"];
pa ? (ha=a.devicePixelRatio||1,
ia=function(){
var a=b.createElement("canvas").getContext("2d");
return a.backingStorePixelRatio||a.webkitBackingStorePixelRatio||a.mozBackingStorePixelRatio||a.msBackingStorePixelRatio||a.oBackingStorePixelRatio||1
}(),
ga=ha / ia):fa=function(a, b, c){
return "<qtipvml:" + a + ' xmlns="urn:schemas-microsoft.com:vml" class="qtip-vml" ' + (b||"") + ' style="behavior: url(#default#VML); ' + (c||"") + '" />'
}
,
d.extend(v.prototype, {
init: function(a){
var b, c;
c=this.element=a.elements.tip=d("<div />", {
"class": P + "-tip"
}).prependTo(a.tooltip),
pa ? (b=d("<canvas />").appendTo(this.element)[0].getContext("2d"),
b.lineJoin="miter",
b.miterLimit=1e5,
b.save()):(b=fa("shape", 'coordorigin="0,0"', "position:absolute;"),
this.element.html(b + b),
a._bind(d("*", c).add(c), ["click", "mousedown"], function(a){
a.stopPropagation()
}, this._ns)),
a._bind(a.tooltip, "tooltipmove", this.reposition, this._ns, this),
this.create()
},
_swapDimensions: function(){
this.size[0]=this.options.height,
this.size[1]=this.options.width
},
_resetDimensions: function(){
this.size[0]=this.options.width,
this.size[1]=this.options.height
},
_useTitle: function(a){
var b=this.qtip.elements.titlebar;
return b&&(a.y===I||a.y===M&&this.element.position().top + this.size[1] / 2 + this.options.offset < b.outerHeight(B))
},
_parseCorner: function(a){
var b=this.qtip.options.position.my;
return a===C||b===C ? a=C:a===B ? a=new y(b.string()):a.string||(a=new y(a),
a.fixed=B),
a
},
_parseWidth: function(a, b, c){
var d=this.qtip.elements
, e=ka + s(b) + "Width";
return (c ? u(c, e):u(d.content, e)||u(this._useTitle(a)&&d.titlebar||d.content, e)||u(d.tooltip, e))||0
},
_parseRadius: function(a){
var b=this.qtip.elements
, c=ka + s(a.y) + s(a.x) + "Radius";
return aa.ie < 9 ? 0:u(this._useTitle(a)&&b.titlebar||b.content, c)||u(b.tooltip, c)||0
},
_invalidColour: function(a, b, c){
var d=a.css(b);
return !d||c&&d===a.css(c)||qa.test(d) ? C:d
},
_parseColours: function(a){
var b=this.qtip.elements
, c=this.element.css("cssText", "")
, e=ka + s(a[a.precedance]) + s(la)
, f=this._useTitle(a)&&b.titlebar||b.content
, g=this._invalidColour
, h=[];
return h[0]=g(c, ma)||g(f, ma)||g(b.content, ma)||g(b.tooltip, ma)||c.css(ma),
h[1]=g(c, e, la)||g(f, e, la)||g(b.content, e, la)||g(b.tooltip, e, la)||b.tooltip.css(e),
d("*", c).add(c).css("cssText", ma + ":" + na + oa + ";" + ka + ":0" + oa + ";"),
h
},
_calculateSize: function(a){
var b, c, d, e=a.precedance===F, f=this.options.width, g=this.options.height, h="c"===a.abbrev(), i=(e ? f:g) * (h ? .5:1), j=Math.pow, k=Math.round, l=Math.sqrt(j(i, 2) + j(g, 2)), m=[this.border / i * l, this.border / g * l];
return m[2]=Math.sqrt(j(m[0], 2) - j(this.border, 2)),
m[3]=Math.sqrt(j(m[1], 2) - j(this.border, 2)),
b=l + m[2] + m[3] + (h ? 0:m[0]),
c=b / l,
d=[k(c * f), k(c * g)],
e ? d:d.reverse()
},
_calculateTip: function(a, b, c){
c=c||1,
b=b||this.size;
var d=b[0] * c
, e=b[1] * c
, f=Math.ceil(d / 2)
, g=Math.ceil(e / 2)
, h={
br: [0, 0, d, e, d, 0],
bl: [0, 0, d, 0, 0, e],
tr: [0, e, d, 0, d, e],
tl: [0, 0, 0, e, d, e],
tc: [0, e, f, 0, d, e],
bc: [0, 0, d, 0, f, e],
rc: [0, 0, d, g, 0, e],
lc: [d, 0, d, e, 0, g]
};
return h.lt=h.br,
h.rt=h.bl,
h.lb=h.tr,
h.rb=h.tl,
h[a.abbrev()]
},
_drawCoords: function(a, b){
a.beginPath(),
a.moveTo(b[0], b[1]),
a.lineTo(b[2], b[3]),
a.lineTo(b[4], b[5]),
a.closePath()
},
create: function(){
var a=this.corner=(pa||aa.ie)&&this._parseCorner(this.options.corner);
return this.enabled = !!this.corner&&"c"!==this.corner.abbrev(),
this.enabled&&(this.qtip.cache.corner=a.clone(),
this.update()),
this.element.toggle(this.enabled),
this.corner
},
update: function(b, c){
if(!this.enabled)
return this;
var e, f, g, h, i, j, k, l, m=this.qtip.elements, n=this.element, o=n.children(), p=this.options, q=this.size, r=p.mimic, s=Math.round;
b||(b=this.qtip.cache.corner||this.corner),
r===C ? r=b:(r=new y(r),
r.precedance=b.precedance,
"inherit"===r.x ? r.x=b.x:"inherit"===r.y ? r.y=b.y:r.x===r.y&&(r[b.precedance]=b[b.precedance])),
f=r.precedance,
b.precedance===E ? this._swapDimensions():this._resetDimensions(),
e=this.color=this._parseColours(b),
e[1]!==na ? (l=this.border=this._parseWidth(b, b[b.precedance]),
p.border&&1 > l&&!qa.test(e[1])&&(e[0]=e[1]),
this.border=l = p.border!==B ? p.border:l):this.border=l = 0,
k=this.size=this._calculateSize(b),
n.css({
width: k[0],
height: k[1],
lineHeight: k[1] + "px"
}),
j=b.precedance===F ? [s(r.x===J ? l:r.x===L ? k[0] - q[0] - l:(k[0] - q[0]) / 2), s(r.y===I ? k[1] - q[1]:0)]:[s(r.x===J ? k[0] - q[0]:0), s(r.y===I ? l:r.y===K ? k[1] - q[1] - l:(k[1] - q[1]) / 2)],
pa ? (g=o[0].getContext("2d"),
g.restore(),
g.save(),
g.clearRect(0, 0, 6e3, 6e3),
h=this._calculateTip(r, q, ga),
i=this._calculateTip(r, this.size, ga),
o.attr(G, k[0] * ga).attr(H, k[1] * ga),
o.css(G, k[0]).css(H, k[1]),
this._drawCoords(g, i),
g.fillStyle=e[1],
g.fill(),
g.translate(j[0] * ga, j[1] * ga),
this._drawCoords(g, h),
g.fillStyle=e[0],
g.fill()):(h=this._calculateTip(r),
h="m" + h[0] + "," + h[1] + " l" + h[2] + "," + h[3] + " " + h[4] + "," + h[5] + " xe",
j[2]=l&&/^(r|b)/i.test(b.string()) ? 8===aa.ie ? 2:1 : 0,
o.css({
coordsize: k[0] + l + " " + k[1] + l,
antialias: "" + (r.string().indexOf(M) > -1),
left: j[0] - j[2] * Number(f===E),
top: j[1] - j[2] * Number(f===F),
width: k[0] + l,
height: k[1] + l
}).each(function(a){
var b=d(this);
b[b.prop ? "prop":"attr"]({
coordsize: k[0] + l + " " + k[1] + l,
path: h,
fillcolor: e[0],
filled: !!a,
stroked: !a
}).toggle(!(!l&&!a)),
!a&&b.html(fa("stroke", 'weight="' + 2 * l + 'px" color="' + e[1] + '" miterlimit="1000" joinstyle="miter"'))
})),
a.opera&&setTimeout(function(){
m.tip.css({
display: "inline-block",
visibility: "visible"
})
}, 1),
c!==C&&this.calculate(b, k)
},
calculate: function(a, b){
if(!this.enabled)
return C;
var c, e, f=this, g=this.qtip.elements, h=this.element, i=this.options.offset, j={};
return a=a||this.corner,
c=a.precedance,
b=b||this._calculateSize(a),
e=[a.x, a.y],
c===E&&e.reverse(),
d.each(e, function(d, e){
var h, k, l;
e===M ? (h=c===F ? J:I,
j[h]="50%",
j[ja + "-" + h]=-Math.round(b[c===F ? 0:1] / 2) + i):(h=f._parseWidth(a, e, g.tooltip),
k=f._parseWidth(a, e, g.content),
l=f._parseRadius(a),
j[e]=Math.max(-f.border, d ? k:i + (l > h ? l:-h)))
}),
j[a[c]] -=b[c===E ? 0:1],
h.css({
margin: "",
top: "",
bottom: "",
left: "",
right: ""
}).css(j),
j
},
reposition: function(a, b, d){
function e(a, b, c, d, e){
a===N&&j.precedance===b&&k[d]&&j[c]!==M ? j.precedance=j.precedance===E ? F:E : a!==N&&k[d]&&(j[b]=j[b]===M ? k[d] > 0 ? d:e : j[b]===d ? e:d)
}
function f(a, b, e){
j[a]===M ? p[ja + "-" + b]=o[a]=g[ja + "-" + b] - k[b]:(h=g[e]!==c ? [k[b], -g[b]]:[-k[b], g[b]],
(o[a]=Math.max(h[0], h[1])) > h[0]&&(d[b] -=k[b],
o[b]=C),
p[g[e]!==c ? e:b]=o[a])
}
if(this.enabled){
var g, h, i=b.cache, j=this.corner.clone(), k=d.adjusted, l=b.options.position.adjust.method.split(" "), m=l[0], n=l[1]||l[0], o={
left: C,
top: C,
x: 0,
y: 0
}, p={};
this.corner.fixed!==B&&(e(m, E, F, J, L),
e(n, F, E, I, K),
j.string()===i.corner.string()&&i.cornerTop===k.top&&i.cornerLeft===k.left||this.update(j, C)),
g=this.calculate(j),
g.right!==c&&(g.left=-g.right),
g.bottom!==c&&(g.top=-g.bottom),
g.user=this.offset,
o.left=m===N&&!!k.left,
o.left&&f(E, J, L),
o.top=n===N&&!!k.top,
o.top&&f(F, I, K),
this.element.css(p).toggle(!(o.x&&o.y||j.x===M&&o.y||j.y===M&&o.x)),
d.left -=g.left.charAt ? g.user:m!==N||o.top||!o.left&&!o.top ? g.left + this.border:0,
d.top -=g.top.charAt ? g.user:n!==N||o.left||!o.left&&!o.top ? g.top + this.border:0,
i.cornerLeft=k.left,
i.cornerTop=k.top,
i.corner=j.clone()
}},
destroy: function(){
this.qtip._unbind(this.qtip.tooltip, this._ns),
this.qtip.elements.tip&&this.qtip.elements.tip.find("*").remove().end().remove()
}}),
ea=O.tip=function(a){
return new v(a,a.options.style.tip)
}
,
ea.initialize="render",
ea.sanitize=function(a){
if(a.style&&"tip"in a.style){
var b=a.style.tip;
"object"!=typeof b&&(b=a.style.tip={
corner: b
}),
/string|boolean/i.test(typeof b.corner)||(b.corner=B)
}}
,
z.tip={
"^position.my|style.tip.(corner|mimic|border)$": function(){
this.create(),
this.qtip.reposition()
},
"^style.tip.(height|width)$": function(a){
this.size=[a.width, a.height],
this.update(),
this.qtip.reposition()
},
"^content.title|style.(classes|widget)$": function(){
this.update()
}},
d.extend(B, w.defaults, {
style: {
tip: {
corner: B,
mimic: C,
width: 6,
height: 6,
border: B,
offset: 0
}}
})
})
}(window, document);