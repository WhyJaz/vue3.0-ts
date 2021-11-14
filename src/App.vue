<template>
  <Home></Home>
</template>

<script lang="ts">
import { defineComponent } from 'vue'
import Home from './views/Home.vue'
export default defineComponent({
  name: 'App',
  components: {
    Home
  },
  methods: {
  }
})
</script>

<style lang="less">
* {
  padding: 0;
  margin: 0;
  font-size: 14px;
}
#app {
  font-family: Avenir, Helvetica, Arial, sans-serif;
  -webkit-font-smoothing: antialiased;
  -moz-osx-font-smoothing: grayscale;
  text-align: center;
  color: #2c3e50;
  background-color: #f5f5f5;
  height: 100vh;
  display: flex;
  flex-direction: column;
}
</style>
