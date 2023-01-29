<!--El NavBar será visible en todas las vistas siempre fijo (AppView))-->
<template>
    <nav class="navbar">
        <img alt="logo" src="../assets/logo.webp" width = "200" height = "80">
        <h4> {{ title }}</h4>
    </nav>
</template>

<script lang="ts">
import { defineComponent } from 'vue';

//Creamos props para que la variable title sea dinámica, recibirá el valor del padre
export default defineComponent({
    name: "NavBar",
    props:{
        title: {
            type: String,
            required: true,
        }}
    }
)
</script>

<style scoped>
    .navbar {
        display: flex;
        justify-content: space-between;
        align-items: center;
        width: 100%;
        height: 50px;
        background-color: #d61887;
        color: whitesmoke;
    }

    h4{
        padding: 15px
    }
</style>