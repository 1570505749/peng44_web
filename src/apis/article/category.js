import request from '@/utils/request'
const visitor_name = 'visitor'
export default {
  getAllCategory() { // 前台查询
    return request({
      url: `/${visitor_name}/getAllCategory`,
      method: 'get'
    })
  }
}
