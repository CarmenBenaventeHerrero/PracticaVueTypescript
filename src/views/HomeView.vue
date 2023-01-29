<!--Vista que contiene los componentes NavLinks y ProductItem muestra el listado de productos-->

<template>
  <div>
    <NavBarLinks @showProducts = "allProducts"></NavBarLinks>
    <div>
      <div v-if="isLoading"> Cargando... </div>
      <div class="product-list" v-else>
        <ProductItem v-for="product in products" :key="product.id" :product="product" @goDetail="goDetail"/>
      </div>
    </div>
  </div>

</template>

<script lang="ts">
import { defineComponent } from 'vue';
import ProductItem from '../components/ProductItem.vue';
import useProducts from '../composables/useProducts';
import { Product } from '../models/product';
import NavBarLinks from "../components/NavBarLinks.vue";
import { useRouter } from 'vue-router';

export default defineComponent({
  name: 'HomeView',
  components: {
    ProductItem,
    NavBarLinks,
    },

  setup(){
    //Accedemos al composable useProducts para no repetir código
    const {products, isLoading, fetchProducts } = useProducts();
    const router = useRouter();
    //Cargamos la lista completa de productos de la API 
    const allProducts = () =>{
       fetchProducts()};
  
    return {
      products,
      isLoading,
      allProducts,
      //Cuando hace click en el botón nos redirige a la vista de DetailView
      goDetail: (product: Product)=> router.push({name: 'detail', params: {id: product.id}})
      
    }
  }
});
</script>

<style scoped>
.product-list{
  display: flex;
  flex-flow: row wrap;
  justify-content: center;
  width: 100%;
  gap: 1rem 1rem;
}
</style>

