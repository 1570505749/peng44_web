// import { router } from './router/index.js'
// import store from './store'
// import NProgress from 'nprogress' // 进度条
// import 'nprogress/nprogress.css'
// import appConfig from './app.config'
//
// NProgress.configure({ showSpinner: false }) // NProgress配置
//
// router.beforeEach((to, from, next) => {
//   NProgress.start() // 开始进度条
//   document.title = to.name === null ? appConfig.title : to.name + ' - ' + appConfig.title
//   next()
//   NProgress.done() // 如果当前页面是登录的，则不会在每个钩子之后触发，因此请手动处理它
// })
//
// router.afterEach(() => {
//   NProgress.done() // 完成进度条
// })
