import{d as T,A as d,i as m,$ as f,c as b,f as e,w as n,F as h,a0 as Y,o as $,g as o,a1 as v,b as g,e as y,cp as x,a2 as k,n as z}from"./index-1de7d9e5.js";import{_ as E}from"./FormItem-5195d694.js";import"./use-form-item-3d125749.js";const I={flex:"","justify-center":""},U={flex:"","justify-center":""},O=T({__name:"html-entities",setup(B){const s=d("<title>IT Tool</title>"),i=m(()=>x.escape(s.value)),{copy:w}=f({source:i}),a=d("&lt;title&gt;IT Tool&lt;/title&gt;"),c=m(()=>x.unescape(a.value)),{copy:C}=f({source:c});return(N,t)=>{const u=k,p=E,r=z,_=Y;return $(),b(h,null,[e(_,{title:"Escape html entities"},{default:n(()=>[e(p,{label:"Your string :"},{default:n(()=>[e(u,{value:o(s),"onUpdate:value":t[0]||(t[0]=l=>v(s)?s.value=l:null),multiline:"",placeholder:"The string to escape",rows:"3",autosize:"","raw-text":""},null,8,["value"])]),_:1}),e(p,{label:"Your string escaped :"},{default:n(()=>[e(u,{multiline:"",readonly:"",placeholder:"Your string escaped",value:o(i),rows:"3",autosize:""},null,8,["value"])]),_:1}),g("div",I,[e(r,{onClick:t[1]||(t[1]=l=>o(w)())},{default:n(()=>[y(" Copy ")]),_:1})])]),_:1}),e(_,{title:"Unescape html entities"},{default:n(()=>[e(p,{label:"Your escaped string :"},{default:n(()=>[e(u,{value:o(a),"onUpdate:value":t[2]||(t[2]=l=>v(a)?a.value=l:null),multiline:"",placeholder:"The string to unescape",rows:"3",autosize:"","raw-text":""},null,8,["value"])]),_:1}),e(p,{label:"Your string unescaped :"},{default:n(()=>[e(u,{value:o(c),multiline:"",readonly:"",placeholder:"Your string unescaped",rows:"3",autosize:""},null,8,["value"])]),_:1}),g("div",U,[e(r,{onClick:t[3]||(t[3]=l=>o(C)())},{default:n(()=>[y(" Copy ")]),_:1})])]),_:1})],64)}}});export{O as default};
