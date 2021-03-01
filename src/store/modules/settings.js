// 全局逻辑
import { Components } from '@/configs/componentConfigs'
import { constantRouterMap } from '@/configs/router.config'
import { getRoleMenu } from '../../apis/user/login'

const state = {
  routers: constantRouterMap,
  addRouters: []
}

const mutations = {
  SET_ROUTERS: (state, routers) => {
    state.addRouters = routers
    state.routers = constantRouterMap.concat(routers)
  }
}

const actions = {
  GenerateRoutes({ commit }) {
    return new Promise((resolve, reject) => {
      getRoleMenu().then(res => {
        const accessedRouters = filterAsyncRouter(res.data)
        const notFoundRouter = {
          path: '*', redirect: '/exception/404', hidden: true
        }
        constantRouterMap[0].children = constantRouterMap[0].children.concat(accessedRouters)
        accessedRouters.push(notFoundRouter)
        commit('SET_ROUTERS', accessedRouters)
        resolve()
      }).catch(error => {
        reject(error)
      })
    })
  }
}

function filterAsyncRouter(routerMap) {
  let components = {}
  for (const type in Components) {
    components = { ...Components[type], ...components }
  }
  const accessedRouters = routerMap.filter(route => {
    route.component = components[route.component]
    return true
  })
  return accessedRouters
}

export default {
  namespaced: true,
  state,
  mutations,
  actions
}

