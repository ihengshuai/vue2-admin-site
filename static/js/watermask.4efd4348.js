"use strict";(globalThis["webpackChunkvue2_admin"]=globalThis["webpackChunkvue2_admin"]||[]).push([[318],{24613:(e,t,n)=>{n.d(t,{Z:()=>c});var i=n(61369),r=n(10841),o=n(18402),s=n(99396),a=function(e,t,n,i){var r,o=arguments.length,s=o<3?t:null===i?i=Object.getOwnPropertyDescriptor(t,n):i;if("object"===typeof Reflect&&"function"===typeof Reflect.decorate)s=Reflect.decorate(e,t,n,i);else for(var a=e.length-1;a>=0;a--)(r=e[a])&&(s=(o<3?r(s):o>3?r(t,n,s):r(t,n))||s);return o>3&&s&&Object.defineProperty(t,n,s),s},l=function(e,t){if("object"===typeof Reflect&&"function"===typeof Reflect.metadata)return Reflect.metadata(e,t)};let d=class extends r["default"]{constructor(...e){super(...e),(0,i.Z)(this,"text",void 0),(0,i.Z)(this,"size",void 0),(0,i.Z)(this,"color",void 0),(0,i.Z)(this,"width",void 0),(0,i.Z)(this,"wrapperId",null),(0,i.Z)(this,"watermaskId",void 0),(0,i.Z)(this,"insertedStyle",void 0)}mounted(){this.renderWatermask(),this.$on("hook:beforeDestroy",(()=>{this.$el?.parentElement?.classList.remove(this.wrapperId),this.insertedStyle?.remove()}))}getInsertStyle(e){const t=document.createElement("style");t.innerHTML=`\n     .${this.wrapperId} {\n        position: relative;\n      }\n     .${this.wrapperId} > .${this.watermaskId} {\n        inset: 0;\n        position: absolute;\n        pointer-events: none;\n        z-index: 9999;\n        background: url(${e}) repeat;\n      }\n    `,this.insertedStyle=t,document.body.appendChild(t)}renderWatermask(){const e=this.$el.parentElement;if(!e)return;e.classList.remove(this.wrapperId),this.insertedStyle?.remove(),this.wrapperId="c"+(0,s.y_)()+"v",this.watermaskId="a"+(0,s.y_)()+"z",e.classList.add(this.wrapperId);const t=document.createElement("canvas"),n=window.devicePixelRatio||1,i=this.size*n+"px serif",r=t.getContext("2d"),o=this.text;r.font=i;const{width:a}=r.measureText(o),l=Math.max(this.width??e.offsetWidth/2,a);t.width=l,t.height=this.width??l/2,r.translate(t.width/2,t.height/2),r.rotate(Math.PI/180*-25),r.fillStyle=this.color,r.font=i,r.fillText(o,0,0);const d=t.toDataURL(),c=document.createElement("div");c.setAttribute("class",this.watermaskId),this.getInsertStyle(d),e.appendChild(c)}onTextChange(){this.renderWatermask()}onColorChange(){this.renderWatermask()}onSizeChange(){this.renderWatermask()}render(){return this.$slots.default}};a([(0,o.fI)({type:String,default:"",required:!0}),l("design:type",String)],d.prototype,"text",void 0),a([(0,o.fI)({type:Number,default:6}),l("design:type",Number)],d.prototype,"size",void 0),a([(0,o.fI)({type:String,default:"rgba(0, 0, 0, 0.4)"}),l("design:type",String)],d.prototype,"color",void 0),a([(0,o.fI)({type:Number}),l("design:type",Number)],d.prototype,"width",void 0),a([(0,o.RL)("text"),l("design:type",Function),l("design:paramtypes",[]),l("design:returntype",void 0)],d.prototype,"onTextChange",null),a([(0,o.RL)("color"),l("design:type",Function),l("design:paramtypes",[]),l("design:returntype",void 0)],d.prototype,"onColorChange",null),a([(0,o.RL)("size"),l("design:type",Function),l("design:paramtypes",[]),l("design:returntype",void 0)],d.prototype,"onSizeChange",null),d=a([o.wA],d);const c=d},47481:(e,t,n)=>{n.r(t),n.d(t,{default:()=>f});var i=function(){var e=this,t=e._self._c;e._self._setupProxy;return t("Watermask",{attrs:{text:e.text,color:e.color}},[t("CPanel",[t("h1",[e._v("水印组件")]),t("div",[t("a-button",{on:{click:e.changeText}},[e._v("修改水印内容")]),t("span",{staticClass:"ml-40"},[t("input",{directives:[{name:"model",rawName:"v-model",value:e.color,expression:"color"}],attrs:{type:"color"},domProps:{value:e.color},on:{input:function(t){t.target.composing||(e.color=t.target.value)}}}),e._v(" 修改水印颜色 ")])],1),t("div",{staticClass:"h-200"}),t("img",{directives:[{name:"lazy-img",rawName:"v-lazy-img",value:"https://ihengshuai-demo1.oss-cn-beijing.aliyuncs.com/commitizen-gif.gif",expression:"'https://ihengshuai-demo1.oss-cn-beijing.aliyuncs.com/commitizen-gif.gif'"}],staticStyle:{"max-width":"100%"}}),t("div",{staticClass:"h-200"})])],1)},r=[],o=n(61369),s=n(10841),a=n(18402),l=n(24613),d=function(e,t,n,i){var r,o=arguments.length,s=o<3?t:null===i?i=Object.getOwnPropertyDescriptor(t,n):i;if("object"===typeof Reflect&&"function"===typeof Reflect.decorate)s=Reflect.decorate(e,t,n,i);else for(var a=e.length-1;a>=0;a--)(r=e[a])&&(s=(o<3?r(s):o>3?r(t,n,s):r(t,n))||s);return o>3&&s&&Object.defineProperty(t,n,s),s};let c=class extends s["default"]{constructor(...e){super(...e),(0,o.Z)(this,"text","水印组件"),(0,o.Z)(this,"color","#f40")}changeText(){this.text="用户"+Math.floor(8773*Math.random())}};c=d([(0,a.wA)({components:{Watermask:l.Z}})],c);const p=c,h=p;var u=n(43736),m=(0,u.Z)(h,i,r,!1,null,null,null);const f=m.exports}}]);