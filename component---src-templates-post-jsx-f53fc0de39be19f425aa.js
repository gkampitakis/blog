(window.webpackJsonp=window.webpackJsonp||[]).push([[12],{M4XY:function(t,e,r){(function(e){r("pIFo"),r("a1Th"),r("Btvt"),r("SRfc"),r("Oyvg");var n=/[^\x00-\x2f\x3a-\x40\x5b-\x60\x7b-\x7f]+/g,o=/[\xc0-\xd6\xd8-\xf6\xf8-\xff\u0100-\u017f]/g,i="\\xac\\xb1\\xd7\\xf7\\x00-\\x2f\\x3a-\\x40\\x5b-\\x60\\x7b-\\xbf\\u2000-\\u206f \\t\\x0b\\f\\xa0\\ufeff\\n\\r\\u2028\\u2029\\u1680\\u180e\\u2000\\u2001\\u2002\\u2003\\u2004\\u2005\\u2006\\u2007\\u2008\\u2009\\u200a\\u202f\\u205f\\u3000",u="["+i+"]",a="[\\u0300-\\u036f\\ufe20-\\ufe23\\u20d0-\\u20f0]",c="\\d+",f="[\\u2700-\\u27bf]",s="[a-z\\xdf-\\xf6\\xf8-\\xff]",l="[^\\ud800-\\udfff"+i+c+"\\u2700-\\u27bfa-z\\xdf-\\xf6\\xf8-\\xffA-Z\\xc0-\\xd6\\xd8-\\xde]",h="(?:\\ud83c[\\udde6-\\uddff]){2}",d="[\\ud800-\\udbff][\\udc00-\\udfff]",p="[A-Z\\xc0-\\xd6\\xd8-\\xde]",v="(?:"+s+"|"+l+")",y="(?:"+p+"|"+l+")",m="(?:[\\u0300-\\u036f\\ufe20-\\ufe23\\u20d0-\\u20f0]|\\ud83c[\\udffb-\\udfff])?",g="[\\ufe0e\\ufe0f]?"+m+("(?:\\u200d(?:"+["[^\\ud800-\\udfff]",h,d].join("|")+")[\\ufe0e\\ufe0f]?"+m+")*"),x="(?:"+[f,h,d].join("|")+")"+g,w=RegExp("['’]","g"),b=RegExp(a,"g"),E=RegExp([p+"?"+s+"+(?:['’](?:d|ll|m|re|s|t|ve))?(?="+[u,p,"$"].join("|")+")",y+"+(?:['’](?:D|LL|M|RE|S|T|VE))?(?="+[u,p+v,"$"].join("|")+")",p+"?"+v+"+(?:['’](?:d|ll|m|re|s|t|ve))?",p+"+(?:['’](?:D|LL|M|RE|S|T|VE))?",c,x].join("|"),"g"),L=/[a-z][A-Z]|[A-Z]{2,}[a-z]|[0-9][a-zA-Z]|[a-zA-Z][0-9]|[^a-zA-Z0-9 ]/,j="object"==typeof e&&e&&e.Object===Object&&e,O="object"==typeof self&&self&&self.Object===Object&&self,k=j||O||Function("return this")();var S,A=(S={"À":"A","Á":"A","Â":"A","Ã":"A","Ä":"A","Å":"A","à":"a","á":"a","â":"a","ã":"a","ä":"a","å":"a","Ç":"C","ç":"c","Ð":"D","ð":"d","È":"E","É":"E","Ê":"E","Ë":"E","è":"e","é":"e","ê":"e","ë":"e","Ì":"I","Í":"I","Î":"I","Ï":"I","ì":"i","í":"i","î":"i","ï":"i","Ñ":"N","ñ":"n","Ò":"O","Ó":"O","Ô":"O","Õ":"O","Ö":"O","Ø":"O","ò":"o","ó":"o","ô":"o","õ":"o","ö":"o","ø":"o","Ù":"U","Ú":"U","Û":"U","Ü":"U","ù":"u","ú":"u","û":"u","ü":"u","Ý":"Y","ý":"y","ÿ":"y","Æ":"Ae","æ":"ae","Þ":"Th","þ":"th","ß":"ss","Ā":"A","Ă":"A","Ą":"A","ā":"a","ă":"a","ą":"a","Ć":"C","Ĉ":"C","Ċ":"C","Č":"C","ć":"c","ĉ":"c","ċ":"c","č":"c","Ď":"D","Đ":"D","ď":"d","đ":"d","Ē":"E","Ĕ":"E","Ė":"E","Ę":"E","Ě":"E","ē":"e","ĕ":"e","ė":"e","ę":"e","ě":"e","Ĝ":"G","Ğ":"G","Ġ":"G","Ģ":"G","ĝ":"g","ğ":"g","ġ":"g","ģ":"g","Ĥ":"H","Ħ":"H","ĥ":"h","ħ":"h","Ĩ":"I","Ī":"I","Ĭ":"I","Į":"I","İ":"I","ĩ":"i","ī":"i","ĭ":"i","į":"i","ı":"i","Ĵ":"J","ĵ":"j","Ķ":"K","ķ":"k","ĸ":"k","Ĺ":"L","Ļ":"L","Ľ":"L","Ŀ":"L","Ł":"L","ĺ":"l","ļ":"l","ľ":"l","ŀ":"l","ł":"l","Ń":"N","Ņ":"N","Ň":"N","Ŋ":"N","ń":"n","ņ":"n","ň":"n","ŋ":"n","Ō":"O","Ŏ":"O","Ő":"O","ō":"o","ŏ":"o","ő":"o","Ŕ":"R","Ŗ":"R","Ř":"R","ŕ":"r","ŗ":"r","ř":"r","Ś":"S","Ŝ":"S","Ş":"S","Š":"S","ś":"s","ŝ":"s","ş":"s","š":"s","Ţ":"T","Ť":"T","Ŧ":"T","ţ":"t","ť":"t","ŧ":"t","Ũ":"U","Ū":"U","Ŭ":"U","Ů":"U","Ű":"U","Ų":"U","ũ":"u","ū":"u","ŭ":"u","ů":"u","ű":"u","ų":"u","Ŵ":"W","ŵ":"w","Ŷ":"Y","ŷ":"y","Ÿ":"Y","Ź":"Z","Ż":"Z","Ž":"Z","ź":"z","ż":"z","ž":"z","Ĳ":"IJ","ĳ":"ij","Œ":"Oe","œ":"oe","ŉ":"'n","ſ":"ss"},function(t){return null==S?void 0:S[t]});var I=Object.prototype.toString,T=k.Symbol,R=T?T.prototype:void 0,N=R?R.toString:void 0;function _(t){if("string"==typeof t)return t;if(function(t){return"symbol"==typeof t||function(t){return!!t&&"object"==typeof t}(t)&&"[object Symbol]"==I.call(t)}(t))return N?N.call(t):"";var e=t+"";return"0"==e&&1/t==-1/0?"-0":e}function G(t){return null==t?"":_(t)}var z,P=(z=function(t,e,r){return t+(r?"-":"")+e.toLowerCase()},function(t){return function(t,e,r,n){var o=-1,i=t?t.length:0;for(n&&i&&(r=t[++o]);++o<i;)r=e(r,t[o],o,t);return r}(function(t,e,r){return t=G(t),void 0===(e=r?void 0:e)?function(t){return L.test(t)}(t)?function(t){return t.match(E)||[]}(t):function(t){return t.match(n)||[]}(t):t.match(e)||[]}(function(t){return(t=G(t))&&t.replace(o,A).replace(b,"")}(t).replace(w,"")),z,"")});t.exports=P}).call(this,r("yLpj"))},"TG/k":function(t,e,r){"use strict";r.r(e),r.d(e,"pageQuery",(function(){return S}));var n=r("q1tI"),o=r.n(n),i=r("qhky"),u=r("hpys"),a=(r("VRzm"),r("Btvt"),r("o0o1")),c=r.n(a),f=(r("rGqo"),r("yt8O"),r("RW0V"),r("91GP"),r("g6dt")),s=r.n(f);function l(){return(l=Object.assign||function(t){for(var e=1;e<arguments.length;e++){var r=arguments[e];for(var n in r)Object.prototype.hasOwnProperty.call(r,n)&&(t[n]=r[n])}return t}).apply(this,arguments)}var h=!("undefined"==typeof window||!window.document||!window.document.createElement);function d(t,e){return t===e?0!==t||0!==e||1/t==1/e:t!=t&&e!=e}function p(t){var e=Object(n.useRef)();return function(t,e){if(d(t,e))return!0;if("object"!=typeof t||null===t||"object"!=typeof e||null===e)return!1;var r=Object.keys(t),n=Object.keys(e);if(r.length!==n.length)return!1;for(var o=0;o<r.length;o++)if(!Object.prototype.hasOwnProperty.call(e,r[o])||!d(t[r[o]],e[r[o]]))return!1;return!0}(t,e.current)||(e.current=t),e.current}function v(t){return"object"==typeof t?l({},t):t}function y(t,e,r,n,o,i,u){try{var a=t[i](u),c=a.value}catch(f){return void r(f)}a.done?e(c):Promise.resolve(c).then(n,o)}h&&s()("https://platform.twitter.com/widgets.js","twttr");function m(t,e,r,o){var i=Object(n.useState)(null),u=i[0],a=i[1],f=Object(n.useRef)(null);if(!h)return{ref:f,error:u};var l=[t,p(e),p(r)];return Object(n.useEffect)((function(){a(null);var n,i,u=!1;if(f.current){var l=function(){var n,i=(n=c.a.mark((function n(){var i,l;return c.a.wrap((function(n){for(;;)switch(n.prev=n.next){case 0:if(f&&f.current){n.next=2;break}return n.abrupt("return");case 2:return(i=document.createElement("div")).setAttribute("twdiv","yes"),f.current.appendChild(i),n.prev=5,n.next=8,new Promise((function(t,e){var r=function(){return e(new Error("Could not load remote twitter widgets js"))};s.a.ready("twttr",{success:function(){var e=window.twttr;e&&e.widgets||r(),t(e.widgets)},error:r})}));case 8:return l=n.sent,n.next=11,l[t](v(e),i,v(r));case 11:if(n.sent||u){n.next=14;break}throw new Error("Twitter could not create widget. If it is a Timeline or Tweet, ensure the screenName/tweetId exists.");case 14:n.next=21;break;case 16:return n.prev=16,n.t0=n.catch(5),console.error(n.t0),a(n.t0),n.abrupt("return");case 21:if(f&&f.current){n.next=23;break}return n.abrupt("return");case 23:if(!u){n.next=26;break}return i&&i.remove(),n.abrupt("return");case 26:o&&o();case 27:case"end":return n.stop()}}),n,null,[[5,16]])})),function(){var t=this,e=arguments;return new Promise((function(r,o){var i=n.apply(t,e);function u(t){y(i,r,o,u,a,"next",t)}function a(t){y(i,r,o,u,a,"throw",t)}u(void 0)}))});return function(){return i.apply(this,arguments)}}();n=f.current,i="twdiv",n&&n.querySelectorAll("*").forEach((function(t){t.hasAttribute(i)&&t.remove()})),l()}return function(){u=!0}}),l),{ref:f,error:u}}var g=function(t){var e=t.username,r=t.options,n=t.onLoad,i=t.renderError,u=m("createFollowButton",e,r,n),a=u.ref,c=u.error;return o.a.createElement("div",{ref:a},c&&i&&i(c))},x=function(t){var e=t.config.userTwitter,r=t.expanded;return o.a.createElement(g,{username:e,options:{count:!!r||"none"}})},w=r("M4XY"),b=r.n(w),E=r("Wbzz"),L=function(t){var e=t.tags;return o.a.createElement("div",{className:"post-tag-container"},e&&e.filter((function(t){return"popular"!==t})).map((function(t){return o.a.createElement(E.Link,{key:t,style:{textDecoration:"none"},to:"/tags/"+b()(t)},t)})))},j=r("hYuR"),O=r("IpnI"),k=r.n(O),S=(e.default=function(t){var e=t.data,r=t.pageContext.slug,n=e.markdownRemark,a=n.frontmatter;return a.id||(a.id=r),o.a.createElement(u.a,null,o.a.createElement("div",{className:"post"},o.a.createElement(i.a,null,o.a.createElement("title",null,a.title+" | "+k.a.siteTitle)),o.a.createElement(j.a,{postPath:r,postNode:n,postSEO:!0}),o.a.createElement("div",{className:"header"},o.a.createElement("h1",null,a.title),o.a.createElement("div",{className:"post-meta"},o.a.createElement(L,{tags:a.tags})),o.a.createElement(x,{config:k.a}),o.a.createElement("div",{dangerouslySetInnerHTML:{__html:n.html}}))))},"2507666771")},g6dt:function(t,e,r){var n,o,i;r("VRzm"),r("Btvt"),r("pIFo"),o=[],void 0===(i="function"==typeof(n=function(){var t=function(){},e={},r={},n={};function o(t,e){if(t){var o=n[t];if(r[t]=e,o)for(;o.length;)o[0](t,e),o.splice(0,1)}}function i(e,r){e.call&&(e={success:e}),r.length?(e.error||t)(r):(e.success||t)(e)}function u(e,r,n,o){var i,a,c=document,f=n.async,s=(n.numRetries||0)+1,l=n.before||t,h=e.replace(/[\?|#].*$/,""),d=e.replace(/^(css|img)!/,"");o=o||0,/(^css!|\.css$)/.test(h)?((a=c.createElement("link")).rel="stylesheet",a.href=d,(i="hideFocus"in a)&&a.relList&&(i=0,a.rel="preload",a.as="style")):/(^img!|\.(png|gif|jpg|svg|webp)$)/.test(h)?(a=c.createElement("img")).src=d:((a=c.createElement("script")).src=e,a.async=void 0===f||f),a.onload=a.onerror=a.onbeforeload=function(t){var c=t.type[0];if(i)try{a.sheet.cssText.length||(c="e")}catch(f){18!=f.code&&(c="e")}if("e"==c){if((o+=1)<s)return u(e,r,n,o)}else if("preload"==a.rel&&"style"==a.as)return a.rel="stylesheet";r(e,c,t.defaultPrevented)},!1!==l(e,a)&&c.head.appendChild(a)}function a(t,r,n){var a,c;if(r&&r.trim&&(a=r),c=(a?n:r)||{},a){if(a in e)throw"LoadJS";e[a]=!0}function f(e,r){!function(t,e,r){var n,o,i=(t=t.push?t:[t]).length,a=i,c=[];for(n=function(t,r,n){if("e"==r&&c.push(t),"b"==r){if(!n)return;c.push(t)}--i||e(c)},o=0;o<a;o++)u(t[o],n,r)}(t,(function(t){i(c,t),e&&i({success:e,error:r},t),o(a,t)}),c)}if(c.returnPromise)return new Promise(f);f()}return a.ready=function(t,e){return function(t,e){t=t.push?t:[t];var o,i,u,a=[],c=t.length,f=c;for(o=function(t,r){r.length&&a.push(t),--f||e(a)};c--;)i=t[c],(u=r[i])?o(i,u):(n[i]=n[i]||[]).push(o)}(t,(function(t){i(e,t)})),a},a.done=function(t){o(t,[])},a.reset=function(){e={},r={},n={}},a.isDefined=function(t){return t in e},a})?n.apply(e,o):n)||(t.exports=i)},ls82:function(t,e,r){r("rGqo"),r("yt8O"),r("a1Th"),r("VRzm"),r("Btvt"),r("/SS/"),r("f3/d"),r("rE2o"),r("ioFf");var n=function(t){"use strict";var e=Object.prototype,r=e.hasOwnProperty,n="function"==typeof Symbol?Symbol:{},o=n.iterator||"@@iterator",i=n.asyncIterator||"@@asyncIterator",u=n.toStringTag||"@@toStringTag";function a(t,e,r,n){var o=e&&e.prototype instanceof s?e:s,i=Object.create(o.prototype),u=new E(n||[]);return i._invoke=function(t,e,r){var n="suspendedStart";return function(o,i){if("executing"===n)throw new Error("Generator is already running");if("completed"===n){if("throw"===o)throw i;return j()}for(r.method=o,r.arg=i;;){var u=r.delegate;if(u){var a=x(u,r);if(a){if(a===f)continue;return a}}if("next"===r.method)r.sent=r._sent=r.arg;else if("throw"===r.method){if("suspendedStart"===n)throw n="completed",r.arg;r.dispatchException(r.arg)}else"return"===r.method&&r.abrupt("return",r.arg);n="executing";var s=c(t,e,r);if("normal"===s.type){if(n=r.done?"completed":"suspendedYield",s.arg===f)continue;return{value:s.arg,done:r.done}}"throw"===s.type&&(n="completed",r.method="throw",r.arg=s.arg)}}}(t,r,u),i}function c(t,e,r){try{return{type:"normal",arg:t.call(e,r)}}catch(n){return{type:"throw",arg:n}}}t.wrap=a;var f={};function s(){}function l(){}function h(){}var d={};d[o]=function(){return this};var p=Object.getPrototypeOf,v=p&&p(p(L([])));v&&v!==e&&r.call(v,o)&&(d=v);var y=h.prototype=s.prototype=Object.create(d);function m(t){["next","throw","return"].forEach((function(e){t[e]=function(t){return this._invoke(e,t)}}))}function g(t,e){var n;this._invoke=function(o,i){function u(){return new e((function(n,u){!function n(o,i,u,a){var f=c(t[o],t,i);if("throw"!==f.type){var s=f.arg,l=s.value;return l&&"object"==typeof l&&r.call(l,"__await")?e.resolve(l.__await).then((function(t){n("next",t,u,a)}),(function(t){n("throw",t,u,a)})):e.resolve(l).then((function(t){s.value=t,u(s)}),(function(t){return n("throw",t,u,a)}))}a(f.arg)}(o,i,n,u)}))}return n=n?n.then(u,u):u()}}function x(t,e){var r=t.iterator[e.method];if(void 0===r){if(e.delegate=null,"throw"===e.method){if(t.iterator.return&&(e.method="return",e.arg=void 0,x(t,e),"throw"===e.method))return f;e.method="throw",e.arg=new TypeError("The iterator does not provide a 'throw' method")}return f}var n=c(r,t.iterator,e.arg);if("throw"===n.type)return e.method="throw",e.arg=n.arg,e.delegate=null,f;var o=n.arg;return o?o.done?(e[t.resultName]=o.value,e.next=t.nextLoc,"return"!==e.method&&(e.method="next",e.arg=void 0),e.delegate=null,f):o:(e.method="throw",e.arg=new TypeError("iterator result is not an object"),e.delegate=null,f)}function w(t){var e={tryLoc:t[0]};1 in t&&(e.catchLoc=t[1]),2 in t&&(e.finallyLoc=t[2],e.afterLoc=t[3]),this.tryEntries.push(e)}function b(t){var e=t.completion||{};e.type="normal",delete e.arg,t.completion=e}function E(t){this.tryEntries=[{tryLoc:"root"}],t.forEach(w,this),this.reset(!0)}function L(t){if(t){var e=t[o];if(e)return e.call(t);if("function"==typeof t.next)return t;if(!isNaN(t.length)){var n=-1,i=function e(){for(;++n<t.length;)if(r.call(t,n))return e.value=t[n],e.done=!1,e;return e.value=void 0,e.done=!0,e};return i.next=i}}return{next:j}}function j(){return{value:void 0,done:!0}}return l.prototype=y.constructor=h,h.constructor=l,h[u]=l.displayName="GeneratorFunction",t.isGeneratorFunction=function(t){var e="function"==typeof t&&t.constructor;return!!e&&(e===l||"GeneratorFunction"===(e.displayName||e.name))},t.mark=function(t){return Object.setPrototypeOf?Object.setPrototypeOf(t,h):(t.__proto__=h,u in t||(t[u]="GeneratorFunction")),t.prototype=Object.create(y),t},t.awrap=function(t){return{__await:t}},m(g.prototype),g.prototype[i]=function(){return this},t.AsyncIterator=g,t.async=function(e,r,n,o,i){void 0===i&&(i=Promise);var u=new g(a(e,r,n,o),i);return t.isGeneratorFunction(r)?u:u.next().then((function(t){return t.done?t.value:u.next()}))},m(y),y[u]="Generator",y[o]=function(){return this},y.toString=function(){return"[object Generator]"},t.keys=function(t){var e=[];for(var r in t)e.push(r);return e.reverse(),function r(){for(;e.length;){var n=e.pop();if(n in t)return r.value=n,r.done=!1,r}return r.done=!0,r}},t.values=L,E.prototype={constructor:E,reset:function(t){if(this.prev=0,this.next=0,this.sent=this._sent=void 0,this.done=!1,this.delegate=null,this.method="next",this.arg=void 0,this.tryEntries.forEach(b),!t)for(var e in this)"t"===e.charAt(0)&&r.call(this,e)&&!isNaN(+e.slice(1))&&(this[e]=void 0)},stop:function(){this.done=!0;var t=this.tryEntries[0].completion;if("throw"===t.type)throw t.arg;return this.rval},dispatchException:function(t){if(this.done)throw t;var e=this;function n(r,n){return u.type="throw",u.arg=t,e.next=r,n&&(e.method="next",e.arg=void 0),!!n}for(var o=this.tryEntries.length-1;o>=0;--o){var i=this.tryEntries[o],u=i.completion;if("root"===i.tryLoc)return n("end");if(i.tryLoc<=this.prev){var a=r.call(i,"catchLoc"),c=r.call(i,"finallyLoc");if(a&&c){if(this.prev<i.catchLoc)return n(i.catchLoc,!0);if(this.prev<i.finallyLoc)return n(i.finallyLoc)}else if(a){if(this.prev<i.catchLoc)return n(i.catchLoc,!0)}else{if(!c)throw new Error("try statement without catch or finally");if(this.prev<i.finallyLoc)return n(i.finallyLoc)}}}},abrupt:function(t,e){for(var n=this.tryEntries.length-1;n>=0;--n){var o=this.tryEntries[n];if(o.tryLoc<=this.prev&&r.call(o,"finallyLoc")&&this.prev<o.finallyLoc){var i=o;break}}i&&("break"===t||"continue"===t)&&i.tryLoc<=e&&e<=i.finallyLoc&&(i=null);var u=i?i.completion:{};return u.type=t,u.arg=e,i?(this.method="next",this.next=i.finallyLoc,f):this.complete(u)},complete:function(t,e){if("throw"===t.type)throw t.arg;return"break"===t.type||"continue"===t.type?this.next=t.arg:"return"===t.type?(this.rval=this.arg=t.arg,this.method="return",this.next="end"):"normal"===t.type&&e&&(this.next=e),f},finish:function(t){for(var e=this.tryEntries.length-1;e>=0;--e){var r=this.tryEntries[e];if(r.finallyLoc===t)return this.complete(r.completion,r.afterLoc),b(r),f}},catch:function(t){for(var e=this.tryEntries.length-1;e>=0;--e){var r=this.tryEntries[e];if(r.tryLoc===t){var n=r.completion;if("throw"===n.type){var o=n.arg;b(r)}return o}}throw new Error("illegal catch attempt")},delegateYield:function(t,e,r){return this.delegate={iterator:L(t),resultName:e,nextLoc:r},"next"===this.method&&(this.arg=void 0),f}},t}(t.exports);try{regeneratorRuntime=n}catch(o){Function("r","regeneratorRuntime = r")(n)}},o0o1:function(t,e,r){t.exports=r("ls82")}}]);
//# sourceMappingURL=component---src-templates-post-jsx-f53fc0de39be19f425aa.js.map