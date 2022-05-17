import htmlTemplate from "./nav.html?raw";
import { HTMLElementWithTemplate } from "../../utils/html-element-with-template";

export class NavComponent extends HTMLElementWithTemplate {
  constructor() {
    super();

    const template = document.createElement("template");
    template.innerHTML = htmlTemplate;
    this.appendChild(template.content.cloneNode(true));
  }

  onScroll = () => {
    const navElement = document.getElementById("nav");
    if (window.scrollY <= window.innerHeight - 200) {
      navElement.classList.remove("show-nav");
    } else {
      navElement.classList.add("show-nav");
    }
  };

  connectedCallback() {
    super.connectedCallback();
    document.addEventListener("scroll", this.onScroll);
    const navButton = document.getElementById("nav-button");
    navButton.addEventListener("click", onShowNavHandler);
  }
}

function onShowNavHandler() {
  const navList = document.querySelector("#nav-list");
  if (navList.classList.contains("show")) {
    navList.classList.remove("show");
  } else {
    navList.classList.add("show");
  }
}

customElements.define("nav-component", NavComponent);
