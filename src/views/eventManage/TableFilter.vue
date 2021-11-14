<template>
  <div class="filter">
    <FormItem
      v-for="(item, index) in formOptions"
      :key="index"
      v-bind="item"
      :formValue="formValue"
    ></FormItem>
    <div class="btn-group">
      <el-button @click="resetQuery()">重置</el-button>
      <el-button @click="searchList()" type="primary">搜索</el-button>
    </div>
    {{formValue.why}}
  </div>
</template>

<script lang="ts">
import { defineComponent, ref, reactive } from 'vue'
import FormItem from '@components/FormItem.vue'
// import useTableFilter from '@hooks/useTableFilter'
import useTableFilter from '../../hooks/useTableFilter'

const formList = [
  {
    title: '事件名称',
    field: 'eventName',
    component: 'el-input',
    placeholder: '请输入',
    input: (v: String) => {
      console.log(this, 'vvv');
    }
  },
  {
    title: '事件ID',
    field: 'eventId',
    component: 'el-select',
    placeholder: '请选择',
    options: [
      {
        value: 'Option1',
        label: 'Option1',
      },
    ]
  }
]
export default defineComponent({
  name: '',
  components: {
    FormItem
  },
  setup() {
    const { formValue, formOptions, resetQuery, searchList } = useTableFilter({
      formValue: {
        eventName: '',
        eventId: ''
      },
      formOptions: formList
    })
    return {
      formValue,
      formOptions,
      resetQuery,
      searchList
    }
  },
  data() {
    return {
    }
  },
  watch: {
    formValue: {
      deep: true,
      handler() {
        // console.log('change', this.formValue);
      }
    }
  },
  methods: {
  },
  mounted() {
  }
})
</script>

<style lang="less" scoped>
.filter {
  display: flex;
  justify-content: flex-start;
  .btn-group{
    display: flex;
    align-items: flex-end;
  }

}
</style>