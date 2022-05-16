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
    const { id } = this.attributes;
    this.buildSkillSet();
    document
      .getElementById(`show-skills-${id.value}`)
      .addEventListener("click", () => onShowSkillHandler(id.value));
    document
      .getElementById(`close-${id.value}`)
      .addEventListener("click", () => onShowSkillHandler(id.value));
  }

  buildSkillSet() {
    const { id, skillList } = this.attributes;
    const skillListElement = this.querySelector(`#skill-set-${id.value}`);
    skillListElement.ariaHidden = true;
    skillList.value.split(",").forEach((skill) => {
      const listElement = document.createElement("li");
      listElement.innerHTML = skill;
      skillListElement.appendChild(listElement);
    });
    const lastListElement = document.createElement("li");
    lastListElement.innerHTML = `<button id="close-${id.value}" tabindex="-1" class="skill-set__list__close hide-desktop">close</button>`;
    skillListElement.appendChild(lastListElement);
  }
}

function onShowSkillHandler(id) {
  const skillListElement = document.querySelector(`#skill-set-${id}`);
  const skillCloseButton = document.querySelector(`#close-${id}`);
  if (skillListElement.classList.contains("show")) {
    skillListElement.classList.remove("show");
    skillCloseButton.tabIndex = "-1";
    skillListElement.ariaHidden = true;
  } else {
    skillListElement.classList.add("show");
    skillCloseButton.tabIndex = null;
    skillListElement.ariaHidden = false;
  }
}

customElements.define("skill-set-component", SkillSetComponent);
