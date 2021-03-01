const getters = {
  token: state => state.user.token,
  category: state => state.global.category,
  isMobile: state => state.global.isMobile,
  routers: state => state.settings.routers,
  addRouters: state => state.settings.addRouters
}
export default getters
