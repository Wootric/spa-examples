<template>
  <div id="app">
    <img alt="Vue logo" src="./assets/logo.png">
    <HelloWootric msg="Welcome to Wootric!"/>
  </div>
</template>

<script>
import HelloWootric from './components/HelloWootric.vue'

export default {
  name: 'app',
  components: {
    HelloWootric
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
