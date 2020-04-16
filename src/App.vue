<template>
  <div id="app">
    <router-view></router-view>
  </div>
</template>

<script>


import storage from './storage/index'
export default {
  name: 'App',
  data () {
    return{
      res:{}
    }
  },
  components: {
   
  },
  mounted () {
    //测试存储
    //storage.setItem("a",1);
    //storage.setItem("abc",{a:1},"user");
    //storage.clear('a')
    storage.clear('age','user')

    //本地集成mockjs实现数据mock
   this.axios.get('/user/login').then((res)=>{
     this.res = res;
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
