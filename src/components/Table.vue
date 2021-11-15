<template>
  <div class="table-wrapper">
      <el-table :data="tableData" border v-bind="attrs" style="width: 100%">
        <el-table-column v-for="(item, index) in tableOptions" v-bind="item">
          <template v-if="item.header" #header>
            <component :is="item.header"></component>
          </template>
          <template v-if="item.content"  #default="scope">
            <component :is="item.content(scope.row[item.prop], scope.row)"></component>
          </template>
        </el-table-column>
      </el-table>
  </div>
</template>

<script lang="ts">
import { defineComponent } from 'vue'

export default defineComponent({
  name: '',
  props: ['tableData', 'tableOptions'],
  setup(props, { attrs }) {
    return {
      attrs
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
.table-wrapper{
  margin: 20px 0;
}
</style>