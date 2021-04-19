<template>
  <div>
    <a-tabs default-active-key="1" @change="callback">
      <a-tab-pane key="1" tab="考核批次">
        Content of Tab Pane 1
      </a-tab-pane>
      <a-tab-pane key="2" tab="考核项">
        Content of Tab Pane 2
      </a-tab-pane>
    </a-tabs>
  </div>
</template>
<script>
export default {
  data() {
    return {}
  },
  methods: {
    callback(key) {
      console.log(key)
    }
  }
}
</script>

