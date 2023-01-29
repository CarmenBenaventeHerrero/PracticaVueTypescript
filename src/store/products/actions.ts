import fakeShopApi from "@/api/fakeShopApi";
import { Product } from "@/models/product";
import { AxiosResponse } from "axios";
import { ActionTree } from "vuex";
import { IState } from "..";
import { IProductsState } from "./state";

const actions: ActionTree<IProductsState, IState> = {
    //Llamada a la API para acceder al listado de productos. Usamos los commits (mutaciones) para guardarlos. 
    async fetchProducts({commit}){
        commit('setIsLoading', true);
        const {data} = await fakeShopApi.get<unknown, AxiosResponse<Product[]>>('/products');
        commit('setIsLoading', false);
        commit('setProducts', data);
    },

    //Llamada a la API para acceder a un producto seleccionado según id. 
    async fetchProductById({commit}, productId: number) {
        commit('setIsLoading', true);
        const {data} = await fakeShopApi.get<unknown, AxiosResponse<Product>>(`/products/${productId}`);
        commit('setIsLoading', false);
        commit('setSelectedProduct', data);
    },

}

export default actions;