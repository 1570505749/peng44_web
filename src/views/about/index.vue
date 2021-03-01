<template>
  <div id="home-content" :style="isMobileOrPcHome">
      <div id="home-left-content" :style="isMobileOrPcContent">
      <div id="left-article">
        <div id="left-article-content">
          <div class="post-article-title">
            <a class="post-title-link">About me</a>
<!--            <p><span><a-icon type="select" /> 2020-03-03 </span> &nbsp;<span> <a-icon type="eye" /> 浏览 1033   </span>&nbsp;<span> <a-icon type="message" /> 评论数 1</span></p>-->
          </div>
          <div style="float: left;margin-top: 10px;background-color: #97dffd;line-height: 1;margin-left: -10px;height: 20px;box-shadow:0 0 20px rgba(0, 0, 0, 0.3);">
            <span style="float: right;color: #ffffff;margin-top: 3px;margin-right: 5px;margin-left: 20px">Me</span>
          </div>
          <div class="article-title-content">
            <markdown-preview :initial-value="text" theme="gitHub" />
          </div>
          <div class="article-title-button" />
        </div>
      </div>
    </div>
    <div v-if="!isMobile" id="home-right-content">
      <div id="right-info">
        <a-card>
          <a-avatar :size="76" :style="{ float:'left'}" src="https://s1.ax1x.com/2020/09/20/w73DOK.jpg" />
          <div :style="{ marginLeft:'85px',marginTop:'10px'}">
            <h1 :style="{fontWeight:'1000'}">Peng44</h1>
            <p>You are too close to me.</p>
          </div>
          <a-icon style="font-size: 30px;color: #40B3EC;" type="github" />
          <a-icon style="font-size: 30px;margin-left: 10px;color: #40B3EC;" type="qq" />
          <a-icon style="font-size: 30px;margin-left: 10px;color: #40B3EC;" type="twitter" />
          <a-icon style="font-size: 10px;margin-left: 10px;" type="heart" theme="twoTone" two-tone-color="#eb2f96" />
          <a-icon style="font-size: 10px;margin-left: 10px;" type="heart" theme="twoTone" two-tone-color="#eb2f96" />
          <a-icon style="font-size: 10px;margin-left: 10px;" type="heart" theme="twoTone" two-tone-color="#eb2f96" />
        </a-card>
      </div>
      <div class="right-like">
        <ul class="sidebar-nav" text-center>
          <li class="sidebar-nav-random sidebar-nav-active">相关文章</li>
        </ul>
        <div class="random-post-wrap sidebar-section-active">
          <ul class="rand-archive list">
            <li>
              <router-link :to="'read/3'" title="frp服务">frp服务</router-link>
            </li>
            <li><router-link :to="'read/3'" title="树莓派基础打造家庭服务器">树莓派基础打造家庭服务器</router-link></li>
            <li><router-link :to="'read/3'" title="Javaee">Javaee</router-link></li>
            <li><router-link :to="'read/3'" title="minecraft服务器 纯净生存服">minecraft服务器 纯净生存服</router-link></li>
            <li><router-link :to="'read/3'" title="ticwatch">ticwatch</router-link></li></ul>
        </div>
      </div>
    </div>
  </div>
</template>
<script>
import { MarkdownPreview } from 'vue-meditor'
export default {
  name: 'Index',
  components: {
    MarkdownPreview
  },
  data() {
    return {
      isMobile: false,
      text: '#### 个人概括\n' +
              '\n' +
              '---\n' +
              '\n' +
              '##### 姓名：彭方               \t\t 年龄：保密\n' +
              '\n' +
              '籍贯：湖南\n' +
              '\n' +
              '邮箱：1570505749@qq.com\n' +
              '\n' +
              '---\n' +
              '\n' +
              '#### 专业技能\n' +
              '\n' +
              '---\n' +
              '\n' +
              '1. 熟练掌握Java基础、集合等基础框架。\n' +
              '2. 熟练掌握多线程、并发和I/O的基础知识。\n' +
              '3. 熟练掌握常用的设计模式。\n' +
              '4. 熟练掌握JVM底层原理。\n' +
              '5. 熟练掌握和使用Mysql等关系型数据库。\n' +
              '6. 熟练掌握Spring、Spring MVC 、SpringBoot、Spring Security、Mybatis等开源框架。\n' +
              '7. 掌握基本数据结构、算法和计算机网络通信协议。\n' +
              '8. 掌握Linux操作系统的常用命令。\n' +
              '9. 掌握html、css、js的基础知识、对Vue.js前端框架有一定理解。\n' +
              '10. 了解负载均衡的基本原理，对Nginx和Docket有一定认识和应用。\n' +
              '11. 了解Redis缓存。\n' +
              '12. 熟悉常用IDE工具，可以使用Git进行协同开发。\n' +
              '\n' +
              '---\n' +
              '\n' +
              '#### 自我评价\n' +
              '\n' +
              '---\n' +
              '\n' +
              ' 喜欢无趣的生活，热爱编程，希望为这个世界的美好贡献自己的一份力量。'
    }
  },
  created() {
    this.isMobile = this.$store.getters.isMobile
  },
  computed: {
    isMobileOrPcHome() {
      if (this.isMobile) {
        return { margin: '20px 0' }
      } else {
        return { margin: '20px 8%' }
      }
    },
    isMobileOrPcContent() {
      if (this.isMobile) {
        return { width: '100%' }
      } else {
        return { width: '76%' }
      }
    }
  },
  methods: {

  }
}
</script>
<style scoped>
  #home-content #home-left-content{
    float: left;
  }
  #home-content #home-right-content{
    float: right;
    border-radius: 5px;
    margin-top: 20px;
    width: 22%;
  }
  #home-left-content #left-article-content{
    border-radius: 5px;
    background-color: #ffffff;
    margin-top: 20px;
  }
  .post-article-title{
    text-align: center;
    padding-top: 15px;
  }
  .post-title-link {
    font-size: 25px;
    font-weight: 700;
    position: relative;
    color: #555;
    border-bottom: none;
    line-height: 1.2;
    text-align: center;
  }
  .article-title-content{
    padding: 10px 40px 0 40px;
    margin: 0 auto;
  }
  .article-title-button{
    margin:0 auto;
    width:100px;
    height:40px;
  }
  .sidebar-nav .sidebar-nav-active {
    color: #dc143c;
    border-bottom: 1px solid #dc143c;
  }
  .right-like{
    border-radius: 5px;
    margin-top: 10px;
    background-color: #ffffff;
  }
</style>
