"use strict";(self.webpackChunk_N_E=self.webpackChunk_N_E||[]).push([[3060],{23060:function(n,e,t){t.r(e);var o=t(72253),i=t(14932),r=t(91309),a=t(85893),c=t(58673),l=t(83403),d=t(41974),u=t(61935),s=t(1214),f=t(5152),m=t.n(f),p=t(67294),h=t(25617),b=t(88023),x=m()(function(){return Promise.all([t.e(2301),t.e(9220),t.e(811),t.e(4055),t.e(1130),t.e(4104),t.e(7134),t.e(7812)]).then(t.bind(t,56278))},{loadableGenerated:{webpack:function(){return[56278]}}}),g=m()(function(){return Promise.all([t.e(2301),t.e(9220),t.e(811),t.e(4055),t.e(1130),t.e(4737),t.e(4104),t.e(7625),t.e(7134),t.e(8252)]).then(t.bind(t,78252))},{loadableGenerated:{webpack:function(){return[78252]}}}),v=m()(function(){return t.e(4700).then(t.bind(t,44700))},{loadableGenerated:{webpack:function(){return[44700]}}}),w=m()(function(){return Promise.resolve().then(t.bind(t,82502))},{loadableGenerated:{webpack:function(){return[82502]}}}),_=(0,p.memo)(function(){var n=(0,h.I0)(),e=(0,r._)((0,p.useState)(""),2),t=e[0],f=e[1],m=(0,d.Z)().onNextScene,_=(0,h.v9)(u.U9),S=(0,h.v9)(u.nS),k=(0,h.v9)(u.Y2),C=(0,l.d)(),y=C.onCreateCommentScene,j=C.onUpdateCommentScene,P=C.onDeleteCommentScene,N=C.listCommentSceneGroupByParent,O=C.listCommentSceneGroupByParentActive,G=C.listCommentSceneGroupByParentResolved,I=(0,r._)((0,c.yG)("isShowDialogCreateCommentScene"),2),Z=I[0],B=I[1],W=(0,r._)((0,c.yG)("commentSceneTemporary"),1)[0],D=(0,r._)((0,c.yG)("krpanoRef"),1)[0],E=(0,r._)((0,c.yG)("commentSceneSelected"),2)[1],L=(0,r._)((0,c.yG)("loading"),1)[0];(0,p.useEffect)(function(){D&&(N.forEach(function(n){D.onAddCommentScene(n)}),D.call("followmouse_disable();"),D.set("cursors.standard","url(".concat("/static","/core/comment.svg) 4 12, auto")))},[null==k?void 0:k._id,D]),(0,p.useEffect)(function(){return n(s.Nw.setListCommentSceneSelected((null==k?void 0:k.commentScenes)||[])),function(){n(s.Nw.setListCommentSceneSelected([])),E(null)}},[null==k?void 0:k._id]);var M=(0,p.useCallback)(function(){return f("")},[]),T=(0,p.useCallback)(function(n){f("detail"),m(n)},[m]),U=(0,p.useCallback)(function(){B(!1)},[B]),z=(0,p.useCallback)(function(n){null==D||D.focusOnCommentScene(n,function(){E(null)})},[D,E]),A=(0,p.useCallback)(function(n){null==D||D.focusOnCommentScene(n,function(){E(n)})},[D,E]),R=(0,p.useCallback)(function(n){return j(n)},[j]),Y=(0,p.useCallback)(function(n){return P(n)},[P]),F=(0,p.useCallback)(function(n){y((0,i._)((0,o._)({},W),{message:n}),D)},[D,y,W]);return(0,a.jsxs)(b.um,{children:[(0,a.jsx)(w,{loading:L,children:"detail"===t?(0,a.jsx)(g,{listScene:_,onNextScene:m,titleProject:S,onBack:M,sceneSelected:k,listCommentSceneGroupByParentActive:O,listCommentSceneGroupByParentResolved:G,onMoveToCommentScene:z,onSelectCommentScene:A,onUpdateCommentScene:R,onDeleteCommentScene:Y}):(0,a.jsx)(x,{listScene:_,titleProject:S,sceneSelected:k,onNextScene:T})}),(0,a.jsx)("div",{className:"--guide",children:(0,a.jsxs)("div",{className:"--center",children:[(0,a.jsx)("i",{"aria-hidden":!0,className:"fas fa-info-circle"}),(0,a.jsx)("small",{children:"Double click into your scene to create comment"})]})}),Z&&(0,a.jsx)(v,{visible:Z,onCancel:U,onCreateCommentScene:F})]})});e.default=_},88023:function(n,e,t){t.d(e,{FX:function(){return d},bx:function(){return l},gn:function(){return u},um:function(){return c}});var o=t(82729),i=t(72071),r=t(94589),a=t(24018);function _templateObject(){var n=(0,o._)(["\n  width: 30%;\n  max-width: 360px;\n  height: 100%;\n  background: var(--color-dark);\n  padding: 12px;\n  position: relative;\n  .--guide {\n    padding: 8px 12px;\n    background: var(--color-dark);\n    color: #fff;\n    position: absolute;\n    bottom: 0;\n    left: 0;\n    width: 100%;\n    max-width: 100%;\n    border-top: 1px solid rgba(255, 255, 255, 0.2);\n    line-height: initial;\n    .--center {\n      display: flex;\n      width: max-content;\n      i {\n        margin-right: 8px;\n      }\n    }\n  }\n"]);return _templateObject=function(){return n},n}function _templateObject1(){var n=(0,o._)(["\n  color: #fff;\n  height: 100%;\n  .--header {\n    .--title {\n      font-weight: 600;\n      .ant-typography {\n        color: #fff;\n        font-size: 15px;\n        white-space: nowrap;\n        overflow: hidden;\n        text-overflow: ellipsis;\n      }\n    }\n  }\n  .--search {\n    margin: 8px 0;\n  }\n  .--body {\n    height: calc(100% - 100px);\n    overflow: auto;\n    .--list {\n      height: 100%;\n      .--item {\n        display: flex;\n        align-items: center;\n        padding: 10px 0;\n        cursor: pointer;\n        position: relative;\n        background: var(--color-dark-2);\n        color: #fff;\n        margin-bottom: 6px;\n        border-radius: 8px;\n        padding: 8px 4px;\n        transition: all 0.15s ease-out;\n        @media (hover: hover) and (pointer: fine) {\n          &:hover {\n            background: var(--color-dark-3);\n          }\n        }\n        .--left {\n          width: 140px;\n          margin-left: 4px;\n          .--thumb {\n            border-radius: 6px;\n            width: 100%;\n            height: 54px;\n            overflow: hidden;\n            img {\n              object-fit: cover;\n              width: 100%;\n              height: 100%;\n            }\n          }\n          margin-right: 12px;\n        }\n        .--right {\n          width: 100%;\n          .--info {\n            .mainTxt {\n              font-weight: 600;\n              display: -webkit-box;\n              -webkit-line-clamp: 2;\n              -webkit-box-orient: vertical;\n              overflow: hidden;\n            }\n            .subTxt {\n              opacity: 0.5;\n            }\n          }\n        }\n        &.active {\n          background: #fff;\n          color: initial;\n          .--left {\n            .--thumb {\n              box-shadow: 0 0 0 4px var(--color-theme);\n            }\n          }\n        }\n        &:not(:last-child) {\n        }\n      }\n    }\n  }\n"]);return _templateObject1=function(){return n},n}function _templateObject2(){var n=(0,o._)(["\n  width: 100%;\n  height: 100%;\n  color: #fff;\n  .--header {\n    width: 100%;\n    display: flex;\n    .--left {\n      padding-right: 8px;\n      i {\n        cursor: pointer;\n        width: 24px;\n        height: 24px;\n        display: flex;\n        align-items: center;\n        justify-content: center;\n        border-radius: 50%;\n        background: var(--color-dark-2);\n      }\n    }\n    .--right {\n      width: calc(100% - 40px);\n      .--title {\n        width: 100%;\n        font-weight: 600;\n        .ant-typography {\n          color: #fff;\n          font-size: 15px;\n        }\n      }\n      .--select {\n        width: max-content;\n        max-width: 100%;\n        background: var(--color-dark-2);\n        padding: 0px 4px;\n        border-radius: 6px;\n        .ant-select {\n          width: auto;\n          max-width: 100%;\n          &-single {\n            &.ant-select-show-arrow .ant-select-selection-item {\n              padding-right: 32px;\n            }\n          }\n          &-selector {\n            padding: 0;\n          }\n          color: #fff;\n          &-arrow {\n            color: #fff;\n            margin-left: 4px;\n          }\n        }\n      }\n    }\n  }\n\n  .--body {\n    height: 100%;\n    .ant-tabs {\n      .ant-tabs-ink-bar {\n        background: var(--color-theme);\n      }\n      color: #fff;\n      &-nav {\n        &:before {\n          border-bottom: 1px solid rgba(255, 255, 255, 0.25);\n        }\n        &-wrap,\n        &-list {\n          width: 100%;\n        }\n      }\n      .ant-tabs-tab-active {\n        color: var(--color-theme);\n      }\n      &-tab {\n        width: 100%;\n        + .ant-tabs-tab {\n          margin: 0;\n        }\n        &-btn {\n          width: 100%;\n          text-align: center;\n          color: inherit;\n        }\n      }\n    }\n    .--list {\n      max-height: 100%;\n      overflow: auto;\n      .--item {\n        display: flex;\n        padding: 12px 0;\n        .stt {\n          width: 24px;\n          height: 24px;\n          background: var(--color-dark-2);\n          color: #fff;\n          border-radius: 50%;\n          margin: 8px 8px 0 0;\n          font-size: 12px;\n          display: flex;\n          align-items: center;\n          justify-content: center;\n          flex: 0 0 auto;\n        }\n        "," {\n          .info {\n            cursor: pointer;\n            span {\n              margin-left: 8px;\n            }\n          }\n        }\n        .checkbox {\n          margin-left: 12px;\n          .ant-checkbox-inner {\n            background-color: unset;\n          }\n        }\n        &:not(:last-child) {\n          border-bottom: 1px solid rgba(255, 255, 255, 0.15);\n        }\n      }\n    }\n  }\n"]);return _templateObject2=function(){return n},n}function _templateObject3(){var n=(0,o._)([""]);return _templateObject3=function(){return n},n}function _templateObject4(){var n=(0,o._)(["\n  ",";\n  color: inherit;\n  img {\n    width: 48px;\n    height: auto;\n    flex: 0 0 auto;\n    border-radius: 4px;\n    margin-right: 0.5rem;\n  }\n"]);return _templateObject4=function(){return n},n}var c=r.ZP.div.withConfig({displayName:"styled__CollaborationWrapper",componentId:"Panoee__sc-3cb5401e-0"})(_templateObject()),l=r.ZP.div.withConfig({displayName:"styled__ListSceneWrapper",componentId:"Panoee__sc-3cb5401e-1"})(_templateObject1()),d=r.ZP.div.withConfig({displayName:"styled__ListCommentWrapper",componentId:"Panoee__sc-3cb5401e-2"})(_templateObject2(),a.s2);r.ZP.div.withConfig({displayName:"styled__DetailCommentWrapper",componentId:"Panoee__sc-3cb5401e-3"})(_templateObject3());var u=r.ZP.div.withConfig({displayName:"styled__SelectOptionWithImageWrapper",componentId:"Panoee__sc-3cb5401e-4"})(_templateObject4(),i.i3)},41974:function(n,e,t){var o=t(72253),i=t(14932),r=t(67294),a=t(25617),c=t(61935),l=t(1214);e.Z=function(){var n=(0,a.I0)(),e=(0,a.v9)(c.U9),t=(0,a.v9)(c.Y2),d=(0,r.useMemo)(function(){return e.findIndex(function(n){return(null==t?void 0:t.id)===n.id})},[e,t]),u=(0,r.useMemo)(function(){return e.length?e[d===e.length-1?0:d+1]:void 0},[d,e]),s=(0,r.useCallback)(function(r){r&&e.find(function(n){return n.id===r.id})&&(n(l.Nw.setSceneSelected((0,i._)((0,o._)({},r),{_id:r.id}))),n(l.Nw.setprevSceneSelected(t||null)))},[t,e,n]);return(0,r.useMemo)(function(){return{nextScene:u,onNextScene:s}},[u,s])}}}]);
//# sourceMappingURL=3060.f54c1968cfc405db.js.map