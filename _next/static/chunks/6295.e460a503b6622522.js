"use strict";(self.webpackChunk_N_E=self.webpackChunk_N_E||[]).push([[6295],{6295:function(i,o,l){l.r(o);var e=l(91309),n=l(85893),d=l(67294),v=l(5152),t=l.n(v),u=l(62443),c=l(97616),r=l(19113),s=t()(function(){return l.e(406).then(l.bind(l,50406))},{loadableGenerated:{webpack:function(){return[50406]}}}),a=t()(function(){return l.e(7972).then(l.bind(l,7972))},{loadableGenerated:{webpack:function(){return[7972]}}}),f=t()(function(){return l.e(9134).then(l.bind(l,29134))},{loadableGenerated:{webpack:function(){return[29134]}}}),p=t()(function(){return Promise.all([l.e(296),l.e(9464),l.e(4200)]).then(l.bind(l,54200))},{loadableGenerated:{webpack:function(){return[54200]}}}),g=t()(function(){return l.e(1872).then(l.bind(l,11872))},{loadableGenerated:{webpack:function(){return[11872]}}}),y=t()(function(){return l.e(7316).then(l.bind(l,67316))},{loadableGenerated:{webpack:function(){return[67316]}}}),b=t()(function(){return Promise.all([l.e(3409),l.e(2359)]).then(l.bind(l,72359))},{loadableGenerated:{webpack:function(){return[72359]}},ssr:!1});o.default=(0,d.memo)(function(i){var o,l,v,t,h,_,m,w,H,k,T,P,x,C,j,G,O,M,D,S,N,E,z,F,I,L,U,R,V,Z,$,q,A=i.hotspot,B=i.listScene,J=i.listPost,K=i.onChangePopover,Q=i.isHidden,W=i.isHideTitleGlobal,X=void 0!==W&&W,Y=i.isHidePreviewGlobal,ii=void 0!==Y&&Y,io=i.isHideTitleOnTopGlobal,il=i.onClick,ie=void 0===il?function(){}:il,id=i.bgColorDefault,iv=void 0===id?c.n$:id,it=i.iconColorDefault,iu=void 0===it?c.IM:it,ic=(0,d.useRef)(!1),ir=(0,e._)((0,d.useState)(!1),2),is=ir[0],ia=ir[1],ip=(0,d.useMemo)(function(){var i,o,l,e,n,d,v,t;return(null==A?void 0:null===(o=A.config)||void 0===o?void 0:null===(i=o.style)||void 0===i?void 0:i.type)==="icon"&&((null==A?void 0:null===(n=A.config)||void 0===n?void 0:null===(e=n.style)||void 0===e?void 0:null===(l=e.icon)||void 0===l?void 0:l.icon)||(null==A?void 0:null===(t=A.config)||void 0===t?void 0:null===(v=t.style)||void 0===v?void 0:null===(d=v.icon)||void 0===d?void 0:d.shape))},[A]),ig=(0,d.useMemo)(function(){var i,o,l,e,n;return(null==A?void 0:null===(o=A.config)||void 0===o?void 0:null===(i=o.style)||void 0===i?void 0:i.type)==="image"&&(null==A?void 0:null===(n=A.config)||void 0===n?void 0:null===(e=n.style)||void 0===e?void 0:null===(l=e.image)||void 0===l?void 0:l.src)},[A]),iy=(0,d.useMemo)(function(){var i,o,l,e,n;return(null==A?void 0:null===(o=A.config)||void 0===o?void 0:null===(i=o.style)||void 0===i?void 0:i.type)==="lottie"&&(null==A?void 0:null===(n=A.config)||void 0===n?void 0:null===(e=n.style)||void 0===e?void 0:null===(l=e.lottie)||void 0===l?void 0:l.json_src)},[A]),ib=(0,d.useMemo)(function(){var i,o,l,e,n;return(null==A?void 0:null===(o=A.config)||void 0===o?void 0:null===(i=o.style)||void 0===i?void 0:i.type)==="marker"&&(null==A?void 0:null===(n=A.config)||void 0===n?void 0:null===(e=n.style)||void 0===e?void 0:null===(l=e.marker)||void 0===l?void 0:l.svg_src)},[A]),ih=(0,d.useMemo)(function(){var i,o,l,e,n,d,v,t;return(null==A?void 0:null===(o=A.config)||void 0===o?void 0:null===(i=o.style)||void 0===i?void 0:i.type)==="callout"&&((null==A?void 0:null===(n=A.config)||void 0===n?void 0:null===(e=n.style)||void 0===e?void 0:null===(l=e.callout)||void 0===l?void 0:l.src)||(null==A?void 0:null===(t=A.config)||void 0===t?void 0:null===(v=t.style)||void 0===v?void 0:null===(d=v.callout)||void 0===d?void 0:d.text))},[A]),i_=(0,d.useMemo)(function(){var i,o,l,e,n,d,v,t,u,c,r,s,a,f,p,g,y,b,h,_;switch(null==A?void 0:A.type){case"point":return{isHidePreview:!!(null===(o=A.config)||void 0===o?void 0:null===(i=o.point)||void 0===i?void 0:i.preview_box_hide),isHideTitleOnTop:!!(null===(e=A.config)||void 0===e?void 0:null===(l=e.point)||void 0===l?void 0:l.title_on_top_hide)};case"image":return{isHidePreview:!!(null===(d=A.config)||void 0===d?void 0:null===(n=d.image)||void 0===n?void 0:n.preview_box_hide),isHideTitleOnTop:!!(null===(t=A.config)||void 0===t?void 0:null===(v=t.image)||void 0===v?void 0:v.title_on_top_hide)};case"video":return{isHidePreview:!!(null===(c=A.config)||void 0===c?void 0:null===(u=c.video)||void 0===u?void 0:u.preview_box_hide),isHideTitleOnTop:!!(null===(s=A.config)||void 0===s?void 0:null===(r=s.video)||void 0===r?void 0:r.title_on_top_hide)};case"article":return{isHidePreview:!!(null===(f=A.config)||void 0===f?void 0:null===(a=f.article)||void 0===a?void 0:a.preview_box_hide),isHideTitleOnTop:!!(null===(g=A.config)||void 0===g?void 0:null===(p=g.article)||void 0===p?void 0:p.title_on_top_hide)};case"link":return{isHidePreview:!!(null===(b=A.config)||void 0===b?void 0:null===(y=b.link)||void 0===y?void 0:y.preview_box_hide),isHideTitleOnTop:!!(null===(_=A.config)||void 0===_?void 0:null===(h=_.link)||void 0===h?void 0:h.title_on_top_hide)};default:return{isHidePreview:!1,isHideTitleOnTop:!1}}},[A]),im=(0,d.useCallback)(function(){ic.current=!0},[]),iw=(0,d.useCallback)(function(){ic.current=!1},[]),iH=(0,d.useCallback)(function(){ia(!0),K(!0)},[K]),ik=(0,d.useCallback)(function(){iw(),ia(!1),K(!1)},[K,iw]);return(0,n.jsx)(r.xd,{isHidden:void 0!==Q&&Q,type:(null==A?void 0:null===(l=A.config)||void 0===l?void 0:null===(o=l.style)||void 0===o?void 0:o.type)==="icon"&&(null==A?void 0:null===(h=A.config)||void 0===h?void 0:null===(t=h.style)||void 0===t?void 0:null===(v=t.icon)||void 0===v?void 0:v.shape)?"icon-shape":(null==A?void 0:null===(m=A.config)||void 0===m?void 0:null===(_=m.style)||void 0===_?void 0:_.type)||"icon",size:(null==A?void 0:null===(H=A.config)||void 0===H?void 0:null===(w=H.style)||void 0===w?void 0:w.size)||3,rotate:(null==A?void 0:null===(T=A.config)||void 0===T?void 0:null===(k=T.style)||void 0===k?void 0:k.rotate)||0,opacity:((null==A?void 0:null===(x=A.config)||void 0===x?void 0:null===(P=x.style)||void 0===P?void 0:P.opacity)||100)/100,onMouseOver:iH,onMouseLeave:function(){setTimeout(function(){ic.current||ik()},200)},onClick:ik,onTouchEnd:ik,children:(0,n.jsxs)(u.Z,{open:(!ii||!X)&&(!i_.isHidePreview||!X)&&(!ii||!!A.title)&&(!i_.isHidePreview||!!A.title)&&"sound"!==A.type&&is,content:(0,n.jsx)(b,{hotspot:A,listPost:J,listScene:B,isHidePreview:i_.isHidePreview,isHideTitleGlobal:X,onUnvisiblePopover:ik,isHidePreviewGlobal:ii,onVisibleFlagPopover:im,onUnvisibleFlagPopover:iw,onClick:function(){ik(),ie()}}),placement:"article"===A.type?"right":"top",destroyTooltipOnHide:!0,mouseLeaveDelay:500,onOpenChange:function(i){i||(ic.current=!1)},overlayClassName:"popoverPreviewHotspot",zIndex:99,children:[A.title&&!(void 0!==io&&io)&&!i_.isHideTitleOnTop&&(0,n.jsx)("span",{className:"--title",children:(0,n.jsx)("em",{children:A.title})}),(0,n.jsxs)("div",{className:"content animate__animated ".concat((null==A?void 0:null===(j=A.config)||void 0===j?void 0:null===(C=j.style)||void 0===C?void 0:C.effect)&&(null==A?void 0:null===(O=A.config)||void 0===O?void 0:null===(G=O.style)||void 0===G?void 0:G.effect)!=="normal"?null==A?void 0:null===(D=A.config)||void 0===D?void 0:null===(M=D.style)||void 0===M?void 0:M.effect:""),onClick:ie,onTouchEnd:ie,children:[!ig&&!ip&&!iy&&!ih&&!ib&&(0,n.jsx)(s,{typeHotspot:null==A?void 0:A.type,bgColorDefault:(null===(E=A.config)||void 0===E?void 0:null===(N=E.style)||void 0===N?void 0:null===(S=N.icon)||void 0===S?void 0:S.bg_color)||iv,iconColorDefault:iu}),ip&&(0,n.jsx)(a,{typeHotspot:null==A?void 0:A.type,bgColorDefault:iv,iconColorDefault:iu,hotspotStyleShape:null===(F=A.config)||void 0===F?void 0:null===(z=F.style)||void 0===z?void 0:z.icon}),ig&&(0,n.jsx)(f,{image:null===(L=A.config)||void 0===L?void 0:null===(I=L.style)||void 0===I?void 0:I.image}),iy&&(0,n.jsx)(p,{lottie:null===(R=A.config)||void 0===R?void 0:null===(U=R.style)||void 0===U?void 0:U.lottie}),ib&&(0,n.jsx)(g,{hotspot:A,listScene:B,marker:null===(Z=A.config)||void 0===Z?void 0:null===(V=Z.style)||void 0===V?void 0:V.marker}),ih&&(0,n.jsx)(y,{hotspotTitle:A.title||"---",callout:null===(q=A.config)||void 0===q?void 0:null===($=q.style)||void 0===$?void 0:$.callout})]})]})})})}}]);
//# sourceMappingURL=6295.e460a503b6622522.js.map