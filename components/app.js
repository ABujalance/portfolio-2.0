import htmlTemplate from "./app.html?raw";
import styles from "./app.scss";

export class AppComponent extends HTMLElement {
  constructor() {
    super();

    const template = document.createElement("template");
    template.innerHTML = htmlTemplate;

    const style = document.createElement("style");
    style.innerHTML = styles;

    this.appendChild(style);
    this.appendChild(template.content.cloneNode(true));
  }
}

customElements.define("app-component", AppComponent);
