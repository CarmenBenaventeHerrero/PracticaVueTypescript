import { Module } from "vuex";
import state, { IProductsState } from "./state";
import mutations from "./mutations";
import getters from "./getters";
import actions from "./actions";
import { IState } from "..";

//Definimos en contenido del modulo (store) products
const productsModule: Module<IProductsState, IState> = {
    namespaced: true,
    state,
    mutations,
    getters,
    actions,
}

export default productsModule;