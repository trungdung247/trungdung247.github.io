"use strict";(self.webpackChunk_N_E=self.webpackChunk_N_E||[]).push([[2854],{15531:function(e,n,t){t.d(n,{$:function(){return useGetDetailPost}});var i=t(11010),s=t(91309),o=t(97582),l=t(82050),a=t(25617),r=t(67294),c=t(61935),useGetDetailPost=function(e){var n=e.idPost,t=void 0===n?"":n,u=(0,a.v9)(c.Yd),d=(0,a.v9)(c.DH),f=(0,s._)((0,r.useState)(!1),2),v=f[0],h=f[1],p=(0,s._)((0,r.useState)(void 0),2),b=p[0],m=p[1],j=(0,r.useCallback)((0,i._)(function(){var e;return(0,o.Jh)(this,function(n){switch(n.label){case 0:h(!0),n.label=1;case 1:if(n.trys.push([1,4,5,6]),e=u.find(function(e){return e.id===t}))return[3,3];return[4,(0,l.r)(t)];case 2:e=n.sent().data.data,n.label=3;case 3:return m(e),[3,6];case 4:return n.sent(),m(void 0),[3,6];case 5:return h(!1),[7];case 6:return[2]}})}),[t,u]);return(0,r.useEffect)(function(){return t?j():m(void 0),function(){h(!1),m(void 0)}},[t,d]),(0,r.useMemo)(function(){return{loading:v,detailPost:b,onGetDetailPost:j}},[v,b,j])}},32854:function(e,n,t){t.r(n),t.d(n,{Header:function(){return m}});var i=t(91309),s=t(85893),o=t(58673),l=t(15531),a=t(226),r=t(61935),c=t(5152),u=t.n(c),d=t(67294),f=t(25617),v=t(35530),h=void 0,p=u()(function(){return t.e(9431).then(t.bind(t,99431))},{loadableGenerated:{webpack:function(){return[99431]}}}),b=u()(function(){return Promise.resolve().then(t.bind(t,82502))},{loadableGenerated:{webpack:function(){return[82502]}}}),m=(0,d.memo)(function(e){var n=e.isShowListScene,t=(0,f.v9)(r.M9),c=(0,f.v9)(r.Y2),u=(0,f.v9)(r.AA),m=(0,i._)((0,o.gU)("state"),1)[0],j=(0,a.Q)({krpanoRef:null}),x=j.onToggleInfoScene,g=j.onCloseDialogPostScene,P=(0,l.$)({idPost:m.idPostSceneSelected}),N=P.loading,S=P.detailPost;return(0,d.useEffect)(function(){return(null==c?void 0:c.post)?x(!0):x(!1),function(){x(!1)}},[null==c?void 0:c.id]),(0,s.jsxs)(v.Pz,{id:"themeHeader",className:"".concat((null==u?void 0:u.selected)==="defaultNew"?"variant-palette":""," topInfo ").concat(n?"showSidebar":""),children:[(0,s.jsx)(p,{}),(0,s.jsxs)("div",{className:"--info",children:[(0,s.jsx)("h1",{className:"--projectTitle",children:(null==t?void 0:t.title)||"---"}),!!(null==t?void 0:t.subTitle)&&(0,s.jsx)("p",{className:"address",children:null==t?void 0:t.subTitle}),(0,s.jsxs)("div",{className:"popInfo",children:[(0,s.jsxs)("button",{className:"popInfoToggle",type:"button",onFocus:x.bind(h,!0),onMouseOver:x.bind(h,!0),children:[null==c?void 0:c.title,(null==c?void 0:c.post)&&(0,s.jsx)("span",{children:(0,s.jsx)("i",{"aria-hidden":!0,className:"fas fa-info"})})]}),(0,s.jsx)("div",{className:"popInfoContent ".concat(m.visibleDialogPostScene?"active":""),children:(0,s.jsxs)(b,{loading:N,children:[(0,s.jsxs)("div",{className:"popInfoContentHead",children:[(0,s.jsx)("h4",{children:null==c?void 0:c.title}),(0,s.jsx)("i",{className:"popInfoClose fal fa-times",onClick:g})]}),(0,s.jsx)("div",{className:"popInfoArticle",children:(0,s.jsx)("div",{dangerouslySetInnerHTML:{__html:(null==S?void 0:S.content)||""}})})]})})]})]})]})});n.default=m},82050:function(e,n,t){t.d(n,{r:function(){return getDetailPost}});var i=t(62633),getDetailPost=function(e){return i.R.$get("/post/getPublish",{id:e})}}}]);
//# sourceMappingURL=2854.b50ec093310138b9.js.map