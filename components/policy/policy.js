import htmlTemplate from "./policy.html?raw";
import { HTMLElementWithTemplate } from "../../utils/html-element-with-template";

export class PolicyComponent extends HTMLElementWithTemplate {
  constructor() {
    super();

    const template = document.createElement("template");
    template.innerHTML = htmlTemplate;
    this.appendChild(template.content.cloneNode(true));
  }

  connectedCallback() {
    super.connectedCallback();
    if (isPolicyAccepted()) {
      hidePolicy();
    }
    this.querySelector("#policy-button").addEventListener("click", onPolicyClick);
  }
}

function hidePolicy() {
  const policy = document.querySelector("#policy");
  policy.style.display = "none";
}

function isPolicyAccepted() {
  var dc = document.cookie;
  var prefix = "accepted_policy=";
  var begin = dc.indexOf("; " + prefix);
  if (begin == -1) {
    begin = dc.indexOf(prefix);
    if (begin != 0) return null;
  } else {
    begin += 2;
    var end = document.cookie.indexOf(";", begin);
    if (end == -1) {
      end = dc.length;
    }
  }
  return Boolean(decodeURI(dc.substring(begin + prefix.length, end)));
}

function onPolicyClick() {
  var date = new Date();
  date.setMonth(date.getMonth() + 6);
  document.cookie = `accepted_policy=true; expires=${date.toUTCString()}`;
  hidePolicy();
}

customElements.define("policy-component", PolicyComponent);
