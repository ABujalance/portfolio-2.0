import htmlTemplate from "./about.html?raw";
import { HTMLElementWithTemplate } from "../../../utils/html-element-with-template";

export class AboutComponent extends HTMLElementWithTemplate {
  constructor() {
    super();

    const template = document.createElement("template");
    template.innerHTML = htmlTemplate;
    this.appendChild(template.content.cloneNode(true));
  }
}

customElements.define("about-component", AboutComponent);
