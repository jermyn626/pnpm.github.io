"use strict";(self.webpackChunk=self.webpackChunk||[]).push([[8013],{9613:(e,t,n)=>{n.d(t,{Zo:()=>d,kt:()=>v});var r=n(9496);function o(e,t,n){return t in e?Object.defineProperty(e,t,{value:n,enumerable:!0,configurable:!0,writable:!0}):e[t]=n,e}function i(e,t){var n=Object.keys(e);if(Object.getOwnPropertySymbols){var r=Object.getOwnPropertySymbols(e);t&&(r=r.filter((function(t){return Object.getOwnPropertyDescriptor(e,t).enumerable}))),n.push.apply(n,r)}return n}function l(e){for(var t=1;t<arguments.length;t++){var n=null!=arguments[t]?arguments[t]:{};t%2?i(Object(n),!0).forEach((function(t){o(e,t,n[t])})):Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(n)):i(Object(n)).forEach((function(t){Object.defineProperty(e,t,Object.getOwnPropertyDescriptor(n,t))}))}return e}function a(e,t){if(null==e)return{};var n,r,o=function(e,t){if(null==e)return{};var n,r,o={},i=Object.keys(e);for(r=0;r<i.length;r++)n=i[r],t.indexOf(n)>=0||(o[n]=e[n]);return o}(e,t);if(Object.getOwnPropertySymbols){var i=Object.getOwnPropertySymbols(e);for(r=0;r<i.length;r++)n=i[r],t.indexOf(n)>=0||Object.prototype.propertyIsEnumerable.call(e,n)&&(o[n]=e[n])}return o}var p=r.createContext({}),c=function(e){var t=r.useContext(p),n=t;return e&&(n="function"==typeof e?e(t):l(l({},t),e)),n},d=function(e){var t=c(e.components);return r.createElement(p.Provider,{value:t},e.children)},u={inlineCode:"code",wrapper:function(e){var t=e.children;return r.createElement(r.Fragment,{},t)}},s=r.forwardRef((function(e,t){var n=e.components,o=e.mdxType,i=e.originalType,p=e.parentName,d=a(e,["components","mdxType","originalType","parentName"]),s=c(n),v=o,m=s["".concat(p,".").concat(v)]||s[v]||u[v]||i;return n?r.createElement(m,l(l({ref:t},d),{},{components:n})):r.createElement(m,l({ref:t},d))}));function v(e,t){var n=arguments,o=t&&t.mdxType;if("string"==typeof e||o){var i=n.length,l=new Array(i);l[0]=s;var a={};for(var p in t)hasOwnProperty.call(t,p)&&(a[p]=t[p]);a.originalType=e,a.mdxType="string"==typeof e?e:o,l[1]=a;for(var c=2;c<i;c++)l[c]=n[c];return r.createElement.apply(null,l)}return r.createElement.apply(null,n)}s.displayName="MDXCreateElement"},2170:(e,t,n)=>{n.r(t),n.d(t,{frontMatter:()=>a,contentTitle:()=>p,metadata:()=>c,assets:()=>d,toc:()=>u,default:()=>v});var r=n(7813),o=n(7044),i=(n(9496),n(9613)),l=["components"],a={id:"remove",title:"pnpm remove"},p=void 0,c={unversionedId:"cli/remove",id:"version-5.x/cli/remove",title:"pnpm remove",description:"Rimuove i pacchetti da node_modules e dal package.json del progetto.",source:"@site/i18n/it/docusaurus-plugin-content-docs/version-5.x/cli/remove.md",sourceDirName:"cli",slug:"/cli/remove",permalink:"/it/5.x/cli/remove",editUrl:"https://crowdin.com/project/pnpm/it",tags:[],version:"5.x",frontMatter:{id:"remove",title:"pnpm remove"},sidebar:"version-5.x/docs",previous:{title:"pnpm update",permalink:"/it/5.x/cli/update"},next:{title:"pnpm link",permalink:"/it/5.x/cli/link"}},d={},u=[{value:"Opzioni",id:"opzioni",level:2},{value:"--recursive, -r",id:"--recursive--r",level:3},{value:"--global",id:"--global",level:3},{value:"--save-dev, -D",id:"--save-dev--d",level:3},{value:"--save-optional, -O",id:"--save-optional--o",level:3},{value:"--save-prod, -P",id:"--save-prod--p",level:3},{value:"--filter &lt;selettore_pacchetto&gt;",id:"--filter-selettore_pacchetto",level:3}],s={toc:u};function v(e){var t=e.components,n=(0,o.Z)(e,l);return(0,i.kt)("wrapper",(0,r.Z)({},s,n,{components:t,mdxType:"MDXLayout"}),(0,i.kt)("p",null,"Rimuove i pacchetti da ",(0,i.kt)("inlineCode",{parentName:"p"},"node_modules")," e dal ",(0,i.kt)("inlineCode",{parentName:"p"},"package.json")," del progetto."),(0,i.kt)("p",null,"Alias: rm, uninstall, un"),(0,i.kt)("h2",{id:"opzioni"},"Opzioni"),(0,i.kt)("h3",{id:"--recursive--r"},"--recursive, -r"),(0,i.kt)("p",null,"Quando usato in uno ",(0,i.kt)("a",{parentName:"p",href:"/it/5.x/workspaces"},"spazio di lavoro"),", rimuove una dipendenza (o un gruppo di dipendenze) da ogni pacchetto nello spazio di lavoro."),(0,i.kt)("p",null,"Quando non \xe8 usato in uno spazio di lavoro, rimuove una dipendenza (o un gruppo di dipendenze) da ogni pacchetto trovato nelle sottocartelle."),(0,i.kt)("h3",{id:"--global"},"--global"),(0,i.kt)("p",null,"Rimuove un pacchetto installato globalmente."),(0,i.kt)("h3",{id:"--save-dev--d"},"--save-dev, -D"),(0,i.kt)("p",null,"Rimuove la dipendenza solo dalle dipendenze di sviluppo (",(0,i.kt)("inlineCode",{parentName:"p"},"devDependencies"),")."),(0,i.kt)("h3",{id:"--save-optional--o"},"--save-optional, -O"),(0,i.kt)("p",null,"Rimuove la dipendenza solo dalle dipendenze opzionali (",(0,i.kt)("inlineCode",{parentName:"p"},"optionalDependencies"),")."),(0,i.kt)("h3",{id:"--save-prod--p"},"--save-prod, -P"),(0,i.kt)("p",null,"Rimuove la dipendenza solo dalle dipendenze (",(0,i.kt)("inlineCode",{parentName:"p"},"dependencies"),")."),(0,i.kt)("h3",{id:"--filter-selettore_pacchetto"},"--filter ","<","selettore_pacchetto",">"),(0,i.kt)("p",null,(0,i.kt)("a",{parentName:"p",href:"/it/5.x/filtering"},"Ulteriori informazioni sui filtri.")))}v.isMDXComponent=!0}}]);