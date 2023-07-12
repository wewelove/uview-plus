import{l as e,m as o,h as t,B as i,o as n,c as a,w as r,q as l,n as d,b as s,F as c,r as u,p as g,f as m,t as f,i as p,g as h}from"./index-c9cf8d84.js";import{_ as y}from"./_plugin-vue_export-helper.1b428a4d.js";const v=y({name:"u-loading-icon",mixins:[o,t,{props:{show:{type:Boolean,default:e.loadingIcon.show},color:{type:String,default:e.loadingIcon.color},textColor:{type:String,default:e.loadingIcon.textColor},vertical:{type:Boolean,default:e.loadingIcon.vertical},mode:{type:String,default:e.loadingIcon.mode},size:{type:[String,Number],default:e.loadingIcon.size},textSize:{type:[String,Number],default:e.loadingIcon.textSize},text:{type:[String,Number],default:e.loadingIcon.text},timingFunction:{type:String,default:e.loadingIcon.timingFunction},duration:{type:[String,Number],default:e.loadingIcon.duration},inactiveColor:{type:String,default:e.loadingIcon.inactiveColor}}}],data:()=>({array12:Array.from({length:12}),aniAngel:360,webviewHide:!1,loading:!1}),computed:{otherBorderColor(){const e=uni.$u.colorGradient(this.color,"#ffffff",100)[80];return"circle"===this.mode?this.inactiveColor?this.inactiveColor:e:"transparent"}},watch:{show(e){}},mounted(){this.init()},methods:{init(){setTimeout((()=>{}),20)},addEventListenerToWebview(){const e=i(),o=e[e.length-1].$getAppWebview();o.addEventListener("hide",(()=>{this.webviewHide=!0})),o.addEventListener("show",(()=>{this.webviewHide=!1}))}}},[["render",function(e,o,t,i,y,v){const w=p,_=h;return e.show?(n(),a(w,{key:0,class:l(["u-loading-icon",[e.vertical&&"u-loading-icon--vertical"]]),style:d([e.$u.addStyle(e.customStyle)])},{default:r((()=>[y.webviewHide?g("",!0):(n(),a(w,{key:0,class:l(["u-loading-icon__spinner",[`u-loading-icon__spinner--${e.mode}`]]),ref:"ani",style:d({color:e.color,width:e.$u.addUnit(e.size),height:e.$u.addUnit(e.size),borderTopColor:e.color,borderBottomColor:v.otherBorderColor,borderLeftColor:v.otherBorderColor,borderRightColor:v.otherBorderColor,"animation-duration":`${e.duration}ms`,"animation-timing-function":"semicircle"===e.mode||"circle"===e.mode?e.timingFunction:""})},{default:r((()=>["spinner"===e.mode?(n(!0),s(c,{key:0},u(y.array12,((e,o)=>(n(),a(w,{key:o,class:"u-loading-icon__dot"})))),128)):g("",!0)])),_:1},8,["class","style"])),e.text?(n(),a(_,{key:1,class:"u-loading-icon__text",style:d({fontSize:e.$u.addUnit(e.textSize),color:e.textColor})},{default:r((()=>[m(f(e.text),1)])),_:1},8,["style"])):g("",!0)])),_:1},8,["style","class"])):g("",!0)}],["__scopeId","data-v-651a3053"]]);export{v as _};
