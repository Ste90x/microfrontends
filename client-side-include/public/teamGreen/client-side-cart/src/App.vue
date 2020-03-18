<template>
  <div id="app">
    <app-cart :products="products"></app-cart>
  </div>
</template>

<script>
import Cart from "./components/Cart";
export default {
  name: "App",
  data: () => {
    return {
      products: []
    };
  },
  beforeCreate() {
    this.$http
      .get("http://localhost:5000/products")
      .then(res => {
        console.log((this.products = res.body));
      })
      .catch(e => console.error(e));
  },
  components: { appCart: Cart }
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
