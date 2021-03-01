<template>
  <div>
    <a-menu
      v-model="current"
      theme="light"
      mode="horizontal"
      :style="{ height:'58px', lineHeight: '59px',borderBottom:'0px',backgroundColor:'rgba(255,255,255,0)',position:'fixed',top:0}"
    >
      <template v-for="item in routes[0].children">
        <a-menu-item v-if="item.mate.isLoading" :key="item.path">
          <menu-item
            :key="item.path"
            :style="{paddingLeft:'10%',fontWeight:'600'}"
            :path="item.path"
            :icon="item.mate.icon"
            :title="item.mate.title"
          />
        </a-menu-item>
      </template>
    </a-menu>
  </div>
</template>

<script>
import { routes } from '../../router'
import MenuItem from './MenuItem'
export default {
  components: { MenuItem },
  data() {
    return {
      current: [this.$router.history.getCurrentLocation()]
    }
  },
  computed: {
    routes() {
      return routes
    }
  }
}
</script>

<style>

</style>
