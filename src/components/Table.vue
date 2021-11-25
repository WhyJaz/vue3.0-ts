<template>
  <div class="table-wrapper">
      <el-table :data="tableData" border v-bind="attrs" style="width: 100%">
        <el-table-column v-for="(item: any, index) in options" v-bind="item">
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
import { defineComponent, ref, onMounted } from 'vue'
import axios from 'axios'

export default defineComponent({
  name: '',
  // props: {
  //   tableData: [Array],
  //   tableOptions: [Array],
  //   tableSerialNum: [Number],
  //   aa: [Number]
  // },
  props: ['tableData', 'tableOptions', 'tableSerialNum'],
  setup(props, { attrs }) {
    const options = ref([])
    onMounted(async () => {
      const { data } = await axios({
        method: 'get',
        url: `/api/base/layoutFunc/layoutQryByOpt/${props.tableSerialNum}`
      })
      data.columnInfos.forEach((item: any) => {
        const findItem = props.tableOptions.find((obj: any) => item.columnName === obj.prop)
        if (findItem) {
          Object.assign(item, findItem)
        }
        item.prop = item.columnName
        item.label = item.displayName
      })
      options.value = data.columnInfos
      console.log(options.value);
    })
    return {
      attrs,
      options
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