import request from '@/utils/request'
const paper_name = 'api/management'
export default {
  getByPage(page) { // 前台查询
    return request({
      url: `/${paper_name}/list`,
      method: 'post',
      data: page
    })
  }
}