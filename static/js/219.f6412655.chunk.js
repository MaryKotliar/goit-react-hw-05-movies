"use strict";(self.webpackChunkreact_homework_template=self.webpackChunkreact_homework_template||[]).push([[219],{1687:function(t,n,e){e.d(n,{Bt:function(){return f},E3:function(){return d},LC:function(){return l},Mc:function(){return p},wr:function(){return s}});var r=e(5861),a=e(7757),u=e.n(a),c=e(2388),i="67983da9f1b0244a3f38bd567d5477a8";c.Z.defaults.baseURL="https://api.themoviedb.org/3/";var s=function(){var t=(0,r.Z)(u().mark((function t(){var n,e,r;return u().wrap((function(t){for(;;)switch(t.prev=t.next){case 0:return t.next=2,c.Z.get("trending/all/day?",{params:{api_key:"".concat(i),language:"en-US",include_adult:!1}});case 2:return n=t.sent,e=n.data.results,r=o(e),t.abrupt("return",r);case 6:case"end":return t.stop()}}),t)})));return function(){return t.apply(this,arguments)}}(),o=function(t){return t.map((function(t){return{id:t.id,original_title:t.original_title,poster_path:t.poster_path,name:t.name}}))},p=function(){var t=(0,r.Z)(u().mark((function t(n){var e,r;return u().wrap((function(t){for(;;)switch(t.prev=t.next){case 0:return t.next=2,c.Z.get("movie/".concat(n),{params:{api_key:"".concat(i),language:"en-US",include_adult:!1}});case 2:return e=t.sent,r=e.data,t.abrupt("return",r);case 5:case"end":return t.stop()}}),t)})));return function(n){return t.apply(this,arguments)}}(),l=function(){var t=(0,r.Z)(u().mark((function t(n){var e,r;return u().wrap((function(t){for(;;)switch(t.prev=t.next){case 0:return t.next=2,c.Z.get("movie/".concat(n,"/credits?"),{params:{api_key:"".concat(i),language:"en-US",include_adult:!1}});case 2:return e=t.sent,r=e.data,t.abrupt("return",r);case 5:case"end":return t.stop()}}),t)})));return function(n){return t.apply(this,arguments)}}(),f=function(){var t=(0,r.Z)(u().mark((function t(n){var e,r;return u().wrap((function(t){for(;;)switch(t.prev=t.next){case 0:return t.next=2,c.Z.get("movie/".concat(n,"/reviews?"),{params:{api_key:"".concat(i),language:"en-US",include_adult:!1}});case 2:return e=t.sent,r=e.data,t.abrupt("return",r);case 5:case"end":return t.stop()}}),t)})));return function(n){return t.apply(this,arguments)}}(),d=function(){var t=(0,r.Z)(u().mark((function t(n){var e,r;return u().wrap((function(t){for(;;)switch(t.prev=t.next){case 0:return t.next=2,c.Z.get("search/movie?api_key=".concat(i),{params:{include_adult:!1,language:"en-US",query:"".concat(n)}});case 2:return e=t.sent,r=e.data,t.abrupt("return",r.results);case 5:case"end":return t.stop()}}),t)})));return function(n){return t.apply(this,arguments)}}()},4219:function(t,n,e){e.r(n),e.d(n,{default:function(){return x}});var r,a,u=e(5861),c=e(9439),i=e(7757),s=e.n(i),o=e(2791),p=e(1687),l=e(7689),f=e(168),d=e(6444),h=d.ZP.div(r||(r=(0,f.Z)(["\n  width: 200px;\n  height: auto;\n"]))),v=d.ZP.ul(a||(a=(0,f.Z)(["\n  margin-top: 10px;\n"]))),m=e(8152),g=e(9014),w=e(184),x=function(){var t=(0,o.useState)([]),n=(0,c.Z)(t,2),e=n[0],r=n[1],a=(0,o.useState)(!1),i=(0,c.Z)(a,2),f=i[0],d=i[1],x=(0,o.useState)(""),b=(0,c.Z)(x,2),k=b[0],_=b[1],Z=(0,l.UO)().id;return(0,o.useEffect)((function(){function t(){return(t=(0,u.Z)(s().mark((function t(){var n,e;return s().wrap((function(t){for(;;)switch(t.prev=t.next){case 0:return t.prev=0,d(!0),_(""),t.next=5,(0,p.LC)(Z);case 5:n=t.sent,e=n.cast,r(e),t.next=13;break;case 10:t.prev=10,t.t0=t.catch(0),_("This didn`t work. Please try again later.");case 13:return t.prev=13,d(!1),t.finish(13);case 16:case"end":return t.stop()}}),t,null,[[0,10,13,16]])})))).apply(this,arguments)}!function(){t.apply(this,arguments)}()}),[Z]),(0,o.useEffect)((function(){k&&g.ZP.error(k)}),[k]),(0,w.jsxs)(w.Fragment,{children:[f&&(0,w.jsx)(m.a,{}),(0,w.jsx)(v,{children:e.map((function(t){var n,e=t.original_name,r=t.id,a=t.profile_path,u=t.character;return(0,w.jsxs)("li",{children:[(0,w.jsx)(h,{children:(0,w.jsx)("img",{src:(n=a,null===n?"https://upload.wikimedia.org/wikipedia/commons/6/64/Poster_not_available.jpg":"https://image.tmdb.org/t/p/w300/".concat(n)),alt:"poster"})}),(0,w.jsx)("p",{children:e}),(0,w.jsxs)("p",{children:["Character:",u]})]},r)}))}),(0,w.jsx)(g.x7,{position:"top-right"})]})}},8152:function(t,n,e){e.d(n,{a:function(){return u}});var r=e(8402),a=e(184),u=function(){return(0,a.jsx)(r.NB,{visible:!0,height:"80",width:"80",ariaLabel:"blocks-loading",wrapperStyle:{},wrapperClass:"blocks-wrapper",colors:["#e15b64","#f47e60","#f8b26a","#abbd81","#849b87"]})}}}]);
//# sourceMappingURL=219.f6412655.chunk.js.map