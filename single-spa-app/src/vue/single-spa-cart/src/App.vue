<template>
  <div id="app">
    <app-cart :productTuples="productTuples"></app-cart>
  </div>
</template>

<script>
import Cart from "./components/Cart";

export default {
  name: "App",
  data: () => {
    return {
      appsHookId: "#apps-hook",
      productTuples: [
        // {
        //   amount: 5,
        //   product: {
        //     id: "0",
        //     name: "Pizza",
        //     price: "4,99",
        //     description: "SUCH GOOD, MUCH WOW!",
        //     image: "https://images.alphacoders.com/959/thumb-1920-959369.jpg",
        //   },
        // },
      ]
    };
  },
  beforeMount() {
    // console.log("TEST 1");
    if (document.querySelector(this.appsHookId) !== null) {
      // console.log("TEST 2");
      document
        .querySelector(this.appsHookId)
        .addEventListener("selectedAmountOfProduct", event => {
          console.log(event.detail);
          this.addToProductTuples(
            event.detail,
            event.detail.product,
            event.detail.amount
          );
        });
    }
  },
  components: { appCart: Cart },
  methods: {
    addToProductTuples(newProductTuple, body, value) {
      let exists = false;
      this.productTuples.forEach(productTuple => {
        if (productTuple.product.id === newProductTuple.product.id) {
          productTuple.amount += parseInt(newProductTuple.amount);
          exists = true;
        }
      });

      if (exists === false) {
        this.productTuples.push({
          product: body,
          amount: parseInt(value)
        });
      }
    }
  }
};
</script>

<style lang="scss">
body::-webkit-scrollbar {
  display: none;

  width: 2px;
  height: 2px;
}
body::-webkit-scrollbar-track {
  background-color: teal;
}
body::-webkit-scrollbar-thumb {
  background-color: white;
}
#app {
  font-family: -apple-system, BlinkMacSystemFont, "Segoe UI", Roboto, Oxygen,
    Ubuntu, Cantarell, "Open Sans", "Helvetica Neue", sans-serif;
}
</style>
