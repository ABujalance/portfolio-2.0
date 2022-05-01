import testHtml from "./test.html?raw";
import testStyle from "./test.css";

class TestComponent extends HTMLElement {
  constructor() {
    super();

    const template = document.createElement("template");
    template.innerHTML = testHtml;

    const style = document.createElement("style");
    style.innerHTML = testStyle;

    this.attachShadow({ mode: "open" });
    this.shadowRoot.appendChild(style);
    this.shadowRoot.appendChild(template.content.cloneNode(true));
  }
}

customElements.define("test-element", TestComponent);
