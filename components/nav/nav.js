import htmlTemplate from "./nav.html?raw";
import { HTMLElementWithTemplate } from "../../utils/html-element-with-template";

export class NavComponent extends HTMLElementWithTemplate {
  constructor() {
    super();

    const template = document.createElement("template");
    template.innerHTML = htmlTemplate;
    this.appendChild(template.content.cloneNode(true));
  }

  onScroll = () => {
    const navElement = document.getElementById("nav");
    if (window.scrollY <= window.innerHeight - 200) {
      navElement.classList.remove("show-nav");
    } else {
      navElement.classList.add("show-nav");
    }
  };

  connectedCallback() {
    super.connectedCallback();
    document.addEventListener("scroll", this.onScroll);
    const navButton = document.getElementById("nav-button");
    const navList = document.getElementById("nav-list");
    const navClose = document.getElementById("nav-close");
    const modalBackground = document.getElementById("modal-background");
    navButton.addEventListener("click", (ev) => onShowNavHandler(ev, navList));
    navClose.addEventListener("click", (ev) => onCloseNavHandler(ev, navList));
    modalBackground.addEventListener("click", (ev) => {
      onCloseNavHandler(ev, navList);
    });
  }
}

function onShowNavHandler(event, navList) {
  event.stopPropagation();
  event.preventDefault();
  if (navList.classList.contains("show")) {
    closeNav(navList);
  } else {
    openNav(navList);
  }
}

function onCloseNavHandler(event, navList) {
  event.stopPropagation();
  event.preventDefault();
  closeNav(navList);
}

function closeNav(navList) {
  navList.classList.remove("show");
  document.body.classList.remove("modal");
}

function openNav(navList) {
  navList.classList.add("show");
  document.body.classList.add("modal");
}

customElements.define("nav-component", NavComponent);
