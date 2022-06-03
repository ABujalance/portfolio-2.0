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
    contactForm.addEventListener("focus", onFocusForm, true);
  }
}

function onFocusForm() {
  const gachaScript = document.createElement("script");
  gachaScript.src = "https://www.recaptcha.net/recaptcha/api.js?render=6LeL8A8gAAAAAGKCdX_tJbchHOvFlxiJYy6hJR9n";
  document.head.appendChild(gachaScript);
  document.getElementById("contact-form").removeEventListener("focus", onFocusForm, true);

  var recaptchaInterval = setInterval(function () {
    if (!window.grecaptcha || !window.grecaptcha.execute) {
      return;
    }

    clearInterval(recaptchaInterval);
    grecaptcha.execute("6LeL8A8gAAAAAGKCdX_tJbchHOvFlxiJYy6hJR9n", { action: "submit" }).then((token) => {
      document.getElementById("g-recaptcha-response").value = token;
    });
  }, 1000);
}

customElements.define("contact-form-component", ContactFormComponent);
