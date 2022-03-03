"use strict";(self.webpackChunk=self.webpackChunk||[]).push([[2214],{9613:(e,n,t)=>{t.d(n,{Zo:()=>c,kt:()=>k});var r=t(9496);function a(e,n,t){return n in e?Object.defineProperty(e,n,{value:t,enumerable:!0,configurable:!0,writable:!0}):e[n]=t,e}function l(e,n){var t=Object.keys(e);if(Object.getOwnPropertySymbols){var r=Object.getOwnPropertySymbols(e);n&&(r=r.filter((function(n){return Object.getOwnPropertyDescriptor(e,n).enumerable}))),t.push.apply(t,r)}return t}function i(e){for(var n=1;n<arguments.length;n++){var t=null!=arguments[n]?arguments[n]:{};n%2?l(Object(t),!0).forEach((function(n){a(e,n,t[n])})):Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(t)):l(Object(t)).forEach((function(n){Object.defineProperty(e,n,Object.getOwnPropertyDescriptor(t,n))}))}return e}function p(e,n){if(null==e)return{};var t,r,a=function(e,n){if(null==e)return{};var t,r,a={},l=Object.keys(e);for(r=0;r<l.length;r++)t=l[r],n.indexOf(t)>=0||(a[t]=e[t]);return a}(e,n);if(Object.getOwnPropertySymbols){var l=Object.getOwnPropertySymbols(e);for(r=0;r<l.length;r++)t=l[r],n.indexOf(t)>=0||Object.prototype.propertyIsEnumerable.call(e,t)&&(a[t]=e[t])}return a}var o=r.createContext({}),s=function(e){var n=r.useContext(o),t=n;return e&&(t="function"==typeof e?e(n):i(i({},n),e)),t},c=function(e){var n=s(e.components);return r.createElement(o.Provider,{value:n},e.children)},u={inlineCode:"code",wrapper:function(e){var n=e.children;return r.createElement(r.Fragment,{},n)}},m=r.forwardRef((function(e,n){var t=e.components,a=e.mdxType,l=e.originalType,o=e.parentName,c=p(e,["components","mdxType","originalType","parentName"]),m=s(t),k=a,d=m["".concat(o,".").concat(k)]||m[k]||u[k]||l;return t?r.createElement(d,i(i({ref:n},c),{},{components:t})):r.createElement(d,i({ref:n},c))}));function k(e,n){var t=arguments,a=n&&n.mdxType;if("string"==typeof e||a){var l=t.length,i=new Array(l);i[0]=m;var p={};for(var o in n)hasOwnProperty.call(n,o)&&(p[o]=n[o]);p.originalType=e,p.mdxType="string"==typeof e?e:a,i[1]=p;for(var s=2;s<l;s++)i[s]=t[s];return r.createElement.apply(null,i)}return r.createElement.apply(null,t)}m.displayName="MDXCreateElement"},7403:(e,n,t)=>{t.r(n),t.d(n,{frontMatter:()=>p,contentTitle:()=>o,metadata:()=>s,assets:()=>c,toc:()=>u,default:()=>k});var r=t(7813),a=t(7044),l=(t(9496),t(9613)),i=["components"],p={id:"recursive",title:"pnpm recursive"},o=void 0,s={unversionedId:"cli/recursive",id:"version-5.x/cli/recursive",title:"pnpm recursive",description:"\u30d1\u30c3\u30b1\u30fc\u30b8\u5185\u307e\u305f\u306f\u4f7f\u7528\u53ef\u80fd\u306a\u30ef\u30fc\u30af\u30b9\u30da\u30fc\u30b9\u5185\u306e\u3059\u3079\u3066\u306e\u30b5\u30d6\u30c7\u30a3\u30ec\u30af\u30c8\u30ea\u30fc\u306b\u5bfe\u3057\u3066\u3001 pnpm \u30b3\u30de\u30f3\u30c9\u3092\u518d\u5e30\u7684\u306b\u5b9f\u884c\u3057\u307e\u3059\u3002 \u73fe\u5728\u3001\u6b21\u306e\u30b3\u30de\u30f3\u30c9\u306e\u307f\u304c\u518d\u5e30\u7684\u306b\u4f7f\u7528\u3059\u308b\u3053\u3068\u304c\u3067\u304d\u307e\u3059: add, exec, install, list, outdated, publish, rebuild, remove, run, test, unlink, update, why",source:"@site/i18n/ja/docusaurus-plugin-content-docs/version-5.x/cli/recursive.md",sourceDirName:"cli",slug:"/cli/recursive",permalink:"/ja/5.x/cli/recursive",editUrl:"https://crowdin.com/project/pnpm/ja",tags:[],version:"5.x",frontMatter:{id:"recursive",title:"pnpm recursive"},sidebar:"version-5.x/docs",previous:{title:"pnpm publish",permalink:"/ja/5.x/cli/publish"},next:{title:"pnpm server",permalink:"/ja/5.x/cli/server"}},c={},u=[{value:"Options",id:"options",level:2},{value:"--link-workspace-packages",id:"--link-workspace-packages",level:3},{value:"--workspace-concurrency",id:"--workspace-concurrency",level:3},{value:"--no-bail",id:"--no-bail",level:3},{value:"--no-sort",id:"--no-sort",level:3},{value:"--reverse",id:"--reverse",level:3},{value:"pnpm -r exec",id:"pnpm--r-exec",level:2},{value:"--filter &lt;package_selector&gt;",id:"--filter-package_selector",level:3}],m={toc:u};function k(e){var n=e.components,t=(0,a.Z)(e,i);return(0,l.kt)("wrapper",(0,r.Z)({},m,t,{components:n,mdxType:"MDXLayout"}),(0,l.kt)("p",null,"\u30d1\u30c3\u30b1\u30fc\u30b8\u5185\u307e\u305f\u306f\u4f7f\u7528\u53ef\u80fd\u306a\u30ef\u30fc\u30af\u30b9\u30da\u30fc\u30b9\u5185\u306e\u3059\u3079\u3066\u306e\u30b5\u30d6\u30c7\u30a3\u30ec\u30af\u30c8\u30ea\u30fc\u306b\u5bfe\u3057\u3066\u3001 pnpm \u30b3\u30de\u30f3\u30c9\u3092\u518d\u5e30\u7684\u306b\u5b9f\u884c\u3057\u307e\u3059\u3002 \u73fe\u5728\u3001\u6b21\u306e\u30b3\u30de\u30f3\u30c9\u306e\u307f\u304c\u518d\u5e30\u7684\u306b\u4f7f\u7528\u3059\u308b\u3053\u3068\u304c\u3067\u304d\u307e\u3059: ",(0,l.kt)("inlineCode",{parentName:"p"},"add"),", ",(0,l.kt)("inlineCode",{parentName:"p"},"exec"),", ",(0,l.kt)("inlineCode",{parentName:"p"},"install"),", ",(0,l.kt)("inlineCode",{parentName:"p"},"list"),", ",(0,l.kt)("inlineCode",{parentName:"p"},"outdated"),", ",(0,l.kt)("inlineCode",{parentName:"p"},"publish"),", ",(0,l.kt)("inlineCode",{parentName:"p"},"rebuild"),", ",(0,l.kt)("inlineCode",{parentName:"p"},"remove"),", ",(0,l.kt)("inlineCode",{parentName:"p"},"run"),", ",(0,l.kt)("inlineCode",{parentName:"p"},"test"),", ",(0,l.kt)("inlineCode",{parentName:"p"},"unlink"),", ",(0,l.kt)("inlineCode",{parentName:"p"},"update"),", ",(0,l.kt)("inlineCode",{parentName:"p"},"why")),(0,l.kt)("p",null,"\u30a8\u30a4\u30ea\u30a2\u30b9: ",(0,l.kt)("inlineCode",{parentName:"p"},"m"),", ",(0,l.kt)("inlineCode",{parentName:"p"},"multi"),", ",(0,l.kt)("inlineCode",{parentName:"p"},"<command> -r")),(0,l.kt)("h2",{id:"options"},"Options"),(0,l.kt)("h3",{id:"--link-workspace-packages"},"--link-workspace-packages"),(0,l.kt)("ul",null,(0,l.kt)("li",{parentName:"ul"},"\u30c7\u30d5\u30a9\u30eb\u30c8: ",(0,l.kt)("strong",{parentName:"li"},"true")),(0,l.kt)("li",{parentName:"ul"},"\u30bf\u30a4\u30d7: ",(0,l.kt)("strong",{parentName:"li"},"true, false, deep"))),(0,l.kt)("p",null,"Link locally available packages in workspaces of a monorepo into ",(0,l.kt)("inlineCode",{parentName:"p"},"node_modules")," instead of re-downloading them from the registry. This emulates functionality similar to ",(0,l.kt)("inlineCode",{parentName:"p"},"yarn workspaces"),"."),(0,l.kt)("p",null,"When this is set to deep, local packages can also be linked to subdependencies."),(0,l.kt)("p",null,"Be advised that it is encouraged instead to use ",(0,l.kt)("a",{parentName:"p",href:"/ja/5.x/workspaces#link-workspace-packages"},"npmrc")," for this setting, to enforce the same behaviour in all environments. This option exists solely so you may override that if necessary."),(0,l.kt)("h3",{id:"--workspace-concurrency"},"--workspace-concurrency"),(0,l.kt)("p",null,"\u8ffd\u52a0\u3055\u308c\u305f\u30d0\u30fc\u30b8\u30e7\u30f3\uff1av2.13.0"),(0,l.kt)("ul",null,(0,l.kt)("li",{parentName:"ul"},"\u30c7\u30d5\u30a9\u30eb\u30c8: ",(0,l.kt)("strong",{parentName:"li"},"4")),(0,l.kt)("li",{parentName:"ul"},"\u30bf\u30a4\u30d7: ",(0,l.kt)("strong",{parentName:"li"},"Number"))),(0,l.kt)("p",null,"\u540c\u6642\u306b\u5b9f\u884c\u3059\u308b\u30bf\u30b9\u30af\u306e\u6700\u5927\u6570\u3092\u8a2d\u5b9a\u3057\u307e\u3059\u3002 \u7121\u5236\u9650\u306b\u3059\u308b\u5834\u5408\u306f ",(0,l.kt)("inlineCode",{parentName:"p"},"Infinity")," \u3092\u4f7f\u7528\u3057\u307e\u3059\u3002"),(0,l.kt)("h3",{id:"--no-bail"},"--","[no-]","bail"),(0,l.kt)("p",null,"\u8ffd\u52a0\u3055\u308c\u305f\u30d0\u30fc\u30b8\u30e7\u30f3\uff1av2.13.0"),(0,l.kt)("ul",null,(0,l.kt)("li",{parentName:"ul"},"\u30c7\u30d5\u30a9\u30eb\u30c8: ",(0,l.kt)("strong",{parentName:"li"},"true")),(0,l.kt)("li",{parentName:"ul"},"\u30bf\u30a4\u30d7: ",(0,l.kt)("strong",{parentName:"li"},"Boolean"))),(0,l.kt)("p",null,"true \u306e\u5834\u5408\u3001\u30bf\u30b9\u30af\u304c\u30a8\u30e9\u30fc\u3092\u6295\u3052\u308b\u3068\u505c\u6b62\u3057\u307e\u3059\u3002"),(0,l.kt)("p",null,"\u3053\u306e\u30aa\u30d7\u30b7\u30e7\u30f3\u306f\u3001\u7d42\u4e86\u30b3\u30fc\u30c9\u306b\u306f\u5f71\u97ff\u3057\u307e\u305b\u3093\u3002 Even if ",(0,l.kt)("inlineCode",{parentName:"p"},"--no-bail")," is used, all tasks will finish but if any of the tasks fail, the command will exit with a non-zero code."),(0,l.kt)("p",null,"Example (run tests in every package, continue if tests fail in one of them):"),(0,l.kt)("pre",null,(0,l.kt)("code",{parentName:"pre",className:"language-sh"},"pnpm -r --no-bail test\n")),(0,l.kt)("h3",{id:"--no-sort"},"--","[no-]","sort"),(0,l.kt)("p",null,"\u8ffd\u52a0\u3055\u308c\u305f\u30d0\u30fc\u30b8\u30e7\u30f3\uff1av2.14.0"),(0,l.kt)("ul",null,(0,l.kt)("li",{parentName:"ul"},"\u30c7\u30d5\u30a9\u30eb\u30c8: ",(0,l.kt)("strong",{parentName:"li"},"true")),(0,l.kt)("li",{parentName:"ul"},"\u30bf\u30a4\u30d7: ",(0,l.kt)("strong",{parentName:"li"},"Boolean"))),(0,l.kt)("p",null,(0,l.kt)("inlineCode",{parentName:"p"},"true")," \u306e\u5834\u5408\u3001\u30d1\u30c3\u30b1\u30fc\u30b8\u306f\u30c8\u30dd\u30ed\u30b8\u30ab\u30eb\u30bd\u30fc\u30c8\u306b\u5f93\u3063\u3066\u30bd\u30fc\u30c8\u3055\u308c\u307e\u3059(\u4f9d\u5b58\u5143\u306e\u524d\u306b\u4f9d\u5b58\u5148)\u3002 \u7121\u52b9\u306b\u3059\u308b\u306b\u306f ",(0,l.kt)("inlineCode",{parentName:"p"},"--no-sort")," \u3092\u4f7f\u7528\u3057\u307e\u3059\u3002"),(0,l.kt)("p",null,"\u4f8b:"),(0,l.kt)("pre",null,(0,l.kt)("code",{parentName:"pre",className:"language-sh"},"pnpm -r --no-sort test\n")),(0,l.kt)("h3",{id:"--reverse"},"--reverse"),(0,l.kt)("p",null,"\u8ffd\u52a0\u3055\u308c\u305f\u30d0\u30fc\u30b8\u30e7\u30f3\uff1av5.17.1"),(0,l.kt)("ul",null,(0,l.kt)("li",{parentName:"ul"},"\u30c7\u30d5\u30a9\u30eb\u30c8: ",(0,l.kt)("strong",{parentName:"li"},"false")),(0,l.kt)("li",{parentName:"ul"},"\u30bf\u30a4\u30d7: ",(0,l.kt)("strong",{parentName:"li"},"boolean"))),(0,l.kt)("p",null,(0,l.kt)("inlineCode",{parentName:"p"},"true")," \u306e\u5834\u5408\u3001\u30d1\u30c3\u30b1\u30fc\u30b8\u306e\u30bd\u30fc\u30c8\u9806\u304c\u9006\u306b\u306a\u308a\u307e\u3059\u3002"),(0,l.kt)("pre",null,(0,l.kt)("code",{parentName:"pre"},"pnpm -r --reverse run clean\n")),(0,l.kt)("h2",{id:"pnpm--r-exec"},"pnpm -r exec"),(0,l.kt)("p",null,"Added in: v2.9.0"),(0,l.kt)("pre",null,(0,l.kt)("code",{parentName:"pre",className:"language-sh"},"pnpm -r exec -- <command> [args...]\n")),(0,l.kt)("p",null,"This command runs a command in each package of the monorepo."),(0,l.kt)("p",null,"The name of the current package is available through the environment variable ",(0,l.kt)("inlineCode",{parentName:"p"},"PNPM_PACKAGE_NAME")," (supported from pnpm v2.22.0 onwards)."),(0,l.kt)("p",null,"\u4f8b:"),(0,l.kt)("pre",null,(0,l.kt)("code",{parentName:"pre",className:"language-sh"},"# prune node_modules installations for all packages\npnpm -r exec -- rm -rf node_modules\n# view package information for all packages\npnpm -r exec -- pnpm view $PNPM_PACKAGE_NAME\n")),(0,l.kt)("h3",{id:"--filter-package_selector"},"--filter ","<","package_selector",">"),(0,l.kt)("p",null,(0,l.kt)("a",{parentName:"p",href:"/ja/5.x/filtering"},"\u8a73\u7d30\u306b\u3064\u3044\u3066\u306f\u30d5\u30a3\u30eb\u30bf\u30ea\u30f3\u30b0\u306b\u95a2\u3059\u308b\u30c9\u30ad\u30e5\u30e1\u30f3\u30c8\u3092\u53c2\u7167\u3057\u3066\u304f\u3060\u3055\u3044\u3002")))}k.isMDXComponent=!0}}]);