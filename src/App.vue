<template>
  <div id="app">
    <top></top>
    <router-view/>
    <down></down>
  </div>
</template>

<script>
import top from './components/top';
import down from './components/down';
export default {
  name: 'app',
  components:{
    top,
    down
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
