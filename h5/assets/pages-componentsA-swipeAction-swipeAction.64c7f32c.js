import{l as t,m as e,h as s,d as o,o as a,c as i,w as n,a as l,k as c,b as u,F as r,r as d,n as h,p,f,t as _,g as m,i as b,q as g}from"./index-c9cf8d84.js";import{_ as w}from"./u-icon.fe05ba1a.js";import{r as x}from"./uni-app.es.6a8abedf.js";import{_ as y}from"./_plugin-vue_export-helper.1b428a4d.js";const k={methods:{getTouchPoint:t=>t?t.touches&&t.touches[0]?{x:t.touches[0].pageX,y:t.touches[0].pageY}:t.changedTouches&&t.changedTouches[0]?{x:t.changedTouches[0].pageX,y:t.changedTouches[0].pageY}:{x:t.clientX||0,y:t.clientY||0}:{x:0,y:0},resetTouchStatus(){this.direction="",this.deltaX=0,this.deltaY=0,this.offsetX=0,this.offsetY=0},touchStart(t){this.resetTouchStatus();const e=this.getTouchPoint(t);this.startX=e.x,this.startY=e.y},touchMove(t){const e=this.getTouchPoint(t);var s,o;this.deltaX=e.x-this.startX,this.deltaY=e.y-this.startY,this.offsetX=Math.abs(this.deltaX),this.offsetY=Math.abs(this.deltaY),this.direction=this.direction||(s=this.offsetX,o=this.offsetY,s>o&&s>10?"horizontal":o>s&&o>10?"vertical":"")}}},C={props:{show:{type:Boolean,default:t.swipeActionItem.show},name:{type:[String,Number],default:t.swipeActionItem.name},disabled:{type:Boolean,default:t.swipeActionItem.disabled},autoClose:{type:Boolean,default:t.swipeActionItem.autoClose},threshold:{type:Number,default:t.swipeActionItem.threshold},options:{type:Array,default:()=>uni.$u.props.swipeActionItem.rightOptions},duration:{type:[String,Number],default:t.swipeActionItem.duration}}};function S(t){return t.toString().indexOf("s")>=0?t:t>30?t+"ms":t+"s"}function v(t,e,s){e.getState(),s.selectAllComponents(".u-swipe-action-item__right__button"),e.requestAnimationFrame((function(){e.setStyle({transition:"none",transform:"translateX("+t+"px)","-webkit-transform":"translateX("+t+"px)"})}))}function X(t,e){var s=t.getState();e.selectAllComponents(".u-swipe-action-item__right__button");var o=S(s.duration),a=-s.buttonsWidth;t.requestAnimationFrame((function(){t.setStyle({transition:"transform "+o,transform:"translateX("+a+"px)","-webkit-transform":"translateX("+a+"px)"})})),z("open",t,e)}function z(t,e,s){e.getState().status=t,s.callMethod("setState",t)}function T(t,e){var s=t.getState(),o=e.selectAllComponents(".u-swipe-action-item__right__button"),a=o.length,i=S(s.duration);t.requestAnimationFrame((function(){t.setStyle({transition:"transform "+i,transform:"translateX(0px)","-webkit-transform":"translateX(0px)"});for(var e=a-1;e>=0;e--)o[e].setStyle({transition:"transform "+i,transform:"translateX(0px)","-webkit-transform":"translateX(0px)"})})),z("close",t,e)}const A={touchstart:function(t,e){var s=t.instance.getState();if(!s.disabled){var o=t.touches;o&&o.length>1||(s.moving=!0,s.startX=o[0].pageX,s.startY=o[0].pageY,e.callMethod("closeOther"))}},touchmove:function(t,e){var s=t.instance,o=s.getState();if(!o.disabled&&o.moving){var a=t.touches,i=a[0].pageX,n=a[0].pageY,l=i-o.startX,c=n-o.startY,u=o.buttonsWidth;(Math.abs(l)>Math.abs(c)||Math.abs(l)>o.threshold)&&(t.preventDefault&&t.preventDefault(),t.stopPropagation&&t.stopPropagation()),Math.abs(l)<Math.abs(c)||("open"===o.status?(l<0&&(l=0),l>u&&(l=u),v(-u+l,s,e)):(l>0&&(l=0),Math.abs(l)>u&&(l=-u),v(l,s,e)))}},touchend:function(t,e){var s=t.instance,o=s.getState();if(o.moving&&!o.disabled){var a=t.changedTouches?t.changedTouches[0]:{},i=a.pageX;a.pageY;var n=i-o.startX;if("open"===o.status){if(n<0)return;if(0===n)return T(s,e);Math.abs(n)<o.threshold?X(s,e):T(s,e)}else{if(n>0)return;Math.abs(n)<o.threshold?T(s,e):X(s,e)}}},sizeChange:function(t,e,s,o){var a=o.getState();if(a.disabled=t.disabled,a.duration=t.duration,a.show=t.show,a.threshold=t.threshold,a.buttons=t.buttons,a.buttons)for(var i=a.buttons.length,n=0,l=t.buttons,c=0;c<i;c++)n+=l[c].width;a.buttonsWidth=n},statusChange:function(t,e,s,o){var a=o.getState();a.disabled||("close"===t&&"open"===a.status?T(o,s):"open"===t&&"close"===a.status&&X(o,s))}},Y=t=>{t.$wxs||(t.$wxs=[]),t.$wxs.push("wxs"),t.mixins||(t.mixins=[]),t.mixins.push({beforeCreate(){this.wxs=A}})},M={name:"u-swipe-action-item",emits:["click"],mixins:[e,s,C,k],mixins:[e,s,C,k,{methods:{closeHandler(){this.status="close"},setState(t){this.status=t},closeOther(){this.parent&&this.parent.closeOther(this)}}}],data:()=>({size:{},parentData:{autoClose:!0},status:"close"}),watch:{wxsInit(t,e){this.queryRect()}},computed:{wxsInit(){return[this.disabled,this.autoClose,this.threshold,this.options,this.duration]}},mounted(){this.init()},methods:{init(){this.updateParentData(),uni.$u.sleep().then((()=>{this.queryRect()}))},updateParentData(){this.getParentData("u-swipe-action")},queryRect(){this.$uGetRect(".u-swipe-action-item__right__button",!0).then((t=>{this.size={buttons:t,show:this.show,disabled:this.disabled,threshold:this.threshold,duration:this.duration}}))},buttonClickHandler(t,e){this.$emit("click",{index:e,name:this.name})}}};Y(M);const $=y(M,[["render",function(t,e,s,g,y,k){const C=x(o("u-icon"),w),S=m,v=b;return a(),i(v,{class:"u-swipe-action-item",ref:"u-swipe-action-item"},{default:n((()=>[l(v,{class:"u-swipe-action-item__right"},{default:n((()=>[c(t.$slots,"button",{},(()=>[(a(!0),u(r,null,d(t.options,((e,s)=>(a(),i(v,{key:s,class:"u-swipe-action-item__right__button",ref_for:!0,ref:`u-swipe-action-item__right__button-${s}`,style:h([{alignItems:e.style&&e.style.borderRadius?"center":"stretch"}]),onClick:t=>k.buttonClickHandler(e,s)},{default:n((()=>[l(v,{class:"u-swipe-action-item__right__button__wrapper",style:h([{backgroundColor:e.style&&e.style.backgroundColor?e.style.backgroundColor:"#C7C6CD",borderRadius:e.style&&e.style.borderRadius?e.style.borderRadius:"0",padding:e.style&&e.style.borderRadius?"0":"0 15px"},e.style])},{default:n((()=>[e.icon?(a(),i(C,{key:0,name:e.icon,color:e.style&&e.style.color?e.style.color:"#ffffff",size:e.iconSize?t.$u.addUnit(e.iconSize):e.style&&e.style.fontSize?1.2*t.$u.getPx(e.style.fontSize):17,customStyle:{marginRight:e.text?"2px":0}},null,8,["name","color","size","customStyle"])):p("",!0),e.text?(a(),i(S,{key:1,class:"u-swipe-action-item__right__button__wrapper__text u-line-1",style:h([{color:e.style&&e.style.color?e.style.color:"#ffffff",fontSize:e.style&&e.style.fontSize?e.style.fontSize:"16px",lineHeight:e.style&&e.style.fontSize?e.style.fontSize:"16px"}])},{default:n((()=>[f(_(e.text),1)])),_:2},1032,["style"])):p("",!0)])),_:2},1032,["style"])])),_:2},1032,["style","onClick"])))),128))]),!0)])),_:3}),l(v,{class:"u-swipe-action-item__content",onTouchstart:t.wxs.touchstart,onTouchmove:t.wxs.touchmove,onTouchend:t.wxs.touchend,status:y.status,"change:status":t.wxs.statusChange,size:y.size,"change:size":t.wxs.sizeChange},{default:n((()=>[c(t.$slots,"default",{},void 0,!0)])),_:3},8,["onTouchstart","onTouchmove","onTouchend","status","change:status","size","change:size"])])),_:3},512)}],["__scopeId","data-v-980753b6"]]);const I=y({name:"u-swipe-action",mixins:[e,s,{props:{autoClose:{type:Boolean,default:t.swipeAction.autoClose}}}],data:()=>({}),provide(){return{swipeAction:this}},computed:{parentData(){return[this.autoClose]}},watch:{parentData(){this.children.length&&this.children.map((t=>{"function"==typeof t.updateParentData&&t.updateParentData()}))}},created(){this.children=[]},methods:{closeOther(t){this.autoClose&&this.children.map(((e,s)=>{t!==e&&e.closeHandler()}))}}},[["render",function(t,e,s,o,l,u){const r=b;return a(),i(r,{class:"u-swipe-action"},{default:n((()=>[c(t.$slots,"default")])),_:3})}]]);const R=y({data:()=>({show1:!0,moveX:0,showText:"当前状态：关",showStatus:!1,options1:[{text:"删除",style:{backgroundColor:"#f56c6c"}}],options2:[{text:"收藏",style:{backgroundColor:"#3c9cff"}},{text:"删除",style:{backgroundColor:"#f56c6c"}}],options3:[{text:"收藏",icon:"star-fill",iconSize:"20",style:{backgroundColor:"#f9ae3d"}}],options4:[{text:"禁用状态",disabled:!0,options:[{text:"置顶",style:{backgroundColor:"#3c9cff"}},{text:"取消",style:{backgroundColor:"#f9ae3d"}}]},{text:"正常状态",disabled:!1,options:[{text:"置顶",style:{backgroundColor:"#3c9cff"}},{text:"取消",style:{backgroundColor:"#f9ae3d"}}]},{text:"自动关闭",disabled:!1,options:[{text:"置顶",style:{backgroundColor:"#3c9cff"}},{text:"取消",style:{backgroundColor:"#f9ae3d"}}]}],options5:[{icon:"trash-fill",style:{backgroundColor:"#f56c6c",width:"40px",height:"40px",borderRadius:"100px",margin:"0 6px"}},{icon:"heart-fill",style:{backgroundColor:"#5ac725",width:"40px",height:"40px",borderRadius:"100px",margin:"0 6px"}}]}),methods:{click(t){console.log("click",t),uni.showModal({title:"温馨提示",content:"确定要删除吗？",success:t=>{t.confirm&&(this.show1=!1)}})}}},[["render",function(t,e,s,c,h,w){const y=m,k=b,C=x(o("u-swipe-action-item"),$),S=x(o("u-swipe-action"),I);return a(),i(k,{class:"u-page"},{default:n((()=>[l(k,{class:"u-demo-block"},{default:n((()=>[l(y,{class:"u-demo-block__title"},{default:n((()=>[f("演示案例")])),_:1}),l(k,{class:"u-page__swipe-action-item"},{default:n((()=>[l(S,null,{default:n((()=>[h.show1?(a(),i(C,{key:0,options:h.options1,onClick:w.click},{default:n((()=>[l(k,{class:"swipe-action u-border-top u-border-bottom"},{default:n((()=>[l(k,{class:"swipe-action__content"},{default:n((()=>[l(y,{class:"swipe-action__content__text"},{default:n((()=>[f("基础使用")])),_:1})])),_:1})])),_:1})])),_:1},8,["options","onClick"])):p("",!0)])),_:1})])),_:1})])),_:1}),l(k,{class:"u-demo-block"},{default:n((()=>[l(y,{class:"u-demo-block__title"},{default:n((()=>[f("按钮组")])),_:1}),l(k,{class:"u-page__swipe-action-item"},{default:n((()=>[l(S,null,{default:n((()=>[l(C,{options:h.options2},{default:n((()=>[l(k,{class:"swipe-action u-border-top u-border-bottom"},{default:n((()=>[l(k,{class:"swipe-action__content"},{default:n((()=>[l(y,{class:"swipe-action__content__text"},{default:n((()=>[f("两个按钮并列")])),_:1})])),_:1})])),_:1})])),_:1},8,["options"])])),_:1})])),_:1})])),_:1}),l(k,{class:"u-demo-block"},{default:n((()=>[l(y,{class:"u-demo-block__title"},{default:n((()=>[f("带图标")])),_:1}),l(k,{class:"u-page__swipe-action-item"},{default:n((()=>[l(S,null,{default:n((()=>[l(C,{options:h.options3},{default:n((()=>[l(k,{class:"swipe-action u-border-top u-border-bottom"},{default:n((()=>[l(k,{class:"swipe-action__content"},{default:n((()=>[l(y,{class:"swipe-action__content__text"},{default:n((()=>[f("自定义图标")])),_:1})])),_:1})])),_:1})])),_:1},8,["options"])])),_:1})])),_:1})])),_:1}),l(k,{class:"u-demo-block"},{default:n((()=>[l(y,{class:"u-demo-block__title"},{default:n((()=>[f("组合使用")])),_:1}),l(k,{class:"u-page__swipe-action-item"},{default:n((()=>[l(S,null,{default:n((()=>[(a(!0),u(r,null,d(h.options4,((t,e)=>(a(),i(C,{options:t.options,disabled:t.disabled,key:e},{default:n((()=>[l(k,{class:g(["swipe-action u-border-top",[e===h.options4.length-1&&"u-border-bottom"]])},{default:n((()=>[l(k,{class:"swipe-action__content"},{default:n((()=>[l(y,{class:"swipe-action__content__text"},{default:n((()=>[f(_(t.text),1)])),_:2},1024)])),_:2},1024)])),_:2},1032,["class"])])),_:2},1032,["options","disabled"])))),128))])),_:1})])),_:1})])),_:1}),l(k,{class:"u-demo-block"},{default:n((()=>[l(y,{class:"u-demo-block__title"},{default:n((()=>[f("自定义按钮形状")])),_:1}),l(k,{class:"u-page__swipe-action-item"},{default:n((()=>[l(S,null,{default:n((()=>[l(C,{options:h.options5},{default:n((()=>[l(k,{class:"swipe-action u-border-top u-border-bottom"},{default:n((()=>[l(k,{class:"swipe-action__content"},{default:n((()=>[l(y,{class:"swipe-action__content__text"},{default:n((()=>[f("圆形按钮")])),_:1})])),_:1})])),_:1})])),_:1},8,["options"])])),_:1})])),_:1})])),_:1})])),_:1})}],["__scopeId","data-v-c3eb2c48"]]);export{R as default};
