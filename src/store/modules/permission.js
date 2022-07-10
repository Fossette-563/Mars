import UserApi from '@/api/user'
export default {
  namespaced: true,
  state: {
    menu: []
  },
  mutations: {
    getmenus(state, menu) {
      state.menu = menu
    }
  },
  actions: {
    async setmenu({ commit }) {
      try {
        const { actionList } = await UserApi.menu()
        commit('getmenus', actionList)
        return actionList
      } catch (error) {
        console.log(error)
      }
    }
  }
}
