import Vue from 'vue'
import VueRouter from 'vue-router'
import { constantRouterMap } from '@/configs/router.config'
import NProgress from 'nprogress'
import appConfig from '@/app.config'
import store from '@/store'

/**
 * 重写路由的push方法
 * 解决，相同路由跳转时，报错
 * 添加，相同路由跳转时，触发watch (针对el-menu，仅限string方式传参，形如"view?id=5")
 */
const originalPush = VueRouter.prototype.push
VueRouter.prototype.push = function push(location, onResolve, onReject) {
  if (onResolve || onReject) return originalPush.call(this, location, onResolve, onReject)
  return originalPush.call(this, location).catch(err => err)
}

Vue.use(VueRouter)

const routes = constantRouterMap

const router = new VueRouter({
  base: process.env.BASE_URL,
  mode: 'history',
  routes
})

export { router, routes }

router.beforeEach((to, from, next) => {
  NProgress.start() // 开始进度条
  document.title = to.name === null ? appConfig.title : to.name + ' - ' + appConfig.title
  if (to.name === 'GithubLogin') {
    if (to.query.code !== undefined) {
      store.dispatch('user/githubLogin', to.query.code).then(() => {
        next({ path: '/' })
      }).catch(() => {
        next({ path: '/peng44/login' })
      })
    }
  }
  if (to.name === 'GiteeLogin') {
    console.log(to.query.code)
    if (to.query.code !== undefined) {
      store.dispatch('user/giteeLogin', to.query.code).then(() => {
        next({ path: '/' })
      }).catch(() => {
        console.log('error')
      })
    }
  }
  if (store.getters.category.length === 0) {
    store.dispatch('global/getAllCategory').then(res => null)
  }
  if (store.getters.token && store.getters.addRouters.length === 0) {
    store.dispatch('settings/GenerateRoutes').then(() => {
      // 动态添加可访问路由表
      router.addRoutes(store.getters.addRouters)
      const redirect = decodeURIComponent(from.query.redirect || to.path)
      if (to.path === redirect) {
        // hack方法 确保addRoutes已完成 ,将replace:true设置为使导航不会留下历史记录
        next({ ...to, replace: true })
      } else {
        // 跳转到目的路由
        next({ path: redirect })
      }
    })
  }
  next()
  NProgress.done() // 如果当前页面是登录的，则不会在每个钩子之后触发，因此请手动处理它
})

router.afterEach(() => {
  NProgress.done() // 完成进度条
})
