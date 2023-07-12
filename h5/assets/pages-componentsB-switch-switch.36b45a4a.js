import{o as e,c as l,w as a,i as u,a as o,f as t,t as d,g as s,d as c}from"./index-c9cf8d84.js";import{_}from"./u-switch.e7222bdf.js";import{r as m}from"./uni-app.es.6a8abedf.js";import{_ as n}from"./_plugin-vue_export-helper.1b428a4d.js";import"./u-loading-icon.91bfb1b1.js";const i=n({data:()=>({value1:!1,value2:!0,value3:!1,value4:!0,value5:!1,value6:!0,value7:!1,value8:!0,value9:!0,value10:!0,value11:!1,value12:!0,value13:!0}),watch:{value1(e,l){console.log("v-model",e)}},methods:{change(e){console.log("change",e)},asyncChange(e){uni.showModal({content:e?"确定要打开吗":"确定要关闭吗",success:l=>{l.confirm&&(this.value13=e)}})}}},[["render",function(n,i,v,g,f,p){const V=s,r=m(c("u-switch"),_),b=u;return e(),l(b,{class:"u-page"},{default:a((()=>[o(b,{class:"u-demo-block"},{default:a((()=>[o(V,{class:"u-demo-block__title"},{default:a((()=>[t("基础功能")])),_:1}),o(b,{class:"u-demo-block__content"},{default:a((()=>[o(b,{class:"u-page__tag-item"},{default:a((()=>[o(r,{modelValue:f.value1,"onUpdate:modelValue":i[0]||(i[0]=e=>f.value1=e),onChange:p.change},null,8,["modelValue","onChange"]),t(" "+d(f.value1),1)])),_:1}),o(b,{class:"u-page__tag-item"},{default:a((()=>[o(r,{modelValue:f.value2,"onUpdate:modelValue":i[1]||(i[1]=e=>f.value2=e)},null,8,["modelValue"]),t(" "+d(f.value2),1)])),_:1})])),_:1})])),_:1}),o(b,{class:"u-demo-block"},{default:a((()=>[o(V,{class:"u-demo-block__title"},{default:a((()=>[t("加载中")])),_:1}),o(b,{class:"u-demo-block__content"},{default:a((()=>[o(b,{class:"u-page__tag-item"},{default:a((()=>[o(r,{modelValue:f.value3,"onUpdate:modelValue":i[2]||(i[2]=e=>f.value3=e),loading:""},null,8,["modelValue"])])),_:1}),o(b,{class:"u-page__tag-item"},{default:a((()=>[o(r,{modelValue:f.value4,"onUpdate:modelValue":i[3]||(i[3]=e=>f.value4=e),loading:""},null,8,["modelValue"])])),_:1})])),_:1})])),_:1}),o(b,{class:"u-demo-block"},{default:a((()=>[o(V,{class:"u-demo-block__title"},{default:a((()=>[t("禁用状态")])),_:1}),o(b,{class:"u-demo-block__content"},{default:a((()=>[o(b,{class:"u-page__tag-item"},{default:a((()=>[o(r,{modelValue:f.value5,"onUpdate:modelValue":i[4]||(i[4]=e=>f.value5=e),disabled:""},null,8,["modelValue"])])),_:1}),o(b,{class:"u-page__tag-item"},{default:a((()=>[o(r,{modelValue:f.value6,"onUpdate:modelValue":i[5]||(i[5]=e=>f.value6=e),disabled:""},null,8,["modelValue"])])),_:1})])),_:1})])),_:1}),o(b,{class:"u-demo-block"},{default:a((()=>[o(V,{class:"u-demo-block__title"},{default:a((()=>[t("自定义尺寸")])),_:1}),o(b,{class:"u-demo-block__content"},{default:a((()=>[o(b,{class:"u-page__tag-item"},{default:a((()=>[o(r,{modelValue:f.value7,"onUpdate:modelValue":i[6]||(i[6]=e=>f.value7=e),size:"28"},null,8,["modelValue"])])),_:1}),o(b,{class:"u-page__tag-item"},{default:a((()=>[o(r,{modelValue:f.value8,"onUpdate:modelValue":i[7]||(i[7]=e=>f.value8=e),size:"20"},null,8,["modelValue"])])),_:1})])),_:1})])),_:1}),o(b,{class:"u-demo-block"},{default:a((()=>[o(V,{class:"u-demo-block__title"},{default:a((()=>[t("自定义颜色")])),_:1}),o(b,{class:"u-demo-block__content"},{default:a((()=>[o(b,{class:"u-page__tag-item"},{default:a((()=>[o(r,{modelValue:f.value9,"onUpdate:modelValue":i[8]||(i[8]=e=>f.value9=e),activeColor:"#f56c6c",loading:""},null,8,["modelValue"])])),_:1}),o(b,{class:"u-page__tag-item"},{default:a((()=>[o(r,{modelValue:f.value10,"onUpdate:modelValue":i[9]||(i[9]=e=>f.value10=e),activeColor:"#5ac725",loading:""},null,8,["modelValue"])])),_:1})])),_:1})])),_:1}),o(b,{class:"u-demo-block"},{default:a((()=>[o(V,{class:"u-demo-block__title"},{default:a((()=>[t("自定义样式")])),_:1}),o(b,{class:"u-demo-block__content"},{default:a((()=>[o(b,{class:"u-page__tag-item"},{default:a((()=>[o(r,{space:2,modelValue:f.value11,"onUpdate:modelValue":i[10]||(i[10]=e=>f.value11=e),activeColor:"#f56c6c",inactiveColor:"rgb(230, 230, 230)"},null,8,["modelValue"])])),_:1}),o(b,{class:"u-page__tag-item"},{default:a((()=>[o(r,{space:"2",modelValue:f.value12,"onUpdate:modelValue":i[11]||(i[11]=e=>f.value12=e),activeColor:"#f9ae3d",inactiveColor:"rgb(230, 230, 230)"},null,8,["modelValue"])])),_:1})])),_:1})])),_:1}),o(b,{class:"u-demo-block"},{default:a((()=>[o(V,{class:"u-demo-block__title"},{default:a((()=>[t("异步控制")])),_:1}),o(b,{class:"u-demo-block__content"},{default:a((()=>[o(b,{class:"u-page__tag-item"},{default:a((()=>[o(r,{modelValue:f.value13,"onUpdate:modelValue":i[12]||(i[12]=e=>f.value13=e),asyncChange:"",onChange:p.asyncChange},null,8,["modelValue","onChange"])])),_:1})])),_:1})])),_:1})])),_:1})}],["__scopeId","data-v-04f55c44"]]);export{i as default};
