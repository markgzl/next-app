"use strict";(self.webpackChunk_N_E=self.webpackChunk_N_E||[]).push([[720],{35695:(e,t,n)=>{var r=n(18999);n.o(r,"usePathname")&&n.d(t,{usePathname:function(){return r.usePathname}})},47147:(e,t,n)=>{n.d(t,{A:()=>l});var r=n(12115),o={xmlns:"http://www.w3.org/2000/svg",width:24,height:24,viewBox:"0 0 24 24",fill:"none",stroke:"currentColor",strokeWidth:2,strokeLinecap:"round",strokeLinejoin:"round"},i=n(66977);let l=(0,r.forwardRef)((e,t)=>{let{color:n="currentColor",size:l=24,strokeWidth:u=2,absoluteStrokeWidth:a,className:s="",children:d,iconNode:c,...f}=e;return(0,r.createElement)("svg",{ref:t,...o,width:l,height:l,stroke:n,strokeWidth:a?24*Number(u)/Number(l):u,className:(0,i.zP)("lucide",s),...f},[...c.map(e=>{let[t,n]=e;return(0,r.createElement)(t,n)}),...Array.isArray(d)?d:[d]])})},54416:(e,t,n)=>{n.d(t,{A:()=>r});let r=(0,n(90602).A)("x",[["path",{d:"M18 6 6 18",key:"1bl5f8"}],["path",{d:"m6 6 12 12",key:"d8bk6v"}]])},59676:(e,t,n)=>{n.d(t,{bm:()=>eP,UC:()=>eD,hJ:()=>eR,ZL:()=>eO,bL:()=>eC,l9:()=>ex});var r,o=n(12115),i=n.t(o,2);function l(e,t,{checkForDefaultPrevented:n=!0}={}){return function(r){if(e?.(r),!1===n||!r.defaultPrevented)return t?.(r)}}function u(e,t){if("function"==typeof e)return e(t);null!=e&&(e.current=t)}function a(...e){return t=>{let n=!1,r=e.map(e=>{let r=u(e,t);return n||"function"!=typeof r||(n=!0),r});if(n)return()=>{for(let t=0;t<r.length;t++){let n=r[t];"function"==typeof n?n():u(e[t],null)}}}}function s(...e){return o.useCallback(a(...e),e)}var d=n(95155),c=globalThis?.document?o.useLayoutEffect:()=>{},f=i["useId".toString()]||(()=>void 0),p=0;function m(e){let[t,n]=o.useState(f());return c(()=>{e||n(e=>e??String(p++))},[e]),e||(t?`radix-${t}`:"")}function v(e){let t=o.useRef(e);return o.useEffect(()=>{t.current=e}),o.useMemo(()=>(...e)=>t.current?.(...e),[])}var y=n(47650),g=o.forwardRef((e,t)=>{let{children:n,...r}=e,i=o.Children.toArray(n),l=i.find(b);if(l){let e=l.props.children,n=i.map(t=>t!==l?t:o.Children.count(e)>1?o.Children.only(null):o.isValidElement(e)?e.props.children:null);return(0,d.jsx)(E,{...r,ref:t,children:o.isValidElement(e)?o.cloneElement(e,void 0,n):null})}return(0,d.jsx)(E,{...r,ref:t,children:n})});g.displayName="Slot";var E=o.forwardRef((e,t)=>{let{children:n,...r}=e;if(o.isValidElement(n)){let e=function(e){let t=Object.getOwnPropertyDescriptor(e.props,"ref")?.get,n=t&&"isReactWarning"in t&&t.isReactWarning;return n?e.ref:(n=(t=Object.getOwnPropertyDescriptor(e,"ref")?.get)&&"isReactWarning"in t&&t.isReactWarning)?e.props.ref:e.props.ref||e.ref}(n),i=function(e,t){let n={...t};for(let r in t){let o=e[r],i=t[r];/^on[A-Z]/.test(r)?o&&i?n[r]=(...e)=>{i(...e),o(...e)}:o&&(n[r]=o):"style"===r?n[r]={...o,...i}:"className"===r&&(n[r]=[o,i].filter(Boolean).join(" "))}return{...e,...n}}(r,n.props);return n.type!==o.Fragment&&(i.ref=t?a(t,e):e),o.cloneElement(n,i)}return o.Children.count(n)>1?o.Children.only(null):null});E.displayName="SlotClone";var h=({children:e})=>(0,d.jsx)(d.Fragment,{children:e});function b(e){return o.isValidElement(e)&&e.type===h}var w=["a","button","div","form","h2","h3","img","input","label","li","nav","ol","p","span","svg","ul"].reduce((e,t)=>{let n=o.forwardRef((e,n)=>{let{asChild:r,...o}=e,i=r?g:t;return"undefined"!=typeof window&&(window[Symbol.for("radix-ui")]=!0),(0,d.jsx)(i,{...o,ref:n})});return n.displayName=`Primitive.${t}`,{...e,[t]:n}},{}),N="dismissableLayer.update",C=o.createContext({layers:new Set,layersWithOutsidePointerEventsDisabled:new Set,branches:new Set}),x=o.forwardRef((e,t)=>{var n,i;let{disableOutsidePointerEvents:u=!1,onEscapeKeyDown:a,onPointerDownOutside:c,onFocusOutside:f,onInteractOutside:p,onDismiss:m,...y}=e,g=o.useContext(C),[E,h]=o.useState(null),b=null!==(i=null==E?void 0:E.ownerDocument)&&void 0!==i?i:null===(n=globalThis)||void 0===n?void 0:n.document,[,x]=o.useState({}),D=s(t,e=>h(e)),P=Array.from(g.layers),[j]=[...g.layersWithOutsidePointerEventsDisabled].slice(-1),A=P.indexOf(j),L=E?P.indexOf(E):-1,I=g.layersWithOutsidePointerEventsDisabled.size>0,T=L>=A,S=function(e){var t;let n=arguments.length>1&&void 0!==arguments[1]?arguments[1]:null===(t=globalThis)||void 0===t?void 0:t.document,r=v(e),i=o.useRef(!1),l=o.useRef(()=>{});return o.useEffect(()=>{let e=e=>{if(e.target&&!i.current){let t=function(){R("dismissableLayer.pointerDownOutside",r,o,{discrete:!0})},o={originalEvent:e};"touch"===e.pointerType?(n.removeEventListener("click",l.current),l.current=t,n.addEventListener("click",l.current,{once:!0})):t()}else n.removeEventListener("click",l.current);i.current=!1},t=window.setTimeout(()=>{n.addEventListener("pointerdown",e)},0);return()=>{window.clearTimeout(t),n.removeEventListener("pointerdown",e),n.removeEventListener("click",l.current)}},[n,r]),{onPointerDownCapture:()=>i.current=!0}}(e=>{let t=e.target,n=[...g.branches].some(e=>e.contains(t));!T||n||(null==c||c(e),null==p||p(e),e.defaultPrevented||null==m||m())},b),F=function(e){var t;let n=arguments.length>1&&void 0!==arguments[1]?arguments[1]:null===(t=globalThis)||void 0===t?void 0:t.document,r=v(e),i=o.useRef(!1);return o.useEffect(()=>{let e=e=>{e.target&&!i.current&&R("dismissableLayer.focusOutside",r,{originalEvent:e},{discrete:!1})};return n.addEventListener("focusin",e),()=>n.removeEventListener("focusin",e)},[n,r]),{onFocusCapture:()=>i.current=!0,onBlurCapture:()=>i.current=!1}}(e=>{let t=e.target;[...g.branches].some(e=>e.contains(t))||(null==f||f(e),null==p||p(e),e.defaultPrevented||null==m||m())},b);return!function(e,t=globalThis?.document){let n=v(e);o.useEffect(()=>{let e=e=>{"Escape"===e.key&&n(e)};return t.addEventListener("keydown",e,{capture:!0}),()=>t.removeEventListener("keydown",e,{capture:!0})},[n,t])}(e=>{L===g.layers.size-1&&(null==a||a(e),!e.defaultPrevented&&m&&(e.preventDefault(),m()))},b),o.useEffect(()=>{if(E)return u&&(0===g.layersWithOutsidePointerEventsDisabled.size&&(r=b.body.style.pointerEvents,b.body.style.pointerEvents="none"),g.layersWithOutsidePointerEventsDisabled.add(E)),g.layers.add(E),O(),()=>{u&&1===g.layersWithOutsidePointerEventsDisabled.size&&(b.body.style.pointerEvents=r)}},[E,b,u,g]),o.useEffect(()=>()=>{E&&(g.layers.delete(E),g.layersWithOutsidePointerEventsDisabled.delete(E),O())},[E,g]),o.useEffect(()=>{let e=()=>x({});return document.addEventListener(N,e),()=>document.removeEventListener(N,e)},[]),(0,d.jsx)(w.div,{...y,ref:D,style:{pointerEvents:I?T?"auto":"none":void 0,...e.style},onFocusCapture:l(e.onFocusCapture,F.onFocusCapture),onBlurCapture:l(e.onBlurCapture,F.onBlurCapture),onPointerDownCapture:l(e.onPointerDownCapture,S.onPointerDownCapture)})});function O(){let e=new CustomEvent(N);document.dispatchEvent(e)}function R(e,t,n,r){let{discrete:o}=r,i=n.originalEvent.target,l=new CustomEvent(e,{bubbles:!1,cancelable:!0,detail:n});if(t&&i.addEventListener(e,t,{once:!0}),o)i&&y.flushSync(()=>i.dispatchEvent(l));else i.dispatchEvent(l)}x.displayName="DismissableLayer",o.forwardRef((e,t)=>{let n=o.useContext(C),r=o.useRef(null),i=s(t,r);return o.useEffect(()=>{let e=r.current;if(e)return n.branches.add(e),()=>{n.branches.delete(e)}},[n.branches]),(0,d.jsx)(w.div,{...e,ref:i})}).displayName="DismissableLayerBranch";var D="focusScope.autoFocusOnMount",P="focusScope.autoFocusOnUnmount",j={bubbles:!1,cancelable:!0},A=o.forwardRef((e,t)=>{let{loop:n=!1,trapped:r=!1,onMountAutoFocus:i,onUnmountAutoFocus:l,...u}=e,[a,c]=o.useState(null),f=v(i),p=v(l),m=o.useRef(null),y=s(t,e=>c(e)),g=o.useRef({paused:!1,pause(){this.paused=!0},resume(){this.paused=!1}}).current;o.useEffect(()=>{if(r){let e=function(e){if(g.paused||!a)return;let t=e.target;a.contains(t)?m.current=t:T(m.current,{select:!0})},t=function(e){if(g.paused||!a)return;let t=e.relatedTarget;null===t||a.contains(t)||T(m.current,{select:!0})};document.addEventListener("focusin",e),document.addEventListener("focusout",t);let n=new MutationObserver(function(e){if(document.activeElement===document.body)for(let t of e)t.removedNodes.length>0&&T(a)});return a&&n.observe(a,{childList:!0,subtree:!0}),()=>{document.removeEventListener("focusin",e),document.removeEventListener("focusout",t),n.disconnect()}}},[r,a,g.paused]),o.useEffect(()=>{if(a){S.add(g);let e=document.activeElement;if(!a.contains(e)){let t=new CustomEvent(D,j);a.addEventListener(D,f),a.dispatchEvent(t),t.defaultPrevented||(function(e){let{select:t=!1}=arguments.length>1&&void 0!==arguments[1]?arguments[1]:{},n=document.activeElement;for(let r of e)if(T(r,{select:t}),document.activeElement!==n)return}(L(a).filter(e=>"A"!==e.tagName),{select:!0}),document.activeElement===e&&T(a))}return()=>{a.removeEventListener(D,f),setTimeout(()=>{let t=new CustomEvent(P,j);a.addEventListener(P,p),a.dispatchEvent(t),t.defaultPrevented||T(null!=e?e:document.body,{select:!0}),a.removeEventListener(P,p),S.remove(g)},0)}}},[a,f,p,g]);let E=o.useCallback(e=>{if(!n&&!r||g.paused)return;let t="Tab"===e.key&&!e.altKey&&!e.ctrlKey&&!e.metaKey,o=document.activeElement;if(t&&o){let t=e.currentTarget,[r,i]=function(e){let t=L(e);return[I(t,e),I(t.reverse(),e)]}(t);r&&i?e.shiftKey||o!==i?e.shiftKey&&o===r&&(e.preventDefault(),n&&T(i,{select:!0})):(e.preventDefault(),n&&T(r,{select:!0})):o===t&&e.preventDefault()}},[n,r,g.paused]);return(0,d.jsx)(w.div,{tabIndex:-1,...u,ref:y,onKeyDown:E})});function L(e){let t=[],n=document.createTreeWalker(e,NodeFilter.SHOW_ELEMENT,{acceptNode:e=>{let t="INPUT"===e.tagName&&"hidden"===e.type;return e.disabled||e.hidden||t?NodeFilter.FILTER_SKIP:e.tabIndex>=0?NodeFilter.FILTER_ACCEPT:NodeFilter.FILTER_SKIP}});for(;n.nextNode();)t.push(n.currentNode);return t}function I(e,t){for(let n of e)if(!function(e,t){let{upTo:n}=t;if("hidden"===getComputedStyle(e).visibility)return!0;for(;e&&(void 0===n||e!==n);){if("none"===getComputedStyle(e).display)return!0;e=e.parentElement}return!1}(n,{upTo:t}))return n}function T(e){let{select:t=!1}=arguments.length>1&&void 0!==arguments[1]?arguments[1]:{};if(e&&e.focus){var n;let r=document.activeElement;e.focus({preventScroll:!0}),e!==r&&(n=e)instanceof HTMLInputElement&&"select"in n&&t&&e.select()}}A.displayName="FocusScope";var S=function(){let e=[];return{add(t){let n=e[0];t!==n&&(null==n||n.pause()),(e=F(e,t)).unshift(t)},remove(t){var n;null===(n=(e=F(e,t))[0])||void 0===n||n.resume()}}}();function F(e,t){let n=[...e],r=n.indexOf(t);return -1!==r&&n.splice(r,1),n}var _=o.forwardRef((e,t)=>{var n,r;let{container:i,...l}=e,[u,a]=o.useState(!1);c(()=>a(!0),[]);let s=i||u&&(null===(r=globalThis)||void 0===r?void 0:null===(n=r.document)||void 0===n?void 0:n.body);return s?y.createPortal((0,d.jsx)(w.div,{...l,ref:t}),s):null});_.displayName="Portal";var k=e=>{let{present:t,children:n}=e,r=function(e){var t,n;let[r,i]=o.useState(),l=o.useRef({}),u=o.useRef(e),a=o.useRef("none"),[s,d]=(t=e?"mounted":"unmounted",n={mounted:{UNMOUNT:"unmounted",ANIMATION_OUT:"unmountSuspended"},unmountSuspended:{MOUNT:"mounted",ANIMATION_END:"unmounted"},unmounted:{MOUNT:"mounted"}},o.useReducer((e,t)=>{let r=n[e][t];return null!=r?r:e},t));return o.useEffect(()=>{let e=M(l.current);a.current="mounted"===s?e:"none"},[s]),c(()=>{let t=l.current,n=u.current;if(n!==e){let r=a.current,o=M(t);e?d("MOUNT"):"none"===o||(null==t?void 0:t.display)==="none"?d("UNMOUNT"):n&&r!==o?d("ANIMATION_OUT"):d("UNMOUNT"),u.current=e}},[e,d]),c(()=>{if(r){var e;let t;let n=null!==(e=r.ownerDocument.defaultView)&&void 0!==e?e:window,o=e=>{let o=M(l.current).includes(e.animationName);if(e.target===r&&o&&(d("ANIMATION_END"),!u.current)){let e=r.style.animationFillMode;r.style.animationFillMode="forwards",t=n.setTimeout(()=>{"forwards"===r.style.animationFillMode&&(r.style.animationFillMode=e)})}},i=e=>{e.target===r&&(a.current=M(l.current))};return r.addEventListener("animationstart",i),r.addEventListener("animationcancel",o),r.addEventListener("animationend",o),()=>{n.clearTimeout(t),r.removeEventListener("animationstart",i),r.removeEventListener("animationcancel",o),r.removeEventListener("animationend",o)}}d("ANIMATION_END")},[r,d]),{isPresent:["mounted","unmountSuspended"].includes(s),ref:o.useCallback(e=>{e&&(l.current=getComputedStyle(e)),i(e)},[])}}(t),i="function"==typeof n?n({present:r.isPresent}):o.Children.only(n),l=s(r.ref,function(e){var t,n;let r=null===(t=Object.getOwnPropertyDescriptor(e.props,"ref"))||void 0===t?void 0:t.get,o=r&&"isReactWarning"in r&&r.isReactWarning;return o?e.ref:(o=(r=null===(n=Object.getOwnPropertyDescriptor(e,"ref"))||void 0===n?void 0:n.get)&&"isReactWarning"in r&&r.isReactWarning)?e.props.ref:e.props.ref||e.ref}(i));return"function"==typeof n||r.isPresent?o.cloneElement(i,{ref:l}):null};function M(e){return(null==e?void 0:e.animationName)||"none"}k.displayName="Presence";var W=0;function U(){let e=document.createElement("span");return e.setAttribute("data-radix-focus-guard",""),e.tabIndex=0,e.style.outline="none",e.style.opacity="0",e.style.position="fixed",e.style.pointerEvents="none",e}var z=n(93795),V=n(38168),$=o.forwardRef((e,t)=>{let{children:n,...r}=e,i=o.Children.toArray(n),l=i.find(Z);if(l){let e=l.props.children,n=i.map(t=>t!==l?t:o.Children.count(e)>1?o.Children.only(null):o.isValidElement(e)?e.props.children:null);return(0,d.jsx)(B,{...r,ref:t,children:o.isValidElement(e)?o.cloneElement(e,void 0,n):null})}return(0,d.jsx)(B,{...r,ref:t,children:n})});$.displayName="Slot";var B=o.forwardRef((e,t)=>{let{children:n,...r}=e;if(o.isValidElement(n)){let e=function(e){let t=Object.getOwnPropertyDescriptor(e.props,"ref")?.get,n=t&&"isReactWarning"in t&&t.isReactWarning;return n?e.ref:(n=(t=Object.getOwnPropertyDescriptor(e,"ref")?.get)&&"isReactWarning"in t&&t.isReactWarning)?e.props.ref:e.props.ref||e.ref}(n),i=function(e,t){let n={...t};for(let r in t){let o=e[r],i=t[r];/^on[A-Z]/.test(r)?o&&i?n[r]=(...e)=>{i(...e),o(...e)}:o&&(n[r]=o):"style"===r?n[r]={...o,...i}:"className"===r&&(n[r]=[o,i].filter(Boolean).join(" "))}return{...e,...n}}(r,n.props);return n.type!==o.Fragment&&(i.ref=t?a(t,e):e),o.cloneElement(n,i)}return o.Children.count(n)>1?o.Children.only(null):null});B.displayName="SlotClone";var K=({children:e})=>(0,d.jsx)(d.Fragment,{children:e});function Z(e){return o.isValidElement(e)&&e.type===K}var X="Dialog",[q,H]=function(e,t=[]){let n=[],r=()=>{let t=n.map(e=>o.createContext(e));return function(n){let r=n?.[e]||t;return o.useMemo(()=>({[`__scope${e}`]:{...n,[e]:r}}),[n,r])}};return r.scopeName=e,[function(t,r){let i=o.createContext(r),l=n.length;n=[...n,r];let u=t=>{let{scope:n,children:r,...u}=t,a=n?.[e]?.[l]||i,s=o.useMemo(()=>u,Object.values(u));return(0,d.jsx)(a.Provider,{value:s,children:r})};return u.displayName=t+"Provider",[u,function(n,u){let a=u?.[e]?.[l]||i,s=o.useContext(a);if(s)return s;if(void 0!==r)return r;throw Error(`\`${n}\` must be used within \`${t}\``)}]},function(...e){let t=e[0];if(1===e.length)return t;let n=()=>{let n=e.map(e=>({useScope:e(),scopeName:e.scopeName}));return function(e){let r=n.reduce((t,{useScope:n,scopeName:r})=>{let o=n(e)[`__scope${r}`];return{...t,...o}},{});return o.useMemo(()=>({[`__scope${t.scopeName}`]:r}),[r])}};return n.scopeName=t.scopeName,n}(r,...t)]}(X),[G,J]=q(X),Q=e=>{let{__scopeDialog:t,children:n,open:r,defaultOpen:i,onOpenChange:l,modal:u=!0}=e,a=o.useRef(null),s=o.useRef(null),[c=!1,f]=function({prop:e,defaultProp:t,onChange:n=()=>{}}){let[r,i]=function({defaultProp:e,onChange:t}){let n=o.useState(e),[r]=n,i=o.useRef(r),l=v(t);return o.useEffect(()=>{i.current!==r&&(l(r),i.current=r)},[r,i,l]),n}({defaultProp:t,onChange:n}),l=void 0!==e,u=l?e:r,a=v(n);return[u,o.useCallback(t=>{if(l){let n="function"==typeof t?t(e):t;n!==e&&a(n)}else i(t)},[l,e,i,a])]}({prop:r,defaultProp:i,onChange:l});return(0,d.jsx)(G,{scope:t,triggerRef:a,contentRef:s,contentId:m(),titleId:m(),descriptionId:m(),open:c,onOpenChange:f,onOpenToggle:o.useCallback(()=>f(e=>!e),[f]),modal:u,children:n})};Q.displayName=X;var Y="DialogTrigger",ee=o.forwardRef((e,t)=>{let{__scopeDialog:n,...r}=e,o=J(Y,n),i=s(t,o.triggerRef);return(0,d.jsx)(w.button,{type:"button","aria-haspopup":"dialog","aria-expanded":o.open,"aria-controls":o.contentId,"data-state":eg(o.open),...r,ref:i,onClick:l(e.onClick,o.onOpenToggle)})});ee.displayName=Y;var et="DialogPortal",[en,er]=q(et,{forceMount:void 0}),eo=e=>{let{__scopeDialog:t,forceMount:n,children:r,container:i}=e,l=J(et,t);return(0,d.jsx)(en,{scope:t,forceMount:n,children:o.Children.map(r,e=>(0,d.jsx)(k,{present:n||l.open,children:(0,d.jsx)(_,{asChild:!0,container:i,children:e})}))})};eo.displayName=et;var ei="DialogOverlay",el=o.forwardRef((e,t)=>{let n=er(ei,e.__scopeDialog),{forceMount:r=n.forceMount,...o}=e,i=J(ei,e.__scopeDialog);return i.modal?(0,d.jsx)(k,{present:r||i.open,children:(0,d.jsx)(eu,{...o,ref:t})}):null});el.displayName=ei;var eu=o.forwardRef((e,t)=>{let{__scopeDialog:n,...r}=e,o=J(ei,n);return(0,d.jsx)(z.A,{as:$,allowPinchZoom:!0,shards:[o.contentRef],children:(0,d.jsx)(w.div,{"data-state":eg(o.open),...r,ref:t,style:{pointerEvents:"auto",...r.style}})})}),ea="DialogContent",es=o.forwardRef((e,t)=>{let n=er(ea,e.__scopeDialog),{forceMount:r=n.forceMount,...o}=e,i=J(ea,e.__scopeDialog);return(0,d.jsx)(k,{present:r||i.open,children:i.modal?(0,d.jsx)(ed,{...o,ref:t}):(0,d.jsx)(ec,{...o,ref:t})})});es.displayName=ea;var ed=o.forwardRef((e,t)=>{let n=J(ea,e.__scopeDialog),r=o.useRef(null),i=s(t,n.contentRef,r);return o.useEffect(()=>{let e=r.current;if(e)return(0,V.Eq)(e)},[]),(0,d.jsx)(ef,{...e,ref:i,trapFocus:n.open,disableOutsidePointerEvents:!0,onCloseAutoFocus:l(e.onCloseAutoFocus,e=>{var t;e.preventDefault(),null===(t=n.triggerRef.current)||void 0===t||t.focus()}),onPointerDownOutside:l(e.onPointerDownOutside,e=>{let t=e.detail.originalEvent,n=0===t.button&&!0===t.ctrlKey;(2===t.button||n)&&e.preventDefault()}),onFocusOutside:l(e.onFocusOutside,e=>e.preventDefault())})}),ec=o.forwardRef((e,t)=>{let n=J(ea,e.__scopeDialog),r=o.useRef(!1),i=o.useRef(!1);return(0,d.jsx)(ef,{...e,ref:t,trapFocus:!1,disableOutsidePointerEvents:!1,onCloseAutoFocus:t=>{var o,l;null===(o=e.onCloseAutoFocus)||void 0===o||o.call(e,t),t.defaultPrevented||(r.current||null===(l=n.triggerRef.current)||void 0===l||l.focus(),t.preventDefault()),r.current=!1,i.current=!1},onInteractOutside:t=>{var o,l;null===(o=e.onInteractOutside)||void 0===o||o.call(e,t),t.defaultPrevented||(r.current=!0,"pointerdown"!==t.detail.originalEvent.type||(i.current=!0));let u=t.target;(null===(l=n.triggerRef.current)||void 0===l?void 0:l.contains(u))&&t.preventDefault(),"focusin"===t.detail.originalEvent.type&&i.current&&t.preventDefault()}})}),ef=o.forwardRef((e,t)=>{let{__scopeDialog:n,trapFocus:r,onOpenAutoFocus:i,onCloseAutoFocus:l,...u}=e,a=J(ea,n),c=o.useRef(null),f=s(t,c);return o.useEffect(()=>{var e,t;let n=document.querySelectorAll("[data-radix-focus-guard]");return document.body.insertAdjacentElement("afterbegin",null!==(e=n[0])&&void 0!==e?e:U()),document.body.insertAdjacentElement("beforeend",null!==(t=n[1])&&void 0!==t?t:U()),W++,()=>{1===W&&document.querySelectorAll("[data-radix-focus-guard]").forEach(e=>e.remove()),W--}},[]),(0,d.jsxs)(d.Fragment,{children:[(0,d.jsx)(A,{asChild:!0,loop:!0,trapped:r,onMountAutoFocus:i,onUnmountAutoFocus:l,children:(0,d.jsx)(x,{role:"dialog",id:a.contentId,"aria-describedby":a.descriptionId,"aria-labelledby":a.titleId,"data-state":eg(a.open),...u,ref:f,onDismiss:()=>a.onOpenChange(!1)})}),(0,d.jsxs)(d.Fragment,{children:[(0,d.jsx)(ew,{titleId:a.titleId}),(0,d.jsx)(eN,{contentRef:c,descriptionId:a.descriptionId})]})]})}),ep="DialogTitle";o.forwardRef((e,t)=>{let{__scopeDialog:n,...r}=e,o=J(ep,n);return(0,d.jsx)(w.h2,{id:o.titleId,...r,ref:t})}).displayName=ep;var em="DialogDescription";o.forwardRef((e,t)=>{let{__scopeDialog:n,...r}=e,o=J(em,n);return(0,d.jsx)(w.p,{id:o.descriptionId,...r,ref:t})}).displayName=em;var ev="DialogClose",ey=o.forwardRef((e,t)=>{let{__scopeDialog:n,...r}=e,o=J(ev,n);return(0,d.jsx)(w.button,{type:"button",...r,ref:t,onClick:l(e.onClick,()=>o.onOpenChange(!1))})});function eg(e){return e?"open":"closed"}ey.displayName=ev;var eE="DialogTitleWarning",[eh,eb]=function(e,t){let n=o.createContext(t),r=e=>{let{children:t,...r}=e,i=o.useMemo(()=>r,Object.values(r));return(0,d.jsx)(n.Provider,{value:i,children:t})};return r.displayName=e+"Provider",[r,function(r){let i=o.useContext(n);if(i)return i;if(void 0!==t)return t;throw Error(`\`${r}\` must be used within \`${e}\``)}]}(eE,{contentName:ea,titleName:ep,docsSlug:"dialog"}),ew=e=>{let{titleId:t}=e,n=eb(eE),r="`".concat(n.contentName,"` requires a `").concat(n.titleName,"` for the component to be accessible for screen reader users.\n\nIf you want to hide the `").concat(n.titleName,"`, you can wrap it with our VisuallyHidden component.\n\nFor more information, see https://radix-ui.com/primitives/docs/components/").concat(n.docsSlug);return o.useEffect(()=>{t&&!document.getElementById(t)&&console.error(r)},[r,t]),null},eN=e=>{let{contentRef:t,descriptionId:n}=e,r=eb("DialogDescriptionWarning"),i="Warning: Missing `Description` or `aria-describedby={undefined}` for {".concat(r.contentName,"}.");return o.useEffect(()=>{var e;let r=null===(e=t.current)||void 0===e?void 0:e.getAttribute("aria-describedby");n&&r&&!document.getElementById(n)&&console.warn(i)},[i,t,n]),null},eC=Q,ex=ee,eO=eo,eR=el,eD=es,eP=ey},66766:(e,t,n)=>{n.d(t,{default:()=>o.a});var r=n(71469),o=n.n(r)},66977:(e,t,n)=>{n.d(t,{MX:()=>i,fX:()=>r,zP:()=>l});let r=e=>e.replace(/([a-z0-9])([A-Z])/g,"$1-$2").toLowerCase(),o=e=>e.replace(/^([A-Z])|[\s-_]+(\w)/g,(e,t,n)=>n?n.toUpperCase():t.toLowerCase()),i=e=>{let t=o(e);return t.charAt(0).toUpperCase()+t.slice(1)},l=function(){for(var e=arguments.length,t=Array(e),n=0;n<e;n++)t[n]=arguments[n];return t.filter((e,t,n)=>!!e&&""!==e.trim()&&n.indexOf(e)===t).join(" ").trim()}},71469:(e,t,n)=>{Object.defineProperty(t,"__esModule",{value:!0}),!function(e,t){for(var n in t)Object.defineProperty(e,n,{enumerable:!0,get:t[n]})}(t,{default:function(){return a},getImageProps:function(){return u}});let r=n(88229),o=n(38883),i=n(33063),l=r._(n(51193));function u(e){let{props:t}=(0,o.getImgProps)(e,{defaultLoader:l.default,imgConf:{deviceSizes:[640,750,828,1080,1200,1920,2048,3840],imageSizes:[16,32,48,64,96,128,256,384],path:"/next-app/_next/image",loader:"default",dangerouslyAllowSVG:!1,unoptimized:!0}});for(let[e,n]of Object.entries(t))void 0===n&&delete t[e];return{props:t}}let a=i.Image},74783:(e,t,n)=>{n.d(t,{A:()=>r});let r=(0,n(90602).A)("menu",[["line",{x1:"4",x2:"20",y1:"12",y2:"12",key:"1e0a9i"}],["line",{x1:"4",x2:"20",y1:"6",y2:"6",key:"1owob3"}],["line",{x1:"4",x2:"20",y1:"18",y2:"18",key:"yk5zj1"}]])},90602:(e,t,n)=>{n.d(t,{A:()=>l});var r=n(12115),o=n(66977),i=n(47147);let l=(e,t)=>{let n=(0,r.forwardRef)((n,l)=>{let{className:u,...a}=n;return(0,r.createElement)(i.A,{ref:l,iconNode:t,className:(0,o.zP)("lucide-".concat((0,o.fX)((0,o.MX)(e))),"lucide-".concat(e),u),...a})});return n.displayName=(0,o.MX)(e),n}}}]);