import htmlTemplate from "./skills.html?raw";

export class skillsComponent extends HTMLElement {
  constructor() {
    super();

    const template = document.createElement("template");
    template.innerHTML = htmlTemplate;
    this.appendChild(template.content.cloneNode(true));
  }
}

customElements.define("skills-component", skillsComponent);
