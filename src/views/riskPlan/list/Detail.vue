<template>
    <div class="detail">
        <div class="item" v-for="item in options" :key="item.prop">
            <span>{{ item.label }}：</span>
            <span>{{ detailInfo[item.prop] }}</span>
        </div>
    </div>
</template>

<script lang="ts">
import { defineComponent, inject } from 'vue'
export default defineComponent({
    name: 'Detail',
    inject: [''],
    setup(props) {
        const detailInfo: any = inject('detailInfo')
        return {
            detailInfo
        }
    },
    data() {
        return {
            options: [
                {
                    label: '当前方案',
                    prop: 'riskProposalName'
                },
                {
                    label: '适用产品',
                    prop: 'riskControlClassNameList'
                },
                {
                    label: '持仓穿透',
                    prop: 'hldpThroughFlag',
                },
                {
                    label: '风控规则',
                    prop: 'riskPropCtrlType',
                },
            ]
        }
    },
    methods: {
    },
    mounted() {
    }
})
</script>

<style lang="less" scoped>
.detail {
    display: flex;
    padding: 16px 24px;
    background-color: #fff;
    box-shadow: 0 1px 2px 0 rgba(0,0,0,0.10);
    border-radius: 4px;
    .item{
        width: 33.33%;
        text-align: left;
    }
}
</style>