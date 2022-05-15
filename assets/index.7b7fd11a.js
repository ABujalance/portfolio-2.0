var d=Object.defineProperty;var p=(l,e,n)=>e in l?d(l,e,{enumerable:!0,configurable:!0,writable:!0,value:n}):l[e]=n;var a=(l,e,n)=>(p(l,typeof e!="symbol"?e+"":e,n),n);const m=function(){const e=document.createElement("link").relList;if(e&&e.supports&&e.supports("modulepreload"))return;for(const t of document.querySelectorAll('link[rel="modulepreload"]'))s(t);new MutationObserver(t=>{for(const i of t)if(i.type==="childList")for(const c of i.addedNodes)c.tagName==="LINK"&&c.rel==="modulepreload"&&s(c)}).observe(document,{childList:!0,subtree:!0});function n(t){const i={};return t.integrity&&(i.integrity=t.integrity),t.referrerpolicy&&(i.referrerPolicy=t.referrerpolicy),t.crossorigin==="use-credentials"?i.credentials="include":t.crossorigin==="anonymous"?i.credentials="omit":i.credentials="same-origin",i}function s(t){if(t.ep)return;t.ep=!0;const i=n(t);fetch(t.href,i)}};m();var u=`<nav-component></nav-component>
<section id="landing">
  <landing-component></landing-component>
</section>
<section id="skills">
  <skills-component></skills-component>
</section>
<section id="footer">
  <footer-component></footer-component>
</section>
`;class k extends HTMLElement{constructor(){super();const e=document.createElement("template");e.innerHTML=u,this.appendChild(e.content.cloneNode(!0))}}customElements.define("app-component",k);var h=`<div class="landing">
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
`;class o extends HTMLElement{connectedCallback(){const e=Object.assign({},...Array.from(this.attributes,({name:n,value:s})=>({[n]:s})));this.innerHTML=f(this.innerHTML.toString().trim(),e)}}function f(l,e){const n={"&":"&amp;","<":"&lt;",">":"&gt;","(":"%28",")":"%29"},s=c=>c.toString().replace(/[&<>\(\)]/g,r=>n[r]||r),t=Object.keys(e),i=Object.values(e).map(s);return new Function(...t,`return \`${l}\``)(...i)}class v extends o{constructor(){super();const e=document.createElement("template");e.innerHTML=h,this.appendChild(e.content.cloneNode(!0))}}customElements.define("landing-component",v);var b=`<div class="skills">
  <div class="skills__content">
    <h1 class="font__size-l font__size__mobile-m">MY SKILLSET</h1>
    <button id="changeButton">Change</button>
    <div class="skills__scene">
      <div id="skills-card" class="skills__card">
        <div
          id="skills-list"
          class="skills__card__face skills__content__list"
        ></div>
        <div
          id="skills-stats"
          class="skills__card__face skills__content__stats"
        ></div>
      </div>
    </div>
  </div>
</div>
`;const g=[{icon:"web",title:"web",skillList:["skill","skill","skill"]},{icon:"code",title:"code",skillList:["skill","skill","skill"]},{icon:"dns",title:"dns",skillList:["skill","skill","skill"]}],_=[{name:"web",percentage:"50%"},{name:"web",percentage:"30%"},{name:"web",percentage:"100%"}];class L extends o{constructor(){super();a(this,"onChangeHandler",()=>{const n=document.querySelector("#skills-card");n.classList.contains("is-flipped")?n.classList.remove("is-flipped"):n.classList.add("is-flipped")});const n=document.createElement("template");n.innerHTML=b,this.appendChild(n.content.cloneNode(!0))}buildSkillsList(){const n=this.querySelector("#skills-list");g.forEach(s=>{const t=document.createElement("skill-set-component");t.setAttribute("icon",s.icon),t.setAttribute("title",s.title),t.setAttribute("skillList",s.skillList),n.appendChild(t)})}buildSkillsStats(){const n=this.querySelector("#skills-stats");_.forEach(s=>{const t=document.createElement("skill-bar-component");t.setAttribute("name",s.name),t.setAttribute("percentage",s.percentage),n.appendChild(t)})}connectedCallback(){this.buildSkillsStats(),this.buildSkillsList(),super.connectedCallback(),document.getElementById("changeButton").addEventListener("click",this.onChangeHandler)}}customElements.define("skills-component",L);var E=`<nav id="nav" class="nav">
  <a href="#landing">Landing</a>
  <a href="#skills">Skills</a>
  <a href="#footer">Contact</a>
</nav>
`;class C extends o{constructor(){super();a(this,"onScroll",()=>{const n=document.getElementById("nav");window.scrollY<=window.innerHeight-50?n.classList.remove("show-nav"):n.classList.add("show-nav")});const n=document.createElement("template");n.innerHTML=E,this.appendChild(n.content.cloneNode(!0))}connectedCallback(){document.addEventListener("scroll",this.onScroll)}}customElements.define("nav-component",C);var S=`<div class="footer">I am the footer</div>
`;class y extends o{constructor(){super();const e=document.createElement("template");e.innerHTML=S,this.appendChild(e.content.cloneNode(!0))}}customElements.define("footer-component",y);var T=`<div class="skill-set">
  <i style="font-size: 50px" class="material-icons md-48 skill-set__icon"
    >\${icon}</i
  >
  <ul id="skill-set-\${title}" class="skill-set__list"></ul>
</div>
`;class w extends o{constructor(){super();const e=document.createElement("template");e.innerHTML=T,this.appendChild(e.content.cloneNode(!0))}connectedCallback(){super.connectedCallback(),this.buildSkillSet()}buildSkillSet(){const{title:e,skillList:n}=this.attributes,s=this.querySelector(`#skill-set-${e.value}`);n.value.split(",").forEach(t=>{const i=document.createElement("li");i.innerHTML=t,s.appendChild(i)})}}customElements.define("skill-set-component",w);var H=`<div class="skill-bar">
  <span class="skill-bar__name">\${name}</span>
  <div class="skill-bar__progress-bar">
    <span id="\${name}">\${percentage}</span>
  </div>
</div>
`;class M extends o{constructor(){super();const e=document.createElement("template");e.innerHTML=H,this.appendChild(e.content.cloneNode(!0))}connectedCallback(){super.connectedCallback();const{name:e,percentage:n}=this.attributes,s=this.querySelector(`#${e.value}`);s.style["max-width"]=n.value}}customElements.define("skill-bar-component",M);
