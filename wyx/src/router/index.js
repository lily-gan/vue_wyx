import Vue from 'vue'
import VueRouter from 'vue-router'

const HomePage = () => import ('../pages/HomePage/HomePage.vue')
const Classify = () => import ('../pages/Classify/Classify.vue')
const Indentify = () => import( '../pages/Indentify/Indentify.vue')
const ShopCart = () => import ( '../pages/ShopCart/ShopCart.vue')
const Profile = () => import ( '../pages/Profile/Profile.vue')
const Fashion = () => import ( '../pages/secondRoute/Fashion/Fashion.vue')
const Recommend = () => import ( '../pages/secondRoute/Recommend/Recommend.vue')
const NotFound=()=>import('../pages/NotFound/NotFound.vue')
const login=()=>import('../pages/Login/Login.vue')
Vue.use(VueRouter);
export default new VueRouter({
  mode: "history",
  linkActiveClass: "active",
  routes: [
    {
      path: '/homepage',
      component: HomePage,
    },
    {
      path: '/classify',
      component: Classify
    },
    {
      path: '/indentify',
      component: Indentify,
      children: [
        {
          path: '/indentify/tab/0',
          component: Recommend,
          /* props:(route)=>({id:route.params.id})*/
        },
        {
          path: '/indentify/tab/1',
          component: Fashion,
        },
        {
          path: '',
          redirect: '/indentify/tab/0'
        },
      ]
    },
    {
      path: '/shopcart',
      component: ShopCart
    },
    {
      path: '/profile',
      component: Profile
    },
    {
      path:'/login',
      component:login
    },
    {
      path: '/',
      redirect: '/homepage',
    },
    {path:"/*",component:NotFound}
  ]
})
