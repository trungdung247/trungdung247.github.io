"use strict";(self.webpackChunk_N_E=self.webpackChunk_N_E||[]).push([[5133],{35133:function(e,n,a){a.r(n);var l=a(91309),o=a(85893),i=a(67294),t=a(97616),r=a(5152),u=a.n(r),c=a(58673),s=a(98075),d=a(25617),v=a(61935),f=a(94055),p=a(4259),m=a(60413),k=a(15924),g=u()(function(){return a.e(7385).then(a.bind(a,12851))},{loadableGenerated:{webpack:function(){return[12851]}}}),h=(0,i.memo)(function(e){var n,a,r,u,h=e.onChangeScene,C=k.sk?{}:window.languages||{},b=(0,i.useRef)(null),x=(0,d.v9)(v.g5),M=(0,d.v9)(v.AA),_=(0,l._)((0,c.gU)("state"),1)[0],j=(0,s.m)(),S=j.mapData,N=j.configMap,y=j.visiblePopup,w=j.sceneSelected,E=j.markerSelected,P=j.configDisplayPanel,T=j.onCloseMap,D=j.onOpenPopup,R=j.onClosePopup,I=(0,i.useCallback)(function(){var e;null===(e=b.current)||void 0===e||e.onFitBounds()},[]),A=(0,i.useCallback)(function(){var e;null===(e=b.current)||void 0===e||e.onPanToMarker(E)},[E]);return(0,o.jsxs)(p.XJ,{bgColor:(null==N?void 0:N.bgColor)||t.xr.bgColor||"#000",position:(null==P?void 0:P.position)||"left",className:"".concat(_.isVisibleMap?"":"hide"," ").concat((null==M?void 0:M.selected)==="basekrpano"?"basekrpano":(null==M?void 0:M.selected)==="custom1"?"custom1":(null==M?void 0:M.selected)==="wall"?"wall":"default"),children:[(0,o.jsx)("div",{className:"main",children:(0,o.jsx)(m.Z,{ref:b,mapData:S,sceneSelected:w,markerSelected:E,configMap:N,onChangeScene:h})}),(0,o.jsxs)(p.Nh,{children:[(0,o.jsx)("div",{className:"--left"}),(0,o.jsxs)("div",{className:"--right",children:[(0,o.jsx)(f.default,{title:null===(n=C[x])||void 0===n?void 0:n.actionMarkerCenter,placement:"top",children:(0,o.jsx)("div",{className:"action--item",onClick:A,children:(0,o.jsx)("i",{"aria-hidden":!0,className:"far fa-crosshairs"})})}),(0,o.jsx)(f.default,{title:null===(a=C[x])||void 0===a?void 0:a.actionMarkerCover,placement:"top",children:(0,o.jsx)("div",{className:"action--item",onClick:I,children:(0,o.jsx)("i",{"aria-hidden":!0,className:"far fa-ball-pile"})})}),(0,o.jsx)(f.default,{title:null===(r=C[x])||void 0===r?void 0:r.actionMarkerExpand,placement:"top",children:(0,o.jsx)("div",{className:"action--item",onClick:D,children:(0,o.jsx)("i",{"aria-hidden":!0,className:"far fa-expand"})})}),(0,o.jsx)(f.default,{title:null===(u=C[x])||void 0===u?void 0:u.actionMarkerClose,placement:"top",children:(0,o.jsx)("div",{className:"action--item",onClick:T,children:(0,o.jsx)("i",{"aria-hidden":!0,className:"far fa-times"})})})]})]}),y&&(0,o.jsx)(g,{visible:y,markerSelected:E,mapData:S,configMap:N,onChangeScene:h,onCancel:R})]})});n.default=h},60413:function(e,n,a){var l=a(72253),o=a(91309),i=a(85893),t=a(67294),r=a(25617),u=a(5152),c=a.n(u),s=a(97616),d=a(25827),v=a(61935),f=a(4259),p=a(46118),m=c()(function(){return a.e(3950).then(a.bind(a,13950))},{loadableGenerated:{webpack:function(){return[13950]}}}),k=(0,t.forwardRef)(function(e,n){var a=e.configMap,u=e.sceneSelected,c=e.mapData,k=e.markerSelected,g=e.onChangeScene,h=(0,t.useRef)(null),C=(0,o._)((0,t.useState)(!1),2),b=C[0],x=C[1],M=(0,r.v9)(v.U9),_=(0,t.useMemo)(function(){return(0,l._)({},s.xr.radar,null==a?void 0:a.radar)},[null==a?void 0:a.radar]),j=(0,t.useMemo)(function(){return(0,l._)({},s.xr.marker,null==a?void 0:a.marker)},[null==a?void 0:a.marker]),S=(0,t.useMemo)(function(){try{return(null==a?void 0:a.mapStyle)?JSON.parse((null==a?void 0:a.mapStyle)||"[]"):[]}catch(e){return[]}},[a]),N=(0,t.useCallback)(function(){var e=window;if(e.google){var n,a=new e.google.maps.LatLngBounds;null==c||null===(n=c.markers)||void 0===n||n.forEach(function(e){a.extend({lat:e.lat,lng:e.lng})}),h.current.fitBounds(a)}},[c]),y=(0,t.useCallback)(function(e){var n,a;null===(n=h.current)||void 0===n||n.panTo({lat:null==e?void 0:e.lat,lng:null==e?void 0:e.lng}),null===(a=h.current)||void 0===a||a.setZoom(18)},[]),w=(0,t.useCallback)(function(e,n){var a;if(null==n?void 0:null===(a=n.marker)||void 0===a?void 0:a.target_scene_id){var l=M.filter(function(e){var a;return e.id===(null==n?void 0:null===(a=n.marker)||void 0===a?void 0:a.target_scene_id)})[0];l&&g(l)}},[M,g]);return(0,t.useEffect)(function(){b&&(k?y(k):N())},[b,k]),(0,t.useImperativeHandle)(n,function(){return{onFitBounds:function(){return N()},onPanToMarker:function(e){return y(e)}}}),(0,i.jsx)(f.pu,{children:(0,i.jsx)(d.ZP,{bootstrapURLKeys:{key:p.env.NEXT_PUBLIC_GOOGLE_KEY||"AIzaSyAcwcJSrJ4_PqEIJoQCtC5RP988Eka0YE8"},draggable:!0,defaultCenter:{lat:0,lng:0},defaultZoom:12,options:function(){return{minZoom:2,panControl:!1,mapTypeControl:!1,scrollwheel:!0,streetViewControl:!1,mapTypeId:null==a?void 0:a.mapType,disableDefaultUI:!0,styles:S}},scrollWheelZoom:"center",yesIWantToUseGoogleMapApiInternals:!0,onGoogleApiLoaded:function(e){var n=e.map;h.current=n,x(!0)},onChildClick:w,children:null==c?void 0:c.markers.map(function(e){return(0,i.jsx)(m,{lat:e.lat,lng:e.lng,marker:e,configRadar:_,configMarker:j,northRadar:(null==u?void 0:u.north_ath)||0,isTurnOnRadar:!!_.isEnabled,isActive:(null==k?void 0:k.id)===e.id},e.id)})})})});n.Z=(0,t.memo)(k)},98075:function(e,n,a){a.d(n,{m:function(){return useEventMap}});var l=a(72253),o=a(14932),i=a(91309),t=a(67294),r=a(25617),u=a(58673),c=a(61935),useEventMap=function(){var e=(0,r.v9)(c.CE),n=(0,r.v9)(c.F7),a=(0,r.v9)(c.Y2),s=(0,i._)((0,u.gU)("state"),2)[1],d=(0,t.useMemo)(function(){var n;return(null==e?void 0:null===(n=e.markers)||void 0===n?void 0:n.filter(function(e){return e.target_scene_id===(null==a?void 0:a.id)})[0])||void 0},[e,null==a?void 0:a.id]),v=(0,t.useMemo)(function(){var e;return(null==n?void 0:null===(e=n.map)||void 0===e?void 0:e.type)==="panel"?null==n?void 0:n.map:void 0},[null==n?void 0:n.map]),f=(0,t.useMemo)(function(){var e;return(null==n?void 0:null===(e=n.map)||void 0===e?void 0:e.type)==="box"?(0,l._)({},{offsetBottom:48,offsetLeft:10,offsetRight:10,offsetTop:10},null==n?void 0:n.map):void 0},[null==n?void 0:n.map]),p=(0,i._)((0,t.useState)(!1),2),m=p[0],k=p[1],g=(0,t.useCallback)(function(){s(function(e){return(0,o._)((0,l._)({},e),{isVisibleMap:!1})})},[s]),h=(0,t.useCallback)(function(){return k(!0)},[]),C=(0,t.useCallback)(function(){return k(!1)},[]);return(0,t.useMemo)(function(){return{visiblePopup:m,sceneSelected:a,markerSelected:d,configMap:n,configDisplayBox:f,mapData:e,configDisplayPanel:v,onCloseMap:g,onClosePopup:C,onOpenPopup:h}},[m,a,d,n,f,e,v,g,C,h])}}}]);
//# sourceMappingURL=5133.b2072f0e7bf0a577.js.map