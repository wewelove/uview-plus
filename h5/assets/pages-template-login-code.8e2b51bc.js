import{o as s,c as a,w as e,i as t,a as n,f as o,q as l,t as c,j as i,g as h}from"./index-c9cf8d84.js";import{_ as u}from"./_plugin-vue_export-helper.1b428a4d.js";const r=u({data:()=>({maxlength:4,value:"",second:3,show:!1,error:!1}),computed:{},onLoad(){let s=setInterval((()=>{this.second--,this.second<=0&&(this.show=!0,4!=this.value.lenth&&(this.error=!0),clearInterval(s))}),1e3)},methods:{noCaptcha(){uni.showActionSheet({itemList:["重新获取验证码","接听语音验证码"],success:function(s){},fail:function(s){}})},change(s){},finish(s){}}},[["render",function(u,r,d,f,p,m){const _=t,g=i("u-message-input"),v=h;return s(),a(_,{class:"wrap"},{default:e((()=>[n(_,{class:"key-input"},{default:e((()=>[n(_,{class:"title"},{default:e((()=>[o("输入验证码")])),_:1}),n(_,{class:"tips"},{default:e((()=>[o("验证码已发送至 +150****9320")])),_:1}),n(g,{focus:!0,value:p.value,onChange:m.change,onFinish:m.finish,mode:"bottomLine",maxlength:p.maxlength},null,8,["value","onChange","onFinish","maxlength"]),n(v,{class:l({error:p.error})},{default:e((()=>[o("验证码错误，请重新输入")])),_:1},8,["class"]),n(_,{class:"captcha"},{default:e((()=>[n(v,{class:l({noCaptcha:p.show}),onClick:m.noCaptcha},{default:e((()=>[o("收不到验证码点这里")])),_:1},8,["class","onClick"]),n(v,{class:l({regain:!p.show})},{default:e((()=>[o(c(p.second)+"秒后重新获取验证码",1)])),_:1},8,["class"])])),_:1})])),_:1})])),_:1})}],["__scopeId","data-v-55498628"]]);export{r as default};
