<!--Vista que muestra un formulario para entrar en la aplicación-->
<template>
    <div class="login">
        <h1 class="title">Enter your credentials</h1>
        <form class="form" @submit.prevent="getToken">
            <div>
                <input v-model.lazy="email" type="email" placeholder="email" name="email" required>
            </div>
            <div>
                <input v-model.lazy="password" type="password" placeholder="password" name="password" required>
            </div>
                <input type="submit" class="button">
        </form>
    </div>
</template>

<script lang="ts">
import { defineComponent, ref } from 'vue';
import useAuthLogin from '../composables/useAuthLogin';

export default defineComponent ({
    setup() {
        //Haremos la llamada a la Api con el fetchToken traido del composable al que le pasaremos los valores de email y contraseña con el evento submit del formulario
        const { fetchToken } = useAuthLogin();
        //Variables ractivas que se accede mediante .value
        let email = ref("");
        let password = ref("");
        const getToken = () => {
            fetchToken({email: email.value, password: password.value});
        }
        return{
            email,
            password,
            getToken
        }
        }
    
});
</script>

<style scoped>
.title {
    margin: 1.5rem;
    text-align: center;
    color: rgb(71, 70, 70);
    font-size: 30px;
}
.form {
  display: flex;
  flex-direction: column;
  justify-content: center;
  background: rgba(241, 208, 195, 0.662);
  padding: 40px;
  width: 20%;
  min-width: 350px;
  max-width: 100%;
  margin: 3rem auto;
  
  
}
.button{
    margin-top: 2rem;
    background:  #bd267e;
    border: #851255;
    color: aliceblue;
    width: 80px;
    margin-left: 8rem;    
    
}
</style>