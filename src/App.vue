<template>
  <div id="app">
    <!-- <img alt="Vue logo" src="./assets/logo.png"> -->
    <HelloWorld msg="Welcome to Your Vue.js App"/>
    <!-- <router-link to="/mapView">Go to Map</router-link> -->
    <router-view></router-view>
  </div>
</template>

<script>
import axios from 'axios'

export default {
  name: 'App',
  created() {
    this.$router.push({ path: '/mapView' });
  },
  data() {
    return {
      data: null
    }
  },
  mounted() {
    // 在组件加载完成后，调用后端接口获取数据
    axios.get('http://localhost:8888/hello')
      .then(response => {
        // 如果成功获取到数据，则更新组件中的 data 属性
        this.data = response.data
        alert(this.data)
      })
      .catch(error => {
        // 处理请求失败的情况
        console.error('Error fetching data:', error)
      })
  }
}
</script>

<style>
#app {
  font-family: Avenir, Helvetica, Arial, sans-serif;
  -webkit-font-smoothing: antialiased;
  -moz-osx-font-smoothing: grayscale;
  text-align: center;
  color: #2c3e50;
  margin-top: 60px;
}
</style>
