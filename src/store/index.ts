import { createStore } from 'vuex';
import authModule from "./login";
import productsModule from './products';

//Definimos la interfaz global de la aplicación
export interface IState { 
  greeting: string;
}

export default createStore<IState>({
  state: {
    greeting: 'Welcome!'
  },
  getters: {
  },
  mutations: {
  },
  actions: {
  },
  modules: {
    auth: authModule,
    products: productsModule
  }
})
