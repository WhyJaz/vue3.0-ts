<template>
  <div class="event-manage-wrapper">
    <LeftTree></LeftTree>
    <div class="content">
      <Detail></Detail>
      <TableList a="123"></TableList>
    </div>
  </div>
</template>

<script lang="ts">
import { defineComponent, watch, ref, provide } from 'vue'
import LeftTree from './LeftTree.vue'
import TableList from './TableList.vue'
import Detail from './Detail.vue'
import axios from 'axios'
import { URLS } from '../constants'


export default defineComponent({
  name: '',
  components: {
    LeftTree,
    TableList,
    Detail
  },
  setup(props, context) {
    const selectedNodeKey = ref('')
    let detailInfo = ref('')

    provide('selectedNodeKey', selectedNodeKey)
    provide('detailInfo', detailInfo)

    watch(selectedNodeKey, async (newVal, oldVal) => {
      console.log('change');
      const { data } = await axios({
        method: 'post',
        url:URLS.rightDetail,
        data: {
        riskProposalId: newVal
      }
      })
      detailInfo.value = data
    })
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
.event-manage-wrapper {
  display: flex;
  height: 100%;
  .content {
    padding: 12px;
    flex: 1;
  }
}
</style>