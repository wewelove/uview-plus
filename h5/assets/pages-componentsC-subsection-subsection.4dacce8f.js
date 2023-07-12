import{l as t,m as e,h as s,o as n,c as o,w as i,a as c,q as r,n as u,b as l,F as a,r as d,f as b,t as h,i as _,g as m,d as f}from"./index-c9cf8d84.js";import{_ as g}from"./_plugin-vue_export-helper.1b428a4d.js";import{r as p}from"./uni-app.es.6a8abedf.js";const y=g({name:"u-subsection",mixins:[e,s,{props:{list:{type:Array,default:t.subsection.list},current:{type:[String,Number],default:t.subsection.current},activeColor:{type:String,default:t.subsection.activeColor},inactiveColor:{type:String,default:t.subsection.inactiveColor},mode:{type:String,default:t.subsection.mode},fontSize:{type:[String,Number],default:t.subsection.fontSize},bold:{type:Boolean,default:t.subsection.bold},bgColor:{type:String,default:t.subsection.bgColor},keyName:{type:String,default:t.subsection.keyName}}}],data:()=>({itemRect:{width:0,height:0}}),watch:{list(t,e){this.init()},current:{immediate:!0,handler(t){}}},computed:{wrapperStyle(){const t={};return"button"===this.mode&&(t.backgroundColor=this.bgColor),t},barStyle(){const t={};return t.width=`${this.itemRect.width}px`,t.height=`${this.itemRect.height}px`,t.transform=`translateX(${this.current*this.itemRect.width}px)`,"subsection"===this.mode&&(t.backgroundColor=this.activeColor),t},itemStyle(t){return t=>{const e={};return"subsection"===this.mode&&(e.borderColor=this.activeColor,e.borderWidth="1px",e.borderStyle="solid"),e}},textStyle(t){return t=>{const e={};return e.fontWeight=this.bold&&this.current===t?"bold":"normal",e.fontSize=uni.$u.addUnit(this.fontSize),"subsection"===this.mode?e.color=this.current===t?"#fff":this.inactiveColor:e.color=this.current===t?this.activeColor:this.inactiveColor,e}}},mounted(){this.init()},methods:{init(){uni.$u.sleep().then((()=>this.getRect()))},getText(t){return"object"==typeof t?t[this.keyName]:t},getRect(){this.$uGetRect(".u-subsection__item--0").then((t=>{this.itemRect=t}))},clickHandler(t){this.$emit("change",t)}}},[["render",function(t,e,s,f,g,p){const y=_,C=m;return n(),o(y,{class:r(["u-subsection",[`u-subsection--${t.mode}`]]),ref:"u-subsection",style:u([t.$u.addStyle(t.customStyle),p.wrapperStyle])},{default:i((()=>[c(y,{class:r(["u-subsection__bar",["button"===t.mode&&"u-subsection--button__bar",0===t.current&&"subsection"===t.mode&&"u-subsection__bar--first",t.current>0&&t.current<t.list.length-1&&"subsection"===t.mode&&"u-subsection__bar--center",t.current===t.list.length-1&&"subsection"===t.mode&&"u-subsection__bar--last"]]),ref:"u-subsection__bar",style:u([p.barStyle])},null,8,["style","class"]),(n(!0),l(a,null,d(t.list,((e,s)=>(n(),o(y,{class:r(["u-subsection__item",[`u-subsection__item--${s}`,s<t.list.length-1&&"u-subsection__item--no-border-right",0===s&&"u-subsection__item--first",s===t.list.length-1&&"u-subsection__item--last"]]),ref_for:!0,ref:`u-subsection__item--${s}`,style:u([p.itemStyle(s)]),onClick:t=>p.clickHandler(s),key:s},{default:i((()=>[c(C,{class:"u-subsection__item__text",style:u([p.textStyle(s)])},{default:i((()=>[b(h(p.getText(e)),1)])),_:2},1032,["style"])])),_:2},1032,["class","style","onClick"])))),128))])),_:1},8,["class","style"])}],["__scopeId","data-v-cceebfca"]]);const C=g({data:()=>({current1:0,current2:0,current3:0,current4:1,list:["未付款","待评价","已付款"],current:1}),methods:{change1(t){this.current1=t},change2(t){this.current2=t},change3(t){this.current3=t},change4(t){this.current4=t}}},[["render",function(t,e,s,r,u,l){const a=m,d=p(f("u-subsection"),y),h=_;return n(),o(h,{class:"u-page"},{default:i((()=>[c(h,{class:"u-demo-block"},{default:i((()=>[c(a,{class:"u-demo-block__title"},{default:i((()=>[b("基础使用")])),_:1}),c(h,{class:"u-demo-block__content"},{default:i((()=>[c(d,{list:u.list,mode:"subsection",current:u.current1,onChange:l.change1},null,8,["list","current","onChange"])])),_:1})])),_:1}),c(h,{class:"u-demo-block"},{default:i((()=>[c(a,{class:"u-demo-block__title"},{default:i((()=>[b("按钮模式")])),_:1}),c(h,{class:"u-demo-block__content"},{default:i((()=>[c(d,{list:u.list,mode:"button",current:u.current2,onChange:l.change2},null,8,["list","current","onChange"])])),_:1})])),_:1}),c(h,{class:"u-demo-block"},{default:i((()=>[c(a,{class:"u-demo-block__title"},{default:i((()=>[b("更换主题")])),_:1}),c(h,{class:"u-demo-block__content"},{default:i((()=>[c(d,{list:u.list,mode:"subsection",current:u.current3,activeColor:"#f56c6c",onChange:l.change3},null,8,["list","current","onChange"])])),_:1})])),_:1}),c(h,{class:"u-demo-block"},{default:i((()=>[c(a,{class:"u-demo-block__title"},{default:i((()=>[b("默认位置")])),_:1}),c(h,{class:"u-demo-block__content"},{default:i((()=>[c(d,{list:u.list,mode:"button",current:u.current4,activeColor:"#f9ae3d",onChange:l.change4},null,8,["list","current","onChange"])])),_:1})])),_:1})])),_:1})}],["__scopeId","data-v-7108c722"]]);export{C as default};
