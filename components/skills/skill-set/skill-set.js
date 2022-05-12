import htmlTemplate from "./skill-set.html?raw";

export class SkillSetComponent extends HTMLElement {
  constructor() {
    super();

    const template = document.createElement("template");
    template.innerHTML = htmlTemplate;
    this.appendChild(template.content.cloneNode(true));
  }
}

customElements.define("skill-set-component", SkillSetComponent);
