"use strict";(self.webpackChunk_N_E=self.webpackChunk_N_E||[]).push([[8306],{8306:function(n,o,e){e.r(o);var l=e(72253),t=e(14932),r=e(91309),i=e(85893),u=e(67294),a=e(5152),c=e.n(a),f=e(33433),s=e(58673),d=c()(function(){return e.e(8481).then(e.bind(e,8481))},{loadableGenerated:{webpack:function(){return[8481]}}}),v=(0,u.memo)(function(n){var o=n.onChangeScene,e=(0,u.useRef)(null),a=(0,r._)((0,s.gU)("state"),2),c=a[0],v=a[1],p=(0,f.O)({floorplanRef:e}),b=p.listFloorplan,g=p.markerSelected,k=p.floorplanSelected,C=p.configFloorplan,m=p.onChangeFloorplan,_=(0,u.useCallback)(function(){return v(function(n){return(0,t._)((0,l._)({},n),{isVisibleFloorplan:!1})})},[v]);return c.isVisibleFloorplan?(0,i.jsx)(d,{visible:c.isVisibleFloorplan,listFloorplan:b,markerSelected:g,floorplanSelected:k,configFloorplan:C,onChangeFloorplan:m,onChangeScene:o,onCancel:_}):null});o.default=v},33433:function(n,o,e){e.d(o,{O:function(){return useEventFloorplan}});var l=e(72253),t=e(14932),r=e(91309),i=e(67294),u=e(25617),a=e(58673),c=e(61935),useEventFloorplan=function(n){var o=n.floorplanRef,e=(0,u.v9)(c.f5),f=(0,u.v9)(c.Y2),s=(0,u.v9)(c.u$),d=(0,r._)((0,a.gU)("state"),2)[1],v=(0,r._)((0,i.useState)(void 0),2),p=v[0],b=v[1];(0,i.useEffect)(function(){b(e&&(e.filter(function(n){var o;return(null===(o=n.markers)||void 0===o?void 0:o.filter(function(n){return n.target_scene_id===(null==f?void 0:f.id)}).length)>0})[0]||e[0])||void 0)},[e,null==f?void 0:f.id]);var g=(0,i.useMemo)(function(){var n;return(null==p?void 0:null===(n=p.markers)||void 0===n?void 0:n.filter(function(n){return n.target_scene_id===(null==f?void 0:f.id)})[0])||void 0},[p,null==f?void 0:f.id]),k=(0,i.useMemo)(function(){var n;return(null==s?void 0:null===(n=s.floorplan)||void 0===n?void 0:n.type)==="panel"?null==s?void 0:s.floorplan:void 0},[null==s?void 0:s.floorplan]),C=(0,i.useMemo)(function(){var n;return(null==s?void 0:null===(n=s.floorplan)||void 0===n?void 0:n.type)==="box"?(0,l._)({},{offsetBottom:48,offsetLeft:10,offsetRight:10,offsetTop:10},null==s?void 0:s.floorplan):void 0},[null==s?void 0:s.floorplan]),m=(0,r._)((0,i.useState)(!1),2),_=m[0],F=m[1],h=(0,i.useCallback)(function(){d(function(n){return(0,t._)((0,l._)({},n),{isVisibleFloorplan:!1})})},[d]),S=(0,i.useCallback)(function(){return F(!0)},[]),E=(0,i.useCallback)(function(){return F(!1)},[]),I=(0,i.useCallback)(function(){var n;return null===(n=o.current)||void 0===n?void 0:n.getInstance().zoomIn()},[o]),y=(0,i.useCallback)(function(){var n;return null===(n=o.current)||void 0===n?void 0:n.getInstance().zoomOut()},[o]),M=(0,i.useCallback)(function(){var n,e,l,t=null===(n=o.current)||void 0===n?void 0:n.getInstance().state.scale;(null==g?void 0:g.id)&&(null===(l=o.current)||void 0===l||null===(e=l.getInstance())||void 0===e||e.zoomToElement(g.id,t||void 0))},[o,g]),O=(0,i.useCallback)(function(n){var o=n.type,l=e.filter(function(n){return n.id===o})[0];l&&b(l)},[e]);return(0,i.useMemo)(function(){return{visiblePopup:_,sceneSelected:f,listFloorplan:e,markerSelected:g,configFloorplan:s,configDisplayBox:C,floorplanSelected:p,configDisplayPanel:k,onCenterToMarkerActive:M,onChangeFloorplan:O,onCloseFloorplan:h,onClosePopup:E,onOpenPopup:S,onZoomOut:y,onZoomIn:I}},[_,f,e,g,s,C,p,k,M,O,h,E,S,y,I])}}}]);
//# sourceMappingURL=8306.f79029458b5dda25.js.map