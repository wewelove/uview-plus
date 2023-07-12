import{l as e,m as t,h as i,o as r,c as a,w as s,q as l,n,a as o,p as u,b as c,F as d,r as p,i as w,d as g,f as m,t as _,k as h,e as y,D as v,g as f,S as k,v as b}from"./index-c9cf8d84.js";import{_ as C}from"./u-loading-icon.91bfb1b1.js";import{r as I}from"./uni-app.es.6a8abedf.js";import{_ as S}from"./_plugin-vue_export-helper.1b428a4d.js";import{_ as M}from"./u-gap.6fc5dfe1.js";const $=S({name:"u-swiper-indicator",mixins:[t,i,{props:{length:{type:[String,Number],default:e.swiperIndicator.length},current:{type:[String,Number],default:e.swiperIndicator.current},indicatorActiveColor:{type:String,default:e.swiperIndicator.indicatorActiveColor},indicatorInactiveColor:{type:String,default:e.swiperIndicator.indicatorInactiveColor},indicatorMode:{type:String,default:e.swiperIndicator.indicatorMode}}}],data:()=>({lineWidth:22}),computed:{lineStyle(){let e={};return e.width=uni.$u.addUnit(this.lineWidth),e.transform=`translateX(${uni.$u.addUnit(this.current*this.lineWidth)})`,e.backgroundColor=this.indicatorActiveColor,e},dotStyle(){return e=>{let t={};return t.backgroundColor=e===this.current?this.indicatorActiveColor:this.indicatorInactiveColor,t}}}},[["render",function(e,t,i,g,m,_){const h=w;return r(),a(h,{class:"u-swiper-indicator"},{default:s((()=>["line"===e.indicatorMode?(r(),a(h,{key:0,class:l(["u-swiper-indicator__wrapper",[`u-swiper-indicator__wrapper--${e.indicatorMode}`]]),style:n({width:e.$u.addUnit(m.lineWidth*e.length),backgroundColor:e.indicatorInactiveColor})},{default:s((()=>[o(h,{class:"u-swiper-indicator__wrapper--line__bar",style:n([_.lineStyle])},null,8,["style"])])),_:1},8,["class","style"])):u("",!0),"dot"===e.indicatorMode?(r(),a(h,{key:1,class:"u-swiper-indicator__wrapper"},{default:s((()=>[(r(!0),c(d,null,p(e.length,((t,i)=>(r(),a(h,{class:l(["u-swiper-indicator__wrapper__dot",[i===e.current&&"u-swiper-indicator__wrapper__dot--active"]]),key:i,style:n([_.dotStyle(i)])},null,8,["class","style"])))),128))])),_:1})):u("",!0)])),_:1})}],["__scopeId","data-v-7a79e5f1"]]);const x=S({name:"u-swiper",mixins:[t,i,{props:{list:{type:Array,default:e.swiper.list},indicator:{type:Boolean,default:e.swiper.indicator},indicatorActiveColor:{type:String,default:e.swiper.indicatorActiveColor},indicatorInactiveColor:{type:String,default:e.swiper.indicatorInactiveColor},indicatorStyle:{type:[String,Object],default:e.swiper.indicatorStyle},indicatorMode:{type:String,default:e.swiper.indicatorMode},autoplay:{type:Boolean,default:e.swiper.autoplay},current:{type:[String,Number],default:e.swiper.current},currentItemId:{type:String,default:e.swiper.currentItemId},interval:{type:[String,Number],default:e.swiper.interval},duration:{type:[String,Number],default:e.swiper.duration},circular:{type:Boolean,default:e.swiper.circular},previousMargin:{type:[String,Number],default:e.swiper.previousMargin},nextMargin:{type:[String,Number],default:e.swiper.nextMargin},acceleration:{type:Boolean,default:e.swiper.acceleration},displayMultipleItems:{type:Number,default:e.swiper.displayMultipleItems},easingFunction:{type:String,default:e.swiper.easingFunction},keyName:{type:String,default:e.swiper.keyName},imgMode:{type:String,default:e.swiper.imgMode},height:{type:[String,Number],default:e.swiper.height},bgColor:{type:String,default:e.swiper.bgColor},radius:{type:[String,Number],default:e.swiper.radius},loading:{type:Boolean,default:e.swiper.loading},showTitle:{type:Boolean,default:e.swiper.showTitle}}}],data:()=>({currentIndex:0}),watch:{current(e,t){e!==t&&(this.currentIndex=e)}},computed:{itemStyle(){return e=>{const t={};return this.nextMargin&&this.previousMargin&&(t.borderRadius=uni.$u.addUnit(this.radius),e!==this.currentIndex&&(t.transform="scale(0.92)")),t}}},methods:{getItemType(e){return"string"==typeof e?uni.$u.test.video(this.getSource(e))?"video":"image":"object"==typeof e&&this.keyName?e.type?"image"===e.type?"image":"video"===e.type?"video":"image":uni.$u.test.video(this.getSource(e))?"video":"image":void 0},getSource(e){return"string"==typeof e?e:"object"==typeof e&&this.keyName?e[this.keyName]:(uni.$u.error("请按格式传递列表参数"),"")},change(e){const{current:t}=e.detail;this.pauseVideo(this.currentIndex),this.currentIndex=t,this.$emit("change",e.detail)},pauseVideo(e){const t=this.getSource(this.list[e]);if(uni.$u.test.video(t)){uni.createVideoContext(`video-${e}`,this).pause()}},getPoster:e=>"object"==typeof e&&e.poster?e.poster:"",clickHandler(e){this.$emit("click",e)}}},[["render",function(e,t,i,l,S,M){const x=I(g("u-loading-icon"),C),N=w,U=y,j=v,A=f,T=k,B=b,F=I(g("u-swiper-indicator"),$);return r(),a(N,{class:"u-swiper",style:n({backgroundColor:e.bgColor,height:e.$u.addUnit(e.height),borderRadius:e.$u.addUnit(e.radius)})},{default:s((()=>[e.loading?(r(),a(N,{key:0,class:"u-swiper__loading"},{default:s((()=>[o(x,{mode:"circle"})])),_:1})):(r(),a(B,{key:1,class:"u-swiper__wrapper",style:n({height:e.$u.addUnit(e.height)}),onChange:M.change,circular:e.circular,interval:e.interval,duration:e.duration,autoplay:e.autoplay,current:e.current,currentItemId:e.currentItemId,previousMargin:e.$u.addUnit(e.previousMargin),nextMargin:e.$u.addUnit(e.nextMargin),acceleration:e.acceleration,displayMultipleItems:e.displayMultipleItems,easingFunction:e.easingFunction},{default:s((()=>[(r(!0),c(d,null,p(e.list,((t,i)=>(r(),a(T,{class:"u-swiper__wrapper__item",key:i},{default:s((()=>[o(N,{class:"u-swiper__wrapper__item__wrapper",style:n([M.itemStyle(i)])},{default:s((()=>["image"===M.getItemType(t)?(r(),a(U,{key:0,class:"u-swiper__wrapper__item__wrapper__image",src:M.getSource(t),mode:e.imgMode,onClick:e=>M.clickHandler(i),style:n({height:e.$u.addUnit(e.height),borderRadius:e.$u.addUnit(e.radius)})},null,8,["src","mode","onClick","style"])):u("",!0),"video"===M.getItemType(t)?(r(),a(j,{key:1,class:"u-swiper__wrapper__item__wrapper__video",id:`video-${i}`,"enable-progress-gesture":!1,src:M.getSource(t),poster:M.getPoster(t),title:e.showTitle&&e.$u.test.object(t)&&t.title?t.title:"",style:n({height:e.$u.addUnit(e.height)}),controls:"",onClick:e=>M.clickHandler(i)},null,8,["id","src","poster","title","style","onClick"])):u("",!0),e.showTitle&&e.$u.test.object(t)&&t.title&&e.$u.test.image(M.getSource(t))?(r(),a(A,{key:2,class:"u-swiper__wrapper__item__wrapper__title u-line-1"},{default:s((()=>[m(_(t.title),1)])),_:2},1024)):u("",!0)])),_:2},1032,["style"])])),_:2},1024)))),128))])),_:1},8,["style","onChange","circular","interval","duration","autoplay","current","currentItemId","previousMargin","nextMargin","acceleration","displayMultipleItems","easingFunction"])),o(N,{class:"u-swiper__indicator",style:n([e.$u.addStyle(e.indicatorStyle)])},{default:s((()=>[h(e.$slots,"indicator",{},(()=>[e.loading||!e.indicator||e.showTitle?u("",!0):(r(),a(F,{key:0,indicatorActiveColor:e.indicatorActiveColor,indicatorInactiveColor:e.indicatorInactiveColor,length:e.list.length,current:S.currentIndex,indicatorMode:e.indicatorMode},null,8,["indicatorActiveColor","indicatorInactiveColor","length","current","indicatorMode"]))]),!0)])),_:3},8,["style"])])),_:3},8,["style"])}],["__scopeId","data-v-c342989f"]]);const N=S({data:()=>({current:0,currentNum:0,list:[{image:"https://cdn.uviewui.com/uview/swiper/swiper1.png",title:"昨夜星辰昨夜风，画楼西畔桂堂东",poster:"https://cdn.uviewui.com/uview/swiper/swiper1.png"},{image:"https://cdn.uviewui.com/uview/swiper/swiper2.png",title:"身无彩凤双飞翼，心有灵犀一点通"},{image:"https://cdn.uviewui.com/uview/swiper/swiper3.png",title:"谁念西风独自凉，萧萧黄叶闭疏窗，沉思往事立残阳"}],list1:["https://cdn.uviewui.com/uview/swiper/swiper1.png","https://cdn.uviewui.com/uview/swiper/swiper2.png","https://cdn.uviewui.com/uview/swiper/swiper3.png"],list2:[{image:"https://cdn.uviewui.com/uview/swiper/swiper2.png",title:"昨夜星辰昨夜风，画楼西畔桂堂东",type:"image"},{image:"https://cdn.uviewui.com/uview/swiper/swiper1.png",title:"身无彩凤双飞翼，心有灵犀一点通"},{image:"https://cdn.uviewui.com/uview/swiper/swiper3.png",title:"谁念西风独自凉，萧萧黄叶闭疏窗，沉思往事立残阳"}],list3:["https://cdn.uviewui.com/uview/swiper/swiper3.png","https://cdn.uviewui.com/uview/swiper/swiper2.png","https://cdn.uviewui.com/uview/swiper/swiper1.png"],list4:[{url:"https://cdn.uviewui.com/uview/resources/video.mp4",title:"昨夜星辰昨夜风，画楼西畔桂堂东",poster:"https://cdn.uviewui.com/uview/swiper/swiper1.png"},{url:"https://cdn.uviewui.com/uview/swiper/swiper2.png",title:"身无彩凤双飞翼，心有灵犀一点通"},{url:"https://cdn.uviewui.com/uview/swiper/swiper3.png",title:"谁念西风独自凉，萧萧黄叶闭疏窗，沉思往事立残阳"}],list5:["https://cdn.uviewui.com/uview/swiper/swiper3.png","https://cdn.uviewui.com/uview/swiper/swiper2.png","https://cdn.uviewui.com/uview/swiper/swiper1.png"],list6:["https://cdn.uviewui.com/uview/swiper/swiper2.png","https://cdn.uviewui.com/uview/swiper/swiper3.png","https://cdn.uviewui.com/uview/swiper/swiper1.png"]}),methods:{change(e){},click(e){console.log("click",e)}}},[["render",function(e,t,i,n,u,h){const y=f,v=I(g("u-swiper"),x),k=w,b=I(g("u-gap"),M);return r(),a(k,{class:"u-page"},{default:s((()=>[o(k,{class:"u-demo-block"},{default:s((()=>[o(y,{class:"u-demo-block__title"},{default:s((()=>[m("基础功能")])),_:1}),o(v,{list:u.list1,onChange:h.change,onClick:h.click},null,8,["list","onChange","onClick"])])),_:1}),o(k,{class:"u-demo-block"},{default:s((()=>[o(y,{class:"u-demo-block__title"},{default:s((()=>[m("带标题")])),_:1}),o(v,{list:u.list2,keyName:"image",showTitle:"",autoplay:!1,circular:""},null,8,["list"])])),_:1}),o(k,{class:"u-demo-block"},{default:s((()=>[o(y,{class:"u-demo-block__title"},{default:s((()=>[m("带指示器")])),_:1}),o(v,{list:u.list3,indicator:"",indicatorMode:"line",circular:""},null,8,["list"])])),_:1}),o(k,{class:"u-demo-block"},{default:s((()=>[o(y,{class:"u-demo-block__title"},{default:s((()=>[m("加载中")])),_:1}),o(v,{list:u.list3,loading:""},null,8,["list"])])),_:1}),o(k,{class:"u-demo-block"},{default:s((()=>[o(y,{class:"u-demo-block__title"},{default:s((()=>[m("嵌入视频")])),_:1}),o(v,{list:u.list4,keyName:"url",autoplay:!1},null,8,["list"])])),_:1}),o(k,{class:"u-demo-block"},{default:s((()=>[o(y,{class:"u-demo-block__title"},{default:s((()=>[m("自定义指示器")])),_:1}),o(v,{list:u.list5,onChange:t[0]||(t[0]=e=>u.current=e.current),autoplay:!1},{default:s((()=>[o(k,{slot:"indicator",class:"indicator"},{default:s((()=>[(r(!0),c(d,null,p(u.list5,((e,t)=>(r(),a(k,{class:l(["indicator__dot",[t===u.current&&"indicator__dot--active"]]),key:t},null,8,["class"])))),128))])),_:1})])),_:1},8,["list"]),o(b,{bgColor:"transparent",height:"15"}),o(v,{list:u.list6,onChange:t[1]||(t[1]=e=>u.currentNum=e.current),autoplay:!1,indicatorStyle:"right: 20px"},{default:s((()=>[o(k,{slot:"indicator",class:"indicator-num"},{default:s((()=>[o(y,{class:"indicator-num__text"},{default:s((()=>[m(_(u.currentNum+1)+"/"+_(u.list6.length),1)])),_:1})])),_:1})])),_:1},8,["list"])])),_:1}),o(k,{class:"u-demo-block"},{default:s((()=>[o(y,{class:"u-demo-block__title"},{default:s((()=>[m("卡片式")])),_:1}),o(v,{list:u.list3,previousMargin:"30",nextMargin:"30",circular:"",autoplay:!1,radius:"5",bgColor:"#ffffff"},null,8,["list"])])),_:1})])),_:1})}],["__scopeId","data-v-b00cbf02"]]);export{N as default};
