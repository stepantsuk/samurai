(this["webpackJsonpsand-box"]=this["webpackJsonpsand-box"]||[]).push([[3],{253:function(t,e,s){"use strict";e.a=s.p+"static/media/leo.a84b81ae.png"},254:function(t,e,s){t.exports={container:"PostNew_container__1Kmr1",text:"PostNew_text__qaf6y",btn:"PostNew_btn__1YRFi"}},255:function(t,e,s){t.exports={contentImg:"ProfilePict_contentImg__37TXl"}},256:function(t,e,s){t.exports={user:"ProfileInfo_user__1HTuA",mainPhoto:"ProfileInfo_mainPhoto__38VZT"}},257:function(t,e,s){t.exports={container:"Post_container__Kjem2",title:"Post_title__ceOvL",news:"Post_news__1c42Z"}},258:function(t,e,s){t.exports={postContainer:"Wall_postContainer__BvBdJ",postAvatar:"Wall_postAvatar__3Osdm",postAvatarImg:"Wall_postAvatarImg__2qzJK",postText:"Wall_postText__1DJ70",likesCount:"Wall_likesCount__QamXD"}},259:function(t,e,s){t.exports={wrapper:"Profile_wrapper__3ybw3"}},264:function(t,e,s){"use strict";s.r(e);var o=s(2),n=s(3),i=s(4),a=s(10),c=s(11),r=s(0),l=s.n(r),u=(s(255),s(1)),b=s(26),j=s(77),p=s(253),d=s(256),f=s.n(d),A=function(t){var e=Object(r.useState)(!1),s=Object(b.a)(e,2),o=s[0],n=s[1],i=Object(r.useState)(t.status),a=Object(b.a)(i,2),c=a[0],l=a[1];Object(r.useEffect)((function(){l(t.status)}),[t.status]);return Object(u.jsx)("div",{children:o?Object(u.jsx)("div",{children:Object(u.jsx)("input",{onChange:function(t){l(t.currentTarget.value)},autoFocus:!0,onBlur:function(){n(!1),t.updateUserProfileStatus(c)},value:c})}):Object(u.jsx)("div",{children:Object(u.jsx)("span",{onDoubleClick:function(){n(!0)},children:t.status||"this User is without status"})})})},m=function(t){return Object(u.jsxs)("div",{children:[t.isOwner&&Object(u.jsx)("div",{children:Object(u.jsx)("button",{onClick:t.setEditMode,children:"edit"})}),Object(u.jsxs)("div",{children:["my name is ",t.profile.fullName]}),Object(u.jsx)("div",{children:t.profile.lookingForAJob?Object(u.jsx)("div",{children:Object(u.jsx)("div",{children:"i am looking for a job at the moment"})}):Object(u.jsx)("div",{children:"i am not looking for a job at the moment"})}),Object(u.jsxs)("div",{children:["my skills is: ",t.profile.lookingForAJobDescription]}),Object(u.jsx)(h,{contacts:t.profile.contacts})]})},h=function(t){var e=t.contacts;return Object(u.jsxs)("div",{children:[Object(u.jsx)("b",{children:"my socials are :"}),Object.keys(e).map((function(t){return Object(u.jsx)(O,{contactKey:t,contactValue:e[t]})}))]})},O=function(t){var e=t.contactKey,s=t.contactValue;return Object(u.jsxs)("div",{children:[Object(u.jsxs)("b",{children:[e,":"]}),s]})},x=s(22),g=s(36),v=function(t){var e=t.profile,s=t.saveProfile,o=t.setEditMode,n={fullName:e.fullName,aboutMe:e.aboutMe,lookingForAJob:e.lookingForAJob,lookingForAJobDescription:e.lookingForAJobDescription,contacts:{github:e.contacts.github,facebook:e.contacts.facebook}};return Object(u.jsx)(x.d,{initialValues:n,onSubmit:function(t,e){console.log("onSubmitProps",e),console.log("values",t),s(t,e.setStatus,e.setSubmitting).then((function(){o(!1)}))},children:function(t){return console.log("formik",t),Object(u.jsx)("div",{children:Object(u.jsxs)(x.c,{children:[Object(u.jsxs)("div",{children:[Object(u.jsx)(g.a,{control:"input",type:"text",label:"Full name is :",name:"fullName"}),Object(u.jsx)(g.a,{control:"checkbox",type:"checkbox",label:"looking for a job",name:"lookingForAJob"}),Object(u.jsx)(g.a,{control:"textarea",label:"about me:",name:"aboutMe"}),Object(u.jsx)(g.a,{control:"textarea",label:"my professional skills:",name:"lookingForAJobDescription"}),Object(u.jsx)(g.a,{control:"input",type:"text",label:"git hub :",name:"contacts.github"}),Object(u.jsx)(g.a,{control:"input",type:"text",label:"facebook :",name:"contacts.facebook"})]}),Object(u.jsx)("button",{type:"submit",disabled:t.isSubmitting,children:"Save"}),t.status&&Object(u.jsx)("div",{children:t.status})]})})}})},P=function(t){var e=Object(r.useState)(!1),s=Object(b.a)(e,2),o=s[0],n=s[1];if(!t.profile)return Object(u.jsx)(j.a,{});return Object(u.jsxs)("div",{className:f.a.user,children:[Object(u.jsx)("img",{src:t.profile.photos.large||p.a,className:f.a.mainPhoto}),Object(u.jsx)("div",{children:t.isOwner&&Object(u.jsx)("input",{type:"file",onChange:function(e){e.target.files.length&&t.savePhoto(e.target.files[0])}})}),Object(u.jsx)(A,{status:t.status,updateUserProfileStatus:t.updateUserProfileStatus}),o?Object(u.jsx)(v,{profile:t.profile,saveProfile:t.saveProfile,setEditMode:n}):Object(u.jsx)(m,{profile:t.profile,isOwner:t.isOwner,setEditMode:n})]})},k=s(257),D=s.n(k),w=s(254),y=s.n(w),N=s(76),C=function(t){return Object(u.jsx)(x.d,{initialValues:{post:""},onSubmit:function(e,s){console.log(e),t.addBtn(e.post),s.resetForm()},className:y.a.container,children:Object(u.jsxs)(x.c,{children:[Object(u.jsx)(g.a,{control:"textarea",name:"post",label:"Post:"}),Object(u.jsx)("button",{type:"submit",className:y.a.btn,children:"Send"})]})})},S=s(258),I=s.n(S),V=function(t){return Object(u.jsxs)("div",{className:I.a.postContainer,children:[Object(u.jsx)("div",{className:I.a.postAvatar,children:Object(u.jsx)("img",{src:"data:image/png;base64,iVBORw0KGgoAAAANSUhEUgAAAMAAAADABAMAAACg8nE0AAAAFVBMVEUFBQX/kV6AgIDIyMjVSwD///7/NxojSQbmAAAFNElEQVR4nO2bTW7jPAyGFTvtOh/QAxguug9qZP8N4AMUE3g/q97/CCOSr0hKdjLJdICBlCGycByFTyD+iKKcEG6Q8XValmWapnG4Zfj9UjugG6fTQoD3Ud6SvEbc9A8gIgZYzhMBOqiO18AcHx6gBmAfjTr1LRjxzpcY1QNolk8wAAHEHktCjrDK4wKiAabSRxWAmyF8wQzVA2CAfLoLAK0Qv22GRgFyB4C0iD4oQH1U6wleLEmrUl+/4qnVA/x0I/vzegDGhIVTS42HA3Q21+aRY1l4yar5mABKameX18QMk4Vu6NNbpd4VzLUDpNjKASXpiJG653k0wPi2xNc1OTvMAwJCHq5bkmFOZJh7tDcBuCobvDOq/D/Ta6gEMHEiuyI2tIcZFm03tAfY/UdyyG92YzHR12gD/6aLZqgcINpZSnC3qh42pcsMszJD04ALon2W0l87s0eDgJd5/v+Cvv2sF3EgDevJZZHj3leYUloAzCzFbZlKo3bj8sGMl9kAMbudsHZeZtQPuCDmbXs2z9MSL4UR2FO1nkB58b520FYAu1+HsVlIbCDBnDqeUoPJnbYBGaNDDwVKOYDnbxgWrwHQkis1X5oHZIVFP0mJQHp53slfZ5fvcoAE81ZDoQWAfK0AoIqKZuABctNgW/mOwrtJACcvm1w1gMZnSvSqnZJaAli+48ENA4SB1B8o++tOOLpjlui5uhLAyOd2HrAVzPUDnHgvtCzG7V0wpKC/fSvZBmCXVgLO+wDEAuI86VkvmSGJ7AY12W1I6amNAIixAsixilpC2sGI7R7nK1gVFqvAVp7aEIDdVJZDAwRjmMumSBZ7aMrDEtIewE09lkYHkJe2yy2qV4As8o9tAViv3yRLLoMN+gl16psd18mPgGpfpIqnfm8QUIgHxFccTRdvS7bNkyXz1mCuHKDNFPfNIJ3fgW3AXkuAI+982CQGWAczrx/ODPUDdrzB051wAngbkBkYgMAuAAP64xeCuTWA1uu6ZJY2cMMw+0fqwhTB7Dy1fsDeVe0OIJNrr2QDOeLVR5cEEKdeNkVbwVw/QIsJdb7CBroeHNMABlA5ckiPC0TtH+Gip9YOSG04Awwh5FUFaTyh5QQLHYPvPsgAPOHUIiDz0QEkSutDCt1u1Ad0UHUNCZDqWnLQDzzhRBjbM9cPcGIb4KhRAAGFqWkPAMipgzHYUzPpmwOkxRIwPeTmRG/a89NKgnwDgDzVidfWDmDI3mryKoYi07lmOjEOwQNW2psArARB6ahafMA1nxaQYsY8IJjvkPoBpbiVw0evrAplMEvv+D5e5YD9bE3PgExHx1GnRcqL+GkZzP1d/9KpCiCd8Xz6JKOVDxbsZ5jhhfAhpGD+hQFqBohqLiCkLldF4pcA+ONPmfc9HjuQYMbXT2tG3QBVbcWTPiIpJ755poMc4Kn0Ke8YtfzKfmITAC/GSCP8sylzEgB43uWY3PJdV64lLQDS4dwF6Eo0/SWlAijKr3YATy6Ap0kf/qOPnj8/fwS72JmDCgNKdQvNu0HSkp3nVQ54wvMB5lgdLqLGTychD2Op3bFw5gBr57UB8NK5qWeNpp4toc/okLyk2kI3yUNaNS+mimoBybH0rmoUEq6LTJcWiQyw/VeBygHpGe5Muyh9/rRhEsncnVGGaEcwd6mdlzS0A+i3tKePfSTDU2ccfIqD+mXADhi8FZsArLVvAvDVPdp86tlXl+ImACn7I2gLdaXPmYwqQ9lHcAZoAhA2tG+NuBnwvKmhfsAXZd35/cPytwA/AVOuF0CkaNcVAAAAAElFTkSuQmCC",className:I.a.postAvatarImg})}),Object(u.jsx)("div",{className:I.a.postText,children:t.message}),Object(u.jsxs)("div",{className:I.a.likesCount,children:["likes:",t.likesCount]})]})},_=function(t){var e=t.posts.map((function(t){return Object(u.jsx)(V,{message:t.message,likesCount:t.likesCount})}));return Object(u.jsxs)("div",{className:D.a.container,children:[Object(u.jsx)("h3",{className:D.a.title,children:"MyPosts"}),Object(u.jsx)(C,{addBtn:t.addBtn}),e]})},B=s(259),F=s.n(B),U=function(t){return Object(u.jsxs)("main",{className:F.a.wrapper,children:[Object(u.jsx)(P,{profile:t.profileState.profile,status:t.profileState.status,updateUserProfileStatus:t.updateUserProfileStatus,isOwner:t.isOwner,savePhoto:t.savePhoto,saveProfile:t.saveProfile}),Object(u.jsx)(_,{posts:t.profileState.wallData,addBtn:t.createActionAddPost})]})},M=s(17),E=s(7),J=s(38),Q=function(t){Object(a.a)(s,t);var e=Object(c.a)(s);function s(){return Object(n.a)(this,s),e.apply(this,arguments)}return Object(i.a)(s,[{key:"refreshProfile",value:function(){var t=this.props.match.params.userId;t||(t=this.props.authorizedUserId)||this.props.history.push("/login"),this.props.getUserProfile(t),this.props.getUserProfileStatus(t)}},{key:"componentDidMount",value:function(){this.refreshProfile()}},{key:"componentDidUpdate",value:function(t){this.props.match.params.userId!==t.match.params.userId&&this.refreshProfile()}},{key:"render",value:function(){return Object(u.jsx)(U,Object(o.a)(Object(o.a)({},this.props),{},{isOwner:!this.props.match.params.userId}))}}]),s}(l.a.Component);e.default=Object(J.c)(Object(M.b)((function(t){return{profileState:t.profilePage,isAuth:t.auth.isAuth,authorizedUserId:t.auth.userId}}),{createActionAddPost:N.a,getUserProfile:N.b,getUserProfileStatus:N.c,updateUserProfileStatus:N.g,savePhoto:N.e,saveProfile:N.f}),E.withRouter)(Q)}}]);
//# sourceMappingURL=3.b3ab0f2d.chunk.js.map