<template>
  <div id="menu-item">
    <search-box />
    <a-divider type="vertical" />
    <login-box />
  </div>
</template>

<script>
import SearchBox from './downBox/SearchBox'
import LoginBox from './downBox/LoginBox'
export default {
  name: 'MenuLogin',
  components: {
    SearchBox, LoginBox
  },
  data() {
    return {
      isLogin: this.$store.getters.token !== undefined
    }
  },
  watch: {
  },
  created() {

  },
  mounted() {
  },
  methods: {
    showModal() {
      this.$router.replace('/console')
    }
  }
}
</script>

<style>
    #menu-item{
      float: right;
      margin-right: 10%;
    }
    #menu-item span {
      margin-bottom: 5px;
    }
</style>
