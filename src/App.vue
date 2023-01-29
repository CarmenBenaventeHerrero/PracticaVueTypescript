<!-- La App global tendrá el componente NavBar y las vistas creadas  con la etiqueta router-view -->
<template>
  <div>
    <NavBar title="Shop"/>
    <router-view/>
  </div>
</template>

<script lang="ts">
import { defineComponent } from 'vue';
import NavBar from './components/NavBar.vue';

export default defineComponent({
  name: 'NavComponent',
  components: {
      NavBar,
  },
})

</script>

<style>
#app {
  font-family: Arial, Helvetica, sans-serif;
  -webkit-font-smoothing: antialiased;
  -moz-osx-font-smoothing: grayscale;
  text-align: center;
}

nav {
  padding: 30px;
}

nav a.router-link-exact-active {
  color: #851255;
}
</style>
