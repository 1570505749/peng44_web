<template>
  <div>
    <a-row type="flex" :gutter="16">
      <a-col :span="12">
        <a-card style="border-radius: 3px;min-height: 235px" :head-style="{backgroundColor:'#f39c12'}">
          <h3 slot="title" style="color: white">基于大数据的疫情防控系统关键技术研究</h3>
          <h1 style="font-size: 18px;">项目概述：</h1>
          <p style="font-size: 15px;">运用当前信息化主流技术,构建针对传染性疾病的区域疫情防控平台,实现从信息数据的收集整理,分析评价,防控预警和综合展现等系列化过程的有利支撑,进而形成及时,科学的增值化传染性疾病信息报告,支撑管理者对区内各医院,各居住区域的传染病情况进行监控,及时制定科学合理的防治策略及应对作战策略. </p>
        </a-card>
      </a-col>
      <a-col :span="12">
        <a-card style="min-height: 235px">
          <a-descriptions title="项目基本信息">
            <a-descriptions-item label="项目编号">s51sda5-sk54d-d5ad</a-descriptions-item>
            <a-descriptions-item label="当前状态">立项</a-descriptions-item>
            <a-descriptions-item label="项目来源">省教育厅</a-descriptions-item>
            <a-descriptions-item label="项目级别">省部级一般项目</a-descriptions-item>
            <a-descriptions-item label="立项时间">2021-03-01 17:37:28</a-descriptions-item>
            <a-descriptions-item label="项目负责人">Hangzhou, Zhejiang</a-descriptions-item>
            <a-descriptions-item label="项目成员">
              Hangzhou, Zhejiang
            </a-descriptions-item>
          </a-descriptions>
        </a-card>
      </a-col>
    </a-row>
    <a-divider orientation="left"><h1>项目情况</h1></a-divider>
    <a-row type="flex" justify="space-around">
      <a-col :span="10"><achievement :style="{minWidth:'200px',minHeight:'300px'}" /></a-col>
      <a-col :span="12"><workload :style="{minWidth:'200px',minHeight:'300px'}" /></a-col>
    </a-row>
    <a-divider orientation="left">论文信息</a-divider>
    <paper />
    <a-divider orientation="left">获奖信息</a-divider>
    <award />
  </div>
</template>

<script>
import Paper from '../../achievements/paper'
import Workload from './workload'
import Award from '../../achievements/award'
import Achievement from './achievement'
export default {
  name: 'Detail',
  components: { Paper, Workload, Award, Achievement }
}
</script>

<style scoped>

</style>
