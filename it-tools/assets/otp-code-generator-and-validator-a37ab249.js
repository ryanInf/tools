import{o as k,c as I,b as i,m as J,d as U,$ as C,a9 as D,f as n,w as p,g as e,bp as A,cy as S,e as g,t as y,n as H,cz as F,i as w,bM as G,af as j,A as K,a1 as Z,F as L,a2 as Q,a4 as z,a5 as W,a6 as X}from"./index-1de7d9e5.js";import{u as Y}from"./useQRCode-4e1a691b.js";import{c as v}from"./index-d5b59b2a.js";import{c as q}from"./token-generator.service-da7d4d69.js";import{_ as b}from"./InputCopyable.vue_vue_type_script_setup_true_lang-85224cc2.js";import{c as ee}from"./computedRefreshable-7d0e6e39.js";import{_ as te}from"./Progress-ae365e71.js";import{_ as oe}from"./Image-46eed9d5.js";import"./browser-e933942f.js";import"./_commonjs-dynamic-modules-302442b1.js";import"./___vite-browser-external_commonjs-proxy-7882723e.js";import"./use-locale-da8c6366.js";const ne={viewBox:"0 0 24 24",width:"1.2em",height:"1.2em"},ae=i("path",{fill:"currentColor",d:"M17.65 6.35A7.958 7.958 0 0 0 12 4a8 8 0 0 0-8 8a8 8 0 0 0 8 8c3.73 0 6.84-2.55 7.73-6h-2.08A5.99 5.99 0 0 1 12 18a6 6 0 0 1-6-6a6 6 0 0 1 6-6c1.66 0 3.14.69 4.22 1.78L13 11h7V4l-2.35 2.35Z"},null,-1),re=[ae];function se(o,t){return k(),I("svg",ne,re)}const ie={name:"mdi-refresh",render:se};function le(o){return(o.match(/.{1,2}/g)??[]).map(t=>Number.parseInt(t,16))}function ce(o,t){return v.HmacSHA1(v.enc.Hex.parse(o),v.enc.Hex.parse(O(t))).toString(v.enc.Hex)}function O(o){const t="ABCDEFGHIJKLMNOPQRSTUVWXYZ234567";return(o.toUpperCase().replace(/=+$/,"").split("").map(s=>t.indexOf(s).toString(2).padStart(5,"0")).join("").match(/.{1,8}/g)??[]).map(s=>Number.parseInt(s,2).toString(16).padStart(2,"0")).join("")}function pe({key:o,counter:t=0}){const l=ce(t.toString(16).padStart(16,"0"),o),r=le(l),s=r[19]&15,a=(r[s]&127)<<24|(r[s+1]&255)<<16|(r[s+2]&255)<<8|r[s+3]&255;return String(a%1e6).padStart(6,"0")}function $({now:o,timeStep:t}){return Math.floor(o/1e3/t)}function T({key:o,now:t=Date.now(),timeStep:l=30}){const r=$({now:t,timeStep:l});return pe({key:o,counter:r})}function ue({secret:o,app:t="IT-Tools",account:l="demo-user",algorithm:r="SHA1",digits:s=6,period:a=30}){const f=J({issuer:t,secret:o,algorithm:r,digits:s,period:a}).map((c,h)=>`${encodeURIComponent(h)}=${encodeURIComponent(c)}`).join("&");return`otpauth://totp/${encodeURIComponent(t)}:${encodeURIComponent(l)}?${f}`}function R(){return q({length:16,alphabet:"ABCDEFGHIJKLMNOPQRSTUVWXYZ234567"})}const de=i("div",{"mb-5px":"","w-full":"",flex:"","items-center":""},[i("div",{"flex-1":"","text-left":""}," Previous "),i("div",{"flex-1":"","text-center":""}," Current OTP "),i("div",{"flex-1":"","text-right":""}," Next ")],-1),me={flex:"","items-center":""},_e=U({__name:"token-display",props:{tokens:{}},setup(o){const t=o,{copy:l,isJustCopied:r}=C({createToast:!1}),{copy:s,isJustCopied:a}=C({createToast:!1}),{copy:_,isJustCopied:f}=C({createToast:!1}),{tokens:c}=D(t);return(h,u)=>{const d=H,m=A;return k(),I("div",null,[de,i("div",me,[n(m,{tooltip:e(r)?"Copied !":"Copy previous OTP",position:"bottom","flex-1":""},{default:p(()=>[n(d,{"data-test-id":"previous-otp","w-full":"","important:h-12":"","important:rounded-r-none":"","important:font-mono":"",onClick:u[0]||(u[0]=S(x=>e(l)(e(c).previous),["prevent"]))},{default:p(()=>[g(y(e(c).previous),1)]),_:1})]),_:1},8,["tooltip"]),n(m,{tooltip:e(a)?"Copied !":"Copy current OTP",position:"bottom","flex-1":"","flex-basis-5xl":""},{default:p(()=>[n(d,{"data-test-id":"current-otp","w-full":"","important:border-x":"1px solid gray op-40","important:h-12":"","important:rounded-0":"","important:text-22px":"",onClick:u[1]||(u[1]=S(x=>e(s)(e(c).current),["prevent"]))},{default:p(()=>[g(y(e(c).current),1)]),_:1})]),_:1},8,["tooltip"]),n(m,{tooltip:e(f)?"Copied !":"Copy next OTP",position:"bottom","flex-1":""},{default:p(()=>[n(d,{"data-test-id":"next-otp","w-full":"","important:h-12":"","important:rounded-l-none":"",onClick:u[2]||(u[2]=S(x=>e(_)(e(c).next),["prevent"]))},{default:p(()=>[g(y(e(c).next),1)]),_:1})]),_:1},8,["tooltip"])])])}}}),fe=o=>(z("data-v-388f1b9b"),o=o(),W(),o),he={style:{"max-width":"350px"}},xe={style:{"text-align":"center"}},ve={"mt-4":"",flex:"","flex-col":"","items-center":"","justify-center":"","gap-3":""},be={style:{"max-width":"350px"}},ge=fe(()=>i("p",null,"Iteration",-1)),ye=U({__name:"otp-code-generator-and-validator",setup(o){const t=F(),l=w(()=>t.value/1e3%30),r=G(),s=j(),a=K(R());function _(){a.value=R()}const[f]=ee(()=>({previous:T({key:a.value,now:t.value-3e4}),current:T({key:a.value,now:t.value}),next:T({key:a.value,now:t.value+3e4})}),{throttle:500}),c=w(()=>ue({secret:a.value})),{qrcode:h}=Y({text:c,color:{background:w(()=>s.isDarkTheme?"#ffffff":"#00000000"),foreground:"#000000"},options:{width:210}}),u=[{message:"Secret should be a base32 string",validator:d=>d.toUpperCase().match(/^[A-Z234567]+$/)},{message:"Please set a secret",validator:d=>d!==""}];return(d,m)=>{const x=ie,P=H,N=A,V=Q,M=te,B=oe;return k(),I(L,null,[i("div",he,[n(V,{value:e(a),"onUpdate:value":m[0]||(m[0]=E=>Z(a)?a.value=E:null),label:"Secret",placeholder:"Paste your TOTP secret...","mb-5":"","validation-rules":u},{suffix:p(()=>[n(N,{tooltip:"Generate a new random secret"},{default:p(()=>[n(P,{circle:"",variant:"text",size:"small",onClick:_},{default:p(()=>[n(x)]),_:1})]),_:1})]),_:1},8,["value"]),i("div",null,[n(_e,{tokens:e(f)},null,8,["tokens"]),n(M,{percentage:100*e(l)/30,color:e(r).primaryColor,"show-indicator":!1},null,8,["percentage","color"]),i("div",xe," Next in "+y(String(Math.floor(30-e(l))).padStart(2,"0"))+"s ",1)]),i("div",ve,[n(B,{src:e(h)},null,8,["src"]),n(P,{href:e(c),target:"_blank"},{default:p(()=>[g(" Open Key URI in new tab ")]),_:1},8,["href"])])]),i("div",be,[n(b,{label:"Secret in hexadecimal",value:e(O)(e(a)),readonly:"",placeholder:"Secret in hex will be displayed here","mb-5":""},null,8,["value"]),n(b,{label:"Epoch",value:Math.floor(e(t)/1e3).toString(),readonly:"","mb-5":"",placeholder:"Epoch in sec will be displayed here"},null,8,["value"]),ge,n(b,{value:String(e($)({now:e(t),timeStep:30})),readonly:"",label:"Count:","label-position":"left","label-width":"90px","label-align":"right",placeholder:"Iteration count will be displayed here"},null,8,["value"]),n(b,{value:e($)({now:e(t),timeStep:30}).toString(16).padStart(16,"0"),readonly:"",placeholder:"Iteration count in hex will be displayed here","label-position":"left","label-width":"90px","label-align":"right",label:"Padded hex:"},null,8,["value"])])],64)}}});const Oe=X(ye,[["__scopeId","data-v-388f1b9b"]]);export{Oe as default};