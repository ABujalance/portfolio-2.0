import htmlTemplate from "./skill-set.html?raw";
import { HTMLElementWithTemplate } from "../../../utils/html-element-with-template";

export class SkillSetComponent extends HTMLElementWithTemplate {
  constructor() {
    super();

    const template = document.createElement("template");
    template.innerHTML = htmlTemplate;
    this.appendChild(template.content.cloneNode(true));
  }
}

customElements.define("skill-set-component", SkillSetComponent);
