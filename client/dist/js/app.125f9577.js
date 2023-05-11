(function(){"use strict";var t={7103:function(t,e,a){var n=a(9963),i=a(6252);function r(t,e,a,n,r,s){const o=(0,i.up)("page-header"),u=(0,i.up)("router-view"),c=(0,i.up)("page-footer");return(0,i.wg)(),(0,i.iD)("div",null,[(0,i.Wm)(o),(0,i.Wm)(u),(0,i.Wm)(c)])}const s=t=>((0,i.dD)("data-v-22fd4618"),t=t(),(0,i.Cn)(),t),o={id:"block-header"},u=s((()=>(0,i._)("h1",{id:"title"},"Have you visited every state?",-1))),c=[u];function l(t,e,a,n,r,s){return(0,i.wg)(),(0,i.iD)("div",o,c)}var d={name:"PageHeader"},p=a(3744);const h=(0,p.Z)(d,[["render",l],["__scopeId","data-v-22fd4618"]]);var v=h;const m=t=>((0,i.dD)("data-v-5f58a6cd"),t=t(),(0,i.Cn)(),t),f={id:"navigation-links"},g={class:"nav-link"},y={class:"nav-link"},b={class:"nav-link"},w=m((()=>(0,i._)("p",null,[(0,i.Uk)("Header image by "),(0,i._)("a",{href:"https://unsplash.com/photos/KpBXAOs80YI"},"@chrislawton on Unsplash")],-1))),A=m((()=>(0,i._)("p",null,[(0,i._)("a",{target:"_blank",href:"https://icons8.com/icon/43632/map"},"Map icon"),(0,i.Uk)(" icon by "),(0,i._)("a",{target:"_blank",href:""},"Icons8")],-1)));function k(t,e,a,n,r,s){const o=(0,i.up)("router-link");return(0,i.wg)(),(0,i.iD)("div",null,[(0,i._)("div",f,[(0,i._)("span",g,[(0,i.Wm)(o,{to:"/"},{default:(0,i.w5)((()=>[(0,i.Uk)("Home")])),_:1})]),(0,i._)("span",y,[(0,i.Wm)(o,{to:"about"},{default:(0,i.w5)((()=>[(0,i.Uk)("About this site")])),_:1})]),(0,i._)("span",b,[(0,i.Wm)(o,{to:"/visisted"},{default:(0,i.w5)((()=>[(0,i.Uk)("States you have visited")])),_:1})])]),w,A])}var z={name:"PageFooter"};const S=(0,p.Z)(z,[["render",k],["__scopeId","data-v-5f58a6cd"]]);var D=S;const C={class:"state-list-container"};function j(t,e,a,n,r,s){const o=(0,i.up)("state-summary"),u=(0,i.up)("state-detail");return(0,i.wg)(),(0,i.iD)("div",null,[(0,i._)("div",null,[(0,i.Wm)(o,{states:r.states},null,8,["states"])]),(0,i._)("div",C,[((0,i.wg)(!0),(0,i.iD)(i.HY,null,(0,i.Ko)(r.states,(t=>((0,i.wg)(),(0,i.iD)("div",{class:"state-container",key:t.name},[(0,i.Wm)(u,{state:t,onUpdateVisited:s.updateVisited},null,8,["state","onUpdateVisited"])])))),128))])])}var O=a(3577),W="data:image/png;base64,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";const x=t=>((0,i.dD)("data-v-6e52e445"),t=t(),(0,i.Cn)(),t),V={class:"state-info"},E={class:"state-name"},Z=x((()=>(0,i._)("img",{class:"map-icon",src:W},null,-1)));function F(t,e,a,r,s,o){const u=(0,i.up)("router-link");return(0,i.wg)(),(0,i.iD)("div",V,[(0,i._)("span",E,(0,O.zw)(a.state.name),1),(0,i._)("div",null,[(0,i.wy)((0,i._)("input",{class:"visit-state",type:"checkbox","onUpdate:modelValue":e[0]||(e[0]=t=>s.visited=t),onChange:e[1]||(e[1]=(...t)=>o.visitedChanged&&o.visitedChanged(...t))},null,544),[[n.e8,s.visited]])]),(0,i._)("div",null,[(0,i.Wm)(u,{to:{name:"StateMap",params:{state:a.state.name}}},{default:(0,i.w5)((()=>[Z])),_:1},8,["to"])])])}var P={name:"StateDetail",emits:["update-visited"],props:{state:Object},data(){return{visited:this.state.visited}},methods:{visitedChanged(){this.$emit("update-visited",this.state.name,this.visited)}}};const X=(0,p.Z)(P,[["render",F],["__scopeId","data-v-6e52e445"]]);var Y=X;const _={key:0,id:"all-visited-message"};function M(t,e,a,n,r,s){return(0,i.wg)(),(0,i.iD)("div",null,[(0,i._)("p",null,"There are a total of "+(0,O.zw)(a.states.length)+" states and the District of Columbia",1),(0,i._)("p",null,"You have visited "+(0,O.zw)(s.totalVisited)+" "+(0,O.zw)(s.units),1),s.areAllVisited?((0,i.wg)(),(0,i.iD)("p",_,"You have visited all the states and the District of Columbia")):(0,i.kq)("",!0)])}var T={name:"StateSummary",props:{states:Array},computed:{totalVisited(){let t=0;return this.states.forEach((e=>{e.visited&&t++})),t},units(){return 1==this.totalVisited?"state":"states"},areAllVisited(){return this.totalVisited===this.states.length}}};const U=(0,p.Z)(T,[["render",M]]);var L=U,q={components:{StateDetail:Y,StateSummary:L},name:"StateList",data(){return{states:[]}},mounted(){this.fetchAllStates()},methods:{fetchAllStates(){this.$stateService.getAllStates().then((t=>{this.states=t})).catch((t=>{alert("Sorry, can't fetch state list"),console.error(t)}))},updateVisited(t,e){this.$stateService.setVisited(t,e).then((()=>{this.fetchAllStates()})).catch((t=>{alert("Sorry, can't update state"),console.error(t)}))}}};const H=(0,p.Z)(q,[["render",j],["__scopeId","data-v-a78ee536"]]);var I=H,R={name:"App",components:{PageHeader:v,PageFooter:D,StateList:I}};const K=(0,p.Z)(R,[["render",r]]);var N=K,G=a(6154),B={getAllStates(){return G.Z.get("/api/states").then((t=>t.data))},setVisited(t,e){let a={visited:e};return G.Z.patch("/api/state/"+t,a).then((t=>t.data))},getOneState(t){return G.Z.get("/api/state/"+t).then((t=>t.data))}},J=a(2119);const Q=(0,i._)("h2",null,"Where have you traveled to?",-1),$=(0,i._)("p",null,"Use this site to keep track of which states you have traveled to",-1),tt=(0,i._)("p",null,"A Vue.js site by Alou, and it's hosted at Azure!",-1),et=[Q,$,tt];function at(t,e,a,n,r,s){return(0,i.wg)(),(0,i.iD)("div",null,et)}var nt={name:"AboutSite"};const it=(0,p.Z)(nt,[["render",at]]);var rt=it;const st={class:"state-map"},ot={key:0},ut={key:1},ct={key:2,id:"map-container"};function lt(t,e,a,n,r,s){const o=(0,i.up)("l-tile-layer"),u=(0,i.up)("l-map");return(0,i.wg)(),(0,i.iD)("div",st,[(0,i._)("h2",null,"The state of "+(0,O.zw)(r.state.name),1),r.state.visited?((0,i.wg)(),(0,i.iD)("p",ot,"You have visited this state")):((0,i.wg)(),(0,i.iD)("p",ut,"You have not visited this state yet")),r.dataReady?((0,i.wg)(),(0,i.iD)("div",ct,[(0,i.Wm)(u,{ref:"map",onReady:s.onMapReady,center:s.mapCenter,zoom:r.state.zoom},{default:(0,i.w5)((()=>[(0,i.Wm)(o,{url:"https://{s}.tile.openstreetmap.org/{z}/{x}/{y}.png",attribution:"© OpenStreetMap contributors"})])),_:1},8,["onReady","center","zoom"])])):(0,i.kq)("",!0)])}a(7658);var dt=a(7713),pt={name:"StateMap",components:{LMap:dt.iA,LTileLayer:dt.Hw},data(){return{state:{},dataReady:!1,mapReady:!1}},mounted(){this.state.name=this.$route.params.state,this.fetchStateData()},methods:{fetchStateData(){this.$stateService.getOneState(this.state.name).then((t=>{this.state=t,this.dataReady=!0})).catch((t=>{t.response&&404===t.response.status?(this.state.name="?",this.$router.push({name:"NotFound"})):(alert("Sorry, error fetching data about this state"),console.error(t))}))},onMapReady(){this.mapReady=!0},setMapView(){this.mapReady&&this.dataReady&&this.$refs.map.leafletObject.setView(this.mapCenter,this.zoom)}},computed:{mapCenter(){return[this.state.lat,this.state.lon]}}};const ht=(0,p.Z)(pt,[["render",lt],["__scopeId","data-v-56a2f34c"]]);var vt=ht;const mt=(0,i._)("h2",null,"Sorry, that page was not found",-1);function ft(t,e,a,n,r,s){const o=(0,i.up)("router-link");return(0,i.wg)(),(0,i.iD)("div",null,[mt,(0,i._)("p",null,[(0,i.Uk)("Would you like to go back to the "),(0,i.Wm)(o,{to:"/"},{default:(0,i.w5)((()=>[(0,i.Uk)("home page")])),_:1})])])}var gt={name:"NotFound"};const yt=(0,p.Z)(gt,[["render",ft]]);var bt=yt;const wt=(0,i._)("h2",null,"You've visited these states",-1);function At(t,e,a,n,r,s){return(0,i.wg)(),(0,i.iD)("div",null,[wt,(0,i.Uk)(" "+(0,O.zw)(r.visited),1)])}var kt={name:"VisitedStates",data(){return{visited:[]}},mounted(){this.fetchAllStates()},methods:{fetchAllStates(){this.$stateService.getVisistedStates().then((t=>{this.visited=this.visited})).catch((t=>{console.log(t)}))}}};const zt=(0,p.Z)(kt,[["render",At]]);var St=zt,Dt=(0,J.p7)({history:(0,J.r5)(),routes:[{path:"/",name:"StateList",component:I},{path:"/about",name:"AboutSite",component:rt},{path:"/map/:state",name:"StateMap",component:vt},{path:"/visisted",name:"VisitedStates",component:St},{path:"/:pathMatch(.*)*",name:"NotFound",component:bt}]});let Ct=(0,n.ri)(N);Ct.config.globalProperties.$stateService=B,Ct.use(Dt),Ct.mount("#app")}},e={};function a(n){var i=e[n];if(void 0!==i)return i.exports;var r=e[n]={exports:{}};return t[n].call(r.exports,r,r.exports,a),r.exports}a.m=t,function(){var t=[];a.O=function(e,n,i,r){if(!n){var s=1/0;for(l=0;l<t.length;l++){n=t[l][0],i=t[l][1],r=t[l][2];for(var o=!0,u=0;u<n.length;u++)(!1&r||s>=r)&&Object.keys(a.O).every((function(t){return a.O[t](n[u])}))?n.splice(u--,1):(o=!1,r<s&&(s=r));if(o){t.splice(l--,1);var c=i();void 0!==c&&(e=c)}}return e}r=r||0;for(var l=t.length;l>0&&t[l-1][2]>r;l--)t[l]=t[l-1];t[l]=[n,i,r]}}(),function(){var t,e=Object.getPrototypeOf?function(t){return Object.getPrototypeOf(t)}:function(t){return t.__proto__};a.t=function(n,i){if(1&i&&(n=this(n)),8&i)return n;if("object"===typeof n&&n){if(4&i&&n.__esModule)return n;if(16&i&&"function"===typeof n.then)return n}var r=Object.create(null);a.r(r);var s={};t=t||[null,e({}),e([]),e(e)];for(var o=2&i&&n;"object"==typeof o&&!~t.indexOf(o);o=e(o))Object.getOwnPropertyNames(o).forEach((function(t){s[t]=function(){return n[t]}}));return s["default"]=function(){return n},a.d(r,s),r}}(),function(){a.d=function(t,e){for(var n in e)a.o(e,n)&&!a.o(t,n)&&Object.defineProperty(t,n,{enumerable:!0,get:e[n]})}}(),function(){a.f={},a.e=function(t){return Promise.all(Object.keys(a.f).reduce((function(e,n){return a.f[n](t,e),e}),[]))}}(),function(){a.u=function(t){return"js/"+t+"."+{93:"bc640ad6",243:"8202dbbb",431:"fc1d611c",633:"96f22add",858:"575b636e"}[t]+".js"}}(),function(){a.miniCssF=function(t){}}(),function(){a.g=function(){if("object"===typeof globalThis)return globalThis;try{return this||new Function("return this")()}catch(t){if("object"===typeof window)return window}}()}(),function(){a.o=function(t,e){return Object.prototype.hasOwnProperty.call(t,e)}}(),function(){var t={},e="client:";a.l=function(n,i,r,s){if(t[n])t[n].push(i);else{var o,u;if(void 0!==r)for(var c=document.getElementsByTagName("script"),l=0;l<c.length;l++){var d=c[l];if(d.getAttribute("src")==n||d.getAttribute("data-webpack")==e+r){o=d;break}}o||(u=!0,o=document.createElement("script"),o.charset="utf-8",o.timeout=120,a.nc&&o.setAttribute("nonce",a.nc),o.setAttribute("data-webpack",e+r),o.src=n),t[n]=[i];var p=function(e,a){o.onerror=o.onload=null,clearTimeout(h);var i=t[n];if(delete t[n],o.parentNode&&o.parentNode.removeChild(o),i&&i.forEach((function(t){return t(a)})),e)return e(a)},h=setTimeout(p.bind(null,void 0,{type:"timeout",target:o}),12e4);o.onerror=p.bind(null,o.onerror),o.onload=p.bind(null,o.onload),u&&document.head.appendChild(o)}}}(),function(){a.r=function(t){"undefined"!==typeof Symbol&&Symbol.toStringTag&&Object.defineProperty(t,Symbol.toStringTag,{value:"Module"}),Object.defineProperty(t,"__esModule",{value:!0})}}(),function(){a.p="/"}(),function(){var t={143:0};a.f.j=function(e,n){var i=a.o(t,e)?t[e]:void 0;if(0!==i)if(i)n.push(i[2]);else{var r=new Promise((function(a,n){i=t[e]=[a,n]}));n.push(i[2]=r);var s=a.p+a.u(e),o=new Error,u=function(n){if(a.o(t,e)&&(i=t[e],0!==i&&(t[e]=void 0),i)){var r=n&&("load"===n.type?"missing":n.type),s=n&&n.target&&n.target.src;o.message="Loading chunk "+e+" failed.\n("+r+": "+s+")",o.name="ChunkLoadError",o.type=r,o.request=s,i[1](o)}};a.l(s,u,"chunk-"+e,e)}},a.O.j=function(e){return 0===t[e]};var e=function(e,n){var i,r,s=n[0],o=n[1],u=n[2],c=0;if(s.some((function(e){return 0!==t[e]}))){for(i in o)a.o(o,i)&&(a.m[i]=o[i]);if(u)var l=u(a)}for(e&&e(n);c<s.length;c++)r=s[c],a.o(t,r)&&t[r]&&t[r][0](),t[r]=0;return a.O(l)},n=self["webpackChunkclient"]=self["webpackChunkclient"]||[];n.forEach(e.bind(null,0)),n.push=e.bind(null,n.push.bind(n))}();var n=a.O(void 0,[998],(function(){return a(7103)}));n=a.O(n)})();
//# sourceMappingURL=app.125f9577.js.map