import Vue from 'vue'
import Router from 'vue-router'
// import Hello from '@/components/Hello'
import Register from '@/components/Register'
import Home from '@/components/Home'

Vue.use(Router)

export default new Router({
  routes: [{
    path: '/',
    name: 'Hello',
    component: Home
  }, {
    path: '/register',
    name: 'Register',
    component: Register
  }]
})
