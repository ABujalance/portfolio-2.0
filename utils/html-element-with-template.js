export class HTMLElementWithTemplate extends HTMLElement {
  connectedCallback() {
    const attributesObject = Object.assign(
      {},
      ...Array.from(this.attributes, ({ name, value }) => ({ [name]: value }))
    );

    this.innerHTML = interpolate(
      this.innerHTML.toString().trim(),
      attributesObject
    );
  }
}

function interpolate(template, params) {
  const replaceTags = {
    "&": "&amp;",
    "<": "&lt;",
    ">": "&gt;",
    "(": "%28",
    ")": "%29",
  };
  const safeInnerHTML = (text) =>
    text.toString().replace(/[&<>\(\)]/g, (tag) => replaceTags[tag] || tag);
  const keys = Object.keys(params);
  const keyVals = Object.values(params).map(safeInnerHTML);
  return new Function(...keys, `return \`${template}\``)(...keyVals);
}
