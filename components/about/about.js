import htmlTemplate from "./about.html?raw";

export class AboutComponent extends HTMLElement {
  constructor() {
    super();

    const template = document.createElement("template");
    template.innerHTML = htmlTemplate;
    this.appendChild(template.content.cloneNode(true));
  }
}

customElements.define("about-component", AboutComponent);
