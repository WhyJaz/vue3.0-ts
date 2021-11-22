<template>
  <div class="left-tree">
    <div class="view-select">
      <span>视图</span>
      <el-select v-model="value" placeholder="Select">
        <el-option
          v-for="item in options"
          :key="item.value"
          :label="item.label"
          :value="item.value"
        ></el-option>
      </el-select>
    </div>
  </div>
</template>

<script lang="ts">
import { defineComponent, ref } from 'vue'

export default defineComponent({
  name: '',
  setup() {
    return {
      size: 'small',
      options: ref([
        {
          value: 'Option1',
          label: 'Option1',
        },
        {
          value: 'Option2',
          label: 'Option2',
        },
        {
          value: 'Option3',
          label: 'Option3',
        },
        {
          value: 'Option4',
          label: 'Option4',
        },
        {
          value: 'Option5',
          label: 'Option5',
        },
      ]),
      value: ref(''),
    }
  },
  data() {
    return {
    }
  },
  methods: {
  },
  mounted() {
  }
})
</script>

<style lang="less" scoped>
.left-tree {
  box-sizing: border-box;
  width: 250px;
  border-right: 1px solid #ebeef5;
  height: 100%;
  padding: 12px;
  .view-select {
    display: flex;
    justify-content: space-between;
    align-items: center;
    padding-bottom: 12px;
    border-bottom: 1px solid #ebeef5;
    .el-select {
      width: 180px;
    }
  }
}
</style>