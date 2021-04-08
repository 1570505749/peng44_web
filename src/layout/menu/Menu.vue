<template>
  <div>
    <a-menu
      v-model="current"
      theme="dark"
      mode="inline"
      :default-selected-keys="['1']"
    >
      <template v-for="item in routes[0].children">
        <a-menu-item v-if="item.mate.isLoading&&item.mate.children === undefined" :key="item.path">
          <router-link :to="item.path">
            <a-icon :type="item.mate.icon" />
            <span :style="{fontWeight:'600'}">
              {{ item.mate.title }}
            </span>
          </router-link>
        </a-menu-item>
        <a-sub-menu v-else-if="item.mate.isLoading&&item.mate.children !== undefined" :key="item.path">
          <span slot="title"><a-icon :type="item.mate.icon" /><span :style="{paddingLeft:'4px',fontWeight:'600'}">{{ item.mate.title }}</span></span>
          <template v-for="item1 in item.mate.children">
            <a-menu-item :key="item1.path">
              <router-link :to="item.path+item1.path">
                <span>{{ item1.title }}</span>
              </router-link>
            </a-menu-item>
          </template>
        </a-sub-menu>
      </template>
    </a-menu>
  </div>
</template>

<script>
import { routes } from '../../router'
export default {
  components: { },
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
