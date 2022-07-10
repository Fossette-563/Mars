import request from '@/utils/request'

/**
 * 登录接口
 * @param {Object} data
 * @returns
 */
const login = (data) => {
  return request({ url: '/users/login', method: 'POST', data })
}

const menu = () => {
  return request({ url: '/users/getPermissionList', method: 'GET' })
}

export default {
  login,
  menu
}
