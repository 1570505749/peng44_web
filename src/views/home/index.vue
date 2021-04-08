<template>
  <div :style="{paddingBottom:'52px'}" class="dashboard-container">
    <a-row :gutter="20">
      <a-col :span="6"><div class="grid-content bg-purple">
        <a-card shadow="hover">
          <div :style="{paddingBottom:'52px'}">
            <div :style="{float:'left'}"><a-avatar src="https://s1.ax1x.com/2020/09/20/w73DOK.jpg" :size="60" /></div>
            <div :style="{paddingLeft:'120px'}">
              <p>张三</p>
              <p>管理员</p>
            </div>
          </div>
          <a-divider />
        </a-card>
      </div>
      </a-col>
      <a-col :span="6">
        <a-card :style="{minWidth:'200px',minHeight:'100px'}" shadow="hover">
          <p>文章统计</p>
          <p>1,575</p>
          <p>11,561</p>
          <p>当前评论总数</p>
        </a-card>
      </a-col>
      <a-col :span="6">
        <a-card :style="{minWidth:'200px',minHeight:'100px'}" shadow="hover">
          <p>报告统计</p>
          <p>1,575</p>
          <p>11,561</p>
          <p>当前批阅总数</p>
        </a-card>
      </a-col>
      <a-col :span="6">
        <a-card :style="{minWidth:'200px',minHeight:'100px'}" shadow="hover">
          <p>通知统计</p>
          <p>1,575</p>
          <p>11,561</p>
          <p>当前任务总数</p>
        </a-card>
      </a-col>
    </a-row>
    <!--        <el-card :style="{minWidth:'60px',minHeight:'30px',float:'left'}" shadow="hover">-->
    <!--        </el-card>-->
    <a-row :gutter="20">
      <a-col :style="{margin:'20 20 20 20'}" shadow="hover">
        <a-card :style="{float:'left',width:'24%',height:'310px',marginTop:'20px'}"  shadow="hover">
          <p :style="{marginLeft:'20%'}">待填内容1</p>
          <a-divider />
        </a-card>
        <div :style="{marginLeft:'25%'}">
          <p :style="{marginLeft:'45%'}">文章/评论最近趋势</p>
          <total :style="{width:'100%',height:'300px'}" />
        </div>
      </a-col>
      <a-col div :style="{margin:'20 20 20 20'}" shadow="hover">
        <a-card :style="{float:'left',width:'24%',height:'310px',marginTop:'20px'}"  shadow="hover">
          <p :style="{marginLeft:'20%'}">待填内容2</p>
          <a-divider />
        </a-card>
        <div :style="{marginLeft:'25%'}">
          <p :style="{marginLeft:'45%'}">最近七天用户访问趋势</p>
          <access :style="{width:'100%',height:'300px'}" />
        </div>
      </a-col>
      <a-col :style="{margin:'20 20 20 20'}" shadow="hover">
        <a-card :style="{float:'left',width:'24%',height:'310px',marginTop:'20px'}"  shadow="hover">
          <p :style="{marginLeft:'20%'}">待填内容3</p>
          <a-divider />
        </a-card>
        <div :style="{marginLeft:'25%'}">
          <p :style="{marginLeft:'45%'}">班级整体人员情况</p>
          <class :style="{width:'100%',height:'300px'}" />
        </div>
      </a-col>
    </a-row>
  </div>
</template>

<script>
import Access from './access'
import Total from './total'
import Class from './class'
export default {
  name: 'Dashboard',
  components: {
    Access,
    Total,
    Class
  }
}
</script>

<style scoped>

</style>
