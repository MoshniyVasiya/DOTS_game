"use strict";var precacheConfig=[["/DOTS_game/g.f0bbcc67.jpg","e17889cdd15caf44da4ecb1816fa1578"],["/DOTS_game/icon-128x128.102ed8c2.png","90e621a301186952b53faf0caed159a3"],["/DOTS_game/icon-144x144.aeb4f1b3.png","a5d7ce19f7d8838ac05ae7d1be15e867"],["/DOTS_game/icon-152x152.88a0cfcf.png","99ce024397f0538210ab0eb88c76a20e"],["/DOTS_game/icon-192x192.a67b4820.png","1dc48a8a7dd02509282672850218a3ec"],["/DOTS_game/icon-384x384.a4852866.png","0142f31b0621a378ffdc67503a18932b"],["/DOTS_game/icon-512x512.f1e917eb.png","005a62ae7b3370a522e369ed6887790c"],["/DOTS_game/icon-72x72.4e5861d5.png","7577f26309c595c68581242dee447b9c"],["/DOTS_game/icon-96x96.892f6488.png","24b166b21c173befb6cc6be88f2a4f6f"],["/DOTS_game/index.html","81a796ab1e91fcebb7b5f4458aad75b8"],["/DOTS_game/normalize.01fa9565.css","283b9ae42c14e1a1e9f0841f6e5db707"],["/DOTS_game/src_copy.3be3495a.js","eb3998e4b76a3e10305f617c477ce9f8"],["/DOTS_game/style_copy.1bd8d7f9.css","c14a2809ee18f41ffc415bd0680a275f"]],cacheName="sw-precache-v3-y-"+(self.registration?self.registration.scope:""),ignoreUrlParametersMatching=[/^utm_/],addDirectoryIndex=function(e,n){var t=new URL(e);return"/"===t.pathname.slice(-1)&&(t.pathname+=n),t.toString()},cleanResponse=function(e){return e.redirected?("body"in e?Promise.resolve(e.body):e.blob()).then(function(n){return new Response(n,{headers:e.headers,status:e.status,statusText:e.statusText})}):Promise.resolve(e)},createCacheKey=function(e,n,t,a){var r=new URL(e);return a&&r.pathname.match(a)||(r.search+=(r.search?"&":"")+encodeURIComponent(n)+"="+encodeURIComponent(t)),r.toString()},isPathWhitelisted=function(e,n){if(0===e.length)return!0;var t=new URL(n).pathname;return e.some(function(e){return t.match(e)})},stripIgnoredUrlParameters=function(e,n){var t=new URL(e);return t.hash="",t.search=t.search.slice(1).split("&").map(function(e){return e.split("=")}).filter(function(e){return n.every(function(n){return!n.test(e[0])})}).map(function(e){return e.join("=")}).join("&"),t.toString()},hashParamName="_sw-precache",urlsToCacheKeys=new Map(precacheConfig.map(function(e){var n=e[0],t=e[1],a=new URL(n,self.location),r=createCacheKey(a,hashParamName,t,/\.\w{8}\./);return[a.toString(),r]}));function setOfCachedUrls(e){return e.keys().then(function(e){return e.map(function(e){return e.url})}).then(function(e){return new Set(e)})}self.addEventListener("install",function(e){e.waitUntil(caches.open(cacheName).then(function(e){return setOfCachedUrls(e).then(function(n){return Promise.all(Array.from(urlsToCacheKeys.values()).map(function(t){if(!n.has(t)){var a=new Request(t,{credentials:"same-origin"});return fetch(a).then(function(n){if(!n.ok)throw new Error("Request for "+t+" returned a response with status "+n.status);return cleanResponse(n).then(function(n){return e.put(t,n)})})}}))})}).then(function(){return self.skipWaiting()}))}),self.addEventListener("activate",function(e){var n=new Set(urlsToCacheKeys.values());e.waitUntil(caches.open(cacheName).then(function(e){return e.keys().then(function(t){return Promise.all(t.map(function(t){if(!n.has(t.url))return e.delete(t)}))})}).then(function(){return self.clients.claim()}))}),self.addEventListener("fetch",function(e){if("GET"===e.request.method){var n,t=stripIgnoredUrlParameters(e.request.url,ignoreUrlParametersMatching);(n=urlsToCacheKeys.has(t))||(t=addDirectoryIndex(t,"index.html"),n=urlsToCacheKeys.has(t));!n&&"navigate"===e.request.mode&&isPathWhitelisted(["^(?!\\/__).*"],e.request.url)&&(t=new URL("/DOTS_game/index.html",self.location).toString(),n=urlsToCacheKeys.has(t)),n&&e.respondWith(caches.open(cacheName).then(function(e){return e.match(urlsToCacheKeys.get(t)).then(function(e){if(e)return e;throw Error("The cached response that was expected is missing.")})}).catch(function(n){return console.warn('Couldn\'t serve response for "%s" from cache: %O',e.request.url,n),fetch(e.request)}))}});