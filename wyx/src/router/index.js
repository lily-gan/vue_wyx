import Vue from 'vue'
import VueRouter from 'vue-router'
import HomePage from '../pages/HomePage/HomePage.vue'
import Classify from '../pages/Classify/Classify.vue'
import Indentify from '../pages/Indentify/Indentify.vue'
import ShopCart from '../pages/ShopCart/ShopCart.vue'
import Profile from '../pages/Profile/Profile.vue'

Vue.use(VueRouter);
export default new VueRouter({
  mode: "history",
  routes: [
    {
      path: '/homepage',
      component: HomePage,
    },
    {
      path:'/classify',
      component:Classify
    },
    {
      path:'/indentify',
      component:Indentify
    },
    {
      path:'/shopcart',
      component:ShopCart
    },
    {
      path:'/profile',
      component:Profile
    },
    {
      path:'/',
      redirect:'/homepage',
    }
  ]
})
