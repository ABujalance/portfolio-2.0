import htmlTemplate from "./landing.html?raw";

export class LandingComponent extends HTMLElement {
  constructor() {
    super();

    const template = document.createElement("template");
    template.innerHTML = htmlTemplate;
    this.appendChild(template.content.cloneNode(true));
  }
}

customElements.define("landing-component", LandingComponent);
