import{_ as u}from"./u-avatar.2e20efd8.js";import{o as t,c as i,w as s,i as e,a as o,b as l,r as a,F as r,d as m}from"./index-7259cb7d.js";import{r as p}from"./uni-app.es.58690612.js";import{_ as c}from"./u-cell.4cf33127.js";import{_ as n,a as d}from"./u-list.e96b405c.js";import{_ as w}from"./_plugin-vue_export-helper.1b428a4d.js";import"./u-icon.807c0673.js";import"./u--text.d0a03444.js";import"./u-link.eb30fa18.js";import"./u-line.15bda168.js";const v=w({data:()=>({indexList:[],urls:["https://cdn.uviewui.com/uview/album/1.jpg","https://cdn.uviewui.com/uview/album/2.jpg","https://cdn.uviewui.com/uview/album/3.jpg","https://cdn.uviewui.com/uview/album/4.jpg","https://cdn.uviewui.com/uview/album/5.jpg","https://cdn.uviewui.com/uview/album/6.jpg","https://cdn.uviewui.com/uview/album/7.jpg","https://cdn.uviewui.com/uview/album/8.jpg","https://cdn.uviewui.com/uview/album/9.jpg","https://cdn.uviewui.com/uview/album/10.jpg"]}),onLoad(){this.loadmore()},methods:{scrolltolower(){this.loadmore()},loadmore(){for(let u=0;u<30;u++)this.indexList.push({url:this.urls[uni.$u.random(0,this.urls.length-1)]})}}},[["render",function(w,v,h,j,g,f){const _=p(m("u-avatar"),u),b=p(m("u-cell"),c),x=p(m("u-list-item"),n),L=p(m("u-list"),d),S=e;return t(),i(S,{class:"u-page"},{default:s((()=>[o(L,{onScrolltolower:f.scrolltolower},{default:s((()=>[(t(!0),l(r,null,a(g.indexList,((u,e)=>(t(),i(x,{key:e},{default:s((()=>[o(b,{title:`列表长度-${e+1}`},{icon:s((()=>[o(_,{shape:"square",size:"35",src:u.url,customStyle:"margin: -3px 5px -3px 0"},null,8,["src"])])),_:2},1032,["title"])])),_:2},1024)))),128))])),_:1},8,["onScrolltolower"])])),_:1})}],["__scopeId","data-v-6e0524c4"]]);export{v as default};