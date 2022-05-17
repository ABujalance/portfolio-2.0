var m=Object.defineProperty;var p=(n,e,t)=>e in n?m(n,e,{enumerable:!0,configurable:!0,writable:!0,value:t}):n[e]=t;var d=(n,e,t)=>(p(n,typeof e!="symbol"?e+"":e,t),t);const u=function(){const e=document.createElement("link").relList;if(e&&e.supports&&e.supports("modulepreload"))return;for(const l of document.querySelectorAll('link[rel="modulepreload"]'))s(l);new MutationObserver(l=>{for(const i of l)if(i.type==="childList")for(const o of i.addedNodes)o.tagName==="LINK"&&o.rel==="modulepreload"&&s(o)}).observe(document,{childList:!0,subtree:!0});function t(l){const i={};return l.integrity&&(i.integrity=l.integrity),l.referrerpolicy&&(i.referrerPolicy=l.referrerpolicy),l.crossorigin==="use-credentials"?i.credentials="include":l.crossorigin==="anonymous"?i.credentials="omit":i.credentials="same-origin",i}function s(l){if(l.ep)return;l.ep=!0;const i=t(l);fetch(l.href,i)}};u();var h=`<nav-component></nav-component>
<section id="landing">
  <landing-component></landing-component>
</section>
<section id="skills">
  <skills-component></skills-component>
</section>
<section id="footer">
  <footer-component></footer-component>
</section>
`;class k extends HTMLElement{constructor(){super();const e=document.createElement("template");e.innerHTML=h,this.appendChild(e.content.cloneNode(!0))}}customElements.define("app-component",k);var v=`<div class="landing">
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
`;class a extends HTMLElement{connectedCallback(){const e=Object.assign({},...Array.from(this.attributes,({name:t,value:s})=>({[t]:s})));this.innerHTML=_(this.innerHTML.toString().trim(),e)}}function _(n,e){const t={"&":"&amp;","<":"&lt;",">":"&gt;","(":"%28",")":"%29"},s=o=>o.toString().replace(/[&<>\(\)]/g,c=>t[c]||c),l=Object.keys(e),i=Object.values(e).map(s);return new Function(...l,`return \`${n}\``)(...i)}class b extends a{constructor(){super();const e=document.createElement("template");e.innerHTML=v,this.appendChild(e.content.cloneNode(!0))}}customElements.define("landing-component",b);var f=`<div class="skills">
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
`;const L=[{icon:"web",id:"frontend",title:"Front-End",skillList:["skill but is a very long lorem sentence lorem ipsum","<b>another skill shorter</b>","skill","skill","skill"]},{icon:"dns",id:"backend",title:"Back-End",skillList:["skill","skill","skill","skill"]},{icon:"people",id:"code",title:"code",skillList:["skill","skill","skill"]}],g=[{name:"web",id:"web1",percentage:"50%"},{name:"web",id:"web2",percentage:"30%"},{name:"web",id:"web3",percentage:"100%"}];class E extends a{constructor(){super();const e=document.createElement("template");e.innerHTML=f,this.appendChild(e.content.cloneNode(!0))}buildSkillsList(){const e=this.querySelector("#skills-list");L.forEach(t=>{const s=document.createElement("skill-set-component");s.setAttribute("icon",t.icon),s.setAttribute("id",t.id),s.setAttribute("title",t.title),s.setAttribute("skillList",t.skillList),e.appendChild(s)})}buildSkillsStats(){const e=this.querySelector("#skills-stats");g.forEach(t=>{const s=document.createElement("skill-bar-component");s.setAttribute("name",t.name),s.setAttribute("id",t.id),s.setAttribute("percentage",t.percentage),e.appendChild(s)})}connectedCallback(){this.buildSkillsStats(),this.buildSkillsList(),super.connectedCallback();const e=document.getElementById("switch-button");e.addEventListener("click",w),e.addEventListener("mousedown",t=>t.preventDefault())}}function w(){const n=document.querySelector("#skills-card");n.classList.contains("is-flipped")?n.classList.remove("is-flipped"):n.classList.add("is-flipped"),this.classList.contains("active")?this.classList.remove("active"):this.classList.add("active")}customElements.define("skills-component",E);var y=`<div id="nav" class="nav">
  <button id="nav-button" class="nav__button hide-gt-mobile"><i class="material-icons font__size-l" title="open menu">menu</i></button>
  <div id="nav-list" class="nav__bar">
    <span class="hide-mobile">Logo</span>
    <nav class="nav__list">
      <a href="#landing">Landing</a>
      <a href="#skills">Skills</a>
      <a href="#footer">Contact</a>
    </nav>
  </div>
</div>
`;class S extends a{constructor(){super();d(this,"onScroll",()=>{const t=document.getElementById("nav");window.scrollY<=window.innerHeight-200?t.classList.remove("show-nav"):t.classList.add("show-nav")});const t=document.createElement("template");t.innerHTML=y,this.appendChild(t.content.cloneNode(!0))}connectedCallback(){super.connectedCallback(),document.addEventListener("scroll",this.onScroll),document.getElementById("nav-button").addEventListener("click",C)}}function C(){const n=document.querySelector("#nav-list");n.classList.contains("show")?n.classList.remove("show"):n.classList.add("show")}customElements.define("nav-component",S);var T=`<div class="footer">I am the footer</div>
`;class H extends a{constructor(){super();const e=document.createElement("template");e.innerHTML=T,this.appendChild(e.content.cloneNode(!0))}}customElements.define("footer-component",H);var $=`<div class="skill-set">
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
`;class M extends a{constructor(){super();const e=document.createElement("template");e.innerHTML=$,this.appendChild(e.content.cloneNode(!0))}connectedCallback(){super.connectedCallback();const{id:e}=this.attributes;this.buildSkillSet(),document.getElementById(`show-skills-${e.value}`).addEventListener("click",()=>r(e.value)),document.getElementById(`close-${e.value}`).addEventListener("click",()=>r(e.value))}buildSkillSet(){const{id:e,skillList:t}=this.attributes,s=this.querySelector(`#skill-set-${e.value}`);s.ariaHidden=!0,t.value.split(",").forEach(i=>{const o=document.createElement("li");o.innerHTML=i,s.appendChild(o)});const l=document.createElement("li");l.innerHTML=`<button id="close-${e.value}" tabindex="-1" class="skill-set__list__close hide-desktop">close</button>`,s.appendChild(l)}}function r(n){const e=document.querySelector(`#skill-set-${n}`),t=document.querySelector(`#close-${n}`);e.classList.contains("show")?(e.classList.remove("show"),t.tabIndex="-1",e.ariaHidden=!0):(e.classList.add("show"),t.tabIndex=null,e.ariaHidden=!1)}customElements.define("skill-set-component",M);var B=`<div class="skill-bar">
  <span class="skill-bar__name">\${name}</span>
  <div class="skill-bar__progress-bar">
    <span id="\${id}">\${percentage}</span>
  </div>
</div>
`;class x extends a{constructor(){super();const e=document.createElement("template");e.innerHTML=B,this.appendChild(e.content.cloneNode(!0))}connectedCallback(){super.connectedCallback();const{id:e,percentage:t}=this.attributes,s=this.querySelector(`#${e.value}`);s.style["max-width"]=t.value}}customElements.define("skill-bar-component",x);
