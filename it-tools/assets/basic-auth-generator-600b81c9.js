import{d as x,A as c,i as v,$ as g,c as h,f as t,g as s,a1 as u,w as l,b as w,a2 as y,a0 as $,n as A,o as B,e as p,t as C,a6 as k}from"./index-1de7d9e5.js";import{t as N}from"./base64-94c6bba0.js";import{_ as U}from"./Scrollbar-ea815bc5.js";import{_ as V}from"./Statistic-0f7a59b2.js";const z={"mt-5":"",flex:"","justify-center":""},G=x({__name:"basic-auth-generator",setup(T){const o=c(""),a=c(""),r=v(()=>`Authorization: Basic ${N(`${o.value}:${a.value}`)}`),{copy:i}=g({source:r,text:"Header copied to the clipboard"});return(Y,e)=>{const _=y,d=U,m=V,b=$,f=A;return B(),h("div",null,[t(_,{value:s(o),"onUpdate:value":e[0]||(e[0]=n=>u(o)?o.value=n:null),label:"Username",placeholder:"Your username...",clearable:"","raw-text":"","mb-5":""},null,8,["value"]),t(_,{value:s(a),"onUpdate:value":e[1]||(e[1]=n=>u(a)?a.value=n:null),label:"Password",placeholder:"Your password...",clearable:"","raw-text":"","mb-2":"",type:"password"},null,8,["value"]),t(b,null,{default:l(()=>[t(m,{label:"Authorization header:",class:"header"},{default:l(()=>[t(d,{"x-scrollable":"",style:{"max-width":"550px","margin-bottom":"-10px","padding-bottom":"10px"},trigger:"none"},{default:l(()=>[p(C(s(r)),1)]),_:1})]),_:1})]),_:1}),w("div",z,[t(f,{onClick:e[2]||(e[2]=n=>s(i)())},{default:l(()=>[p(" Copy header ")]),_:1})])])}}});const I=k(G,[["__scopeId","data-v-981b0cc5"]]);export{I as default};