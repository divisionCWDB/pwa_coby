class MiFooter
  extends HTMLElement {
  connectedCallback() {
    this.innerHTML = /* html */
      `&copy; 2021
      Miguel Alberto Martinez Padilla IC-52M`;
  }
}
customElements.define(
  "mi-footer", MiFooter);
