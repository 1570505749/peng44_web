<template>
  <el-tabs v-model="activeName" @tab-click="handleClick">
    <el-tab-pane label="登录配置" name="first">登录配置</el-tab-pane>
    <el-tab-pane label="邮件配置" name="second">邮件配置</el-tab-pane>
  </el-tabs>
</template>
<script>
export default {
  name: 'Setting',
  data() {
    return {
      activeName: 'first'
    }
  },
  methods: {
    handleClick(tab, event) {
      console.log(tab, event)
    }
  }
}
</script>
<style scoped>

</style>
