import {createRouter, createWebHistory, RouteRecordRaw, NavigationGuardNext, RouteLocationNormalized} from 'vue-router'
// @ts-ignore
import Home from '../view/home/index.vue'
// @ts-ignore
import Layout from "../layout/layout.vue"
// @ts-ignore
import SiteLayout from "../layout/site/siteLayout.vue"
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

// @ts-ignore
import NotFound from "../view/error/404.vue"

// @ts-ignore
import SkillDetail from "../view/skillDetail/skillDetail.vue"

// 定义路由配置
const routes: Array<RouteRecordRaw> = [
    {
        path: '/',
        name: 'root',
        redirect: to => {
            return {path: '/layout/siteLayout/home'}
        }
    },
    {
        // 总的路由
        path: '/layout',
        name: 'layout',
        component: Layout,
        children: [
            {
                path: '',
                name: 'home',
                redirect: to => {
                    return {path: '/layout/siteLayout/home'}
                }
            },
            {
                // 网站前端路由主要页面
                path: 'siteLayout',
                name: 'layout',
                component: SiteLayout,
                children: [
                    {
                        path: '/layout/siteLayout/home',
                        component: Home
                    },
                    {
                        path: '/layout/siteLayout/user',
                        component: User
                    },
                    {
                        path: '/layout/siteLayout/about',
                        component: About
                    },
                    {
                        path: '/layout/siteLayout/portfolio',
                        component: Portfolio // 文件
                    },
                    {
                        path: '/layout/siteLayout/contact',
                        component: Contact // 联系
                    },
                    {
                        path: '/layout/siteLayout/other',
                        component: Other // 其他
                    }
                ]
            }
        ]
    },
    {path: '/skill/:id', name: 'SkillDetail', component: SkillDetail},



    {path: '/:pathMatch(.*)*', name: 'NotFound', component: NotFound},
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
            path: '/layout'
        })
    } else {
        next()
    }
})

export default router
