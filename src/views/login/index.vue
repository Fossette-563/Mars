<template>
  <div class="login-page">
    <el-card class="login-box"
      ><h2>火星情报局</h2>
      <el-form
        ref="loginFormRef"
        :model="ruleForm"
        :rules="loginRules"
        class="demo-ruleForm"
        :size="formSize"
        status-icon
      >
        <el-form-item prop="userName">
          <el-input
            v-model="ruleForm.userName"
            placeholder="请输入用户名"
            :prefix-icon="User"
          />
        </el-form-item>
        <el-form-item prop="userPwd">
          <el-input
            type="password"
            v-model="ruleForm.userPwd"
            placeholder="请输入密码"
            :prefix-icon="View"
          />
        </el-form-item>
        <el-form-item>
          <el-button type="primary" @click="getuserLogin(loginFormRef)"
            >登录</el-button
          >
        </el-form-item>
      </el-form></el-card
    >
  </div>
</template>

<script setup>
import { reactive, ref } from 'vue'
import { validatePass } from './rule'
import { User, View } from '@element-plus/icons-vue'
import UserApi from '@/api/user'
import { useRouter } from 'vue-router'
import { useStore } from 'vuex'

const store = useStore()
const router = useRouter()
const loginFormRef = ref(null)
const ruleForm = reactive({
  userName: 'admin',
  userPwd: '123456'
})

const loginRules = {
  userName: [
    {
      required: true,
      message: '用户名不能为空',
      trigger: 'blur'
    }
  ],
  userPwd: [
    {
      required: true,
      validator: validatePass,
      trigger: 'blur'
    }
  ]
}

/**
 * 登录
 */
const getuserLogin = async () => {
  if (!loginFormRef.value) return
  await loginFormRef.value.validate(async (valid) => {
    if (valid) {
      const res = await UserApi.login(ruleForm)
      store.commit('user/setToken', res)
      console.log(res, 'userInfo')
      router.push('/')
    }
  })
}
</script>

<style lang="scss" scoped>
.login-page {
  width: 100%;
  height: 100%;
  .login-box {
    width: 500px;
    height: 300px;
    text-align: center;
    position: absolute;
    margin: auto;
    left: 0;
    right: 0;
    bottom: 0;
    top: 0;
    .el-form {
      margin-top: 40px;
      .el-button {
        width: 100%;
      }
    }
  }
}
</style>
