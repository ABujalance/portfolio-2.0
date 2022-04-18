fetch("components/test/test.html")
  .then((stream) => stream.text())
  .then((text) => define(text));

function define(html) {
  debugger;
  class TestComponent extends HTMLElement {
    constructor() {
      super();

      const template = document.createElement('template');
      template.innerHTML=html

      this.attachShadow({ mode: "open" });
      this.shadowRoot.appendChild(template.content.cloneNode(true));
    }
  }

  customElements.define("test-element", TestComponent);
}
