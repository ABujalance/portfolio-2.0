export class HTMLElementWithTemplate extends HTMLElement {
  connectedCallback() {
    this.parseProps();
  }
  parseProps() {
    const htmlContent = this.innerHTML;
    Array.from(this.attributes).forEach((attr) => {
      const subRegex = `{${attr.name}}`;
      this.innerHTML = htmlContent.replace(subRegex, attr.value);
    });
  }
}
