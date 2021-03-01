// 全局变量设置
import categoryApi from '@/apis/article/category'

const state = {
  category: [],
  isMobile: ''
}

const mutations = {
  SET_TYPE: (state, category) => {
    state.category = category
  },
  SET_ISMOBILE: (state, mobile) => {
    state.isMobile = mobile
  }
}

const actions = {
  getAllCategory({ commit }) {
    return new Promise((resolve, reject) => {
      categoryApi.getAllCategory().then(res => {
        commit('SET_TYPE', res.data)
      })
    })
  },
  isMobile({ commit }, mobile) {
    return new Promise((resolve, reject) => {
      commit('SET_ISMOBILE', mobile)
    })
  }

}
export default {
  namespaced: true,
  state,
  mutations,
  actions
}

