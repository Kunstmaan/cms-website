(self.webpackChunk=self.webpackChunk||[]).push([[143],{4180:function(e){function t(e){var t=new Error("Cannot find module '"+e+"'");throw t.code="MODULE_NOT_FOUND",t}t.keys=function(){return[]},t.resolve=t,t.id=4180,e.exports=t},8205:function(e,t){"use strict";t.Z={}},5893:function(e,t,s){"use strict";s(5202),s(6337),s(3241);var n=s(9650);var i=function(){Array.prototype.slice.call(document.querySelectorAll(".js-videolink-placeholder")).forEach((e=>{const t=e.parentNode.getAttribute("data-video-provider"),s=e.parentNode.getAttribute("data-video-id");t&&s&&function(e,t,s){if("youtube"===e)s.src=`//img.youtube.com/vi/${t}/maxresdefault.jpg`;else{const n=new XMLHttpRequest;let i,o,r;"vimeo"===e?i=`http://vimeo.com/api/v2/video/${t}.json`:"dailymotion"===e&&(i=`https://api.dailymotion.com/video/${t}?fields=thumbnail_720_url`),n.open("GET",i,!0),n.onload=()=>{n.status>=200&&n.status<400&&(o=JSON.parse(n.responseText),"vimeo"===e?r=o[0].thumbnail_large:"dailymotion"===e&&(r=o.thumbnail_720_url),s.src=r)},n.send()}}(t,s,e)})),Array.prototype.slice.call(document.querySelectorAll(".js-videolink-play-link")).forEach((e=>{e.addEventListener("click",(t=>{t.preventDefault();const s=e.getAttribute("data-video-provider"),n=e.getAttribute("data-video-id"),i=e.parentNode.getElementsByClassName("js-videolink-container")[0],o=function(e,t){let s,n;switch(e){case"youtube":n=`//www.youtube.com/embed/${t}?title=0&amp;byline=0&amp;portrait=0;&amp;badge=0&amp;autoplay=1`;break;case"vimeo":n=`//player.vimeo.com/video/${t}?title=0&amp;byline=0&amp;portrait=0&amp;badge=0&amp;autoplay=1`;break;case"dailymotion":n=`//www.dailymotion.com/embed/video/${t}?autoplay=1`;break;default:n=""}""!==n?(s=document.createElement("iframe"),s.setAttribute("src",n),s.setAttribute("webkitallowfullscreen","true"),s.setAttribute("mozallowfullscreen","true"),s.setAttribute("allowfullscreen","true"),s.frameBorder=0,s.style.width="100%",s.style.height="100%"):s="<p>Sorry, this provider is not supported yet.</p>";return s}(s,n);e.parentNode.querySelector(".videolink__video-link").classList.add("videolink__video-link--hidden"),i.appendChild(o)}),!1)}))};function o(e){return Array.prototype.slice.call(e)}var r=s(1740);const a={arrowKeys:!0,nav:!1,items:1,loop:!0,responsive:{992:{edgePadding:245}}};let l=null;const c="tns-slide-center-active";const d={arrowKeys:!0};const u={mode:"gallery",arrowKeys:!1,nav:!0,items:1,loop:!0};const h={arrowKeys:!0,nav:!1,items:1,loop:!0,responsive:{992:{edgePadding:245}}};let p=null;const m="tns-slide-center-active";const y={WRAPPER:".js-slider",SLIDE_HOLDER:".js-slider-slides",CONTROLS:".js-slider-controls"},v={default:function(e,t){const s=a;s.container=t,s.controlsContainer=e.querySelector(y.CONTROLS);const n=new r.W(s);let i=n.getInfo();const o=i.slideItems,d=i.index;l=o[d],l.classList.add(c),n.events.on("indexChanged",(()=>{l.classList.remove(c),i=n.getInfo(),l=o[i.index],l.classList.add(c)}))},usp:function(e,t){const s=d;s.container=t,s.controls=!1,s.nav=!1,s.autoplay=!0,s.autoplayButtonOutput=!1,new r.W(s)},plain:function(e,t){const s=u;s.container=t,s.controlsContainer=e.querySelector(y.CONTROLS),s.navContainer=e.querySelector(".js-slider-nav-container"),s.navItems=o(s.navContainer.querySelectorAll(".js-slider-nav-item")),new r.W(s)},showcase:function(e,t){const s=h;s.container=t,s.controlsContainer=e.querySelector(y.CONTROLS);const n=new r.W(s);let i=n.getInfo();const o=i.slideItems,a=i.index;p=o[a],p.classList.add(m),n.events.on("transitionEnd",(()=>{p.classList.remove(m),i=n.getInfo(),p=o[i.index],p.classList.add(m)}))}};function f(){o(document.querySelectorAll(y.WRAPPER)).forEach((e=>function(e){const t=e.querySelector(y.SLIDE_HOLDER),s=e.hasAttribute("data-type")?e.getAttribute("data-type"):"default";void 0!==v[s]?v[s](e,t):(console.warn(`${s}-type not defined, used 'default' instead`),v.default(e,t))}(e)))}var g=s(2306),b=s.n(g);s(2443);const E="js-scroll-slider-slides",w="js-scroll-slider-slide",S="js-scroll-slider-thumbs",I="js-scroll-slider-thumb",A={THUMB:"scroll-slider__thumb--active"};var L=s(2642),N=s(5957);CSSPlugin;class T{constructor(e){this.domNode=e,this.slidesContainer=this.domNode.querySelector(`.${E}`),this.slides=o(this.domNode.querySelectorAll(`.${w}`)),this.thumbsContainer=this.domNode.querySelector(`.${S}`),this.thumbs=o(this.domNode.querySelectorAll(`.${I}`)),this.containerHeight=this.slidesContainer.getBoundingClientRect().height,this.initialized=!1,this.index=null,this.activeThumb=null,this.stepsAmount=null,this.stepsValues=null,this.controller=null,this.scene=null,this.tween=null}init(){this.stepsAmount=this.slides.length-1,this.stepsValues=function(e){const t=[],s=Math.round(1/e*100);let n=0;t.push(n);for(let i=0;e>i;i++){const e=n+s;t.push(e),n=e}return t}(this.stepsAmount),this.controller=new(b().Controller),this.createScene(),this.createTween(),this.addEventHandlers(),this.updateIndex(),this.initialized=!0}destroy(){this.index=null,this.activeThumb=null,this.stepsAmount=null,this.stepsValues=null,this.controller.destroy(!0),this.scene.destroy(!0),this.tween.kill(),this.controller=null,this.scene=null,this.slides.forEach((e=>{e.removeAttribute("style")})),this.initialized=!1}update(){const e=this.tween.progress();this.tween.clear(),this.tween.kill(),this.scene.refresh(),this.createTween(),this.tween.progress(e)}addEventHandlers(){this.scene.on("progress",(()=>{this.updateIndex()})),this.thumbs.forEach((e=>{e.addEventListener("click",(t=>{t.preventDefault(),this.thumbClickHandler(e)}))}))}updateIndex(){const e=Math.round(100*this.scene.progress()),t=(s=this.stepsValues,n=e,s.reduce(((e,t)=>Math.abs(t-n)<Math.abs(e-n)?t:e)));var s,n;this.index=this.stepsValues.indexOf(t)+1,this.handleThumbChange()}handleThumbChange(){this.thumbs.forEach((e=>{parseInt(e.dataset.index,10)===this.index&&e!==this.activeThumb&&(this.activeThumb&&this.activeThumb!==e&&this.activeThumb.classList.remove(A.THUMB),e.classList.add(A.THUMB),this.activeThumb=e)}))}thumbClickHandler(e){const t=parseInt(e.dataset.index,10);this.index=t,this.setProgress(this.stepsValues[t-1]/100)}createScene(){this.scene=new(b().Scene)({triggerElement:this.domNode,triggerHook:"onLeave",duration:Math.max(document.documentElement.clientHeight,window.innerHeight||0)*this.slides.length}),this.scene.setPin(this.domNode),this.scene.addTo(this.controller)}createTween(){this.tween=function(e){const t=new L.TimelineMax;return e.forEach(((s,n)=>{if(n>0){const i=e[n-1];t.to(i,1,{opacity:0,ease:N.Lp.easeInOut}),t.fromTo(s,1,{opacity:0},{opacity:1,ease:N.Lp.easeInOut},"-=1")}})),t}(this.slides),this.scene.setTween(this.tween)}setProgress(e){this.scene.progress(e),this.controller.scrollTo(this.scene.scrollOffset()+this.scene.duration()*e)}}const x=o(document.querySelectorAll(".js-scroll-slider")),O=[];function k(){return 0!==x.length&&(x.forEach((e=>{const t=new T(e);O.push(t)})),O.forEach((e=>{window.innerWidth>=992&&e.init()})),window.addEventListener("resize",(()=>{!function(e,t){let s;clearTimeout(s),s=setTimeout(t,e)}(300,(()=>{const e=window.innerWidth;O.forEach((t=>{t.initialized?e>=992?t.update():t.destroy():e>=992&&t.init()}))}))})),O)}class C{constructor(e,t,s){this.options=t,this.callback=s,this.observer=new IntersectionObserver(this.callback,this.options),this.target=e,this.observer.observe(this.target)}}const q=".js-inview-animation",_="animate";function j(e){e.forEach((e=>{const t=e.target;t&&(e.isIntersecting?t.classList.add(_):t.classList.remove(_))}))}const R=".js-mobile-nav-trigger",M=".js-mobile-nav-close",G=".main-nav",P="menu-open";function D(){document.body.classList.add(P)}function H(){document.body.classList.remove(P)}const W={threshold:[0,.1,.2,.3,.4,.5,.6,.7,.8,.9,1]},$=o(document.querySelectorAll(".js-lazy-load-img-wrapper")),B=[];function V(e,t){e.forEach((e=>{const s=e.target,n=o(s.querySelectorAll(".js-lazy-load-img"));e.isIntersecting&&(!function(e){e.forEach((e=>{const t=!!e.hasAttribute("data-srcset")&&e.dataset.srcset,{src:s}=e.dataset;t&&e.setAttribute("srcset",t),e.setAttribute("src",s)}))}(n),t.unobserve(s))}))}const z=navigator.userAgent;var Y=s(3441),Z=s(3985);function U(e){let{selector:t,i:s,radius:n,duration:i}=e;const o={},{start:r,to:a}=function(e,t){const s={x:X(t)?-e:e,y:X(t)?-e:e},n={x:-s.x,y:-s.y};return{start:s,to:n}}(n,s);return Z.Q3.set(t,{x:r.x,y:r.y}),o.y=Z.Q3.to(t,i,{y:a.y,ease:Y.Yv.easeInOut,repeat:-1,yoyo:!0,paused:!0},0),o.x=Z.Q3.to(t,i,{x:a.x,ease:Y.Yv.easeInOut,repeat:-1,yoyo:!0,paused:!0},0).progress(.5),o}function K(e){const t=e.getBBox(),{width:s,height:n}=t;return{width:s,height:n}}function Q(e,t){const s=Math.ceil(e),n=Math.floor(t);return Math.floor(Math.random()*(n-s+1))+s}function X(e){return e%2}class F{constructor(e){this.SVG=e,this.IS_PLAYING=!1,this.INITIALIZED=!1,this.ORBITING_NODES=o(this.SVG.querySelectorAll(".node")),this.PARTICLES=o(this.SVG.querySelectorAll(".particle")),this.MAX_DIMENSIONS=K(this.SVG),this.RINGS=function(e){const t=o(e.querySelectorAll(".ring")),s={};return t.forEach((e=>{const{position:t}=e.dataset,{width:n,height:i}=K(e);s[t]={node:e,width:n,height:i}})),s}(this.SVG),this.TWEENS=[],this.init()}play(){this.INITIALIZED&&!this.IS_PLAYING&&(this.TWEENS.forEach((e=>{e.x.paused(!1),e.y.paused(!1)})),this.IS_PLAYING=!0)}pause(){this.INITIALIZED&&this.IS_PLAYING&&(this.TWEENS.forEach((e=>{e.x.paused(!0),e.y.paused(!0)})),this.IS_PLAYING=!1)}init(){this.INITIALIZED=!0,this.ORBITING_NODES.forEach(((e,t)=>{const{ring:s}=e.dataset,n=U({selector:e,radius:Math.round(this.RINGS[s].width/2),i:t,duration:Q(5,30)});this.TWEENS.push(n)})),this.PARTICLES.forEach(((e,t)=>{const s=U({selector:e,radius:Q((this.RINGS.inner.width-50)/2,(this.RINGS.outer.width+50)/2),i:t,duration:Q(3,60)});this.TWEENS.push(s)}))}}const J={threshold:[0,.1,.2,.3,.4,.5,.6,.7,.8,.9,1]},ee=document.querySelector(".js-orbit-animation-svg"),te=-1!==z.indexOf("Trident")&&-1!==z.indexOf("rv:11");let se;function ne(){var e;ee&&!te&&(se=new F(ee),e=ee,new IntersectionObserver(ie,J).observe(e))}function ie(e){e.forEach((e=>{e.target&&(e.isIntersecting?se.play():se.pause())}))}(0,s(8360).x)(s(4180));document.addEventListener("DOMContentLoaded",(()=>{i(),f(),k(),function(){const e=o(document.querySelectorAll(q)),t=[],s={threshold:[0,.1,.2,.3,.4,.5,.6,.7,.8,.9,1]};0!==e.length&&e.forEach((e=>{const n=new C(e,s,j);t.push(n)}))}(),Array.prototype.slice.call(document.querySelectorAll(R)).forEach((e=>{e.addEventListener("click",D)})),Array.prototype.slice.call(document.querySelectorAll(M)).forEach((e=>{e.addEventListener("click",H)})),Array.prototype.slice.call(document.querySelectorAll(`${G} a`)).forEach((e=>{e.addEventListener("click",H)})),0!==$.length&&$.forEach((e=>{const t=new C(e,W,V);B.push(t)})),ne(),n.Z.init()}))}},function(e){e.O(0,[167],(function(){return t=5893,e(e.s=t);var t}));e.O()}]);