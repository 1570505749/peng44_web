import request from '@/utils/request'
const paper_name = 'api/book'
export default {
  getByPage(page) { // 前台查询
    return request({
      url: `/${paper_name}/books`,
      method: 'post',
      data: page
    })
  }
}
