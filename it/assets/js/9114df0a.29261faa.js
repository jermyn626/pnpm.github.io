"use strict";(self.webpackChunk=self.webpackChunk||[]).push([[585],{9613:(e,t,n)=>{n.d(t,{Zo:()=>u,kt:()=>d});var r=n(9496);function o(e,t,n){return t in e?Object.defineProperty(e,t,{value:n,enumerable:!0,configurable:!0,writable:!0}):e[t]=n,e}function i(e,t){var n=Object.keys(e);if(Object.getOwnPropertySymbols){var r=Object.getOwnPropertySymbols(e);t&&(r=r.filter((function(t){return Object.getOwnPropertyDescriptor(e,t).enumerable}))),n.push.apply(n,r)}return n}function a(e){for(var t=1;t<arguments.length;t++){var n=null!=arguments[t]?arguments[t]:{};t%2?i(Object(n),!0).forEach((function(t){o(e,t,n[t])})):Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(n)):i(Object(n)).forEach((function(t){Object.defineProperty(e,t,Object.getOwnPropertyDescriptor(n,t))}))}return e}function c(e,t){if(null==e)return{};var n,r,o=function(e,t){if(null==e)return{};var n,r,o={},i=Object.keys(e);for(r=0;r<i.length;r++)n=i[r],t.indexOf(n)>=0||(o[n]=e[n]);return o}(e,t);if(Object.getOwnPropertySymbols){var i=Object.getOwnPropertySymbols(e);for(r=0;r<i.length;r++)n=i[r],t.indexOf(n)>=0||Object.prototype.propertyIsEnumerable.call(e,n)&&(o[n]=e[n])}return o}var l=r.createContext({}),p=function(e){var t=r.useContext(l),n=t;return e&&(n="function"==typeof e?e(t):a(a({},t),e)),n},u=function(e){var t=p(e.components);return r.createElement(l.Provider,{value:t},e.children)},s={inlineCode:"code",wrapper:function(e){var t=e.children;return r.createElement(r.Fragment,{},t)}},m=r.forwardRef((function(e,t){var n=e.components,o=e.mdxType,i=e.originalType,l=e.parentName,u=c(e,["components","mdxType","originalType","parentName"]),m=p(n),d=o,f=m["".concat(l,".").concat(d)]||m[d]||s[d]||i;return n?r.createElement(f,a(a({ref:t},u),{},{components:n})):r.createElement(f,a({ref:t},u))}));function d(e,t){var n=arguments,o=t&&t.mdxType;if("string"==typeof e||o){var i=n.length,a=new Array(i);a[0]=m;var c={};for(var l in t)hasOwnProperty.call(t,l)&&(c[l]=t[l]);c.originalType=e,c.mdxType="string"==typeof e?e:o,a[1]=c;for(var p=2;p<i;p++)a[p]=n[p];return r.createElement.apply(null,a)}return r.createElement.apply(null,n)}m.displayName="MDXCreateElement"},4701:(e,t,n)=>{n.r(t),n.d(t,{frontMatter:()=>c,contentTitle:()=>l,metadata:()=>p,assets:()=>u,toc:()=>s,default:()=>d});var r=n(7813),o=n(7044),i=(n(9496),n(9613)),a=["components"],c={id:"exec",title:"pnpm exec"},l=void 0,p={unversionedId:"cli/exec",id:"version-5.x/cli/exec",title:"pnpm exec",description:"Forma abbreviata di pnpm -r exec.",source:"@site/i18n/it/docusaurus-plugin-content-docs/version-5.x/cli/exec.md",sourceDirName:"cli",slug:"/cli/exec",permalink:"/it/5.x/cli/exec",editUrl:"https://crowdin.com/project/pnpm/it",tags:[],version:"5.x",frontMatter:{id:"exec",title:"pnpm exec"}},u={},s=[{value:"Opzioni",id:"opzioni",level:2},{value:"--parallel",id:"--parallel",level:3}],m={toc:s};function d(e){var t=e.components,n=(0,o.Z)(e,a);return(0,i.kt)("wrapper",(0,r.Z)({},m,n,{components:t,mdxType:"MDXLayout"}),(0,i.kt)("p",null,"Forma abbreviata di ",(0,i.kt)("inlineCode",{parentName:"p"},"pnpm -r exec"),"."),(0,i.kt)("p",null,"Visualizza la documentazione di ","[",(0,i.kt)("inlineCode",{parentName:"p"},"r exec"),"]"," per maggiori informazioni."),(0,i.kt)("h2",{id:"opzioni"},"Opzioni"),(0,i.kt)("h3",{id:"--parallel"},"--parallel"),(0,i.kt)("p",null,"Ignora completamente la concorrenza e la configurazione dell'ordinamento topologico ed esegue il comando immediatamente in tutti i pacchetti corrispondenti, con output di streaming prefissato."),(0,i.kt)("p",null,"Questa \xe8 l'opzione preferita per i processi che richiedono molto tempo per l'esecuzione. Ad esempio, l'esecuzione di un processo di compilazione con il flag watch su un numero elevato di pacchetti."))}d.isMDXComponent=!0}}]);