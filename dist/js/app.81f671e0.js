(function(t){function e(e){for(var n,s,c=e[0],d=e[1],l=e[2],u=0,p=[];u<c.length;u++)s=c[u],Object.prototype.hasOwnProperty.call(a,s)&&a[s]&&p.push(a[s][0]),a[s]=0;for(n in d)Object.prototype.hasOwnProperty.call(d,n)&&(t[n]=d[n]);o&&o(e);while(p.length)p.shift()();return i.push.apply(i,l||[]),r()}function r(){for(var t,e=0;e<i.length;e++){for(var r=i[e],n=!0,c=1;c<r.length;c++){var d=r[c];0!==a[d]&&(n=!1)}n&&(i.splice(e--,1),t=s(s.s=r[0]))}return t}var n={},a={app:0},i=[];function s(e){if(n[e])return n[e].exports;var r=n[e]={i:e,l:!1,exports:{}};return t[e].call(r.exports,r,r.exports,s),r.l=!0,r.exports}s.m=t,s.c=n,s.d=function(t,e,r){s.o(t,e)||Object.defineProperty(t,e,{enumerable:!0,get:r})},s.r=function(t){"undefined"!==typeof Symbol&&Symbol.toStringTag&&Object.defineProperty(t,Symbol.toStringTag,{value:"Module"}),Object.defineProperty(t,"__esModule",{value:!0})},s.t=function(t,e){if(1&e&&(t=s(t)),8&e)return t;if(4&e&&"object"===typeof t&&t&&t.__esModule)return t;var r=Object.create(null);if(s.r(r),Object.defineProperty(r,"default",{enumerable:!0,value:t}),2&e&&"string"!=typeof t)for(var n in t)s.d(r,n,function(e){return t[e]}.bind(null,n));return r},s.n=function(t){var e=t&&t.__esModule?function(){return t["default"]}:function(){return t};return s.d(e,"a",e),e},s.o=function(t,e){return Object.prototype.hasOwnProperty.call(t,e)},s.p="/";var c=window["webpackJsonp"]=window["webpackJsonp"]||[],d=c.push.bind(c);c.push=e,c=c.slice();for(var l=0;l<c.length;l++)e(c[l]);var o=d;i.push([0,"chunk-vendors"]),r()})({0:function(t,e,r){t.exports=r("56d7")},"034f":function(t,e,r){"use strict";var n=r("85ec"),a=r.n(n);a.a},"56d7":function(t,e,r){"use strict";r.r(e);r("e260"),r("e6cf"),r("cca6"),r("a79d");var n=r("2b0e"),a=function(){var t=this,e=t.$createElement,r=t._self._c||e;return r("div",{attrs:{id:"app"}},[r("CardList")],1)},i=[],s=function(){var t=this,e=t.$createElement,r=t._self._c||e;return r("div",{staticClass:"columns"},[r("div",{staticClass:"column is-3"},[r("h2",{staticClass:"title"},[t._v("Reddit posts")]),r("div",{directives:[{name:"overflow-scroll",rawName:"v-overflow-scroll",value:!0,expression:"true"}],attrs:{"scroll-to":"last-child"}},[r("ul",{staticClass:"item-list"},[r("ul",{staticClass:"list is-hoverable"},t._l(t.redditLst,(function(e){return r("li",{key:e.data.id},[r("a",{staticClass:"list-item",on:{click:function(r){return t.setReddit(e.data)}}},[r("card",{attrs:{reddit:e.data}})],1)])})),0)])])]),r("div",{staticClass:"column is-8"},[t.selectedReddit?r("CardDetail",{attrs:{reddit:t.selectedReddit}}):t._e()],1)])},c=[],d=(r("96cf"),r("89ba")),l=(r("d81d"),r("0d03"),r("bc3a")),o=r.n(l),u=r("b166"),p="https://www.reddit.com/",f=function(){var t=Object(d["a"])(regeneratorRuntime.mark((function t(){var e,r;return regeneratorRuntime.wrap((function(t){while(1)switch(t.prev=t.next){case 0:return t.next=2,o.a.get(p+"r/all/top.json?limit=25");case 2:return e=t.sent,r=e.data.data.children.map((function(t){var e=Object(u["a"])(t.data.created,"yyyy-MM-dd");return t.data.created=v(new Date,new Date(e)),t})),console.log(r),t.abrupt("return",r);case 6:case"end":return t.stop()}}),t)})));return function(){return t.apply(this,arguments)}}(),v=function(t,e){var r=(t.getTime()-e.getTime())/1e3;return r/=3600,Math.abs(Math.round(r))},m={getSubRedditsAsync:f},h=function(){var t=this,e=t.$createElement,r=t._self._c||e;return r("div",{staticClass:"card"},[r("div",{staticClass:"card-content"},[r("div",{staticClass:"content"},[r("p",{staticClass:"title is-4"},[t._v(t._s(this.reddit.author))]),t._v(" "+t._s(this.reddit.created_utc)+" ")]),r("div",{staticClass:"media"},[r("div",{staticClass:"media-left"},[r("figure",{staticClass:"image is-96x96"},[r("img",{attrs:{src:this.reddit.thumbnail,alt:"Placeholder image"}})])]),r("div",{staticClass:"media-content"},[r("p",{staticClass:"subtitle is-6"},[t._v(t._s(this.reddit.title))])])]),r("div",{staticClass:"content"},[r("a",{attrs:{href:"#"}},[t._v("#css")]),t._v(" "),r("p",[t._v(t._s(this.reddit.num_comments)+" comments")]),r("br"),r("time",{attrs:{datetime:new Date}},[t._v("11:09 PM - 1 Jan 2016")])])])])},b=[],_={name:"Card",props:{reddit:{type:Object,default:function(){}}}},g=_,C=r("2877"),w=Object(C["a"])(g,h,b,!1,null,"a52c5b18",null),y=w.exports,j=function(){var t=this,e=t.$createElement,r=t._self._c||e;return r("div",{staticClass:"card"},[r("div",{staticClass:"card-content"},[r("div",{staticClass:"content"},[r("div",{staticClass:"media-content"},[r("p",{staticClass:"title is-4"},[t._v(t._s(this.reddit.author))]),r("p",{staticClass:"subtitle is-6"},[t._v("@johnsmith")])])]),r("div",{staticClass:"card-image"},[r("figure",{staticClass:"image  is-128x128"},[r("img",{attrs:{src:this.reddit.thumbnail,alt:"Placeholder image"}})])]),r("div",{staticClass:"content"},[t._v(" "+t._s(this.reddit.title)+". "),r("br"),r("time",{attrs:{datetime:"2016-1-1"}},[t._v("11:09 PM - 1 Jan 2016")])])])])},O=[],x={name:"CardDetail",props:{reddit:{type:Object,default:function(){}}}},R=x,P=Object(C["a"])(R,j,O,!1,null,null,null),M=P.exports,L={name:"CardList",components:{CardDetail:M,Card:y},created:function(){var t=Object(d["a"])(regeneratorRuntime.mark((function t(){return regeneratorRuntime.wrap((function(t){while(1)switch(t.prev=t.next){case 0:return t.next=2,this.getRedditList();case 2:case"end":return t.stop()}}),t,this)})));function e(){return t.apply(this,arguments)}return e}(),methods:{getRedditList:function(){var t=Object(d["a"])(regeneratorRuntime.mark((function t(){return regeneratorRuntime.wrap((function(t){while(1)switch(t.prev=t.next){case 0:return this.redditLst=[],t.next=3,m.getSubRedditsAsync();case 3:this.redditLst=t.sent;case 4:case"end":return t.stop()}}),t,this)})));function e(){return t.apply(this,arguments)}return e}(),setReddit:function(t){this.selectedReddit=t}},data:function(){return{redditLst:[],selectedReddit:void 0}}},k=L,S=Object(C["a"])(k,s,c,!1,null,null,null),D=S.exports,T={name:"app",components:{CardList:D}},$=T,E=(r("034f"),Object(C["a"])($,a,i,!1,null,null,null)),J=E.exports,A=(r("92c6"),r("28b7")),N=r.n(A);n["a"].use(N.a),n["a"].config.productionTip=!1,new n["a"]({render:function(t){return t(J)}}).$mount("#app")},"85ec":function(t,e,r){}});
//# sourceMappingURL=app.81f671e0.js.map