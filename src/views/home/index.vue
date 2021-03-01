<template>
  <div id="home-content" :style="isMobileOrPcHome">
    <a-spin :spinning="spinning">
      <div id="home-left-content" :style="isMobileOrPcContent">
        <div id="left-article">
          <div v-for="item in page.list" id="left-article-content" :key="item.articleId">
            <div class="post-article-title">
              <router-link class="post-title-link" :to="'read/'+item.articleId">{{ item.articleTitle }}</router-link>
              <p style="margin-top: 10px"><span style="color: #81D458"><a-icon type="check-circle" theme="twoTone" two-tone-color="#52c41a" /> {{ item.createdTime }}  </span>&nbsp;<span> <a-icon type="eye" /> 浏览 {{ item.readCount }}    </span>&nbsp;&nbsp;<span style="color: #FD2325"> <a-icon type="message" style="color: #FD2325" /> 评论数 {{ item.commentCount }}</span></p>
            </div>
            <div style="position: absolute; margin-top: 5px;background-color: #97dffd;line-height: 1;margin-left: -10px;height: 20px;box-shadow:0 0 20px rgba(0, 0, 0, 0.3);">
              <span style="float: right;color: #ffffff;margin-top: 3px;margin-right: 5px;margin-left: 20px">{{ item.categoryName }}</span>
            </div>
            <div class="article-title-content">
              <markdown-preview v-if="item.articleImage !== null" :initial-value="item.articleImage" theme="gitHub" />
              <markdown-preview v-else :initial-value="' '" theme="gitHub" />
              <span>{{ item.editContent }} ...</span>
            </div>
            <div class="article-title-button">
              <router-link :to="'read/'+item.articleId"><a-button>-阅读全文-</a-button></router-link>
            </div>
          </div>
        </div>
        <div id="left-page">
          <a-pagination
            v-model="page.currentPage"
            :style="{marginLeft:'43%' ,paddingTop:'10px',paddingBottom:'10px'}"
            size="small"
            :page-size="page.pageSize"
            :total="page.totalCount"
            @change="pageChange"
          /></div>
      </div>
      <div v-if="!isMobile && screenWidth>1300" id="home-right-content">
        <div id="right-info">
          <a-card>
            <a-avatar :size="76" :style="{ float:'left'}" src="https://s1.ax1x.com/2020/09/20/w73DOK.jpg" />
            <div :style="{ marginLeft:'85px',marginTop:'10px'}">
              <h1 :style="{fontWeight:'1000'}">Peng44</h1>
              <p>You are too close to me.</p>
            </div>
            <a-tooltip placement="top">
              <template slot="title">
                <span>访问我的GitHub</span>
              </template>
              <a href="https://github.com/1570505749">
                <a-icon style="font-size: 25px;color: #40B3EC;" type="github" /></a>
            </a-tooltip>
            <a-tooltip placement="top">
              <template slot="title">
                <span>Email : 1570505749@qq.com</span>
              </template>
              <a href="mailto:1570505749@qq.com"><a-icon class="item-icon" style="font-size: 25px;margin-left: 10px;color: #40B3EC;" type="mail" /></a>
            </a-tooltip>
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
    </a-spin>
  </div>
</template>
<script>
import { MarkdownPreview } from 'vue-meditor'
import ArticleApi from '@/apis/article/article.js'
export default {
  components: {
    MarkdownPreview
  },
  data() {
    return {
      screenWidth: '',
      screenHeight: '',
      spinning: true,
      isMobile: false,
      page: {
        pageSize: 5,
        currentPage: 1,
        params: { },
        sortColumn: 'created_time',
        sortMethod: 'desc'
      },
      text: '![w733LT.jpg](https://s1.ax1x.com/2020/09/20/w733LT.jpg)\n' +
              '\n' +
              'user（第二个）:表示可以运行Nginx服务器的用户，group可选项表示运行Nginx服务器的用户组；只有被设置了用户或者用户组的成员才有权限启动Nginx进程。如果非这些用户就无法启动，还会报错；\n' +
              '\n' +
              '如果想所有的用户都可以启动这可以把当前行注释掉，或者使用user nobody （默认是注释掉的）\n' +
              '\n'
    }
  },
  computed: {
    isMobileOrPcHome() {
      if (this.isMobile) {
        return { margin: '10px 0' }
      } else {
        return { margin: '10px 23%' }
      }
    },
    isMobileOrPcContent() {
      if (this.isMobile) {
        return { width: '100%' }
      } else {
        return { width: '70%' }
      }
    }
  },
  created() {
    this.isMobile = this.$store.getters.isMobile
    this.getByPage()
  },
  mounted() {
    this.screenWidth = document.body.clientWidth
    this.screenHeight = document.body.clientHeight
    window.onresize = () => {
      return (() => {
        this.screenWidth = document.body.clientWidth
        this.screenHeight = document.body.clientHeight
      })()
    }
  },
  methods: {
    // 分页获取数据
    getByPage() {
      ArticleApi.getByPage(this.page).then(res => {
        this.page = res.data
        this.spinning = false
      })
    },
    pageChange(pageNumber) {
      this.page.currentPage = pageNumber
      this.getByPage()
    }
  }
}
</script>
<style>
  #home-content #home-left-content{
    float: left;
  }
  #home-content #home-right-content{
    float: right;
    border-radius: 5px;
    margin-top: 20px;
    width: 28%;
  }
  #home-left-content #left-article-content{
    border-radius: 5px;
    background-color: #ffffff;
    margin-top: 20px;
  }
  #home-left-content #left-page{
    background-color: #ffffff;
    border-radius: 5px;
    margin-top: 30px;
    margin-bottom: 30px;
    min-height: 30px;
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
    padding: 0 40px 0 40px;
    margin: 0 auto;
  }
  .article-title-button{
    margin: 10px auto 0;
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
