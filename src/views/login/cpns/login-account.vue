<template>
    <div class="login-account">
     <el-form :model="account" :rules="rules" label-width="60px" ref="formRef" status-icon>
       <el-form-item label="账号" prop="name">
         <el-input v-model="account.name"/>
       </el-form-item>
       <el-form-item label="密码" prop="password">
         <el-input v-model="account.password"/>
       </el-form-item>
     </el-form>
    </div>
</template>

<script lang="ts">
  import {defineComponent, reactive, ref} from 'vue'
  import {rules} from '../config/account-config'
  import {ElForm} from "element-plus";
    export default defineComponent({
        name: "login-account",
      setup() {
          const account = reactive({
            name: '',
            password: ''
          })
        const formRef = ref<InstanceType<typeof ElForm>>()
        const loginAction = () => {
            formRef.value?.validate((valid) => {
              if(valid) {
                console.log("执行登录逻辑")
              }
            })
        }
          return {
            account,
            rules,
            formRef,
            loginAction
          }
      }
    })
</script>

<style scoped>

</style>
