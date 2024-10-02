"use strict";(self.webpackChunk_N_E=self.webpackChunk_N_E||[]).push([[9220],{9220:function(e,t,r){r.r(t),r.d(t,{_rs:function(){return C},default:function(){return P}});var n=r(87462),i=r(67294),o=r(50344);r(80334);var s=r(1413),c=r(71002),a=r(34203),u=r(42550),h=i.createContext(null),f=function(){if("undefined"!=typeof Map)return Map;function getIndex(e,t){var r=-1;return e.some(function(e,n){return e[0]===t&&(r=n,!0)}),r}return function(){function class_1(){this.__entries__=[]}return Object.defineProperty(class_1.prototype,"size",{get:function(){return this.__entries__.length},enumerable:!0,configurable:!0}),class_1.prototype.get=function(e){var t=getIndex(this.__entries__,e),r=this.__entries__[t];return r&&r[1]},class_1.prototype.set=function(e,t){var r=getIndex(this.__entries__,e);~r?this.__entries__[r][1]=t:this.__entries__.push([e,t])},class_1.prototype.delete=function(e){var t=this.__entries__,r=getIndex(t,e);~r&&t.splice(r,1)},class_1.prototype.has=function(e){return!!~getIndex(this.__entries__,e)},class_1.prototype.clear=function(){this.__entries__.splice(0)},class_1.prototype.forEach=function(e,t){void 0===t&&(t=null);for(var r=0,n=this.__entries__;r<n.length;r++){var i=n[r];e.call(t,i[1],i[0])}},class_1}()}(),l="undefined"!=typeof window&&"undefined"!=typeof document&&window.document===document,d=void 0!==r.g&&r.g.Math===Math?r.g:"undefined"!=typeof self&&self.Math===Math?self:"undefined"!=typeof window&&window.Math===Math?window:Function("return this")(),v="function"==typeof requestAnimationFrame?requestAnimationFrame.bind(d):function(e){return setTimeout(function(){return e(Date.now())},1e3/60)},p=["top","right","bottom","left","width","height","size","weight"],b="undefined"!=typeof MutationObserver,_=function(){function ResizeObserverController(){this.connected_=!1,this.mutationEventsAdded_=!1,this.mutationsObserver_=null,this.observers_=[],this.onTransitionEnd_=this.onTransitionEnd_.bind(this),this.refresh=function(e,t){var r=!1,n=!1,i=0;function resolvePending(){r&&(r=!1,e()),n&&proxy()}function timeoutCallback(){v(resolvePending)}function proxy(){var e=Date.now();if(r){if(e-i<2)return;n=!0}else r=!0,n=!1,setTimeout(timeoutCallback,20);i=e}return proxy}(this.refresh.bind(this),0)}return ResizeObserverController.prototype.addObserver=function(e){~this.observers_.indexOf(e)||this.observers_.push(e),this.connected_||this.connect_()},ResizeObserverController.prototype.removeObserver=function(e){var t=this.observers_,r=t.indexOf(e);~r&&t.splice(r,1),!t.length&&this.connected_&&this.disconnect_()},ResizeObserverController.prototype.refresh=function(){this.updateObservers_()&&this.refresh()},ResizeObserverController.prototype.updateObservers_=function(){var e=this.observers_.filter(function(e){return e.gatherActive(),e.hasActive()});return e.forEach(function(e){return e.broadcastActive()}),e.length>0},ResizeObserverController.prototype.connect_=function(){l&&!this.connected_&&(document.addEventListener("transitionend",this.onTransitionEnd_),window.addEventListener("resize",this.refresh),b?(this.mutationsObserver_=new MutationObserver(this.refresh),this.mutationsObserver_.observe(document,{attributes:!0,childList:!0,characterData:!0,subtree:!0})):(document.addEventListener("DOMSubtreeModified",this.refresh),this.mutationEventsAdded_=!0),this.connected_=!0)},ResizeObserverController.prototype.disconnect_=function(){l&&this.connected_&&(document.removeEventListener("transitionend",this.onTransitionEnd_),window.removeEventListener("resize",this.refresh),this.mutationsObserver_&&this.mutationsObserver_.disconnect(),this.mutationEventsAdded_&&document.removeEventListener("DOMSubtreeModified",this.refresh),this.mutationsObserver_=null,this.mutationEventsAdded_=!1,this.connected_=!1)},ResizeObserverController.prototype.onTransitionEnd_=function(e){var t=e.propertyName,r=void 0===t?"":t;p.some(function(e){return!!~r.indexOf(e)})&&this.refresh()},ResizeObserverController.getInstance=function(){return this.instance_||(this.instance_=new ResizeObserverController),this.instance_},ResizeObserverController.instance_=null,ResizeObserverController}(),defineConfigurable=function(e,t){for(var r=0,n=Object.keys(t);r<n.length;r++){var i=n[r];Object.defineProperty(e,i,{value:t[i],enumerable:!1,writable:!1,configurable:!0})}return e},getWindowOf=function(e){return e&&e.ownerDocument&&e.ownerDocument.defaultView||d},g=createRectInit(0,0,0,0);function toFloat(e){return parseFloat(e)||0}function getBordersSize(e){for(var t=[],r=1;r<arguments.length;r++)t[r-1]=arguments[r];return t.reduce(function(t,r){return t+toFloat(e["border-"+r+"-width"])},0)}var m="undefined"!=typeof SVGGraphicsElement?function(e){return e instanceof getWindowOf(e).SVGGraphicsElement}:function(e){return e instanceof getWindowOf(e).SVGElement&&"function"==typeof e.getBBox};function createRectInit(e,t,r,n){return{x:e,y:t,width:r,height:n}}var O=function(){function ResizeObservation(e){this.broadcastWidth=0,this.broadcastHeight=0,this.contentRect_=createRectInit(0,0,0,0),this.target=e}return ResizeObservation.prototype.isActive=function(){var e=function(e){if(!l)return g;if(m(e)){var t;return createRectInit(0,0,(t=e.getBBox()).width,t.height)}return function(e){var t=e.clientWidth,r=e.clientHeight;if(!t&&!r)return g;var n=getWindowOf(e).getComputedStyle(e),i=function(e){for(var t={},r=0,n=["top","right","bottom","left"];r<n.length;r++){var i=n[r],o=e["padding-"+i];t[i]=toFloat(o)}return t}(n),o=i.left+i.right,s=i.top+i.bottom,c=toFloat(n.width),a=toFloat(n.height);if("border-box"===n.boxSizing&&(Math.round(c+o)!==t&&(c-=getBordersSize(n,"left","right")+o),Math.round(a+s)!==r&&(a-=getBordersSize(n,"top","bottom")+s)),e!==getWindowOf(e).document.documentElement){var u=Math.round(c+o)-t,h=Math.round(a+s)-r;1!==Math.abs(u)&&(c-=u),1!==Math.abs(h)&&(a-=h)}return createRectInit(i.left,i.top,c,a)}(e)}(this.target);return this.contentRect_=e,e.width!==this.broadcastWidth||e.height!==this.broadcastHeight},ResizeObservation.prototype.broadcastRect=function(){var e=this.contentRect_;return this.broadcastWidth=e.width,this.broadcastHeight=e.height,e},ResizeObservation}(),ResizeObserverEntry=function(e,t){var r,n,i,o,s,c=(r=t.x,n=t.y,i=t.width,o=t.height,defineConfigurable(s=Object.create(("undefined"!=typeof DOMRectReadOnly?DOMRectReadOnly:Object).prototype),{x:r,y:n,width:i,height:o,top:n,right:r+i,bottom:o+n,left:r}),s);defineConfigurable(this,{target:e,contentRect:c})},y=function(){function ResizeObserverSPI(e,t,r){if(this.activeObservations_=[],this.observations_=new f,"function"!=typeof e)throw TypeError("The callback provided as parameter 1 is not a function.");this.callback_=e,this.controller_=t,this.callbackCtx_=r}return ResizeObserverSPI.prototype.observe=function(e){if(!arguments.length)throw TypeError("1 argument required, but only 0 present.");if("undefined"!=typeof Element&&Element instanceof Object){if(!(e instanceof getWindowOf(e).Element))throw TypeError('parameter 1 is not of type "Element".');var t=this.observations_;t.has(e)||(t.set(e,new O(e)),this.controller_.addObserver(this),this.controller_.refresh())}},ResizeObserverSPI.prototype.unobserve=function(e){if(!arguments.length)throw TypeError("1 argument required, but only 0 present.");if("undefined"!=typeof Element&&Element instanceof Object){if(!(e instanceof getWindowOf(e).Element))throw TypeError('parameter 1 is not of type "Element".');var t=this.observations_;t.has(e)&&(t.delete(e),t.size||this.controller_.removeObserver(this))}},ResizeObserverSPI.prototype.disconnect=function(){this.clearActive(),this.observations_.clear(),this.controller_.removeObserver(this)},ResizeObserverSPI.prototype.gatherActive=function(){var e=this;this.clearActive(),this.observations_.forEach(function(t){t.isActive()&&e.activeObservations_.push(t)})},ResizeObserverSPI.prototype.broadcastActive=function(){if(this.hasActive()){var e=this.callbackCtx_,t=this.activeObservations_.map(function(e){return new ResizeObserverEntry(e.target,e.broadcastRect())});this.callback_.call(e,t,e),this.clearActive()}},ResizeObserverSPI.prototype.clearActive=function(){this.activeObservations_.splice(0)},ResizeObserverSPI.prototype.hasActive=function(){return this.activeObservations_.length>0},ResizeObserverSPI}(),w="undefined"!=typeof WeakMap?new WeakMap:new f,ResizeObserver=function ResizeObserver(e){if(!(this instanceof ResizeObserver))throw TypeError("Cannot call a class as a function.");if(!arguments.length)throw TypeError("1 argument required, but only 0 present.");var t=_.getInstance(),r=new y(e,t,this);w.set(this,r)};["observe","unobserve","disconnect"].forEach(function(e){ResizeObserver.prototype[e]=function(){var t;return(t=w.get(this))[e].apply(t,arguments)}});var R=void 0!==d.ResizeObserver?d.ResizeObserver:ResizeObserver,E=new Map,z=new R(function(e){e.forEach(function(e){var t,r=e.target;null===(t=E.get(r))||void 0===t||t.forEach(function(e){return e(r)})})}),C=null,M=r(15671),x=r(43144),W=r(60136),I=r(18486),k=function(e){(0,W.Z)(DomWrapper,e);var t=(0,I.Z)(DomWrapper);function DomWrapper(){return(0,M.Z)(this,DomWrapper),t.apply(this,arguments)}return(0,x.Z)(DomWrapper,[{key:"render",value:function(){return this.props.children}}]),DomWrapper}(i.Component),S=i.forwardRef(function(e,t){var r=e.children,n=e.disabled,o=i.useRef(null),f=i.useRef(null),l=i.useContext(h),d="function"==typeof r,v=d?r(o):r,p=i.useRef({width:-1,height:-1,offsetWidth:-1,offsetHeight:-1}),b=!d&&i.isValidElement(v)&&(0,u.Yr)(v),_=b?v.ref:null,g=(0,u.x1)(_,o),getDom=function(){var e;return(0,a.ZP)(o.current)||(o.current&&"object"===(0,c.Z)(o.current)?(0,a.ZP)(null===(e=o.current)||void 0===e?void 0:e.nativeElement):null)||(0,a.ZP)(f.current)};i.useImperativeHandle(t,function(){return getDom()});var m=i.useRef(e);m.current=e;var O=i.useCallback(function(e){var t=m.current,r=t.onResize,n=t.data,i=e.getBoundingClientRect(),o=i.width,c=i.height,a=e.offsetWidth,u=e.offsetHeight,h=Math.floor(o),f=Math.floor(c);if(p.current.width!==h||p.current.height!==f||p.current.offsetWidth!==a||p.current.offsetHeight!==u){var d={width:h,height:f,offsetWidth:a,offsetHeight:u};p.current=d;var v=a===Math.round(o)?o:a,b=u===Math.round(c)?c:u,_=(0,s.Z)((0,s.Z)({},d),{},{offsetWidth:v,offsetHeight:b});null==l||l(_,e,n),r&&Promise.resolve().then(function(){r(_,e)})}},[]);return i.useEffect(function(){var e=getDom();return e&&!n&&(E.has(e)||(E.set(e,new Set),z.observe(e)),E.get(e).add(O)),function(){E.has(e)&&(E.get(e).delete(O),E.get(e).size||(z.unobserve(e),E.delete(e)))}},[o.current,n]),i.createElement(k,{ref:f},b?i.cloneElement(v,{ref:g}):v)}),A=i.forwardRef(function(e,t){var r=e.children;return("function"==typeof r?[r]:(0,o.Z)(r)).map(function(r,o){var s=(null==r?void 0:r.key)||"".concat("rc-observer-key","-").concat(o);return i.createElement(S,(0,n.Z)({},e,{key:s,ref:0===o?t:void 0}),r)})});A.Collection=function(e){var t=e.children,r=e.onBatchResize,n=i.useRef(0),o=i.useRef([]),s=i.useContext(h),c=i.useCallback(function(e,t,i){n.current+=1;var c=n.current;o.current.push({size:e,element:t,data:i}),Promise.resolve().then(function(){c===n.current&&(null==r||r(o.current),o.current=[])}),null==s||s(e,t,i)},[r,s]);return i.createElement(h.Provider,{value:c},t)};var P=A}}]);
//# sourceMappingURL=9220.84492b7e5805b801.js.map