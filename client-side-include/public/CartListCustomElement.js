class CartList extends HTMLElement {
  connectedCallback() {
    this.innerHTML =
      '<iframe id="cart-list" class="cart-list" src="http://localhost:8080">';
  }

  disconnectedCallback() {}
}
window.customElements.define("cart-list", CartList);
