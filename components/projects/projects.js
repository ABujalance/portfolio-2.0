import htmlTemplate from "./projects.html?raw";
import { HTMLElementWithTemplate } from "../../utils/html-element-with-template";
import { projects } from "../../data/projects-data";

export class ProjectsComponent extends HTMLElementWithTemplate {
  constructor() {
    super();

    const template = document.createElement("template");
    template.innerHTML = htmlTemplate;
    this.appendChild(template.content.cloneNode(true));
  }

  buildProjectsList() {
    const projectsList = this.querySelector("#projects-list");
    projects.forEach((project) => {
      const projectComponent = document.createElement("project-component");
      projectComponent.setAttribute("title", project.title);
      projectComponent.setAttribute("description", project.description);
      projectComponent.setAttribute("link", project.link);
      projectComponent.setAttribute("image", project.image);
      projectComponent.setAttribute("tags", project.tags);
      const projectListElement = document.createElement("li");
      projectListElement.appendChild(projectComponent);
      projectsList.appendChild(projectListElement);
      debugger;
    });
  }

  connectedCallback() {
    this.buildProjectsList();
    super.connectedCallback();
  }
}

customElements.define("projects-component", ProjectsComponent);
