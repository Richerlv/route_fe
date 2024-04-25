<template>
    <div class="loginContainer">
      <div class="loginForm">
        <h1>Welcome Route!</h1>
        <el-form 
          :label-position="labelPosition"
          label-width="auto" 
          :model="loginData" 
          style="max-width: 500px">
            <el-form-item label="用户名">
                <el-input v-model="loginData.username" style="width: 300px" placeholder="Please input your username" />
            </el-form-item>
            <el-form-item label="密码">
                <el-input v-model="loginData.password" style="width: 300px" placeholder="Please input your password" show-password/>
            </el-form-item>
            <div class="buttonContainer">
                <el-form-item>
                    <el-button style="width: 85px">重置</el-button> 
                    <el-button type="success" style="width: 85px" @click="login">登录</el-button>
                </el-form-item>
            </div>
        </el-form>
      </div>
    </div>
  </template>
  
  <script setup>
  import { reactive } from 'vue'
  import { useRouter } from 'vue-router';

  const router = useRouter(); 
  const labelPosition = 'top'
  
  const loginData = reactive({
    username: '',
    password: ''
  })

  const login = () => {
    router.push({ path: '/mapView' });
  }
  </script>
  
  <style scoped>
  .loginContainer {
    display: flex;
    justify-content: center;
    align-items: center;
    height: 100vh;
  }

  .buttonContainer {
    margin-right: 30px;
}
  </style>
  