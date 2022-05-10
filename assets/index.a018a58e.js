var a=Object.defineProperty;var r=(o,e,t)=>e in o?a(o,e,{enumerable:!0,configurable:!0,writable:!0,value:t}):o[e]=t;var i=(o,e,t)=>(r(o,typeof e!="symbol"?e+"":e,t),t);const d=function(){const e=document.createElement("link").relList;if(e&&e.supports&&e.supports("modulepreload"))return;for(const n of document.querySelectorAll('link[rel="modulepreload"]'))c(n);new MutationObserver(n=>{for(const s of n)if(s.type==="childList")for(const l of s.addedNodes)l.tagName==="LINK"&&l.rel==="modulepreload"&&c(l)}).observe(document,{childList:!0,subtree:!0});function t(n){const s={};return n.integrity&&(s.integrity=n.integrity),n.referrerpolicy&&(s.referrerPolicy=n.referrerpolicy),n.crossorigin==="use-credentials"?s.credentials="include":n.crossorigin==="anonymous"?s.credentials="omit":s.credentials="same-origin",s}function c(n){if(n.ep)return;n.ep=!0;const s=t(n);fetch(n.href,s)}};d();var m=`<nav-component></nav-component>
<section id="landing">
  <landing-component></landing-component>
</section>
<section id="skills">
  <skills-component></skills-component>
</section>
<section id="footer">
  <footer-component></footer-component>
</section>
`;class p extends HTMLElement{constructor(){super();const e=document.createElement("template");e.innerHTML=m,this.appendChild(e.content.cloneNode(!0))}}customElements.define("app-component",p);var u=`<div class="landing">
  <h1>
    Hello, I'm <span class="identity"><b>Alberto Bujalance</b></span
    >.
  </h1>
  <span class="landing__provisional">
    <p>Page being reworked right now</p>
    <p>
      Find me
      <span class="dark-accent">@</span>
      <a class="landing__shadow-link" href="https://github.com/ABujalance"
        >Github</a
      >
    </p>
    <p class="accent">or</p>
    <p>
      Visit my
      <a class="landing__shadow-link" href="https://old.abujalance.com"
        >Old Page</a
      >
    </p>
    <p><a href="#skills">Keep scrolling </a></p>
  </span>
</div>
`;class f extends HTMLElement{constructor(){super();const e=document.createElement("template");e.innerHTML=u,this.appendChild(e.content.cloneNode(!0))}}customElements.define("landing-component",f);var h=`<div class="skills">
  <div class="skills__content">
    <h1 class="font__size-s font__size__mobile-xl">MY SKILLSET</h1>
    <p class="base">
      Lorem Ipsum is simply dummy text of the printing and typesetting industry.
    </p>
  </div>
</div>
`;class v extends HTMLElement{constructor(){super();const e=document.createElement("template");e.innerHTML=h,this.appendChild(e.content.cloneNode(!0))}}customElements.define("skills-component",v);var g=`<div id="nav" class="nav">I am the navigation of the page</div>
`;class L extends HTMLElement{constructor(){super();i(this,"onScroll",()=>{const t=document.getElementById("nav");window.scrollY<window.innerHeight?t.classList.remove("show-nav"):t.classList.add("show-nav")});const t=document.createElement("template");t.innerHTML=g,this.appendChild(t.content.cloneNode(!0))}connectedCallback(){document.addEventListener("scroll",this.onScroll)}}customElements.define("nav-component",L);var E=`<div class="footer">I am the footer</div>
`;class y extends HTMLElement{constructor(){super();const e=document.createElement("template");e.innerHTML=E,this.appendChild(e.content.cloneNode(!0))}}customElements.define("footer-component",y);
