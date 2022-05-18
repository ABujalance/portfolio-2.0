var p=Object.defineProperty;var h=(n,e,t)=>e in n?p(n,e,{enumerable:!0,configurable:!0,writable:!0,value:t}):n[e]=t;var d=(n,e,t)=>(h(n,typeof e!="symbol"?e+"":e,t),t);const k=function(){const e=document.createElement("link").relList;if(e&&e.supports&&e.supports("modulepreload"))return;for(const l of document.querySelectorAll('link[rel="modulepreload"]'))s(l);new MutationObserver(l=>{for(const i of l)if(i.type==="childList")for(const o of i.addedNodes)o.tagName==="LINK"&&o.rel==="modulepreload"&&s(o)}).observe(document,{childList:!0,subtree:!0});function t(l){const i={};return l.integrity&&(i.integrity=l.integrity),l.referrerpolicy&&(i.referrerPolicy=l.referrerpolicy),l.crossorigin==="use-credentials"?i.credentials="include":l.crossorigin==="anonymous"?i.credentials="omit":i.credentials="same-origin",i}function s(l){if(l.ep)return;l.ep=!0;const i=t(l);fetch(l.href,i)}};k();var v=`<nav-component></nav-component>
<section id="landing">
  <landing-component></landing-component>
</section>
<section id="skills">
  <skills-component></skills-component>
</section>
<section id="footer">
  <footer-component></footer-component>
</section>
`;class _ extends HTMLElement{constructor(){super();const e=document.createElement("template");e.innerHTML=v,this.appendChild(e.content.cloneNode(!0))}}customElements.define("app-component",_);var b=`<div class="landing">
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
    <p class="font__color-accent">or</p>
    <p>
      Visit my
      <a class="landing__shadow-link" href="https://old.abujalance.com"
        >Old Page</a
      >
    </p>
    <p><a href="#skills">Keep scrolling </a></p>
  </span>
</div>
`;class a extends HTMLElement{connectedCallback(){const e=Object.assign({},...Array.from(this.attributes,({name:t,value:s})=>({[t]:s})));this.innerHTML=f(this.innerHTML.toString().trim(),e)}}function f(n,e){const t={"&":"&amp;","<":"&lt;",">":"&gt;","(":"%28",")":"%29"},s=o=>o.toString().replace(/[&<>\(\)]/g,c=>t[c]||c),l=Object.keys(e),i=Object.values(e).map(s);return new Function(...l,`return \`${n}\``)(...i)}class L extends a{constructor(){super();const e=document.createElement("template");e.innerHTML=b,this.appendChild(e.content.cloneNode(!0))}}customElements.define("landing-component",L);var g=`<div class="skills">
  <div class="skills__content">
    <div class="skills__content__title">
      <h1 class="font__size-l font__size__mobile-ml">MY SKILLSET</h1>
      <button class="skills__switch-button" id="switch-button">
        <i class="material-icons" title="switch bar chart mode">bar_chart</i>
      </button>
    </div>
    <div class="skills__scene">
      <div id="skills-card" class="skills__card">
        <div id="skills-list" class="skills__card__face skills__content__list"></div>
        <div id="skills-stats" class="skills__card__face skills__content__stats"></div>
      </div>
    </div>
  </div>
</div>
`;const E=[{icon:"web",id:"frontend",title:"Front-End",skillList:["skill but is a very long lorem sentence lorem ipsum","<b>another skill shorter</b>","skill","skill","skill"]},{icon:"dns",id:"backend",title:"Back-End",skillList:["skill","skill","skill","skill"]},{icon:"people",id:"code",title:"code",skillList:["skill","skill","skill"]}],w=[{name:"web",id:"web1",percentage:"50%"},{name:"web",id:"web2",percentage:"30%"},{name:"web",id:"web3",percentage:"100%"}];class y extends a{constructor(){super();const e=document.createElement("template");e.innerHTML=g,this.appendChild(e.content.cloneNode(!0))}buildSkillsList(){const e=this.querySelector("#skills-list");E.forEach(t=>{const s=document.createElement("skill-set-component");s.setAttribute("icon",t.icon),s.setAttribute("id",t.id),s.setAttribute("title",t.title),s.setAttribute("skillList",t.skillList),e.appendChild(s)})}buildSkillsStats(){const e=this.querySelector("#skills-stats");w.forEach(t=>{const s=document.createElement("skill-bar-component");s.setAttribute("name",t.name),s.setAttribute("id",t.id),s.setAttribute("percentage",t.percentage),e.appendChild(s)})}connectedCallback(){this.buildSkillsStats(),this.buildSkillsList(),super.connectedCallback();const e=document.getElementById("switch-button");e.addEventListener("click",C),e.addEventListener("mousedown",t=>t.preventDefault())}}function C(){const n=document.querySelector("#skills-card");n.classList.contains("is-flipped")?n.classList.remove("is-flipped"):n.classList.add("is-flipped"),this.classList.contains("active")?this.classList.remove("active"):this.classList.add("active")}customElements.define("skills-component",y);var S=`<div id="nav" class="nav">
  <button id="nav-button" class="nav__button hide-gt-mobile"><i class="material-icons font__size-l" title="open menu">menu</i></button>
  <div id="nav-list" class="nav__bar">
    <span class="hide-mobile">Logo</span>
    <nav class="nav__list">
      <button id="nav-close" class="hide-lt-tablet nav__list__close">
        <i class="material-icons" title="switch bar chart mode">close</i>
      </button>
      <a href="#landing">Landing</a>
      <a href="#skills">Skills</a>
      <a href="#footer">Contact</a>
    </nav>
  </div>
</div>
`;class T extends a{constructor(){super();d(this,"onScroll",()=>{const t=document.getElementById("nav");window.scrollY<=window.innerHeight-200?t.classList.remove("show-nav"):t.classList.add("show-nav")});const t=document.createElement("template");t.innerHTML=S,this.appendChild(t.content.cloneNode(!0))}connectedCallback(){super.connectedCallback(),document.addEventListener("scroll",this.onScroll);const t=document.getElementById("nav-button"),s=document.getElementById("nav-list"),l=document.getElementById("nav-close"),i=document.getElementById("modal-background");t.addEventListener("click",o=>H(o,s)),l.addEventListener("click",o=>r(o,s)),i.addEventListener("click",o=>{r(o,s)})}}function H(n,e){n.stopPropagation(),n.preventDefault(),e.classList.contains("show")?u(e):$(e)}function r(n,e){n.stopPropagation(),n.preventDefault(),u(e)}function u(n){n.classList.remove("show"),document.body.classList.remove("modal")}function $(n){n.classList.add("show"),document.body.classList.add("modal")}customElements.define("nav-component",T);var B=`<div class="footer">I am the footer</div>
`;class M extends a{constructor(){super();const e=document.createElement("template");e.innerHTML=B,this.appendChild(e.content.cloneNode(!0))}}customElements.define("footer-component",M);var I=`<div class="skill-set">
  <span class="hide-lt-desktop">
    <h1 class="font__size-l">\${title}</h1>
    <i class="material-icons font__color-identity">\${icon}</i>
  </span>
  <span class="skill-set__container hide-desktop">
    <span class="skill-set__title">
      <h1 class="font__size-l font__size__mobile-ml">\${title}</h1>
      <button id="show-skills-\${id}" class="skill-set__title__action">View more</button>
    </span>
    <i class="material-icons font__color-identity">\${icon}</i>
  </span>
  <ul id="skill-set-\${id}" class="skill-set__list font__size-ml font__size__desktop-m"></ul>
</div>
`;class N extends a{constructor(){super();const e=document.createElement("template");e.innerHTML=I,this.appendChild(e.content.cloneNode(!0))}connectedCallback(){super.connectedCallback();const{id:e}=this.attributes;this.buildSkillSet(),document.getElementById(`show-skills-${e.value}`).addEventListener("click",()=>m(e.value)),document.getElementById(`close-${e.value}`).addEventListener("click",()=>m(e.value))}buildSkillSet(){const{id:e,skillList:t}=this.attributes,s=this.querySelector(`#skill-set-${e.value}`);s.ariaHidden=!0,t.value.split(",").forEach(i=>{const o=document.createElement("li");o.innerHTML=i,s.appendChild(o)});const l=document.createElement("li");l.innerHTML=`<button id="close-${e.value}" tabindex="-1" class="skill-set__list__close hide-desktop">close</button>`,s.appendChild(l)}}function m(n){const e=document.querySelector(`#skill-set-${n}`),t=document.querySelector(`#close-${n}`);e.classList.contains("show")?(e.classList.remove("show"),t.tabIndex="-1",e.ariaHidden=!0):(e.classList.add("show"),t.tabIndex=null,e.ariaHidden=!1)}customElements.define("skill-set-component",N);var x=`<div class="skill-bar">
  <span class="skill-bar__name">\${name}</span>
  <div class="skill-bar__progress-bar">
    <span id="\${id}">\${percentage}</span>
  </div>
</div>
`;class A extends a{constructor(){super();const e=document.createElement("template");e.innerHTML=x,this.appendChild(e.content.cloneNode(!0))}connectedCallback(){super.connectedCallback();const{id:e,percentage:t}=this.attributes,s=this.querySelector(`#${e.value}`);s.style["max-width"]=t.value}}customElements.define("skill-bar-component",A);
