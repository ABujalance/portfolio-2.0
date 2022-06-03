import htmlTemplate from "./project.html?raw";
import { HTMLElementWithTemplate } from "../../../utils/html-element-with-template";

export class ProjectComponent extends HTMLElementWithTemplate {
  constructor() {
    super();

    const template = document.createElement("template");
    template.innerHTML = htmlTemplate;
    this.appendChild(template.content.cloneNode(true));
  }

  connectedCallback() {
    super.connectedCallback();
    this.buildTags();
  }

  buildTags() {
    const { tags } = this.attributes;
    const projectTagsElement = this.querySelector(`#project-tags`);
    tags.value.split(",").forEach((tag) => {
      const listElement = document.createElement("li");
      listElement.innerHTML = tag;
      projectTagsElement.appendChild(listElement);
    });
  }
}

customElements.define("project-component", ProjectComponent);
