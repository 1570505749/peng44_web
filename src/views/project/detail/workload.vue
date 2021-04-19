<template>
  <div>
    <div id="workload" />
    <h3 :style="{marginLeft:'48%'}">项目工作量分配</h3>
  </div>
</template>

<script>
import { Chart } from '@antv/g2'
const data = [
  { item: '张三', count: 40, percent: 0.4 },
  { item: '李四', count: 21, percent: 0.21 },
  { item: '王五', count: 17, percent: 0.17 },
  { item: '赵六', count: 13, percent: 0.13 },
  { item: '李老八', count: 9, percent: 0.09 }
]
export default {
  name: 'Workload',
  data() {
    return {
      data
    }
  },
  mounted() {
    this.initAccess()
  },
  methods: {
    initAccess() {
      const chart = new Chart({
        container: 'workload',
        autoFit: true,
        height: 500
      })
      chart.coordinate('theta', {
        radius: 0.75
      })

      chart.data(data)

      chart.scale('percent', {
        formatter: (val) => {
          val = val * 100 + '%'
          return val
        }
      })

      chart.tooltip({
        showTitle: false,
        showMarkers: false
      })

      chart
        .interval()
        .position('percent')
        .color('item')
        .label('percent', {
          content: (data) => {
            return `${data.item}: ${data.percent * 100}%`
          }
        })
        .adjust('stack')

      chart.interaction('element-active')

      chart.render()
    }
  }
}
</script>

<style scoped>

</style>
