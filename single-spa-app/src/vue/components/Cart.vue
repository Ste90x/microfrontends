<template>
  <div id="cart">
    <header class="cart-header">
      Cart
    </header>
    <main class="cart-prod-container">
      <div v-for="tuple in productTuples" :key="tuple.product.id">
        <app-product :product="tuple.product"></app-product>
        <p class="prod-amount">x {{ tuple.amount }}</p>
      </div>
    </main>
  </div>
</template>

<script>
import Product from "./Product";
export default {
  components: { appProduct: Product },
  props: ["productTuples"],
  methods: {
    calculateSum() {},
  },
};
</script>
<style lang="scss">
#cart {
  margin: 0;
  padding: 0;
  height: 80%;
  border-left: 1px solid #1a237e;

  .cart-header {
    width: 100%;
    background-color: #1a237e;

    text-align: center;
    font-size: xx-large;
    color: white;
  }

  .cart-prod-container > div {
    display: grid;
    grid-template-areas: "blob amount";
    grid-template-columns: 3fr 1fr;

    .prod-amount {
      grid-area: amount;

      margin: 10px 5% 10px 5%;
      font-size: 2rem;
      justify-self: center;
      align-self: center;
    }
  }
}
</style>
