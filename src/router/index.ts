import {createRouter, createWebHistory, RouteRecordRaw, NavigationGuardNext, RouteLocationNormalized} from 'vue-router'
// @ts-ignore
import Home from '../view/home/index.vue'
// @ts-ignore
import Layout from "../layout/layout.vue"
// @ts-ignore
import User from "../view/user/index.vue"
// @ts-ignore
import About from "../view/about/index.vue"
// @ts-ignore
import Portfolio from "../view/portfolio/index.vue"
// @ts-ignore
import Contact from "../view/contact/index.vue"
// @ts-ignore
import Other from "../view/other/index.vue"

// 定义路由配置
const routes: Array<RouteRecordRaw> = [
    {
        path: '/',
        name: 'home',
        redirect: to => {
            return {path: '/home'}
        },
        component: Layout,
        children: [
            {
                path: 'home',
                component: Home
            }, {
                path: 'user',
                component: User
            }, {
                path: 'about',
                component: About
            }
            , {
                path: 'portfolio',
                component: Portfolio
            }
            , {
                path: 'contact',
                component: Contact
            }
            , {
                path: 'other',
                component: Other
            }
        ],
    },
]

// 创建路由器实例
const router = createRouter({
    history: createWebHistory(),
    routes
})

// 路由跳转前判断
router.beforeEach((to: RouteLocationNormalized, from: RouteLocationNormalized, next: NavigationGuardNext) => {
    if (to.meta?.title) {
        document.title = to.meta.title as string
    }
    if (to.path === '/') {
        next({
            path: '/home'
        })
    } else {
        next()
    }
})

export default router
