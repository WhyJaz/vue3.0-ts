<template>
  <div id="nav">导航栏</div>
  <div class="main">
    <LeftMenu></LeftMenu>
    <div class="container">
      <router-view></router-view>
    </div>
  </div>
</template>

<script lang="ts">
import { defineComponent } from 'vue'
import LeftMenu from './components/LeftMenu.vue'

export default defineComponent({
  name: 'Home',
  components: {
    LeftMenu
  },
  methods: {
  }
})
</script>


<style lang="less" scoped>
#nav {
  padding: 20px;
  background-color: #fff;
  a {
    font-weight: bold;
    color: #2c3e50;

    &.router-link-exact-active {
      color: #42b983;
    }
  }
}
.main {
  display: flex;
  height: 100%;
  .container {
    flex: 8;
    background-color: #f5f6f7;
    // margin: 10px;
  }
}
</style>