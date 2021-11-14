<template>
    <div>
        <el-select
            v-model="selectValue"
            @remove-tag="removeTag"
            collapse-tags
            multiple
            placeholder="请选择"
        >
            <el-option
                v-for="item in dataList"
                :key="item.value"
                :label="item.label"
                :value="item.value"
            >
                <el-checkbox-group @change="checkBoxChange" v-model="checkboxValue">
                    <el-checkbox :label="item.value">{{item.label}}</el-checkbox>
                </el-checkbox-group>
            </el-option>
        </el-select>
    </div>
</template>

<script>
/*
*这是一个可公用的vue组件
*/
export default {
    name: 'SelectCheckBox',
    props: {
        // 要绑定的数据
        value: {
            type: Array,
            default: []
        },
        // 遍历的列表
        dataList: {
            type: Array,
            default: [
                {
                    value: 'food',
                    label: '食物'
                },
                {
                    value: 'apple',
                    label: '苹果'
                }
            ]
        }
    },
    data() {
        return {
            checkboxValue: [],
            selectValue: []
        }
    },
    watch: {
        value(newVal) {
            this.selectValue = newVal
            this.checkboxValue = newVal
        }
    },
    methods: {
        removeTag() {
            this.checkboxValue = this.selectValue
            this.$emit('update:value', this.selectValue)
        },
        checkBoxChange(val) {
            this.selectValue = val
            this.$emit('update:value', val)
        }
    },
    mounted() {}
}
</script>

<style lang="scss" scoped>
.el-checkbox {
    width: 100%;
}
/deep/ .el-select__tags {
    .el-tag--info {
        &:nth-of-type(1) {
            max-width: 110px;
            overflow: hidden;
            text-overflow: ellipsis;
        }
    }
}
</style>