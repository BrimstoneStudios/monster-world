!function(e){function n(e){delete installedChunks[e]}function r(e){var n=document.getElementsByTagName("head")[0],r=document.createElement("script");r.type="text/javascript",r.charset="utf-8",r.src=f.p+""+e+"."+v+".hot-update.js",n.appendChild(r)}function t(){return new Promise(function(e,n){if("undefined"==typeof XMLHttpRequest)return n(new Error("No browser support"));try{var r=new XMLHttpRequest,t=f.p+""+v+".hot-update.json";r.open("GET",t,!0),r.timeout=1e4,r.send(null)}catch(e){return n(e)}r.onreadystatechange=function(){if(4===r.readyState)if(0===r.status)n(new Error("Manifest request to "+t+" timed out."));else if(404===r.status)e();else if(200!==r.status&&304!==r.status)n(new Error("Manifest request to "+t+" failed."));else{try{var o=JSON.parse(r.responseText)}catch(e){return void n(e)}e(o)}}})}function o(e){var n=I[e];if(!n)return f;var r=function(r){return n.hot.active?(I[r]?I[r].parents.indexOf(e)<0&&I[r].parents.push(e):O=[e],n.children.indexOf(r)<0&&n.children.push(r)):(console.warn("[HMR] unexpected require("+r+") from disposed module "+e),O=[]),w=!1,f(r)};for(var t in f)Object.prototype.hasOwnProperty.call(f,t)&&Object.defineProperty(r,t,function(e){return{configurable:!0,enumerable:!0,get:function(){return f[e]},set:function(n){f[e]=n}}}(t));return Object.defineProperty(r,"e",{enumerable:!0,value:function(e){function n(){x--,"prepare"===D&&(H[e]||s(e),0===x&&0===E&&u())}return"ready"===D&&a("prepare"),x++,f.e(e).then(n,function(e){throw n(),e})}}),r}function d(e){var n={_acceptedDependencies:{},_declinedDependencies:{},_selfAccepted:!1,_selfDeclined:!1,_disposeHandlers:[],_main:w,active:!0,accept:function(e,r){if(void 0===e)n._selfAccepted=!0;else if("function"==typeof e)n._selfAccepted=e;else if("object"==typeof e)for(var t=0;t<e.length;t++)n._acceptedDependencies[e[t]]=r||function(){};else n._acceptedDependencies[e]=r||function(){}},decline:function(e){if(void 0===e)n._selfDeclined=!0;else if("object"==typeof e)for(var r=0;r<e.length;r++)n._declinedDependencies[e[r]]=!0;else n._declinedDependencies[e]=!0},dispose:function(e){n._disposeHandlers.push(e)},addDisposeHandler:function(e){n._disposeHandlers.push(e)},removeDisposeHandler:function(e){var r=n._disposeHandlers.indexOf(e);r>=0&&n._disposeHandlers.splice(r,1)},check:c,apply:p,status:function(e){if(!e)return D;g.push(e)},addStatusHandler:function(e){g.push(e)},removeStatusHandler:function(e){var n=g.indexOf(e);n>=0&&g.splice(n,1)},data:_[e]};return w=!0,n}function a(e){D=e;for(var n=0;n<g.length;n++)g[n].call(null,e)}function i(e){return+e+""===e?+e:e}function c(e){if("idle"!==D)throw new Error("check() is only allowed in idle status");return b=e,a("check"),t().then(function(e){if(!e)return a("idle"),null;P={},H={},k=e.c,j=e.h,a("prepare");var n=new Promise(function(e,n){m={resolve:e,reject:n}});y={};return s(0),"prepare"===D&&0===x&&0===E&&u(),n})}function l(e,n){if(k[e]&&P[e]){P[e]=!1;for(var r in n)Object.prototype.hasOwnProperty.call(n,r)&&(y[r]=n[r]);0==--E&&0===x&&u()}}function s(e){k[e]?(P[e]=!0,E++,r(e)):H[e]=!0}function u(){a("ready");var e=m;if(m=null,e)if(b)p(b).then(function(n){e.resolve(n)},function(n){e.reject(n)});else{var n=[];for(var r in y)Object.prototype.hasOwnProperty.call(y,r)&&n.push(i(r));e.resolve(n)}}function p(r){function t(e,n){for(var r=0;r<n.length;r++){var t=n[r];e.indexOf(t)<0&&e.push(t)}}if("ready"!==D)throw new Error("apply() is only allowed in ready status");r=r||{};var o,d,c,l,s,u={},p=[],h={},m=function(){console.warn("[HMR] unexpected require("+w.moduleId+") to disposed module")};for(var b in y)if(Object.prototype.hasOwnProperty.call(y,b)){s=i(b);var w;w=y[b]?function(e){for(var n=[e],r={},o=n.slice().map(function(e){return{chain:[e],id:e}});o.length>0;){var d=o.pop(),a=d.id,i=d.chain;if((l=I[a])&&!l.hot._selfAccepted){if(l.hot._selfDeclined)return{type:"self-declined",chain:i,moduleId:a};if(l.hot._main)return{type:"unaccepted",chain:i,moduleId:a};for(var c=0;c<l.parents.length;c++){var s=l.parents[c],u=I[s];if(u){if(u.hot._declinedDependencies[a])return{type:"declined",chain:i.concat([s]),moduleId:a,parentId:s};n.indexOf(s)>=0||(u.hot._acceptedDependencies[a]?(r[s]||(r[s]=[]),t(r[s],[a])):(delete r[s],n.push(s),o.push({chain:i.concat([s]),id:s})))}}}}return{type:"accepted",moduleId:e,outdatedModules:n,outdatedDependencies:r}}(s):{type:"disposed",moduleId:b};var M=!1,g=!1,E=!1,x="";switch(w.chain&&(x="\nUpdate propagation: "+w.chain.join(" -> ")),w.type){case"self-declined":r.onDeclined&&r.onDeclined(w),r.ignoreDeclined||(M=new Error("Aborted because of self decline: "+w.moduleId+x));break;case"declined":r.onDeclined&&r.onDeclined(w),r.ignoreDeclined||(M=new Error("Aborted because of declined dependency: "+w.moduleId+" in "+w.parentId+x));break;case"unaccepted":r.onUnaccepted&&r.onUnaccepted(w),r.ignoreUnaccepted||(M=new Error("Aborted because "+s+" is not accepted"+x));break;case"accepted":r.onAccepted&&r.onAccepted(w),g=!0;break;case"disposed":r.onDisposed&&r.onDisposed(w),E=!0;break;default:throw new Error("Unexception type "+w.type)}if(M)return a("abort"),Promise.reject(M);if(g){h[s]=y[s],t(p,w.outdatedModules);for(s in w.outdatedDependencies)Object.prototype.hasOwnProperty.call(w.outdatedDependencies,s)&&(u[s]||(u[s]=[]),t(u[s],w.outdatedDependencies[s]))}E&&(t(p,[w.moduleId]),h[s]=m)}var H=[];for(d=0;d<p.length;d++)s=p[d],I[s]&&I[s].hot._selfAccepted&&H.push({module:s,errorHandler:I[s].hot._selfAccepted});a("dispose"),Object.keys(k).forEach(function(e){k[e]===!1&&n(e)});for(var P,q=p.slice();q.length>0;)if(s=q.pop(),l=I[s]){var A={},U=l.hot._disposeHandlers;for(c=0;c<U.length;c++)(o=U[c])(A);for(_[s]=A,l.hot.active=!1,delete I[s],c=0;c<l.children.length;c++){var S=I[l.children[c]];S&&((P=S.parents.indexOf(s))>=0&&S.parents.splice(P,1))}}var F,L;for(s in u)if(Object.prototype.hasOwnProperty.call(u,s)&&(l=I[s]))for(L=u[s],c=0;c<L.length;c++)F=L[c],(P=l.children.indexOf(F))>=0&&l.children.splice(P,1);a("apply"),v=j;for(s in h)Object.prototype.hasOwnProperty.call(h,s)&&(e[s]=h[s]);var R=null;for(s in u)if(Object.prototype.hasOwnProperty.call(u,s)){l=I[s],L=u[s];var C=[];for(d=0;d<L.length;d++)F=L[d],o=l.hot._acceptedDependencies[F],C.indexOf(o)>=0||C.push(o);for(d=0;d<C.length;d++){o=C[d];try{o(L)}catch(e){r.onErrored&&r.onErrored({type:"accept-errored",moduleId:s,dependencyId:L[d],error:e}),r.ignoreErrored||R||(R=e)}}}for(d=0;d<H.length;d++){var N=H[d];s=N.module,O=[s];try{f(s)}catch(e){if("function"==typeof N.errorHandler)try{N.errorHandler(e)}catch(n){r.onErrored&&r.onErrored({type:"self-accept-error-handler-errored",moduleId:s,error:n,orginalError:e}),r.ignoreErrored||R||(R=n),R||(R=e)}else r.onErrored&&r.onErrored({type:"self-accept-errored",moduleId:s,error:e}),r.ignoreErrored||R||(R=e)}}return R?(a("fail"),Promise.reject(R)):(a("idle"),Promise.resolve(p))}function f(n){if(I[n])return I[n].exports;var r=I[n]={i:n,l:!1,exports:{},hot:d(n),parents:(M=O,O=[],M),children:[]};return e[n].call(r.exports,r,r.exports,o(n)),r.l=!0,r.exports}var h=this.webpackHotUpdate;this.webpackHotUpdate=function(e,n){l(e,n),h&&h(e,n)};var m,y,j,b=!0,v="209e97555eb553ed2396",_={},w=!0,O=[],M=[],g=[],D="idle",E=0,x=0,H={},P={},k={},I={};f.m=e,f.c=I,f.i=function(e){return e},f.d=function(e,n,r){f.o(e,n)||Object.defineProperty(e,n,{configurable:!1,enumerable:!0,get:r})},f.n=function(e){var n=e&&e.__esModule?function(){return e.default}:function(){return e};return f.d(n,"a",n),n},f.o=function(e,n){return Object.prototype.hasOwnProperty.call(e,n)},f.p="dist",f.h=function(){return v},o(0)(f.s=0)}([function(e,n){throw new Error("Module build failed: Error: Cannot find module 'core-js/library/fn/get-iterator'\n    at Function.Module._resolveFilename (module.js:470:15)\n    at Function.Module._load (module.js:418:25)\n    at Module.require (module.js:498:17)\n    at require (internal/module.js:20:19)\n    at Object.<anonymous> (/Users/frankymac/Sites/monster-world/node_modules/babel-core/node_modules/babel-runtime/core-js/get-iterator.js:1:93)\n    at Module._compile (module.js:571:32)\n    at Object.Module._extensions..js (module.js:580:10)\n    at Module.load (module.js:488:32)\n    at tryModuleLoad (module.js:447:12)\n    at Function.Module._load (module.js:439:3)\n    at Module.require (module.js:498:17)\n    at require (internal/module.js:20:19)\n    at Object.<anonymous> (/Users/frankymac/Sites/monster-world/node_modules/babel-core/lib/transformation/file/index.js:6:21)\n    at Module._compile (module.js:571:32)\n    at Object.Module._extensions..js (module.js:580:10)\n    at Module.load (module.js:488:32)\n    at tryModuleLoad (module.js:447:12)\n    at Function.Module._load (module.js:439:3)\n    at Module.require (module.js:498:17)\n    at require (internal/module.js:20:19)\n    at Object.<anonymous> (/Users/frankymac/Sites/monster-world/node_modules/babel-core/lib/api/node.js:6:13)\n    at Module._compile (module.js:571:32)\n    at Object.Module._extensions..js (module.js:580:10)\n    at Module.load (module.js:488:32)\n    at tryModuleLoad (module.js:447:12)\n    at Function.Module._load (module.js:439:3)\n    at Module.require (module.js:498:17)\n    at require (internal/module.js:20:19)\n    at Object.<anonymous> (/Users/frankymac/Sites/monster-world/node_modules/babel-core/index.js:1:80)\n    at Module._compile (module.js:571:32)")}]);
//# sourceMappingURL=bundle.js.map