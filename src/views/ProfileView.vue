<!--Vista que muestra el perfil del usuario autentificado-->
<template>
    <div>
      <NavBarLinks/>
      <div v-if="!isLoading" class="profile-view">
        <div v-if="authLogin">
          <h1>Nombre: {{ authLogin.name }}</h1>
          <h2>Email: {{ authLogin.email }}</h2>
          <img :src="authLogin.avatar" alt="" />
          <h2>Role: {{ authLogin.role }}</h2>
      </div>
          </div>
          <div v-else>Cargando...</div>
        </div>
</template>
  
<script lang="ts">
import { defineComponent } from 'vue';
  import NavBarLinks from "../components/NavBarLinks.vue";
  import useAuthLogin from '../composables/useAuthLogin';
  
  export default defineComponent({
    name: 'ProfileView',
    components: {
          NavBarLinks,
          
    },
    props: {
    id: {
      type: Number,
      required: true,
      },
      userRole: String,
  },
    setup() {
      //Accedemos a los getters y actions de authLogin, a través del composable useAuthLogin, para acceder al usuario registrado
      const {authLogin, isLoading, fetchAuthLogin } = useAuthLogin();
      fetchAuthLogin();
  
      return{
        authLogin, 
        isLoading, 
        fetchAuthLogin
      }
    },
  })
  </script>
  
  <style scoped>
  .profile-view{
      margin-top: -40px;
      margin-bottom: 50px;
      display: flex;
      justify-content: center;
  }
  </style>
  
  