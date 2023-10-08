import Vue from 'vue'
import VueRouter from 'vue-router'
import Home from '@/pages/Home'
import Login from '@/pages/Login'
import Register from '@/pages/Register'
Vue.use(VueRouter);
let routes = [
    {
        path:'/',
        redirect:'/home',
    },
    {
        path:'/home',
        name:'home',
        component:Home
    },
    {
        path:'/login',
        name:'login',
        component:Login
    },
    {
        path:'/register',
        name:'register',
        component:Register
    },
]
export default new VueRouter({
    routes,
    mode:'history'
})