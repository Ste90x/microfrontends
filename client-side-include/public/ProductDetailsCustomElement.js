class ProductDetails extends HTMLElement {
  connectedCallback() {
    this.innerHTML =
      '<iframe id="selected-product-details" class="selected-product-details" src="http://localhost:4200">';
  }

  disconnectedCallback() {}
}
window.customElements.define("product-details", ProductDetails);
