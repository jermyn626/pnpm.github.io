"use strict";(self.webpackChunk=self.webpackChunk||[]).push([[6074],{9613:(e,t,r)=>{r.d(t,{Zo:()=>d,kt:()=>m});var n=r(9496);function l(e,t,r){return t in e?Object.defineProperty(e,t,{value:r,enumerable:!0,configurable:!0,writable:!0}):e[t]=r,e}function i(e,t){var r=Object.keys(e);if(Object.getOwnPropertySymbols){var n=Object.getOwnPropertySymbols(e);t&&(n=n.filter((function(t){return Object.getOwnPropertyDescriptor(e,t).enumerable}))),r.push.apply(r,n)}return r}function a(e){for(var t=1;t<arguments.length;t++){var r=null!=arguments[t]?arguments[t]:{};t%2?i(Object(r),!0).forEach((function(t){l(e,t,r[t])})):Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(r)):i(Object(r)).forEach((function(t){Object.defineProperty(e,t,Object.getOwnPropertyDescriptor(r,t))}))}return e}function o(e,t){if(null==e)return{};var r,n,l=function(e,t){if(null==e)return{};var r,n,l={},i=Object.keys(e);for(n=0;n<i.length;n++)r=i[n],t.indexOf(r)>=0||(l[r]=e[r]);return l}(e,t);if(Object.getOwnPropertySymbols){var i=Object.getOwnPropertySymbols(e);for(n=0;n<i.length;n++)r=i[n],t.indexOf(r)>=0||Object.prototype.propertyIsEnumerable.call(e,r)&&(l[r]=e[r])}return l}var p=n.createContext({}),c=function(e){var t=n.useContext(p),r=t;return e&&(r="function"==typeof e?e(t):a(a({},t),e)),r},d=function(e){var t=c(e.components);return n.createElement(p.Provider,{value:t},e.children)},u={inlineCode:"code",wrapper:function(e){var t=e.children;return n.createElement(n.Fragment,{},t)}},s=n.forwardRef((function(e,t){var r=e.components,l=e.mdxType,i=e.originalType,p=e.parentName,d=o(e,["components","mdxType","originalType","parentName"]),s=c(r),m=l,v=s["".concat(p,".").concat(m)]||s[m]||u[m]||i;return r?n.createElement(v,a(a({ref:t},d),{},{components:r})):n.createElement(v,a({ref:t},d))}));function m(e,t){var r=arguments,l=t&&t.mdxType;if("string"==typeof e||l){var i=r.length,a=new Array(i);a[0]=s;var o={};for(var p in t)hasOwnProperty.call(t,p)&&(o[p]=t[p]);o.originalType=e,o.mdxType="string"==typeof e?e:l,a[1]=o;for(var c=2;c<i;c++)a[c]=r[c];return n.createElement.apply(null,a)}return n.createElement.apply(null,r)}s.displayName="MDXCreateElement"},3860:(e,t,r)=>{r.r(t),r.d(t,{frontMatter:()=>o,contentTitle:()=>p,metadata:()=>c,assets:()=>d,toc:()=>u,default:()=>m});var n=r(7813),l=r(7044),i=(r(9496),r(9613)),a=["components"],o={id:"why",title:"pnpm why"},p=void 0,c={unversionedId:"cli/why",id:"version-6.x/cli/why",title:"pnpm why",description:"Belirtilen pakete ba\u011fl\u0131 t\xfcm paketleri g\xf6sterir.",source:"@site/i18n/tr/docusaurus-plugin-content-docs/version-6.x/cli/why.md",sourceDirName:"cli",slug:"/cli/why",permalink:"/tr/cli/why",editUrl:"https://crowdin.com/project/pnpm/tr",tags:[],version:"6.x",frontMatter:{id:"why",title:"pnpm why"},sidebar:"version-6.x/docs",previous:{title:"pnpm outdated",permalink:"/tr/cli/outdated"},next:{title:"pnpm run",permalink:"/tr/cli/run"}},d={},u=[{value:"Parametreler",id:"parametreler",level:2},{value:"--recursive, -r",id:"--recursive--r",level:3},{value:"--json",id:"--json",level:3},{value:"--long",id:"--long",level:3},{value:"--parseable",id:"--parseable",level:3},{value:"--global",id:"--global",level:3},{value:"--prod, -P",id:"--prod--p",level:3},{value:"--dev, -D",id:"--dev--d",level:3},{value:"--filter &lt;paket_se\xe7ici&gt;",id:"--filter-paket_se\xe7ici",level:3}],s={toc:u};function m(e){var t=e.components,r=(0,l.Z)(e,a);return(0,i.kt)("wrapper",(0,n.Z)({},s,r,{components:t,mdxType:"MDXLayout"}),(0,i.kt)("p",null,"Belirtilen pakete ba\u011fl\u0131 t\xfcm paketleri g\xf6sterir."),(0,i.kt)("h2",{id:"parametreler"},"Parametreler"),(0,i.kt)("h3",{id:"--recursive--r"},"--recursive, -r"),(0,i.kt)("p",null,"Bir \xe7al\u0131\u015fma alan\u0131 i\xe7inde y\xfcr\xfct\xfcld\xfc\u011f\xfcnde, alt dizinlerindeki ya da her \xe7al\u0131\u015fma alan\u0131 paketinde belirtilen paket i\xe7in ba\u011f\u0131ml\u0131l\u0131k a\u011fac\u0131n\u0131 g\xf6sterin."),(0,i.kt)("h3",{id:"--json"},"--json"),(0,i.kt)("p",null,"S\xfcr\xfcm 3.7.0 ve sonras\u0131nda ge\xe7erli"),(0,i.kt)("p",null,"Bilgileri JSON format\u0131nda g\xf6ster."),(0,i.kt)("h3",{id:"--long"},"--long"),(0,i.kt)("p",null,"Ayr\u0131nt\u0131l\u0131 \xe7\u0131kt\u0131y\u0131 g\xf6ster."),(0,i.kt)("h3",{id:"--parseable"},"--parseable"),(0,i.kt)("p",null,"A\u011fa\xe7 g\xf6r\xfcn\xfcm\xfc yerine parse edilebilir \xe7\u0131kt\u0131y\u0131 g\xf6ster."),(0,i.kt)("h3",{id:"--global"},"--global"),(0,i.kt)("p",null,"List packages in the global install directory instead of in the current project."),(0,i.kt)("h3",{id:"--prod--p"},"--prod, -P"),(0,i.kt)("p",null,"Sadece ",(0,i.kt)("inlineCode",{parentName:"p"},"ba\u011f\u0131ml\u0131l\u0131k(dependency)")," i\xe7indeki paketler i\xe7in ba\u011f\u0131ml\u0131l\u0131k a\u011fac\u0131n\u0131 g\xf6r\xfcnt\xfcleyin."),(0,i.kt)("h3",{id:"--dev--d"},"--dev, -D"),(0,i.kt)("p",null,"Sadece ",(0,i.kt)("inlineCode",{parentName:"p"},"geli\u015ftirme ba\u011f\u0131ml\u0131l\u0131\u011f\u0131(devDependencies)")," i\xe7indeki paketler i\xe7in ba\u011f\u0131ml\u0131l\u0131k a\u011fac\u0131n\u0131 g\xf6r\xfcnt\xfcleyin."),(0,i.kt)("h3",{id:"--filter-paket_se\xe7ici"},"--filter ","<","paket_se\xe7ici>"),(0,i.kt)("p",null,(0,i.kt)("a",{parentName:"p",href:"/tr/filtering"},"Buradan daha fazla bilgiye ula\u015fabilirsin.")))}m.isMDXComponent=!0}}]);