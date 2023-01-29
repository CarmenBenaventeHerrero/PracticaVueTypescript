//Definimos los getters de productos para obtener el state de una manera reactiva

import { GetterTree } from 'vuex';
import { IProductsState } from './state';
import { IState } from '../index';

const getters: GetterTree<IProductsState, IState> = {
    getProducts(state) {
        return state.products;
    },
    getIsLoading(state){
        return state.isLoading;
    },
    getProduct(state){
        return state.selectedProduct;
    },
};

export default getters;