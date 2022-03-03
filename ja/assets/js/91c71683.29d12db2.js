"use strict";(self.webpackChunk=self.webpackChunk||[]).push([[7133],{9613:(e,n,r)=>{r.d(n,{Zo:()=>u,kt:()=>f});var t=r(9496);function o(e,n,r){return n in e?Object.defineProperty(e,n,{value:r,enumerable:!0,configurable:!0,writable:!0}):e[n]=r,e}function p(e,n){var r=Object.keys(e);if(Object.getOwnPropertySymbols){var t=Object.getOwnPropertySymbols(e);n&&(t=t.filter((function(n){return Object.getOwnPropertyDescriptor(e,n).enumerable}))),r.push.apply(r,t)}return r}function i(e){for(var n=1;n<arguments.length;n++){var r=null!=arguments[n]?arguments[n]:{};n%2?p(Object(r),!0).forEach((function(n){o(e,n,r[n])})):Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(r)):p(Object(r)).forEach((function(n){Object.defineProperty(e,n,Object.getOwnPropertyDescriptor(r,n))}))}return e}function a(e,n){if(null==e)return{};var r,t,o=function(e,n){if(null==e)return{};var r,t,o={},p=Object.keys(e);for(t=0;t<p.length;t++)r=p[t],n.indexOf(r)>=0||(o[r]=e[r]);return o}(e,n);if(Object.getOwnPropertySymbols){var p=Object.getOwnPropertySymbols(e);for(t=0;t<p.length;t++)r=p[t],n.indexOf(r)>=0||Object.prototype.propertyIsEnumerable.call(e,r)&&(o[r]=e[r])}return o}var c=t.createContext({}),l=function(e){var n=t.useContext(c),r=n;return e&&(r="function"==typeof e?e(n):i(i({},n),e)),r},u=function(e){var n=l(e.components);return t.createElement(c.Provider,{value:n},e.children)},s={inlineCode:"code",wrapper:function(e){var n=e.children;return t.createElement(t.Fragment,{},n)}},m=t.forwardRef((function(e,n){var r=e.components,o=e.mdxType,p=e.originalType,c=e.parentName,u=a(e,["components","mdxType","originalType","parentName"]),m=l(r),f=o,d=m["".concat(c,".").concat(f)]||m[f]||s[f]||p;return r?t.createElement(d,i(i({ref:n},u),{},{components:r})):t.createElement(d,i({ref:n},u))}));function f(e,n){var r=arguments,o=n&&n.mdxType;if("string"==typeof e||o){var p=r.length,i=new Array(p);i[0]=m;var a={};for(var c in n)hasOwnProperty.call(n,c)&&(a[c]=n[c]);a.originalType=e,a.mdxType="string"==typeof e?e:o,i[1]=a;for(var l=2;l<p;l++)i[l]=r[l];return t.createElement.apply(null,i)}return t.createElement.apply(null,r)}m.displayName="MDXCreateElement"},6677:(e,n,r)=>{r.r(n),r.d(n,{frontMatter:()=>a,contentTitle:()=>c,metadata:()=>l,assets:()=>u,toc:()=>s,default:()=>f});var t=r(7813),o=r(7044),p=(r(9496),r(9613)),i=["components"],a={id:"configuring",title:"\u8a2d\u5b9a"},c=void 0,l={unversionedId:"configuring",id:"version-6.x/configuring",title:"\u8a2d\u5b9a",description:"pnpm \u306f npm\u306e\u8a2d\u5b9a \u30d5\u30a9\u30fc\u30de\u30c3\u30c8\u3092\u4f7f\u7528\u3057\u3066\u3044\u307e\u3059\u3002 \u3057\u305f\u304c\u3063\u3066\u3001npm \u3068\u540c\u3058\u65b9\u6cd5\u3067\u8a2d\u5b9a\u3067\u304d\u307e\u3059\u3002 \u4f8b\u3048\u3070\u3001",source:"@site/i18n/ja/docusaurus-plugin-content-docs/version-6.x/configuring.md",sourceDirName:".",slug:"/configuring",permalink:"/ja/configuring",editUrl:"https://crowdin.com/project/pnpm/ja",tags:[],version:"6.x",frontMatter:{id:"configuring",title:"\u8a2d\u5b9a"},sidebar:"version-6.x/docs",previous:{title:"pnpx CLI",permalink:"/ja/pnpx-cli"},next:{title:"\u30d5\u30a3\u30eb\u30bf\u30ea\u30f3\u30b0",permalink:"/ja/filtering"}},u={},s=[],m={toc:s};function f(e){var n=e.components,r=(0,o.Z)(e,i);return(0,p.kt)("wrapper",(0,t.Z)({},m,r,{components:n,mdxType:"MDXLayout"}),(0,p.kt)("p",null,"pnpm \u306f ",(0,p.kt)("a",{parentName:"p",href:"https://docs.npmjs.com/misc/config"},"npm\u306e\u8a2d\u5b9a")," \u30d5\u30a9\u30fc\u30de\u30c3\u30c8\u3092\u4f7f\u7528\u3057\u3066\u3044\u307e\u3059\u3002 \u3057\u305f\u304c\u3063\u3066\u3001npm \u3068\u540c\u3058\u65b9\u6cd5\u3067\u8a2d\u5b9a\u3067\u304d\u307e\u3059\u3002 \u4f8b\u3048\u3070\u3001"),(0,p.kt)("pre",null,(0,p.kt)("code",{parentName:"pre"},"pnpm config set store-dir /path/to/.pnpm-store\n")),(0,p.kt)("p",null,"\u30b9\u30c8\u30a2\u304c\u8a2d\u5b9a\u3055\u308c\u3066\u3044\u306a\u3044\u5834\u5408\u3001pnpm \u306f\u81ea\u52d5\u7684\u306b\u540c\u3058\u30c9\u30e9\u30a4\u30d6\u306b\u30b9\u30c8\u30a2\u3092\u4f5c\u6210\u3057\u307e\u3059\u3002 \u8907\u6570\u306e\u30cf\u30fc\u30c9\u30c9\u30e9\u30a4\u30d6\u3084\u30d5\u30a1\u30a4\u30eb\u30b7\u30b9\u30c6\u30e0\u3067 pnpm \u3092\u52d5\u4f5c\u3055\u305b\u308b\u5fc5\u8981\u304c\u3042\u308b\u5834\u5408\u306f\u3001 ",(0,p.kt)("a",{parentName:"p",href:"/ja/faq#does-pnpm-work-across-multiple-hard-drives-or-filesystems"},"FAQ")," \u3092\u304a\u8aad\u307f\u304f\u3060\u3055\u3044\u3002"),(0,p.kt)("p",null,"\u3055\u3089\u306b\u3001pnpm \u306f npm \u304c\u30a4\u30f3\u30b9\u30c8\u30fc\u30eb\u306b\u4f7f\u7528\u3059\u308b\u306e\u3068\u540c\u3058\u8a2d\u5b9a\u3092\u4f7f\u7528\u3057\u307e\u3059\u3002 npm \u3067\u52d5\u4f5c\u3059\u308b\u3088\u3046\u306b\u69cb\u6210\u3055\u308c\u3066\u3044\u308b\u30d7\u30e9\u30a4\u30d9\u30fc\u30c8\u30ec\u30b8\u30b9\u30c8\u30ea\u30fc\u306b\u95a2\u3059\u308b\u8a2d\u5b9a\u304c\u3042\u308b\u5834\u5408\u3001 pnpm \u3067\u8ffd\u52a0\u306e\u8a2d\u5b9a\u3092\u3059\u308b\u3053\u3068\u306a\u304f\u30ea\u30af\u30a8\u30b9\u30c8\u3092\u8a8d\u8a3c\u3059\u308b\u3053\u3068\u304c\u3067\u304d\u307e\u3059\u3002"),(0,p.kt)("p",null,"\u3053\u308c\u3089\u306e\u30aa\u30d7\u30b7\u30e7\u30f3\u306b\u52a0\u3048\u3066\u3001 pnpm \u3067\u306f\u3059\u3079\u3066\u306e\u30d1\u30e9\u30e1\u30fc\u30bf\u3092\u30aa\u30d7\u30b7\u30e7\u30f3\u3068\u3057\u3066\u30d5\u30e9\u30b0\u306b\u6307\u5b9a\u3067\u304d\u307e\u3059\u3002 ( \u4f8b\u3048\u3070\u4e0b\u8a18\u306e\u8a2d\u5b9a\u3067\u3042\u308c\u3070\u3001 ",(0,p.kt)("inlineCode",{parentName:"p"},"--filter")," \u3084 ",(0,p.kt)("inlineCode",{parentName:"p"},"--workspace-concurrenc")," \u306e\u3088\u3046\u306b\u3002)"),(0,p.kt)("pre",null,(0,p.kt)("code",{parentName:"pre"},"workspace-concurrency = 1\nfilter = @my-scope/*\n")),(0,p.kt)("p",null,"\u8a73\u7d30\u306b\u3064\u3044\u3066\u306f\u3001 ",(0,p.kt)("a",{parentName:"p",href:"/ja/cli/config"},(0,p.kt)("inlineCode",{parentName:"a"},"config")," \u30b3\u30de\u30f3\u30c9")," \u3092\u53c2\u7167\u3057\u3066\u304f\u3060\u3055\u3044\u3002"))}f.isMDXComponent=!0}}]);