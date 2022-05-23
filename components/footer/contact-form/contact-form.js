import htmlTemplate from "./contact-form.html?raw";
import { HTMLElementWithTemplate } from "../../../utils/html-element-with-template";

export class ContactFormComponent extends HTMLElementWithTemplate {
  constructor() {
    super();

    const template = document.createElement("template");
    template.innerHTML = htmlTemplate;
    this.appendChild(template.content.cloneNode(true));
  }

  connectedCallback() {
    super.connectedCallback();
    const contactForm = document.getElementById("contact-form");
    contactForm.addEventListener("click", onContactForm);
  }
}

function onContactForm() {
  grecaptcha.execute("6LeL8A8gAAAAAGKCdX_tJbchHOvFlxiJYy6hJR9n", { action: "submit" }).then((token) => {
    document.getElementById("g-recaptcha-response").value = token;
  });
}

customElements.define("contact-form-component", ContactFormComponent);
