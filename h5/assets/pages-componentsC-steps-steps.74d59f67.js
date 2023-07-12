import{l as t,m as e,h as a,d as s,o as i,c as r,w as n,q as c,n as o,p as l,a as d,k as u,f as p,t as _,i as h,g as m}from"./index-c9cf8d84.js";import{_ as f}from"./u-icon.fe05ba1a.js";import{r as D}from"./uni-app.es.6a8abedf.js";import{_ as v}from"./u--text.ec0c916a.js";import{_ as k}from"./_plugin-vue_export-helper.1b428a4d.js";import"./u-link.9a54094c.js";const C=k({name:"u-steps-item",mixins:[e,a,{props:{title:{type:[String,Number],default:t.stepsItem.title},desc:{type:[String,Number],default:t.stepsItem.desc},iconSize:{type:[String,Number],default:t.stepsItem.iconSize},error:{type:Boolean,default:t.stepsItem.error}}}],data:()=>({index:0,childLength:0,showLine:!1,size:{height:0,width:0},parentData:{direction:"row",current:0,activeColor:"",inactiveColor:"",activeIcon:"",inactiveIcon:"",dot:!1}}),watch:{parentData(t,e){}},created(){this.init()},computed:{lineStyle(){var t,e;const a={};return"row"===this.parentData.direction?(a.width=this.size.width+"px",a.left=this.size.width/2+"px"):a.height=this.size.height+"px",a.backgroundColor=(null==(e=null==(t=this.parent.children)?void 0:t[this.index+1])?void 0:e.error)?uni.$u.color.error:this.index<this.parentData.current?this.parentData.activeColor:this.parentData.inactiveColor,a},statusClass(){const{index:t,error:e}=this,{current:a}=this.parentData;return a==t?!0===e?"error":"process":e?"error":a>t?"finish":"wait"},statusColor(){let t="";switch(this.statusClass){case"finish":t=this.parentData.activeColor;break;case"error":t=uni.$u.color.error;break;case"process":t=this.parentData.dot?this.parentData.activeColor:"transparent";break;default:t=this.parentData.inactiveColor}return t},contentStyle(){const t={};return"column"===this.parentData.direction?(t.marginLeft=this.parentData.dot?"2px":"6px",t.marginTop=this.parentData.dot?"0px":"6px"):(t.marginTop=this.parentData.dot?"2px":"6px",t.marginLeft=this.parentData.dot?"2px":"6px"),t}},mounted(){this.parent&&this.parent.updateFromChild(),uni.$u.sleep().then((()=>{this.getStepsItemRect()}))},methods:{init(){if(this.updateParentData(),!this.parent)return uni.$u.error("u-steps-item必须要搭配u-steps组件使用");this.index=this.parent.children.indexOf(this),this.childLength=this.parent.children.length},updateParentData(){this.getParentData("u-steps")},updateFromParent(){this.init()},getStepsItemRect(){this.$uGetRect(".u-steps-item").then((t=>{this.size=t}))}}},[["render",function(t,e,a,k,C,x){const y=h,b=D(s("u-icon"),f),g=m,I=D(s("u--text"),v);return i(),r(y,{class:c(["u-steps-item",[`u-steps-item--${C.parentData.direction}`]]),ref:"u-steps-item"},{default:n((()=>[C.index+1<C.childLength?(i(),r(y,{key:0,class:c(["u-steps-item__line",[`u-steps-item__line--${C.parentData.direction}`]]),style:o([x.lineStyle])},null,8,["class","style"])):l("",!0),d(y,{class:c(["u-steps-item__wrapper",[`u-steps-item__wrapper--${C.parentData.direction}`,C.parentData.dot&&`u-steps-item__wrapper--${C.parentData.direction}--dot`]])},{default:n((()=>[u(t.$slots,"icon",{},(()=>[C.parentData.dot?(i(),r(y,{key:0,class:"u-steps-item__wrapper__dot",style:o({backgroundColor:x.statusColor})},null,8,["style"])):C.parentData.activeIcon||C.parentData.inactiveIcon?(i(),r(y,{key:1,class:"u-steps-item__wrapper__icon"},{default:n((()=>[d(b,{name:C.index<=C.parentData.current?C.parentData.activeIcon:C.parentData.inactiveIcon,size:t.iconSize,color:C.index<=C.parentData.current?C.parentData.activeColor:C.parentData.inactiveColor},null,8,["name","size","color"])])),_:1})):(i(),r(y,{key:2,style:o({backgroundColor:"process"===x.statusClass?C.parentData.activeColor:"transparent",borderColor:x.statusColor}),class:"u-steps-item__wrapper__circle"},{default:n((()=>["process"===x.statusClass||"wait"===x.statusClass?(i(),r(g,{key:0,class:"u-steps-item__wrapper__circle__text",style:o({color:C.index==C.parentData.current?"#ffffff":C.parentData.inactiveColor})},{default:n((()=>[p(_(C.index+1),1)])),_:1},8,["style"])):(i(),r(b,{key:1,color:"error"===x.statusClass?"error":C.parentData.activeColor,size:"12",name:"error"===x.statusClass?"close":"checkmark"},null,8,["color","name"]))])),_:1},8,["style"]))]),!0)])),_:3},8,["class"]),d(y,{class:c(["u-steps-item__content",[`u-steps-item__content--${C.parentData.direction}`]]),style:o([x.contentStyle])},{default:n((()=>[d(I,{text:t.title,type:C.parentData.current==C.index?"main":"content",lineHeight:"20px",size:C.parentData.current==C.index?14:13},null,8,["text","type","size"]),u(t.$slots,"desc",{},(()=>[d(I,{text:t.desc,type:"tips",size:"12"},null,8,["text"])]),!0)])),_:3},8,["class","style"])])),_:3},8,["class"])}],["__scopeId","data-v-9146e898"]]);const x=k({name:"u-steps",mixins:[e,a,{props:{direction:{type:String,default:t.steps.direction},current:{type:[String,Number],default:t.steps.current},activeColor:{type:String,default:t.steps.activeColor},inactiveColor:{type:String,default:t.steps.inactiveColor},activeIcon:{type:String,default:t.steps.activeIcon},inactiveIcon:{type:String,default:t.steps.inactiveIcon},dot:{type:Boolean,default:t.steps.dot}}}],data:()=>({}),watch:{children(){this.updateChildData()},parentData(){this.updateChildData()}},computed:{parentData(){return[this.current,this.direction,this.activeColor,this.inactiveColor,this.activeIcon,this.inactiveIcon,this.dot]}},methods:{updateChildData(){this.children.map((t=>{uni.$u.test.func((t||{}).updateFromParent())&&t.updateFromParent()}))},updateFromChild(){this.updateChildData()}},created(){this.children=[]}},[["render",function(t,e,a,s,o,l){const d=h;return i(),r(d,{class:c(["u-steps",[`u-steps--${t.direction}`]])},{default:n((()=>[u(t.$slots,"default",{},void 0,!0)])),_:3},8,["class"])}],["__scopeId","data-v-cf8665fb"]]);const y=k({data:()=>({current1:1}),onLoad(){}},[["render",function(t,e,a,c,o,l){const u=m,_=D(s("u-steps-item"),C),f=D(s("u-steps"),x),v=h;return i(),r(v,{class:"u-page"},{default:n((()=>[d(v,{class:"u-demo-block"},{default:n((()=>[d(u,{class:"u-demo-block__title"},{default:n((()=>[p("基础演示")])),_:1}),d(v,{class:"u-demo-block__content"},{default:n((()=>[d(f,{current:o.current1},{default:n((()=>[d(_,{title:"已下单",desc:"10:30"}),d(_,{title:"已出库",desc:"10:35"}),d(_,{title:"运输中",desc:"11:40"})])),_:1},8,["current"])])),_:1})])),_:1}),d(v,{class:"u-demo-block"},{default:n((()=>[d(u,{class:"u-demo-block__title"},{default:n((()=>[p("显示点类型")])),_:1}),d(v,{class:"u-demo-block__content"},{default:n((()=>[d(f,{current:1,dot:""},{default:n((()=>[d(_,{title:"已下单",desc:"10:30"}),d(_,{title:"已出库",desc:"10:35"}),d(_,{title:"运输中",desc:"11:40"})])),_:1}),d(f,{current:1,dot:"",direction:"column"},{default:n((()=>[d(_,{title:"已下单",desc:"10:30"}),d(_,{title:"已出库",desc:"10:35"}),d(_,{title:"运输中",desc:"11:40"})])),_:1})])),_:1})])),_:1}),d(v,{class:"u-demo-block"},{default:n((()=>[d(u,{class:"u-demo-block__title"},{default:n((()=>[p("错误状态")])),_:1}),d(v,{class:"u-demo-block__content"},{default:n((()=>[d(f,{current:1},{default:n((()=>[d(_,{title:"已下单",desc:"10:30"}),d(_,{error:"",title:"仓库着火",desc:"10:35"}),d(_,{title:"破产清算",desc:"11:40"})])),_:1})])),_:1})])),_:1}),d(v,{class:"u-demo-block"},{default:n((()=>[d(u,{class:"u-demo-block__title"},{default:n((()=>[p("自定义图标")])),_:1}),d(v,{class:"u-demo-block__content"},{default:n((()=>[d(f,{current:1,activeIcon:"checkmark",inactiveIcon:"arrow-right"},{default:n((()=>[d(_,{title:"已下单",desc:"10:30"}),d(_,{title:"已出库",desc:"10:35"}),d(_,{title:"运输中",desc:"11:40"})])),_:1})])),_:1})])),_:1}),d(v,{class:"u-demo-block"},{default:n((()=>[d(u,{class:"u-demo-block__title"},{default:n((()=>[p("自定义插槽")])),_:1}),d(v,{class:"u-demo-block__content"},{default:n((()=>[d(f,{current:1},{default:n((()=>[d(_,{title:"已下单",desc:"10:30"}),d(_,{title:"已出库",desc:"10:35"}),d(_,{title:"运输中",desc:"11:40"},{icon:n((()=>[d(u,{class:"slot-icon"},{default:n((()=>[p("运")])),_:1})])),_:1})])),_:1})])),_:1})])),_:1}),d(v,{class:"u-demo-block"},{default:n((()=>[d(u,{class:"u-demo-block__title"},{default:n((()=>[p("自定义颜色")])),_:1}),d(v,{class:"u-demo-block__content"},{default:n((()=>[d(f,{current:1,activeColor:"#3c9cff"},{default:n((()=>[d(_,{title:"已下单",desc:"10:30"}),d(_,{title:"已出库",desc:"10:35"}),d(_,{title:"运输中",desc:"11:40"})])),_:1})])),_:1})])),_:1}),d(v,{class:"u-demo-block"},{default:n((()=>[d(u,{class:"u-demo-block__title"},{default:n((()=>[p("竖向展示")])),_:1}),d(v,{class:"u-demo-block__content"},{default:n((()=>[d(f,{current:1,direction:"column"},{default:n((()=>[d(_,{title:"已下单",desc:"10:30"}),d(_,{title:"已出库",desc:"10:35"}),d(_,{title:"运输中",desc:"11:40"})])),_:1})])),_:1})])),_:1})])),_:1})}],["__scopeId","data-v-dd060023"]]);export{y as default};
