import htmlTemplate from "./projects.html?raw";
import { HTMLElementWithTemplate } from "../../utils/html-element-with-template";

export class ProjectsComponent extends HTMLElementWithTemplate {
  constructor() {
    super();

    const template = document.createElement("template");
    template.innerHTML = htmlTemplate;
    this.appendChild(template.content.cloneNode(true));
  }
}

customElements.define("projects-component", ProjectsComponent);
