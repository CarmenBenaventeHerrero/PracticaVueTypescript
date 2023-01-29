<!--Vista que muestra un error 404 cuando no encuentra la ruta, dando la posibilidad de volver a los enlaces de navegación a través del comonente NavBarLinks-->

<template>
  <NavBarLinks/>
  <h1>Error 404</h1>
</template>

<script lang="ts">
import { defineComponent } from 'vue';
import NavBarLinks from "../components/NavBarLinks.vue";
  
export default defineComponent({
    name: 'NotFounView',
    components:{
      NavBarLinks
    }
});


</script>