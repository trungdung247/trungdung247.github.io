"use strict";(self.webpackChunk_N_E=self.webpackChunk_N_E||[]).push([[1825],{46663:function(n,t,e){e.d(t,{M:function(){return a},v:function(){return i}});var r=e(82729),o=e(94589);function _templateObject(){var n=(0,r._)(["\n  color: inherit !important;\n  width: calc(42px * ",");\n  height: calc(42px * ",");\n  max-width: 120px;\n  max-height: 120px;\n  display: flex;\n  align-items: center;\n  padding: 0.75rem 0.5rem;\n  cursor: pointer;\n  transition: var(--transition-regular);\n  border-radius: 8px;\n  .--symbol {\n    font-size: 1.25rem;\n    margin-right: 0.5rem;\n    object-fit: contain;\n    display: inline-flex;\n    justify-content: center;\n  }\n  .--arrow {\n    position: absolute;\n    right: 1rem;\n    transform: translateX(1rem);\n    opacity: 0;\n    transition: var(--transition-smooth);\n  }\n  span {\n    max-width: 160px;\n    white-space: nowrap;\n    overflow: hidden;\n    text-overflow: ellipsis;\n    left: 100%;\n    transform: translateX(calc(42px * ",")) scale(0.9);\n  }\n  .--symbol {\n    width: 80%;\n  }\n  i {\n    font-size: calc(14px * ",") !important;\n  }\n  @media (hover: hover) and (pointer: fine) {\n    &:hover {\n      background: rgba(0, 0, 0, 0.35);\n      .--arrow {\n        opacity: 1;\n        transform: none;\n      }\n    }\n  }\n"]);return _templateObject=function(){return n},n}function _templateObject1(){var n=(0,r._)(["\n  position: absolute;\n  bottom: ","px;\n  &.--left {\n    left: ","px;\n    .--panel {\n      left: 0;\n    }\n    &.--layoutList {\n      .--panel {\n        left: ","px;\n      }\n    }\n    &.bubble {\n      .itemLink {\n        width: 100%;\n        height: auto;\n        padding-right: 18px;\n        span {\n          transform: none;\n        }\n        i {\n          font-size: 1.25rem !important;\n        }\n      }\n    }\n  }\n  &.--right {\n    right: ","px;\n    .--panel {\n      right: 0;\n      transform-origin: bottom right;\n    }\n    &.--layoutList {\n      .--panel {\n        right: ","px;\n        "," {\n          span {\n            right: 0;\n            transform: translateX(-42px) scale(0.9);\n          }\n        }\n      }\n    }\n  }\n  z-index: 1;\n  .--toggler {\n    width: 3.5rem;\n    height: 3.5rem;\n    font-size: 1.25rem;\n    border-radius: 50%;\n    background: var(--color-primary);\n    backdrop-filter: blur(10px);\n    color: var(--color-text);\n    display: flex;\n    align-items: center;\n    justify-content: center;\n    cursor: pointer;\n    i:nth-child(1) {\n      display: block;\n    }\n    i:nth-child(2) {\n      display: none;\n    }\n  }\n  .--panel {\n    position: absolute;\n    bottom: 4.5rem;\n    background: var(--color-primary);\n    backdrop-filter: blur(10px);\n    color: var(--color-text);\n    width: max-content;\n    display: flex;\n    flex-flow: column;\n    border-radius: 12px;\n    padding: 0.5rem;\n    min-width: 160px;\n    transition: all 0.35s cubic-bezier(0.45, 1.83, 0.6, 0.97);\n    opacity: 0;\n    transform: scale(0.5);\n    pointer-events: none;\n    transform-origin: bottom left;\n  }\n\n  &.active {\n    .--toggler {\n      i:nth-child(1) {\n        display: none;\n      }\n      i:nth-child(2) {\n        display: block;\n      }\n    }\n    .--panel {\n      transform: none;\n      opacity: 1;\n      pointer-events: auto;\n    }\n  }\n  &.--layoutList {\n    .itemLink {\n      span {\n        position: relative;\n        transform: none;\n        left: 100%;\n      }\n    }\n    .--toggler {\n      display: none;\n    }\n    .--panel {\n      display: flex;\n      flex-flow: column;\n      align-items: center;\n      opacity: 1;\n      transform: none;\n      pointer-events: auto;\n      border-radius: 0;\n      background-color: transparent;\n      backdrop-filter: initial;\n      min-width: initial;\n      top: 0;\n      bottom: 0;\n      margin: auto;\n      position: absolute;\n      height: max-content;\n    }\n    "," {\n      background: var(--color-primary);\n      display: flex;\n      align-items: center;\n      justify-content: center;\n      border-radius: 50%;\n      transition: var(--transition-smooth);\n      margin: 0.5rem 0;\n      span {\n        position: absolute;\n        padding: 4px 8px;\n        border-radius: 4px;\n        opacity: 0;\n        font-weight: 600;\n        pointer-events: none;\n        transition: var(--transition-regular);\n        text-shadow: 0 1px 6px rgb(0 0 0 / 35%);\n      }\n      .--symbol {\n        margin: 0;\n        font-size: 1rem;\n        height: auto;\n        object-fit: contain;\n      }\n      .--arrow {\n        display: none;\n      }\n      @media (hover: hover) and (pointer: fine) {\n        &:hover {\n          background: var(--color-primary);\n          transform: scale(1.1);\n          span {\n            opacity: 1;\n          }\n        }\n      }\n    }\n  }\n"]);return _templateObject1=function(){return n},n}var i=o.ZP.div.withConfig({displayName:"styled__CallToActionItemWrapper",componentId:"Panoee__sc-dbb4a95f-0"})(_templateObject(),function(n){return n.scale},function(n){return n.scale},function(n){return n.scale},function(n){return n.scale}),a=o.ZP.div.withConfig({displayName:"styled__CallToActionsWrapper",componentId:"Panoee__sc-dbb4a95f-1"})(_templateObject1(),function(n){return n.offsetBottom||165},function(n){return n.offsetLeft||12},function(n){return n.offsetLeft||12},function(n){return n.offsetRight||12},function(n){return n.offsetRight||12},i,i)},11825:function(n,t,e){e.r(t),e.d(t,{ThemeCompact:function(){return h}});var r=e(85893),o=e(67294),i=e(5152),a=e.n(i),l=e(13614),s=e(25617),c=e(61935),p=a()(function(){return e.e(5444).then(e.bind(e,35444))},{loadableGenerated:{webpack:function(){return[35444]}}}),d=a()(function(){return Promise.all([e.e(9774),e.e(2301),e.e(9220),e.e(811),e.e(4055),e.e(2815),e.e(3376),e.e(5895),e.e(9679)]).then(e.bind(e,89679))},{loadableGenerated:{webpack:function(){return[89679]}},ssr:!1}),f=a()(function(){return e.e(7092).then(e.bind(e,77092))},{loadableGenerated:{webpack:function(){return[77092]}}}),m=a()(function(){return Promise.all([e.e(2301),e.e(9220),e.e(811),e.e(4055),e.e(5673),e.e(6330)]).then(e.bind(e,76330))},{loadableGenerated:{webpack:function(){return[76330]}},ssr:!1}),u=a()(function(){return e.e(1160).then(e.bind(e,1160))},{loadableGenerated:{webpack:function(){return[1160]}}}),h=(0,o.memo)(function(n){var t=n.onChangeScene,e=n.onNextScene,o=(0,s.v9)(c.XX);return(0,r.jsxs)(l.V0,{className:o?"matterport":"",children:[(0,r.jsx)(p,{}),(0,r.jsx)(f,{onChangeScene:t}),(0,r.jsx)(d,{onChangeScene:t,onNextScene:e,children:function(n){var t=n.krpanoRef;return(0,r.jsx)(m,{krpanoRef:t})}}),(0,r.jsx)(u,{})]})});t.default=h},13614:function(n,t,e){e.d(t,{NA:function(){return l},OT:function(){return d},Pz:function(){return s},V0:function(){return c},bx:function(){return a},ln:function(){return p}});var r=e(82729),o=e(94589),i=e(46663);function _templateObject(){var n=(0,r._)(["\n  position: absolute;\n  z-index: 21;\n  top: 0;\n  left: 0;\n  width: 220px;\n  height: 100vh;\n  background: rgba(0, 0, 0, 0.6);\n  transition: var(--transition-smooth);\n  // backdrop-filter: blur(10px);\n  .--toggler {\n    display: flex;\n    align-items: center;\n    justify-content: center;\n    border-radius: 25px;\n    transition: var(--transition-regular);\n    cursor: pointer;\n    color: #fff;\n    position: absolute;\n    top: 1rem;\n    font-size: 1.25rem;\n    text-shadow: 0 0 12px rgba(0, 0, 0, 0.25);\n    width: 2.5rem;\n    height: 2.5rem;\n    right: -3rem;\n    background: var(--color-primary);\n    border: 1px solid transparent;\n    &:hover {\n      background-color: var(--color-primary);\n      box-shadow: 0 0 16px rgba(0, 0, 0, 0.5);\n    }\n    .state-close {\n      display: block;\n    }\n    .state-open {\n      display: none;\n    }\n  }\n  .--logo {\n    width: 100%;\n    margin: 0 auto;\n    flex: 0 0 auto;\n    text-align: center;\n    img {\n      width: auto;\n      max-width: 100%;\n      height: auto;\n    }\n  }\n  .--mainPanel {\n    color: var(--color-text);\n    display: flex;\n    flex-flow: column;\n    height: 100%;\n  }\n  .--sceneMenuWrapper {\n    width: 100%;\n    overflow: auto;\n    height: 100%;\n    &.active {\n      // height: max-content;\n      // max-height: 100%;\n      overflow: hidden;\n      /* flex: 1; */\n      /* height: unset; */\n    }\n  }\n  .--customLink {\n    // background-color: purple;\n    // flex: 0 0 auto;\n    overflow: auto;\n    flex: 1;\n  }\n  &.inactive {\n    transform: translate(-100%);\n    .--toggler {\n      background-color: rgba(0, 0, 0, 0.2);\n      border-color: rgba(255, 255, 255, 0.5);\n      .state-open {\n        display: block;\n      }\n      .state-close {\n        display: none;\n      }\n    }\n  }\n  &.sceneCate--on {\n    .--customLink {\n      display: none;\n    }\n  }\n\n  .sceneMenu {\n    display: flex;\n    height: max-content;\n    max-height: 100%;\n    width: 200%;\n    transition: var(--transition-smooth);\n    .--cateList {\n      display: flex;\n      flex-flow: column;\n      width: 50%;\n      flex: 0 0 auto;\n      overflow-y: auto;\n    }\n    .--listing {\n    }\n    &.active {\n      transform: translateX(-50%);\n      .sceneList {\n        height: auto;\n      }\n    }\n  }\n\n  .itemSceneCate {\n    padding: 1.25rem 1rem;\n    border-bottom: 1px solid rgba(255, 255, 255, 0.2);\n    cursor: pointer;\n    transition: var(--transition-regular);\n    text-align: center;\n    transition: var(--transition-regular);\n    cursor: pointer;\n    position: relative;\n    &:hover {\n      // border-color: rgba(255, 255, 255, 0.5);\n      // padding: 1.5rem 1rem;\n      background: rgba(255, 255, 255, 0.15);\n    }\n  }\n\n  .itemSceneCate {\n    padding: 0.75rem 1rem 0.5rem;\n    display: flex;\n    flex-flow: column;\n    align-items: center;\n    justify-content: center;\n    gap: 1rem;\n    min-height: 80px;\n    .--cateImg {\n      position: relative;\n      z-index: 1;\n      width: 80%;\n      margin: 0 auto;\n      img {\n        border: 1px solid rgba(255, 255, 255, 0.8);\n        // border-radius: 6px;\n        z-index: 1;\n        position: relative;\n        width: 100%;\n      }\n      &:before,\n      &:after {\n        content: '';\n        position: absolute;\n        // border-radius: 0 0 4px 4px;\n        z-index: -1;\n        left: 50%;\n        transform: translateX(-50%);\n        border-bottom: 1px solid rgba(255, 255, 255, 0.2);\n        border-left: 1px solid rgba(255, 255, 255, 0.2);\n        border-right: 1px solid rgba(255, 255, 255, 0.2);\n        background: rgba(255, 255, 255, 0.2);\n      }\n      &:before {\n        width: 60%;\n        height: 4px;\n        bottom: -10px;\n      }\n      &:after {\n        width: 80%;\n        height: 6px;\n        bottom: -6px;\n      }\n    }\n    .--cateTitle {\n      font-weight: 300;\n      font-size: 0.8rem;\n      display: block;\n      text-transform: uppercase;\n      letter-spacing: 2px;\n      // margin-top: 0.5rem;\n      transition: var(--transition-smooth);\n      padding: 0 12px;\n      width: 100%;\n      word-wrap: break-word;\n    }\n    &:hover {\n      .--cateTitle {\n        letter-spacing: 4px;\n      }\n    }\n    &.active {\n      background: var(--color-primary);\n      color: #fff;\n    }\n  }\n\n  .sceneList {\n    display: flex;\n    flex-flow: column;\n    // background-color: var(--color-primary);\n    padding: 0;\n    width: 50%;\n    height: 0;\n    flex: 1;\n    .--back {\n      display: flex;\n      justify-content: center;\n      align-items: center;\n      flex: 0 0 auto;\n      gap: 8px;\n      padding: 0.5rem;\n      font-size: 0.7rem;\n      text-transform: uppercase;\n      letter-spacing: 3px;\n      cursor: pointer;\n      transition: var(--transition-smooth);\n      &:hover {\n        letter-spacing: 5px;\n      }\n    }\n    .--listing {\n      overflow: auto;\n    }\n  }\n\n  .itemScene,\n  .itemMenuLink {\n    width: 100%;\n    height: 100px;\n    overflow: hidden;\n    position: relative;\n    transition: var(--transition-regular);\n    cursor: pointer;\n    display: flex;\n    align-items: center;\n    justify-content: center;\n    text-align: center;\n    border-bottom: 1px solid rgba(255, 255, 255, 0.2);\n    background: #000;\n    z-index: 0;\n    img {\n      width: 100%;\n      height: 100%;\n      object-fit: cover;\n      position: absolute;\n      top: 0;\n      left: 0;\n      transition: var(--transition-smooth);\n      opacity: 0.6;\n      z-index: -1;\n      transform: scale(1.1);\n    }\n    span {\n      font-size: 0.7rem;\n      text-shadow: 0 0 8px #000;\n      letter-spacing: 1px;\n      text-transform: uppercase;\n      padding: 0 12px;\n      width: 100%;\n      word-wrap: break-word;\n    }\n    &:hover {\n      img {\n        transform: scale(1.3);\n        opacity: 0.8;\n      }\n    }\n    &.active {\n    }\n  }\n\n  // .itemMenuLink {\n  //   span {\n  //   }\n  //   &.type-scene {\n  //     overflow: hidden;\n  //     background-color: #000;\n  //     z-index: 1;\n  //     img {\n  //       width: 100%;\n  //       height: 100%;\n  //       object-fit: cover;\n  //       position: absolute;\n  //       top: 0;\n  //       left: 0;\n  //       transition: var(--transition-smooth);\n  //       opacity: 0.2;\n  //       z-index: -1;\n  //     }\n  //     &:hover {\n  //       img {\n  //         transform: scale(1.2);\n  //         opacity: 0.4;\n  //       }\n  //     }\n  //   }\n  // }\n"]);return _templateObject=function(){return n},n}function _templateObject1(){var n=(0,r._)(["\n  position: absolute;\n  z-index: 23;\n  right: 1rem;\n  top: 1rem;\n  display: flex;\n  flex-flow: column;\n  gap: 4px;\n  .--toggler,\n  .controlBar .--item {\n    width: 2.5rem;\n    height: 2.5rem;\n    display: flex;\n    align-items: center;\n    justify-content: center;\n    font-size: 1rem;\n    border-radius: 25px;\n    margin: 2px 0;\n    transition: var(--transition-smooth);\n    flex: 0 0 auto;\n    cursor: pointer;\n    opacity: 1;\n    transform: none;\n    &:hover {\n      // transform: scale(1.1);\n      // transition-delay: 0s !important;\n      box-shadow: 0 0 16px rgba(0, 0, 0, 0.5);\n    }\n  }\n  .--toggler {\n    background-color: var(--color-primary);\n    color: var(--color-text);\n  }\n  &.inactive {\n    .controlBar .--item {\n      opacity: 0;\n      transform: translateX(2rem);\n    }\n  }\n  @media (max-width: 640px) {\n  }\n\n  .controlBar {\n    display: flex;\n    flex-flow: column;\n    justify-content: center;\n    gap: 4px;\n    transition: var(--transition-smooth);\n    .--item {\n      background: rgba(0, 0, 0, 0.2);\n      border: 1px solid rgba(255, 255, 255, 0.5);\n      color: #fff;\n      &:nth-child(1) {\n        transition-delay: 0s;\n      }\n      &:nth-child(2) {\n        transition-delay: 0.05s;\n      }\n      &:nth-child(3) {\n        transition-delay: 0.1s;\n      }\n      &:nth-child(4) {\n        transition-delay: 0.15s;\n      }\n      &:nth-child(5) {\n        transition-delay: 0.2s;\n      }\n      &:nth-child(6) {\n        transition-delay: 0.25s;\n      }\n      &:nth-child(7) {\n        transition-delay: 0.3s;\n      }\n      &:nth-child(8) {\n        transition-delay: 0.35s;\n      }\n      &:nth-child(9) {\n        transition-delay: 0.4s;\n      }\n      &:nth-child(10) {\n        transition-delay: 0.45s;\n      }\n    }\n  }\n"]);return _templateObject1=function(){return n},n}function _templateObject2(){var n=(0,r._)(["\n  position: absolute;\n  z-index: 21;\n  margin: 0 auto;\n  width: max-content;\n  left: 0;\n  right: 0;\n  .--content {\n    display: flex;\n    flex-flow: column;\n    color: #fff;\n    font-weight: 300;\n    text-shadow: 0 0px 6px rgba(0, 0, 0, 0.4);\n    margin-bottom: 0.5rem;\n    text-align: center;\n    padding: 0.5rem 0;\n    text-transform: uppercase;\n    pointer-events: none;\n  }\n  .--projectName {\n    font-size: 1.1rem;\n    display: block;\n    margin-bottom: -2px;\n    pointer-events: none;\n  }\n  .--sceneName {\n    font-size: 0.8rem;\n  }\n"]);return _templateObject2=function(){return n},n}function _templateObject3(){var n=(0,r._)(["\n  height: 100%;\n  width: 100%;\n  position: relative;\n  overflow: hidden;\n  background: #ffffff;\n  button {\n    cursor: pointer;\n  }\n  & ~ "," {\n    .--toggler {\n      width: 2.5rem;\n      height: 2.5rem;\n      transition: var(--transition-regular);\n      &:hover {\n        box-shadow: 0 0 16px rgba(0, 0, 0, 0.5);\n      }\n    }\n    .--panel {\n      bottom: 3rem;\n      background: rgba(0, 0, 0, 0.3);\n      backdrop-filter: none;\n    }\n    &.--layoutList .--panel {\n      background: transparent;\n      padding: 0;\n      bottom: 0;\n    }\n  }\n"]);return _templateObject3=function(){return n},n}function _templateObject4(){var n=(0,r._)(["\n  z-index: 100;\n  ul {\n    padding: 0;\n    margin: 0;\n    li {\n      list-style: none;\n      button {\n        cursor: pointer;\n        background: #212121;\n        border-color: transparent;\n        color: rgb(255 255 255 / 0.5);\n        width: 100%;\n        justify-content: left;\n        height: auto;\n        display: flex;\n        align-items: center;\n        transition: all 0.15s ease-out;\n        @media (hover: hover) and (pointer: fine) {\n          &:hover {\n            color: #fff;\n          }\n        }\n        img,\n        i {\n          width: 2rem;\n          height: 2rem;\n          color: #fff;\n          margin-right: 0.5rem;\n          display: flex;\n          align-items: center;\n          justify-content: center;\n          font-size: 1rem;\n          border-radius: 50%;\n          background: #393839;\n          text-shadow: none;\n          transition: all 0.15s ease-out;\n        }\n        img {\n          padding: 0.1rem;\n        }\n        @media (hover: hover) and (pointer: fine) {\n          &:hover {\n            i,\n            img {\n              background-color: #fff;\n              color: #212121;\n              transform: scale(0.8);\n            }\n          }\n        }\n      }\n    }\n  }\n"]);return _templateObject4=function(){return n},n}function _templateObject5(){var n=(0,r._)(["\n  display: flex;\n  flex-flow: column;\n  align-items: center;\n  padding: 0.5rem 0;\n  background: var(--color-primary);\n  color: var(--color-text);\n  * {\n    color: #fff;\n  }\n  > span {\n    font-size: 0.6rem;\n    margin-bottom: 0px;\n    display: block;\n    opacity: 0.75;\n  }\n  a {\n    font-weight: 500;\n    font-size: 0.7rem;\n    span {\n      font-size: inherit;\n    }\n  }\n"]);return _templateObject5=function(){return n},n}var a=o.ZP.div.withConfig({displayName:"styled__ListSceneWrapper",componentId:"Panoee__sc-ab0ef563-0"})(_templateObject()),l=o.ZP.div.withConfig({displayName:"styled__ControlbarWrapper",componentId:"Panoee__sc-ab0ef563-1"})(_templateObject1()),s=o.ZP.div.withConfig({displayName:"styled__HeaderWrapper",componentId:"Panoee__sc-ab0ef563-2"})(_templateObject2()),c=o.ZP.div.withConfig({displayName:"styled__ThemeCompactWrapper",componentId:"Panoee__sc-ab0ef563-3"})(_templateObject3(),i.M),p=o.ZP.div.withConfig({displayName:"styled__ControlbarPopoverWrapper",componentId:"Panoee__sc-ab0ef563-4"})(_templateObject4()),d=o.ZP.div.withConfig({displayName:"styled__CopyrightWrapper",componentId:"Panoee__sc-ab0ef563-5"})(_templateObject5())}}]);
//# sourceMappingURL=1825.2c608ff1466929a2.js.map