import { publicRoutes, privateRoutes } from '@/router'
export default {
  namespaced: true,
  state: {
    menu: publicRoutes
  },
  mutations: {
    setmenus(state, array) {
      state.menu = [...publicRoutes, ...array]
    }
  },
  actions: {
    filtermenus({ commit }, menu) {
      const array = []
      menu.forEach((i) => {
        array.push(...privateRoutes.filter((item) => i === item.name))
      })
      array.push({
        path: '/:catchAll(.*)',
        redirect: '/404'
      })
      commit('setmenus', array)
      return array
    }
  }
}
