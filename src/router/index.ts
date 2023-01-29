//Todas las rutas que tengan la propiedad beforeEnter, sino cumplen el auth-guard, no podrán navegar
import { createRouter, createWebHashHistory, RouteRecordRaw } from 'vue-router'
import HomeView from '../views/HomeView.vue';
import haveRoleGuard from './auth-guard';


const routes: Array<RouteRecordRaw> = [
  {
    path: '/',
    name: 'home',
    beforeEnter: [haveRoleGuard],
    component: HomeView,
  },

  {
    path: '/login',
    name: 'login',
    component: () => import(/* webpackChunkName: "login" */"../views/LoginView.vue")
  },
 
  {
    path: '/profile',
    name: 'profile',
    beforeEnter: [haveRoleGuard],
    component: () => import(/* webpackChunkName: "profile" */ '../views/ProfileView.vue')
  },

  {
    path: '/detail/:id',
    name: 'detail',
    beforeEnter: [haveRoleGuard],
    component: () => import(/* webpackChunkName: "detail" */ '../views/DetailView.vue'),
    props: (route) => {
      const id = Number(route.params.id)
      return isNaN(id) ?  { id: null } : { id };
    },
  },
  {
    path: "/:pathMatch(.*)",
    component: () => import(/* webpackChunkName: "notFound" */ '../views/NotFoundView.vue'),
  }
]

const router = createRouter({
  history: createWebHashHistory(),
  routes
})

export default router
