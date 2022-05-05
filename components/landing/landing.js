import htmlTemplate from "./landing.html?raw";
// import styles from "./landing.scss";

export class LandingComponent extends HTMLElement {
  constructor() {
    super();

    const template = document.createElement("template");
    template.innerHTML = htmlTemplate;

    // const style = document.createElement("style");
    // style.innerHTML = styles;

    // this.appendChild(style);
    this.appendChild(template.content.cloneNode(true));

    // this.attachShadow({ mode: "open" });
    // this.shadowRoot.appendChild(style);
    // this.shadowRoot.appendChild(template.content.cloneNode(true));
  }
}

customElements.define("landing-component", LandingComponent);
