/**
 * 鉴权
 */
import router from './router'
import store from '@/store'

const whiteList = ['/login']
router.beforeEach(async (to, from, next) => {
  const token = store.getters.userInfo
  // 有token跳转
  if (token) {
    // 当前在login页面
    if (to.path === '/login') {
      // 跳转
      next(from.path)
    } else {
      const menu = await store.getters.menu
      if (JSON.stringify(menu) === '[]') {
        const res = await store.dispatch('permission/setmenu')
        const resmenu = await store.dispatch('menu/filtermenus', res)
        resmenu.forEach((item) => router.addRoute(item))
        return next(to.path)
      }
      next()
    }
  } else {
    if (whiteList.includes(to.path)) {
      next()
    } else {
      next('/login')
    }
  }
})
