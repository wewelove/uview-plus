import{l as e,m as t,h as n,o as i,c as o,w as l,f as r,t as s,u as a,n as u,g as d}from"./index-c9cf8d84.js";import{_ as p}from"./_plugin-vue_export-helper.1b428a4d.js";const f=p({name:"u-link",mixins:[t,n,{props:{color:{type:String,default:e.link.color},fontSize:{type:[String,Number],default:e.link.fontSize},underLine:{type:Boolean,default:e.link.underLine},href:{type:String,default:e.link.href},mpTips:{type:String,default:e.link.mpTips},lineColor:{type:String,default:e.link.lineColor},text:{type:String,default:e.link.text}}}],computed:{linkStyle(){return{color:this.color,fontSize:uni.$u.addUnit(this.fontSize),lineHeight:uni.$u.addUnit(uni.$u.getPx(this.fontSize)+2),textDecoration:this.underLine?"underline":"none"}}},methods:{openLink(){window.open(this.href),this.$emit("click")}}},[["render",function(e,t,n,p,f,c){const k=d;return i(),o(k,{class:"u-link",onClick:a(c.openLink,["stop"]),style:u([c.linkStyle,e.$u.addStyle(e.customStyle)])},{default:l((()=>[r(s(e.text),1)])),_:1},8,["onClick","style"])}],["__scopeId","data-v-a30f1540"]]);export{f as _};
