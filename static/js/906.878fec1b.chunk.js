"use strict";(self.webpackChunkgoit_react_hw_05_movies=self.webpackChunkgoit_react_hw_05_movies||[]).push([[906],{81:function(e,t,n){n.d(t,{Z:function(){return c}});n(791);var r=n(689),a=n(87),s="MovieList_MoviesListItem__MWCAu",u=n(184),c=function(e){var t=e.movies,n=(0,r.TH)();return console.log("location: ",n),(0,u.jsx)("ul",{children:null!==t&&t.map((function(e){var t=e.id,r=e.original_title;return(0,u.jsx)("li",{className:s,children:(0,u.jsx)(a.rU,{state:{from:n},to:"/movies/".concat(t),children:(0,u.jsx)("h3",{children:r})})},t)}))})}},906:function(e,t,n){n.r(t),n.d(t,{default:function(){return m}});var r=n(861),a=n(439),s=n(757),u=n.n(s),c=n(791),i=n(87),l=n(340),o=n(883),f=n(81),v="MoviesPage_SearchForm__jW9w8",h="MoviesPage_InputField__i1BSI",d=n(781),p=n(184);l.Z.defaults.baseURL="https://api.themoviedb.org/3/";var m=function(){var e=(0,i.lr)(),t=(0,a.Z)(e,2),n=t[0],s=t[1],m=(0,c.useState)(null),_=(0,a.Z)(m,2),g=_[0],x=_[1],j=(0,c.useState)(!1),y=(0,a.Z)(j,2),Z=y[0],b=y[1],S=(0,c.useState)(null),k=(0,a.Z)(S,2),w=k[0],q=k[1],M=n.get("query");console.log("queryValue",M);return(0,c.useEffect)((function(){if(M){var e=function(){var e=(0,r.Z)(u().mark((function e(){var t,n;return u().wrap((function(e){for(;;)switch(e.prev=e.next){case 0:return e.prev=0,b(!0),q(null),e.next=5,l.Z.get("search/movie?api_key=".concat(d.$,"&query=").concat(M,"&language=en-US&page=1&include_adult=false"));case 5:t=e.sent,n=t.data,x(n.results),e.next=13;break;case 10:e.prev=10,e.t0=e.catch(0),q(e.t0.message);case 13:return e.prev=13,b(!1),e.finish(13);case 16:case"end":return e.stop()}}),e,null,[[0,10,13,16]])})));return function(){return e.apply(this,arguments)}}();e()}}),[M]),(0,p.jsxs)("div",{children:[(0,p.jsxs)("form",{className:v,onSubmit:function(e){e.preventDefault();var t=e.currentTarget.elements.searchKey.value;console.log("value",t),s({query:t})},children:[(0,p.jsx)("input",{className:h,type:"text",name:"searchKey",required:!0}),(0,p.jsx)("button",{type:"submit",children:"Search"})]}),(0,p.jsxs)("ul",{children:[null!==w&&(0,p.jsx)("p",{children:w}),Z&&(0,p.jsx)(o.Z,{}),null!==g&&(0,p.jsx)(f.Z,{movies:g})]})]})}},781:function(e,t,n){n.d(t,{$:function(){return r}});var r="6321103f67240c89bac93df12144ce19"}}]);
//# sourceMappingURL=906.878fec1b.chunk.js.map