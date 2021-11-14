import { ref, reactive } from 'vue'

interface filterOptions {
  formValue: Object;
  formOptions: Array<Object>;
}

export default function useTableFilter(props: filterOptions) {
  
  const formValue: any = reactive(props.formValue)
  const formOptions = ref(props.formOptions)
  // 重置查询参数
  const resetQuery = (callback?: Function) => {
    console.log('重置');
    if (typeof callback === 'function') {
      callback()
      return
    }
    for(const key in props.formValue) {
      formValue[key] = ''
    }
  }

  const searchList = (callback?: Function) => {
    console.log('搜索');
    if (typeof callback === 'function') {
      callback()
      return
    }
  }

  return {
    formValue,
    formOptions,
    resetQuery,
    searchList,
  }
}