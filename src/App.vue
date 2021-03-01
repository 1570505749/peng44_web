<template>
  <div>
    <router-view />
  </div>
</template>

<script>
export default {
  // 组件页面刷新变量
  provide() {
    return {
      reload: this.reload
    }
  },
  mounted() {
    if (navigator.userAgent.match(/(phone|pad|pod|iPhone|iPod|ios|iPad|Android|Mobile|BlackBerry|IEMobile|MQQBrowser|JUC|Fennec|wOSBrowser|BrowserNG|WebOS|Symbian|Windows Phone)/i) === null) {
      this.$store.dispatch('global/isMobile', false).then(res => null)
    } else {
      this.$store.dispatch('global/isMobile', true).then(res => null)
    }
  }
}
</script>

<style>
  /* 滚动条的宽度 */
  ::-webkit-scrollbar {
    width: 5px;
    height: 5px;
  }
  /* 滚动条滑块样式 */
  ::-webkit-scrollbar-thumb {
    border-radius: 5px;
    background-color: rgb(154, 158, 155);
  }
</style>
