import { setItem, getItem, removeItem } from '@/utils/storage'

export default {
  namespaced: true,
  state: () => ({
    userInfo: getItem('userInfo') || '',
  }),
  mutations: {
    setToken(state, userInfo) {
      state.userInfo = userInfo
      setItem('userInfo', userInfo)
    },
  },
  actions: {
    getlayout({ commit }) {
      commit('setToken', '')
      removeItem('setToken', '')
    }
  }
}
