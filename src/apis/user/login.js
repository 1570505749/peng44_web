import request from '@/utils/request'

export function login(data) {
  return request({
    url: '/login',
    method: 'post',
    transformResponse: [function(data) {
      return JSON.parse(data)
    }],
    data
  })
}

export function githubLogin() {
  return request({
    url: '/accounts/github/login',
    method: 'get'
  })
}

export function githubLoginTest(url) {
  return request({
    url: url,
    method: 'get'
  })
}

export function getGithubToken(accessToken) {
  return request({
    url: 'login/github?code=' + accessToken,
    method: 'get'
  })
}

export function giteeLogin() {
  return request({
    url: '/accounts/gitee/login',
    method: 'get'
  })
}

export function getGiteeToken(accessToken) {
  return request({
    url: 'login/gitee?code=' + accessToken,
    method: 'get'
  })
}

export function getInfo(params) {
  return request({
    url: '/getUserInfo',
    method: 'get',
    headers: {
      'Content-Type': 'application/json;charset=UTF-8'
    },
    params
  })
}
export function getRoleMenu() {
  return request({
    url: '/getRoleMenu',
    method: 'get'
  })
}
