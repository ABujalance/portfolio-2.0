var u=Object.defineProperty;var h=(s,e,t)=>e in s?u(s,e,{enumerable:!0,configurable:!0,writable:!0,value:t}):s[e]=t;var r=(s,e,t)=>(h(s,typeof e!="symbol"?e+"":e,t),t);const b=function(){const e=document.createElement("link").relList;if(e&&e.supports&&e.supports("modulepreload"))return;for(const o of document.querySelectorAll('link[rel="modulepreload"]'))n(o);new MutationObserver(o=>{for(const i of o)if(i.type==="childList")for(const a of i.addedNodes)a.tagName==="LINK"&&a.rel==="modulepreload"&&n(a)}).observe(document,{childList:!0,subtree:!0});function t(o){const i={};return o.integrity&&(i.integrity=o.integrity),o.referrerpolicy&&(i.referrerPolicy=o.referrerpolicy),o.crossorigin==="use-credentials"?i.credentials="include":o.crossorigin==="anonymous"?i.credentials="omit":i.credentials="same-origin",i}function n(o){if(o.ep)return;o.ep=!0;const i=t(o);fetch(o.href,i)}};b();var f=`<nav-component></nav-component>
<section id="landing">
  <landing-component></landing-component>
</section>
<div id="skills" class="app__anchor"></div>
<section class="app__full">
  <skills-component></skills-component>
</section>
<div id="projects" class="app__anchor"></div>
<section>
  <projects-component></projects-component>
</section>
<section>
  <footer-component></footer-component>
</section>
<div id="footer"></div>
`;class v extends HTMLElement{constructor(){super();const e=document.createElement("template");e.innerHTML=f,this.appendChild(e.content.cloneNode(!0))}}customElements.define("app-component",v);var g=`<div class="landing">
  <h1 class="landing__title font__size-xl font__size__tablet-l font__size__mobile-ml">
    Hello, I'm
    <br />
    <span class="font__color-identity font__size-xl font__size__desktop-xxl">Alberto Bujalance</span>
  </h1>
  <div class="landing__about">
    <about-component></about-component>
  </div>
  <a class="landing__button font__size-l" href="#skills"><i class="material-icons" title="View more">expand_more</i></a>
</div>
`;class l extends HTMLElement{connectedCallback(){const e=Object.assign({},...Array.from(this.attributes,({name:t,value:n})=>({[t]:n})));this.innerHTML=k(this.innerHTML.toString().trim(),e)}}function k(s,e){const t={"&":"&amp;","<":"&lt;",">":"&gt;","(":"%28",")":"%29"},n=a=>a.toString().replace(/[&<>\(\)]/g,c=>t[c]||c),o=Object.keys(e),i=Object.values(e).map(n);return new Function(...o,`return \`${s}\``)(...i)}class y extends l{constructor(){super();const e=document.createElement("template");e.innerHTML=g,this.appendChild(e.content.cloneNode(!0))}}customElements.define("landing-component",y);var C=`<div class="skills">
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
`;const w=[{icon:"web",id:"frontend",title:"Front-End",skillList:["<b><span class='font__color-identity'>Vanilla</span></b> web development: Html 5 | Cs3 | Javascript \u{1F5A5}\uFE0F","<b><span class='font__color-identity'>Accesible</span></b> performant and responsive sites \u{1F468}\u200D\u{1F4BB}","<b><span class='font__color-identity'>Modern</span></b> frameworks <b><span class='font__color-identity'>React</span></b>","<b><span class='font__color-identity'>Clean code</span></b> testing and best practices \u2705","Nextjs | <b><span class='font__color-identity'>Sass</span></b>\u{1F485} | <b><span class='font__color-identity'>Rollup</span></b> | Vite | Webpack","<b><span class='font__color-identity'>Server Side Rendering</span></b>"]},{icon:"dns",id:"backend",title:"Back-End",skillList:["<b><span class='font__color-identity'>Languages</span></b>: Nodejs | Java","<b><span class='font__color-identity'>Frameworks</span></b>: Spring | Express | <b><span class='font__color-identity'>Nestjs</span></b>","<b><span class='font__color-identity'>Serverless</span></b> computing \u2601\uFE0F","<b><span class='font__color-identity'>Sql</span></b> and NoSql databases \u{1F4BD}","<b><span class='font__color-identity'>Technologies</span></b>: Firebase | AWS | Google Cloud | Git | CI \u{1F916}"]},{icon:"people",id:"code",title:"Personal",skillList:["Experience with <b><span class='font__color-identity'>Distributed</span></b> and <b><span class='font__color-identity'>International teams \u{1F310}</span></b>","<b><span class='font__color-identity'>Languages</span></b>: English \u{1F1EC}\u{1F1E7} (Bilingual) | Spanish \u{1F1EA}\u{1F1F8} (Native)","Experience with <b><span class='font__color-identity'>Agile Methodologies</span></b>","Excellent <b><span class='font__color-identity'>Mentor</span></b> \u{1F468}\u200D\u{1F3EB} and writter","Volleyball \u{1F3D0}  <span class='font__size-s font__color-accent'>(I'm pretty bad but still have fun)</span>"]}],E=[{name:"Html 5, Css 3",id:"html",percentage:"90%"},{name:"NodeJS",id:"node",percentage:"60%"},{name:"React",id:"react",percentage:"90%"},{name:"Design",id:"design",percentage:"30%"},{name:"Javascript, Typescript",id:"js",percentage:"80%"},{name:"Databases",id:"db",percentage:"50%"},{name:"Software Patterns",id:"java",percentage:"60%"}];class L extends l{constructor(){super();const e=document.createElement("template");e.innerHTML=C,this.appendChild(e.content.cloneNode(!0))}buildSkillsList(){const e=this.querySelector("#skills-list");w.forEach(t=>{const n=document.createElement("skill-set-component");n.setAttribute("icon",t.icon),n.setAttribute("id",t.id),n.setAttribute("title",t.title),n.setAttribute("skillList",t.skillList),e.appendChild(n)})}buildSkillsStats(){const e=this.querySelector("#skills-stats");E.forEach(t=>{const n=document.createElement("skill-bar-component");n.setAttribute("name",t.name),n.setAttribute("id",t.id),n.setAttribute("percentage",t.percentage),e.appendChild(n)})}connectedCallback(){this.buildSkillsStats(),this.buildSkillsList(),super.connectedCallback();const e=document.getElementById("switch-button");e.addEventListener("click",S),e.addEventListener("mousedown",t=>t.preventDefault())}}function S(){const s=document.querySelector("#skills-card");s.classList.contains("is-flipped")?s.classList.remove("is-flipped"):s.classList.add("is-flipped"),this.classList.contains("active")?this.classList.remove("active"):this.classList.add("active")}customElements.define("skills-component",L);var j=`<div id="nav" class="nav">
  <button id="nav-button" class="nav__button hide-gt-mobile">
    <i class="material-icons font__size-l" title="open menu">menu</i>
  </button>
  <div id="nav-list" class="nav__bar">
    <a href="#landing" class="nav__logo"></a>
    <nav class="nav__list font__size-ml">
      <button id="nav-close" class="hide-lt-tablet nav__list__close">
        <i class="material-icons" title="switch bar chart mode">close</i>
      </button>
      <a href="#skills">Skills</a>
      <a href="#projects">Projects</a>
      <a href="#footer">Contact</a>
    </nav>
  </div>
</div>
`;class T extends l{constructor(){super();r(this,"onScroll",()=>{const t=document.getElementById("nav");window.scrollY<=window.innerHeight-200?t.classList.remove("show-nav"):t.classList.add("show-nav")});const t=document.createElement("template");t.innerHTML=j,this.appendChild(t.content.cloneNode(!0))}connectedCallback(){super.connectedCallback(),document.addEventListener("scroll",this.onScroll);const t=document.getElementById("nav-button"),n=document.getElementById("nav-list"),o=document.getElementById("nav-close"),i=document.getElementById("modal-background");t.addEventListener("click",a=>z(a,n)),o.addEventListener("click",a=>d(a,n)),i.addEventListener("click",a=>{d(a,n)})}}function z(s,e){s.stopPropagation(),s.preventDefault(),e.classList.contains("show")?m(e):x(e)}function d(s,e){s.stopPropagation(),s.preventDefault(),m(e)}function m(s){s.classList.remove("show"),document.body.classList.remove("modal")}function x(s){s.classList.add("show"),document.body.classList.add("modal")}customElements.define("nav-component",T);var H=`<div class="footer">
  <div class="footer__content"><contact-form-component /></div>
  <div class="footer__links"><footer-links-component /></div>
  <div class="font__size-standard font__color-base">This site was developed using vanilla-only tecnologies</div>
  <p class="font__size-s font__color-base">Copyright \xA9 Abujalance 2022</p>
</div>
`;class M extends l{constructor(){super();const e=document.createElement("template");e.innerHTML=H,this.appendChild(e.content.cloneNode(!0))}}customElements.define("footer-component",M);var A=`<div class="skill-set">
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
  <ul id="skill-set-\${id}" class="skill-set__list font__size-m font__size__desktop-large-ml"></ul>
</div>
`;class $ extends l{constructor(){super();const e=document.createElement("template");e.innerHTML=A,this.appendChild(e.content.cloneNode(!0))}connectedCallback(){super.connectedCallback();const{id:e}=this.attributes;this.buildSkillSet(),document.getElementById(`show-skills-${e.value}`).addEventListener("click",()=>p(e.value)),document.getElementById(`close-${e.value}`).addEventListener("click",()=>p(e.value))}buildSkillSet(){const{id:e,skillList:t}=this.attributes,n=this.querySelector(`#skill-set-${e.value}`);n.ariaHidden=!0,t.value.split(",").forEach(i=>{const a=document.createElement("li");a.innerHTML=i,n.appendChild(a)});const o=document.createElement("li");o.innerHTML=`<button id="close-${e.value}" tabindex="-1" class="skill-set__list__close hide-desktop">close</button>`,n.appendChild(o)}}function p(s){const e=document.querySelector(`#skill-set-${s}`),t=document.querySelector(`#close-${s}`);e.classList.contains("show")?(e.classList.remove("show"),t.tabIndex="-1",e.ariaHidden=!0):(e.classList.add("show"),t.tabIndex=null,e.ariaHidden=!1)}customElements.define("skill-set-component",$);var I=`<div class="skill-bar">
  <span class="skill-bar__name">\${name}</span>
  <div class="skill-bar__progress-bar">
    <span id="\${id}">\${percentage}</span>
  </div>
</div>
`;class N extends l{constructor(){super();const e=document.createElement("template");e.innerHTML=I,this.appendChild(e.content.cloneNode(!0))}connectedCallback(){super.connectedCallback();const{id:e,percentage:t}=this.attributes,n=this.querySelector(`#${e.value}`);n.style["max-width"]=t.value}}customElements.define("skill-bar-component",N);var B=`<form
  id="contact-form"
  class="contact-form"
  action="https://formspree.io/f/xvollowv"
  method="POST"
>
  <h1 class="font__size-xl font__size__mobile-l font__color-base">
    Get in contact!
  </h1>
  <input
    class="font__size-ml font__size__mobile-m contact-form__email"
    aria-label="Type your email..."
    placeholder="Email..."
    type="email"
    name="email"
    required
  />
  <textarea
    class="contact-form__message font__size-ml font__size__mobile-m"
    aria-label="Type your message..."
    placeholder="Message..."
    name="message"
    required
  ></textarea>
  <input type="hidden" id="g-recaptcha-response" name="g-recaptcha-response" />
  <button
    class="contact-form__button font__size-ml"
    id="contact-button"
    type="submit"
  >
    Contact!
  </button>
  <p class="font__color-base font__size-s">
    This site is protected by reCAPTCHA and the Google
    <a class="font__color-identity" href="https://policies.google.com/privacy"
      >Privacy Policy</a
    >
    and
    <a class="font__color-identity" href="https://policies.google.com/terms"
      >Terms of Service</a
    >
    apply.
  </p>
</form>
`;class F extends l{constructor(){super();const e=document.createElement("template");e.innerHTML=B,this.appendChild(e.content.cloneNode(!0))}connectedCallback(){super.connectedCallback(),document.getElementById("contact-form").addEventListener("focus",_,!0)}}function _(){const s=document.createElement("script");s.src="https://www.recaptcha.net/recaptcha/api.js?render=6LeL8A8gAAAAAGKCdX_tJbchHOvFlxiJYy6hJR9n",document.head.appendChild(s),document.getElementById("contact-form").removeEventListener("focus",_,!0);var e=setInterval(function(){!window.grecaptcha||!window.grecaptcha.execute||(clearInterval(e),grecaptcha.execute("6LeL8A8gAAAAAGKCdX_tJbchHOvFlxiJYy6hJR9n",{action:"submit"}).then(t=>{document.getElementById("g-recaptcha-response").value=t}))},1e3)}customElements.define("contact-form-component",F);var q=`<div class="footer-links" id="footer-links"></div>
`;const P=[{url:"https://www.linkedin.com/in/alberto-bujalance-178062144/",id:"linkedin",title:"LinkedIn",icon:"linkedin"},{url:"https://github.com/ABujalance",id:"github",title:"Git Hub",icon:"github"}];var J='<svg fill="currentColor" xmlns="http://www.w3.org/2000/svg"  viewBox="0 0 24 24" width="96px" height="96px">    <path d="M10.9,2.1c-4.6,0.5-8.3,4.2-8.8,8.7c-0.5,4.7,2.2,8.9,6.3,10.5C8.7,21.4,9,21.2,9,20.8v-1.6c0,0-0.4,0.1-0.9,0.1 c-1.4,0-2-1.2-2.1-1.9c-0.1-0.4-0.3-0.7-0.6-1C5.1,16.3,5,16.3,5,16.2C5,16,5.3,16,5.4,16c0.6,0,1.1,0.7,1.3,1c0.5,0.8,1.1,1,1.4,1 c0.4,0,0.7-0.1,0.9-0.2c0.1-0.7,0.4-1.4,1-1.8c-2.3-0.5-4-1.8-4-4c0-1.1,0.5-2.2,1.2-3C7.1,8.8,7,8.3,7,7.6C7,7.2,7,6.6,7.3,6 c0,0,1.4,0,2.8,1.3C10.6,7.1,11.3,7,12,7s1.4,0.1,2,0.3C15.3,6,16.8,6,16.8,6C17,6.6,17,7.2,17,7.6c0,0.8-0.1,1.2-0.2,1.4 c0.7,0.8,1.2,1.8,1.2,3c0,2.2-1.7,3.5-4,4c0.6,0.5,1,1.4,1,2.3v2.6c0,0.3,0.3,0.6,0.7,0.5c3.7-1.5,6.3-5.1,6.3-9.3 C22,6.1,16.9,1.4,10.9,2.1z"/></svg>',O='<svg fill="currentColor" xmlns="http://www.w3.org/2000/svg"  viewBox="0 0 30 30" width="60px" height="60px">    <path d="M15,3C8.373,3,3,8.373,3,15c0,6.627,5.373,12,12,12s12-5.373,12-12C27,8.373,21.627,3,15,3z M10.496,8.403 c0.842,0,1.403,0.561,1.403,1.309c0,0.748-0.561,1.309-1.496,1.309C9.561,11.022,9,10.46,9,9.712C9,8.964,9.561,8.403,10.496,8.403z M12,20H9v-8h3V20z M22,20h-2.824v-4.372c0-1.209-0.753-1.488-1.035-1.488s-1.224,0.186-1.224,1.488c0,0.186,0,4.372,0,4.372H14v-8 h2.918v1.116C17.294,12.465,18.047,12,19.459,12C20.871,12,22,13.116,22,15.628V20z"/></svg>';const V={github:J,linkedin:O};class R extends l{constructor(){super();const e=document.createElement("template");e.innerHTML=q,this.appendChild(e.content.cloneNode(!0))}buildFooterLinks(){const e=this.querySelector("#footer-links");P.forEach(t=>{const n=document.createElement("a");n.href=t.url,n.id=t.id,n.ariaLabel=t.title,n.innerHTML=V[t.icon],e.appendChild(n)})}connectedCallback(){this.buildFooterLinks(),super.connectedCallback()}}customElements.define("footer-links-component",R);var G=`<div class="about">
  <div class="about__content">
    <div>
    <h2 class="font__size-l font__size__mobile-ml font__size__short-screen-m  font__size__desktop-large-xl">Full-stack Software Engineer</h2>
    <p class="font__size-ml font__size__short-screen-standard font__size__mobile-m  font__size__desktop-large-l">I love building fast, simple and responsive web applications</p>
  </div>
    <div class="about__picture"></div>
    <span class="about__content__location font__size-m font__size__mobile-standard font__size__tablet-standard font__color-accent "><i class="material-icons font__color-dark-accent" title="View more">pin_drop</i> Seville, Spain</span>
    </p>
  </div>
</div>
`;class D extends l{constructor(){super();const e=document.createElement("template");e.innerHTML=G,this.appendChild(e.content.cloneNode(!0))}}customElements.define("about-component",D);var Y=`<div class="projects__wrapper">
  <ul id="projects-list" class="projects"></ul>
</div>
`;const W=[{id:"mapper",title:"Awesome Mapper",description:"[POC] Map generator based on custom png files and a tile map",link:"https://tilemapper.abujalance.com/",image:"https://res.cloudinary.com/abujalance/image/upload/w_400/v1654191018/awesomeMapper_aaxyna.jpg",tags:["React","Firebase"]},{id:"caser",title:"Caser Insurance Agents Searcher",description:"This project was part of the new web implementation. It allows an user to search nearby insurance agents and apply different filters and icons based on the type of agent",link:"https://www.caser.es/conocenos/buscador-agentes",image:"https://res.cloudinary.com/abujalance/image/upload/w_400/v1654191015/caser_mapa_agentes_qbols4.jpg",tags:["Java","Liferay","Javascript","Maps"]},{id:"chatbot",title:"Integrated chatbot assistant",description:"This was part of my degree's final project. The assistant guides you through the configuration proccess of a tool. It was also integrated with a real robot which hears and answers the questions",link:"https://www.youtube.com/watch?v=zWELCudYRjY",image:"https://res.cloudinary.com/abujalance/image/upload/w_400/v1654191021/chatbot_nao_ryzeav.jpg",tags:["IBM Watson","Python","Node-Red"]}];class K extends l{constructor(){super();const e=document.createElement("template");e.innerHTML=Y,this.appendChild(e.content.cloneNode(!0))}buildProjectsList(){const e=this.querySelector("#projects-list");W.forEach(t=>{const n=document.createElement("project-component");n.setAttribute("title",t.title),n.setAttribute("description",t.description),n.setAttribute("link",t.link),n.setAttribute("image",t.image),n.setAttribute("tags",t.tags);const o=document.createElement("li");o.appendChild(n),e.appendChild(o)})}connectedCallback(){this.buildProjectsList(),super.connectedCallback()}}customElements.define("projects-component",K);var X=`<div class="project">
  <img class="project__picture" src="\${image}" alt="project image" />
  <div class="project__cover">
    <div class="project__description font__color-base">
      <div class="project__description__text font__size-ml font__size__mobile-m">\${description}</div>
      <a href="\${link}" target="blank" class="project__description__button font__size-l">Check it!</a>
    </div>
  </div>
  <div class="project__title font__color-identity font__size-ml font__size__mobile-m"><h3>\${title}</h3></div>
  <div class="project__view-more hide-desktop font__size-ml font__size__mobile-m">View more</div>
  <ul id="project-tags" class="project__tags"></ul>
</div>
`;class Q extends l{constructor(){super();const e=document.createElement("template");e.innerHTML=X,this.appendChild(e.content.cloneNode(!0))}connectedCallback(){super.connectedCallback(),this.buildTags()}buildTags(){const{tags:e}=this.attributes,t=this.querySelector("#project-tags");e.value.split(",").forEach(n=>{const o=document.createElement("li");o.innerHTML=n,t.appendChild(o)})}}customElements.define("project-component",Q);
