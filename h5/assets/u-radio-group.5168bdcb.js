import{_ as e}from"./u-icon.fe05ba1a.js";import{l as t,m as a,h as i,d as l,o,c as r,w as n,a as s,q as d,u as c,n as u,k as h,f as p,t as b,i as m,g as C}from"./index-c9cf8d84.js";import{r as S}from"./uni-app.es.6a8abedf.js";import{_ as f}from"./_plugin-vue_export-helper.1b428a4d.js";const D=f({name:"u-radio",mixins:[a,i,{props:{name:{type:[String,Number,Boolean],default:t.radio.name},shape:{type:String,default:t.radio.shape},disabled:{type:[String,Boolean],default:t.radio.disabled},labelDisabled:{type:[String,Boolean],default:t.radio.labelDisabled},activeColor:{type:String,default:t.radio.activeColor},inactiveColor:{type:String,default:t.radio.inactiveColor},iconSize:{type:[String,Number],default:t.radio.iconSize},labelSize:{type:[String,Number],default:t.radio.labelSize},label:{type:[String,Number],default:t.radio.label},size:{type:[String,Number],default:t.radio.size},color:{type:String,default:t.radio.color},labelColor:{type:String,default:t.radio.labelColor},iconColor:{type:String,default:t.radio.iconColor}}}],data:()=>({checked:!1,parentData:{iconSize:12,labelDisabled:null,disabled:null,shape:null,activeColor:null,inactiveColor:null,size:18,value:null,modelValue:null,iconColor:null,placement:"row",borderBottom:!1,iconPlacement:"left"}}),computed:{elDisabled(){return""!==this.disabled?this.disabled:null!==this.parentData.disabled&&this.parentData.disabled},elLabelDisabled(){return""!==this.labelDisabled?this.labelDisabled:null!==this.parentData.labelDisabled&&this.parentData.labelDisabled},elSize(){return this.size?this.size:this.parentData.size?this.parentData.size:21},elIconSize(){return this.iconSize?this.iconSize:this.parentData.iconSize?this.parentData.iconSize:12},elActiveColor(){return this.activeColor?this.activeColor:this.parentData.activeColor?this.parentData.activeColor:"#2979ff"},elInactiveColor(){return this.inactiveColor?this.inactiveColor:this.parentData.inactiveColor?this.parentData.inactiveColor:"#c8c9cc"},elLabelColor(){return this.labelColor?this.labelColor:this.parentData.labelColor?this.parentData.labelColor:"#606266"},elShape(){return this.shape?this.shape:this.parentData.shape?this.parentData.shape:"circle"},elLabelSize(){return uni.$u.addUnit(this.labelSize?this.labelSize:this.parentData.labelSize?this.parentData.labelSize:"15")},elIconColor(){const e=this.iconColor?this.iconColor:this.parentData.iconColor?this.parentData.iconColor:"#ffffff";return this.elDisabled?this.checked?this.elInactiveColor:"transparent":this.checked?e:"transparent"},iconClasses(){let e=[];return e.push("u-radio__icon-wrap--"+this.elShape),this.elDisabled&&e.push("u-radio__icon-wrap--disabled"),this.checked&&this.elDisabled&&e.push("u-radio__icon-wrap--disabled--checked"),e},iconWrapStyle(){const e={};return e.backgroundColor=this.checked&&!this.elDisabled?this.elActiveColor:"#ffffff",e.borderColor=this.checked&&!this.elDisabled?this.elActiveColor:this.elInactiveColor,e.width=uni.$u.addUnit(this.elSize),e.height=uni.$u.addUnit(this.elSize),"right"===this.parentData.iconPlacement&&(e.marginRight=0),e},radioStyle(){const e={};return this.parentData.borderBottom&&"row"===this.parentData.placement&&uni.$u.error("检测到您将borderBottom设置为true，需要同时将u-radio-group的placement设置为column才有效"),this.parentData.borderBottom&&"column"===this.parentData.placement&&(e.paddingBottom="ios"===uni.$u.os()?"12px":"8px"),uni.$u.deepMerge(e,uni.$u.addStyle(this.customStyle))}},mounted(){this.init()},methods:{init(){this.updateParentData(),this.parent||uni.$u.error("u-radio必须搭配u-radio-group组件使用"),this.checked=this.name===this.parentData.modelValue},updateParentData(){this.getParentData("u-radio-group")},iconClickHandler(e){this.preventEvent(e),this.elDisabled||this.setRadioCheckedStatus()},wrapperClickHandler(e){"right"===this.parentData.iconPlacement&&this.iconClickHandler(e)},labelClickHandler(e){this.preventEvent(e),this.elLabelDisabled||this.elDisabled||this.setRadioCheckedStatus()},emitEvent(){this.checked||(this.$emit("change",this.name),this.$nextTick((()=>{uni.$u.formValidate(this,"change")})))},setRadioCheckedStatus(){this.emitEvent(),this.checked=!0,"function"==typeof this.parent.unCheckedOther&&this.parent.unCheckedOther(this)}}},[["render",function(t,a,i,f,D,g){const y=S(l("u-icon"),e),v=m,z=C;return o(),r(v,{class:d(["u-radio",[`u-radio-label--${D.parentData.iconPlacement}`,D.parentData.borderBottom&&"column"===D.parentData.placement&&"u-border-bottom"]]),onClick:c(g.wrapperClickHandler,["stop"]),style:u([g.radioStyle])},{default:n((()=>[s(v,{class:d(["u-radio__icon-wrap",g.iconClasses]),onClick:c(g.iconClickHandler,["stop"]),style:u([g.iconWrapStyle])},{default:n((()=>[h(t.$slots,"icon",{},(()=>[s(y,{class:"u-radio__icon-wrap__icon",name:"checkbox-mark",size:g.elIconSize,color:g.elIconColor},null,8,["size","color"])]),!0)])),_:3},8,["onClick","class","style"]),s(z,{class:"u-radio__text",onClick:c(g.labelClickHandler,["stop"]),style:u({color:g.elDisabled?g.elInactiveColor:g.elLabelColor,fontSize:g.elLabelSize,lineHeight:g.elLabelSize})},{default:n((()=>[p(b(t.label),1)])),_:1},8,["onClick","style"])])),_:3},8,["onClick","style","class"])}],["__scopeId","data-v-d4157dd0"]]);const g=f({name:"u-radio-group",mixins:[a,i,{props:{modelValue:{type:[String,Number,Boolean],default:t.radioGroup.value},disabled:{type:Boolean,default:t.radioGroup.disabled},shape:{type:String,default:t.radioGroup.shape},activeColor:{type:String,default:t.radioGroup.activeColor},inactiveColor:{type:String,default:t.radioGroup.inactiveColor},name:{type:String,default:t.radioGroup.name},size:{type:[String,Number],default:t.radioGroup.size},placement:{type:String,default:t.radioGroup.placement},label:{type:[String],default:t.radioGroup.label},labelColor:{type:[String],default:t.radioGroup.labelColor},labelSize:{type:[String,Number],default:t.radioGroup.labelSize},labelDisabled:{type:Boolean,default:t.radioGroup.labelDisabled},iconColor:{type:String,default:t.radioGroup.iconColor},iconSize:{type:[String,Number],default:t.radioGroup.iconSize},borderBottom:{type:Boolean,default:t.radioGroup.borderBottom},iconPlacement:{type:String,default:t.radio.iconPlacement}}}],computed:{parentData(){return[this.modelValue,this.disabled,this.inactiveColor,this.activeColor,this.size,this.labelDisabled,this.shape,this.iconSize,this.borderBottom,this.placement]},bemClass(){return this.bem("radio-group",["placement"])}},watch:{parentData(){this.children.length&&this.children.map((e=>{"function"==typeof e.init&&e.init()}))}},data:()=>({}),created(){this.children=[]},emits:["update:modelValue","change"],methods:{unCheckedOther(e){this.children.map((t=>{e!==t&&(t.checked=!1)}));const{name:t}=e;this.$emit("update:modelValue",t),this.$emit("change",t)}}},[["render",function(e,t,a,i,l,s){const c=m;return o(),r(c,{class:d(["u-radio-group",s.bemClass])},{default:n((()=>[h(e.$slots,"default",{},void 0,!0)])),_:3},8,["class"])}],["__scopeId","data-v-a95547ab"]]);export{D as _,g as a};
