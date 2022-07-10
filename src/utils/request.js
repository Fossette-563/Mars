import axios from 'axios'
import store from '@/store'
import { ElMessage } from 'element-plus'
const instance = axios.create({
  baseURL: process.env.VUE_APP_API,
  timeout: 3000
})

// 添加请求拦截器
instance.interceptors.request.use(
  function (config) {
    // 将token发送给后台
    const { token } = store.getters.userInfo
    console.log(token, 'pp')
    if (token) {
      config.headers.Authorization = `Bearer ${token}`
    }
    return config
  },
  function (error) {
    // 对请求错误做些什么
    return Promise.reject(error)
  }
)

// 添加响应拦截器
instance.interceptors.response.use(
  function (response) {
    // 拦截数据
    const { code, data, msg } = response.data
    if (code === 200) {
      return data
    }
    showError(msg)
    return Promise.reject(new Error(msg))
  },
  function (error) {
    // 对响应错误做点什么
    return Promise.reject(error)
  }
)

// 提示
const showError = (msg) => {
  ElMessage.error(msg)
}

// 统一传参
const request = (options) => {
  if (options.method.toLowerCase() === 'get') {
    options.params = options.data || {}
  }
  return instance(options)
}

export default request
