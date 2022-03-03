"use strict";(self.webpackChunk=self.webpackChunk||[]).push([[5988],{9613:(e,n,t)=>{t.d(n,{Zo:()=>d,kt:()=>s});var i=t(9496);function l(e,n,t){return n in e?Object.defineProperty(e,n,{value:t,enumerable:!0,configurable:!0,writable:!0}):e[n]=t,e}function r(e,n){var t=Object.keys(e);if(Object.getOwnPropertySymbols){var i=Object.getOwnPropertySymbols(e);n&&(i=i.filter((function(n){return Object.getOwnPropertyDescriptor(e,n).enumerable}))),t.push.apply(t,i)}return t}function o(e){for(var n=1;n<arguments.length;n++){var t=null!=arguments[n]?arguments[n]:{};n%2?r(Object(t),!0).forEach((function(n){l(e,n,t[n])})):Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(t)):r(Object(t)).forEach((function(n){Object.defineProperty(e,n,Object.getOwnPropertyDescriptor(t,n))}))}return e}function a(e,n){if(null==e)return{};var t,i,l=function(e,n){if(null==e)return{};var t,i,l={},r=Object.keys(e);for(i=0;i<r.length;i++)t=r[i],n.indexOf(t)>=0||(l[t]=e[t]);return l}(e,n);if(Object.getOwnPropertySymbols){var r=Object.getOwnPropertySymbols(e);for(i=0;i<r.length;i++)t=r[i],n.indexOf(t)>=0||Object.prototype.propertyIsEnumerable.call(e,t)&&(l[t]=e[t])}return l}var p=i.createContext({}),c=function(e){var n=i.useContext(p),t=n;return e&&(t="function"==typeof e?e(n):o(o({},n),e)),t},d=function(e){var n=c(e.components);return i.createElement(p.Provider,{value:n},e.children)},m={inlineCode:"code",wrapper:function(e){var n=e.children;return i.createElement(i.Fragment,{},n)}},u=i.forwardRef((function(e,n){var t=e.components,l=e.mdxType,r=e.originalType,p=e.parentName,d=a(e,["components","mdxType","originalType","parentName"]),u=c(t),s=l,k=u["".concat(p,".").concat(s)]||u[s]||m[s]||r;return t?i.createElement(k,o(o({ref:n},d),{},{components:t})):i.createElement(k,o({ref:n},d))}));function s(e,n){var t=arguments,l=n&&n.mdxType;if("string"==typeof e||l){var r=t.length,o=new Array(r);o[0]=u;var a={};for(var p in n)hasOwnProperty.call(n,p)&&(a[p]=n[p]);a.originalType=e,a.mdxType="string"==typeof e?e:l,o[1]=a;for(var c=2;c<r;c++)o[c]=t[c];return i.createElement.apply(null,o)}return i.createElement.apply(null,t)}u.displayName="MDXCreateElement"},9698:(e,n,t)=>{t.r(n),t.d(n,{frontMatter:()=>a,contentTitle:()=>p,metadata:()=>c,assets:()=>d,toc:()=>m,default:()=>s});var i=t(7813),l=t(7044),r=(t(9496),t(9613)),o=["components"],a={id:"link",title:"pnpm link"},p=void 0,c={unversionedId:"cli/link",id:"cli/link",title:"pnpm link",description:"Alias: ln",source:"@site/i18n/it/docusaurus-plugin-content-docs/current/cli/link.md",sourceDirName:"cli",slug:"/cli/link",permalink:"/it/next/cli/link",editUrl:"https://crowdin.com/project/pnpm/it",tags:[],version:"current",frontMatter:{id:"link",title:"pnpm link"},sidebar:"docs",previous:{title:"pnpm remove",permalink:"/it/next/cli/remove"},next:{title:"pnpm unlink",permalink:"/it/next/cli/unlink"}},d={},m=[{value:"Opzioni",id:"opzioni",level:2},{value:"--dir &lt;dir&gt;, -C",id:"--dir-dir--c",level:3},{value:"<code>pnpm link &lt;dir&gt;</code>",id:"pnpm-link-dir",level:3},{value:"<code>pnpm link --global</code>",id:"pnpm-link---global",level:3},{value:"<code>pnpm link --global &lt;pkg&gt;</code>",id:"pnpm-link---global-pkg",level:3}],u={toc:m};function s(e){var n=e.components,t=(0,l.Z)(e,o);return(0,r.kt)("wrapper",(0,i.Z)({},u,t,{components:n,mdxType:"MDXLayout"}),(0,r.kt)("p",null,"Alias: ",(0,r.kt)("inlineCode",{parentName:"p"},"ln")),(0,r.kt)("p",null,"Rende il pacchetto locale accessibile a livello di sistema, o in un'altra posizione."),(0,r.kt)("pre",null,(0,r.kt)("code",{parentName:"pre",className:"language-text"},"pnpm link <dir>\npnpm link --global\npnpm link --global <pkg>\n")),(0,r.kt)("h2",{id:"opzioni"},"Opzioni"),(0,r.kt)("h3",{id:"--dir-dir--c"},"--dir ","<","dir",">",", -C"),(0,r.kt)("ul",null,(0,r.kt)("li",{parentName:"ul"},(0,r.kt)("strong",{parentName:"li"},"Predefinito"),": Cartella di lavoro corrente"),(0,r.kt)("li",{parentName:"ul"},(0,r.kt)("strong",{parentName:"li"},"Tipo"),": Percorso stringa")),(0,r.kt)("p",null,"Cambia la posizione del collegamento in ",(0,r.kt)("inlineCode",{parentName:"p"},"<dir>"),"."),(0,r.kt)("h3",{id:"pnpm-link-dir"},(0,r.kt)("inlineCode",{parentName:"h3"},"pnpm link <dir>")),(0,r.kt)("p",null,"Collega il pacchetto dalla cartella ",(0,r.kt)("inlineCode",{parentName:"p"},"<dir>")," a node_modules del pacchetto da cui esegui questo comando o specificato tramite l'opzione ",(0,r.kt)("inlineCode",{parentName:"p"},"--dir"),"."),(0,r.kt)("h3",{id:"pnpm-link---global"},(0,r.kt)("inlineCode",{parentName:"h3"},"pnpm link --global")),(0,r.kt)("p",null,"Collega il pacchetto dalla posizione in cui questo comando \xe8 stato eseguito o specificato tramite l'opzione ",(0,r.kt)("inlineCode",{parentName:"p"},"--dir")," all'opzione globale ",(0,r.kt)("inlineCode",{parentName:"p"},"node_modules"),", in modo che possa essere riferito da un altro pacchetto con ",(0,r.kt)("inlineCode",{parentName:"p"},"link pnpm --global <pkg>"),"."),(0,r.kt)("h3",{id:"pnpm-link---global-pkg"},(0,r.kt)("inlineCode",{parentName:"h3"},"pnpm link --global <pkg>")),(0,r.kt)("p",null,"Collega il pacchetto specificato (",(0,r.kt)("inlineCode",{parentName:"p"},"<pkg>"),") dal ",(0,r.kt)("inlineCode",{parentName:"p"},"node_modules")," globale al ",(0,r.kt)("inlineCode",{parentName:"p"},"node_nodules")," del pacchetto da cui questo comando \xe8 stato eseguito o specificato tramite l'opzione ",(0,r.kt)("inlineCode",{parentName:"p"},"--dir"),"."))}s.isMDXComponent=!0}}]);