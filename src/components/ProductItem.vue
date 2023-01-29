<!--El componente ProductItem nos dará la estructura de cada productos-->

<template>
  <div class="product-item">
    <div class="product-avatar">
      <img :src="product.images[0]" :alt="product.title" />
    </div>
    <div>
      <div>{{ product.id }} - {{ product.title }}</div>
      <div>Price: {{ product.price }}</div>
      <div>
        <!--Emitimos un evento en el botón para que conectaremos con la HomeView -->
        <button class="btn btn-sm btn-success" id="color" @click="$emit('goDetail', product)">
          Product Detail
        </button>
      </div>
    </div>
  </div>
</template>

<script lang="ts">
import { Product } from "../models/product";
import { defineComponent, PropType } from "vue";

export default defineComponent({
  props: {
    product: {
      //el padre podrá acceder a las propiedades de la interfaz Product
      type: Object as PropType<Product>,
      required: true,
    },
  },
});
</script>

<style scoped>
.product-item {
  width: 300px;
  display: flex;
  border: 1px solid black;
  margin-top: 25px;
}

.product-avatar {
  width: 100%;
  height: auto;
}
.product-avatar > img {
  width: 100%;
  height: auto;
}

#color{
  background-color: coral;
  color: white;
  border-color: coral;
}

</style>
