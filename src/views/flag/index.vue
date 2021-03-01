<template>
  <div class="flag-content">
    <a-textarea
      v-model="flag.content"
      placeholder="计划填写"
      :style="{float:'left',width:'80%'}"
      :auto-size="{ minRows: 3, maxRows: 5 }"
    />
    <a-button type="primary" :style="{height:'70px',width:'15%',marginLeft:'20px'}" @click="primaryComment">提交计划</a-button>
    <a-timeline class="flag-timeline">
      <div v-for="item in flagList" :key="item.flagId">
        <a-timeline-item color="red">
          <h3>{{ item.createdTime }}</h3>
          <a-divider />
          <div v-for="(item1,index) in item.content" :key="index">
            <p v-if="item1.index1 == 0">{{ item1.index0 }}
              <a-popconfirm
                title="设置当前计划的完成状态？"
                ok-text="完成"
                cancel-text="未完成"
                @confirm="confirm"
                @cancel="cancel"
              >
                <a-icon type="question-circle" style="margin-left: 10px" theme="twoTone" two-tone-color="blue" />
              </a-popconfirm>
              <a-input  style="margin-left:10px;width: 70px" size="small" placeholder="笔记ID" />
            </p>
            <p v-else-if="item1.index1 > 0">
              <router-link class="flag-link" :to="'/read/'+item1.index1">{{ item1.index0 }}</router-link>
              <a-tooltip placement="top">
                <template slot="title">
                  <span>已完成</span>
                </template>
                <a-icon style="margin-left: 10px" type="check-circle" theme="twoTone" two-tone-color="#52c41a" />
              </a-tooltip>
            </p>
            <p v-else-if="item1.index1 < 0">{{ item1.index0 }}
              <a-tooltip placement="top">
                <template slot="title">
                  <span>未完成</span>
                </template>
                <a-icon style="margin-left: 10px" type="close-circle" theme="twoTone" two-tone-color="red" />
              </a-tooltip>
            </p>
          </div>
        </a-timeline-item>
      </div>
      <a-timeline-item color="#ffffff" />
    </a-timeline>
  </div>
</template>

<script>
import flagApi from '@/apis/article/flag'
export default {
  name: 'Index',
  data() {
    return {
      flag: {
        content: ''
      },
      isMobile: '',
      flagList: []
    }
  },
  created() {
    this.isMobile = this.$store.getters.isMobile
    this.getFlagList()
  },
  methods: {
    getFlagList() {
      flagApi.getFlagList().then(res => {
        for (const i in res.data) {
          const str = res.data[i].content.split('|')
          const obj = []
          let ind = 0
          for (const j in str) {
            const str1 = str[j].split('/')
            const st = {}
            str1.forEach((item, index) => {
              st['index' + index] = item
            })
            obj[ind] = st
            ind += 1
          }
          res.data[i].content = obj
        }
        this.flagList = res.data
      })
    },
    confirm(e) {
      console.log(e)
      this.$message.success('Click on Yes')
    },
    cancel(e) {
      console.log(e)
      this.$message.error('Click on No')
    },
    primaryComment() {
      flagApi.setFlag(this.flag).then(res => {
        this.getFlagList()
      })
    }
  }
}
</script>

<style scoped>
.flag-content{
    margin: 20px 10%;
    width: 80%;
    height: 100%;
}
.flag-timeline{
    margin-top: 30px;
}
.flag-link {
    position: relative;
    color: #555;
    border-bottom: none;
    line-height: 1.2;
}
.flag-link:hover {
    color: blue;
}
</style>
