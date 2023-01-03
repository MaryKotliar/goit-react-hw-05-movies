"use strict";(self.webpackChunkreact_homework_template=self.webpackChunkreact_homework_template||[]).push([[192],{1687:function(n,t,e){e.d(t,{Bt:function(){return d},E3:function(){return f},LC:function(){return l},Mc:function(){return p},wr:function(){return c}});var r=e(5861),a=e(7757),i=e.n(a),u=e(2388),o="67983da9f1b0244a3f38bd567d5477a8";u.Z.defaults.baseURL="https://api.themoviedb.org/3/";var c=function(){var n=(0,r.Z)(i().mark((function n(){var t,e,r;return i().wrap((function(n){for(;;)switch(n.prev=n.next){case 0:return n.next=2,u.Z.get("trending/all/day?",{params:{api_key:"".concat(o),language:"en-US",include_adult:!1}});case 2:return t=n.sent,e=t.data.results,r=s(e),n.abrupt("return",r);case 6:case"end":return n.stop()}}),n)})));return function(){return n.apply(this,arguments)}}(),s=function(n){return n.map((function(n){return{id:n.id,original_title:n.original_title,poster_path:n.poster_path,name:n.name}}))},p=function(){var n=(0,r.Z)(i().mark((function n(t){var e,r;return i().wrap((function(n){for(;;)switch(n.prev=n.next){case 0:return n.next=2,u.Z.get("movie/".concat(t),{params:{api_key:"".concat(o),language:"en-US",include_adult:!1}});case 2:return e=n.sent,r=e.data,n.abrupt("return",r);case 5:case"end":return n.stop()}}),n)})));return function(t){return n.apply(this,arguments)}}(),l=function(){var n=(0,r.Z)(i().mark((function n(t){var e,r;return i().wrap((function(n){for(;;)switch(n.prev=n.next){case 0:return n.next=2,u.Z.get("movie/".concat(t,"/credits?"),{params:{api_key:"".concat(o),language:"en-US",include_adult:!1}});case 2:return e=n.sent,r=e.data,n.abrupt("return",r);case 5:case"end":return n.stop()}}),n)})));return function(t){return n.apply(this,arguments)}}(),d=function(){var n=(0,r.Z)(i().mark((function n(t){var e,r;return i().wrap((function(n){for(;;)switch(n.prev=n.next){case 0:return n.next=2,u.Z.get("movie/".concat(t,"/reviews?"),{params:{api_key:"".concat(o),language:"en-US",include_adult:!1}});case 2:return e=n.sent,r=e.data,n.abrupt("return",r);case 5:case"end":return n.stop()}}),n)})));return function(t){return n.apply(this,arguments)}}(),f=function(){var n=(0,r.Z)(i().mark((function n(t){var e,r;return i().wrap((function(n){for(;;)switch(n.prev=n.next){case 0:return n.next=2,u.Z.get("search/movie?api_key=".concat(o),{params:{include_adult:!1,language:"en-US",query:"".concat(t)}});case 2:return e=n.sent,r=e.data,n.abrupt("return",r.results);case 5:case"end":return n.stop()}}),n)})));return function(t){return n.apply(this,arguments)}}()},8152:function(n,t,e){e.d(t,{a:function(){return i}});var r=e(8402),a=e(184),i=function(){return(0,a.jsx)(r.NB,{visible:!0,height:"80",width:"80",ariaLabel:"blocks-loading",wrapperStyle:{},wrapperClass:"blocks-wrapper",colors:["#e15b64","#f47e60","#f8b26a","#abbd81","#849b87"]})}},7335:function(n,t,e){e.d(t,{e:function(){return m}});var r,a,i,u=e(168),o=e(6444),c=o.ZP.ul(r||(r=(0,u.Z)(["\n  display: grid;\n  grid-template-columns: repeat(auto-fit, 200px);\n  gap: 16px;\n"]))),s=o.ZP.li(a||(a=(0,u.Z)(["\n  border: 1px solid black;\n  border-radius: 4px;\n\n  > a {\n    text-decoration: none;\n  }\n"]))),p=o.ZP.p(i||(i=(0,u.Z)(["\n  padding: 4px;\n  margin-top: 8px;\n  margin-bottom: 0;\n  color: black;\n"]))),l=e(1087),d=e(7689),f=e(184);var m=function(n){var t=n.movies,e=(0,d.TH)();return(0,f.jsx)(f.Fragment,{children:(0,f.jsx)(c,{children:t.map((function(n){var t,r=n.id,a=n.original_title,i=n.poster_path,u=n.name;return(0,f.jsx)(s,{children:(0,f.jsxs)(l.rU,{to:"/movies/".concat(r),state:{from:e},children:[(0,f.jsx)("img",{src:(t=i,t?"https://image.tmdb.org/t/p/w300/".concat(t):"https://upload.wikimedia.org/wikipedia/commons/6/64/Poster_not_available.jpg"),alt:"poster"}),(0,f.jsx)(p,{children:null!==a&&void 0!==a?a:u})]})},r)}))})})}},6192:function(n,t,e){e.r(t),e.d(t,{default:function(){return S}});var r,a,i,u,o=e(5861),c=e(9439),s=e(7757),p=e.n(s),l=e(168),d=e(6444),f=e(9128),m=d.ZP.form(r||(r=(0,l.Z)(["\n  display: inline-flex;\n  align-items: center;\n  position: relative;\n  margin-bottom: 16px;\n  text-transform: uppercase;\n"]))),h=d.ZP.input(a||(a=(0,l.Z)(["\n  padding: 8px 32px 8px 8px;\n  border-radius: 4px;\n  font: inherit;\n"]))),x=(0,d.ZP)(f.G4C)(i||(i=(0,l.Z)(["\n  width: 22px;\n  height: 22px;\n  position: absolute;\n  right: 9px;\n  top: 10px;\n"]))),g=d.ZP.button(u||(u=(0,l.Z)(["\n  display: inline-block;\n  width: 39px;\n  height: 39px;\n  border: 0;\n  background-size: 40%;\n  background-repeat: no-repeat;\n  background-position: center;\n  border-radius: 4px;\n  opacity: 0.6;\n  transition: opacity 250ms cubic-bezier(0.4, 0, 0.2, 1);\n  cursor: pointer;\n  outline: none;\n  &:hover {\n    opacity: 1;\n  }\n"]))),v=e(2791),b=e(184),Z=function(n){var t=n.name,e=n.onSubmit,r=(0,v.useState)(""),a=(0,c.Z)(r,2),i=a[0],u=a[1];return(0,b.jsxs)(m,{onSubmit:function(n){n.preventDefault(),e(i),u("")},children:[(0,b.jsx)(h,{type:"text",name:t,onChange:function(n){u(n.currentTarget.value.toLowerCase())}}),(0,b.jsx)(g,{type:"submit",children:(0,b.jsx)(x,{})})]})},w=e(1087),k=e(1687),y=e(7335),_=e(8152),j=e(9014),S=function(){var n,t=(0,v.useState)([]),e=(0,c.Z)(t,2),r=e[0],a=e[1],i=(0,v.useState)(!1),u=(0,c.Z)(i,2),s=u[0],l=u[1],d=(0,v.useState)(""),f=(0,c.Z)(d,2),m=f[0],h=f[1],x=(0,w.lr)(),g=(0,c.Z)(x,2),S=g[0],P=g[1],C=null!==(n=S.get("query"))&&void 0!==n?n:"";(0,v.useEffect)((function(){function n(){return(n=(0,o.Z)(p().mark((function n(){var t;return p().wrap((function(n){for(;;)switch(n.prev=n.next){case 0:return n.prev=0,l(!0),h(""),n.next=5,(0,k.E3)(C);case 5:t=n.sent,a(t),t.length<1&&h("Sorry, we didn`t find movies according to your request."),n.next=13;break;case 10:n.prev=10,n.t0=n.catch(0),h("This didn`t work. Please try again later.");case 13:return n.prev=13,l(!1),n.finish(13);case 16:case"end":return n.stop()}}),n,null,[[0,10,13,16]])})))).apply(this,arguments)}""!==C&&function(){n.apply(this,arguments)}()}),[C]),(0,v.useEffect)((function(){m&&j.ZP.error(m)}),[m]);return(0,b.jsxs)("main",{children:[(0,b.jsx)(Z,{value:C,onSubmit:function(n){P(""!==n?{query:n}:{}),""===n&&h("Please input search query!")}}),r&&(0,b.jsx)(y.e,{movies:r}),s&&(0,b.jsx)(_.a,{}),(0,b.jsx)(j.x7,{position:"top-right"})]})}}}]);
//# sourceMappingURL=192.b3063fa2.chunk.js.map