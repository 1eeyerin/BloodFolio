import{c as P,p as W,j as oe}from"./styled-components.browser.esm-Os6HxUGj.js";import{r as l,$ as le}from"./index-CDs2tPxN.js";import"./index-B-yFm4aN.js";import{a as A}from"./constants-E40uE4fu.js";/**
 * @remix-run/router v1.16.1
 *
 * Copyright (c) Remix Software Inc.
 *
 * This source code is licensed under the MIT license found in the
 * LICENSE.md file in the root directory of this source tree.
 *
 * @license MIT
 */function U(){return U=Object.assign?Object.assign.bind():function(e){for(var t=1;t<arguments.length;t++){var a=arguments[t];for(var n in a)Object.prototype.hasOwnProperty.call(a,n)&&(e[n]=a[n])}return e},U.apply(this,arguments)}var C;(function(e){e.Pop="POP",e.Push="PUSH",e.Replace="REPLACE"})(C||(C={}));const V="popstate";function se(e){e===void 0&&(e={});function t(n,r){let{pathname:o,search:i,hash:c}=n.location;return _("",{pathname:o,search:i,hash:c},r.state&&r.state.usr||null,r.state&&r.state.key||"default")}function a(n,r){return typeof r=="string"?r:L(r)}return ce(t,a,null,e)}function y(e,t){if(e===!1||e===null||typeof e>"u")throw new Error(t)}function ue(){return Math.random().toString(36).substr(2,8)}function F(e,t){return{usr:e.state,key:e.key,idx:t}}function _(e,t,a,n){return a===void 0&&(a=null),U({pathname:typeof e=="string"?e:e.pathname,search:"",hash:""},typeof t=="string"?I(t):t,{state:a,key:t&&t.key||n||ue()})}function L(e){let{pathname:t="/",search:a="",hash:n=""}=e;return a&&a!=="?"&&(t+=a.charAt(0)==="?"?a:"?"+a),n&&n!=="#"&&(t+=n.charAt(0)==="#"?n:"#"+n),t}function I(e){let t={};if(e){let a=e.indexOf("#");a>=0&&(t.hash=e.substr(a),e=e.substr(0,a));let n=e.indexOf("?");n>=0&&(t.search=e.substr(n),e=e.substr(0,n)),e&&(t.pathname=e)}return t}function ce(e,t,a,n){n===void 0&&(n={});let{window:r=document.defaultView,v5Compat:o=!1}=n,i=r.history,c=C.Pop,u=null,s=f();s==null&&(s=0,i.replaceState(U({},i.state,{idx:s}),""));function f(){return(i.state||{idx:null}).idx}function h(){c=C.Pop;let d=f(),v=d==null?null:d-s;s=d,u&&u({action:c,location:p.location,delta:v})}function m(d,v){c=C.Push;let g=_(p.location,d,v);s=f()+1;let x=F(g,s),w=p.createHref(g);try{i.pushState(x,"",w)}catch(R){if(R instanceof DOMException&&R.name==="DataCloneError")throw R;r.location.assign(w)}o&&u&&u({action:c,location:p.location,delta:1})}function S(d,v){c=C.Replace;let g=_(p.location,d,v);s=f();let x=F(g,s),w=p.createHref(g);i.replaceState(x,"",w),o&&u&&u({action:c,location:p.location,delta:0})}function b(d){let v=r.location.origin!=="null"?r.location.origin:r.location.href,g=typeof d=="string"?d:L(d);return g=g.replace(/ $/,"%20"),y(v,"No window.location.(origin|href) available to create URL for href: "+g),new URL(g,v)}let p={get action(){return c},get location(){return e(r,i)},listen(d){if(u)throw new Error("A history only accepts one active listener");return r.addEventListener(V,h),u=d,()=>{r.removeEventListener(V,h),u=null}},createHref(d){return t(r,d)},createURL:b,encodeLocation(d){let v=b(d);return{pathname:v.pathname,search:v.search,hash:v.hash}},push:m,replace:S,go(d){return i.go(d)}};return p}var J;(function(e){e.data="data",e.deferred="deferred",e.redirect="redirect",e.error="error"})(J||(J={}));function D(e,t){if(t==="/")return e;if(!e.toLowerCase().startsWith(t.toLowerCase()))return null;let a=t.endsWith("/")?t.length-1:t.length,n=e.charAt(a);return n&&n!=="/"?null:e.slice(a)||"/"}function fe(e,t){t===void 0&&(t="/");let{pathname:a,search:n="",hash:r=""}=typeof e=="string"?I(e):e;return{pathname:a?a.startsWith("/")?a:de(a,t):t,search:pe(n),hash:ve(r)}}function de(e,t){let a=t.replace(/\/+$/,"").split("/");return e.split("/").forEach(r=>{r===".."?a.length>1&&a.pop():r!=="."&&a.push(r)}),a.length>1?a.join("/"):"/"}function B(e,t,a,n){return"Cannot include a '"+e+"' character in a manually specified "+("`to."+t+"` field ["+JSON.stringify(n)+"].  Please separate it out to the ")+("`to."+a+"` field. Alternatively you may provide the full path as ")+'a string in <Link to="..."> and the router will parse it for you.'}function he(e){return e.filter((t,a)=>a===0||t.route.path&&t.route.path.length>0)}function X(e,t){let a=he(e);return t?a.map((n,r)=>r===e.length-1?n.pathname:n.pathnameBase):a.map(n=>n.pathnameBase)}function Q(e,t,a,n){n===void 0&&(n=!1);let r;typeof e=="string"?r=I(e):(r=U({},e),y(!r.pathname||!r.pathname.includes("?"),B("?","pathname","search",r)),y(!r.pathname||!r.pathname.includes("#"),B("#","pathname","hash",r)),y(!r.search||!r.search.includes("#"),B("#","search","hash",r)));let o=e===""||r.pathname==="",i=o?"/":r.pathname,c;if(i==null)c=a;else{let h=t.length-1;if(!n&&i.startsWith("..")){let m=i.split("/");for(;m[0]==="..";)m.shift(),h-=1;r.pathname=m.join("/")}c=h>=0?t[h]:"/"}let u=fe(r,c),s=i&&i!=="/"&&i.endsWith("/"),f=(o||i===".")&&a.endsWith("/");return!u.pathname.endsWith("/")&&(s||f)&&(u.pathname+="/"),u}const Y=e=>e.join("/").replace(/\/\/+/g,"/"),pe=e=>!e||e==="?"?"":e.startsWith("?")?e:"?"+e,ve=e=>!e||e==="#"?"":e.startsWith("#")?e:"#"+e,Z=["post","put","patch","delete"];new Set(Z);const me=["get",...Z];new Set(me);/**
 * React Router v6.23.1
 *
 * Copyright (c) Remix Software Inc.
 *
 * This source code is licensed under the MIT license found in the
 * LICENSE.md file in the root directory of this source tree.
 *
 * @license MIT
 */function E(){return E=Object.assign?Object.assign.bind():function(e){for(var t=1;t<arguments.length;t++){var a=arguments[t];for(var n in a)Object.prototype.hasOwnProperty.call(a,n)&&(e[n]=a[n])}return e},E.apply(this,arguments)}const H=l.createContext(null),$=l.createContext(null),M=l.createContext(null),T=l.createContext({outlet:null,matches:[],isDataRoute:!1});function ge(e,t){let{relative:a}=t===void 0?{}:t;j()||y(!1);let{basename:n,navigator:r}=l.useContext($),{hash:o,pathname:i,search:c}=te(e,{relative:a}),u=i;return n!=="/"&&(u=i==="/"?n:Y([n,i])),r.createHref({pathname:u,search:c,hash:o})}function j(){return l.useContext(M)!=null}function z(){return j()||y(!1),l.useContext(M).location}function ee(e){l.useContext($).static||l.useLayoutEffect(e)}function xe(){let{isDataRoute:e}=l.useContext(T);return e?Se():ye()}function ye(){j()||y(!1);let e=l.useContext(H),{basename:t,future:a,navigator:n}=l.useContext($),{matches:r}=l.useContext(T),{pathname:o}=z(),i=JSON.stringify(X(r,a.v7_relativeSplatPath)),c=l.useRef(!1);return ee(()=>{c.current=!0}),l.useCallback(function(s,f){if(f===void 0&&(f={}),!c.current)return;if(typeof s=="number"){n.go(s);return}let h=Q(s,JSON.parse(i),o,f.relative==="path");e==null&&t!=="/"&&(h.pathname=h.pathname==="/"?t:Y([t,h.pathname])),(f.replace?n.replace:n.push)(h,f.state,f)},[t,n,i,o,e])}function te(e,t){let{relative:a}=t===void 0?{}:t,{future:n}=l.useContext($),{matches:r}=l.useContext(T),{pathname:o}=z(),i=JSON.stringify(X(r,n.v7_relativeSplatPath));return l.useMemo(()=>Q(e,JSON.parse(i),o,a==="path"),[e,i,o,a])}var ne=function(e){return e.UseBlocker="useBlocker",e.UseRevalidator="useRevalidator",e.UseNavigateStable="useNavigate",e}(ne||{}),ae=function(e){return e.UseBlocker="useBlocker",e.UseLoaderData="useLoaderData",e.UseActionData="useActionData",e.UseRouteError="useRouteError",e.UseNavigation="useNavigation",e.UseRouteLoaderData="useRouteLoaderData",e.UseMatches="useMatches",e.UseRevalidator="useRevalidator",e.UseNavigateStable="useNavigate",e.UseRouteId="useRouteId",e}(ae||{});function we(e){let t=l.useContext(H);return t||y(!1),t}function be(e){let t=l.useContext(T);return t||y(!1),t}function Ce(e){let t=be(),a=t.matches[t.matches.length-1];return a.route.id||y(!1),a.route.id}function Se(){let{router:e}=we(ne.UseNavigateStable),t=Ce(ae.UseNavigateStable),a=l.useRef(!1);return ee(()=>{a.current=!0}),l.useCallback(function(r,o){o===void 0&&(o={}),a.current&&(typeof r=="number"?e.navigate(r):e.navigate(r,E({fromRouteId:t},o)))},[e,t])}function Re(e){let{basename:t="/",children:a=null,location:n,navigationType:r=C.Pop,navigator:o,static:i=!1,future:c}=e;j()&&y(!1);let u=t.replace(/^\/*/,"/"),s=l.useMemo(()=>({basename:u,navigator:o,static:i,future:E({v7_relativeSplatPath:!1},c)}),[u,c,o,i]);typeof n=="string"&&(n=I(n));let{pathname:f="/",search:h="",hash:m="",state:S=null,key:b="default"}=n,p=l.useMemo(()=>{let d=D(f,u);return d==null?null:{location:{pathname:d,search:h,hash:m,state:S,key:b},navigationType:r}},[u,f,h,m,S,b,r]);return p==null?null:l.createElement($.Provider,{value:s},l.createElement(M.Provider,{children:a,value:p}))}new Promise(()=>{});/**
 * React Router DOM v6.23.1
 *
 * Copyright (c) Remix Software Inc.
 *
 * This source code is licensed under the MIT license found in the
 * LICENSE.md file in the root directory of this source tree.
 *
 * @license MIT
 */function k(){return k=Object.assign?Object.assign.bind():function(e){for(var t=1;t<arguments.length;t++){var a=arguments[t];for(var n in a)Object.prototype.hasOwnProperty.call(a,n)&&(e[n]=a[n])}return e},k.apply(this,arguments)}function Pe(e,t){if(e==null)return{};var a={},n=Object.keys(e),r,o;for(o=0;o<n.length;o++)r=n[o],!(t.indexOf(r)>=0)&&(a[r]=e[r]);return a}function $e(e){return!!(e.metaKey||e.altKey||e.ctrlKey||e.shiftKey)}function Ue(e,t){return e.button===0&&(!t||t==="_self")&&!$e(e)}const Le=["onClick","relative","reloadDocument","replace","state","target","to","preventScrollReset","unstable_viewTransition"],Ee="6";try{window.__reactRouterVersion=Ee}catch{}const Oe="startTransition",q=le[Oe];function Fe(e){let{basename:t,children:a,future:n,window:r}=e,o=l.useRef();o.current==null&&(o.current=se({window:r,v5Compat:!0}));let i=o.current,[c,u]=l.useState({action:i.action,location:i.location}),{v7_startTransition:s}=n||{},f=l.useCallback(h=>{s&&q?q(()=>u(h)):u(h)},[u,s]);return l.useLayoutEffect(()=>i.listen(f),[i,f]),l.createElement(Re,{basename:t,children:a,location:c.location,navigationType:c.action,navigator:i,future:n})}const Ne=typeof window<"u"&&typeof window.document<"u"&&typeof window.document.createElement<"u",Ie=/^(?:[a-z][a-z0-9+.-]*:|\/\/)/i,Te=l.forwardRef(function(t,a){let{onClick:n,relative:r,reloadDocument:o,replace:i,state:c,target:u,to:s,preventScrollReset:f,unstable_viewTransition:h}=t,m=Pe(t,Le),{basename:S}=l.useContext($),b,p=!1;if(typeof s=="string"&&Ie.test(s)&&(b=s,Ne))try{let x=new URL(window.location.href),w=s.startsWith("//")?new URL(x.protocol+s):new URL(s),R=D(w.pathname,S);w.origin===x.origin&&R!=null?s=R+w.search+w.hash:p=!0}catch{}let d=ge(s,{relative:r}),v=je(s,{replace:i,state:c,target:u,preventScrollReset:f,relative:r,unstable_viewTransition:h});function g(x){n&&n(x),x.defaultPrevented||v(x)}return l.createElement("a",k({},m,{href:b||d,onClick:p||o?n:g,ref:a,target:u}))});var K;(function(e){e.UseScrollRestoration="useScrollRestoration",e.UseSubmit="useSubmit",e.UseSubmitFetcher="useSubmitFetcher",e.UseFetcher="useFetcher",e.useViewTransitionState="useViewTransitionState"})(K||(K={}));var G;(function(e){e.UseFetcher="useFetcher",e.UseFetchers="useFetchers",e.UseScrollRestoration="useScrollRestoration"})(G||(G={}));function je(e,t){let{target:a,replace:n,state:r,preventScrollReset:o,relative:i,unstable_viewTransition:c}=t===void 0?{}:t,u=xe(),s=z(),f=te(e,{relative:i});return l.useCallback(h=>{if(Ue(h,a)){h.preventDefault();let m=n!==void 0?n:L(s)===L(f);u(e,{replace:m,state:r,preventScrollReset:o,relative:i,unstable_viewTransition:c})}},[s,u,f,n,r,a,e,o,i,c])}const Be=(e,t)=>{const a=parseInt(e.slice(1,3),16),n=parseInt(e.slice(3,5),16),r=parseInt(e.slice(5,7),16);return`rgba(${a}, ${n}, ${r}, ${t})`},_e=(e,t)=>{e[0]==="#"&&(e=e.slice(1));const a=parseInt(e,16);let n=(a>>16)-t,r=(a>>8&255)-t,o=(a&255)-t;return n<0&&(n=0),r<0&&(r=0),o<0&&(o=0),"#"+(n<<16|r<<8|o).toString(16).padStart(6,"0")};P`
  position: absolute !important;
  height: 1px;
  width: 1px;
  overflow: hidden;
  clip: rect(1px 1px 1px 1px);
  clip: rect(1px, 1px, 1px, 1px);
`;W.div`
  width: 1px;
  height: ${({$height:e})=>`${e}px`};
`;const re=l.forwardRef(({className:e,type:t="button",variant:a="default",size:n="default",fullWidth:r=!1,rounded:o=!1,href:i,...c},u)=>{const s=i?We:ke,f=i?{to:i,...c}:{type:t,...c};return oe.jsx(s,{ref:u,className:e,$variant:a,$size:n,$fullWidth:r,$rounded:o,...f})}),ie=P`
  display: inline-flex;
  align-items: center;
  justify-content: center;
  white-space: nowrap;
  border-radius: 8px;
  font-size: 14px;
  font-weight: 500;
  transition: 0.15s ease-in-out;
`,O={default:P`
    background-color: var(--color-primary);
    color: var(--color-primary-foreground);
    &:hover {
      background-color: ${Be(A.primary,.9)};
    }
  `,secondary:P`
    background-color: var(--color-secondary);
    color: var(--color-secondary-foreground);
    font-weight: bold;
    &:hover {
      background-color: ${_e(A.secondary,10)};
    }
  `},N={default:P`
    height: 40px;
    padding: 10px 24px;
  `,medium:P`
    height: 48px;
    padding: 12px 24px;
    font-size: 15px;
  `},ke=W.button`
  ${ie}
  ${e=>O[e.$variant]||O.default}
  ${e=>N[e.$size]||N.default}
  ${e=>e.$fullWidth&&"width: 100%;"}
  ${e=>e.$rounded&&"border-radius: 25px;"}
`,We=W(Te)`
  ${ie}
  ${e=>O[e.$variant]||O.default}
  ${e=>N[e.$size]||N.default}
  ${e=>e.$fullWidth&&"width: 100%;"}
  ${e=>e.$rounded&&"border-radius: 25px;"}
`;re.displayName="Button";re.__docgenInfo={description:"",methods:[],displayName:"Button",props:{type:{defaultValue:{value:"'button'",computed:!1},required:!1},variant:{defaultValue:{value:"'default'",computed:!1},required:!1},size:{defaultValue:{value:"'default'",computed:!1},required:!1},fullWidth:{defaultValue:{value:"false",computed:!1},required:!1},rounded:{defaultValue:{value:"false",computed:!1},required:!1}}};export{re as B,Te as L,Fe as a};
