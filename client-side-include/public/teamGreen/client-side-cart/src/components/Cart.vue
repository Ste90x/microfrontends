<template>
  <div id="cart">
    <header class="cart-header">Cart</header>
    <main class="cart-prod-container">
      <div class="prod-card">
        <app-product
          v-for="product in products"
          :product="product"
          :key="product.id"
        ></app-product>
      </div>
    </main>
    <footer>
      <button class="buy-btn">
        Buy for <span class="price">{{ calculateSum() }}</span> €
      </button>
    </footer>
  </div>
</template>

<script>
import Product from "./Product";
export default {
  components: { appProduct: Product },
  props: ["products"],
  methods: {
    calculateSum() {}
  }
};
</script>
<style lang="scss">
#cart {
  display: grid;
  grid-template-areas:
    "header"
    "main"
    "footer";
  grid-template-rows: auto 1fr auto;

  .cart-header {
    grid-area: header;
    width: 100%;
    background-color: teal;
    text-align: center;
    font-weight: bold;
    font-size: xx-large;
    color: white;
  }

  .cart-prod-container {
    grid-area: main;
  }

  .buy-btn {
    grid-area: footer;
    margin: auto 5% auto 5%;
    width: 90%;
    border-radius: 10px;
    box-shadow: 1px 1px 2px gray;
    border: none;
    background-color: teal;
    color: white;
    font-size: 2rem;
  }
}
</style>
