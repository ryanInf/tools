import{d as y,A as i,i as x,c as N,b as a,f as l,w,a0 as U,o as R,g as n,a1 as o}from"./index-1de7d9e5.js";import{_ as X}from"./InputCopyable.vue_vue_type_script_setup_true_lang-85224cc2.js";import{_ as Y}from"./InputNumber-f1a49d36.js";import"./use-locale-da8c6366.js";import"./use-form-item-3d125749.js";import"./Input-219e8d2f.js";import"./Button-a3d934ec.js";import"./Remove-02964094.js";import"./Add-c202cddd.js";const F={style:{flex:"0 0 100%"}},k={style:{margin:"0 auto","max-width":"600px"}},B=a("div",{"mb-3":"","sm:hidden":""}," What is ",-1),S={flex:"","gap-2":""},T=a("div",{hidden:"","pt-1":"","sm:block":"",style:{"min-width":"48px"}}," What is ",-1),W=a("div",{"min-w-fit":"","pt-1":""}," % of ",-1),C=a("div",{"mb-3":"","sm:hidden":""}," X is what percent of Y ",-1),D={flex:"","gap-2":""},I=a("div",{hidden:"","min-w-fit":"","pt-1":"","sm:block":""}," is what percent of ",-1),V=a("div",{"mb-3":""}," What is the percentage increase/decrease ",-1),A={flex:"","gap-2":""},M=y({__name:"percentage-calculator",setup(E){const r=i(),p=i(),_=x(()=>r.value===void 0||p.value===void 0?"":(r.value/100*p.value).toString()),v=i(),m=i(),f=x(()=>{if(v.value===void 0||m.value===void 0)return"";const u=100*v.value/m.value;return!Number.isFinite(u)||Number.isNaN(u)?"":u.toString()}),s=i(),c=i(),b=x(()=>{if(s.value===void 0||c.value===void 0)return"";const u=(c.value-s.value)/s.value*100;return!Number.isFinite(u)||Number.isNaN(u)?"":u.toString()});return(u,e)=>{const d=Y,g=X,h=U;return R(),N("div",F,[a("div",k,[l(h,{"mb-3":""},{default:w(()=>[B,a("div",S,[T,l(d,{value:n(r),"onUpdate:value":e[0]||(e[0]=t=>o(r)?r.value=t:null),"data-test-id":"percentageX",placeholder:"X"},null,8,["value"]),W,l(d,{value:n(p),"onUpdate:value":e[1]||(e[1]=t=>o(p)?p.value=t:null),"data-test-id":"percentageY",placeholder:"Y"},null,8,["value"]),l(g,{value:n(_),"onUpdate:value":e[2]||(e[2]=t=>o(_)?_.value=t:null),"data-test-id":"percentageResult",readonly:"",placeholder:"Result",style:{"max-width":"150px"}},null,8,["value"])])]),_:1}),l(h,{"mb-3":""},{default:w(()=>[C,a("div",D,[l(d,{value:n(v),"onUpdate:value":e[3]||(e[3]=t=>o(v)?v.value=t:null),"data-test-id":"numberX",placeholder:"X"},null,8,["value"]),I,l(d,{value:n(m),"onUpdate:value":e[4]||(e[4]=t=>o(m)?m.value=t:null),"data-test-id":"numberY",placeholder:"Y"},null,8,["value"]),l(g,{value:n(f),"onUpdate:value":e[5]||(e[5]=t=>o(f)?f.value=t:null),"data-test-id":"numberResult",readonly:"",placeholder:"Result",style:{"max-width":"150px"}},null,8,["value"])])]),_:1}),l(h,{"mb-3":""},{default:w(()=>[V,a("div",A,[l(d,{value:n(s),"onUpdate:value":e[6]||(e[6]=t=>o(s)?s.value=t:null),"data-test-id":"numberFrom",placeholder:"From"},null,8,["value"]),l(d,{value:n(c),"onUpdate:value":e[7]||(e[7]=t=>o(c)?c.value=t:null),"data-test-id":"numberTo",placeholder:"To"},null,8,["value"]),l(g,{value:n(b),"onUpdate:value":e[8]||(e[8]=t=>o(b)?b.value=t:null),"data-test-id":"percentageIncreaseDecrease",readonly:"",placeholder:"Result",style:{"max-width":"150px"}},null,8,["value"])])]),_:1})])])}}});export{M as default};
