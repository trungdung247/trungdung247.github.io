"use strict";(self.webpackChunk_N_E=self.webpackChunk_N_E||[]).push([[6231],{42901:function(n,o,e){e.d(o,{p:function(){return useControlbarConfig}});var t=e(91309),l=e(85893),i=e(67294),r=e(25617),a=e(61935),c=e(58673),s=e(97616),useControlbarConfig=function(){var n=(0,t._)((0,c.tf)("stats"),1)[0],o=(0,r.v9)(a.Y2),e=(0,r.v9)(a.Ai),u=(0,i.useCallback)(function(t){if(t){var l,i=e[t]||s.QR[t];return"gyro"===t?!!n.isGyroscopeAvailable&&!(null==i?void 0:i.isHide):"vr"===t||"view_mode"===t?!(null==i?void 0:i.isHide)&&(null==o?void 0:null===(l=o.media)||void 0===l?void 0:l.subType)!=="flat":!(null==i?void 0:i.isHide)}return!0},[null==o?void 0:o.media,e,n]),d=(0,i.useCallback)(function(n){if(n){var o,t,i=e[n]||s.QR[n];if("icon"===i.type&&i.icon)return(0,l.jsx)("i",{"aria-hidden":!0,className:"controlbar-item__icon ".concat(i.icon)});if("image"===i.type&&(null===(o=i.image)||void 0===o?void 0:o.src))return(0,l.jsx)("img",{className:"controlbar-item__img",src:null===(t=i.image)||void 0===t?void 0:t.src,alt:"img"})}return""},[e]);return(0,i.useMemo)(function(){return{onRenderContentControlbarItem:d,onCheckIsShowContentControlbarItem:u}},[d,u])}},56231:function(n,o,e){e.r(o);var t=e(91309),l=e(85893),i=e(58673),r=e(42901),a=e(226),c=e(61935),s=e(62443),u=e(94055),d=e(67294),m=e(25617),h=e(46554),_=e(15924),v=void 0,b=(0,d.memo)(function(n){var o,e,d,b,p,f,C,j,g,x,S,y,N,w=n.krpanoRef,k=n.onPrevScene,B=n.onNextScene,T=n.isShowListScene,I=n.isShowControlbar,M=n.onToggleControlbar,R=n.onToggleListScene,P=_.sk?{}:window.languages||{},O=(0,t._)((0,i.gU)("state"),1)[0],A=O.isSoundOnScene,V=O.isActiveModeMultipleStaging,F=(0,r.p)(),L=F.onRenderContentControlbarItem,z=F.onCheckIsShowContentControlbarItem,H=(0,m.v9)(c.g5),Q=(0,m.v9)(c.us),Z=(0,a.Q)({krpanoRef:w}),E=Z.onVR,G=Z.onToggleGyro,U=Z.onFullscreen,Y=Z.onToFirstScene,q=Z.onViewNormal,D=Z.onViewMirrorBall,J=Z.onViewPlannet,K=Z.onTurnOnScreenshotCapture,W=Z.isChangeScene,X=Z.isShowIconChangeScene,$=Z.onChangeAutoChangeScene,nn=Z.isRotate,no=Z.isShowIconRotate,ne=Z.onToggleRotate,nt=Z.isShowIconSoundScene,nl=Z.onToggleSoundScene,ni=Z.isShowIconSoundProject,nr=Z.onTurnOffSoundProject,na=Z.onTurnOnSoundProject,nc=Z.isShowIconMultipleStaging,ns=Z.onToggleModeMultipleStaging,nu=Z.languagesProject,nd=Z.onChangeLanguageProject;return(0,l.jsxs)("div",{className:"controlBar",children:[(0,l.jsxs)("div",{className:"--left",children:[(0,l.jsx)("button",{type:"button",className:"itemControlBtn",onClick:k,children:(0,l.jsx)("i",{"aria-hidden":!0,className:"far fa-chevron-circle-left"})}),(0,l.jsx)("button",{type:"button",className:"itemControlBtn ".concat(T?"active":""),onClick:R,children:(0,l.jsx)("i",{"aria-hidden":!0,className:"far fa-th"})})]}),(0,l.jsxs)("div",{className:"--center",children:[z("home")&&(0,l.jsx)(u.default,{title:null===(o=P[H])||void 0===o?void 0:o.controlbarFirstScene,placement:"top",children:(0,l.jsx)("button",{type:"button",className:"itemControlBtn",onClick:Y,children:L("home")})}),ni&&z("sound_project_off")&&z("sound_project_on")&&(0,l.jsx)(u.default,{title:Q.on?null===(e=P[H])||void 0===e?void 0:e.controlbarTurnOffSoundProject:null===(d=P[H])||void 0===d?void 0:d.controlbarTurnOnSoundProject,placement:"top",children:(0,l.jsx)("button",{type:"button",className:"itemControlBtn",onClick:Q.on?nr:na,children:L(Q.on?"sound_project_off":"sound_project_on")})}),(nt&&z("sound_scene_off")&&z("sound_scene_on")||no&&z("auto_rotate_off")&&z("auto_rotate_on")||X&&z("auto_change_scene_off")&&z("auto_change_scene_on"))&&(0,l.jsx)(s.Z,{placement:"top",zIndex:99,content:(0,l.jsx)(h.ln,{children:(0,l.jsxs)("ul",{children:[nt&&z("sound_scene_off")&&z("sound_scene_on")&&(0,l.jsx)("li",{children:(0,l.jsxs)("button",{type:"button",onClick:nl,children:[L(A?"sound_scene_off":"sound_scene_on"),null===(b=P[H])||void 0===b?void 0:b.controlbarSoundScene]})}),no&&z("auto_rotate_off")&&z("auto_rotate_on")&&(0,l.jsx)("li",{children:(0,l.jsxs)("button",{type:"button",onClick:ne,children:[L(nn?"auto_rotate_off":"auto_rotate_on"),nn?null===(p=P[H])||void 0===p?void 0:p.controlbarStopRotate:null===(f=P[H])||void 0===f?void 0:f.controlbarStartRotate]})}),X&&z("auto_change_scene_off")&&z("auto_change_scene_on")&&(0,l.jsx)("li",{children:(0,l.jsxs)("button",{type:"button",onClick:$.bind(v,!W),children:[L(W?"auto_change_scene_off":"auto_change_scene_on"),W?null===(C=P[H])||void 0===C?void 0:C.controlbarStopAutoPlayScene:null===(j=P[H])||void 0===j?void 0:j.controlbarStartAutoPlayScene]})})]})}),overlayClassName:"popoverControlbar",children:(0,l.jsx)("button",{type:"button",className:"itemControlBtn",children:L("group_auto_play")})}),z("multi_language")&&(null==nu?void 0:nu.length)>1&&(0,l.jsx)(s.Z,{placement:"top",zIndex:99,content:(0,l.jsx)(h.ln,{children:(0,l.jsx)("ul",{children:nu.map(function(n){var o;return(0,l.jsx)("li",{children:(0,l.jsxs)("button",{type:"button",onClick:function(){return nd(n.id)},children:[(0,l.jsx)("img",{src:null===(o=n.flag)||void 0===o?void 0:o.src}),n.name]})},n.id)})})}),overlayClassName:"popoverControlbar",children:(0,l.jsx)("button",{type:"button",className:"itemControlBtn",children:L("multi_language")})}),z("view_mode")&&(z("view_mode_little_planet")||z("view_mode_mirror")||z("view_mode_normal"))&&(0,l.jsx)(s.Z,{placement:"top",zIndex:99,content:(0,l.jsx)(h.ln,{children:(0,l.jsxs)("ul",{children:[z("view_mode_normal")&&(0,l.jsx)("li",{children:(0,l.jsxs)("button",{type:"button",onClick:function(){return q()},children:[L("view_mode_normal"),"Normal"]})}),z("view_mode_mirror")&&(0,l.jsx)("li",{children:(0,l.jsxs)("button",{type:"button",onClick:function(){return D()},children:[L("view_mode_mirror"),"Mirror Ball"]})}),z("view_mode_little_planet")&&(0,l.jsx)("li",{children:(0,l.jsxs)("button",{type:"button",onClick:function(){return J()},children:[L("view_mode_little_planet"),"Little Planel"]})})]})}),overlayClassName:"popoverControlbar",children:(0,l.jsx)("button",{type:"button",className:"itemControlBtn",children:L("view_mode")})}),nc&&z("multi_staging")&&(0,l.jsx)(u.default,{title:V?null===(g=P[H])||void 0===g?void 0:g.controlbarTurnOffModeMultipleStaging:null===(x=P[H])||void 0===x?void 0:x.controlbarTurnOnModeMultipleStaging,placement:"top",children:(0,l.jsx)("button",{type:"button",className:"itemControlBtn hide-on-mobile",onClick:function(){return ns()},children:L("multi_staging")})}),z("gyro")&&(0,l.jsx)("button",{type:"button",className:"itemControlBtn",onClick:G,children:L("gyro")}),z("vr")&&(0,l.jsx)(u.default,{title:null===(S=P[H])||void 0===S?void 0:S.controlbarVRMode,placement:"top",children:(0,l.jsx)("button",{type:"button",className:"itemControlBtn",onClick:E,children:L("vr")})}),z("screenshot_capture")&&(0,l.jsx)(u.default,{title:null===(y=P[H])||void 0===y?void 0:y.controlbarScreenshotCapture,placement:"top",children:(0,l.jsx)("button",{type:"button",className:"itemControlBtn",onClick:K,children:L("screenshot_capture")})}),z("fullscreen")&&(0,l.jsx)(u.default,{title:null===(N=P[H])||void 0===N?void 0:N.controlbarFullscreen,placement:"top",children:(0,l.jsx)("button",{type:"button",className:"itemControlBtn",onClick:U,children:L("fullscreen")})})]}),(0,l.jsxs)("div",{className:"--right",children:[(0,l.jsx)("button",{type:"button",className:"itemControlBtn",onClick:M,children:(0,l.jsx)("i",{"aria-hidden":!0,className:"far fa-caret-circle-down"})}),(0,l.jsx)("button",{type:"button",className:"itemControlBtn",onClick:B,children:(0,l.jsx)("i",{"aria-hidden":!0,className:"far fa-chevron-circle-right"})})]}),(0,l.jsx)("button",{type:"button",className:"itemControlBtn itemShowControlbar ".concat(I?"--hide":"--show"),onClick:M,children:(0,l.jsx)("i",{"aria-hidden":!0,className:"far fa-caret-circle-up"})})]})});o.default=b}}]);
//# sourceMappingURL=6231.2ca999a59c490e20.js.map