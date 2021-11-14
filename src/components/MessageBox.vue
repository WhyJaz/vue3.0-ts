<template>
    <div id="modal_dialog" v-if="isShow" @touchmove.prevent>
        <div class="dialog_block">
            <div class="dialog_main">
                <i v-if="config.isShowClose" class="dialog_icon close_icon" @click="close"></i>
                <i class="dialog_icon" :class="config.type !== 1 ? 'error_icon' : 'success_icon'"></i>
                <p class="dialog_title">{{config.info}}</p>
            </div>
        </div>
    </div>
</template>

<script>
    // config = {
    //     type, // 0位错误类型，1位成功类型
    //     time, // 自动关闭的时间
    //     isShowClose, // 是否显示关闭按钮，如果为true则不会自动关闭，否则为自动关闭
    //     info 请传入提示信息' // 显示的消息内容
    // }
    export default {
        name: 'MessageBox',
        props: ['config'],
        data() {
            return {
                isShow: false
            }
        },
        watch: {
            config(newVal) {
                this.isShow = true
                let time = newVal.time || 2000
                let isShowClose = newVal.isShowClose || false

                if (!isShowClose) {
                    setTimeout(() => {
                        this.isShow = false
                    }, time)
                }
            }
        },
        methods: {
            close: function() {
                this.isShow = false
            }
        },
        mounted() {}
    }
</script>

<style lang='scss' scoped>
    #modal_dialog {
        width: 100%;
        height: 100%;
        position: fixed;
        background: rgba(0, 0, 0, .6);
        left: 0;
        top: 0;
        z-index: 7000;
        overflow: hidden;
    }
    .dialog_block {
        width: 450px;
        border-radius: 3px;
        position: fixed;
        top: 0;
        left: 0;
        right: 0;
        bottom: 0;
        margin: auto;
        -webkit-animation: hi .3s ease forwards;
        animation: hi .3s ease forwards;
    }
    .dialog_main {
        width: 400px;
        background: #FFF;
        padding: 40px 30px;
        position: absolute;
        top: 50%;
        transform: translate3d(0, -50%, 0);
        -webkit-transform: translate3d(0, -50%, 0);
        border-radius: 6px;
        text-align: center;
        .dialog_icon {
            width: 44px;
            height: 44px;
            display: block;
            margin: 0 auto 20px auto;
        }
        .success_icon {
            background: url('data:image/png;base64,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') no-repeat center center;
            background-size: 44px 44px;
        }
        .error_icon {
            background: url('data:image/png;base64,iVBORw0KGgoAAAANSUhEUgAAAFgAAABYCAMAAABGS8AGAAAABGdBTUEAALGPC/xhBQAAAAFzUkdCAK7OHOkAAAB1UExURUdwTO5zaO5zaO5zaO5zaO5zaO5zaO5zaO5zaO5zaO5zaO5zaO5zaO5zaO5zaO5zaO5zaO5zaO5zaO5zaO5zaO5zaO5zaO5zaO5zaO5zaO5zaO5zaO5zaO5zaO5zaO5zaO5zaO5zaO5zaO5zaO5zaO5zaO5zaJ0DROwAAAAldFJOUwBJQhoiuuvuJ0U1qzyy/E+V5YB5XPaPywLdBSzRo1WbxWaHaQigptmGAAACu0lEQVRYw72ZWZqqMBCFiyEgc4AWRMWh5av9L7Ef1L5Ck6QycM8CfmOoKacA1DqG3r3hBWOMFdfmUYUT2OuQtlld4lxR0eRHK2zVDShQzS+m7KAVUl/sJjDAnvgelSqvqSZ2NyJR2UmH25ZIV0PG5j1q6ZwQj4va+qbEAkMDMWV8pDUaKcoVGYHGusi4F7TQ10ZcCblCS1WC8EVrrX7BYG8P3q9FXY8O1P/lduhE3ZKboCP5iw4UuQLXc/A3OtOsioboUJ+RwVyCi4+Shk51Uh6Y3aSNo4gFbVBxw+cTgB/JSo6oKQTS3ChDAICdiPzsc7UsMI6xLDsF5Ff/HGWxLKiWw3vEiMVc0dd5pl+mqNsr5Dc3FcwfVwCASVguExE5kf0ZRMRIUX5+AZEeFzFVlIlVhODnZmpV6bwC8dXnRcyEwfaW906iaMmVFtoB4KRIfG8OIp0XEQP4QiI5jMjnRcSEMFv+nrkknxfxDhzJ5Lwic7ER5t0amc5FTmseni4XR2JX8jS5WEChOUkSJ7wb6Y4NwD2M21zFDa7bfDxGGgYNwi2jvOpMEoSra4VZSrfgmxWhWBlFQblJ2UwBBqS0EM1Cv59AniErrSmhnPmmeOyv9k0KuZPPsAIEgVyJBzurgWU/AYCwh1iMWJmsXtkMhS+LYXA9xsZHmQn0fBcrBu9I+jwVJJ/5U2H3roOj28cN+1dg3T7HPmzJzCWXfZogLsG7jR7pfO6W16648cJn912BvaXFwt1wx7+m0NkFdzj8R3vMhWuxbskevI0sSIC7HfcutmMfNtzHRgbyRWGlGzp7kXLTEhqZpz1lOWSQgx1tEeJrJmHvk3c3jQa2bLV2YwWVq7fEAgCfhM5yg41eyhWhV3cpmGm6cGFnGbrKam16zJsiWgw0ZZ216cHBpncKvUdzfa6PeXP3SOvjH+/ZIkaCZbe/AAAAAElFTkSuQmCC') no-repeat center center;
            background-size: 44px 44px;
        }
        .close_icon {
            background: url('data:image/png;base64,iVBORw0KGgoAAAANSUhEUgAAAEAAAABACAMAAACdt4HsAAAAM1BMVEUAAACLi4uKioqJiYmJiYmKioqPj4+KioqKioqJiYmKioqKioqKioqKioqKioqJiYmJiYmWVpeMAAAAEXRSTlMAf+9Q358QYP+gwLDgMJDwgOtcPDoAAADxSURBVHgB7daxbsMwDADRRooiOk0s///X1kANoodOx7XlRgLvFnvQx/9cc2vt5kS/t/HIbcY5Q/BvseX6DFFIHy33zxCF9PHKwzuyIHz036dh/MQRBe9Z8F4UBr0u0PsCvS/Q+wK9L9D7Ar0v0PsCvS/Q+wK9L9D7Ar0v0PsCvS/AVwr0vkDvC/C+UPf8/jHq3hfofQG+WoCf0xfg8VeXvC/Qo1D0LHjPQs2z4D0L3rOwFzwLU3tRoPcFel+g9wV6X6D3BXpfoDcF+NXz4grH5d/V535TPgv3PCzls7ByP5TPwv5jf26nN9Nfa3vk9sfnC21oG9m0LOP1AAAAAElFTkSuQmCC') center right no-repeat;
            background-size: 15px 15px;
            position: absolute;
            top: 0;
            right: 10px;
            cursor: pointer;
        }
        .dialog_title {
            font-size: 17px;
            line-height: 26px;
            color: #333333;
            font-weight: 500;
            margin-bottom: 20px;
        }
    }
    @media screen and (max-width: 960px) {
        .dialog_block {
            width: 96%;
        }
        .dialog_main {
            width: calc(100% - 60px);
            background: #FFF;
            padding: 40px 30px;
            position: absolute;
            top: 50%;
            transform: translate3d(0, -50%, 0);
            -webkit-transform: translate3d(0, -50%, 0);
            border-radius: 3px;
            text-align: center;
        }
    }
    @keyframes hi {
        0% {
            opacity: 0;
            -webkit-transform: scale(.75);
            transform: scale(.75);
        }
        100% {
            opacity: 1;
            -webkit-transform: scale(1);
            transform: scale(1);
        }
    }
    @-webkit-keyframes hi {
        0% {
            opacity: 0;
            -webkit-transform: scale(.75);
            transform: scale(.75);
        }
        100% {
            opacity: 1;
            -webkit-transform: scale(1);
            transform: scale(1);
        }
    }
</style>


