// 用户操作
import { login, getInfo, getGiteeToken, getGithubToken } from '../../apis/user/login'
import { getToken, setToken, removeToken } from '../../utils/auth'
const getDefaultState = () => {
  return {
    token: getToken(),
    userInfo: ''
  }
}

const state = getDefaultState()

const mutations = {
  RESET_STATE: (state) => {
    Object.assign(state, getDefaultState())
  },
  SET_TOKEN: (state, token) => {
    state.token = token
  },
  SET_USERINFO: (state, userInfo) => {
    state.userInfo = userInfo
  }
}

const actions = {
  // 用户密码登录
  login({ commit }, userInfo) {
    return new Promise((resolve, reject) => {
      login(userInfo).then(res => {
        commit('SET_TOKEN', res.msg)
        setToken(res.msg, userInfo.remember)
        resolve()
      }).catch(error => {
        reject(error)
      })
    })
  },
  // 登出
  logout({ commit, state }) {
    return new Promise((resolve) => {
      removeToken()
      resolve()
      commit('SET_TOKEN', '')
    })
  },
  // 用户Github账号登录
  githubLogin({ commit }, code) {
    return new Promise((resolve, reject) => {
      getGithubToken(code).then(res => {
        commit('SET_TOKEN', res.msg)
        setToken(res.msg, true)
        resolve()
      }).catch(error => {
        reject(error)
      })
    })
  },
  // 用户Gitee账号登录
  giteeLogin({ commit }, code) {
    return new Promise((resolve, reject) => {
      getGiteeToken(code).then(res => {
        commit('SET_TOKEN', res.msg)
        setToken(res.msg, true)
        resolve()
      }).catch(error => {
        reject(error)
      })
    })
  },
  // 获取用户信息
  getInfo({ commit }) {
    return new Promise((resolve, reject) => {
      getInfo().then(res => {
        const { data } = res
        const { user } = data
        if (user.userPositionId !== null) {
          commit('SET_ROLES', user.userPositionId)
        } else {
          reject(new Error('getInfo: 用户权限不能为空 !'))
        }
        commit('SET_USERINFO', user)
        resolve(res)
      }).catch(error => {
        reject(error)
      })
    })
  }
}

export default {
  namespaced: true,
  state,
  mutations,
  actions
}

