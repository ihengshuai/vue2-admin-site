"use strict";(globalThis["webpackChunkvue2_admin"]=globalThis["webpackChunkvue2_admin"]||[]).push([[323],{34056:(e,t,a)=>{a.r(t),a.d(t,{default:()=>k});var r=function(){var e=this,t=e._self._c;e._self._setupProxy;return t("CPanel",[t("v-chart",{key:e.chartUpdateKey,staticClass:"piechart w300",attrs:{option:e.pieOption}})],1)},s=[],o=a(61369),n=a(10841),i=a(18402),l=a(21646),h=a(34053),u=a(59242),c=a(27668),d=a(59362),p=a(4346),v=a(42213),m=a(31971),w=a(62153),f=function(e,t,a,r){var s,o=arguments.length,n=o<3?t:null===r?r=Object.getOwnPropertyDescriptor(t,a):r;if("object"===typeof Reflect&&"function"===typeof Reflect.decorate)n=Reflect.decorate(e,t,a,r);else for(var i=e.length-1;i>=0;i--)(s=e[i])&&(n=(o<3?s(n):o>3?s(t,a,n):s(t,a))||n);return o>3&&n&&Object.defineProperty(t,a,n),n};(0,l.D)([h.N,u.N,c.N,d.N,p.N,v.N,m.N]);let y=class extends n["default"]{constructor(...e){super(...e),(0,o.Z)(this,"chartUpdateKey",+new Date),(0,o.Z)(this,"pieOption",{legend:{top:"bottom"},toolbox:{show:!0,feature:{mark:{show:!0},dataView:{show:!0,readOnly:!1},restore:{show:!0},saveAsImage:{show:!0}}},series:[{name:"Nightingale Chart",type:"pie",radius:[50,250],center:["50%","50%"],roseType:"area",itemStyle:{borderRadius:8},data:[{value:40,name:"rose 1"},{value:38,name:"rose 2"},{value:32,name:"rose 3"},{value:30,name:"rose 4"},{value:28,name:"rose 5"},{value:26,name:"rose 6"},{value:22,name:"rose 7"},{value:18,name:"rose 8"}]}]})}resizeChart(){this.chartUpdateKey=+new Date}mounted(){window.addEventListener("resize",this.resizeChart),this.$on("hook:destroyed",(()=>window.removeEventListener("resize",this.resizeChart)))}};y=f([(0,i.wA)({components:{VChart:w.ZP}})],y);const b=y,g=b;var C=a(43736),N=(0,C.Z)(g,r,s,!1,null,"2cb9bd98",null);const k=N.exports}}]);