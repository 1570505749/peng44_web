<template>
  <div>
    <div id="editor-content">
      <div id="editor-top">
        <a-input v-model="article.articleTitle" class="editor-input-title" placeholder="请输入标题" />
        <a-divider type="vertical" />
        <input v-model="article.articleImage" class="editor-input-url" placeholder="请输入封面Url">
        <a-divider type="vertical" />
        <a-select
          placeholder="选择类别"
          :value="selectedItems"
          style="width: 200px"
          @change="handleChange"
        >
          <a-select-option v-for="item in filteredOptions" :key="item.categoryId" :value="item.categoryName">
            {{ item.categoryName }}
          </a-select-option>
        </a-select>
        <a-divider type="vertical" />
        <a-button type="primary" @click="saveArticle">
          发布
        </a-button>
        <a-button :style="{ float: 'right',fontSize:'15px',marginTop:'10px'}" type="link" @click="goback">
          返回
        </a-button>
      </div>
      <markdown-pro v-model="article.editContent" :height="890" @on-save="handleOnSave" />
    </div>
  </div>
</template>

<script>
import { MarkdownPro } from 'vue-meditor'
import articleApi from '@/apis/article/article.js'
import message from 'ant-design-vue/es/message'

export default {
  name: 'Index',
  components: {
    MarkdownPro
  },
  data() {
    return {
      selectedItems: [],
      article: {}
    }
  },
  computed: {
    filteredOptions() {
      return this.$store.getters.category.filter(o => !this.selectedItems.includes(o))
    }
  },
  methods: {
    handleChange(selectedItems, Option) {
      this.article.articleCategory = Option.key
      this.selectedItems = selectedItems
    },
    handleOnSave({ value, theme }) {
      console.log(value, theme)
    },
    goback() {
      this.$router.go(-1)
    },
    saveArticle() {
      if (this.article.articleTitle == null || this.article.articleTitle === '') {
        message.warn('标题不能为空')
      } else if (this.article.articleCategory == null || this.article.articleCategory === '') {
        message.warn('类别不能为空')
      } else if (this.article.editContent == null || this.article.editContent === '') {
        message.warn('内容不能为空')
      } else {
        articleApi.saveArticle(this.article).then(res => {
          message.success('添加成功！')
          this.$router.replace('/')
        }).catch(e => {
          message.warn('失败' + e)
        })
      }
    }
  }
}
</script>

<style scoped>
  #editor-content{
    margin: 10px 10px;
  }
  #editor-top{
    border-radius: 5px;
    margin-bottom: 10px;
    background-color: #ffffff;
    height: 50px;
    width: 100%;
  }
  .editor-input-title {
    height: 100%;
    width: 20%;
    font-size: 20px;
    font-weight: 700;
    margin-left: 10px;
    border: none;
    outline: none;
  }
  .editor-input-url{
    height: 80%;
    width: 20%;
    margin-left: 10px;
    border: none;
    outline: none;
  }
</style>
