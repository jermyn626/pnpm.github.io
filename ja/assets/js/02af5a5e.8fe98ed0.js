"use strict";(self.webpackChunk=self.webpackChunk||[]).push([[9109],{9613:(e,t,r)=>{r.d(t,{Zo:()=>s,kt:()=>k});var n=r(9496);function l(e,t,r){return t in e?Object.defineProperty(e,t,{value:r,enumerable:!0,configurable:!0,writable:!0}):e[t]=r,e}function o(e,t){var r=Object.keys(e);if(Object.getOwnPropertySymbols){var n=Object.getOwnPropertySymbols(e);t&&(n=n.filter((function(t){return Object.getOwnPropertyDescriptor(e,t).enumerable}))),r.push.apply(r,n)}return r}function a(e){for(var t=1;t<arguments.length;t++){var r=null!=arguments[t]?arguments[t]:{};t%2?o(Object(r),!0).forEach((function(t){l(e,t,r[t])})):Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(r)):o(Object(r)).forEach((function(t){Object.defineProperty(e,t,Object.getOwnPropertyDescriptor(r,t))}))}return e}function p(e,t){if(null==e)return{};var r,n,l=function(e,t){if(null==e)return{};var r,n,l={},o=Object.keys(e);for(n=0;n<o.length;n++)r=o[n],t.indexOf(r)>=0||(l[r]=e[r]);return l}(e,t);if(Object.getOwnPropertySymbols){var o=Object.getOwnPropertySymbols(e);for(n=0;n<o.length;n++)r=o[n],t.indexOf(r)>=0||Object.prototype.propertyIsEnumerable.call(e,r)&&(l[r]=e[r])}return l}var i=n.createContext({}),u=function(e){var t=n.useContext(i),r=t;return e&&(r="function"==typeof e?e(t):a(a({},t),e)),r},s=function(e){var t=u(e.components);return n.createElement(i.Provider,{value:t},e.children)},c={inlineCode:"code",wrapper:function(e){var t=e.children;return n.createElement(n.Fragment,{},t)}},m=n.forwardRef((function(e,t){var r=e.components,l=e.mdxType,o=e.originalType,i=e.parentName,s=p(e,["components","mdxType","originalType","parentName"]),m=u(r),k=l,v=m["".concat(i,".").concat(k)]||m[k]||c[k]||o;return r?n.createElement(v,a(a({ref:t},s),{},{components:r})):n.createElement(v,a({ref:t},s))}));function k(e,t){var r=arguments,l=t&&t.mdxType;if("string"==typeof e||l){var o=r.length,a=new Array(o);a[0]=m;var p={};for(var i in t)hasOwnProperty.call(t,i)&&(p[i]=t[i]);p.originalType=e,p.mdxType="string"==typeof e?e:l,a[1]=p;for(var u=2;u<o;u++)a[u]=r[u];return n.createElement.apply(null,a)}return n.createElement.apply(null,r)}m.displayName="MDXCreateElement"},2529:(e,t,r)=>{r.r(t),r.d(t,{frontMatter:()=>p,contentTitle:()=>i,metadata:()=>u,assets:()=>s,toc:()=>c,default:()=>k});var n=r(7813),l=r(7044),o=(r(9496),r(9613)),a=["components"],p={id:"server",title:"pnpm server"},i=void 0,u={unversionedId:"cli/server",id:"cli/server",title:"pnpm server",description:"\u8ffd\u52a0\u3055\u308c\u305f\u30d0\u30fc\u30b8\u30e7\u30f3\uff1av1.30.0",source:"@site/i18n/ja/docusaurus-plugin-content-docs/current/cli/server.md",sourceDirName:"cli",slug:"/cli/server",permalink:"/ja/next/cli/server",editUrl:"https://crowdin.com/project/pnpm/ja",tags:[],version:"current",frontMatter:{id:"server",title:"pnpm server"},sidebar:"docs",previous:{title:"pnpm -r, --recursive",permalink:"/ja/next/cli/recursive"},next:{title:"pnpm store",permalink:"/ja/next/cli/store"}},s={},c=[{value:"\u30b3\u30de\u30f3\u30c9",id:"\u30b3\u30de\u30f3\u30c9",level:2},{value:"pnpm server start",id:"pnpm-server-start",level:3},{value:"pnpm server stop",id:"pnpm-server-stop",level:3},{value:"pnpm server status",id:"pnpm-server-status",level:3},{value:"Options",id:"options",level:2},{value:"--background",id:"--background",level:3},{value:"--network-concurrency",id:"--network-concurrency",level:3},{value:"--protocol",id:"--protocol",level:3},{value:"--port",id:"--port",level:3},{value:"--store-dir",id:"--store-dir",level:3},{value:"--no-lock",id:"--no-lock",level:3},{value:"--ignore-stop-requests",id:"--ignore-stop-requests",level:3},{value:"--ignore-upload-requests",id:"--ignore-upload-requests",level:3}],m={toc:c};function k(e){var t=e.components,r=(0,l.Z)(e,a);return(0,o.kt)("wrapper",(0,n.Z)({},m,r,{components:t,mdxType:"MDXLayout"}),(0,o.kt)("p",null,"\u8ffd\u52a0\u3055\u308c\u305f\u30d0\u30fc\u30b8\u30e7\u30f3\uff1av1.30.0"),(0,o.kt)("p",null,"\u30b9\u30c8\u30a2\u30fb\u30b5\u30fc\u30d0\u30fc\u306e\u7ba1\u7406\u3002"),(0,o.kt)("h2",{id:"\u30b3\u30de\u30f3\u30c9"},"\u30b3\u30de\u30f3\u30c9"),(0,o.kt)("h3",{id:"pnpm-server-start"},"pnpm server start"),(0,o.kt)("p",null,"\u30b9\u30c8\u30a2\u30b5\u30fc\u30d0\u30fc\u3092\u8d77\u52d5\u3057\u307e\u3059\u3002\u3053\u308c\u306f\u30b9\u30c8\u30a2\u3068\u306e\u3059\u3079\u3066\u306e\u5bfe\u8a71\u3092\u5b9f\u884c\u3057\u307e\u3059\u3002 \u4ed6\u306e\u30b3\u30de\u30f3\u30c9\u306f\u3001\u30b9\u30c8\u30a2\u95a2\u9023\u306e\u30bf\u30b9\u30af\u3092\u5168\u3066\u3053\u306e\u30b5\u30fc\u30d0\u30fc\u306b\u59d4\u4efb\u3057\u307e\u3059\u3002"),(0,o.kt)("h3",{id:"pnpm-server-stop"},"pnpm server stop"),(0,o.kt)("p",null,"\u30b9\u30c8\u30a2\u30b5\u30fc\u30d0\u30fc\u3092\u505c\u6b62\u3057\u307e\u3059\u3002"),(0,o.kt)("h3",{id:"pnpm-server-status"},"pnpm server status"),(0,o.kt)("p",null,"\u5b9f\u884c\u4e2d\u306e\u30b5\u30fc\u30d0\u30fc\u306b\u95a2\u3059\u308b\u60c5\u5831\u3092\u8868\u793a\u3057\u307e\u3059\u3002"),(0,o.kt)("h2",{id:"options"},"Options"),(0,o.kt)("h3",{id:"--background"},"--background"),(0,o.kt)("ul",null,(0,o.kt)("li",{parentName:"ul"},"\u30c7\u30d5\u30a9\u30eb\u30c8: ",(0,o.kt)("strong",{parentName:"li"},"false")),(0,o.kt)("li",{parentName:"ul"},"\u30bf\u30a4\u30d7: ",(0,o.kt)("strong",{parentName:"li"},"Boolean"))),(0,o.kt)("p",null,"UNIX\u30b7\u30b9\u30c6\u30e0\u3067\u306e\u30c7\u30fc\u30e2\u30f3\u5316\u306e\u3088\u3046\u306b\u3001\u30b5\u30fc\u30d0\u30fc\u3092\u30d0\u30c3\u30af\u30b0\u30e9\u30a6\u30f3\u30c9\u3067\u5b9f\u884c\u3057\u307e\u3059\u3002"),(0,o.kt)("h3",{id:"--network-concurrency"},"--network-concurrency"),(0,o.kt)("ul",null,(0,o.kt)("li",{parentName:"ul"},"\u30c7\u30d5\u30a9\u30eb\u30c8: ",(0,o.kt)("strong",{parentName:"li"},"null")),(0,o.kt)("li",{parentName:"ul"},"\u30bf\u30a4\u30d7: ",(0,o.kt)("strong",{parentName:"li"},"Number"))),(0,o.kt)("p",null,"\u540c\u6642\u306b\u51e6\u7406\u3059\u308b\u30cd\u30c3\u30c8\u30ef\u30fc\u30af\u30ea\u30af\u30a8\u30b9\u30c8\u306e\u6700\u5927\u6570\u3002"),(0,o.kt)("h3",{id:"--protocol"},"--protocol"),(0,o.kt)("ul",null,(0,o.kt)("li",{parentName:"ul"},"\u30c7\u30d5\u30a9\u30eb\u30c8: ",(0,o.kt)("strong",{parentName:"li"},"auto")),(0,o.kt)("li",{parentName:"ul"},"\u30bf\u30a4\u30d7: ",(0,o.kt)("strong",{parentName:"li"},"auto"),", ",(0,o.kt)("strong",{parentName:"li"},"tcp"),", ",(0,o.kt)("strong",{parentName:"li"},"ipc"))),(0,o.kt)("p",null,"\u30b5\u30fc\u30d0\u30fc\u304c\u4f7f\u7528\u3059\u308b\u901a\u4fe1\u30d7\u30ed\u30c8\u30b3\u30eb\u3002 \u3053\u308c\u3092 ",(0,o.kt)("inlineCode",{parentName:"p"},"auto")," \u306b\u8a2d\u5b9a\u3059\u308b\u3068\u3001TCP\u3092\u4f7f\u7528\u3059\u308bWindows\u3092\u9664\u304d\u3001\u5168\u3066\u306e\u30b7\u30b9\u30c6\u30e0\u3067IPC\u304c\u4f7f\u7528\u3055\u308c\u307e\u3059\u3002"),(0,o.kt)("h3",{id:"--port"},"--port"),(0,o.kt)("ul",null,(0,o.kt)("li",{parentName:"ul"},"\u30c7\u30d5\u30a9\u30eb\u30c8: ",(0,o.kt)("strong",{parentName:"li"},"5813")),(0,o.kt)("li",{parentName:"ul"},"\u30bf\u30a4\u30d7: ",(0,o.kt)("strong",{parentName:"li"},"\u30dd\u30fc\u30c8\u756a\u53f7"))),(0,o.kt)("p",null,"TCP\u304c\u901a\u4fe1\u306b\u4f7f\u7528\u3055\u308c\u308b\u3068\u304d\u306b\u4f7f\u7528\u3059\u308b\u30dd\u30fc\u30c8\u756a\u53f7\u3002 \u30dd\u30fc\u30c8\u304c\u6307\u5b9a\u3055\u308c\u3001\u30d7\u30ed\u30c8\u30b3\u30eb\u304c ",(0,o.kt)("inlineCode",{parentName:"p"},"auto")," \u306b\u8a2d\u5b9a\u3055\u308c\u3066\u3044\u308b\u5834\u5408\u3001\u30b7\u30b9\u30c6\u30e0 \u306e\u30bf\u30a4\u30d7\u306b\u95a2\u4fc2\u306a\u304f\u3001TCP\u3092\u4f7f\u7528\u3059\u308b\u3088\u3046\u306b\u81ea\u52d5\u7684\u306b\u8a2d\u5b9a\u3055\u308c\u307e\u3059\u3002"),(0,o.kt)("h3",{id:"--store-dir"},"--store-dir"),(0,o.kt)("ul",null,(0,o.kt)("li",{parentName:"ul"},"\u30c7\u30d5\u30a9\u30eb\u30c8: ",(0,o.kt)("strong",{parentName:"li"},"<","home",">","/.pnpm-store")),(0,o.kt)("li",{parentName:"ul"},"\u30bf\u30a4\u30d7: ",(0,o.kt)("strong",{parentName:"li"},"Path"))),(0,o.kt)("p",null,"\u8ffd\u52a0\u3055\u308c\u305f\u30d0\u30fc\u30b8\u30e7\u30f3: v1 \u3067 ",(0,o.kt)("inlineCode",{parentName:"p"},"store")," \u3068\u3057\u3066\u8ffd\u52a0"),(0,o.kt)("p",null,"\u30a2\u30c9\u30ec\u30b9\u53ef\u80fd\u306a\u30b3\u30f3\u30c6\u30f3\u30c4\u306e\u30b9\u30c8\u30a2\u306b\u4f7f\u7528\u3055\u308c\u308b\u30d5\u30a9\u30eb\u30c0\u30fc\u3002"),(0,o.kt)("h3",{id:"--no-lock"},"--","[no-]","lock"),(0,o.kt)("ul",null,(0,o.kt)("li",{parentName:"ul"},"\u30c7\u30d5\u30a9\u30eb\u30c8: ",(0,o.kt)("strong",{parentName:"li"},"false")),(0,o.kt)("li",{parentName:"ul"},"\u30bf\u30a4\u30d7: ",(0,o.kt)("strong",{parentName:"li"},"Boolean"))),(0,o.kt)("p",null,"\u30b5\u30fc\u30d0\u30fc\u306e\u5b9f\u884c\u4e2d\u306b\u30d1\u30c3\u30b1\u30fc\u30b8\u30b9\u30c8\u30a2\u3092\u5916\u90e8\u30d7\u30ed\u30bb\u30b9\u306b\u5bfe\u3057\u3066\u4e0d\u5909\u306b\u3059\u308b\u304b\u3069\u3046\u304b\u3092\u8a2d\u5b9a\u3057\u307e\u3059\u3002"),(0,o.kt)("h3",{id:"--ignore-stop-requests"},"--ignore-stop-requests"),(0,o.kt)("ul",null,(0,o.kt)("li",{parentName:"ul"},"\u30c7\u30d5\u30a9\u30eb\u30c8: ",(0,o.kt)("strong",{parentName:"li"},"false")),(0,o.kt)("li",{parentName:"ul"},"\u30bf\u30a4\u30d7: ",(0,o.kt)("strong",{parentName:"li"},"Boolean"))),(0,o.kt)("p",null,(0,o.kt)("inlineCode",{parentName:"p"},"pnpm server stop")," \u3092\u4f7f\u7528\u3057\u3066\u30b5\u30fc\u30d0\u30fc\u3092\u505c\u6b62\u3067\u304d\u306a\u3044\u3088\u3046\u306b\u3057\u307e\u3059\u3002"),(0,o.kt)("h3",{id:"--ignore-upload-requests"},"--ignore-upload-requests"),(0,o.kt)("ul",null,(0,o.kt)("li",{parentName:"ul"},"\u30c7\u30d5\u30a9\u30eb\u30c8: ",(0,o.kt)("strong",{parentName:"li"},"false")),(0,o.kt)("li",{parentName:"ul"},"\u30bf\u30a4\u30d7: ",(0,o.kt)("strong",{parentName:"li"},"Boolean"))),(0,o.kt)("p",null,"\u30a4\u30f3\u30b9\u30c8\u30fc\u30eb\u4e2d\u306b\u65b0\u3057\u3044\u4e0d\u8981\u306a\u30ad\u30e3\u30c3\u30b7\u30e5\u304c\u4f5c\u6210\u3055\u308c\u308b\u306e\u3092\u9632\u304e\u307e\u3059\u3002"))}k.isMDXComponent=!0}}]);