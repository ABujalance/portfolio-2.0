import htmlTemplate from "./skill-bar.html?raw";
import { HTMLElementWithTemplate } from "../../../utils/html-element-with-template";

export class SkillBarComponent extends HTMLElementWithTemplate {
  constructor() {
    super();

    const template = document.createElement("template");
    template.innerHTML = htmlTemplate;
    this.appendChild(template.content.cloneNode(true));
  }

  connectedCallback() {
    super.connectedCallback();
    const { name, percentage } = this.attributes;
    const spanElement = this.querySelector(`#${name.value}`);
    spanElement.style["max-width"] = percentage.value;
  }
}

customElements.define("skill-bar-component", SkillBarComponent);
