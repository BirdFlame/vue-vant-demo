import Vue from 'vue'
import VueRouter from 'vue-router'
// import Pop from "../views/home/children/Pop";
// import New from "../views/home/children/New";
// import Sell from "../views/home/children/Sell";
const Home = () => import('../views/home/Home')
const Category = () => import('../views/category/Category')
const Cart = () => import('../views/cart/Cart')
const Profile = () => import('../views/profile/Profile')
const Pop = () => import('../views/home/children/Pop')
const New = () => import('../views/home/children/New')
const Sell = () => import('../views/home/children/Sell')
Vue.use(VueRouter)
const routes = [
  {
    path: '',
    redirect: '/home/pop'
  },
  {
    name: 'home',
    path: '/home',
    component: Home,
    children: [
      {
        name: 'pop',
        path: 'pop',
        component: Pop,
      },
      {
        name: 'new',
        path: 'new',
        component: New,
      },
      {
        name: 'sell',
        path: 'sell',
        component: Sell,
      },
    ]
  },
  {
    path: '/category',
    component: Category
  },
  {
    path: '/cart',
    component: Cart
  },
  {
    path: '/profile',
    component: Profile
  }
]

const router = new VueRouter({
  mode: 'history',
  base: process.env.BASE_URL,
  routes
})

export default router
