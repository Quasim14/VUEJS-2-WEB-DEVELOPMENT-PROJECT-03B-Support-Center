import Vue from 'vue'
import VueRouter from 'vue-router'
import Home from './components/Home.vue'
import FAQ from './components/FAQ.vue'
import Login from './components/Login.vue'
import TicketsLayout from './components/TicketsLayout.vue'
import state from './state'

Vue.use(VueRouter)

const routes = [ // Routes will be here
  { path: '/', name: 'home', component: Home },
  { path: '/faq', name: 'faq', component: FAQ },
  { path: '/login', name: 'login', component: Login, meta: { guest: true } },
  { path: '/tickets', name: 'tickets', component: TicketsLayout, meta: { private: true }},

]

const router = new VueRouter({
  routes,
  mode:'history',
})

router.beforeEach((to, from, next) => {
  // TODO
  console.log('to', to.name)
  next()
  if (to.meta.private && !state.user) {
    // TODO Redirect to login
    next({
      name: 'login',
      params:{
        wantedRoute : to.fullPath,
      }
    })
    return
  }
  if (to.meta.guest && state.user) {
    next({
      name: 'home',
      params:{
        wantedRoute : to.fullPath,
      }

    })
    return
  }
  next()
})





export default router
