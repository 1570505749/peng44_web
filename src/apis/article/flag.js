import request from '@/utils/request'
const flag_name = 'flag'
export default {
  getFlagList() { // 前台查询
    return request({
      url: `/${flag_name}/getFlagList`,
      method: 'get'
    })
  },
  setFlag(flag) { // 前台查询
    return request({
      url: `/${flag_name}/setFlag`,
      method: 'post',
      data: flag
    })
  }
}
