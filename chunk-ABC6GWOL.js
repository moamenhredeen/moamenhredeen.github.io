import{$ as c,Eb as f,Jb as D,Pa as w,T as F,V as o,Y as h,_ as a,ea as E,sa as y,yb as A,zb as S}from"./chunk-XQMGPRYE.js";var M=null;function g(){return M}function Ve(n){M??=n}var b=class{};var B=new h(""),L=(()=>{let t=class t{historyGo(e){throw new Error("")}};t.\u0275fac=function(i){return new(i||t)},t.\u0275prov=o({token:t,factory:()=>c(P),providedIn:"platform"});let n=t;return n})();var P=(()=>{let t=class t extends L{constructor(){super(),this._doc=c(B),this._location=window.location,this._history=window.history}getBaseHrefFromDOM(){return g().getBaseHref(this._doc)}onPopState(e){let i=g().getGlobalEventTarget(this._doc,"window");return i.addEventListener("popstate",e,!1),()=>i.removeEventListener("popstate",e)}onHashChange(e){let i=g().getGlobalEventTarget(this._doc,"window");return i.addEventListener("hashchange",e,!1),()=>i.removeEventListener("hashchange",e)}get href(){return this._location.href}get protocol(){return this._location.protocol}get hostname(){return this._location.hostname}get port(){return this._location.port}get pathname(){return this._location.pathname}get search(){return this._location.search}get hash(){return this._location.hash}set pathname(e){this._location.pathname=e}pushState(e,i,r){this._history.pushState(e,i,r)}replaceState(e,i,r){this._history.replaceState(e,i,r)}forward(){this._history.forward()}back(){this._history.back()}historyGo(e=0){this._history.go(e)}getState(){return this._history.state}};t.\u0275fac=function(i){return new(i||t)},t.\u0275prov=o({token:t,factory:()=>new t,providedIn:"platform"});let n=t;return n})();function R(n,t){if(n.length==0)return t;if(t.length==0)return n;let s=0;return n.endsWith("/")&&s++,t.startsWith("/")&&s++,s==2?n+t.substring(1):s==1?n+t:n+"/"+t}function v(n){let t=n.match(/#|\?|$/),s=t&&t.index||n.length,e=s-(n[s-1]==="/"?1:0);return n.slice(0,e)+n.slice(s)}function u(n){return n&&n[0]!=="?"?"?"+n:n}var C=(()=>{let t=class t{historyGo(e){throw new Error("")}};t.\u0275fac=function(i){return new(i||t)},t.\u0275prov=o({token:t,factory:()=>c(N),providedIn:"root"});let n=t;return n})(),k=new h(""),N=(()=>{let t=class t extends C{constructor(e,i){super(),this._platformLocation=e,this._removeListenerFns=[],this._baseHref=i??this._platformLocation.getBaseHrefFromDOM()??c(B).location?.origin??""}ngOnDestroy(){for(;this._removeListenerFns.length;)this._removeListenerFns.pop()()}onPopState(e){this._removeListenerFns.push(this._platformLocation.onPopState(e),this._platformLocation.onHashChange(e))}getBaseHref(){return this._baseHref}prepareExternalUrl(e){return R(this._baseHref,e)}path(e=!1){let i=this._platformLocation.pathname+u(this._platformLocation.search),r=this._platformLocation.hash;return r&&e?`${i}${r}`:i}pushState(e,i,r,d){let l=this.prepareExternalUrl(r+u(d));this._platformLocation.pushState(e,i,l)}replaceState(e,i,r,d){let l=this.prepareExternalUrl(r+u(d));this._platformLocation.replaceState(e,i,l)}forward(){this._platformLocation.forward()}back(){this._platformLocation.back()}getState(){return this._platformLocation.getState()}historyGo(e=0){this._platformLocation.historyGo?.(e)}};t.\u0275fac=function(i){return new(i||t)(a(L),a(k,8))},t.\u0275prov=o({token:t,factory:t.\u0275fac,providedIn:"root"});let n=t;return n})();var $=(()=>{let t=class t{constructor(e){this._subject=new y,this._urlChangeListeners=[],this._urlChangeSubscription=null,this._locationStrategy=e;let i=this._locationStrategy.getBaseHref();this._basePath=z(v(_(i))),this._locationStrategy.onPopState(r=>{this._subject.emit({url:this.path(!0),pop:!0,state:r.state,type:r.type})})}ngOnDestroy(){this._urlChangeSubscription?.unsubscribe(),this._urlChangeListeners=[]}path(e=!1){return this.normalize(this._locationStrategy.path(e))}getState(){return this._locationStrategy.getState()}isCurrentPathEqualTo(e,i=""){return this.path()==this.normalize(e+u(i))}normalize(e){return t.stripTrailingSlash(U(this._basePath,_(e)))}prepareExternalUrl(e){return e&&e[0]!=="/"&&(e="/"+e),this._locationStrategy.prepareExternalUrl(e)}go(e,i="",r=null){this._locationStrategy.pushState(r,"",e,i),this._notifyUrlChangeListeners(this.prepareExternalUrl(e+u(i)),r)}replaceState(e,i="",r=null){this._locationStrategy.replaceState(r,"",e,i),this._notifyUrlChangeListeners(this.prepareExternalUrl(e+u(i)),r)}forward(){this._locationStrategy.forward()}back(){this._locationStrategy.back()}historyGo(e=0){this._locationStrategy.historyGo?.(e)}onUrlChange(e){return this._urlChangeListeners.push(e),this._urlChangeSubscription??=this.subscribe(i=>{this._notifyUrlChangeListeners(i.url,i.state)}),()=>{let i=this._urlChangeListeners.indexOf(e);this._urlChangeListeners.splice(i,1),this._urlChangeListeners.length===0&&(this._urlChangeSubscription?.unsubscribe(),this._urlChangeSubscription=null)}}_notifyUrlChangeListeners(e="",i){this._urlChangeListeners.forEach(r=>r(e,i))}subscribe(e,i,r){return this._subject.subscribe({next:e,error:i,complete:r})}};t.normalizeQueryParams=u,t.joinWithSlash=R,t.stripTrailingSlash=v,t.\u0275fac=function(i){return new(i||t)(a(C))},t.\u0275prov=o({token:t,factory:()=>x(),providedIn:"root"});let n=t;return n})();function x(){return new $(a(C))}function U(n,t){if(!n||!t.startsWith(n))return t;let s=t.substring(n.length);return s===""||["/",";","?","#"].includes(s[0])?s:t}function _(n){return n.replace(/\/index.html$/,"")}function z(n){if(new RegExp("^(https?:)?//").test(n)){let[,s]=n.split(/\/\/[^\/]+/);return s}return n}function je(n,t){t=encodeURIComponent(t);for(let s of n.split(";")){let e=s.indexOf("="),[i,r]=e==-1?[s,""]:[s.slice(0,e),s.slice(e+1)];if(i.trim()===t)return decodeURIComponent(r)}return null}function V(n,t){return new F(2100,!1)}var p=class{createSubscription(t,s){return D(()=>t.subscribe({next:s,error:e=>{throw e}}))}dispose(t){D(()=>t.unsubscribe())}},m=class{createSubscription(t,s){return t.then(s,e=>{throw e})}dispose(t){}},j=new m,G=new p,Ge=(()=>{let t=class t{constructor(e){this._latestValue=null,this.markForCheckOnValueUpdate=!0,this._subscription=null,this._obj=null,this._strategy=null,this._ref=e}ngOnDestroy(){this._subscription&&this._dispose(),this._ref=null}transform(e){if(!this._obj){if(e)try{this.markForCheckOnValueUpdate=!1,this._subscribe(e)}finally{this.markForCheckOnValueUpdate=!0}return this._latestValue}return e!==this._obj?(this._dispose(),this.transform(e)):this._latestValue}_subscribe(e){this._obj=e,this._strategy=this._selectStrategy(e),this._subscription=this._strategy.createSubscription(e,i=>this._updateLatestValue(e,i))}_selectStrategy(e){if(A(e))return j;if(S(e))return G;throw V(t,e)}_dispose(){this._strategy.dispose(this._subscription),this._latestValue=null,this._subscription=null,this._obj=null}_updateLatestValue(e,i){e===this._obj&&(this._latestValue=i,this.markForCheckOnValueUpdate&&this._ref?.markForCheck())}};t.\u0275fac=function(i){return new(i||t)(w(f,16))},t.\u0275pipe=E({name:"async",type:t,pure:!1,standalone:!0});let n=t;return n})();var H="browser",Y="server";function He(n){return n===H}function Ye(n){return n===Y}var I=class{};export{g as a,Ve as b,b as c,B as d,C as e,$ as f,je as g,Ge as h,H as i,He as j,Ye as k,I as l};