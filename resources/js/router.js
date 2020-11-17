import Vue from 'vue'
import VueRouter from 'vue-router'

Vue.use(VueRouter)

const View = { template: '<router-view></router-view>' }

const routes = [
  {
    path: '/sandi-index',
    name: 'sandichapter',
    component: () => import('./components/user/pages/sandi.vue'),
    
  }
]

export default new VueRouter({
  mode: 'history',
  base: '/user-dashboard',
  routes
})