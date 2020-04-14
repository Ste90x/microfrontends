<template>
  <div class="product-blob">
    <img :src="product.image" :alt="product.name" class="prod-img" />
    <div class="sub-grid">
      <h2 class="prod-name">{{ product.name }}</h2>
      <span>
        <p class="prod-price">{{ product.price }} €</p>
      </span>
    </div>
  </div>
</template>

<script>
export default {
  props: ["product"],
};
</script>

<style lang="scss">
.product-blob {
  grid-area: blob;

  margin: 10px 5% 10px 5%;
  padding: 5px;
  max-height: 10vh;

  display: grid;
  grid-template-columns: 1fr 1fr;
  gap: 5px;

  background-color: whitesmoke;
  box-shadow: 1px 1px 2px gray;
  border-radius: 10px;

  img {
    border-radius: 10px;
    border: 1px solid black;
    max-height: 8vh;
  }

  .sub-grid {
    span {
      display: inline-flex;
    }
  }

  .product-blob:hover {
    transition: transform 0.2s;
    transform: scale(1.1);
  }
}
</style>
