import{S as C,r as y,U as w,V as b,W as O,a as B,C as M,X as _,k as S,Y as E,B as H,O as R,Z as z}from"./BprquubQ.js";const j=s=>s==="defer"||s===!1;function U(...s){var m;const i=typeof s[s.length-1]=="string"?s.pop():void 0;typeof s[0]!="string"&&s.unshift(i);let[t,u,a={}]=s;if(typeof t!="string")throw new TypeError("[nuxt] [asyncData] key must be a string.");if(typeof u!="function")throw new TypeError("[nuxt] [asyncData] handler must be a function.");const e=S(),v=u,p=()=>null,g=()=>e.isHydrating?e.payload.data[t]:e.static.data[t];a.server=a.server??!0,a.default=a.default??p,a.getCachedData=a.getCachedData??g,a.lazy=a.lazy??!1,a.immediate=a.immediate??!0,a.deep=a.deep??C.deep,a.dedupe=a.dedupe??"cancel";const d=()=>a.getCachedData(t,e)!=null;if(!e._asyncData[t]||!a.immediate){(m=e.payload._errors)[t]??(m[t]=null);const o=a.deep?y:w;e._asyncData[t]={data:o(a.getCachedData(t,e)??a.default()),pending:y(!d()),error:b(e.payload._errors,t),status:y("idle")}}const r={...e._asyncData[t]};r.refresh=r.execute=(o={})=>{if(e._asyncDataPromises[t]){if(j(o.dedupe??a.dedupe))return e._asyncDataPromises[t];e._asyncDataPromises[t].cancelled=!0}if((o._initial||e.isHydrating&&o._initial!==!1)&&d())return Promise.resolve(a.getCachedData(t,e));r.pending.value=!0,r.status.value="pending";const l=new Promise((c,n)=>{try{c(v(e))}catch(f){n(f)}}).then(async c=>{if(l.cancelled)return e._asyncDataPromises[t];let n=c;a.transform&&(n=await a.transform(c)),a.pick&&(n=N(n,a.pick)),e.payload.data[t]=n,r.data.value=n,r.error.value=null,r.status.value="success"}).catch(c=>{if(l.cancelled)return e._asyncDataPromises[t];r.error.value=E(c),r.data.value=H(a.default()),r.status.value="error"}).finally(()=>{l.cancelled||(r.pending.value=!1,delete e._asyncDataPromises[t])});return e._asyncDataPromises[t]=l,e._asyncDataPromises[t]},r.clear=()=>K(e,t);const D=()=>r.refresh({_initial:!0}),P=a.server!==!1&&e.payload.serverRendered;{const o=R();if(o&&!o._nuxtOnBeforeMountCbs){o._nuxtOnBeforeMountCbs=[];const n=o._nuxtOnBeforeMountCbs;O(()=>{n.forEach(f=>{f()}),n.splice(0,n.length)}),B(()=>n.splice(0,n.length))}P&&e.isHydrating&&(r.error.value||d())?(r.pending.value=!1,r.status.value=r.error.value?"error":"success"):o&&(e.payload.serverRendered&&e.isHydrating||a.lazy)&&a.immediate?o._nuxtOnBeforeMountCbs.push(D):a.immediate&&D();const l=z();if(a.watch){const n=M(a.watch,()=>r.refresh());l&&_(n)}const c=e.hook("app:data:refresh",async n=>{(!n||n.includes(t))&&await r.refresh()});l&&_(c)}const h=Promise.resolve(e._asyncDataPromises[t]).then(()=>r);return Object.assign(h,r),h}function K(s,i){i in s.payload.data&&(s.payload.data[i]=void 0),i in s.payload._errors&&(s.payload._errors[i]=null),s._asyncData[i]&&(s._asyncData[i].data.value=void 0,s._asyncData[i].error.value=null,s._asyncData[i].pending.value=!1,s._asyncData[i].status.value="idle"),i in s._asyncDataPromises&&(s._asyncDataPromises[i].cancelled=!0,s._asyncDataPromises[i]=void 0)}function N(s,i){const t={};for(const u of i)t[u]=s[u];return t}export{U as u};
