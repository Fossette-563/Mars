export const validatePass = (rule, value, callback) => {
  if (value.length < 6 || value.length > 20) {
    callback(new Error('密码不能小于6位或者大于20位'))
  } else {
    callback()
  }
}
