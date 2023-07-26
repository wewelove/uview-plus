import{_ as a}from"./u-navbar.b318e63e.js";import{l as o,m as i,h as e,d as l,o as t,c as g,w as n,a as d,n as s,k as r,f as u,t as c,e as p,i as m,g as f,b as C,r as h,F as P}from"./index-c9cf8d84.js";import{r as _}from"./uni-app.es.6a8abedf.js";import{_ as D}from"./u-gap.6fc5dfe1.js";import{_ as w}from"./u-cell.f4c772c3.js";import{_ as S}from"./u-cell-group.5a8a7c63.js";import{_ as x}from"./u-loading-icon.91bfb1b1.js";import{_ as y}from"./u-transition.377b9072.js";import{_ as b}from"./_plugin-vue_export-helper.1b428a4d.js";import"./u-status-bar.9ab06bbc.js";import"./u-icon.fe05ba1a.js";import"./u-line.a45c8667.js";const v=b({name:"u-loading-page",mixins:[i,e,{props:{loadingText:{type:[String,Number],default:o.loadingPage.loadingText},image:{type:String,default:o.loadingPage.image},loadingMode:{type:String,default:o.loadingPage.loadingMode},loading:{type:Boolean,default:o.loadingPage.loading},bgColor:{type:String,default:o.loadingPage.bgColor},color:{type:String,default:o.loadingPage.color},fontSize:{type:[String,Number],default:o.loadingPage.fontSize},iconSize:{type:[String,Number],default:o.loadingPage.fontSize},loadingColor:{type:String,default:o.loadingPage.loadingColor}}}],data:()=>({}),methods:{}},[["render",function(a,o,i,e,C,h){const P=p,D=_(l("u-loading-icon"),x),w=m,S=f,b=_(l("u-transition"),y);return t(),g(b,{show:a.loading,"custom-style":{position:"fixed",top:0,left:0,right:0,bottom:0,backgroundColor:a.bgColor,display:"flex"}},{default:n((()=>[d(w,{class:"u-loading-page"},{default:n((()=>[d(w,{class:"u-loading-page__warpper"},{default:n((()=>[d(w,{class:"u-loading-page__warpper__loading-icon"},{default:n((()=>[a.image?(t(),g(P,{key:0,src:a.image,class:"u-loading-page__warpper__loading-icon__img",mode:"widthFit",style:s({width:a.$u.addUnit(a.iconSize),height:a.$u.addUnit(a.iconSize)})},null,8,["src","style"])):(t(),g(D,{key:1,mode:a.loadingMode,size:a.$u.addUnit(a.iconSize),color:a.loadingColor},null,8,["mode","size","color"]))])),_:1}),r(a.$slots,"default",{},(()=>[d(S,{class:"u-loading-page__warpper__text",style:s({fontSize:a.$u.addUnit(a.fontSize),color:a.color})},{default:n((()=>[u(c(a.loadingText),1)])),_:1},8,["style"])]),!0)])),_:3})])),_:3})])),_:3},8,["show","custom-style"])}],["__scopeId","data-v-df962282"]]);const z=b({data:()=>({loading:!1,loadingPageData:{loadingText:"",image:"",loadingMode:"",bgColor:"#ffffff"},list:[{title:"自定义提示内容",iconUrl:"https://cdn.uviewui.com/uview/demo/loading-page/promptContent.png"},{title:"自定义图片",iconUrl:"https://cdn.uviewui.com/uview/demo/loading-page/customPicture.png"},{title:"自定义加载动画模式",iconUrl:"https://cdn.uviewui.com/uview/demo/loading-page/customMode.png"},{title:"自定义背景色",iconUrl:"https://cdn.uviewui.com/uview/demo/loading-page/customBgColor.png"}]}),methods:{navigateBack(){uni.navigateBack()},openLoadingPage(a){this.loadingPageData={loadingText:"",image:"",loadingMode:"",bgColor:"#ffffff",iconSize:28},0==a?(this.loadingPageData.loadingMode="semicircle",this.loadingPageData.loadingText="Hello uView",this.loadingPageData.color="#C8C8C8",this.loadingPageData.loadingColor="#C8C8C8"):1==a?(this.loadingPageData.image="/static/uview/common/logo.png",this.loadingPageData.loadingText="uView UI",this.loadingPageData.iconSize=40,this.loadingPageData.color="#C8C8C8",this.loadingPageData.loadingColor="#C8C8C8"):2==a?(this.loadingPageData.loadingMode="circle",this.loadingPageData.loadingText="uView UI",this.loadingPageData.color="#C8C8C8",this.loadingPageData.loadingColor="#C8C8C8"):3==a&&(this.loadingPageData.loadingMode="spinner",this.loadingPageData.bgColor="rgba(0, 0, 0, 0.3)",this.loadingPageData.loadingText="uView UI",this.loadingPageData.color="#eee",this.loadingPageData.loadingColor="#ddd"),this.loading=!0,setTimeout((()=>{this.loading=!1}),2e3)}}},[["render",function(o,i,e,s,r,u){const c=_(l("u-navbar"),a),f=_(l("u-gap"),D),x=p,y=_(l("u-cell"),w),b=_(l("u-cell-group"),S),z=_(l("u-loading-page"),v),T=m;return t(),g(T,{class:"u-page"},{default:n((()=>[d(c,{title:"加载页",onLeftClick:u.navigateBack,safeAreaInsetTop:"",fixed:"",placeholder:""},null,8,["onLeftClick"]),d(f,{bgColor:"#fff",height:"20"}),d(b,null,{default:n((()=>[(t(!0),C(P,null,h(r.list,((a,o)=>(t(),g(y,{titleStyle:{fontWeight:500},onClick:a=>u.openLoadingPage(o),title:a.title,key:o,isLink:""},{default:n((()=>[d(x,{slot:"icon",class:"u-cell-icon",src:a.iconUrl,mode:"widthFix"},null,8,["src"])])),_:2},1032,["onClick","title"])))),128))])),_:1}),d(z,{loadingText:r.loadingPageData.loadingText,image:r.loadingPageData.image,iconSize:r.loadingPageData.iconSize,loadingMode:r.loadingPageData.loadingMode,bgColor:r.loadingPageData.bgColor,loading:r.loading,color:r.loadingPageData.color,loadingColor:r.loadingPageData.loadingColor},null,8,["loadingText","image","iconSize","loadingMode","bgColor","loading","color","loadingColor"])])),_:1})}],["__scopeId","data-v-55e86c2c"]]);export{z as default};