"use strict";(self.webpackChunk_N_E=self.webpackChunk_N_E||[]).push([[886],{90886:function(e,n,s){s.r(n),s.d(n,{ListScene:function(){return u}});var i=s(91309),c=s(85893),t=s(61935),o=s(15924),a=s(67294),l=s(25617),r=s(35530),u=(0,a.memo)(function(e){var n=e.isShowListScene,s=e.setIsShowListScene,u=e.onChangeScene,d=(0,a.useRef)(null),f=(0,a.useRef)(null),h=(0,l.v9)(t.Fr),m=(0,l.v9)(t.ji),v=(0,l.v9)(t.Y2),p=(0,l.v9)(t.AA),S=(0,i._)((0,a.useState)([]),2),g=S[0],x=S[1],N=(0,a.useCallback)(function(e){x((0,o.tl)(g,e))},[g]),onOpenListScene=function(e){e.stopPropagation(),s(!0)},onCloseListScene=function(e){e.stopPropagation(),s(!1)};return(0,a.useEffect)(function(){d.current&&f.current&&!n&&d.current.scrollTo({top:f.current.offsetTop-50,behavior:"smooth"})},[n,null==v?void 0:v.id]),(0,c.jsxs)(r.bx,{id:"themeListScene",onMouseOver:onOpenListScene,onMouseLeave:onCloseListScene,className:"".concat((null==p?void 0:p.selected)==="defaultNew"?"variant-palette":""," leftSidebar ").concat(n?"active":""),onTouchStart:onCloseListScene,children:[(0,c.jsx)("div",{className:"closeBtn ".concat(n?"show":"hide"),onClick:onCloseListScene,children:(0,c.jsx)("i",{"aria-hidden":!0,className:"fal fa-times"})}),(0,c.jsx)("div",{className:"galleryDots",onClick:onOpenListScene,children:m.map(function(e){return(0,c.jsx)("span",{className:e.id===(null==v?void 0:v.id)?"active":""},e.id)})}),(0,c.jsx)("div",{className:"gallery",ref:d,onTouchStart:function(e){e.stopPropagation()},children:h.map(function(e){return(0,c.jsxs)("div",{className:"galleryGroup",children:["Uncategory"!==e.name&&(0,c.jsxs)("div",{className:"galleryGroupName",onClick:function(n){n.stopPropagation(),N(e.id)},children:[(0,c.jsx)("h5",{children:e.name}),(0,c.jsx)("i",{className:"fal fa-angle-".concat(g.indexOf(e.id)>-1?"up":"down")})]}),!!e.scenes.length&&(0,c.jsx)("div",{className:"galleryThumb ".concat(g.indexOf(e.id)>-1?"hide":"show"),children:e.scenes.map(function(e){var n;return(0,c.jsxs)("div",{className:"galleryImg ".concat((null==v?void 0:v.id)===e.id?"active":""),ref:function(n){(null==v?void 0:v.id)===e.id&&(f.current=n)},onClick:function(n){n.stopPropagation(),u(e)},children:[(0,c.jsx)("img",{src:e.screenshot||(null===(n=e.media)||void 0===n?void 0:n.src_thumb)||"",alt:""}),(0,c.jsx)("h2",{className:"--menuSceneTitle",children:e.title})]},e.id)})})]},e.id)})})]})});n.default=u}}]);
//# sourceMappingURL=886.afc7b11187f1835a.js.map