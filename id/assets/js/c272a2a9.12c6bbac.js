"use strict";(self.webpackChunk=self.webpackChunk||[]).push([[9386],{9613:(e,a,t)=>{t.d(a,{Zo:()=>u,kt:()=>s});var n=t(9496);function r(e,a,t){return a in e?Object.defineProperty(e,a,{value:t,enumerable:!0,configurable:!0,writable:!0}):e[a]=t,e}function i(e,a){var t=Object.keys(e);if(Object.getOwnPropertySymbols){var n=Object.getOwnPropertySymbols(e);a&&(n=n.filter((function(a){return Object.getOwnPropertyDescriptor(e,a).enumerable}))),t.push.apply(t,n)}return t}function p(e){for(var a=1;a<arguments.length;a++){var t=null!=arguments[a]?arguments[a]:{};a%2?i(Object(t),!0).forEach((function(a){r(e,a,t[a])})):Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(t)):i(Object(t)).forEach((function(a){Object.defineProperty(e,a,Object.getOwnPropertyDescriptor(t,a))}))}return e}function l(e,a){if(null==e)return{};var t,n,r=function(e,a){if(null==e)return{};var t,n,r={},i=Object.keys(e);for(n=0;n<i.length;n++)t=i[n],a.indexOf(t)>=0||(r[t]=e[t]);return r}(e,a);if(Object.getOwnPropertySymbols){var i=Object.getOwnPropertySymbols(e);for(n=0;n<i.length;n++)t=i[n],a.indexOf(t)>=0||Object.prototype.propertyIsEnumerable.call(e,t)&&(r[t]=e[t])}return r}var d=n.createContext({}),o=function(e){var a=n.useContext(d),t=a;return e&&(t="function"==typeof e?e(a):p(p({},a),e)),t},u=function(e){var a=o(e.components);return n.createElement(d.Provider,{value:a},e.children)},k={inlineCode:"code",wrapper:function(e){var a=e.children;return n.createElement(n.Fragment,{},a)}},m=n.forwardRef((function(e,a){var t=e.components,r=e.mdxType,i=e.originalType,d=e.parentName,u=l(e,["components","mdxType","originalType","parentName"]),m=o(t),s=r,c=m["".concat(d,".").concat(s)]||m[s]||k[s]||i;return t?n.createElement(c,p(p({ref:a},u),{},{components:t})):n.createElement(c,p({ref:a},u))}));function s(e,a){var t=arguments,r=a&&a.mdxType;if("string"==typeof e||r){var i=t.length,p=new Array(i);p[0]=m;var l={};for(var d in a)hasOwnProperty.call(a,d)&&(l[d]=a[d]);l.originalType=e,l.mdxType="string"==typeof e?e:r,p[1]=l;for(var o=2;o<i;o++)p[o]=t[o];return n.createElement.apply(null,p)}return n.createElement.apply(null,t)}m.displayName="MDXCreateElement"},6140:(e,a,t)=>{t.r(a),t.d(a,{frontMatter:()=>l,contentTitle:()=>d,metadata:()=>o,assets:()=>u,toc:()=>k,default:()=>s});var n=t(7813),r=t(7044),i=(t(9496),t(9613)),p=["components"],l={id:"update",title:"pnpm update"},d=void 0,o={unversionedId:"cli/update",id:"version-6.x/cli/update",title:"pnpm update",description:"Alias: up",source:"@site/i18n/id/docusaurus-plugin-content-docs/version-6.x/cli/update.md",sourceDirName:"cli",slug:"/cli/update",permalink:"/id/cli/update",editUrl:"https://crowdin.com/project/pnpm/id",tags:[],version:"6.x",frontMatter:{id:"update",title:"pnpm update"},sidebar:"version-6.x/docs",previous:{title:"pnpm install",permalink:"/id/cli/install"},next:{title:"pnpm remove",permalink:"/id/cli/remove"}},u={},k=[{value:"RINGKASAN",id:"ringkasan",level:2},{value:"Options",id:"options",level:2},{value:"--recursive, -r",id:"--recursive--r",level:3},{value:"--latest, -L",id:"--latest--l",level:3},{value:"--global",id:"--global",level:3},{value:"--workspace",id:"--workspace",level:3},{value:"--prod, -P",id:"--prod--p",level:3},{value:"--dev, -D",id:"--dev--d",level:3},{value:"--no-optional",id:"--no-optional",level:3},{value:"--interactive, -i",id:"--interactive--i",level:3},{value:"--filter &lt;package_selector&gt;",id:"--filter-package_selector",level:3}],m={toc:k};function s(e){var a=e.components,t=(0,r.Z)(e,p);return(0,i.kt)("wrapper",(0,n.Z)({},m,t,{components:a,mdxType:"MDXLayout"}),(0,i.kt)("p",null,"Alias: ",(0,i.kt)("inlineCode",{parentName:"p"},"up")),(0,i.kt)("p",null,(0,i.kt)("inlineCode",{parentName:"p"},"pnpm update")," akan memperbarui paket-paket ke versi yang mutakhir berdasarkan rentang yang ditentukan."),(0,i.kt)("p",null,"Ketika digunakan tanpa argumen, perintah ini akan memperbarui semua dependensi. Anda dapat menggunakan pola untuk memperbarui dependensi tertentu."),(0,i.kt)("h2",{id:"ringkasan"},"RINGKASAN"),(0,i.kt)("table",null,(0,i.kt)("thead",{parentName:"table"},(0,i.kt)("tr",{parentName:"thead"},(0,i.kt)("th",{parentName:"tr",align:null},"Perintah"),(0,i.kt)("th",{parentName:"tr",align:null},"Arti"))),(0,i.kt)("tbody",{parentName:"table"},(0,i.kt)("tr",{parentName:"tbody"},(0,i.kt)("td",{parentName:"tr",align:null},(0,i.kt)("inlineCode",{parentName:"td"},"pnpm up")),(0,i.kt)("td",{parentName:"tr",align:null},"Akan memperbarui semua dependensi dengan mengikuti rentang waktu yang ditentukan dalam",(0,i.kt)("inlineCode",{parentName:"td"},"package.json"))),(0,i.kt)("tr",{parentName:"tbody"},(0,i.kt)("td",{parentName:"tr",align:null},(0,i.kt)("inlineCode",{parentName:"td"},"pnpm up --latest")),(0,i.kt)("td",{parentName:"tr",align:null},"Akan memperbarui semua dependensi dengan mengabaikan rentang waktu yang ditentukan dalam",(0,i.kt)("inlineCode",{parentName:"td"},"package.json"))),(0,i.kt)("tr",{parentName:"tbody"},(0,i.kt)("td",{parentName:"tr",align:null},(0,i.kt)("inlineCode",{parentName:"td"},"pnpm up foo@2")),(0,i.kt)("td",{parentName:"tr",align:null},"Akan memperbarui ",(0,i.kt)("inlineCode",{parentName:"td"},"foo")," ke versi paling mutakhir di versi v2")),(0,i.kt)("tr",{parentName:"tbody"},(0,i.kt)("td",{parentName:"tr",align:null},(0,i.kt)("inlineCode",{parentName:"td"},'pnpm up "@babel/*"')),(0,i.kt)("td",{parentName:"tr",align:null},"Akan memperbarui semua dependensi di bawah lingkup ",(0,i.kt)("inlineCode",{parentName:"td"},"@babel"))))),(0,i.kt)("h2",{id:"options"},"Options"),(0,i.kt)("h3",{id:"--recursive--r"},"--recursive, -r"),(0,i.kt)("p",null,"Menjalankan pembaruan secara bersamaan di semua subdirektori yang memiliki ",(0,i.kt)("inlineCode",{parentName:"p"},"package.json")," di dalamnya (tidak termasuk ",(0,i.kt)("inlineCode",{parentName:"p"},"node_modules"),")."),(0,i.kt)("p",null,"Contoh penggunaan:"),(0,i.kt)("pre",null,(0,i.kt)("code",{parentName:"pre",className:"language-sh"},"pnpm --recursive update\n# memperbarui semua paket sampai kedalaman 100 subdirektori\npnpm --recursive update --depth 100\n# memperbarui typescript ke versi paling mutakhir di setiap paket\npnpm --recursive update typescript@latest\n")),(0,i.kt)("h3",{id:"--latest--l"},"--latest, -L"),(0,i.kt)("p",null,"Ditambahkan di: v3.2.0"),(0,i.kt)("p",null,"Mengabaikan rentang versi yang ditentukan dalam ",(0,i.kt)("inlineCode",{parentName:"p"},"package.json"),". Sebagai gantinya, akan menggunakan versi yang ditentukan oleh tanda ",(0,i.kt)("inlineCode",{parentName:"p"},"latest")," (mutakhir), yang mungkin berpotensi meningkatkan versi paket di seluruh versi utama."),(0,i.kt)("h3",{id:"--global"},"--global"),(0,i.kt)("p",null,"Memperbarui paket-paket global."),(0,i.kt)("h3",{id:"--workspace"},"--workspace"),(0,i.kt)("p",null,"Ditambahkan di: v4.4.0"),(0,i.kt)("p",null,"Mencoba menautkan semua paket dari workspace. Versi akan diperbarui mengikuti versi paket yang ditentukan di dalam workspace."),(0,i.kt)("p",null,"Jika paket yang tentukan mendapatkan pembaruan, perintah akan gagal jika salah satu pembaruan dependensi tidak ditemukan di dalam workspace. Misalnya, perintah berikut akan gagal jika ",(0,i.kt)("inlineCode",{parentName:"p"},"express")," bukanlah paket workspace:"),(0,i.kt)("p",null,(0,i.kt)("inlineCode",{parentName:"p"},"pnpm up -r --workspace express"),"."),(0,i.kt)("h3",{id:"--prod--p"},"--prod, -P"),(0,i.kt)("p",null,"Only update packages in ",(0,i.kt)("inlineCode",{parentName:"p"},"dependencies")," and ",(0,i.kt)("inlineCode",{parentName:"p"},"optionalDependencies"),"."),(0,i.kt)("h3",{id:"--dev--d"},"--dev, -D"),(0,i.kt)("p",null,"Only update packages in ",(0,i.kt)("inlineCode",{parentName:"p"},"devDependencies"),"."),(0,i.kt)("h3",{id:"--no-optional"},"--no-optional"),(0,i.kt)("p",null,"Don't update packages in ",(0,i.kt)("inlineCode",{parentName:"p"},"optionalDependencies"),"."),(0,i.kt)("h3",{id:"--interactive--i"},"--interactive, -i"),(0,i.kt)("p",null,"Added in: v4.8.0"),(0,i.kt)("p",null,"Show outdated dependencies and select which ones to update."),(0,i.kt)("h3",{id:"--filter-package_selector"},"--filter ","<","package_selector",">"),(0,i.kt)("p",null,(0,i.kt)("a",{parentName:"p",href:"/id/filtering"},"Read more about filtering.")))}s.isMDXComponent=!0}}]);