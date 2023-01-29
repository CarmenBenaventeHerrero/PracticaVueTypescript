<!--El componente NavBarLink definirá las rutas de navegación del listado de productos, perfil y logout, visible en todas las vistas salvo en la del login-->

<template>
    <nav>
      <ul>
        <li>
          <router-link to="/" @click="allProducts">Products</router-link>
        </li>
        <li>
          <router-link :to="{name: 'profile'}">Profile</router-link>
          </li>
        <li>
          <router-link to="detail" @click="logout">Logout</router-link>
        </li>
      </ul>
    </nav>
  </template>

<script lang="ts">
import { defineComponent,ref } from "vue";
import useAuthLogin from "@/composables/useAuthLogin";

export default defineComponent({
  setup(props, { emit }) {
    //Evento de tipo "click" allProducts sobre la ruta 'Products'. Emitimos el evento showAll del componente padre (vista HomeView) para mostrar todos los productos
    const allProducts = () =>{
      emit("showProducts")
    }

    //Desestructuramos el composable useAuthLogin, quedándonos con el método deleteToken que ejecutaremos cuando hagamos click sobre el enlace del logout
    const { deleteToken } = useAuthLogin();
    const logout = () => {
        deleteToken();
    }
    return {
      logout,
      allProducts,
    };
  },
});
</script>

<style scoped>
nav {
  min-height: 50px;
  background-color: white;
}

ul {
  display: flex;
  justify-content: center;
  list-style: none;
}

li {
  padding: 1rem;
  font-weight: bold;
}
a {
  color: #851255;;
  text-decoration: none;
}
a:visited {
  color: #851255;;
}
</style>