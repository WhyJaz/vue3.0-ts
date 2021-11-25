<template>
    <Table :tableData="tableData" :tableOptions="tableOptions" :tableSerialNum="tableSerialNum"></Table>
</template>

<script lang="ts">
import { defineComponent, h, resolveComponent, inject, watch, ref, getCurrentInstance } from 'vue'
import Table from '@components/Table.vue'
import axios from 'axios'
import { URLS } from '../constants'


export default defineComponent({
  inheritAttrs: false,
  name: '',
  props: ['attr'],
  components: {
    Table,
  },
  setup() {
    const tableData = ref([])
    const detailInfo: any = inject('detailInfo')
   
    const fetchTableData = async (idList: any) => {
      const { data } = await axios({
        method: 'post',
        url: URLS.rightTableList,
        data: {
        riskRuleIdList: idList
      }
      })
      tableData.value = data.list
    }

    watch(detailInfo, async (newVal, oldVal) => {
      fetchTableData(newVal.riskControlClassIdList)
    })
    return {
      tableData
    }
  },
  data() {
    return {
      tableSerialNum: 40000801,
      tableOptions: [
        {
          prop: 'riskCalcTypeId',
          label: '序号',
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
      ],
    }
  },
  watch: {
  },
  methods: {
    
  },
  mounted () {
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