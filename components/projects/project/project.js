import htmlTemplate from "./project.html?raw";
import { HTMLElementWithTemplate } from "../../../utils/html-element-with-template";

export class ProjectComponent extends HTMLElementWithTemplate {
  constructor() {
    super();

    const template = document.createElement("template");
    template.innerHTML = htmlTemplate;
    this.appendChild(template.content.cloneNode(true));
  }
}

customElements.define("project-component", ProjectComponent);
