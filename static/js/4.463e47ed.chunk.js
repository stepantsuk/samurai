(this["webpackJsonpsand-box"]=this["webpackJsonpsand-box"]||[]).push([[4],{253:function(e,t,n){"use strict";t.a=n.p+"static/media/leo.a84b81ae.png"},260:function(e,t,n){e.exports={userPhoto:"Users_userPhoto__y2RB1"}},261:function(e,t,n){e.exports={selectedPage:"Paginator_selectedPage__3nz2U",paginator:"Paginator_paginator__gyOkT",pageNumber:"Paginator_pageNumber__2ZrSx"}},265:function(e,t,n){"use strict";n.r(t);var r=n(3),s=n(4),o=n(10),a=n(11),i=(n(63),n(0)),c=n.n(i),u=n(17),l=n(38),g=n(87),p=n(110),f=(n(15),n(77)),d=n(260),h=n.n(d),b=n(253),j=n(14),P=n(26),O=n(261),w=n.n(O),x=n(1),C=function(e){for(var t=e.onPageChanged,n=e.currentPage,r=e.totalUsersCount,s=e.pageSize,o=e.portionSize,a=void 0===o?10:o,c=Math.ceil(r/s),u=[],l=1;l<=c;l++)u.push(l);var g=Math.ceil(c/a),p=Object(i.useState)(1),f=Object(P.a)(p,2),d=f[0],h=f[1],b=(d-1)*a+1,j=d*a;return Object(x.jsxs)("div",{className:w.a.paginator,children:[d>1&&Object(x.jsx)("button",{onClick:function(){h(d-1)},children:"PREV"}),u.filter((function(e){return e>=b&&e<=j})).map((function(e){return Object(x.jsx)("span",{onClick:function(n){t(e)},className:n===e?w.a.pageNumber+" "+w.a.selectedPage:w.a.pageNumber,children:e})})),g>d&&Object(x.jsx)("button",{onClick:function(){h(d+1)},children:"NEXT"})]})},m=function(e){return Object(x.jsxs)("div",{children:[Object(x.jsx)(C,{onPageChanged:e.onPageChanged,currentPage:e.currentPage,totalUsersCount:e.totalUsersCount,pageSize:e.pageSize}),e.users.map((function(t){return Object(x.jsx)("div",{children:Object(x.jsxs)("span",{children:[Object(x.jsx)(j.b,{to:"/profile/"+t.id,children:Object(x.jsx)("div",{children:Object(x.jsx)("img",{src:null!=t.photos.small?t.photos.small:b.a,className:h.a.userPhoto})})}),Object(x.jsx)("div",{children:t.name}),Object(x.jsx)("div",{children:t.followed?Object(x.jsx)("button",{disabled:e.followersInProgress.some((function(e){return e===t.id})),onClick:function(){e.unfollow(t.id)},children:"unfollow"}):Object(x.jsx)("button",{disabled:e.followersInProgress.some((function(e){return e===t.id})),onClick:function(){e.follow(t.id)},children:"follow"})})]})},t.id)}))]})},v=function(e){return e.usersPage.users},U=function(e){return e.usersPage.pageSize},S=function(e){return e.usersPage.totalUsersCount},_=function(e){return e.usersPage.currentPage},z=function(e){return e.usersPage.isFetching},k=function(e){return e.usersPage.followersInProgress},N=function(e){Object(o.a)(n,e);var t=Object(a.a)(n);function n(){var e;Object(r.a)(this,n);for(var s=arguments.length,o=new Array(s),a=0;a<s;a++)o[a]=arguments[a];return(e=t.call.apply(t,[this].concat(o))).onPageChanged=function(t){var n=e.props.pageSize;e.props.setCurrentPage(t),e.props.requestUsers(t,n)},e}return Object(s.a)(n,[{key:"componentDidMount",value:function(){var e=this.props,t=e.currentPage,n=e.pageSize;this.props.requestUsers(t,n)}},{key:"render",value:function(){return Object(x.jsxs)(x.Fragment,{children:[this.props.isFetching?Object(x.jsx)(f.a,{}):null,Object(x.jsx)(m,{totalUsersCount:this.props.totalUsersCount,pageSize:this.props.pageSize,currentPage:this.props.currentPage,onPageChanged:this.onPageChanged,users:this.props.users,follow:this.props.follow,unfollow:this.props.unfollow,followersInProgress:this.props.followersInProgress})]})}}]),n}(c.a.Component),y=function(e){return{users:v(e),pageSize:U(e),totalUsersCount:S(e),currentPage:_(e),isFetching:z(e),followersInProgress:k(e)}};t.default=Object(g.a)(Object(u.b)(y,{follow:p.a,unfollow:p.e,setCurrentPage:p.c,toggleFollowingProgress:p.d,requestUsers:p.b})(N));Object(l.c)(g.a,Object(u.b)(y,{follow:p.a,unfollow:p.e,setCurrentPage:p.c,toggleFollowingProgress:p.d,getUsers:v}))(N)}}]);
//# sourceMappingURL=4.463e47ed.chunk.js.map