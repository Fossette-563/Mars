import { createStore } from 'vuex'
import user from './modules/user'
import getters from './getters'
import permission from './modules/permission'
import menu from './modules/menu'
export default createStore({
  modules: {
    user,
    permission,
    menu
  },
  getters
})
