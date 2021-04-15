<template>
  <el-table
    v-loading="loading"
    :data="page.list"
    border
    style="width: 100%"
  >
    <el-table-column
      label="考核批次"
      width="370"
      align="center"
    >
      <template #default="scope">
        <span style="margin-left: 10px">{{ scope.row.typeName }}</span>
      </template>
    </el-table-column>
    <el-table-column
      label="教师姓名"
      width="180"
      align="center"
    >
      <template #default="scope">
        <span style="margin-left: 10px">{{ scope.row.username }}</span>
      </template>
    </el-table-column>
    <el-table-column
      label="创建者"
      width="180"
      align="center"
    >
      <template #default="scope">
        <span style="margin-left: 10px">{{ scope.row.loginName }}</span>
      </template>
    </el-table-column>
    <el-table-column
      label="创建时间"
      width="280"
      align="center"
    >
      <template #default="scope">
        <span style="margin-left: 10px">{{ scope.row.createdTime }}</span>
      </template>
    </el-table-column>
    <el-table-column
      label="考核结果"
      width="150"
      align="center"
    >
      <template #default="scope">

        <el-tag
          v-if="scope.row.result === 'Y'"
          type="success"
          effect="plain"
        >
          考核通过
        </el-tag>
        <el-tag
          v-if="scope.row.result === 'N'"
          type="danger"
          effect="plain"
        >
          未通过
        </el-tag>
      </template>
    </el-table-column>
    <el-table-column label="操作" align="center">
      <template #default="scope">
        <el-button size="mini" type="success" @click="handleEdit(scope.$index, scope.row)">查看考核报告</el-button>
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
import AssessApi from '@/apis/assess/assess'

export default {
  name: 'AssessForm',
  data() {
    return {
      page: {
        currentPage: 1, // 当前页
        pageSize: 10, // 每页显示条数
        totalPage: 0, // 总页数
        totalCount: 0, // 总条数
        params: {}, // 查询参数对象
        list: [], // 数据
        sortColumn: 'created_time', // 排序列
        sortMethod: 'asc' // 排序方式
      },
      Book: {
        assessId: '',
        username: ''
      },
      loading: true
    }
  },
  created() {
    this.getByPage()
  },
  methods: {
    getByPage() {
      AssessApi.getByPage(this.page).then(res => {
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
