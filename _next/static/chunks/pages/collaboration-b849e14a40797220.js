(self.webpackChunk_N_E=self.webpackChunk_N_E||[]).push([[4412,8223],{76489:function(e,n){"use strict";function decode(e){return -1!==e.indexOf("%")?decodeURIComponent(e):e}/*!
 * cookie
 * Copyright(c) 2012-2014 Roman Shtylman
 * Copyright(c) 2015 Douglas Christopher Wilson
 * MIT Licensed
 */n.Q=function(e,n){if("string"!=typeof e)throw TypeError("argument str must be a string");for(var o={},t=(n||{}).decode||decode,i=0;i<e.length;){var r=e.indexOf("=",i);if(-1===r)break;var a=e.indexOf(";",i);if(-1===a)a=e.length;else if(a<r){i=e.lastIndexOf(";",r-1)+1;continue}var l=e.slice(i,r).trim();if(void 0===o[l]){var s=e.slice(r+1,a).trim();34===s.charCodeAt(0)&&(s=s.slice(1,-1)),o[l]=function(e,n){try{return n(e)}catch(n){return e}}(s,t)}i=a+1}return o},Object.prototype.toString},27078:function(e,n,o){(window.__NEXT_P=window.__NEXT_P||[]).push(["/collaboration",function(){return o(13661)}])},29164:function(e,n,o){"use strict";o.d(n,{l:function(){return useGetTenant}});var t=o(11010),i=o(72253),r=o(91309),a=o(97582),l=o(67294),s=o(62633),u=o(97616),c=o(15924),useGetTenant=function(e){var n=e.host,o=(0,r._)((0,l.useState)(void 0),2),d=o[0],f=o[1],v=(0,l.useCallback)((0,t._)(function(){var e;return(0,a.Jh)(this,function(o){switch(o.label){case 0:return o.trys.push([0,2,,3]),[4,s.R.$get("/tenant/get-by-project",{id:n||(c.sk?"":window.location.host)})];case 1:return e=o.sent().data,f((0,i._)({},u.gJ,e.data)),[3,3];case 2:return o.sent(),f(u.gJ),[3,3];case 3:return[2]}})}),[n]);return(0,l.useMemo)(function(){return{tenant:d,onGetTenantByDomain:v}},[v,d])}},13661:function(e,n,o){"use strict";o.r(n);var t=o(11010),i=o(72253),r=o(14932),a=o(4586),l=o(97582),s=o(85893),u=o(67294),c=o(1214),d=o(11163),f=o(25617),v=o(2962),p=o(61935),_=o(97616),h=o(11201),T=o(46494),g=o(5152),b=o.n(g),C=o(76489),O=o(7999),m=o(25447),P=o(29164),k=b()(function(){return Promise.all([o.e(5400),o.e(7075),o.e(3376),o.e(116)]).then(o.bind(o,60116))},{loadableGenerated:{webpack:function(){return[60116]}}}),w=b()(function(){return Promise.all([o.e(2016),o.e(5507)]).then(o.bind(o,15507))},{loadableGenerated:{webpack:function(){return[15507]}},loading:function(){return(0,s.jsx)("span",{children:"Home Loading"})}});function CollaborationContainer(e){var n,o,t,l=e.host,h=e.isRedirectToTokenPage,T=void 0!==h&&h,g=e.isAllowToAccessOnCollaborationMode,b=e.passwordTourCookie,C=e.listProjectGuardOpenedCookie,O=e.listFormCaptureOpenedCookie,m=(0,d.useRouter)(),R=(0,f.I0)(),A=(0,f.v9)(p.rK),S=(0,f.v9)(p.nS),j=(0,f.v9)(p.U9),y=(0,f.v9)(p.QR),E=(0,f.v9)(p.M9),G=(0,f.v9)(p.qC),M=(0,f.v9)(p.WA),N=(0,P.l)({host:void 0===l?"":l}),x=N.tenant,U=N.onGetTenantByDomain,I=(0,u.useMemo)(function(){return j.filter(function(e){return e.id===G})[0]||void 0},[j,G]);return(0,u.useEffect)(function(){x?!A&&m.isReady&&T&&window.open("".concat(null==x?void 0:x.domain_studio,"/redirect").concat("/collaboration","/").concat(m.query.tour,"/").concat(m.query.scene||""),"_self"):U()},[m.isReady,x,T]),(0,u.useEffect)(function(){if(j&&j.length){var e=I?(0,i._)({},I):(0,i._)({},j[0]);m.query.scene&&(e=(0,i._)({},j.filter(function(e){return e.id===m.query.scene})[0])||(0,i._)({},j[0])),e.config=(0,i._)({},null==e?void 0:e.config)||{},e.config=(0,r._)((0,i._)({},e.config),{isLittlePlanet:(null==M?void 0:M.enable)||!1,timeTransitionLittlePlanet:(null==M?void 0:M.transition_time)||2}),R(c.Nw.setSceneSelected(e)),g&&R(c.Nw.setIsAllowToAccessOnCollaborationMode(g))}},[j.length]),(0,s.jsx)(s.Fragment,{children:A&&(0,s.jsxs)(s.Fragment,{children:[x&&(0,s.jsx)(v.PB,{title:(null==y?void 0:y.title)||S,description:(null==y?void 0:y.description)||(null==x?void 0:x.description),additionalMetaTags:[{property:"name",content:null==x?void 0:x.name},{name:"application-name",content:null==x?void 0:x.name}],additionalLinkTags:(null==y||!y.favicon)&&(null==x?void 0:null===(n=x.domain_public)||void 0===n?void 0:n.includes("panoee"))?(0,a._)(_.XB).concat((0,a._)(_.hj)):(0,a._)([{rel:"shortcut icon",href:(null==y?void 0:y.favicon)||(null==x?void 0:null===(o=x.favicon)||void 0===o?void 0:o.src)}]).concat((0,a._)((null==x?void 0:null===(t=x.domain_public)||void 0===t?void 0:t.includes("panoee"))?_.hj:[]))}),g?(0,s.jsx)(w,{isPublic:!0,isCollaborationMode:!0,passwordTourCookie:b,listProjectGuardOpenedCookie:C,listFormCaptureOpenedCookie:O}):(0,s.jsx)(k,{project_id:(null==E?void 0:E.id)||"",scene:I})]})})}CollaborationContainer.getInitialProps=T.Y.getInitialPageProps(function(e){var n;return n=(0,t._)(function(n){var o,t,r,a,s,u,d,f,v,p,_,T,g;return(0,l.Jh)(this,function(l){switch(l.label){case 0:if(o=n.query,!((t=n.req)&&t.headers))return[3,3];if(s={listProjectGuardOpenedCookie:(a=(0,C.Q)((null==t?void 0:null===(r=t.headers)||void 0===r?void 0:r.cookie)||""))&&a[O.g.LIST_PROJECT_PASS_GUARD]||null,passwordTourCookie:a&&a[O.g.PASSWORD_TOUR]||null,listFormCaptureOpenedCookie:a&&a[O.g.LIST_FORM_CAPTURE_OPENED]||null},!(o.tour&&o.token))return[3,2];return e.dispatch(c.Nw.setToken(JSON.parse(JSON.stringify(o.token)))),e.dispatch((0,c.b6)({id:o.tour,isPublic:!0,host:t.headers.host})),e.dispatch((0,c.YC)({token:o.token})),e.dispatch(h.uR),[4,null===(u=e.sagaTask)||void 0===u?void 0:u.toPromise()];case 1:return l.sent(),_=!!(p=e.getState().app).infoUser&&!!p.project&&p.infoUser.id===p.project.user,T=null===(d=(0,m.h_)(null===(f=p.project)||void 0===f?void 0:f.plugins,"collaboration"))||void 0===d?void 0:d.configCollaboration,g=_||(null==T?void 0:T.isEnabled)&&((null==T?void 0:T.isPublic)||"".concat(null==T?void 0:T.collaborations," ").split(/\r?\n/).map(function(e){return e.trim()}).filter(function(e){return!!e}).indexOf(null===(v=p.infoUser)||void 0===v?void 0:v.email)>-1),[2,(0,i._)({isRedirectToTokenPage:!1,isAllowToAccessOnCollaborationMode:g,host:t.headers.host},s)];case 2:return[2,(0,i._)({isRedirectToTokenPage:!0,isAllowToAccessOnCollaborationMode:!1,host:t.headers.host},s)];case 3:return[2,{isRedirectToTokenPage:!0,isAllowToAccessOnCollborationMode:!1}]}})}),function(e){return n.apply(this,arguments)}}),n.default=CollaborationContainer},7999:function(e,n,o){"use strict";var t,i;o.d(n,{g:function(){return t}}),(i=t||(t={})).PASSWORD_TOUR="passwordTour",i.LIST_PROJECT_PASS_GUARD="listProjectGuardOpened",i.LIST_FORM_CAPTURE_OPENED="listFormCaptureOpened"}},function(e){e.O(0,[3354,1935,9774,2888,179],function(){return e(e.s=27078)}),_N_E=e.O()}]);
//# sourceMappingURL=collaboration-b849e14a40797220.js.map