import htmlTemplate from "./landing.html?raw";
import { HTMLElementWithTemplate } from "../../utils/html-element-with-template";

export class LandingComponent extends HTMLElementWithTemplate {
  constructor() {
    super();

    const template = document.createElement("template");
    template.innerHTML = htmlTemplate;
    this.appendChild(template.content.cloneNode(true));
  }
}

customElements.define("landing-component", LandingComponent);
