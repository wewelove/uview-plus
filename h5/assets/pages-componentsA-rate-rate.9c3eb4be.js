import{l as e,m as t,h as a,d as l,o,c,w as s,a as u,u as i,b as n,F as d,r as _,q as r,n as m,p as f,i as h,f as v,g as p}from"./index-c9cf8d84.js";import{_ as g}from"./u-icon.fe05ba1a.js";import{r as b}from"./uni-app.es.6a8abedf.js";import{_ as k}from"./_plugin-vue_export-helper.1b428a4d.js";const I=k({name:"u-rate",mixins:[t,a,{props:{modelValue:{type:[String,Number],default:e.rate.value},count:{type:[String,Number],default:e.rate.count},disabled:{type:Boolean,default:e.rate.disabled},readonly:{type:Boolean,default:e.rate.readonly},size:{type:[String,Number],default:e.rate.size},inactiveColor:{type:String,default:e.rate.inactiveColor},activeColor:{type:String,default:e.rate.activeColor},gutter:{type:[String,Number],default:e.rate.gutter},minCount:{type:[String,Number],default:e.rate.minCount},allowHalf:{type:Boolean,default:e.rate.allowHalf},activeIcon:{type:String,default:e.rate.activeIcon},inactiveIcon:{type:String,default:e.rate.inactiveIcon},touchable:{type:Boolean,default:e.rate.touchable}}}],data(){return{elId:uni.$u.guid(),elClass:uni.$u.guid(),rateBoxLeft:0,activeIndex:this.modelValue,rateWidth:0,moving:!1}},watch:{modelValue(e){this.activeIndex=e},activeIndex:"emitEvent"},emits:["update:modelValue","change"],methods:{init(){uni.$u.sleep().then((()=>{this.getRateItemRect(),this.getRateIconWrapRect()}))},async getRateItemRect(){await uni.$u.sleep(),this.$uGetRect("#"+this.elId).then((e=>{this.rateBoxLeft=e.left}))},getRateIconWrapRect(){this.$uGetRect("."+this.elClass).then((e=>{this.rateWidth=e.width}))},touchMove(e){if(!this.touchable)return;this.preventEvent(e);const t=e.changedTouches[0].pageX;this.getActiveIndex(t)},touchEnd(e){if(!this.touchable)return;this.preventEvent(e);const t=e.changedTouches[0].pageX;this.getActiveIndex(t)},clickHandler(e,t){if("ios"===uni.$u.os()&&this.moving)return;this.preventEvent(e);let a=0;a=e.changedTouches[0].pageX,this.getActiveIndex(a,!0)},emitEvent(){this.$emit("change",this.activeIndex),this.$emit("update:modelValue",this.activeIndex)},getActiveIndex(e,t=!1){if(this.disabled||this.readonly)return;const a=this.rateWidth*this.count+this.rateBoxLeft,l=e=uni.$u.range(this.rateBoxLeft,a,e)-this.rateBoxLeft;let o;if(this.allowHalf){o=Math.floor(l/this.rateWidth);const e=l%this.rateWidth;e<=this.rateWidth/2&&e>0?o+=.5:e>this.rateWidth/2&&o++}else{o=Math.floor(l/this.rateWidth);const e=l%this.rateWidth;t?e>0&&o++:e>this.rateWidth/2&&o++}this.activeIndex=Math.min(o,this.count),this.activeIndex<this.minCount&&(this.activeIndex=this.minCount),setTimeout((()=>{this.moving=!0}),10),setTimeout((()=>{this.moving=!1}),10)}},mounted(){this.init()}},[["render",function(e,t,a,v,p,k){const I=b(l("u-icon"),g),y=h;return o(),c(y,{class:"u-rate",id:p.elId,ref:"u-rate",style:m([e.$u.addStyle(e.customStyle)])},{default:s((()=>[u(y,{class:"u-rate__content",onTouchmove:i(k.touchMove,["stop"]),onTouchend:i(k.touchEnd,["stop"])},{default:s((()=>[(o(!0),n(d,null,_(Number(e.count),((t,a)=>(o(),c(y,{class:r(["u-rate__content__item",[p.elClass]]),key:a},{default:s((()=>[u(y,{class:"u-rate__content__item__icon-wrap",ref_for:!0,ref:"u-rate__content__item__icon-wrap",onClick:i((e=>k.clickHandler(e,a+1)),["stop"])},{default:s((()=>[u(I,{name:Math.floor(p.activeIndex)>a?e.activeIcon:e.inactiveIcon,color:e.disabled?"#c8c9cc":Math.floor(p.activeIndex)>a?e.activeColor:e.inactiveColor,"custom-style":{padding:`0 ${e.$u.addUnit(e.gutter/2)}`},size:e.size},null,8,["name","color","custom-style","size"])])),_:2},1032,["onClick"]),e.allowHalf?(o(),c(y,{key:0,onClick:i((e=>k.clickHandler(e,a+1)),["stop"]),class:"u-rate__content__item__icon-wrap u-rate__content__item__icon-wrap--half",style:m([{width:e.$u.addUnit(p.rateWidth/2)}]),ref_for:!0,ref:"u-rate__content__item__icon-wrap"},{default:s((()=>[u(I,{name:Math.ceil(p.activeIndex)>a?e.activeIcon:e.inactiveIcon,color:e.disabled?"#c8c9cc":Math.ceil(p.activeIndex)>a?e.activeColor:e.inactiveColor,"custom-style":{padding:`0 ${e.$u.addUnit(e.gutter/2)}`},size:e.size},null,8,["name","color","custom-style","size"])])),_:2},1032,["onClick","style"])):f("",!0)])),_:2},1032,["class"])))),128))])),_:1},8,["onTouchmove","onTouchend"])])),_:1},8,["id","style"])}],["__scopeId","data-v-d51c1c48"]]);const y=k({data:()=>({value:3,value1:2,activeColorValue:3,HalfValue:3.5,activeIconValue:3}),watch:{value(e,t){}},methods:{change(e){}}},[["render",function(e,t,a,i,n,d){const _=p,r=b(l("u-rate"),I),m=h;return o(),c(m,{class:"u-page"},{default:s((()=>[u(m,{class:"u-demo-block"},{default:s((()=>[u(_,{class:"u-demo-block__title"},{default:s((()=>[v("基本案例")])),_:1}),u(m,{class:"u-demo-block__content"},{default:s((()=>[u(m,{class:"u-page__tag-item"},{default:s((()=>[u(r,{size:"20"})])),_:1})])),_:1})])),_:1}),u(m,{class:"u-demo-block"},{default:s((()=>[u(_,{class:"u-demo-block__title"},{default:s((()=>[v("自定义选中星星数量")])),_:1}),u(m,{class:"u-demo-block__content"},{default:s((()=>[u(m,{class:"u-page__tag-item flex"},{default:s((()=>[u(r,{size:"20",modelValue:n.value,"onUpdate:modelValue":t[0]||(t[0]=e=>n.value=e),onChange:d.change},null,8,["modelValue","onChange"])])),_:1})])),_:1})])),_:1}),u(m,{class:"u-demo-block"},{default:s((()=>[u(_,{class:"u-demo-block__title"},{default:s((()=>[v("自定义星星大小")])),_:1}),u(m,{class:"u-demo-block__content"},{default:s((()=>[u(m,{class:"u-page__tag-item"},{default:s((()=>[u(r,{size:"30",count:"4"})])),_:1})])),_:1})])),_:1}),u(m,{class:"u-demo-block"},{default:s((()=>[u(_,{class:"u-demo-block__title"},{default:s((()=>[v("是否禁用评分")])),_:1}),u(m,{class:"u-demo-block__content"},{default:s((()=>[u(m,{class:"u-page__rate-item"},{default:s((()=>[u(r,{size:"20",disabled:""})])),_:1})])),_:1})])),_:1}),u(m,{class:"u-demo-block"},{default:s((()=>[u(_,{class:"u-demo-block__title"},{default:s((()=>[v("是否只读评分")])),_:1}),u(m,{class:"u-demo-block__content"},{default:s((()=>[u(m,{class:"u-page__rate-item"},{default:s((()=>[u(r,{size:"20",readonly:""})])),_:1})])),_:1})])),_:1}),u(m,{class:"u-demo-block"},{default:s((()=>[u(_,{class:"u-demo-block__title"},{default:s((()=>[v("自定义选中星星颜色")])),_:1}),u(m,{class:"u-demo-block__content"},{default:s((()=>[u(m,{class:"u-page__rate-item"},{default:s((()=>[u(r,{size:"20",modelValue:n.activeColorValue,"onUpdate:modelValue":t[1]||(t[1]=e=>n.activeColorValue=e),activeColor:"#2979ff"},null,8,["modelValue"])])),_:1})])),_:1})])),_:1}),u(m,{class:"u-demo-block"},{default:s((()=>[u(_,{class:"u-demo-block__title"},{default:s((()=>[v("自定义未选中星星颜色")])),_:1}),u(m,{class:"u-demo-block__content"},{default:s((()=>[u(m,{class:"u-page__rate-item"},{default:s((()=>[u(r,{size:"20",modelValue:n.value1,"onUpdate:modelValue":t[2]||(t[2]=e=>n.value1=e),inactiveColor:"#2979ff"},null,8,["modelValue"])])),_:1})])),_:1})])),_:1}),u(m,{class:"u-demo-block"},{default:s((()=>[u(_,{class:"u-demo-block__title"},{default:s((()=>[v("禁止触摸选择")])),_:1}),u(m,{class:"u-demo-block__content"},{default:s((()=>[u(m,{class:"u-page__rate-item"},{default:s((()=>[u(r,{size:"20",touchable:!1})])),_:1})])),_:1})])),_:1}),u(m,{class:"u-demo-block"},{default:s((()=>[u(_,{class:"u-demo-block__title"},{default:s((()=>[v("允许触摸选择")])),_:1}),u(m,{class:"u-demo-block__content"},{default:s((()=>[u(m,{class:"u-page__rate-item"},{default:s((()=>[u(r,{size:"20",touchable:!0})])),_:1})])),_:1})])),_:1}),u(m,{class:"u-demo-block"},{default:s((()=>[u(_,{class:"u-demo-block__title"},{default:s((()=>[v("是否允许半星")])),_:1}),u(m,{class:"u-demo-block__content"},{default:s((()=>[u(m,{class:"u-page__rate-item"},{default:s((()=>[u(r,{size:"20",modelValue:n.HalfValue,"onUpdate:modelValue":t[3]||(t[3]=e=>n.HalfValue=e),allowHalf:!0,onChange:d.change},null,8,["modelValue","onChange"])])),_:1})])),_:1})])),_:1}),u(m,{class:"u-demo-block"},{default:s((()=>[u(_,{class:"u-demo-block__title"},{default:s((()=>[v("自定义选中的图标")])),_:1}),u(m,{class:"u-demo-block__content"},{default:s((()=>[u(m,{class:"u-page__rate-item"},{default:s((()=>[u(r,{size:"20",modelValue:n.activeIconValue,"onUpdate:modelValue":t[4]||(t[4]=e=>n.activeIconValue=e),inactiveIcon:"heart",activeIcon:"heart-fill"},null,8,["modelValue"])])),_:1})])),_:1})])),_:1})])),_:1})}],["__scopeId","data-v-3eb5471d"]]);export{y as default};
