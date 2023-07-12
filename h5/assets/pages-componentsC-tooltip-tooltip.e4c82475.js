import{l as t,m as o,h as n,d as r,o as i,c as l,w as u,a as s,u as a,n as c,f as p,t as d,p as f,b as h,F as y,r as _,g as b,i as m}from"./index-c9cf8d84.js";import{_ as g}from"./u-overlay.3dd008c0.js";import{r as v}from"./uni-app.es.6a8abedf.js";import{_ as w}from"./u-line.a45c8667.js";import{_ as x}from"./u-transition.377b9072.js";import{_ as S}from"./_plugin-vue_export-helper.1b428a4d.js";const k={props:{text:{type:[String,Number],default:t.tooltip.text},copyText:{type:[String,Number],default:t.tooltip.copyText},size:{type:[String,Number],default:t.tooltip.size},color:{type:String,default:t.tooltip.color},bgColor:{type:String,default:t.tooltip.bgColor},direction:{type:String,default:t.tooltip.direction},zIndex:{type:[String,Number],default:t.tooltip.zIndex},showCopy:{type:Boolean,default:t.tooltip.showCopy},buttons:{type:Array,default:t.tooltip.buttons},overlay:{type:Boolean,default:t.tooltip.overlay},showToast:{type:Boolean,default:t.tooltip.showToast}}};"undefined"!=typeof globalThis?globalThis:"undefined"!=typeof window?window:"undefined"!=typeof global?global:"undefined"!=typeof self&&self;function T(t){return t&&t.__esModule&&Object.prototype.hasOwnProperty.call(t,"default")?t.default:t}var C,E={};C=function(){return function(){var t={686:function(t,e,o){o.d(e,{default:function(){return S}});var n=o(279),r=o.n(n),i=o(370),l=o.n(i),u=o(817),s=o.n(u);function a(t){try{return document.execCommand(t)}catch(e){return!1}}var c=function(t){var e=s()(t);return a("cut"),e},p=function(t,e){var o=function(t){var e="rtl"===document.documentElement.getAttribute("dir"),o=document.createElement("textarea");o.style.fontSize="12pt",o.style.border="0",o.style.padding="0",o.style.margin="0",o.style.position="absolute",o.style[e?"right":"left"]="-9999px";var n=window.pageYOffset||document.documentElement.scrollTop;return o.style.top="".concat(n,"px"),o.setAttribute("readonly",""),o.value=t,o}(t);e.container.appendChild(o);var n=s()(o);return a("copy"),o.remove(),n},d=function(t){var e=arguments.length>1&&void 0!==arguments[1]?arguments[1]:{container:document.body},o="";return"string"==typeof t?o=p(t,e):t instanceof HTMLInputElement&&!["text","search","url","tel","password"].includes(null==t?void 0:t.type)?o=p(t.value,e):(o=s()(t),a("copy")),o};function f(t){return(f="function"==typeof Symbol&&"symbol"==typeof Symbol.iterator?function(t){return typeof t}:function(t){return t&&"function"==typeof Symbol&&t.constructor===Symbol&&t!==Symbol.prototype?"symbol":typeof t})(t)}var h=function(){var t=arguments.length>0&&void 0!==arguments[0]?arguments[0]:{},e=t.action,o=void 0===e?"copy":e,n=t.container,r=t.target,i=t.text;if("copy"!==o&&"cut"!==o)throw new Error('Invalid "action" value, use either "copy" or "cut"');if(void 0!==r){if(!r||"object"!==f(r)||1!==r.nodeType)throw new Error('Invalid "target" value, use a valid Element');if("copy"===o&&r.hasAttribute("disabled"))throw new Error('Invalid "target" attribute. Please use "readonly" instead of "disabled" attribute');if("cut"===o&&(r.hasAttribute("readonly")||r.hasAttribute("disabled")))throw new Error('Invalid "target" attribute. You can\'t cut text from elements with "readonly" or "disabled" attributes')}return i?d(i,{container:n}):r?"cut"===o?c(r):d(r,{container:n}):void 0};function y(t){return(y="function"==typeof Symbol&&"symbol"==typeof Symbol.iterator?function(t){return typeof t}:function(t){return t&&"function"==typeof Symbol&&t.constructor===Symbol&&t!==Symbol.prototype?"symbol":typeof t})(t)}function _(t,e){for(var o=0;o<e.length;o++){var n=e[o];n.enumerable=n.enumerable||!1,n.configurable=!0,"value"in n&&(n.writable=!0),Object.defineProperty(t,n.key,n)}}function b(t,e){return(b=Object.setPrototypeOf||function(t,e){return t.__proto__=e,t})(t,e)}function m(t){var e=function(){if("undefined"==typeof Reflect||!Reflect.construct)return!1;if(Reflect.construct.sham)return!1;if("function"==typeof Proxy)return!0;try{return Date.prototype.toString.call(Reflect.construct(Date,[],(function(){}))),!0}catch(t){return!1}}();return function(){var o,n=v(t);if(e){var r=v(this).constructor;o=Reflect.construct(n,arguments,r)}else o=n.apply(this,arguments);return g(this,o)}}function g(t,e){return!e||"object"!==y(e)&&"function"!=typeof e?function(t){if(void 0===t)throw new ReferenceError("this hasn't been initialised - super() hasn't been called");return t}(t):e}function v(t){return(v=Object.setPrototypeOf?Object.getPrototypeOf:function(t){return t.__proto__||Object.getPrototypeOf(t)})(t)}function w(t,e){var o="data-clipboard-".concat(t);if(e.hasAttribute(o))return e.getAttribute(o)}var x=function(t){!function(t,e){if("function"!=typeof e&&null!==e)throw new TypeError("Super expression must either be null or a function");t.prototype=Object.create(e&&e.prototype,{constructor:{value:t,writable:!0,configurable:!0}}),e&&b(t,e)}(i,t);var e,o,n,r=m(i);function i(t,e){var o;return function(t,e){if(!(t instanceof e))throw new TypeError("Cannot call a class as a function")}(this,i),(o=r.call(this)).resolveOptions(e),o.listenClick(t),o}return e=i,o=[{key:"resolveOptions",value:function(){var t=arguments.length>0&&void 0!==arguments[0]?arguments[0]:{};this.action="function"==typeof t.action?t.action:this.defaultAction,this.target="function"==typeof t.target?t.target:this.defaultTarget,this.text="function"==typeof t.text?t.text:this.defaultText,this.container="object"===y(t.container)?t.container:document.body}},{key:"listenClick",value:function(t){var e=this;this.listener=l()(t,"click",(function(t){return e.onClick(t)}))}},{key:"onClick",value:function(t){var e=t.delegateTarget||t.currentTarget,o=this.action(e)||"copy",n=h({action:o,container:this.container,target:this.target(e),text:this.text(e)});this.emit(n?"success":"error",{action:o,text:n,trigger:e,clearSelection:function(){e&&e.focus(),window.getSelection().removeAllRanges()}})}},{key:"defaultAction",value:function(t){return w("action",t)}},{key:"defaultTarget",value:function(t){var e=w("target",t);if(e)return document.querySelector(e)}},{key:"defaultText",value:function(t){return w("text",t)}},{key:"destroy",value:function(){this.listener.destroy()}}],n=[{key:"copy",value:function(t){var e=arguments.length>1&&void 0!==arguments[1]?arguments[1]:{container:document.body};return d(t,e)}},{key:"cut",value:function(t){return c(t)}},{key:"isSupported",value:function(){var t=arguments.length>0&&void 0!==arguments[0]?arguments[0]:["copy","cut"],e="string"==typeof t?[t]:t,o=!!document.queryCommandSupported;return e.forEach((function(t){o=o&&!!document.queryCommandSupported(t)})),o}}],o&&_(e.prototype,o),n&&_(e,n),i}(r()),S=x},828:function(t){if("undefined"!=typeof Element&&!Element.prototype.matches){var e=Element.prototype;e.matches=e.matchesSelector||e.mozMatchesSelector||e.msMatchesSelector||e.oMatchesSelector||e.webkitMatchesSelector}t.exports=function(t,e){for(;t&&9!==t.nodeType;){if("function"==typeof t.matches&&t.matches(e))return t;t=t.parentNode}}},438:function(t,e,o){var n=o(828);function r(t,e,o,n,r){var l=i.apply(this,arguments);return t.addEventListener(o,l,r),{destroy:function(){t.removeEventListener(o,l,r)}}}function i(t,e,o,r){return function(o){o.delegateTarget=n(o.target,e),o.delegateTarget&&r.call(t,o)}}t.exports=function(t,e,o,n,i){return"function"==typeof t.addEventListener?r.apply(null,arguments):"function"==typeof o?r.bind(null,document).apply(null,arguments):("string"==typeof t&&(t=document.querySelectorAll(t)),Array.prototype.map.call(t,(function(t){return r(t,e,o,n,i)})))}},879:function(t,e){e.node=function(t){return void 0!==t&&t instanceof HTMLElement&&1===t.nodeType},e.nodeList=function(t){var o=Object.prototype.toString.call(t);return void 0!==t&&("[object NodeList]"===o||"[object HTMLCollection]"===o)&&"length"in t&&(0===t.length||e.node(t[0]))},e.string=function(t){return"string"==typeof t||t instanceof String},e.fn=function(t){return"[object Function]"===Object.prototype.toString.call(t)}},370:function(t,e,o){var n=o(879),r=o(438);t.exports=function(t,e,o){if(!t&&!e&&!o)throw new Error("Missing required arguments");if(!n.string(e))throw new TypeError("Second argument must be a String");if(!n.fn(o))throw new TypeError("Third argument must be a Function");if(n.node(t))return function(t,e,o){return t.addEventListener(e,o),{destroy:function(){t.removeEventListener(e,o)}}}(t,e,o);if(n.nodeList(t))return function(t,e,o){return Array.prototype.forEach.call(t,(function(t){t.addEventListener(e,o)})),{destroy:function(){Array.prototype.forEach.call(t,(function(t){t.removeEventListener(e,o)}))}}}(t,e,o);if(n.string(t))return function(t,e,o){return r(document.body,t,e,o)}(t,e,o);throw new TypeError("First argument must be a String, HTMLElement, HTMLCollection, or NodeList")}},817:function(t){t.exports=function(t){var e;if("SELECT"===t.nodeName)t.focus(),e=t.value;else if("INPUT"===t.nodeName||"TEXTAREA"===t.nodeName){var o=t.hasAttribute("readonly");o||t.setAttribute("readonly",""),t.select(),t.setSelectionRange(0,t.value.length),o||t.removeAttribute("readonly"),e=t.value}else{t.hasAttribute("contenteditable")&&t.focus();var n=window.getSelection(),r=document.createRange();r.selectNodeContents(t),n.removeAllRanges(),n.addRange(r),e=n.toString()}return e}},279:function(t){function e(){}e.prototype={on:function(t,e,o){var n=this.e||(this.e={});return(n[t]||(n[t]=[])).push({fn:e,ctx:o}),this},once:function(t,e,o){var n=this;function r(){n.off(t,r),e.apply(o,arguments)}return r._=e,this.on(t,r,o)},emit:function(t){for(var e=[].slice.call(arguments,1),o=((this.e||(this.e={}))[t]||[]).slice(),n=0,r=o.length;n<r;n++)o[n].fn.apply(o[n].ctx,e);return this},off:function(t,e){var o=this.e||(this.e={}),n=o[t],r=[];if(n&&e)for(var i=0,l=n.length;i<l;i++)n[i].fn!==e&&n[i].fn._!==e&&r.push(n[i]);return r.length?o[t]=r:delete o[t],this}},t.exports=e,t.exports.TinyEmitter=e}},e={};function o(n){if(e[n])return e[n].exports;var r=e[n]={exports:{}};return t[n](r,r.exports,o),r.exports}return o.n=function(t){var e=t&&t.__esModule?function(){return t.default}:function(){return t};return o.d(e,{a:e}),e},o.d=function(t,e){for(var n in e)o.o(e,n)&&!o.o(t,n)&&Object.defineProperty(t,n,{enumerable:!0,get:e[n]})},o.o=function(t,e){return Object.prototype.hasOwnProperty.call(t,e)},o(686)}().default},{get exports(){return E},set exports(t){E=t}}.exports=C();const I=T(E);const j=S({name:"u-tooltip",mixins:[o,n,k],data:()=>({showTooltip:!0,textId:uni.$u.guid(),tooltipId:uni.$u.guid(),tooltipTop:-1e4,tooltipInfo:{width:0,left:0},textInfo:{width:0,left:0},indicatorStyle:{},screenGap:12,indicatorWidth:14}),watch:{propsChange(){this.getElRect()}},computed:{propsChange(){return[this.text,this.buttons]},tooltipStyle(){const t={transform:`translateY(${"top"===this.direction?"-100%":"100%"})`},e=uni.$u.sys(),o=uni.$u.getPx,n=uni.$u.addUnit;if(this.tooltipInfo.width/2>this.textInfo.left+this.textInfo.width/2-this.screenGap)this.indicatorStyle={},t.left=`-${n(this.textInfo.left-this.screenGap)}`,this.indicatorStyle.left=n(this.textInfo.width/2-o(t.left)-this.indicatorWidth/2);else if(this.tooltipInfo.width/2>e.windowWidth-this.textInfo.right+this.textInfo.width/2-this.screenGap)this.indicatorStyle={},t.right=`-${n(e.windowWidth-this.textInfo.right-this.screenGap)}`,this.indicatorStyle.right=n(this.textInfo.width/2-o(t.right)-this.indicatorWidth/2);else{const e=Math.abs(this.textInfo.width/2-this.tooltipInfo.width/2);t.left=this.textInfo.width>this.tooltipInfo.width?n(e):-n(e),this.indicatorStyle={}}return"top"===this.direction?(t.marginTop="-10px",this.indicatorStyle.bottom="-4px"):(t.marginBottom="-10px",this.indicatorStyle.top="-4px"),t}},mounted(){this.init()},methods:{init(){this.getElRect()},async longpressHandler(){this.tooltipTop=0,this.showTooltip=!0},overlayClickHandler(){this.showTooltip=!1},btnClickHandler(t){this.showTooltip=!1,this.$emit("click",this.showCopy?t+1:t)},queryRect(t){return new Promise((e=>{this.$uGetRect(`#${t}`).then((t=>{e(t)}))}))},getElRect(){this.showTooltip=!0,this.tooltipTop=-1e4,uni.$u.sleep(500).then((()=>{this.queryRect(this.tooltipId).then((t=>{this.tooltipInfo=t,this.showTooltip=!1})),this.queryRect(this.textId).then((t=>{this.textInfo=t}))}))},setClipboardData(){this.showTooltip=!1,this.$emit("click",0);let t=window.event||e||{},o=new I("",{text:()=>this.copyText||this.text});o.on("success",(t=>{this.showToast&&uni.$u.toast("复制成功"),o.off("success"),o.off("error"),o.destroy()})),o.on("error",(t=>{this.showToast&&uni.$u.toast("复制失败"),o.off("success"),o.off("error"),o.destroy()})),o.onClick(t)}}},[["render",function(t,e,o,n,S,k){const T=v(r("u-overlay"),g),C=b,E=m,I=v(r("u-line"),w),j=v(r("u-transition"),x);return i(),l(E,{class:"u-tooltip",style:c([t.$u.addStyle(t.customStyle)])},{default:u((()=>[s(T,{show:S.showTooltip&&-1e4!==S.tooltipTop&&t.overlay,customStyle:"backgroundColor: rgba(0, 0, 0, 0)",onClick:k.overlayClickHandler},null,8,["show","onClick"]),s(E,{class:"u-tooltip__wrapper"},{default:u((()=>[s(C,{class:"u-tooltip__wrapper__text",id:S.textId,ref:S.textId,userSelect:!1,selectable:!1,onLongpress:a(k.longpressHandler,["stop"]),style:c({color:t.color,backgroundColor:t.bgColor&&S.showTooltip&&-1e4!==S.tooltipTop?t.bgColor:"transparent"})},{default:u((()=>[p(d(t.text),1)])),_:1},8,["id","onLongpress","style"]),s(j,{mode:"fade",show:S.showTooltip,duration:"300",customStyle:{position:"absolute",top:t.$u.addUnit(S.tooltipTop),zIndex:t.zIndex,...k.tooltipStyle}},{default:u((()=>[s(E,{class:"u-tooltip__wrapper__popup",id:S.tooltipId,ref:S.tooltipId},{default:u((()=>[t.showCopy||t.buttons.length?(i(),l(E,{key:0,class:"u-tooltip__wrapper__popup__indicator","hover-class":"u-tooltip__wrapper__popup__indicator--hover",style:c([S.indicatorStyle,{width:t.$u.addUnit(S.indicatorWidth),height:t.$u.addUnit(S.indicatorWidth)}])},null,8,["style"])):f("",!0),s(E,{class:"u-tooltip__wrapper__popup__list"},{default:u((()=>[t.showCopy?(i(),l(E,{key:0,class:"u-tooltip__wrapper__popup__list__btn","hover-class":"u-tooltip__wrapper__popup__list__btn--hover",onClick:k.setClipboardData},{default:u((()=>[s(C,{class:"u-tooltip__wrapper__popup__list__btn__text"},{default:u((()=>[p("复制")])),_:1})])),_:1},8,["onClick"])):f("",!0),t.showCopy&&t.buttons.length>0?(i(),l(I,{key:1,direction:"column",color:"#8d8e90",length:"18"})):f("",!0),(i(!0),h(y,null,_(t.buttons,((e,o)=>(i(),h(y,{key:o},[s(E,{class:"u-tooltip__wrapper__popup__list__btn","hover-class":"u-tooltip__wrapper__popup__list__btn--hover"},{default:u((()=>[s(C,{class:"u-tooltip__wrapper__popup__list__btn__text",onClick:t=>k.btnClickHandler(o)},{default:u((()=>[p(d(e),1)])),_:2},1032,["onClick"])])),_:2},1024),o<t.buttons.length-1?(i(),l(I,{key:0,direction:"column",color:"#8d8e90",length:"18"})):f("",!0)],64)))),128))])),_:1})])),_:1},8,["id"])])),_:1},8,["show","customStyle"])])),_:1})])),_:1},8,["style"])}],["__scopeId","data-v-c0ff7a2e"]]);const A=S({data:()=>({text1:"长按文本，上方提示",text2:"长按文本，下方提示",text3:"显示多个扩展按钮",text4:"自动调整气泡位置",text5:"长按文本，显示背景色",buttons1:["扩展"],buttons2:["扩展","搜索","翻译"],buttons3:["扩展","搜索","翻译"]}),onLoad(){},methods:{click(t){console.log("index",t)}}},[["render",function(t,e,o,n,a,c){const d=b,f=v(r("u-tooltip"),j),h=m;return i(),l(h,{class:"u-page"},{default:u((()=>[s(h,{class:"u-demo-block"},{default:u((()=>[s(d,{class:"u-demo-block__title"},{default:u((()=>[p("基础使用")])),_:1}),s(h,{class:"u-demo-block__content"},{default:u((()=>[s(f,{text:a.text1,overlay:""},null,8,["text"])])),_:1})])),_:1}),s(h,{class:"u-demo-block"},{default:u((()=>[s(d,{class:"u-demo-block__title"},{default:u((()=>[p("下方显示")])),_:1}),s(h,{class:"u-demo-block__content",style:{"padding-bottom":"30px"}},{default:u((()=>[s(f,{text:a.text2,direction:"bottom"},null,8,["text"])])),_:1})])),_:1}),s(h,{class:"u-demo-block"},{default:u((()=>[s(d,{class:"u-demo-block__title"},{default:u((()=>[p("扩展按钮")])),_:1}),s(h,{class:"u-demo-block__content"},{default:u((()=>[s(f,{text:a.text3,buttons:a.buttons1,onClick:c.click},null,8,["text","buttons","onClick"])])),_:1})])),_:1}),s(h,{class:"u-demo-block"},{default:u((()=>[s(d,{class:"u-demo-block__title"},{default:u((()=>[p("自动调整位置")])),_:1}),s(h,{class:"u-demo-block__content"},{default:u((()=>[s(f,{text:a.text4,buttons:a.buttons2},null,8,["text","buttons"])])),_:1})])),_:1}),s(h,{class:"u-demo-block"},{default:u((()=>[s(d,{class:"u-demo-block__title"},{default:u((()=>[p("高亮选中文本背景色")])),_:1}),s(h,{class:"u-demo-block__content"},{default:u((()=>[s(f,{text:a.text5,buttons:a.buttons3,bgColor:"#e3e4e6"},null,8,["text","buttons"])])),_:1})])),_:1})])),_:1})}],["__scopeId","data-v-28cb5dd3"]]);export{A as default};
