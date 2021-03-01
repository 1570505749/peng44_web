<template>
  <div id="menu-item">
    <search-box />
    <a-divider type="vertical" />
    <a v-if="isLogin" id="loginR" @click="showModal">控制台</a>
  </div>
</template>

<script>
import SearchBox from './downBox/SearchBox'
export default {
  name: 'MenuLogin',
  components: {
    SearchBox
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
      margin-top: 10px;
      margin-right: 10%;
    }
    #menu-item span {
      margin-bottom: 5px;
    }
</style>
