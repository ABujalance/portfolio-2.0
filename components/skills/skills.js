import htmlTemplate from "./skills.html?raw";
import { HTMLElementWithTemplate } from "../../utils/html-element-with-template";
import { skills, stats } from "../../data/skills-data";

export class skillsComponent extends HTMLElementWithTemplate {
  constructor() {
    super();
    const template = document.createElement("template");
    template.innerHTML = htmlTemplate;
    this.appendChild(template.content.cloneNode(true));
  }

  buildSkillsList() {
    const skillsList = this.querySelector("#skills-list");
    skills.forEach((skill) => {
      const skillSetComponent = document.createElement("skill-set-component");
      skillSetComponent.setAttribute("icon", skill.icon);
      skillSetComponent.setAttribute("id", skill.id);
      skillSetComponent.setAttribute("title", skill.title);
      skillSetComponent.setAttribute("skillList", skill.skillList);
      skillsList.appendChild(skillSetComponent);
    });
  }

  buildSkillsStats() {
    const skillsStats = this.querySelector("#skills-stats");
    stats.forEach((stat) => {
      const skillBarComponent = document.createElement("skill-bar-component");
      skillBarComponent.setAttribute("name", stat.name);
      skillBarComponent.setAttribute("id", stat.id);
      skillBarComponent.setAttribute("percentage", stat.percentage);
      skillsStats.appendChild(skillBarComponent);
    });
  }

  connectedCallback() {
    this.buildSkillsStats();
    this.buildSkillsList();
    super.connectedCallback();
    const switchButton = document.getElementById("switch-button");
    switchButton.addEventListener("click", onChangeHandler);
  }
}

function onChangeHandler() {
  const skillsCard = document.querySelector("#skills-card");
  if (skillsCard.classList.contains("is-flipped")) {
    skillsCard.classList.remove("is-flipped");
  } else {
    skillsCard.classList.add("is-flipped");
  }

  if (this.classList.contains("active")) {
    this.classList.remove("active");
  } else {
    this.classList.add("active");
  }
}

customElements.define("skills-component", skillsComponent);
