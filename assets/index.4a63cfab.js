var b=Object.defineProperty;var h=(n,e,t)=>e in n?b(n,e,{enumerable:!0,configurable:!0,writable:!0,value:t}):n[e]=t;var r=(n,e,t)=>(h(n,typeof e!="symbol"?e+"":e,t),t);const f=function(){const e=document.createElement("link").relList;if(e&&e.supports&&e.supports("modulepreload"))return;for(const o of document.querySelectorAll('link[rel="modulepreload"]'))s(o);new MutationObserver(o=>{for(const i of o)if(i.type==="childList")for(const a of i.addedNodes)a.tagName==="LINK"&&a.rel==="modulepreload"&&s(a)}).observe(document,{childList:!0,subtree:!0});function t(o){const i={};return o.integrity&&(i.integrity=o.integrity),o.referrerpolicy&&(i.referrerPolicy=o.referrerpolicy),o.crossorigin==="use-credentials"?i.credentials="include":o.crossorigin==="anonymous"?i.credentials="omit":i.credentials="same-origin",i}function s(o){if(o.ep)return;o.ep=!0;const i=t(o);fetch(o.href,i)}};f();var v=`<nav-component></nav-component>
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
<policy-component></policy-component>
`;class g extends HTMLElement{constructor(){super();const e=document.createElement("template");e.innerHTML=v,this.appendChild(e.content.cloneNode(!0))}}customElements.define("app-component",g);var k=`<div class="landing">
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
`;class l extends HTMLElement{connectedCallback(){const e=Object.assign({},...Array.from(this.attributes,({name:t,value:s})=>({[t]:s})));this.innerHTML=y(this.innerHTML.toString().trim(),e)}}function y(n,e){const t={"&":"&amp;","<":"&lt;",">":"&gt;","(":"%28",")":"%29"},s=a=>a.toString().replace(/[&<>\(\)]/g,c=>t[c]||c),o=Object.keys(e),i=Object.values(e).map(s);return new Function(...o,`return \`${n}\``)(...i)}class w extends l{constructor(){super();const e=document.createElement("template");e.innerHTML=k,this.appendChild(e.content.cloneNode(!0))}}customElements.define("landing-component",w);var C=`<div class="skills">
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
`;const L=[{icon:"web",id:"frontend",title:"Front-End",skillList:["<b><span class='font__color-identity'>Vanilla</span></b> web development: Html 5 | Cs3 | Javascript \u{1F5A5}\uFE0F","<b><span class='font__color-identity'>Accesible</span></b> performant and responsive sites \u{1F468}\u200D\u{1F4BB}","<b><span class='font__color-identity'>Modern</span></b> frameworks <b><span class='font__color-identity'>React</span></b>","<b><span class='font__color-identity'>Clean code</span></b> testing and best practices \u2705","Nextjs | <b><span class='font__color-identity'>Sass</span></b>\u{1F485} | <b><span class='font__color-identity'>Rollup</span></b> | Vite | Webpack","<b><span class='font__color-identity'>Server Side Rendering</span></b>"]},{icon:"dns",id:"backend",title:"Back-End",skillList:["<b><span class='font__color-identity'>Languages</span></b>: Nodejs | Java","<b><span class='font__color-identity'>Frameworks</span></b>: Spring | Express | <b><span class='font__color-identity'>Nestjs</span></b>","<b><span class='font__color-identity'>Serverless</span></b> computing \u2601\uFE0F","<b><span class='font__color-identity'>Sql</span></b> and NoSql databases \u{1F4BD}","<b><span class='font__color-identity'>Technologies</span></b>: Firebase | AWS | Google Cloud | Git | CI \u{1F916}"]},{icon:"people",id:"code",title:"Personal",skillList:["Experience with <b><span class='font__color-identity'>Distributed</span></b> and <b><span class='font__color-identity'>International teams \u{1F310}</span></b>","<b><span class='font__color-identity'>Languages</span></b>: English \u{1F1EC}\u{1F1E7} (Bilingual) | Spanish \u{1F1EA}\u{1F1F8} (Native)","Experience with <b><span class='font__color-identity'>Agile Methodologies</span></b>","Excellent <b><span class='font__color-identity'>Mentor</span></b> \u{1F468}\u200D\u{1F3EB} and writter","Volleyball \u{1F3D0}  <span class='font__size-s font__color-accent'>(I'm pretty bad but still have fun)</span>"]}],E=[{name:"Html 5, Css 3",id:"html",percentage:"90%"},{name:"NodeJS",id:"node",percentage:"60%"},{name:"React",id:"react",percentage:"90%"},{name:"Design",id:"design",percentage:"30%"},{name:"Javascript, Typescript",id:"js",percentage:"80%"},{name:"Databases",id:"db",percentage:"50%"},{name:"Software Patterns",id:"java",percentage:"60%"}];class T extends l{constructor(){super();const e=document.createElement("template");e.innerHTML=C,this.appendChild(e.content.cloneNode(!0))}buildSkillsList(){const e=this.querySelector("#skills-list");L.forEach(t=>{const s=document.createElement("skill-set-component");s.setAttribute("icon",t.icon),s.setAttribute("id",t.id),s.setAttribute("title",t.title),s.setAttribute("skillList",t.skillList),e.appendChild(s)})}buildSkillsStats(){const e=this.querySelector("#skills-stats");E.forEach(t=>{const s=document.createElement("skill-bar-component");s.setAttribute("name",t.name),s.setAttribute("id",t.id),s.setAttribute("percentage",t.percentage),e.appendChild(s)})}connectedCallback(){this.buildSkillsStats(),this.buildSkillsList(),super.connectedCallback();const e=document.getElementById("switch-button");e.addEventListener("click",j),e.addEventListener("mousedown",t=>t.preventDefault())}}function j(){const n=document.querySelector("#skills-card");n.classList.contains("is-flipped")?n.classList.remove("is-flipped"):n.classList.add("is-flipped"),this.classList.contains("active")?this.classList.remove("active"):this.classList.add("active")}customElements.define("skills-component",T);var S=`<div id="nav" class="nav">
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
`;class x extends l{constructor(){super();r(this,"onScroll",()=>{const t=document.getElementById("nav");window.scrollY<=window.innerHeight-200?t.classList.remove("show-nav"):t.classList.add("show-nav")});const t=document.createElement("template");t.innerHTML=S,this.appendChild(t.content.cloneNode(!0))}connectedCallback(){super.connectedCallback(),document.addEventListener("scroll",this.onScroll);const t=document.getElementById("nav-button"),s=document.getElementById("nav-list"),o=document.getElementById("nav-close"),i=document.getElementById("modal-background");t.addEventListener("click",a=>z(a,s)),o.addEventListener("click",a=>d(a,s)),i.addEventListener("click",a=>{d(a,s)})}}function z(n,e){n.stopPropagation(),n.preventDefault(),e.classList.contains("show")?m(e):M(e)}function d(n,e){n.stopPropagation(),n.preventDefault(),m(e)}function m(n){n.classList.remove("show"),document.body.classList.remove("modal")}function M(n){n.classList.add("show"),document.body.classList.add("modal")}customElements.define("nav-component",x);var H=`<div class="footer">
  <div class="footer__content"><contact-form-component /></div>
  <div class="footer__links"><footer-links-component /></div>
  <div class="font__size-standard font__color-base">This site was developed using vanilla-only tecnologies</div>
  <p class="font__size-s font__color-base">Copyright \xA9 Abujalance 2022</p>
</div>
`;class A extends l{constructor(){super();const e=document.createElement("template");e.innerHTML=H,this.appendChild(e.content.cloneNode(!0))}}customElements.define("footer-component",A);var I=`<div class="skill-set">
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
`;class $ extends l{constructor(){super();const e=document.createElement("template");e.innerHTML=I,this.appendChild(e.content.cloneNode(!0))}connectedCallback(){super.connectedCallback();const{id:e}=this.attributes;this.buildSkillSet(),document.getElementById(`show-skills-${e.value}`).addEventListener("click",()=>p(e.value)),document.getElementById(`close-${e.value}`).addEventListener("click",()=>p(e.value))}buildSkillSet(){const{id:e,skillList:t}=this.attributes,s=this.querySelector(`#skill-set-${e.value}`);s.ariaHidden=!0,t.value.split(",").forEach(i=>{const a=document.createElement("li");a.innerHTML=i,s.appendChild(a)});const o=document.createElement("li");o.innerHTML=`<button id="close-${e.value}" tabindex="-1" class="skill-set__list__close hide-desktop">close</button>`,s.appendChild(o)}}function p(n){const e=document.querySelector(`#skill-set-${n}`),t=document.querySelector(`#close-${n}`);e.classList.contains("show")?(e.classList.remove("show"),t.tabIndex="-1",e.ariaHidden=!0):(e.classList.add("show"),t.tabIndex=null,e.ariaHidden=!1)}customElements.define("skill-set-component",$);var N=`<div class="skill-bar">
  <span class="skill-bar__name">\${name}</span>
  <div class="skill-bar__progress-bar">
    <span id="\${id}">\${percentage}</span>
  </div>
</div>
`;class B extends l{constructor(){super();const e=document.createElement("template");e.innerHTML=N,this.appendChild(e.content.cloneNode(!0))}connectedCallback(){super.connectedCallback();const{id:e,percentage:t}=this.attributes,s=this.querySelector(`#${e.value}`);s.style["max-width"]=t.value}}customElements.define("skill-bar-component",B);var P=`<form
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
`;class q extends l{constructor(){super();const e=document.createElement("template");e.innerHTML=P,this.appendChild(e.content.cloneNode(!0))}connectedCallback(){super.connectedCallback(),document.getElementById("contact-form").addEventListener("focus",u,!0)}}function u(){const n=document.createElement("script");n.src="https://www.recaptcha.net/recaptcha/api.js?render=6LeL8A8gAAAAAGKCdX_tJbchHOvFlxiJYy6hJR9n",document.head.appendChild(n),document.getElementById("contact-form").removeEventListener("focus",u,!0);var e=setInterval(function(){!window.grecaptcha||!window.grecaptcha.execute||(clearInterval(e),grecaptcha.execute("6LeL8A8gAAAAAGKCdX_tJbchHOvFlxiJYy6hJR9n",{action:"submit"}).then(t=>{document.getElementById("g-recaptcha-response").value=t}))},1e3)}customElements.define("contact-form-component",q);var F=`<div class="footer-links" id="footer-links"></div>
`;const O=[{url:"https://www.linkedin.com/in/alberto-bujalance-178062144/",id:"linkedin",title:"LinkedIn",icon:"linkedin"},{url:"https://github.com/ABujalance",id:"github",title:"Git Hub",icon:"github"}];var J='<svg fill="currentColor" xmlns="http://www.w3.org/2000/svg"  viewBox="0 0 24 24" width="96px" height="96px">    <path d="M10.9,2.1c-4.6,0.5-8.3,4.2-8.8,8.7c-0.5,4.7,2.2,8.9,6.3,10.5C8.7,21.4,9,21.2,9,20.8v-1.6c0,0-0.4,0.1-0.9,0.1 c-1.4,0-2-1.2-2.1-1.9c-0.1-0.4-0.3-0.7-0.6-1C5.1,16.3,5,16.3,5,16.2C5,16,5.3,16,5.4,16c0.6,0,1.1,0.7,1.3,1c0.5,0.8,1.1,1,1.4,1 c0.4,0,0.7-0.1,0.9-0.2c0.1-0.7,0.4-1.4,1-1.8c-2.3-0.5-4-1.8-4-4c0-1.1,0.5-2.2,1.2-3C7.1,8.8,7,8.3,7,7.6C7,7.2,7,6.6,7.3,6 c0,0,1.4,0,2.8,1.3C10.6,7.1,11.3,7,12,7s1.4,0.1,2,0.3C15.3,6,16.8,6,16.8,6C17,6.6,17,7.2,17,7.6c0,0.8-0.1,1.2-0.2,1.4 c0.7,0.8,1.2,1.8,1.2,3c0,2.2-1.7,3.5-4,4c0.6,0.5,1,1.4,1,2.3v2.6c0,0.3,0.3,0.6,0.7,0.5c3.7-1.5,6.3-5.1,6.3-9.3 C22,6.1,16.9,1.4,10.9,2.1z"/></svg>',R='<svg fill="currentColor" xmlns="http://www.w3.org/2000/svg"  viewBox="0 0 30 30" width="60px" height="60px">    <path d="M15,3C8.373,3,3,8.373,3,15c0,6.627,5.373,12,12,12s12-5.373,12-12C27,8.373,21.627,3,15,3z M10.496,8.403 c0.842,0,1.403,0.561,1.403,1.309c0,0.748-0.561,1.309-1.496,1.309C9.561,11.022,9,10.46,9,9.712C9,8.964,9.561,8.403,10.496,8.403z M12,20H9v-8h3V20z M22,20h-2.824v-4.372c0-1.209-0.753-1.488-1.035-1.488s-1.224,0.186-1.224,1.488c0,0.186,0,4.372,0,4.372H14v-8 h2.918v1.116C17.294,12.465,18.047,12,19.459,12C20.871,12,22,13.116,22,15.628V20z"/></svg>';const V={github:J,linkedin:R};class D extends l{constructor(){super();const e=document.createElement("template");e.innerHTML=F,this.appendChild(e.content.cloneNode(!0))}buildFooterLinks(){const e=this.querySelector("#footer-links");O.forEach(t=>{const s=document.createElement("a");s.href=t.url,s.id=t.id,s.ariaLabel=t.title,s.innerHTML=V[t.icon],e.appendChild(s)})}connectedCallback(){this.buildFooterLinks(),super.connectedCallback()}}customElements.define("footer-links-component",D);var G=`<div class="about">
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
`;class W extends l{constructor(){super();const e=document.createElement("template");e.innerHTML=G,this.appendChild(e.content.cloneNode(!0))}}customElements.define("about-component",W);var Y=`<div class="projects__wrapper">
  <ul id="projects-list" class="projects"></ul>
</div>
`;const K=[{id:"portfolio",title:"Portfolio 2.0",description:"<span class='font__color-identity'><b>New portfolio</b></span> made using <span class='font__color-dark-accent'><b>vanilla-only</b></span> technologies. </br> It started as a way to test my knowledge in web development. </br>The design is simple but it's fast and reliable",link:"https://www.abujalance.com/",image:"https://res.cloudinary.com/abujalance/image/upload/w_400/v1654350516/portfolio_zdw0pb.png",tags:["HTML","Css","Js","Web Components","Sass","Vite","Learning Experience"]},{id:"mapper",title:"Awesome Mapper",description:"<span class='font__color-identity'><b>Map generator</b></span> based on custom png files and a tile map.</br> It uses different size brushes and tools.</br> The design is currently being reviewed to offer a more usable look",link:"https://tilemapper.abujalance.com/",image:"https://res.cloudinary.com/abujalance/image/upload/w_400/v1654191018/awesomeMapper_aaxyna.jpg",tags:["Work in Progress","React","Canvas","Firebase","Learning Experience"]},{id:"old",title:"portfolio 1.0",description:"This was my first portfolio. I made it when I <span class='font__color-identity'><b>started learning React</b></span>. The code is a bit messy and I used a template for the design. Is far less responsive and slower than this one but a good learning experience overall.",link:"http://old.abujalance.com/",image:"https://res.cloudinary.com/abujalance/image/upload/w_400/v1654347334/old_e0xjmc.png",tags:["React","Sass","Learning experience"]},{id:"caser",title:"Caser Insurance Agents Searcher",description:"This project was part of the new Caser web implementation. </br> It allows an user to <span class='font__color-identity'><b>search nearby insurance agents</b></span> and apply different filters and icons based on the type of agent",link:"https://www.caser.es/conocenos/buscador-agentes",image:"https://res.cloudinary.com/abujalance/image/upload/w_400/v1654191015/caser_mapa_agentes_qbols4.jpg",tags:["Java","Liferay","Javascript","Maps"]},{id:"chatbot",title:"Integrated chatbot assistant",description:"This was part of my degree's final project. The assistant guides you through the configuration proccess of a tool. It was also integrated with a real robot which hears and answers the questions",link:"https://www.youtube.com/watch?v=zWELCudYRjY",image:"https://res.cloudinary.com/abujalance/image/upload/w_400/v1654191021/chatbot_nao_ryzeav.jpg",tags:["IBM Watson","Python","Node-Red"]}];class U extends l{constructor(){super();const e=document.createElement("template");e.innerHTML=Y,this.appendChild(e.content.cloneNode(!0))}buildProjectsList(){const e=this.querySelector("#projects-list");K.forEach(t=>{const s=document.createElement("project-component");s.setAttribute("id",t.id),s.setAttribute("title",t.title),s.setAttribute("description",t.description),s.setAttribute("link",t.link),s.setAttribute("image",t.image),s.setAttribute("tags",t.tags);const o=document.createElement("li");o.appendChild(s),e.appendChild(o)})}connectedCallback(){this.buildProjectsList(),super.connectedCallback()}}customElements.define("projects-component",U);var X=`<div class="project" tabindex="0">
  <img class="project__picture" src="\${image}" alt="project image" />
  <div class="project__cover">
    <div class="project__description font__color-base">
      <span
        class="project__description__text font__size-ml font__size__mobile-sm-m"
        id="project-description-\${id}"
      >
      </span>
      <a
        href="\${link}"
        target="blank"
        class="project__description__button font__size-ml"
        >Check it!</a
      >
    </div>
  </div>
  <div
    class="project__title font__color-identity font__size-ml font__size__mobile-m"
  >
    <h3>\${title}</h3>
  </div>
  <div
    class="project__view-more hide-desktop font__size-ml font__size__mobile-m"
  >
    View more
  </div>
  <ul id="project-tags-\${id}" class="project__tags"></ul>
</div>
`;class Q extends l{constructor(){super();const e=document.createElement("template");e.innerHTML=X,this.appendChild(e.content.cloneNode(!0))}connectedCallback(){super.connectedCallback(),this.buildTags(),this.buildDescription()}buildDescription(){const{description:e,id:t}=this.attributes,s=this.querySelector(`#project-description-${t.value}`);s.innerHTML=e.value}buildTags(){const{tags:e,id:t}=this.attributes,s=this.querySelector(`#project-tags-${t.value}`);e.value.split(",").forEach(o=>{const i=document.createElement("li");i.innerHTML=o,s.appendChild(i)})}}customElements.define("project-component",Q);var Z=`<div id="policy" class="policy font__size-ml">
  This site uses essential cookies to ensure you get the best experience
  <a href="#footer" class="font__size-ml">Learn more</a>
  <button id="policy-button" class="policy__button font__size-ml">
    I agree
  </button>
</div>
`;class ee extends l{constructor(){super();const e=document.createElement("template");e.innerHTML=Z,this.appendChild(e.content.cloneNode(!0))}connectedCallback(){super.connectedCallback(),te()&&_(),this.querySelector("#policy-button").addEventListener("click",ne)}}function _(){const n=document.querySelector("#policy");n.style.display="none"}function te(){var n=document.cookie,e="accepted_policy=",t=n.indexOf("; "+e);if(t==-1){if(t=n.indexOf(e),t!=0)return null}else{t+=2;var s=document.cookie.indexOf(";",t);s==-1&&(s=n.length)}return Boolean(decodeURI(n.substring(t+e.length,s)))}function ne(){var n=new Date;n.setMonth(n.getMonth()+6),document.cookie=`accepted_policy=true; expires=${n.toUTCString()}`,_()}customElements.define("policy-component",ee);
