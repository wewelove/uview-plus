import{_ as o}from"./u-navbar.b318e63e.js";import{o as e,c as a,w as t,i,a as s,b as n,r,F as l,d,e as c}from"./index-c9cf8d84.js";import{r as u}from"./uni-app.es.6a8abedf.js";import{_ as m}from"./u-gap.6fc5dfe1.js";import{_ as p}from"./u-cell.f4c772c3.js";import{_ as h}from"./u-cell-group.5a8a7c63.js";import{_ as k}from"./u-keyboard.62f563ed.js";import{_ as b}from"./_plugin-vue_export-helper.1b428a4d.js";import"./u-status-bar.9ab06bbc.js";import"./u-icon.fe05ba1a.js";import"./u-line.a45c8667.js";import"./u-popup.54d7a8fc.js";import"./u-overlay.3dd008c0.js";import"./u-transition.377b9072.js";import"./u-safe-bottom.abf2a42c.js";const f=b({data:()=>({input:"",keyData:{mode:"",dotDisabled:!1,random:!1},list:[{title:"车牌号键盘",iconUrl:"https://cdn.uviewui.com/uview/demo/keyboard/car.png"},{title:"数字键盘",iconUrl:"https://cdn.uviewui.com/uview/demo/keyboard/number.png"},{title:"身份证键盘",iconUrl:"https://cdn.uviewui.com/uview/demo/keyboard/IdCard.png"},{title:'隐藏键盘"."符号',iconUrl:"https://cdn.uviewui.com/uview/demo/keyboard/dot.png"},{title:"打乱键盘按键的顺序",iconUrl:"https://cdn.uviewui.com/uview/demo/keyboard/order.png"}],show:!1}),methods:{navigateBack(){uni.navigateBack()},openKeyboard(o){this.keyData={mode:"",dotDisabled:!1,random:!1},0==o?this.keyData.mode="":1==o?this.keyData.mode="number":2==o?this.keyData.mode="card":3==o?(this.keyData.mode="number",this.keyData.dotDisabled=!0):4==o&&(this.keyData.mode="number",this.keyData.random=!0),this.input="",this.show=!0},change(o){this.input+=o},close(){this.show=!1},cancel(){this.show=!1},confirm(){this.show=!1},backspace(){this.input=this.input.slice(0,-1)}}},[["render",function(b,f,y,g,w,v){const D=u(d("u-navbar"),o),j=u(d("u-gap"),m),C=c,_=u(d("u-cell"),p),x=u(d("u-cell-group"),h),U=u(d("u-keyboard"),k),B=i;return e(),a(B,{class:"u-page"},{default:t((()=>[s(D,{title:"键盘",onLeftClick:v.navigateBack,safeAreaInsetTop:"",fixed:"",placeholder:""},null,8,["onLeftClick"]),s(j,{height:"20",bgColor:"#fff"}),s(x,null,{default:t((()=>[(e(!0),n(l,null,r(w.list,((o,i)=>(e(),a(_,{titleStyle:{fontWeight:500},onClick:o=>v.openKeyboard(i),title:o.title,key:i,isLink:""},{default:t((()=>[s(C,{slot:"icon",class:"u-cell-icon",src:o.iconUrl,mode:"widthFix"},null,8,["src"])])),_:2},1032,["onClick","title"])))),128))])),_:1}),s(U,{mode:w.keyData.mode,dotDisabled:w.keyData.dotDisabled,random:w.keyData.random,show:w.show,onClose:v.close,onCancel:v.cancel,onConfirm:v.confirm,onChange:v.change,onBackspace:v.backspace},null,8,["mode","dotDisabled","random","show","onClose","onCancel","onConfirm","onChange","onBackspace"])])),_:1})}],["__scopeId","data-v-8f90c6a4"]]);export{f as default};
