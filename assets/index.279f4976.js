var u=Object.defineProperty;var h=(t,e,n)=>e in t?u(t,e,{enumerable:!0,configurable:!0,writable:!0,value:n}):t[e]=n;var r=(t,e,n)=>(h(t,typeof e!="symbol"?e+"":e,n),n);const k=function(){const e=document.createElement("link").relList;if(e&&e.supports&&e.supports("modulepreload"))return;for(const l of document.querySelectorAll('link[rel="modulepreload"]'))s(l);new MutationObserver(l=>{for(const i of l)if(i.type==="childList")for(const o of i.addedNodes)o.tagName==="LINK"&&o.rel==="modulepreload"&&s(o)}).observe(document,{childList:!0,subtree:!0});function n(l){const i={};return l.integrity&&(i.integrity=l.integrity),l.referrerpolicy&&(i.referrerPolicy=l.referrerpolicy),l.crossorigin==="use-credentials"?i.credentials="include":l.crossorigin==="anonymous"?i.credentials="omit":i.credentials="same-origin",i}function s(l){if(l.ep)return;l.ep=!0;const i=n(l);fetch(l.href,i)}};k();var v=`<nav-component></nav-component>
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
`;class c extends HTMLElement{connectedCallback(){const e=Object.assign({},...Array.from(this.attributes,({name:n,value:s})=>({[n]:s})));this.innerHTML=f(this.innerHTML.toString().trim(),e)}}function f(t,e){const n={"&":"&amp;","<":"&lt;",">":"&gt;","(":"%28",")":"%29"},s=o=>o.toString().replace(/[&<>\(\)]/g,d=>n[d]||d),l=Object.keys(e),i=Object.values(e).map(s);return new Function(...l,`return \`${t}\``)(...i)}class L extends c{constructor(){super();const e=document.createElement("template");e.innerHTML=b,this.appendChild(e.content.cloneNode(!0))}}customElements.define("landing-component",L);var g=`<div class="skills">
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
`;const E=[{icon:"web",id:"frontend",title:"Front-End",skillList:["skill but is a very long lorem sentence lorem ipsum","<b>another skill shorter</b>","skill","skill","skill"]},{icon:"dns",id:"backend",title:"Back-End",skillList:["skill","skill","skill","skill"]},{icon:"people",id:"code",title:"code",skillList:["skill","skill","skill"]}],w=[{name:"web",id:"web1",percentage:"50%"},{name:"web",id:"web2",percentage:"30%"},{name:"web",id:"web3",percentage:"100%"}];class C extends c{constructor(){super();const e=document.createElement("template");e.innerHTML=g,this.appendChild(e.content.cloneNode(!0))}buildSkillsList(){const e=this.querySelector("#skills-list");E.forEach(n=>{const s=document.createElement("skill-set-component");s.setAttribute("icon",n.icon),s.setAttribute("id",n.id),s.setAttribute("title",n.title),s.setAttribute("skillList",n.skillList),e.appendChild(s)})}buildSkillsStats(){const e=this.querySelector("#skills-stats");w.forEach(n=>{const s=document.createElement("skill-bar-component");s.setAttribute("name",n.name),s.setAttribute("id",n.id),s.setAttribute("percentage",n.percentage),e.appendChild(s)})}connectedCallback(){this.buildSkillsStats(),this.buildSkillsList(),super.connectedCallback();const e=document.getElementById("switch-button");e.addEventListener("click",y),e.addEventListener("mousedown",n=>n.preventDefault())}}function y(){const t=document.querySelector("#skills-card");t.classList.contains("is-flipped")?t.classList.remove("is-flipped"):t.classList.add("is-flipped"),this.classList.contains("active")?this.classList.remove("active"):this.classList.add("active")}customElements.define("skills-component",C);var S=`<div id="nav" class="nav">
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
`;class H extends c{constructor(){super();r(this,"onScroll",()=>{const n=document.getElementById("nav");window.scrollY<=window.innerHeight-200?n.classList.remove("show-nav"):n.classList.add("show-nav")});const n=document.createElement("template");n.innerHTML=S,this.appendChild(n.content.cloneNode(!0))}connectedCallback(){super.connectedCallback(),document.addEventListener("scroll",this.onScroll);const n=document.getElementById("nav-button"),s=document.getElementById("nav-list"),l=document.getElementById("nav-close");n.addEventListener("click",i=>T(i,s)),l.addEventListener("click",i=>$(i,s))}}function T(t,e){t.stopPropagation(),t.preventDefault(),e.classList.contains("show")?a(e):M(e)}function $(t,e){t.stopPropagation(),t.preventDefault(),a(e)}function a(t){t.classList.remove("show"),document.body.classList.remove("modal"),document.removeEventListener("click",e=>{p(e,t)})}function M(t){t.classList.add("show"),document.body.classList.add("modal"),document.addEventListener("click",e=>{p(e,t)})}function p(t,e){t.stopPropagation(),t.preventDefault(),e.contains(t.target)||a(e)}customElements.define("nav-component",H);var I=`<div class="footer">I am the footer</div>
`;class N extends c{constructor(){super();const e=document.createElement("template");e.innerHTML=I,this.appendChild(e.content.cloneNode(!0))}}customElements.define("footer-component",N);var B=`<div class="skill-set">
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
`;class x extends c{constructor(){super();const e=document.createElement("template");e.innerHTML=B,this.appendChild(e.content.cloneNode(!0))}connectedCallback(){super.connectedCallback();const{id:e}=this.attributes;this.buildSkillSet(),document.getElementById(`show-skills-${e.value}`).addEventListener("click",()=>m(e.value)),document.getElementById(`close-${e.value}`).addEventListener("click",()=>m(e.value))}buildSkillSet(){const{id:e,skillList:n}=this.attributes,s=this.querySelector(`#skill-set-${e.value}`);s.ariaHidden=!0,n.value.split(",").forEach(i=>{const o=document.createElement("li");o.innerHTML=i,s.appendChild(o)});const l=document.createElement("li");l.innerHTML=`<button id="close-${e.value}" tabindex="-1" class="skill-set__list__close hide-desktop">close</button>`,s.appendChild(l)}}function m(t){const e=document.querySelector(`#skill-set-${t}`),n=document.querySelector(`#close-${t}`);e.classList.contains("show")?(e.classList.remove("show"),n.tabIndex="-1",e.ariaHidden=!0):(e.classList.add("show"),n.tabIndex=null,e.ariaHidden=!1)}customElements.define("skill-set-component",x);var A=`<div class="skill-bar">
  <span class="skill-bar__name">\${name}</span>
  <div class="skill-bar__progress-bar">
    <span id="\${id}">\${percentage}</span>
  </div>
</div>
`;class O extends c{constructor(){super();const e=document.createElement("template");e.innerHTML=A,this.appendChild(e.content.cloneNode(!0))}connectedCallback(){super.connectedCallback();const{id:e,percentage:n}=this.attributes,s=this.querySelector(`#${e.value}`);s.style["max-width"]=n.value}}customElements.define("skill-bar-component",O);
