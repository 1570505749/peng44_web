<template>
  <a-layout id="components-layout-demo-custom-trigger" style="min-height: 1040px">
    <a-back-top :visibility-height="100" />
    <a-layout-sider v-model="collapsed" :trigger="null" collapsible>
      <div class="logo"><h1 v-if="!collapsed" style="color: white;margin-left: 30%;font-weight: 800">管理员端</h1></div>
      <simple-menu />
    </a-layout-sider>
    <a-layout>
      <a-layout-header style="background: #ffffff; padding: 0">
        <a-icon
          class="trigger"
          :type="collapsed ? 'menu-unfold' : 'menu-fold'"
          @click="() => (collapsed = !collapsed)"
        />
        <menu-login />
      </a-layout-header>
      <a-layout style="padding: 0 24px 24px">
        <a-breadcrumb style="margin: 16px 0">
          <a-breadcrumb-item>Home</a-breadcrumb-item>
          <a-breadcrumb-item>List</a-breadcrumb-item>
          <a-breadcrumb-item>App</a-breadcrumb-item>
        </a-breadcrumb>
        <a-layout-content
          :style="{ margin: '0 16px', padding: '24px', background: '#fff', minHeight: '280px' }"
        >
          <router-view />
        </a-layout-content>
      </a-layout>
      <a-layout-footer :style="{textAlign: 'center',color:'#001529', background: '#FFFFFF',display: 'block',bottom: '0px', width: '100%',marginTop: '10px' }">
        SRMS ©2021 Created by pengF | 湘ICP备20005096号
      </a-layout-footer>
    </a-layout>
  </a-layout>
</template>

<script>
import SimpleMenu from './menu/Menu'
import MenuLogin from './menu/MenuLogin'

export default {
  components: { SimpleMenu, MenuLogin },
  data() {
    return {
      collapsed: false
    }
  },
  created() {
    this.mouseScroll()
  },
  methods: {
    mouseScroll() {
      // 给页面绑定滑轮滚动事件
      if (document.addEventListener) { // firefox
        document.addEventListener('DOMMouseScroll', this.watchScroll, false)
      }
      // 滚动滑轮触发scrollFunc方法 // ie 谷歌
      window.onmousewheel = document.onmousewheel = this.watchScroll
    },
    watchScroll(e) {
      e = e || window.event
      if (e.wheelDelta) {
        if (e.wheelDelta > 0 && this.show === false) {
          // 当滑轮向上滚动
          this.show = true
        }
        if (e.wheelDelta < 0 && this.show === true) {
          // 当滑轮向下滚动
          this.show = false
        }
      } else if (e.detail) {
        if (e.detail < 0 && this.show === false) {
          // 当滑轮向上滚动
          this.show = true
        }
        if (e.detail > 0 && this.show === true) {
          // 当滑轮向下滚动
          this.show = false
        }
      }
    }
  }
}
</script>

<style>
#components-layout-demo-custom-trigger .trigger {
  font-size: 18px;
  line-height: 64px;
  padding: 0 24px;
  cursor: pointer;
  transition: color 0.3s;
}

#components-layout-demo-custom-trigger .trigger:hover {
  color: #1890ff;
}

#components-layout-demo-custom-trigger .logo {
  height: 32px;
  background: rgba(255, 255, 255, 0.2);
  margin: 16px;
}
</style>
