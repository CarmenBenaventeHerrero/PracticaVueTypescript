import { Product } from '@/models/product';
import { MutationTree } from 'vuex';
import { IProductsState } from './state';

const mutations: MutationTree<IProductsState> = {
    //Añade el array de productos recibidos por parámetro al state
    setProducts(state: IProductsState, products: Product[]) {
        state.products = products;
    },

    setIsLoading(state: IProductsState, value: boolean){
        state.isLoading = value;
    },
    //Añade EL producto seleccionado al state
    setSelectedProduct(state, product: Product){
        state.selectedProduct = product;
    },
}

export default mutations;