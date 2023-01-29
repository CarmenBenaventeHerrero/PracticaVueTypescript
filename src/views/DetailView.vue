<!--Vista que contiene los componentes NavLinks y CustomCard muestra el detalle del producto-->
<template>
    <div>
        <NavBarLinks/>
        <div v-if="!isLoading" class="detailView">
            <CustomCard>
                <template v-slot:picture>
                    <img class="picture" :src="product.images[0]">
                </template>
                <template v-slot:header>
                    <h2>{{ product.id }}. {{ product.title }}</h2>
                </template>
                <template v-slot:body>
                    <p>{{ product.description }}</p>
                </template>
                <template v-slot:footer>
                    <h2>Price: {{ product.price }}$</h2>
                </template>
            </CustomCard>
        </div>
        <div v-else>Cargando...</div>
    </div>
</template>

<script lang="ts">
import { defineComponent } from 'vue';
import useProducts from '../composables/useProducts';
import NavBarLinks from "../components/NavBarLinks.vue";
import CustomCard from "../components/CustomCard.vue";

export default defineComponent({
    name: 'DetailView',
    components: {
        NavBarLinks,
        CustomCard,
    },
    props: {
        id: {
            type: Number,
            required: true
        }
    },
    setup(props) {
        //Accedemos a los getters y actions a través del composable useProducts, con los que accederemos al producto seleccionado por el usuario
        const {product, fetchProductById, isLoading} = useProducts();
        fetchProductById(props.id);
    
        return {
            product,
            isLoading,
        }
    }
})
</script>

<style scoped>
.detailView{
    margin-bottom: 50px;
    display: flex;
    justify-content: center;
    
}
.picture{
    width:100%;
    height: auto;
    display:flex;
}

</style>