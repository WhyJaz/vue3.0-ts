<template>
  <div class="">
      <el-button>Default</el-button>
     <el-tooltip
        class="item"
        effect="dark"
        content="Top Center prompts info"
        placement="top"
      >
      <span class="why-ellipsis">
          <slot></slot>
      </span>
     </el-tooltip>
  </div>
</template>

<script>
export default {
  name: '',
  data() {
    return {
    }
  },
  methods: {
  },
  mounted() {
  }
}
</script>

<style lang="less" scoped>

</style>
