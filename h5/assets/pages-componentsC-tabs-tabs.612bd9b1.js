import{o as l,c as e,w as t,i as a,a as s,f as o,g as i,d as n}from"./index-c9cf8d84.js";import{_ as m}from"./u-tabs.e589d1e9.js";import{r as c}from"./uni-app.es.6a8abedf.js";import{_ as d}from"./u-sticky.edd93884.js";import{_ as u}from"./u-gap.6fc5dfe1.js";import{_}from"./u-icon.fe05ba1a.js";import{_ as f}from"./_plugin-vue_export-helper.1b428a4d.js";import"./u-badge.fcbda42d.js";const A=f({mixins:[uni.$u.mixin],data:()=>({lineBg:"data:image/png;base64,iVBORw0KGgoAAAANSUhEUgAAACgAAAAOCAYAAABdC15GAAAACXBIWXMAABYlAAAWJQFJUiTwAAAAAXNSR0IArs4c6QAAAARnQU1BAACxjwv8YQUAAAFxSURBVHgBzZNRTsJAEIb/WTW+lpiY+FZPIDew3ABP4GJ8hxsI9zBpOYHeQDwBPQI+mRiRvpLojtPdYhCorQqF/6GdbGd2vvwzBXZcNAt4oj1ANeUoAT5iqkUjbEFLHNmhD1YPEvpZ3ghkGlVDCkc94/BmHMq998I5ONiY1ZBfpKAyuOtgAc5yOEDmYEWNh32BHF91sGHZHmwW4azciN9aQwnz3SJEgOmte+R2tdLprTYoa50mvuomlLpD4Y3oQZnov6D2RzCqI93bWOHaEmAGqQUyRBlZR1WfarcD/EJ2z8DtzDGvsMCwpm8XOCfDUsVOCYhiqRxI/CTQo4UOvjzO7Pow18vfywneuUHHUUxLn55lLw5JFpZ8bEUcY8oXdOLWiHLTxvoGpLqoUmy6dBT15o/ox3znpoycAmxUsiJTbs1cmxeVKp+0zmFIS7bGWiVghC7Vwse8jFKAX9eljh4ggKLLv7uaQvG9/F59Oo2SouxPu7OTCxN/s8wAAAAASUVORK5CYII=",list1:[{name:"关注"},{name:"推荐"},{name:"电影"},{name:"科技"},{name:"音乐"},{name:"美食"},{name:"文化"},{name:"财经"},{name:"手工"}],list2:[{name:"关注"},{name:"推荐",badge:{isDot:!0}},{name:"电影",badge:{value:5}},{name:"科技"},{name:"音乐"},{name:"美食"},{name:"文化"},{name:"财经"},{name:"手工"}],list3:[{name:"关注"},{name:"推荐"},{name:"电影",disabled:!0},{name:"科技"},{name:"音乐"},{name:"美食"},{name:"文化"},{name:"财经"},{name:"手工"}],list4:[{name:"关注"},{name:"推荐",badge:{isDot:!0}},{name:"电影"},{name:"科技"},{name:"音乐"},{name:"美食"},{name:"文化"},{name:"财经"},{name:"手工"}],list6:[{name:"关注"},{name:"推荐"},{name:"电影"},{name:"科技"}]}),onLoad(){},methods:{click(l){console.log("item",l)}}},[["render",function(f,A,r,b,p,g){const k=i,h=c(n("u-tabs"),m),v=a,x=c(n("u-sticky"),d),C=c(n("u-gap"),u),y=c(n("u-icon"),_);return l(),e(v,{class:"u-page"},{default:t((()=>[s(v,{class:"u-demo-block"},{default:t((()=>[s(k,{class:"u-demo-block__title"},{default:t((()=>[o("基础演示")])),_:1}),s(v,{class:"u-demo-block__content"},{default:t((()=>[s(h,{list:p.list1,onClick:g.click,current:3},null,8,["list","onClick"])])),_:1})])),_:1}),s(v,{class:"u-demo-block",style:{"margin-bottom":"0"}},{default:t((()=>[s(k,{class:"u-demo-block__title"},{default:t((()=>[o("粘性布局")])),_:1})])),_:1}),s(x,{bgColor:"#fff"},{default:t((()=>[s(h,{list:p.list1},null,8,["list"])])),_:1}),s(C,{height:"23",bgColor:"#fff"}),s(v,{class:"u-demo-block"},{default:t((()=>[s(k,{class:"u-demo-block__title"},{default:t((()=>[o("显示徽标")])),_:1}),s(v,{class:"u-demo-block__content"},{default:t((()=>[s(h,{list:p.list2},null,8,["list"])])),_:1})])),_:1}),s(v,{class:"u-demo-block"},{default:t((()=>[s(k,{class:"u-demo-block__title"},{default:t((()=>[o("禁止滚动")])),_:1}),s(v,{class:"u-demo-block__content"},{default:t((()=>[s(h,{list:p.list6,scrollable:!1},null,8,["list"])])),_:1})])),_:1}),s(v,{class:"u-demo-block"},{default:t((()=>[s(k,{class:"u-demo-block__title"},{default:t((()=>[o("禁用菜单")])),_:1}),s(v,{class:"u-demo-block__content"},{default:t((()=>[s(h,{list:p.list3},null,8,["list"])])),_:1})])),_:1}),s(v,{class:"u-demo-block"},{default:t((()=>[s(k,{class:"u-demo-block__title"},{default:t((()=>[o("自定义样式")])),_:1}),s(v,{class:"u-demo-block__content"},{default:t((()=>[s(h,{list:p.list4,lineWidth:"30",lineColor:"#f56c6c",activeStyle:{color:"#303133",fontWeight:"bold",transform:"scale(1.05)"},inactiveStyle:{color:"#606266",transform:"scale(1)"},itemStyle:"padding-left: 15px; padding-right: 15px; height: 34px;"},null,8,["list","activeStyle","inactiveStyle"])])),_:1})])),_:1}),s(v,{class:"u-demo-block"},{default:t((()=>[s(k,{class:"u-demo-block__title"},{default:t((()=>[o("滑块设置背景图")])),_:1}),s(v,{class:"u-demo-block__content"},{default:t((()=>[s(h,{list:p.list4,lineWidth:"20",lineHeight:"7",lineColor:`url(${p.lineBg}) 100% 100%`,activeStyle:{color:"#303133",fontWeight:"bold",transform:"scale(1.05)"},inactiveStyle:{color:"#606266",transform:"scale(1)"},itemStyle:"padding-left: 15px; padding-right: 15px; height: 34px;"},null,8,["list","lineColor","activeStyle","inactiveStyle"])])),_:1})])),_:1}),s(v,{class:"u-demo-block"},{default:t((()=>[s(k,{class:"u-demo-block__title"},{default:t((()=>[o("右侧自定义插槽")])),_:1}),s(v,{class:"u-demo-block__content"},{default:t((()=>[s(h,{list:p.list1},{default:t((()=>[s(v,{slot:"right",style:{"padding-left":"4px"},onClick:A[0]||(A[0]=l=>f.$u.toast("插槽被点击"))},{default:t((()=>[s(y,{name:"list",size:"21",bold:""})])),_:1})])),_:1},8,["list"])])),_:1})])),_:1})])),_:1})}],["__scopeId","data-v-a1d446dc"]]);export{A as default};
