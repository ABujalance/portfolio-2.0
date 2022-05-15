import htmlTemplate from "./footer.html?raw";
import { HTMLElementWithTemplate } from "../../utils/html-element-with-template";

export class FooterComponent extends HTMLElementWithTemplate {
  constructor() {
    super();

    const template = document.createElement("template");
    template.innerHTML = htmlTemplate;
    this.appendChild(template.content.cloneNode(true));
  }
}

customElements.define("footer-component", FooterComponent);
