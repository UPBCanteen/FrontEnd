if(!self.define){let e,s={};const i=(i,n)=>(i=new URL(i+".js",n).href,s[i]||new Promise((s=>{if("document"in self){const e=document.createElement("script");e.src=i,e.onload=s,document.head.appendChild(e)}else e=i,importScripts(i),s()})).then((()=>{let e=s[i];if(!e)throw new Error(`Module ${i} didn’t register its module`);return e})));self.define=(n,t)=>{const o=e||("document"in self?document.currentScript.src:"")||location.href;if(s[o])return;let r={};const l=e=>i(e,o),f={module:{uri:o},exports:r,require:l};s[o]=Promise.all(n.map((e=>f[e]||l(e)))).then((e=>(t(...e),r)))}}define(["./workbox-db5fc017"],(function(e){"use strict";e.setCacheNameDetails({prefix:"polifood-frontend"}),self.addEventListener("message",(e=>{e.data&&"SKIP_WAITING"===e.data.type&&self.skipWaiting()})),e.precacheAndRoute([{url:"/index.html",revision:"a5f739aad137628ea0b26abc27cf4607"},{url:"/manifest.json",revision:"2af5e1e98d3ca28613190ae5e0778996"},{url:"/static/css/app.7d502a89.css",revision:null},{url:"/static/css/chunk-vendors.49fbbefd.css",revision:null},{url:"/static/fonts/materialdesignicons-webfont.21f691f0.ttf",revision:null},{url:"/static/fonts/materialdesignicons-webfont.54b0f60d.woff2",revision:null},{url:"/static/fonts/materialdesignicons-webfont.5d875350.eot",revision:null},{url:"/static/fonts/materialdesignicons-webfont.d671cbf6.woff",revision:null},{url:"/static/js/app.f7873c32.js",revision:null},{url:"/static/js/chunk-vendors.081f2335.js",revision:null}],{})}));
//# sourceMappingURL=service-worker.js.map