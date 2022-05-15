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
    if (window.scrollY <= window.innerHeight - 50) {
      navElement.classList.remove("show-nav");
    } else {
      navElement.classList.add("show-nav");
    }
  };

  connectedCallback() {
    document.addEventListener("scroll", this.onScroll);
  }
}

customElements.define("nav-component", NavComponent);
