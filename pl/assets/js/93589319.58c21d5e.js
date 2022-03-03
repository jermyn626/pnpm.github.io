"use strict";(self.webpackChunk=self.webpackChunk||[]).push([[8070],{9613:(e,r,t)=>{t.d(r,{Zo:()=>u,kt:()=>m});var n=t(9496);function i(e,r,t){return r in e?Object.defineProperty(e,r,{value:t,enumerable:!0,configurable:!0,writable:!0}):e[r]=t,e}function l(e,r){var t=Object.keys(e);if(Object.getOwnPropertySymbols){var n=Object.getOwnPropertySymbols(e);r&&(n=n.filter((function(r){return Object.getOwnPropertyDescriptor(e,r).enumerable}))),t.push.apply(t,n)}return t}function o(e){for(var r=1;r<arguments.length;r++){var t=null!=arguments[r]?arguments[r]:{};r%2?l(Object(t),!0).forEach((function(r){i(e,r,t[r])})):Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(t)):l(Object(t)).forEach((function(r){Object.defineProperty(e,r,Object.getOwnPropertyDescriptor(t,r))}))}return e}function p(e,r){if(null==e)return{};var t,n,i=function(e,r){if(null==e)return{};var t,n,i={},l=Object.keys(e);for(n=0;n<l.length;n++)t=l[n],r.indexOf(t)>=0||(i[t]=e[t]);return i}(e,r);if(Object.getOwnPropertySymbols){var l=Object.getOwnPropertySymbols(e);for(n=0;n<l.length;n++)t=l[n],r.indexOf(t)>=0||Object.prototype.propertyIsEnumerable.call(e,t)&&(i[t]=e[t])}return i}var c=n.createContext({}),a=function(e){var r=n.useContext(c),t=r;return e&&(t="function"==typeof e?e(r):o(o({},r),e)),t},u=function(e){var r=a(e.components);return n.createElement(c.Provider,{value:r},e.children)},s={inlineCode:"code",wrapper:function(e){var r=e.children;return n.createElement(n.Fragment,{},r)}},d=n.forwardRef((function(e,r){var t=e.components,i=e.mdxType,l=e.originalType,c=e.parentName,u=p(e,["components","mdxType","originalType","parentName"]),d=a(t),m=i,f=d["".concat(c,".").concat(m)]||d[m]||s[m]||l;return t?n.createElement(f,o(o({ref:r},u),{},{components:t})):n.createElement(f,o({ref:r},u))}));function m(e,r){var t=arguments,i=r&&r.mdxType;if("string"==typeof e||i){var l=t.length,o=new Array(l);o[0]=d;var p={};for(var c in r)hasOwnProperty.call(r,c)&&(p[c]=r[c]);p.originalType=e,p.mdxType="string"==typeof e?e:i,o[1]=p;for(var a=2;a<l;a++)o[a]=t[a];return n.createElement.apply(null,o)}return n.createElement.apply(null,t)}d.displayName="MDXCreateElement"},8723:(e,r,t)=>{t.r(r),t.d(r,{frontMatter:()=>p,contentTitle:()=>c,metadata:()=>a,assets:()=>u,toc:()=>s,default:()=>m});var n=t(7813),i=t(7044),l=(t(9496),t(9613)),o=["components"],p={id:"rebuild",title:"pnpm rebuild"},c=void 0,a={unversionedId:"cli/rebuild",id:"cli/rebuild",title:"pnpm rebuild",description:"Aliases: rb",source:"@site/i18n/pl/docusaurus-plugin-content-docs/current/cli/rebuild.md",sourceDirName:"cli",slug:"/cli/rebuild",permalink:"/pl/next/cli/rebuild",editUrl:"https://crowdin.com/project/pnpm/pl",tags:[],version:"current",frontMatter:{id:"rebuild",title:"pnpm rebuild"},sidebar:"docs",previous:{title:"pnpm import",permalink:"/pl/next/cli/import"},next:{title:"pnpm prune",permalink:"/pl/next/cli/prune"}},u={},s=[{value:"Opcje",id:"opcje",level:2},{value:"--recursive, -r",id:"--recursive--r",level:3},{value:"--filter &lt;package_selector&gt;",id:"--filter-package_selector",level:3}],d={toc:s};function m(e){var r=e.components,t=(0,i.Z)(e,o);return(0,l.kt)("wrapper",(0,n.Z)({},d,t,{components:r,mdxType:"MDXLayout"}),(0,l.kt)("p",null,"Aliases: ",(0,l.kt)("inlineCode",{parentName:"p"},"rb")),(0,l.kt)("p",null,"Rebuild a package."),(0,l.kt)("h2",{id:"opcje"},"Opcje"),(0,l.kt)("h3",{id:"--recursive--r"},"--recursive, -r"),(0,l.kt)("p",null,"This command runs the ",(0,l.kt)("strong",{parentName:"p"},"pnpm rebuild")," command in every package of the monorepo."),(0,l.kt)("h3",{id:"--filter-package_selector"},"--filter ","<","package_selector",">"),(0,l.kt)("p",null,(0,l.kt)("a",{parentName:"p",href:"/pl/next/filtering"},"Read more about filtering.")))}m.isMDXComponent=!0}}]);