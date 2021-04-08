<template>
  <el-table
    v-loading="loading"
    :data="page.list"
    border
    style="width: 100%"
  >
    <el-table-column
      label="项目编号"
      width="170"
      align="center"
    >
      <template #default="scope">
        <span style="margin-left: 10px">{{ scope.row.projectXid }}</span>
      </template>
    </el-table-column>
    <el-table-column
      label="项目名称"
      width="350"
      align="center"
    >
      <template #default="scope">
        <span style="margin-left: 10px">{{ scope.row.projectName }}</span>
      </template>
    </el-table-column>
    <el-table-column
      label="项目来源"
      width="180"
      align="center"
    >
      <template #default="scope">
        <span style="margin-left: 10px">{{ scope.row.source }}</span>
      </template>
    </el-table-column>
    <el-table-column
      label="项目概述"
      width="280"
      align="center"
    >
      <template #default="scope">
        <span style="margin-left: 10px">{{ scope.row.summary }}</span>
      </template>
    </el-table-column>
    <el-table-column
      label="立项时间"
      width="250"
      align="center"
    >
      <template #default="scope">
        <span style="margin-left: 10px">{{ scope.row.projectTime }}</span>
      </template>
    </el-table-column>
    <el-table-column
      label="审核结果"
      width="150"
      align="center"
    >
      <template #default="scope">
        <span style="margin-left: 10px">{{ scope.row.reviewResult }}</span>
      </template>
    </el-table-column>
    <el-table-column label="操作" align="center">
      <template #default="scope">
        <el-button
          size="mini"
          @click="handleEdit(scope.$index, scope.row)"
        >编辑</el-button>
        <el-button
          size="mini"
          type="danger"
          @click="handleDelete(scope.$index, scope.row)"
        >删除</el-button>
      </template>
    </el-table-column>
  </el-table>
</template>

<script>
import ProjectApi from '@/apis/achievement/project/project'

export default {
  name: 'Paper',
  data() {
    return {
      page: {
        currentPage: 1, // 当前页
        pageSize: 10, // 每页显示条数
        totalPage: 0, // 总页数
        totalCount: 0, // 总条数
        params: {}, // 查询参数对象
        list: [], // 数据
        sortColumn: 'project_time', // 排序列
        sortMethod: 'asc' // 排序方式
      },
      Project: {
        projectId: '',
        projectXid: '',
        projectName: ''
      },
      loading: true
    }
  },
  created() {
    this.getByPage()
  },
  methods: {
    getByPage() {
      ProjectApi.getByPage(this.page).then(res => {
        this.page = res.data
        this.loading = false
      })
    },
    handleEdit(index, row) {
      console.log(index, row)
    },
    handleDelete(index, row) {
      console.log(index, row)
    }
  }
}
</script>

<style scoped>

</style>
