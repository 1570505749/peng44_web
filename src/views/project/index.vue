<template>
  <div>
    <a-row :gutter="16">
      <a-col :span="6">
        <el-card shadow="always">
          <h1>20</h1>
          <small>项目</small>
        </el-card>
      </a-col>
      <a-col :span="6">
        <el-card shadow="always">
          <h1>8</h1>
          <small>已结项</small>
        </el-card>
      </a-col>
      <a-col :span="6">
        <el-card shadow="always">
          <h1>2</h1>
          <small>待审核</small>
        </el-card>
      </a-col>
      <a-col :span="6">
        <el-card shadow="always">
          <h1>46</h1>
          <small>与项目关联成果</small>
        </el-card>
      </a-col>
    </a-row>
    <a-divider orientation="left"><h3>项目概览</h3></a-divider>
    <a-row type="flex" justify="space-around">
      <a-col :span="18"><project-count :style="{minHeight:'300px'}" /></a-col>
    </a-row>
    <a-divider orientation="left"><h3>项目列表</h3></a-divider>
    <project />
  </div>
</template>

<script>
import Project from './project'
import ProjectCount from './project_count'
export default {
  name: 'ProjectIndex',
  components: { Project, ProjectCount }
}
</script>

<style scoped>
h1 {
  font-size: 36px;
  margin-bottom: 10px;
  font-family: inherit;
  font-weight: 500;
  line-height: 1.1;
  color: inherit
}
</style>
