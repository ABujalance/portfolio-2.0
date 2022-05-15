import htmlTemplate from "./skill-set.html?raw";
import { HTMLElementWithTemplate } from "../../../utils/html-element-with-template";

export class SkillSetComponent extends HTMLElementWithTemplate {
  constructor() {
    super();

    const template = document.createElement("template");
    template.innerHTML = htmlTemplate;
    this.appendChild(template.content.cloneNode(true));
  }

  connectedCallback() {
    super.connectedCallback();
    this.buildSkillSet();
  }

  buildSkillSet() {
    const { title, skillList } = this.attributes;
    const skillListElement = this.querySelector(`#skill-set-${title.value}`);
    skillList.value.split(",").forEach((skill) => {
      const listElement = document.createElement("li");
      listElement.innerHTML = skill;
      skillListElement.appendChild(listElement);
    });
  }
}

customElements.define("skill-set-component", SkillSetComponent);
