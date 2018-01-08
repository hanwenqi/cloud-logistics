import Vue from 'vue'
import Router from 'vue-router'
import Common from '@/views/Common'
import Home from '@/views/Home'
import Lizi from '@/views/Lizi'

Vue.use(Router)

export default new Router({
  routes: [
    {
      path:'/Lizi',
      name:'Lizi',
      component: Lizi
    },
    {
      path: '/',
      name: 'Common',
      component: Common,
      children: [
        {
        path: "Home",
        alias: "",
        name: "Home",
        component: Home
        },
        
       ]
    }
  ]
})
