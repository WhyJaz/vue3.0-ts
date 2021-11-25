<template>
  <div class="left-tree">
    <div class="view-select">
      <span>视图</span>
      <!-- <el-select v-model="value" placeholder="Select">
        <el-option
          v-for="item in options"
          :key="item.value"
          :label="item.label"
          :value="item.value"
        ></el-option>
      </el-select> -->
    </div>
    <el-tree :data="treeData" highlight-current	 :props="props" @node-click="handleNodeClick" />
  </div>
</template>

<script lang="ts">
import { defineComponent, ref, onMounted, inject } from 'vue'
import axios from 'axios'
import { URLS } from '../constants'

export default defineComponent({
  name: '',
  setup() {
    const treeData = ref([])
    const selectedNodeKey: any = inject('selectedNodeKey')
    onMounted(async () => {
      const { data } = await axios({
        method: 'post',
        url: URLS.leftTree,
        data: {
        qryCondition: ''
      }
      })
      treeData.value = data.qryRiskPropListVoList
    })

     const handleNodeClick = (node: any) => {
       selectedNodeKey.value = node.riskProposalId
    }

    return {
      size: 'small',
      treeData,
       props: {
        children: 'children',
        label: 'riskProposalName',
        value: 'riskProposalId'
      },
      selectedNodeKey,
      handleNodeClick
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
  display: flex;
  flex-direction: column;
  width: 250px;
  border-right: 1px solid #ebeef5;
  background-color: #fff;
  margin: 12px 12px;
  .el-tree{
    flex: 1;
  }
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