import Vue from 'vue'
import VueRouter from 'vue-router'

// 设置路由懒加载
const Cart = () => import('../views/cart/Cart')
const Category = () => import('../views/category/Category')
const Home = () => import('../views/home/Home')
const Profile = () => import('../views/profile/Profile')

// 1.安装插件
Vue.use(VueRouter)

// 2.创建VueRouter实例
const routes = [
    // 设置默认跳转的路由
    {
        path: '',
        redirect: Home,
    },
    {
        path: 'cart',
        component: Cart,
    },
    {
        path: 'category',
        component: Category,
    },
    {
        path: 'home',
        component: Home,
    },
    {
        path: 'profile',
        component: Profile,
    },
]

const router = new VueRouter({
    routes,
    mode: 'history'
})

// 3.导出VueRouter
export default router