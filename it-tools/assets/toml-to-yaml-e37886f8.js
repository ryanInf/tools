import{_ as e}from"./FormatTransformer.vue_vue_type_script_setup_true_lang-3f7ba5c8.js";import{p as m}from"./toml-esm-9c5f6a1e.js";import{d as i,k as s,o as n,am as p}from"./index-1de7d9e5.js";import{w as l}from"./defaults-4d6daddf.js";import{i as u}from"./toml.services-387bcfeb.js";import"./TextareaCopyable-c643ff97.js";import"./Copy-7e7c3f21.js";import"./Scrollbar-ea815bc5.js";import"./boolean-c7e7c785.js";const k=i({__name:"toml-to-yaml",setup(f){const r=o=>o.trim()===""?"":l(()=>p(m(o)),""),t=[{validator:u,message:"Provided TOML is not valid."}];return(o,c)=>{const a=e;return n(),s(a,{"input-label":"Your TOML","input-placeholder":"Paste your TOML here...","output-label":"YAML from your TOML","output-language":"yaml","input-validation-rules":t,transformer:r})}}});export{k as default};
