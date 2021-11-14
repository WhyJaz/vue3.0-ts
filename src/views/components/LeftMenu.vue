<template>
  <el-menu
    class="left-menu-wrapper"
    :default-active="activeIndex"
    :collapse="isCollapse"
    router
  >
    <!-- <el-radio-group v-model="isCollapse" style="margin-bottom: 20px">
      <el-radio-button :label="false">展开</el-radio-button>
      <el-radio-button :label="true">收起</el-radio-button>
    </el-radio-group> -->
    <template v-for="(item, index) in menuConfig">
      <el-sub-menu v-if="item.children?.length" :index="item.pathPrefix">
        <template #title>
          <el-icon>
            <component :is="item.Icon"></component>
          </el-icon>
          <span>{{ item.title }}</span>
        </template>
        <el-menu-item-group>
          <el-menu-item v-for="(child, idx) in item.children" :index="child.path">
          {{ child.title }}
          </el-menu-item>
        </el-menu-item-group>
      </el-sub-menu>
      <el-menu-item v-else :index="item.path">
        <el-icon>
          <component :is="item.Icon"></component>
        </el-icon>
        <span>{{ item.title }}</span>
      </el-menu-item>
    </template>
  </el-menu>
</template>

<script lang="ts">
import { defineComponent, ref, reactive, watchEffect, onMounted } from 'vue'
import router from '../../router/index'

import leftMenu from '../../configs/leftMenu'

export default defineComponent({
  components: {
  },
  setup() {
    const activeIndex = ref()
    const menuConfig = ref(leftMenu)
    const isCollapse = ref(false)
    
    onMounted(() => {
      router.beforeEach((to, from) => {
        activeIndex.value = to.path
      })
    })

    return {
      activeIndex,
      menuConfig,
      isCollapse
    }
  }
})
</script>


<style lang="less">
.left-menu-wrapper {
  &:not(.el-menu--collapse) {
    width: 200px;
    min-height: 400px;
  }
}
</style>