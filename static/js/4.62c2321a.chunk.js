(this["webpackJsonpsand-box"]=this["webpackJsonpsand-box"]||[]).push([[4],{259:function(e,t,s){e.exports={userPhoto:"Users_userPhoto__y2RB1"}},260:function(e,t,s){e.exports={selectedPage:"Paginator_selectedPage__3nz2U",paginator:"Paginator_paginator__gyOkT",pageNumber:"Paginator_pageNumber__2ZrSx"}},264:function(e,t,s){"use strict";s.r(t);var n=s(3),r=s(4),o=s(9),a=s(10),c=(s(63),s(0)),u=s.n(c),A=s(16),i=s(37),g=s(87),l=s(110),d=(s(23),s(77)),h=s(259),C=s.n(h),p=s(13),U=s(25),S=s(260),j=s.n(S),E=s(1),V=function(e){for(var t=e.onPageChanged,s=e.currentPage,n=e.totalUsersCount,r=e.pageSize,o=e.portionSize,a=void 0===o?10:o,u=Math.ceil(n/r),A=[],i=1;i<=u;i++)A.push(i);var g=Math.ceil(u/a),l=Object(c.useState)(1),d=Object(U.a)(l,2),h=d[0],C=d[1],p=(h-1)*a+1,S=h*a;return Object(E.jsxs)("div",{className:j.a.paginator,children:[h>1&&Object(E.jsx)("button",{onClick:function(){C(h-1)},children:"PREV"}),A.filter((function(e){return e>=p&&e<=S})).map((function(e){return Object(E.jsx)("span",{onClick:function(s){t(e)},className:s===e?j.a.pageNumber+" "+j.a.selectedPage:j.a.pageNumber,children:e})})),g>h&&Object(E.jsx)("button",{onClick:function(){C(h+1)},children:"NEXT"})]})},b=function(e){return Object(E.jsxs)("div",{children:[Object(E.jsx)(V,{onPageChanged:e.onPageChanged,currentPage:e.currentPage,totalUsersCount:e.totalUsersCount,pageSize:e.pageSize}),e.users.map((function(t){return Object(E.jsx)("div",{children:Object(E.jsxs)("span",{children:[Object(E.jsx)(p.b,{to:"/profile/"+t.id,children:Object(E.jsx)("div",{children:Object(E.jsx)("img",{src:null!=t.photos.small?t.photos.small:"data:image/jpeg;base64,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",className:C.a.userPhoto})})}),Object(E.jsx)("div",{children:t.name}),Object(E.jsx)("div",{children:t.followed?Object(E.jsx)("button",{disabled:e.followersInProgress.some((function(e){return e===t.id})),onClick:function(){e.unfollow(t.id)},children:"unfollow"}):Object(E.jsx)("button",{disabled:e.followersInProgress.some((function(e){return e===t.id})),onClick:function(){e.follow(t.id)},children:"follow"})})]})},t.id)}))]})},P=function(e){return e.usersPage.users},R=function(e){return e.usersPage.pageSize},O=function(e){return e.usersPage.totalUsersCount},x=function(e){return e.usersPage.currentPage},Q=function(e){return e.usersPage.isFetching},w=function(e){return e.usersPage.followersInProgress},f=function(e){Object(o.a)(s,e);var t=Object(a.a)(s);function s(){var e;Object(n.a)(this,s);for(var r=arguments.length,o=new Array(r),a=0;a<r;a++)o[a]=arguments[a];return(e=t.call.apply(t,[this].concat(o))).onPageChanged=function(t){var s=e.props.pageSize;e.props.setCurrentPage(t),e.props.requestUsers(t,s)},e}return Object(r.a)(s,[{key:"componentDidMount",value:function(){var e=this.props,t=e.currentPage,s=e.pageSize;this.props.requestUsers(t,s)}},{key:"render",value:function(){return Object(E.jsxs)(E.Fragment,{children:[this.props.isFetching?Object(E.jsx)(d.a,{}):null,Object(E.jsx)(b,{totalUsersCount:this.props.totalUsersCount,pageSize:this.props.pageSize,currentPage:this.props.currentPage,onPageChanged:this.onPageChanged,users:this.props.users,follow:this.props.follow,unfollow:this.props.unfollow,followersInProgress:this.props.followersInProgress})]})}}]),s}(u.a.Component),k=function(e){return{users:P(e),pageSize:R(e),totalUsersCount:O(e),currentPage:x(e),isFetching:Q(e),followersInProgress:w(e)}};t.default=Object(g.a)(Object(A.b)(k,{follow:l.a,unfollow:l.e,setCurrentPage:l.c,toggleFollowingProgress:l.d,requestUsers:l.b})(f));Object(i.c)(g.a,Object(A.b)(k,{follow:l.a,unfollow:l.e,setCurrentPage:l.c,toggleFollowingProgress:l.d,getUsers:P}))(f)}}]);
//# sourceMappingURL=4.62c2321a.chunk.js.map