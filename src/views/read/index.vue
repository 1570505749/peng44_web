<template>
  <div id="home-content" :style="isMobileOrPcHome">
    <a-spin :spinning="spinning">
      <div id="home-left-content" :style="isMobileOrPcContent">
        <div id="left-article">
          <div id="left-article-content">
            <div class="post-article-title">
              <a class="post-title-link">{{ article.articleTitle }}</a>
              <p style="margin-top: 10px"><span style="color: #81D458"><a-icon type="check-circle" theme="twoTone" two-tone-color="#52c41a" /> {{ article.createdTime }}  </span>&nbsp;<span> <a-icon type="eye" /> 浏览 {{ article.readCount }}    </span>&nbsp;&nbsp;<span style="color: #FD2325"> <a-icon type="message" style="color: #FD2325" /> 评论数 {{ article.commentCount }}</span></p>
            </div>
            <div style="position: absolute; margin-top: 5px;background-color: #97dffd;line-height: 1;margin-left: -10px;height: 20px;box-shadow:0 0 20px rgba(0, 0, 0, 0.3);">
              <span style="float: right;color: #ffffff;margin-top: 3px;margin-right: 5px;margin-left: 20px">{{ article.categoryName }}</span>
            </div>
            <div class="article-title-content">
              <markdown-preview :initial-value="article.editContent" theme="gitHub" />
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
          <section class="random-post-wrap sidebar-section-active">
            <ul class="rand-archive list">
              <li>
                <router-link :to="'read/3'" title="frp服务">frp服务</router-link>
              </li>
              <li><router-link :to="'read/3'" title="树莓派基础打造家庭服务器">树莓派基础打造家庭服务器</router-link></li>
              <li><router-link :to="'read/3'" title="Javaee">Javaee</router-link></li>
              <li><router-link :to="'read/3'" title="minecraft服务器 纯净生存服">minecraft服务器 纯净生存服</router-link></li>
              <li><router-link :to="'read/3'" title="ticwatch">ticwatch</router-link></li></ul>
          </section>
        </div>
      </div>
    </a-spin>
  </div>
</template>
<script>
import { MarkdownPreview } from 'vue-meditor'
import ArticleApi from '@/apis/article/article.js'
export default {
  name: 'Index',
  components: {
    MarkdownPreview
  },
  data() {
    return {
      isMobile: false,
      spinning: true,
      article: {}
    }
  },
  computed: {
    isMobileOrPcHome() {
      if (this.isMobile) {
        return { margin: '20px 0' }
      } else {
        return { margin: '20px 10%' }
      }
    },
    isMobileOrPcContent() {
      if (this.isMobile) {
        return { width: '100%' }
      } else {
        return { marginLeft: '10%', width: '65%' }
      }
    }
  },
  created() {
    this.isMobile = this.$store.getters.isMobile
    this.getArticle(this.$route.params.id)
    window.scrollTo(100, 480)
  },
  methods: {
    getArticle(id) {
      ArticleApi.getArticle(id).then(res => {
        this.article = res.data
        this.spinning = false
      }).catch(e => {
        this.$message.error('Get on error : ' + e)
      })
    }
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
        margin-right: 4%;
        margin-top: 20px;
        width: 20%;
    }
    #home-left-content #left-article-content{
        border-radius: 5px;
        background-color: #ffffff;
        margin-top: 20px;
    }
    .post-article-title{
        text-align: center;
        padding-top: 30px;
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
