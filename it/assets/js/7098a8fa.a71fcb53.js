"use strict";(self.webpackChunk=self.webpackChunk||[]).push([[7887],{9613:(e,t,n)=>{n.d(t,{Zo:()=>s,kt:()=>d});var i=n(9496);function o(e,t,n){return t in e?Object.defineProperty(e,t,{value:n,enumerable:!0,configurable:!0,writable:!0}):e[t]=n,e}function r(e,t){var n=Object.keys(e);if(Object.getOwnPropertySymbols){var i=Object.getOwnPropertySymbols(e);t&&(i=i.filter((function(t){return Object.getOwnPropertyDescriptor(e,t).enumerable}))),n.push.apply(n,i)}return n}function l(e){for(var t=1;t<arguments.length;t++){var n=null!=arguments[t]?arguments[t]:{};t%2?r(Object(n),!0).forEach((function(t){o(e,t,n[t])})):Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(n)):r(Object(n)).forEach((function(t){Object.defineProperty(e,t,Object.getOwnPropertyDescriptor(n,t))}))}return e}function a(e,t){if(null==e)return{};var n,i,o=function(e,t){if(null==e)return{};var n,i,o={},r=Object.keys(e);for(i=0;i<r.length;i++)n=r[i],t.indexOf(n)>=0||(o[n]=e[n]);return o}(e,t);if(Object.getOwnPropertySymbols){var r=Object.getOwnPropertySymbols(e);for(i=0;i<r.length;i++)n=r[i],t.indexOf(n)>=0||Object.prototype.propertyIsEnumerable.call(e,n)&&(o[n]=e[n])}return o}var p=i.createContext({}),c=function(e){var t=i.useContext(p),n=t;return e&&(n="function"==typeof e?e(t):l(l({},t),e)),n},s=function(e){var t=c(e.components);return i.createElement(p.Provider,{value:t},e.children)},u={inlineCode:"code",wrapper:function(e){var t=e.children;return i.createElement(i.Fragment,{},t)}},m=i.forwardRef((function(e,t){var n=e.components,o=e.mdxType,r=e.originalType,p=e.parentName,s=a(e,["components","mdxType","originalType","parentName"]),m=c(n),d=o,v=m["".concat(p,".").concat(d)]||m[d]||u[d]||r;return n?i.createElement(v,l(l({ref:t},s),{},{components:n})):i.createElement(v,l({ref:t},s))}));function d(e,t){var n=arguments,o=t&&t.mdxType;if("string"==typeof e||o){var r=n.length,l=new Array(r);l[0]=m;var a={};for(var p in t)hasOwnProperty.call(t,p)&&(a[p]=t[p]);a.originalType=e,a.mdxType="string"==typeof e?e:o,l[1]=a;for(var c=2;c<r;c++)l[c]=n[c];return i.createElement.apply(null,l)}return i.createElement.apply(null,n)}m.displayName="MDXCreateElement"},2133:(e,t,n)=>{n.r(t),n.d(t,{frontMatter:()=>a,contentTitle:()=>p,metadata:()=>c,assets:()=>s,toc:()=>u,default:()=>d});var i=n(7813),o=n(7044),r=(n(9496),n(9613)),l=["components"],a={id:"exec",title:"pnpm exec"},p=void 0,c={unversionedId:"cli/exec",id:"version-6.x/cli/exec",title:"pnpm exec",description:"Esegue un comando di shell nell'ambito di un progetto.",source:"@site/i18n/it/docusaurus-plugin-content-docs/version-6.x/cli/exec.md",sourceDirName:"cli",slug:"/cli/exec",permalink:"/it/cli/exec",editUrl:"https://crowdin.com/project/pnpm/it",tags:[],version:"6.x",frontMatter:{id:"exec",title:"pnpm exec"},sidebar:"version-6.x/docs",previous:{title:"pnpm test",permalink:"/it/cli/test"},next:{title:"pnpm dlx",permalink:"/it/cli/dlx"}},s={},u=[{value:"Esempi",id:"esempi",level:2},{value:"Opzioni",id:"opzioni",level:2},{value:"--recursive, -r",id:"--recursive--r",level:3},{value:"Esempi",id:"esempi-1",level:4},{value:"--parallel",id:"--parallel",level:3},{value:"--shell-mode, -c",id:"--shell-mode--c",level:3},{value:"--filter &lt;selettore_pacchetto&gt;",id:"--filter-selettore_pacchetto",level:3}],m={toc:u};function d(e){var t=e.components,n=(0,o.Z)(e,l);return(0,r.kt)("wrapper",(0,i.Z)({},m,n,{components:t,mdxType:"MDXLayout"}),(0,r.kt)("p",null,"Esegue un comando di shell nell'ambito di un progetto."),(0,r.kt)("p",null,(0,r.kt)("inlineCode",{parentName:"p"},"node_modules/.bin")," viene aggiunto a ",(0,r.kt)("inlineCode",{parentName:"p"},"PATH"),", quindi ",(0,r.kt)("inlineCode",{parentName:"p"},"pnpm exec")," consente l'esecuzione dei comandi delle dipendenze."),(0,r.kt)("h2",{id:"esempi"},"Esempi"),(0,r.kt)("p",null,"Se hai Jest come dipendenza del tuo progetto, non \xe8 necessario installare Jest a livello globale, basta eseguirlo con ",(0,r.kt)("inlineCode",{parentName:"p"},"pnpm exec"),":"),(0,r.kt)("pre",null,(0,r.kt)("code",{parentName:"pre"},"pnpm exec jest\n")),(0,r.kt)("p",null,"La parte ",(0,r.kt)("inlineCode",{parentName:"p"},"exec")," \xe8 in realt\xe0 facoltativa quando il comando non \xe8 in conflitto con un comando pnpm integrato, quindi puoi anche eseguire:"),(0,r.kt)("pre",null,(0,r.kt)("code",{parentName:"pre"},"pnpm jest\n")),(0,r.kt)("h2",{id:"opzioni"},"Opzioni"),(0,r.kt)("p",null,"Qualsiasi opzione per il comando ",(0,r.kt)("inlineCode",{parentName:"p"},"exec")," dovrebbe essere elencata prima della parola chiave ",(0,r.kt)("inlineCode",{parentName:"p"},"exec"),". Le opzioni elencate dopo la parola chiave ",(0,r.kt)("inlineCode",{parentName:"p"},"exec")," vengono passate al comando eseguito."),(0,r.kt)("p",null,"Bene. pnpm verr\xe0 eseguito in modo ricorsivo:"),(0,r.kt)("pre",null,(0,r.kt)("code",{parentName:"pre"},"pnpm -r exec jest\n")),(0,r.kt)("p",null,"Male, pnpm non verr\xe0 eseguito in modo ricorsivo ma ",(0,r.kt)("inlineCode",{parentName:"p"},"jest")," verr\xe0 eseguito con l'opzione ",(0,r.kt)("inlineCode",{parentName:"p"},"-r"),":"),(0,r.kt)("pre",null,(0,r.kt)("code",{parentName:"pre"},"pnpm exec jest -r\n")),(0,r.kt)("h3",{id:"--recursive--r"},"--recursive, -r"),(0,r.kt)("p",null,"Aggiunto nella versione: v2.9.0"),(0,r.kt)("p",null,"Esegue il comando shell in ogni progetto dello spazio di lavoro."),(0,r.kt)("p",null,"Il nome del pacchetto corrente \xe8 disponibile tramite la variabile di ambiente ",(0,r.kt)("inlineCode",{parentName:"p"},"PNPM_PACKAGE_NAME")," (supportato da pnpm v2.22.0 in poi)."),(0,r.kt)("h4",{id:"esempi-1"},"Esempi"),(0,r.kt)("p",null,"Elimina le installazioni ",(0,r.kt)("inlineCode",{parentName:"p"},"node_modules")," per tutti i pacchetti:"),(0,r.kt)("pre",null,(0,r.kt)("code",{parentName:"pre"},"pnpm -r exec rm -rf node_modules\n")),(0,r.kt)("p",null,"Visualizza le informazioni sui pacchetti per tutti i pacchetti. Questo dovrebbe essere usato con l'opzione ",(0,r.kt)("inlineCode",{parentName:"p"},"--shell-mode")," (o ",(0,r.kt)("inlineCode",{parentName:"p"},"-c"),") affinch\xe9 la variabile di ambiente funzioni."),(0,r.kt)("pre",null,(0,r.kt)("code",{parentName:"pre"},"pnpm -rc exec pnpm view $PNPM_PACKAGE_NAME\n")),(0,r.kt)("h3",{id:"--parallel"},"--parallel"),(0,r.kt)("p",null,"Aggiunto nella versione: v5.1.0"),(0,r.kt)("p",null,"Ignora completamente la convaluta e l'ordinamento topologico, eseguendo un dato script immediatamente in tutti i pacchetti corrispondenti con output di streaming prefissato. Questo \xe8 il flag preferito per i processi a lungo termine su molti pacchetti, per esempio, un lungo processo di compilazione."),(0,r.kt)("h3",{id:"--shell-mode--c"},"--shell-mode, -c"),(0,r.kt)("p",null,"Aggiunto nella versione: v6.31.0"),(0,r.kt)("p",null,"Esegue il comando all'interno di una shell. Utilizza ",(0,r.kt)("inlineCode",{parentName:"p"},"/bin/sh")," su UNIX e ",(0,r.kt)("inlineCode",{parentName:"p"},"\\cmd.exe")," su Windows."),(0,r.kt)("h3",{id:"--filter-selettore_pacchetto"},"--filter ","<","selettore_pacchetto",">"),(0,r.kt)("p",null,(0,r.kt)("a",{parentName:"p",href:"/it/filtering"},"Ulteriori informazioni sui filtri.")))}d.isMDXComponent=!0}}]);