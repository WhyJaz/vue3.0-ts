<template>
  <div class="item">
    <span class="title">{{ title }}</span>
    <component
      :is="component"
      v-model="formValue[field]"
      v-bind="attrs"
      @change="attrs.change"
      @select="attrs.select"
      @input="attrs.input"
      @blur="attrs.blur"
      @focus="attrs.focus"
      @clear="attrs.clear"
      @calendar-change="attrs.calendarChange"
      @visible-change="attrs.visibleChange"
      @remove-tag="attrs.removeTag"
      @left-check-change="attrs.leftCheckChange"
      @right-check-change	="attrs.rightCheckChange"
    >
      <template v-if="component === 'el-select'">
        <el-option
          v-for="item in options"
          :key="item.value"
          :label="item.label"
          :value="item.value"
        ></el-option>
      </template>
      <slot></slot>
    </component>
  </div>
</template>

<script lang="ts">
import { defineComponent, toRefs } from 'vue'

export default defineComponent({
  name: 'FormItem',
  props: ['title', 'field', 'component', 'formValue', 'options'],
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
.item {
  display: flex;
  flex-direction: column;
  align-items: flex-start;
  margin: 0 12px;
  .title {
    display: inline-block;
    margin-bottom: 8px;
    color: #333;
  }
}
</style>