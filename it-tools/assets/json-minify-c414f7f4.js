import{_ as a}from"./FormatTransformer.vue_vue_type_script_setup_true_lang-3f7ba5c8.js";import{J as r}from"./index-d4e515d0.js";import{w as s}from"./defaults-4d6daddf.js";import{d as i,k as l,o as p}from"./index-1de7d9e5.js";import"./TextareaCopyable-c643ff97.js";import"./Copy-7e7c3f21.js";import"./Scrollbar-ea815bc5.js";const u=`{
	"hello": [
		"world"
	]
}`,h=i({__name:"json-minify",setup(m){const t=o=>s(()=>JSON.stringify(r.parse(o),null,0),""),e=[{validator:o=>o===""||r.parse(o),message:"Provided JSON is not valid."}];return(o,f)=>{const n=a;return p(),l(n,{"input-label":"Your raw JSON","input-default":u,"input-placeholder":"Paste your raw JSON here...","output-label":"Minified version of your JSON","output-language":"json","input-validation-rules":e,transformer:t})}}});export{h as default};
