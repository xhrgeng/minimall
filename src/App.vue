<template>
  <div id="app">
    <img alt="Vue logo" src="./assets/logo.png">
    <HelloWorld msg="Welcome to Your Vue.js App"/>
  </div>
</template>

<script>
import HelloWorld from './components/HelloWorld.vue'
import axios from 'axios'
import jsonp from 'jsonp'

export default {
  name: 'App',
  data () {
    return {
      data:""
    }
  },
  components: {
    HelloWorld
  },
  mounted () {
    //let url="网址"
    //axios.get(url).then(()=>{

    //})
    jsonp(url,(err,res)=>{
      let result = res;
      this.data=result

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
