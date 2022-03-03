"use strict";(self.webpackChunk=self.webpackChunk||[]).push([[5171],{9613:(e,n,t)=>{t.d(n,{Zo:()=>s,kt:()=>m});var r=t(9496);function l(e,n,t){return n in e?Object.defineProperty(e,n,{value:t,enumerable:!0,configurable:!0,writable:!0}):e[n]=t,e}function a(e,n){var t=Object.keys(e);if(Object.getOwnPropertySymbols){var r=Object.getOwnPropertySymbols(e);n&&(r=r.filter((function(n){return Object.getOwnPropertyDescriptor(e,n).enumerable}))),t.push.apply(t,r)}return t}function o(e){for(var n=1;n<arguments.length;n++){var t=null!=arguments[n]?arguments[n]:{};n%2?a(Object(t),!0).forEach((function(n){l(e,n,t[n])})):Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(t)):a(Object(t)).forEach((function(n){Object.defineProperty(e,n,Object.getOwnPropertyDescriptor(t,n))}))}return e}function p(e,n){if(null==e)return{};var t,r,l=function(e,n){if(null==e)return{};var t,r,l={},a=Object.keys(e);for(r=0;r<a.length;r++)t=a[r],n.indexOf(t)>=0||(l[t]=e[t]);return l}(e,n);if(Object.getOwnPropertySymbols){var a=Object.getOwnPropertySymbols(e);for(r=0;r<a.length;r++)t=a[r],n.indexOf(t)>=0||Object.prototype.propertyIsEnumerable.call(e,t)&&(l[t]=e[t])}return l}var i=r.createContext({}),c=function(e){var n=r.useContext(i),t=n;return e&&(t="function"==typeof e?e(n):o(o({},n),e)),t},s=function(e){var n=c(e.components);return r.createElement(i.Provider,{value:n},e.children)},u={inlineCode:"code",wrapper:function(e){var n=e.children;return r.createElement(r.Fragment,{},n)}},d=r.forwardRef((function(e,n){var t=e.components,l=e.mdxType,a=e.originalType,i=e.parentName,s=p(e,["components","mdxType","originalType","parentName"]),d=c(t),m=l,v=d["".concat(i,".").concat(m)]||d[m]||u[m]||a;return t?r.createElement(v,o(o({ref:n},s),{},{components:t})):r.createElement(v,o({ref:n},s))}));function m(e,n){var t=arguments,l=n&&n.mdxType;if("string"==typeof e||l){var a=t.length,o=new Array(a);o[0]=d;var p={};for(var i in n)hasOwnProperty.call(n,i)&&(p[i]=n[i]);p.originalType=e,p.mdxType="string"==typeof e?e:l,o[1]=p;for(var c=2;c<a;c++)o[c]=t[c];return r.createElement.apply(null,o)}return r.createElement.apply(null,t)}d.displayName="MDXCreateElement"},1052:(e,n,t)=>{t.r(n),t.d(n,{frontMatter:()=>p,contentTitle:()=>i,metadata:()=>c,assets:()=>s,toc:()=>u,default:()=>m});var r=t(7813),l=t(7044),a=(t(9496),t(9613)),o=["components"],p={id:"env",title:"pnpm env <cmd>"},i=void 0,c={unversionedId:"cli/env",id:"cli/env",title:"pnpm env <cmd>",description:"Added in: v6.12.0",source:"@site/i18n/id/docusaurus-plugin-content-docs/current/cli/env.md",sourceDirName:"cli",slug:"/cli/env",permalink:"/id/next/cli/env",editUrl:"https://crowdin.com/project/pnpm/id",tags:[],version:"current",frontMatter:{id:"env",title:"pnpm env <cmd>"},sidebar:"docs",previous:{title:"pnpm start",permalink:"/id/next/cli/start"},next:{title:"pnpm publish",permalink:"/id/next/cli/publish"}},s={},u=[{value:"Perintah",id:"perintah",level:2},{value:"use",id:"use",level:3},{value:"Opsi",id:"opsi",level:2},{value:"--global, -g",id:"--global--g",level:3}],d={toc:u};function m(e){var n=e.components,t=(0,l.Z)(e,o);return(0,a.kt)("wrapper",(0,r.Z)({},d,t,{components:n,mdxType:"MDXLayout"}),(0,a.kt)("p",null,"Added in: v6.12.0"),(0,a.kt)("p",null,"Manages the Node.js environment."),(0,a.kt)("h2",{id:"perintah"},"Perintah"),(0,a.kt)("h3",{id:"use"},"use"),(0,a.kt)("p",null,"Instal dan gunakan versi Node.js yang ditentukan"),(0,a.kt)("p",null,"Instal versi LTS dari Node.js:"),(0,a.kt)("pre",null,(0,a.kt)("code",{parentName:"pre"},"pnpm env use --global lts\npnpm env use --global argon\n")),(0,a.kt)("p",null,"Instal Node.js v16:"),(0,a.kt)("pre",null,(0,a.kt)("code",{parentName:"pre"},"pnpm env use --global 16\n")),(0,a.kt)("p",null,"Also since v6.18.0:"),(0,a.kt)("p",null,"Install a prerelease version of Node.js:"),(0,a.kt)("pre",null,(0,a.kt)("code",{parentName:"pre"},"pnpm env use --global nightly\npnpm env use --global rc\npnpm env use --global 16.0.0-rc.0\npnpm env use --global rc/14\n")),(0,a.kt)("p",null,"Instal versi terbaru Node.js:"),(0,a.kt)("pre",null,(0,a.kt)("code",{parentName:"pre"},"pnpm env use --global latest\n")),(0,a.kt)("h2",{id:"opsi"},"Opsi"),(0,a.kt)("h3",{id:"--global--g"},"--global, -g"),(0,a.kt)("p",null,"The changes are made systemwide."))}m.isMDXComponent=!0}}]);