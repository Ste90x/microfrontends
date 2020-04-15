<template>
  <div id="cart">
    <header class="cart-header">Cart</header>
    <main class="cart-prod-container">
      <div v-for="tuple in productTuples" :key="tuple.product.id">
        <app-product :product="tuple.product"></app-product>
        <p class="prod-amount">x {{ tuple.amount }}</p>
      </div>
    </main>
    <!-- <footer>
      <button class="buy-btn">
        Buy for <span class="price">{{ calculateSum() }}</span> €
      </button>
    </footer> -->
  </div>
</template>

<script>
import Product from "./Product";
export default {
  components: { appProduct: Product },
  props: ["productTuples"],
  methods: {
    calculateSum() {}
  }
};
</script>
<style lang="scss">
#cart {
  margin: 0;
  padding: 0;
  height: 100vh;
  border-left: 1px solid teal;

  .cart-header {
    width: 100vw;
    background-color: teal;

    text-align: center;
    font-weight: bold;
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

  // .buy-btn {
  //   grid-area: footer;
  //   margin: auto 5% auto 5%;
  //   width: 90%;
  //   border-radius: 10px;
  //   box-shadow: 1px 1px 2px gray;
  //   border: none;
  //   background-color: teal;
  //   color: white;
  //   font-size: 2rem;
  // }
}
</style>
