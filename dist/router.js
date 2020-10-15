!function(e,t){if("object"==typeof exports&&"object"==typeof module)module.exports=t();else if("function"==typeof define&&define.amd)define([],t);else{var r=t();for(var n in r)("object"==typeof exports?exports:e)[n]=r[n]}}(window,(function(){return function(e){var t={};function r(n){if(t[n])return t[n].exports;var o=t[n]={i:n,l:!1,exports:{}};return e[n].call(o.exports,o,o.exports,r),o.l=!0,o.exports}return r.m=e,r.c=t,r.d=function(e,t,n){r.o(e,t)||Object.defineProperty(e,t,{enumerable:!0,get:n})},r.r=function(e){"undefined"!=typeof Symbol&&Symbol.toStringTag&&Object.defineProperty(e,Symbol.toStringTag,{value:"Module"}),Object.defineProperty(e,"__esModule",{value:!0})},r.t=function(e,t){if(1&t&&(e=r(e)),8&t)return e;if(4&t&&"object"==typeof e&&e&&e.__esModule)return e;var n=Object.create(null);if(r.r(n),Object.defineProperty(n,"default",{enumerable:!0,value:e}),2&t&&"string"!=typeof e)for(var o in e)r.d(n,o,function(t){return e[t]}.bind(null,o));return n},r.n=function(e){var t=e&&e.__esModule?function(){return e.default}:function(){return e};return r.d(t,"a",t),t},r.o=function(e,t){return Object.prototype.hasOwnProperty.call(e,t)},r.p="",r(r.s=0)}([function(e,t,r){"use strict";var n=this&&this.__assign||function(){return(n=Object.assign||function(e){for(var t,r=1,n=arguments.length;r<n;r++)for(var o in t=arguments[r])Object.prototype.hasOwnProperty.call(t,o)&&(e[o]=t[o]);return e}).apply(this,arguments)};Object.defineProperty(t,"__esModule",{value:!0});var o,i=function(){function e(e,t){void 0===e&&(e={}),void 0===t&&(t={}),this.context={base_url:"",prefix:"",host:"",scheme:""},this.context=n(n({},this.context),e),this.setRoutes(t)}return e.prototype.setRoutingData=function(e){this.setBaseUrl(e.base_url),this.setRoutes(e.routes),"prefix"in e&&this.setPrefix(e.prefix),this.setHost(e.host),this.setScheme(e.scheme)},e.prototype.setRoutes=function(e){this.routes=Object.freeze(e)},e.prototype.getRoutes=function(){return this.routes},e.prototype.setBaseUrl=function(e){this.context.base_url=e},e.prototype.getBaseUrl=function(){return this.context.base_url},e.prototype.setPrefix=function(e){this.context.prefix=e},e.prototype.setScheme=function(e){this.context.scheme=e},e.prototype.getScheme=function(){return this.context.scheme},e.prototype.setHost=function(e){this.context.host=e},e.prototype.getHost=function(){return this.context.host},e.prototype.getRoute=function(e){var t=this.context.prefix+e;if(t in this.routes)return this.routes[t];if(e in this.routes)return this.routes[e];throw new Error('The route "'+e+'" does not exist.')},e.prototype.generate=function(e,t,r){var i=this;void 0===t&&(t={}),void 0===r&&(r=!1);var s=this.getRoute(e),u=n({},t),a="",f=!0,c="";if(s.tokens.forEach((function(r){var n=i.parseToken(r);if(o.Text===n.type)return a=n.pattern+a,void(f=!1);if(o.Variable!==n.type);else{var c=s.defaults&&n.name in s.defaults;if(!1===f||!c||n.name in t&&t[n.name]!=s.defaults[n.name]){var p=void 0;if(n.name in t)p=t[n.name],delete u[n.name];else{if(!c){if(f)return;throw new Error('The route "'+e+'" requires the parameter "'+n.name+'".')}p=s.defaults[n.name]}if(!(!0===p||!1===p||""===p)||!f){var h=encodeURIComponent(p).replace(/%2F/g,"/");"null"===h&&null===p&&(h=""),a=n.prefix+h+a}f=!1}else c&&n.name in u&&delete u[n.name]}})),""===a&&(a="/"),Array.isArray(s.hosttokens)&&s.hosttokens.forEach((function(e){var r,n=i.parseToken(e);o.Text!==n.type?o.Variable===n.type&&(n.name in t?(r=t[n.name],delete u[n.name]):s.defaults&&n.name in s.defaults&&(r=s.defaults[n.name]),c=n.prefix+r+c):c=n.pattern+c})),a=this.getBaseUrl()+a,s.requirements&&"_scheme"in s.requirements&&this.getScheme()!=s.requirements._scheme?a=s.requirements._scheme+"://"+(c||this.getHost())+a:void 0!==s.schemes&&void 0!==s.schemes[0]&&this.getScheme()!==s.schemes[0]?a=s.schemes[0]+"://"+(c||this.getHost())+a:c&&this.getHost()!==c?a=this.getScheme()+"://"+c+a:!0===r&&(a=this.getScheme()+"://"+this.getHost()+a),Object.keys(u).length>0){var p=[],h=function(e,t){t=null===(t="function"==typeof t?t():t)?"":t,p.push(encodeURIComponent(e)+"="+encodeURIComponent(t))};for(var l in u)this.buildQueryParams(l,u[l],h);a=a+"?"+p.join("&").replace(/%20/g,"+")}return a},e.prototype.buildQueryParams=function(e,t,r){var n=this,o=new RegExp(/\[\]$/);if(t instanceof Array)t.forEach((function(t,i){o.test(e)?r(e,t):n.buildQueryParams(e+"["+("object"==typeof t?i:"")+"]",t,r)}));else if("object"==typeof t)for(var i in t)this.buildQueryParams(e+"["+i+"]",t[i],r);else r(e,t)},e.prototype.parseToken=function(e){var t,r,n,i;switch(e[0]){case o.Text:t=e[0],n=e[1];break;case o.Variable:t=e[0],r=e[1],n=e[2],i=e[3];break;default:throw new Error('The token type "'+t+'" is not supported.')}return{type:t,prefix:r,pattern:n,name:i}},e}();t.Router=i,function(e){e.Text="text",e.Variable="variable"}(o=t.TokenType||(t.TokenType={}))}])}));
//# sourceMappingURL=router.js.map