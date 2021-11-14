<template>
  <div class="toast-wrapper" v-if="isShowToast">
      <p :class="isShowToast ? 'show' : 'hide'">{{config.tips}}</p>
  </div>
</template>

<script>
// 参数说明
// config:{
//   tips: string,   //toast提示内容
//   time: number       //Toast的显示时间
// }
export default {
  name: 'Toast',
  props: {
    config: {
      type: Object
    }
  },
  data() {
    return {
      haveTimer: true, // 当前是否可开启延时器
      isShowToast: false
    }
  },
  watch: {
    config(newVal) {
      // 节流操作，防止多次点击，开启多个延时器
      if (newVal && this.haveTimer) {
        this.haveTimer = false
        this.isShowToast = true
        let time = this.config.time || 1500
        
        setTimeout(() => {
          this.haveTimer = true
          this.isShowToast = false
        }, time)
      }
    }
  }
}
</script>

<style lang="scss" scoped>
.toast-wrapper {
  position: fixed;
  text-align: center;
  top: 0;
  left: 0;
  right: 0;
  bottom: 0;
  margin: auto;
  overflow: hidden;
  height: 50px;
  z-index: 9999;

  * {
    margin: 0;
    padding: 0;
    box-sizing: border-box;
  }

  p {
    font-size: 14px;
    height: 50px;
    color: #fff;
    line-height: 50px;
    padding: 0 20px;
    display: inline-block;
    border-radius: 7px;
    min-width: 100px;
  }
}

.show {
  display: block;
  animation: fadeIn 0.5s ease-out forwards;
}

.hide {
  display: none;
  animation: fadeOut 0.5s ease-out forward;
}

@keyframes fadeIn {
  0% {
    background: rgba(255, 255, 255, 0);
  }

  100% {
    background: rgba(0, 0, 0, 0.6);
  }
}

@keyframes fadeOut {
  0% {
    background: rgba(0, 0, 0, 0.6);
  }

  100% {
    background: rgba(255, 255, 255, 0);
  }
}
</style>

