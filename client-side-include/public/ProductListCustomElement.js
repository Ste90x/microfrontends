class ProductList extends HTMLElement {
  connectedCallback() {
    this.innerHTML = '<iframe class="productList" src="http://localhost:3000">';
  }

  disconnectedCallback() {}
}
window.customElements.define("product-list", ProductList);
