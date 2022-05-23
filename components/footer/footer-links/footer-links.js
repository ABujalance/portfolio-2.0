import htmlTemplate from "./footer-links.html?raw";
import { HTMLElementWithTemplate } from "../../../utils/html-element-with-template";
import { links } from "../../../data/links-data";
import github from "../../../images/github.svg?raw";
import linkedin from "../../../images/linkedin.svg?raw";

const iconsMap = { github, linkedin };

export class FooterLinksComponent extends HTMLElementWithTemplate {
  constructor() {
    super();

    const template = document.createElement("template");
    template.innerHTML = htmlTemplate;
    this.appendChild(template.content.cloneNode(true));
  }

  buildFooterLinks() {
    const footerLinksElement = this.querySelector("#footer-links");
    links.forEach((link) => {
      const linkElement = document.createElement("a");
      linkElement.href = link.url;
      linkElement.id = link.id;
      linkElement.ariaLabel = link.title;
      linkElement.innerHTML = iconsMap[link.icon];
      footerLinksElement.appendChild(linkElement);
    });
  }

  connectedCallback() {
    this.buildFooterLinks();
    super.connectedCallback();
  }
}

customElements.define("footer-links-component", FooterLinksComponent);
