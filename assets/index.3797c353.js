const i=function(){const t=document.createElement("link").relList;if(t&&t.supports&&t.supports("modulepreload"))return;for(const n of document.querySelectorAll('link[rel="modulepreload"]'))l(n);new MutationObserver(n=>{for(const e of n)if(e.type==="childList")for(const s of e.addedNodes)s.tagName==="LINK"&&s.rel==="modulepreload"&&l(s)}).observe(document,{childList:!0,subtree:!0});function o(n){const e={};return n.integrity&&(e.integrity=n.integrity),n.referrerpolicy&&(e.referrerPolicy=n.referrerpolicy),n.crossorigin==="use-credentials"?e.credentials="include":n.crossorigin==="anonymous"?e.credentials="omit":e.credentials="same-origin",e}function l(n){if(n.ep)return;n.ep=!0;const e=o(n);fetch(n.href,e)}};i();var r=`<section class="home-section">
   <landing-component/>
</section>`,c=`.home-section {
  height: 100vh;
}`;class d extends HTMLElement{constructor(){super();const t=document.createElement("template");t.innerHTML=r;const o=document.createElement("style");o.innerHTML=c,this.attachShadow({mode:"open"}),this.shadowRoot.appendChild(o),this.shadowRoot.appendChild(t.content.cloneNode(!0))}}customElements.define("home-component",d);var p=`<link rel="stylesheet" href="/styles/global.scss" />
<div class="landing">
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
    <p class="accent">
      or
    </p>
    <p> Visit my <a class="landing__shadow-link" href="https://old.abujalance.com"
      >Old Page</a
    ></p>
  </span>
</div>
`,h=`.landing {
  display: flex;
  width: 100%;
  height: 100%;
  align-items: center;
  justify-content: center;
  flex-direction: column;
  text-align: center;
}
.landing__provisional {
  font-weight: bolder;
  color: #000;
  background-color: #f7f8f1;
  border-radius: 4px;
  padding: 14px 28px;
  font-size: 24px;
  text-align: center;
}
.landing__shadow-link {
  text-shadow: 1px 1px 1px #323637;
  text-decoration: none;
  color: #f0a021 !important;
}
.landing__shadow-link:active {
  text-shadow: none;
}
.landing__shadow-link:visited {
  color: inherit;
}

.identity {
  color: #f0a021;
}

.dark-accent {
  color: #bd4d3b;
}

.accent {
  color: #98a38e;
}`;class m extends HTMLElement{constructor(){super();const t=document.createElement("template");t.innerHTML=p;const o=document.createElement("style");o.innerHTML=h,this.attachShadow({mode:"open"}),this.shadowRoot.appendChild(o),this.shadowRoot.appendChild(t.content.cloneNode(!0))}}customElements.define("landing-component",m);
