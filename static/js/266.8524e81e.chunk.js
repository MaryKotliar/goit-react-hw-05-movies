"use strict";(self.webpackChunkreact_homework_template=self.webpackChunkreact_homework_template||[]).push([[266],{1687:function(n,t,e){e.d(t,{Bt:function(){return f},E3:function(){return d},LC:function(){return l},Mc:function(){return p},wr:function(){return o}});var r=e(5861),a=e(7757),u=e.n(a),i=e(2388),c="67983da9f1b0244a3f38bd567d5477a8";i.Z.defaults.baseURL="https://api.themoviedb.org/3/";var o=function(){var n=(0,r.Z)(u().mark((function n(){var t,e,r;return u().wrap((function(n){for(;;)switch(n.prev=n.next){case 0:return n.next=2,i.Z.get("trending/all/day?",{params:{api_key:"".concat(c),language:"en-US",include_adult:!1}});case 2:return t=n.sent,e=t.data.results,r=s(e),n.abrupt("return",r);case 6:case"end":return n.stop()}}),n)})));return function(){return n.apply(this,arguments)}}(),s=function(n){return n.map((function(n){return{id:n.id,original_title:n.original_title,poster_path:n.poster_path,name:n.name}}))},p=function(){var n=(0,r.Z)(u().mark((function n(t){var e,r;return u().wrap((function(n){for(;;)switch(n.prev=n.next){case 0:return n.next=2,i.Z.get("movie/".concat(t),{params:{api_key:"".concat(c),language:"en-US",include_adult:!1}});case 2:return e=n.sent,r=e.data,n.abrupt("return",r);case 5:case"end":return n.stop()}}),n)})));return function(t){return n.apply(this,arguments)}}(),l=function(){var n=(0,r.Z)(u().mark((function n(t){var e,r;return u().wrap((function(n){for(;;)switch(n.prev=n.next){case 0:return n.next=2,i.Z.get("movie/".concat(t,"/credits?"),{params:{api_key:"".concat(c),language:"en-US",include_adult:!1}});case 2:return e=n.sent,r=e.data,n.abrupt("return",r);case 5:case"end":return n.stop()}}),n)})));return function(t){return n.apply(this,arguments)}}(),f=function(){var n=(0,r.Z)(u().mark((function n(t){var e,r;return u().wrap((function(n){for(;;)switch(n.prev=n.next){case 0:return n.next=2,i.Z.get("movie/".concat(t,"/reviews?"),{params:{api_key:"".concat(c),language:"en-US",include_adult:!1}});case 2:return e=n.sent,r=e.data,n.abrupt("return",r);case 5:case"end":return n.stop()}}),n)})));return function(t){return n.apply(this,arguments)}}(),d=function(){var n=(0,r.Z)(u().mark((function n(t){var e,r;return u().wrap((function(n){for(;;)switch(n.prev=n.next){case 0:return n.next=2,i.Z.get("search/movie?api_key=".concat(c),{params:{include_adult:!1,language:"en-US",query:"".concat(t)}});case 2:return e=n.sent,r=e.data,n.abrupt("return",r.results);case 5:case"end":return n.stop()}}),n)})));return function(t){return n.apply(this,arguments)}}()},8152:function(n,t,e){e.d(t,{a:function(){return u}});var r=e(8402),a=e(184),u=function(){return(0,a.jsx)(r.NB,{visible:!0,height:"80",width:"80",ariaLabel:"blocks-loading",wrapperStyle:{},wrapperClass:"blocks-wrapper",colors:["#e15b64","#f47e60","#f8b26a","#abbd81","#849b87"]})}},7335:function(n,t,e){e.d(t,{e:function(){return m}});var r,a,u,i=e(168),c=e(6444),o=c.ZP.ul(r||(r=(0,i.Z)(["\n  display: grid;\n  grid-template-columns: repeat(auto-fit, 200px);\n  gap: 16px;\n"]))),s=c.ZP.li(a||(a=(0,i.Z)(["\n  border: 1px solid black;\n  border-radius: 4px;\n\n  > a {\n    text-decoration: none;\n  }\n"]))),p=c.ZP.p(u||(u=(0,i.Z)(["\n  padding: 4px;\n  margin-top: 8px;\n  margin-bottom: 0;\n  color: black;\n"]))),l=e(1087),f=e(7689),d=e(184);var m=function(n){var t=n.movies,e=(0,f.TH)();return(0,d.jsx)(d.Fragment,{children:(0,d.jsx)(o,{children:t.map((function(n){var t,r=n.id,a=n.original_title,u=n.poster_path,i=n.name;return(0,d.jsx)(s,{children:(0,d.jsxs)(l.rU,{to:"/movies/".concat(r),state:{from:e},children:[(0,d.jsx)("img",{src:(t=u,t?"https://image.tmdb.org/t/p/w300/".concat(t):"https://upload.wikimedia.org/wikipedia/commons/6/64/Poster_not_available.jpg"),alt:"poster"}),(0,d.jsx)(p,{children:null!==a&&void 0!==a?a:i})]})},r)}))})})}},1266:function(n,t,e){e.r(t);var r=e(3433),a=e(5861),u=e(9439),i=e(7757),c=e.n(i),o=e(1687),s=e(7335),p=e(2791),l=e(8152),f=e(9014),d=e(184);t.default=function(){var n=(0,p.useState)([]),t=(0,u.Z)(n,2),e=t[0],i=t[1],m=(0,p.useState)(""),v=(0,u.Z)(m,2),h=v[0],g=v[1],x=(0,p.useState)(!1),b=(0,u.Z)(x,2),w=b[0],k=b[1];return(0,p.useEffect)((function(){function n(){return(n=(0,a.Z)(c().mark((function n(){var t;return c().wrap((function(n){for(;;)switch(n.prev=n.next){case 0:return n.prev=0,k(!0),g(""),n.next=5,(0,o.wr)();case 5:t=n.sent,i((function(n){return[].concat((0,r.Z)(n),(0,r.Z)(t))})),n.next=12;break;case 9:n.prev=9,n.t0=n.catch(0),g("This didn`t work. Please try again later.");case 12:return n.prev=12,k(!1),n.finish(12);case 15:case"end":return n.stop()}}),n,null,[[0,9,12,15]])})))).apply(this,arguments)}!function(){n.apply(this,arguments)}()}),[]),(0,p.useEffect)((function(){h&&f.ZP.error(h)}),[h]),(0,d.jsxs)("main",{children:[(0,d.jsx)("h1",{children:"Trending Movies"}),w&&(0,d.jsx)(l.a,{}),e&&(0,d.jsx)(s.e,{movies:e}),(0,d.jsx)(f.x7,{position:"top-right"})]})}}}]);
//# sourceMappingURL=266.8524e81e.chunk.js.map