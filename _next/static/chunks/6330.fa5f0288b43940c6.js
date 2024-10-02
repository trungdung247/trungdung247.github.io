"use strict";(self.webpackChunk_N_E=self.webpackChunk_N_E||[]).push([[6330],{42901:function(e,n,o){o.d(n,{p:function(){return useControlbarConfig}});var l=o(91309),t=o(85893),i=o(67294),r=o(25617),c=o(61935),a=o(58673),s=o(97616),useControlbarConfig=function(){var e=(0,l._)((0,a.tf)("stats"),1)[0],n=(0,r.v9)(c.Y2),o=(0,r.v9)(c.Ai),d=(0,i.useCallback)(function(l){if(l){var t,i=o[l]||s.QR[l];return"gyro"===l?!!e.isGyroscopeAvailable&&!(null==i?void 0:i.isHide):"vr"===l||"view_mode"===l?!(null==i?void 0:i.isHide)&&(null==n?void 0:null===(t=n.media)||void 0===t?void 0:t.subType)!=="flat":!(null==i?void 0:i.isHide)}return!0},[null==n?void 0:n.media,o,e]),u=(0,i.useCallback)(function(e){if(e){var n,l,i=o[e]||s.QR[e];if("icon"===i.type&&i.icon)return(0,t.jsx)("i",{"aria-hidden":!0,className:"controlbar-item__icon ".concat(i.icon)});if("image"===i.type&&(null===(n=i.image)||void 0===n?void 0:n.src))return(0,t.jsx)("img",{className:"controlbar-item__img",src:null===(l=i.image)||void 0===l?void 0:l.src,alt:"img"})}return""},[o]);return(0,i.useMemo)(function(){return{onRenderContentControlbarItem:u,onCheckIsShowContentControlbarItem:d}},[u,d])}},76330:function(e,n,o){o.r(n),o.d(n,{Controlbar:function(){return h}});var l=o(91309),t=o(85893),i=o(67294),r=o(13614),c=o(58673),a=o(42901),s=o(25617),d=o(61935),u=o(226),v=o(62443),m=o(94055),f=o(15924),_=void 0,h=(0,i.memo)(function(e){var n,o,h,g,p,j,x,b,C,S,w,k,N,I,y,T,M,P,R=e.krpanoRef,O=f.sk?{}:window.languages||{},A=(0,l._)((0,i.useState)(!0),2),F=A[0],V=A[1],z=(0,l._)((0,c.gU)("state"),1)[0],B=z.isSoundOnScene,D=z.isActiveModeMultipleStaging,H=(0,a.p)(),Q=H.onCheckIsShowContentControlbarItem,Z=H.onRenderContentControlbarItem,E=(0,s.v9)(d.g5),G=(0,s.v9)(d.us),L=(0,u.Q)({krpanoRef:R}),U=L.onVR,Y=L.onToggleGyro,q=L.onFullscreen,J=L.onToFirstScene,K=L.onViewNormal,W=L.onViewMirrorBall,X=L.onViewPlannet,$=L.onTurnOnScreenshotCapture,ee=L.isChangeScene,en=L.isShowIconChangeScene,eo=L.onChangeAutoChangeScene,el=L.isRotate,et=L.isShowIconRotate,ei=L.onToggleRotate,er=L.isShowIconSoundScene,ec=L.onToggleSoundScene,ea=L.isShowIconSoundProject,es=L.onTurnOffSoundProject,ed=L.onTurnOnSoundProject,eu=L.isShowIconMultipleStaging,ev=L.onToggleModeMultipleStaging,em=L.isShowIconInfoPlace,ef=L.onShowInfoPlace,e_=L.isShowIconInfoScene,eh=L.onToggleInfoScene,eg=L.isShowIconFloorplan,ep=L.onToggleFloorplan,ej=L.isShowIconDollhouse,ex=L.onToggleDollhouseView,eb=L.isShowIconMap,eC=L.onToggleMap,eS=L.languagesProject,ew=L.onChangeLanguageProject,ek=(0,i.useCallback)(function(){return V(function(e){return!e})},[]);return(0,t.jsxs)(r.NA,{id:"themeControlbar",className:"".concat(F?"":"inactive"),children:[(0,t.jsx)("div",{className:"--toggler",onClick:ek,children:(0,t.jsx)("i",{className:"far fa-ellipsis-vertical"})}),(0,t.jsxs)("div",{className:"controlBar",children:[Q("home")&&(0,t.jsx)(m.default,{title:null===(n=O[E])||void 0===n?void 0:n.controlbarFirstScene,placement:"left",children:(0,t.jsx)("div",{className:"--item",onClick:J,children:Z("home")})}),ea&&Q("sound_project_off")&&Q("sound_project_on")&&(0,t.jsx)(m.default,{title:G.on?null===(o=O[E])||void 0===o?void 0:o.controlbarTurnOffSoundProject:null===(h=O[E])||void 0===h?void 0:h.controlbarTurnOnSoundProject,placement:"left",children:(0,t.jsx)("div",{className:"--item",onClick:G.on?es:ed,children:Z(G.on?"sound_project_off":"sound_project_on")})}),(er&&Q("sound_scene_off")&&Q("sound_scene_on")||et&&Q("auto_rotate_off")&&Q("auto_rotate_on")||en&&Q("auto_change_scene_off")&&Q("auto_change_scene_on"))&&(0,t.jsx)(v.Z,{placement:"left",zIndex:99,content:(0,t.jsx)(r.ln,{children:(0,t.jsxs)("ul",{children:[er&&Q("sound_scene_off")&&Q("sound_scene_on")&&(0,t.jsx)("li",{children:(0,t.jsxs)("button",{type:"button",onClick:ec,children:[Z(B?"sound_scene_off":"sound_scene_on"),null===(g=O[E])||void 0===g?void 0:g.controlbarSoundScene]})}),et&&Q("auto_rotate_off")&&Q("auto_rotate_on")&&(0,t.jsx)("li",{children:(0,t.jsxs)("button",{type:"button",onClick:ei,children:[Z(el?"auto_rotate_off":"auto_rotate_on"),el?null===(p=O[E])||void 0===p?void 0:p.controlbarStopRotate:null===(j=O[E])||void 0===j?void 0:j.controlbarStartRotate]})}),en&&Q("auto_change_scene_off")&&Q("auto_change_scene_on")&&(0,t.jsx)("li",{children:(0,t.jsxs)("button",{type:"button",onClick:eo.bind(_,!ee),children:[Z(ee?"auto_change_scene_off":"auto_change_scene_on"),ee?null===(x=O[E])||void 0===x?void 0:x.controlbarStopAutoPlayScene:null===(b=O[E])||void 0===b?void 0:b.controlbarStartAutoPlayScene]})})]})}),overlayClassName:"popoverControlbar",children:(0,t.jsx)("div",{className:"--item",children:Z("group_auto_play")})}),Q("multi_language")&&(null==eS?void 0:eS.length)>1&&(0,t.jsx)(v.Z,{placement:"left",zIndex:99,content:(0,t.jsx)(r.ln,{children:(0,t.jsx)("ul",{children:eS.map(function(e){var n;return(0,t.jsx)("li",{children:(0,t.jsxs)("button",{type:"button",onClick:function(){return ew(e.id)},children:[(0,t.jsx)("img",{src:null===(n=e.flag)||void 0===n?void 0:n.src}),e.name]})},e.id)})})}),overlayClassName:"popoverControlbar",children:(0,t.jsx)("div",{className:"--item",children:Z("multi_language")})}),Q("view_mode")&&(Q("view_mode_little_planet")||Q("view_mode_mirror")||Q("view_mode_normal"))&&(0,t.jsx)(v.Z,{placement:"left",zIndex:99,content:(0,t.jsx)(r.ln,{children:(0,t.jsxs)("ul",{children:[Q("view_mode_normal")&&(0,t.jsx)("li",{children:(0,t.jsxs)("button",{type:"button",onClick:function(){return K()},children:[Z("view_mode_normal"),"Normal"]})}),Q("view_mode_mirror")&&(0,t.jsx)("li",{children:(0,t.jsxs)("button",{type:"button",onClick:function(){return W()},children:[Z("view_mode_mirror"),"Mirror Ball"]})}),Q("view_mode_little_planet")&&(0,t.jsx)("li",{children:(0,t.jsxs)("button",{type:"button",onClick:function(){return X()},children:[Z("view_mode_little_planet"),"Little Planel"]})})]})}),overlayClassName:"popoverControlbar",children:(0,t.jsx)("div",{className:"--item",children:Z("view_mode")})}),eu&&Q("multi_staging")&&(0,t.jsx)(m.default,{title:D?null===(C=O[E])||void 0===C?void 0:C.controlbarTurnOffModeMultipleStaging:null===(S=O[E])||void 0===S?void 0:S.controlbarTurnOnModeMultipleStaging,placement:"left",children:(0,t.jsx)("div",{className:"--item",onClick:function(){return ev()},children:Z("multi_staging")})}),Q("gyro")&&(0,t.jsx)("div",{className:"--item",onClick:Y,children:Z("gyro")}),em&&Q("info_tour")&&(0,t.jsx)(m.default,{title:null===(w=O[E])||void 0===w?void 0:w.controlbarInfoTour,placement:"left",children:(0,t.jsx)("div",{className:"--item",onClick:ef,children:Z("info_tour")})}),e_&&Q("info_scene")&&(0,t.jsx)(m.default,{title:null===(k=O[E])||void 0===k?void 0:k.controlbarInfoScene,placement:"left",children:(0,t.jsx)("div",{className:"--item",onClick:eh.bind(_,void 0),children:Z("info_scene")})}),ej&&Q("dollhouse")&&(0,t.jsx)(m.default,{title:null===(N=O[E])||void 0===N?void 0:N.controlbarDollhouse,placement:"left",children:(0,t.jsx)("div",{className:"--item",onClick:ex,children:Z("dollhouse")})}),eg&&Q("floorplan")&&(0,t.jsx)(m.default,{title:null===(I=O[E])||void 0===I?void 0:I.controlbarFloorplan,placement:"left",children:(0,t.jsx)("div",{className:"--item",onClick:ep.bind(_,void 0),children:Z("floorplan")})}),eb&&Q("map")&&(0,t.jsx)(m.default,{title:null===(y=O[E])||void 0===y?void 0:y.controlbarMap,placement:"left",children:(0,t.jsx)("div",{className:"--item",onClick:eC.bind(_,void 0),children:Z("map")})}),Q("vr")&&(0,t.jsx)(m.default,{title:null===(T=O[E])||void 0===T?void 0:T.controlbarVRMode,placement:"left",children:(0,t.jsx)("div",{className:"--item",onClick:U,children:Z("vr")})}),Q("screenshot_capture")&&(0,t.jsx)(m.default,{title:null===(M=O[E])||void 0===M?void 0:M.controlbarScreenshotCapture,placement:"left",children:(0,t.jsx)("div",{className:"--item",onClick:$,children:Z("screenshot_capture")})}),Q("fullscreen")&&(0,t.jsx)(m.default,{title:null===(P=O[E])||void 0===P?void 0:P.controlbarFullscreen,placement:"left",children:(0,t.jsx)("div",{className:"--item",onClick:q,children:Z("fullscreen")})})]})]})});n.default=h}}]);
//# sourceMappingURL=6330.fa5f0288b43940c6.js.map