import htmlTemplate from "./home.html?raw";
import styles from "./home.scss";

export class HomeComponent extends HTMLElement {
  constructor() {
    super();

    const template = document.createElement("template");
    template.innerHTML = htmlTemplate;

    const style = document.createElement("style");
    style.innerHTML = styles;

    this.attachShadow({ mode: "open" });
    this.shadowRoot.appendChild(style);
    this.shadowRoot.appendChild(template.content.cloneNode(true));
  }
}
customElements.define("home-component", HomeComponent);
