/**
 * 删除数据里面的空children
 * @param {*} menu
 * @returns
 */
export const removeChindren = (menu) => {
  for (let i = 0; i < menu.length; i++) {
    if (menu[i].children && menu[i].children.length <= 0) {
      delete menu[i].children
    }
    if (menu[i].children && menu[i].children.length > 0) {
      removeChindren(menu[i].children)
    }
  }
  return menu
}
