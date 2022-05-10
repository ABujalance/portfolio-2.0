import htmlTemplate from "./footer.html?raw";

export class FooterComponent extends HTMLElement {
  constructor() {
    super();

    const template = document.createElement("template");
    template.innerHTML = htmlTemplate;
    this.appendChild(template.content.cloneNode(true));
  }
}

customElements.define("footer-component", FooterComponent);
