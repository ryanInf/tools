import{d as f,A as b,i as x,$ as v,c,f as s,g as a,a1 as A,w as u,b as _,ac as C,a2 as N,a0 as g,n as y,o as i,e as p,t as T}from"./index-1de7d9e5.js";const k=["Alpha","Bravo","Charlie","Delta","Echo","Foxtrot","Golf","Hotel","India","Juliet","Kilo","Lima","Mike","November","Oscar","Papa","Quebec","Romeo","Sierra","Tango","Uniform","Victor","Whiskey","X-ray","Yankee","Zulu"];function O({letter:o}){return o.toLowerCase().charCodeAt(0)-"a".charCodeAt(0)}function V({text:o}){return o.split("").map(t=>{const e=O({letter:t});return k[e]??t}).join(" ")}const B={key:0},w=_("div",{"mb-2":""}," Your text in NATO phonetic alphabet ",-1),I={"mt-3":"",flex:"","justify-center":""},W=f({__name:"text-to-nato-alphabet",setup(o){const t=b(""),e=x(()=>V({text:t.value})),{copy:r}=v({source:e,text:"NATO alphabet string copied."});return(L,n)=>{const d=N,m=g,h=y;return i(),c("div",null,[s(d,{value:a(t),"onUpdate:value":n[0]||(n[0]=l=>A(t)?t.value=l:null),label:"Your text to convert to NATO phonetic alphabet",placeholder:"Put your text here...",clearable:"","mb-5":""},null,8,["value"]),a(e)?(i(),c("div",B,[w,s(m,null,{default:u(()=>[p(T(a(e)),1)]),_:1}),_("div",I,[s(h,{autofocus:"",onClick:n[1]||(n[1]=l=>a(r)())},{default:u(()=>[p(" Copy NATO string ")]),_:1})])])):C("",!0)])}}});export{W as default};
