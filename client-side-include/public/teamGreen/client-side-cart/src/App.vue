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
      productTuples: []
    };
  },
  beforeCreate() {
    const eventMethod = window.addEventListener
      ? "addEventListener"
      : "attachEvent";
    const eventer = window[eventMethod];
    const messageEvent =
      eventMethod === "attachEvent" ? "onmessage" : "message";

    eventer(
      messageEvent,
      e => {
        if (
          e.data[0].message === "selectedProductId" &&
          e.data[1].message === "selectedAmountOfProduct"
        ) {
          this.$http
            .get("http://localhost:5000/products/" + e.data[0].value)
            .then(response => {
              // this.productTuples.push({
              //   product: response.body,
              //   amount: e.data[1].value
              // });
              //TEST
              this.addToProductTuples(
                {
                  product: response.body,
                  amount: e.data[1].value
                },
                response.body,
                e.data[1].value
              );
            })
            .catch(e => console.error(e));
        }
      },
      false
    );
  },
  components: { appCart: Cart },
  methods: {
    addToProductTuples(newProductTuple, body, value) {
      //TODO scarluccio: check if product is already in cart

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
