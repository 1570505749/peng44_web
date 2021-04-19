<template>
  <div id="project_count" />
</template>

<script>
import { Chart } from '@antv/g2'

const data = [
  { time: '国家级重大项目（A类）', value: 30 },
  { time: '国家级重大项目（B类）', value: 90 },
  { time: '国家级重点项目', value: 50 },
  { time: '国家级一般项目', value: 30 },
  { time: '省部级重大（重点）项目', value: 70 },
  { time: '省部级一般项目', value: 30 },
  { time: '市厅级项目（含校级）', value: 60 },
  { time: '横向项目', value: 20 }
]

export default {
  name: 'ProjectCount',
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
        container: 'project_count',
        autoFit: true,
        height: 500
      })
      chart.data(data)
      chart.scale('value', {
        alias: '项目数',
        nice: true
      })
      chart.axis('time', {
        tickLine: null
      })

      chart.tooltip({
        showMarkers: false
      })
      chart.interaction('active-region')

      chart.interval().position('time*value')
        .style('time', val => {
          if (val === '横向项目') {
            return {
              fillOpacity: 0.4,
              lineWidth: 1,
              stroke: '#636363',
              lineDash: [3, 2]
            }
          }
          return {
            fillOpacity: 1,
            lineWidth: 0,
            stroke: '#636363',
            lineDash: [3, 2]
          }
        })

      chart.render()
    }
  }
}
</script>

<style scoped>

</style>
