//Composable para los productos
import { computed } from "vue";
import { useStore } from "vuex";

const useProducts = () => {
    const store = useStore(); //accedemos al store
    return {
        //GETTERS 
        products: computed(()=> store.getters['products/getProducts']),
        product: computed(()=> store.getters['products/getProduct']),
        isLoading: computed(()=> store.getters['products/getIsLoading']),
      
        //ACTIONS  
        fetchProducts: () => store.dispatch('products/fetchProducts'),
        fetchProductById: (productId: number) => store.dispatch('products/fetchProductById', productId),
        
    }
};

export default useProducts;