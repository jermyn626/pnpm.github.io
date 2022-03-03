"use strict";(self.webpackChunk=self.webpackChunk||[]).push([[7890],{9613:(e,t,n)=>{n.d(t,{Zo:()=>d,kt:()=>m});var r=n(9496);function l(e,t,n){return t in e?Object.defineProperty(e,t,{value:n,enumerable:!0,configurable:!0,writable:!0}):e[t]=n,e}function i(e,t){var n=Object.keys(e);if(Object.getOwnPropertySymbols){var r=Object.getOwnPropertySymbols(e);t&&(r=r.filter((function(t){return Object.getOwnPropertyDescriptor(e,t).enumerable}))),n.push.apply(n,r)}return n}function a(e){for(var t=1;t<arguments.length;t++){var n=null!=arguments[t]?arguments[t]:{};t%2?i(Object(n),!0).forEach((function(t){l(e,t,n[t])})):Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(n)):i(Object(n)).forEach((function(t){Object.defineProperty(e,t,Object.getOwnPropertyDescriptor(n,t))}))}return e}function p(e,t){if(null==e)return{};var n,r,l=function(e,t){if(null==e)return{};var n,r,l={},i=Object.keys(e);for(r=0;r<i.length;r++)n=i[r],t.indexOf(n)>=0||(l[n]=e[n]);return l}(e,t);if(Object.getOwnPropertySymbols){var i=Object.getOwnPropertySymbols(e);for(r=0;r<i.length;r++)n=i[r],t.indexOf(n)>=0||Object.prototype.propertyIsEnumerable.call(e,n)&&(l[n]=e[n])}return l}var o=r.createContext({}),c=function(e){var t=r.useContext(o),n=t;return e&&(n="function"==typeof e?e(t):a(a({},t),e)),n},d=function(e){var t=c(e.components);return r.createElement(o.Provider,{value:t},e.children)},u={inlineCode:"code",wrapper:function(e){var t=e.children;return r.createElement(r.Fragment,{},t)}},s=r.forwardRef((function(e,t){var n=e.components,l=e.mdxType,i=e.originalType,o=e.parentName,d=p(e,["components","mdxType","originalType","parentName"]),s=c(n),m=l,k=s["".concat(o,".").concat(m)]||s[m]||u[m]||i;return n?r.createElement(k,a(a({ref:t},d),{},{components:n})):r.createElement(k,a({ref:t},d))}));function m(e,t){var n=arguments,l=t&&t.mdxType;if("string"==typeof e||l){var i=n.length,a=new Array(i);a[0]=s;var p={};for(var o in t)hasOwnProperty.call(t,o)&&(p[o]=t[o]);p.originalType=e,p.mdxType="string"==typeof e?e:l,a[1]=p;for(var c=2;c<i;c++)a[c]=n[c];return r.createElement.apply(null,a)}return r.createElement.apply(null,n)}s.displayName="MDXCreateElement"},9928:(e,t,n)=>{n.r(t),n.d(t,{frontMatter:()=>p,contentTitle:()=>o,metadata:()=>c,assets:()=>d,toc:()=>u,default:()=>m});var r=n(7813),l=n(7044),i=(n(9496),n(9613)),a=["components"],p={id:"list",title:"pnpm list"},o=void 0,c={unversionedId:"cli/list",id:"cli/list",title:"pnpm list",description:"\u522b\u540d: ls",source:"@site/i18n/zh/docusaurus-plugin-content-docs/current/cli/list.md",sourceDirName:"cli",slug:"/cli/list",permalink:"/zh/next/cli/list",editUrl:"https://crowdin.com/project/pnpm/zh-CN",tags:[],version:"current",frontMatter:{id:"list",title:"pnpm list"},sidebar:"docs",previous:{title:"pnpm audit",permalink:"/zh/next/cli/audit"},next:{title:"pnpm outdated",permalink:"/zh/next/cli/outdated"}},d={},u=[{value:"\u914d\u7f6e\u9879",id:"\u914d\u7f6e\u9879",level:2},{value:"--recursive, -r",id:"--recursive--r",level:3},{value:"--json",id:"--json",level:3},{value:"--long",id:"--long",level:3},{value:"--parseable",id:"--parseable",level:3},{value:"--global",id:"--global",level:3},{value:"--depth &lt;number&gt;",id:"--depth-number",level:3},{value:"--prod, -P",id:"--prod--p",level:3},{value:"--dev, -D",id:"--dev--d",level:3},{value:"--no-optional",id:"--no-optional",level:3},{value:"--filter &lt;package_selector&gt;",id:"--filter-package_selector",level:3}],s={toc:u};function m(e){var t=e.components,n=(0,l.Z)(e,a);return(0,i.kt)("wrapper",(0,r.Z)({},s,n,{components:t,mdxType:"MDXLayout"}),(0,i.kt)("p",null,"\u522b\u540d: ",(0,i.kt)("inlineCode",{parentName:"p"},"ls")),(0,i.kt)("p",null,"\u6b64\u547d\u4ee4\u4f1a\u4ee5\u4e00\u4e2a\u6811\u5f62\u7ed3\u6784\u8f93\u51fa\u6240\u6709\u7684\u5df2\u5b89\u88c5",(0,i.kt)("inlineCode",{parentName:"p"},"package"),"\u7684\u7248\u672c\u53ca\u5176\u4f9d\u8d56\u3002"),(0,i.kt)("p",null,"\u5982\u679c\u4f4d\u7f6e\u53c2\u6570\u662f ",(0,i.kt)("inlineCode",{parentName:"p"},"name-pattern@version-range")," \u6807\u8bc6\u7b26\uff0c\u4f1a\u5c06\u8f93\u51fa\u9650\u5236\u4e3a\u4ec5\u4e3a\u8fd9\u6837\u547d\u540d\u7684\u5305\u3002 \u4f8b\u5982\uff0c",(0,i.kt)("inlineCode",{parentName:"p"},'pnpm list "babel-*" "eslint-*" semver@5'),"\u3002"),(0,i.kt)("h2",{id:"\u914d\u7f6e\u9879"},"\u914d\u7f6e\u9879"),(0,i.kt)("h3",{id:"--recursive--r"},"--recursive, -r"),(0,i.kt)("p",null,"\u6267\u884c\u8be5\u547d\u4ee4\u4e8e\u5b50\u76ee\u5f55\u6240\u6709",(0,i.kt)("inlineCode",{parentName:"p"},"package")," \u4e2d\uff0c\u6216\u8005\u5982\u679c\u6267\u884c\u5728\u4e00\u4e2a\u5de5\u4f5c\u7a7a\u95f4\u65f6\uff0c\u5728\u5de5\u4f5c\u7a7a\u95f4\u7684\u6240\u6709",(0,i.kt)("inlineCode",{parentName:"p"},"package"),"\u6267\u884c\u3002"),(0,i.kt)("h3",{id:"--json"},"--json"),(0,i.kt)("p",null,"\u6dfb\u52a0\u4e8e\uff1av3.7.0"),(0,i.kt)("p",null,"JSON \u683c\u5f0f\u7684\u65e5\u5fd7\u8f93\u51fa\u3002"),(0,i.kt)("h3",{id:"--long"},"--long"),(0,i.kt)("p",null,"\u663e\u793a\u6269\u5c55\u4fe1\u606f\u3002"),(0,i.kt)("h3",{id:"--parseable"},"--parseable"),(0,i.kt)("p",null,"\u4ee5\u53ef\u89e3\u6790\u7684\u683c\u5f0f\u8f93\u51fa",(0,i.kt)("inlineCode",{parentName:"p"},"package"),"\u76ee\u5f55\u800c\u4e0d\u662f\u5b83\u4eec\u7684\u6811\u7ed3\u6784\u89c6\u56fe\u3002"),(0,i.kt)("h3",{id:"--global"},"--global"),(0,i.kt)("p",null,"\u5217\u51fa\u5728\u5168\u5c40\u5b89\u88c5\u76ee\u5f55\u7684",(0,i.kt)("inlineCode",{parentName:"p"},"package"),"\uff0c\u800c\u4e0d\u662f\u5728\u5f53\u524d\u9879\u76ee\u4e2d\u3002"),(0,i.kt)("h3",{id:"--depth-number"},"--depth ","<","number",">"),(0,i.kt)("p",null,"\u4f9d\u8d56\u9879\u7684\u6811\u7684\u6700\u5927\u663e\u793a\u6df1\u5ea6\u3002"),(0,i.kt)("p",null,(0,i.kt)("inlineCode",{parentName:"p"},"pnpm ls --depth 0")," \u5c06\u4ec5\u5217\u51fa\u76f4\u63a5\u7684\u4f9d\u8d56\u9879\u3002 ",(0,i.kt)("inlineCode",{parentName:"p"},"pnpm ls --depth -1")," \u5c06\u4ec5\u5217\u51fa\u9879\u76ee\u3002 \u5728\u5de5\u4f5c\u7a7a\u95f4\u4e2d\u548c ",(0,i.kt)("inlineCode",{parentName:"p"},"-r")," \u9009\u9879\u4e00\u8d77\u4f7f\u7528\u65f6\u4f1a\u5f88\u6709\u7528\u3002"),(0,i.kt)("h3",{id:"--prod--p"},"--prod, -P"),(0,i.kt)("p",null,"\u4ec5\u4ec5\u663e\u793a\u5728",(0,i.kt)("inlineCode",{parentName:"p"},"dependencies")," \u548c ",(0,i.kt)("inlineCode",{parentName:"p"},"optionalDependencies"),"\u4e2d\u7684 ",(0,i.kt)("inlineCode",{parentName:"p"},"package"),"\u7684\u4f9d\u8d56\u5173\u7cfb\u56fe\u3002"),(0,i.kt)("h3",{id:"--dev--d"},"--dev, -D"),(0,i.kt)("p",null,"\u4ec5\u4ec5\u663e\u793a\u5728",(0,i.kt)("inlineCode",{parentName:"p"},"devDependencies"),"\u4e2d\u7684 ",(0,i.kt)("inlineCode",{parentName:"p"},"package"),"\u7684\u4f9d\u8d56\u5173\u7cfb\u56fe\u3002"),(0,i.kt)("h3",{id:"--no-optional"},"--no-optional"),(0,i.kt)("p",null,"\u663e\u793a\u9664 ",(0,i.kt)("inlineCode",{parentName:"p"},"optionalDependencies")," \u4e4b\u5916\u7684 ",(0,i.kt)("inlineCode",{parentName:"p"},"package"),"\u7684\u4f9d\u8d56\u5173\u7cfb\u56fe\u3002"),(0,i.kt)("h3",{id:"--filter-package_selector"},"--filter ","<","package_selector",">"),(0,i.kt)("p",null,(0,i.kt)("a",{parentName:"p",href:"/zh/next/filtering"},"\u9605\u8bfb\u66f4\u591a\u6709\u5173 filter \u7684\u5185\u5bb9\u3002")))}m.isMDXComponent=!0}}]);