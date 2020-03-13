class ProductList extends HTMLElement {
  connectedCallback() {
    this.innerHTML =
      '<iframe scrolling="no" class="product-list" src="http://localhost:3000">';
  }

  disconnectedCallback() {}
}
window.customElements.define("product-list", ProductList);
