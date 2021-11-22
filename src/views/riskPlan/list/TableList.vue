<template>
  <div class="event-manage-wrapper">
    <LeftTree></LeftTree>
    <div class="content">
      <TableFilter></TableFilter>
      <Table :tableData="tableData" :tableOptions="tableOptions"></Table>
    </div>
  </div>
</template>

<script lang="ts">
import { defineComponent, h, resolveComponent , defineCustomElement } from 'vue'
import LeftTree from './LeftTree.vue'
import TableFilter from './TableFilter.vue'
import Table from '@components/Table.vue'
import API from 'axios'


export default defineComponent({
  name: '',
  components: {
    LeftTree,
    TableFilter,
    Table
  },
  data() {
    return {
      tableOptions: [
        {
          prop: 'date',
          label: '日期',
          align: 'center',
          header: h(resolveComponent('el-tag'), {
            'type': 'primary'
          }, '日期'),
          content: (v: any, row: Object) => {
            return h('span', {
              style: {
                color: 'red'
              }
            }, v)
          },
        },
        {
          prop: 'name',
          label: '名字',
          fixed: 'right'
        },
        {
          prop: 'address',
          label: '地址',
        },
      ],
      tableData: [
        {
          date: '2016-05-03',
          name: 'Tom',
          address: 'No. 189, Grove St, Los Angeles',
        },
        {
          date: '2016-05-02',
          name: 'Tom',
          address: 'No. 189, Grove St, Los Angeles',
        },
        {
          date: '2016-05-04',
          name: 'Tom',
          address: 'No. 189, Grove St, Los Angeles',
        },
        {
          date: '2016-05-01',
          name: 'Tom',
          address: 'No. 189, Grove St, Los Angeles',
        },
      ],
    }
  },
  methods: {
  },
  mounted() {
console.log(API, 'api');

  }
})
</script>

<style lang="less" scoped>
.event-manage-wrapper {
  display: flex;
  height: 100%;
  .content {
    padding: 12px;
    flex: 1;
  }
}
</style>