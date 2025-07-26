//第一步：引入createRouter
import {createWebHistory, createRouter } from "vue-router";
//引入呈现组件
import Home from '@/components/Home.vue'
import Timer from "@/components/Timer.vue";
import About from "@/components/About.vue";

//第二步：创建路由器
const router = createRouter({
    history: createWebHistory(),
    routes:[
        {
            path:'/',
            redirect:'/home'
        },
        {
            path:'/home',
            component:Home
        },
        {
            path:'/timer',
            component:Timer
        },
        {
            path:'/about',
            component:About
        }
    ]
})

export default router