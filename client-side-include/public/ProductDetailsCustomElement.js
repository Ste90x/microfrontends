class ProductDetails extends HTMLElement {
  connectedCallback() {
    this.innerHTML =
      '<iframe class="selected-product-details" src="http://localhost:4200">';
  }

  disconnectedCallback() {}
}
window.customElements.define("product-details", ProductDetails);
