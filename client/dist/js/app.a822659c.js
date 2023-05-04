(function(){"use strict";var t={310:function(t,e,a){var n=a(963),r=a(252);function i(t,e,a,n,i,s){const o=(0,r.up)("page-header"),u=(0,r.up)("router-view"),c=(0,r.up)("page-footer");return(0,r.wg)(),(0,r.iD)("div",null,[(0,r.Wm)(o),(0,r.Wm)(u),(0,r.Wm)(c)])}const s=t=>((0,r.dD)("data-v-22fd4618"),t=t(),(0,r.Cn)(),t),o={id:"block-header"},u=s((()=>(0,r._)("h1",{id:"title"},"Have you visited every state?",-1))),c=[u];function l(t,e,a,n,i,s){return(0,r.wg)(),(0,r.iD)("div",o,c)}var d={name:"PageHeader"},p=a(744);const v=(0,p.Z)(d,[["render",l],["__scopeId","data-v-22fd4618"]]);var h=v;const f=t=>((0,r.dD)("data-v-063f9bae"),t=t(),(0,r.Cn)(),t),m={id:"navigation-links"},g={class:"nav-link"},y={class:"nav-link"},b=f((()=>(0,r._)("p",null,[(0,r.Uk)("Header image by "),(0,r._)("a",{href:"https://unsplash.com/photos/KpBXAOs80YI"},"@chrislawton on Unsplash")],-1))),w=f((()=>(0,r._)("p",null,[(0,r._)("a",{target:"_blank",href:"https://icons8.com/icon/43632/map"},"Map icon"),(0,r.Uk)(" icon by "),(0,r._)("a",{target:"_blank",href:""},"Icons8")],-1)));function A(t,e,a,n,i,s){const o=(0,r.up)("router-link");return(0,r.wg)(),(0,r.iD)("div",null,[(0,r._)("div",m,[(0,r._)("span",g,[(0,r.Wm)(o,{to:"/"},{default:(0,r.w5)((()=>[(0,r.Uk)("Home")])),_:1})]),(0,r._)("span",y,[(0,r.Wm)(o,{to:"about"},{default:(0,r.w5)((()=>[(0,r.Uk)("About this site")])),_:1})])]),b,w])}var z={name:"PageFooter"};const k=(0,p.Z)(z,[["render",A],["__scopeId","data-v-063f9bae"]]);var S=k;const D={class:"state-list-container"};function C(t,e,a,n,i,s){const o=(0,r.up)("state-summary"),u=(0,r.up)("state-detail");return(0,r.wg)(),(0,r.iD)("div",null,[(0,r._)("div",null,[(0,r.Wm)(o,{states:i.states},null,8,["states"])]),(0,r._)("div",D,[((0,r.wg)(!0),(0,r.iD)(r.HY,null,(0,r.Ko)(i.states,(t=>((0,r.wg)(),(0,r.iD)("div",{class:"state-container",key:t.name},[(0,r.Wm)(u,{state:t,onUpdateVisited:s.updateVisited},null,8,["state","onUpdateVisited"])])))),128))])])}var j=a(577),O="data:image/png;base64,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";const x=t=>((0,r.dD)("data-v-6e52e445"),t=t(),(0,r.Cn)(),t),E={class:"state-info"},W={class:"state-name"},V=x((()=>(0,r._)("img",{class:"map-icon",src:O},null,-1)));function Z(t,e,a,i,s,o){const u=(0,r.up)("router-link");return(0,r.wg)(),(0,r.iD)("div",E,[(0,r._)("span",W,(0,j.zw)(a.state.name),1),(0,r._)("div",null,[(0,r.wy)((0,r._)("input",{class:"visit-state",type:"checkbox","onUpdate:modelValue":e[0]||(e[0]=t=>s.visited=t),onChange:e[1]||(e[1]=(...t)=>o.visitedChanged&&o.visitedChanged(...t))},null,544),[[n.e8,s.visited]])]),(0,r._)("div",null,[(0,r.Wm)(u,{to:{name:"StateMap",params:{state:a.state.name}}},{default:(0,r.w5)((()=>[V])),_:1},8,["to"])])])}var F={name:"StateDetail",emits:["update-visited"],props:{state:Object},data(){return{visited:this.state.visited}},methods:{visitedChanged(){this.$emit("update-visited",this.state.name,this.visited)}}};const P=(0,p.Z)(F,[["render",Z],["__scopeId","data-v-6e52e445"]]);var X=P;const T={key:0,id:"all-visited-message"};function Y(t,e,a,n,i,s){return(0,r.wg)(),(0,r.iD)("div",null,[(0,r._)("p",null,"There are a total of "+(0,j.zw)(a.states.length)+" states and the District of Columbia",1),(0,r._)("p",null,"You have visited "+(0,j.zw)(s.totalVisited)+" "+(0,j.zw)(s.units),1),s.areAllVisited?((0,r.wg)(),(0,r.iD)("p",T,"You have visited all the states and the District of Columbia")):(0,r.kq)("",!0)])}var M={name:"StateSummary",props:{states:Array},computed:{totalVisited(){let t=0;return this.states.forEach((e=>{e.visited&&t++})),t},units(){return 1==this.totalVisited?"state":"states"},areAllVisited(){return this.totalVisited===this.states.length}}};const L=(0,p.Z)(M,[["render",Y]]);var _=L,q={components:{StateDetail:X,StateSummary:_},name:"StateList",data(){return{states:[]}},mounted(){this.fetchAllStates()},methods:{fetchAllStates(){this.$stateService.getAllStates().then((t=>{this.states=t})).catch((t=>{alert("Sorry, can't fetch state list"),console.error(t)}))},updateVisited(t,e){this.$stateService.setVisited(t,e).then((()=>{this.fetchAllStates()})).catch((t=>{alert("Sorry, can't update state"),console.error(t)}))}}};const U=(0,p.Z)(q,[["render",C],["__scopeId","data-v-a78ee536"]]);var H=U,I={name:"App",components:{PageHeader:h,PageFooter:S,StateList:H}};const R=(0,p.Z)(I,[["render",i]]);var K=R,G=a(154),N={getAllStates(){return G.Z.get("/api/states").then((t=>t.data))},setVisited(t,e){let a={visited:e};return G.Z.patch("/api/state/"+t,a).then((t=>t.data))},getOneState(t){return G.Z.get("/api/state/"+t).then((t=>t.data))}},B=a(119);const J=(0,r._)("h2",null,"Where have you traveled to",-1),Q=(0,r._)("p",null,"Use this site to keep track of which states you have traveled to",-1),$=(0,r._)("p",null,"A Vue.js site by Alou",-1),tt=[J,Q,$];function et(t,e,a,n,i,s){return(0,r.wg)(),(0,r.iD)("div",null,tt)}var at={name:"AboutSite"};const nt=(0,p.Z)(at,[["render",et]]);var rt=nt;const it={class:"state-map"},st={key:0},ot={key:1},ut={key:2,id:"map-container"};function ct(t,e,a,n,i,s){const o=(0,r.up)("l-tile-layer"),u=(0,r.up)("l-map");return(0,r.wg)(),(0,r.iD)("div",it,[(0,r._)("h2",null,"The state of "+(0,j.zw)(i.state.name),1),i.state.visited?((0,r.wg)(),(0,r.iD)("p",st,"You have visited this state")):((0,r.wg)(),(0,r.iD)("p",ot,"You have not visited this state yet")),i.dataReady?((0,r.wg)(),(0,r.iD)("div",ut,[(0,r.Wm)(u,{ref:"map",onReady:s.onMapReady,center:s.mapCenter,zoom:i.state.zoom},{default:(0,r.w5)((()=>[(0,r.Wm)(o,{url:"https://{s}.tile.openstreetmap.org/{z}/{x}/{y}.png",attribution:"© OpenStreetMap contributors"})])),_:1},8,["onReady","center","zoom"])])):(0,r.kq)("",!0)])}var lt=a(713),dt={name:"StateMap",components:{LMap:lt.iA,LTileLayer:lt.Hw},data(){return{state:{},dataReady:!1,mapReady:!1}},mounted(){this.state.name=this.$route.params.state,this.fetchStateData()},methods:{fetchStateData(){this.$stateService.getOneState(this.state.name).then((t=>{this.state=t,this.dataReady=!0})).catch((t=>{t.response&&404===t.response.status?this.state.name="?":(alert("Sorry, error fetching data about this state"),console.error(t))}))},onMapReady(){this.mapReady=!0},setMapView(){this.mapReady&&this.dataReady&&this.$refs.map.leafletObject.setView(this.mapCenter,this.zoom)}},computed:{mapCenter(){return[this.state.lat,this.state.lon]}}};const pt=(0,p.Z)(dt,[["render",ct],["__scopeId","data-v-35c5d928"]]);var vt=pt,ht=(0,B.p7)({history:(0,B.r5)(),routes:[{path:"/",name:"StateList",component:H},{path:"/about",name:"AboutSite",component:rt},{path:"/map/:state",name:"StateMap",component:vt}]});let ft=(0,n.ri)(K);ft.config.globalProperties.$stateService=N,ft.use(ht),ft.mount("#app")}},e={};function a(n){var r=e[n];if(void 0!==r)return r.exports;var i=e[n]={exports:{}};return t[n].call(i.exports,i,i.exports,a),i.exports}a.m=t,function(){var t=[];a.O=function(e,n,r,i){if(!n){var s=1/0;for(l=0;l<t.length;l++){n=t[l][0],r=t[l][1],i=t[l][2];for(var o=!0,u=0;u<n.length;u++)(!1&i||s>=i)&&Object.keys(a.O).every((function(t){return a.O[t](n[u])}))?n.splice(u--,1):(o=!1,i<s&&(s=i));if(o){t.splice(l--,1);var c=r();void 0!==c&&(e=c)}}return e}i=i||0;for(var l=t.length;l>0&&t[l-1][2]>i;l--)t[l]=t[l-1];t[l]=[n,r,i]}}(),function(){var t,e=Object.getPrototypeOf?function(t){return Object.getPrototypeOf(t)}:function(t){return t.__proto__};a.t=function(n,r){if(1&r&&(n=this(n)),8&r)return n;if("object"===typeof n&&n){if(4&r&&n.__esModule)return n;if(16&r&&"function"===typeof n.then)return n}var i=Object.create(null);a.r(i);var s={};t=t||[null,e({}),e([]),e(e)];for(var o=2&r&&n;"object"==typeof o&&!~t.indexOf(o);o=e(o))Object.getOwnPropertyNames(o).forEach((function(t){s[t]=function(){return n[t]}}));return s["default"]=function(){return n},a.d(i,s),i}}(),function(){a.d=function(t,e){for(var n in e)a.o(e,n)&&!a.o(t,n)&&Object.defineProperty(t,n,{enumerable:!0,get:e[n]})}}(),function(){a.f={},a.e=function(t){return Promise.all(Object.keys(a.f).reduce((function(e,n){return a.f[n](t,e),e}),[]))}}(),function(){a.u=function(t){return"js/"+t+"."+{93:"59386b2c",243:"5ff6cf6f",431:"6c4b2b61",633:"d93c196c",858:"da99cb88"}[t]+".js"}}(),function(){a.miniCssF=function(t){}}(),function(){a.g=function(){if("object"===typeof globalThis)return globalThis;try{return this||new Function("return this")()}catch(t){if("object"===typeof window)return window}}()}(),function(){a.o=function(t,e){return Object.prototype.hasOwnProperty.call(t,e)}}(),function(){var t={},e="client:";a.l=function(n,r,i,s){if(t[n])t[n].push(r);else{var o,u;if(void 0!==i)for(var c=document.getElementsByTagName("script"),l=0;l<c.length;l++){var d=c[l];if(d.getAttribute("src")==n||d.getAttribute("data-webpack")==e+i){o=d;break}}o||(u=!0,o=document.createElement("script"),o.charset="utf-8",o.timeout=120,a.nc&&o.setAttribute("nonce",a.nc),o.setAttribute("data-webpack",e+i),o.src=n),t[n]=[r];var p=function(e,a){o.onerror=o.onload=null,clearTimeout(v);var r=t[n];if(delete t[n],o.parentNode&&o.parentNode.removeChild(o),r&&r.forEach((function(t){return t(a)})),e)return e(a)},v=setTimeout(p.bind(null,void 0,{type:"timeout",target:o}),12e4);o.onerror=p.bind(null,o.onerror),o.onload=p.bind(null,o.onload),u&&document.head.appendChild(o)}}}(),function(){a.r=function(t){"undefined"!==typeof Symbol&&Symbol.toStringTag&&Object.defineProperty(t,Symbol.toStringTag,{value:"Module"}),Object.defineProperty(t,"__esModule",{value:!0})}}(),function(){a.p="/"}(),function(){var t={143:0};a.f.j=function(e,n){var r=a.o(t,e)?t[e]:void 0;if(0!==r)if(r)n.push(r[2]);else{var i=new Promise((function(a,n){r=t[e]=[a,n]}));n.push(r[2]=i);var s=a.p+a.u(e),o=new Error,u=function(n){if(a.o(t,e)&&(r=t[e],0!==r&&(t[e]=void 0),r)){var i=n&&("load"===n.type?"missing":n.type),s=n&&n.target&&n.target.src;o.message="Loading chunk "+e+" failed.\n("+i+": "+s+")",o.name="ChunkLoadError",o.type=i,o.request=s,r[1](o)}};a.l(s,u,"chunk-"+e,e)}},a.O.j=function(e){return 0===t[e]};var e=function(e,n){var r,i,s=n[0],o=n[1],u=n[2],c=0;if(s.some((function(e){return 0!==t[e]}))){for(r in o)a.o(o,r)&&(a.m[r]=o[r]);if(u)var l=u(a)}for(e&&e(n);c<s.length;c++)i=s[c],a.o(t,i)&&t[i]&&t[i][0](),t[i]=0;return a.O(l)},n=self["webpackChunkclient"]=self["webpackChunkclient"]||[];n.forEach(e.bind(null,0)),n.push=e.bind(null,n.push.bind(n))}();var n=a.O(void 0,[998],(function(){return a(310)}));n=a.O(n)})();
//# sourceMappingURL=app.a822659c.js.map