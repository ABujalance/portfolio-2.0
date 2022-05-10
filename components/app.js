import htmlTemplate from "./app.html?raw";

export class AppComponent extends HTMLElement {
  constructor() {
    super();

    const template = document.createElement("template");
    template.innerHTML = htmlTemplate;

    this.appendChild(template.content.cloneNode(true));
  }
}

customElements.define("app-component", AppComponent);
