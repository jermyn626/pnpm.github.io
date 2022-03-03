"use strict";(self.webpackChunk=self.webpackChunk||[]).push([[5422],{9613:(e,t,n)=>{n.d(t,{Zo:()=>c,kt:()=>m});var r=n(9496);function o(e,t,n){return t in e?Object.defineProperty(e,t,{value:n,enumerable:!0,configurable:!0,writable:!0}):e[t]=n,e}function a(e,t){var n=Object.keys(e);if(Object.getOwnPropertySymbols){var r=Object.getOwnPropertySymbols(e);t&&(r=r.filter((function(t){return Object.getOwnPropertyDescriptor(e,t).enumerable}))),n.push.apply(n,r)}return n}function i(e){for(var t=1;t<arguments.length;t++){var n=null!=arguments[t]?arguments[t]:{};t%2?a(Object(n),!0).forEach((function(t){o(e,t,n[t])})):Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(n)):a(Object(n)).forEach((function(t){Object.defineProperty(e,t,Object.getOwnPropertyDescriptor(n,t))}))}return e}function p(e,t){if(null==e)return{};var n,r,o=function(e,t){if(null==e)return{};var n,r,o={},a=Object.keys(e);for(r=0;r<a.length;r++)n=a[r],t.indexOf(n)>=0||(o[n]=e[n]);return o}(e,t);if(Object.getOwnPropertySymbols){var a=Object.getOwnPropertySymbols(e);for(r=0;r<a.length;r++)n=a[r],t.indexOf(n)>=0||Object.prototype.propertyIsEnumerable.call(e,n)&&(o[n]=e[n])}return o}var l=r.createContext({}),s=function(e){var t=r.useContext(l),n=t;return e&&(n="function"==typeof e?e(t):i(i({},t),e)),n},c=function(e){var t=s(e.components);return r.createElement(l.Provider,{value:t},e.children)},u={inlineCode:"code",wrapper:function(e){var t=e.children;return r.createElement(r.Fragment,{},t)}},d=r.forwardRef((function(e,t){var n=e.components,o=e.mdxType,a=e.originalType,l=e.parentName,c=p(e,["components","mdxType","originalType","parentName"]),d=s(n),m=o,f=d["".concat(l,".").concat(m)]||d[m]||u[m]||a;return n?r.createElement(f,i(i({ref:t},c),{},{components:n})):r.createElement(f,i({ref:t},c))}));function m(e,t){var n=arguments,o=t&&t.mdxType;if("string"==typeof e||o){var a=n.length,i=new Array(a);i[0]=d;var p={};for(var l in t)hasOwnProperty.call(t,l)&&(p[l]=t[l]);p.originalType=e,p.mdxType="string"==typeof e?e:o,i[1]=p;for(var s=2;s<a;s++)i[s]=n[s];return r.createElement.apply(null,i)}return r.createElement.apply(null,n)}d.displayName="MDXCreateElement"},8669:(e,t,n)=>{n.r(t),n.d(t,{frontMatter:()=>p,contentTitle:()=>l,metadata:()=>s,assets:()=>c,toc:()=>u,default:()=>m});var r=n(7813),o=n(7044),a=(n(9496),n(9613)),i=["components"],p={id:"store",title:"pnpm store"},l=void 0,s={unversionedId:"cli/store",id:"version-6.x/cli/store",title:"pnpm store",description:"\u0423\u043f\u0440\u0430\u0432\u043b\u0435\u043d\u0438\u0435 \u0445\u0440\u0430\u043d\u0438\u043b\u0438\u0449\u0435\u043c \u043f\u0430\u043a\u0435\u0442\u043e\u0432.",source:"@site/i18n/ru/docusaurus-plugin-content-docs/version-6.x/cli/store.md",sourceDirName:"cli",slug:"/cli/store",permalink:"/ru/cli/store",editUrl:"https://crowdin.com/project/pnpm/ru",tags:[],version:"6.x",frontMatter:{id:"store",title:"pnpm store"},sidebar:"version-6.x/docs",previous:{title:"pnpm server",permalink:"/ru/cli/server"},next:{title:"pnpm root",permalink:"/ru/cli/root"}},c={},u=[{value:"\u041a\u043e\u043c\u0430\u043d\u0434\u044b",id:"\u043a\u043e\u043c\u0430\u043d\u0434\u044b",level:2},{value:"status",id:"status",level:3},{value:"add",id:"add",level:3},{value:"prune",id:"prune",level:3},{value:"path",id:"path",level:3}],d={toc:u};function m(e){var t=e.components,n=(0,o.Z)(e,i);return(0,a.kt)("wrapper",(0,r.Z)({},d,n,{components:t,mdxType:"MDXLayout"}),(0,a.kt)("p",null,"\u0423\u043f\u0440\u0430\u0432\u043b\u0435\u043d\u0438\u0435 \u0445\u0440\u0430\u043d\u0438\u043b\u0438\u0449\u0435\u043c \u043f\u0430\u043a\u0435\u0442\u043e\u0432."),(0,a.kt)("h2",{id:"\u043a\u043e\u043c\u0430\u043d\u0434\u044b"},"\u041a\u043e\u043c\u0430\u043d\u0434\u044b"),(0,a.kt)("h3",{id:"status"},"status"),(0,a.kt)("p",null,"\u041f\u0440\u043e\u0432\u0435\u0440\u044f\u0435\u0442 \u043d\u0430\u043b\u0438\u0447\u0438\u0435 \u0438\u0437\u043c\u0435\u043d\u0435\u043d\u043d\u044b\u0445 \u043f\u0430\u043a\u0435\u0442\u043e\u0432 \u0432 \u0445\u0440\u0430\u043d\u0438\u043b\u0438\u0449\u0435."),(0,a.kt)("p",null,"\u0412\u043e\u0437\u0432\u0440\u0430\u0449\u0430\u0435\u0442 \u043a\u043e\u0434 \u0432\u044b\u0445\u043e\u0434\u0430 0, \u0435\u0441\u043b\u0438 \u0441\u043e\u0434\u0435\u0440\u0436\u0438\u043c\u043e\u0435 \u043f\u0430\u043a\u0435\u0442\u0430 \u043e\u0441\u0442\u0430\u043b\u043e\u0441\u044c \u0442\u0430\u043a\u0438\u043c \u0436\u0435, \u043a\u0430\u043a\u0438\u043c \u043e\u043d\u043e \u0431\u044b\u043b\u043e \u0432\u043e \u0432\u0440\u0435\u043c\u044f \u0440\u0430\u0441\u043f\u0430\u043a\u043e\u0432\u043a\u0438."),(0,a.kt)("h3",{id:"add"},"add"),(0,a.kt)("p",null,"\u0414\u043e\u0431\u0430\u0432\u043b\u0435\u043d\u043e \u0432: v2.12.0"),(0,a.kt)("p",null,"\u0424\u0443\u043d\u043a\u0446\u0438\u043e\u043d\u0430\u043b\u044c\u043d\u044b\u0439 \u044d\u043a\u0432\u0438\u0432\u0430\u043b\u0435\u043d\u0442 \u043a ",(0,a.kt)("a",{parentName:"p",href:"/ru/cli/add"},(0,a.kt)("inlineCode",{parentName:"a"},"pnpm add")),", \u0437\u0430 \u0438\u0441\u043a\u043b\u044e\u0447\u0435\u043d\u0438\u0435\u043c \u0442\u043e\u0433\u043e, \u0447\u0442\u043e \u044d\u0442\u0430 \u043a\u043e\u043c\u0430\u043d\u0434\u0430 \u0434\u043e\u0431\u0430\u0432\u043b\u044f\u0435\u0442 \u043d\u043e\u0432\u044b\u0435 \u043f\u0430\u043a\u0435\u0442\u044b \u043d\u0430\u043f\u0440\u044f\u043c\u0443\u044e \u0432 \u0445\u0440\u0430\u043d\u0438\u043b\u0438\u0449\u0435, \u043d\u0435 \u0438\u0437\u043c\u0435\u043d\u044f\u044f \u043d\u0438\u043a\u0430\u043a\u0438\u0445 \u043f\u0440\u043e\u0435\u043a\u0442\u043e\u0432 \u0438\u043b\u0438 \u0444\u0430\u0439\u043b\u043e\u0432 \u0432\u043d\u0435 \u0445\u0440\u0430\u043d\u0438\u043b\u0438\u0449\u0430."),(0,a.kt)("h3",{id:"prune"},"prune"),(0,a.kt)("p",null,"Removes ",(0,a.kt)("em",{parentName:"p"},"unreferenced packages")," from the store."),(0,a.kt)("p",null,"Unreferenced packages are packages that are not used by any projects on the system. Packages can become unreferenced after most installation operations, for instance when dependencies are made redundant."),(0,a.kt)("p",null,"For example, during ",(0,a.kt)("inlineCode",{parentName:"p"},"pnpm install"),", package ",(0,a.kt)("inlineCode",{parentName:"p"},"foo@1.0.0")," is updated to ",(0,a.kt)("inlineCode",{parentName:"p"},"foo@1.0.1"),". pnpm will keep ",(0,a.kt)("inlineCode",{parentName:"p"},"foo@1.0.0")," in the store, as it does not automatically remove packages. If package ",(0,a.kt)("inlineCode",{parentName:"p"},"foo@1.0.0")," is not used by any other project on the system, it becomes unreferenced. Running ",(0,a.kt)("inlineCode",{parentName:"p"},"pnpm store prune")," would remove ",(0,a.kt)("inlineCode",{parentName:"p"},"foo@1.0.0")," from the store."),(0,a.kt)("p",null,"Running ",(0,a.kt)("inlineCode",{parentName:"p"},"pnpm store prune")," is not harmful and has no side effects on your projects. If future installations require removed packages, pnpm will download them again."),(0,a.kt)("p",null,"It is best practice to run ",(0,a.kt)("inlineCode",{parentName:"p"},"pnpm store prune")," occasionally to clean up the store, but not too frequently. Sometimes, unreferenced packages become required again. This could occur when switching branches and installing older dependencies, in which case pnpm would need to re-download all removed packages, briefly slowing down the installation process."),(0,a.kt)("p",null,"Please note that this command is prohibited when a ",(0,a.kt)("a",{parentName:"p",href:"/ru/cli/server"},"store server")," is running."),(0,a.kt)("h3",{id:"path"},"path"),(0,a.kt)("p",null,"\u0414\u043e\u0431\u0430\u0432\u043b\u0435\u043d\u043e \u0432: v6.10.0"),(0,a.kt)("p",null,"\u0412\u043e\u0437\u0432\u0440\u0430\u0449\u0430\u0435\u0442 \u043f\u0443\u0442\u044c \u043a \u0430\u043a\u0442\u0438\u0432\u043d\u043e\u043c\u0443 \u043a\u0430\u0442\u0430\u043b\u043e\u0433\u0443 \u0445\u0440\u0430\u043d\u0438\u043b\u0438\u0449\u0430."))}m.isMDXComponent=!0}}]);