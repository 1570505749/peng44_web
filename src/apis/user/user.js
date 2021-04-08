import request from '@/utils/request'
const user_name = 'api/user'
export default {
  getByPage(page) { // 前台查询
    return request({
      url: `/${user_name}/getAllUsers`,
      method: 'post',
      data: page
    })
  },
  disable(id) {
    return request({
      url: `/${user_name}/disable/${id}`,
      method: 'put'
    })
  },
  enable(id) {
    return request({
      url: `/${user_name}/enable/${id}`,
      method: 'put'
    })
  }
}
