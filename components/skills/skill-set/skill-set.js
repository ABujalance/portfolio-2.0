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
    const { title } = this.attributes;
    this.buildSkillSet();
    document.getElementById(`show-skills-${title.value}`).addEventListener("click", () => onShowSkillHandler(title.value));
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

function onShowSkillHandler(title) {
  const skillListElement = document.querySelector(`#skill-set-${title}`);
  if (skillListElement.classList.contains("show")) {
    skillListElement.classList.remove("show");
  } else {
    skillListElement.classList.add("show");
  }

  const buttonElement = document.querySelector(`#skills-container-${title}`);
  if (buttonElement.classList.contains("active")) {
    buttonElement.classList.remove("active");
  } else {
    buttonElement.classList.add("active");
  }
}

customElements.define("skill-set-component", SkillSetComponent);
