<template>
  <a-layout>
    <a-back-top :visibility-height="100" />
    <div class="index-background-image" style="background-image:url(https://s1.ax1x.com/2020/09/20/w71E59.jpg)">
      <div :style="{height:'59px', zIndex: 1, width: '100%',backgroundColor:'rgba(255,255,255,0)' }">
        <menu-login />
        <simple-menu v-show="show" :style="{marginLeft:'17%'}" />
      </div>
      <div class="site-mid">
        <p :style="{fontSize:'300%',fontWeight:'600'}">生活原本沉闷，但跑起来就有风。</p>
      </div>
    </div>
    <a-layout-content :style="{ background: '#F0F2F5',height:'100%', width: '100%' }">
      <router-view />
    </a-layout-content>
    <a-layout-footer  :style="{textAlign: 'center',color:'#001529', background: '#FFFFFF',display: 'block',bottom: '0px', width: '100%',marginTop: '10px' }">
      Peng44Web ©2020 Created by peng44 | 湘ICP备20005096号
    </a-layout-footer>
  </a-layout>
</template>

<script>
import SimpleMenu from './menu/Menu'
import MenuLogin from './menu/MenuLogin'
export default {
  components: { SimpleMenu, MenuLogin },
  data() {
    return {
      collapsed: true,
      show: true
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
  #components-layout-demo-fixed .logo img {
    width: 80px;
    height: 31px;
    margin: 16px 14px 16px 0;
    float: left;
  }
  .index-background-image {
    height: 520px;
    width: 100%;
    background-size: cover;
    background-position: 50%;
    background-repeat: no-repeat;
    -webkit-animation: fade-in-bottom 1s .3s backwards;
    animation: fade-in-bottom 1s .3s backwards;
    background-attachment: inherit;
  }
  .site-mid{
    position: relative;
    text-align: center;
    top:200px;
  }
</style>
