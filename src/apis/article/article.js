import request from '@/utils/request'
const visitor_name = 'visitor'
const article_name = 'article'
export default {
  getArticle(id) { // 前台查询
    return request({
      url: `/${visitor_name}/getArticle/${id}`,
      method: 'get'
    })
  },
  getByPage(page) { // 前台查询
    return request({
      url: `/${visitor_name}/getByPage`,
      method: 'post',
      data: page
    })
  },
  saveArticle(article) {
    return request({
      url: `/${article_name}/saveArticle`,
      method: 'post',
      data: article
    })
  }
}
