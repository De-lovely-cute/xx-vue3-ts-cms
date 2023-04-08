<template>
    <div class="login-panel">
      <h1 class="title">后台管理系统</h1>
      <el-tabs type="border-card" stretch>
        <el-tab-pane>
          <template #label>
            <span><UserFilled class="font-icon"/>账号登录</span>
          </template>
          <LoginAccount/>
        </el-tab-pane>
        <el-tab-pane>
          <template #label>
            <span><Iphone class="font-icon"/>手机登录</span>
          </template>
          <LoginPhone/>
        </el-tab-pane>
      </el-tabs>
      <div class="account-control">
        <el-checkbox v-model="isKeepPassword">记住密码</el-checkbox>
        <el-link type="primary">忘记密码</el-link>
      </div>
      <el-button type="primary" class="login-btn" @click="handleLoginClick">立即登录</el-button>
    </div>
</template>

<script lang="ts">
  import { defineComponent, ref } from 'vue'
  import LoginAccount from './login-account.vue'
  import LoginPhone from './login-phone.vue'
  export default defineComponent ({
    name: "login-panel",
    setup(){
      const isKeepPassword = ref(true)
      const accountRef = ref<InstanceType<typeof LoginAccount>>()
      const handleLoginClick = () => {
        accountRef.value?.loginAction()
      }
      return {
        isKeepPassword,
        accountRef,
        handleLoginClick
      }
    },
    components: {
      LoginAccount,
      LoginPhone
    }
  })
</script>

<style scoped lang="less">
.login-panel {
  width: 320px;
  margin-bottom: 150px;
  .title {
    text-align: center;
  }
  .account-control{
    margin-top: 10px;
    display: flex;
    justify-content: space-between;
  }
  .login-btn{
    width: 100%;
    margin-top: 10px;
  }
}
</style>
