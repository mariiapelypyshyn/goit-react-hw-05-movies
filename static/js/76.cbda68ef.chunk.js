"use strict";(self.webpackChunkgoit_react_hw_05_movies=self.webpackChunkgoit_react_hw_05_movies||[]).push([[76],{76:function(e,t,a){a.r(t),a.d(t,{default:function(){return f}});var r=a(861),n=a(439),c=a(757),s=a.n(c),i=a(340),o=a(791),l=a(689),u="Cast_ProfileImg__krdA6",p="Cast_CastList__2oQ+0",h=a(781),d=a(184);i.Z.defaults.baseURL="https://api.themoviedb.org/3/";var f=function(){var e=(0,l.UO)().movieId,t=(0,o.useState)(null),a=(0,n.Z)(t,2),c=a[0],f=a[1];(0,o.useEffect)((function(){var t=function(){var t=(0,r.Z)(s().mark((function t(){var a,r;return s().wrap((function(t){for(;;)switch(t.prev=t.next){case 0:return t.prev=0,t.next=3,i.Z.get("/movie/".concat(e,"/credits?api_key=").concat(h.$));case 3:a=t.sent,r=a.data,f(r.cast),console.log(r),t.next=12;break;case 9:t.prev=9,t.t0=t.catch(0),console.log(t.t0);case 12:case"end":return t.stop()}}),t,null,[[0,9]])})));return function(){return t.apply(this,arguments)}}();t()}),[e]);return(0,d.jsx)("div",{children:(0,d.jsx)("ul",{className:p,children:null!==c&&c.map((function(e){var t=e.id,a=e.profile_path,r=e.original_name,n=e.character;return(0,d.jsxs)("li",{children:[(0,d.jsx)("img",{className:u,src:"".concat(a?"https://image.tmdb.org/t/p/w500/"+a:"https://via.placeholder.com/182x273?text="+r),alt:r}),(0,d.jsx)("p",{children:r}),(0,d.jsxs)("p",{children:[(0,d.jsx)("span",{children:"Character:"})," ",n]})]},t)}))})})}}}]);
//# sourceMappingURL=76.cbda68ef.chunk.js.map