<template>
  <div id="app">
    <img src="./assets/logo.png">
    <p>{{client}}</p>
    <router-view/>
  </div>
</template>

<script>
import Client from './plugins'
export default {
  name: 'App',
  data(){
    return{
      client:""
    }
  },
  created:function(){
    this.client=Client
  }
}
</script>

<style>
#app {
  font-family: 'Avenir', Helvetica, Arial, sans-serif;
  -webkit-font-smoothing: antialiased;
  -moz-osx-font-smoothing: grayscale;
  text-align: center;
  color: #2c3e50;
  margin-top: 60px;
}
</style>
