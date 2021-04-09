<template>
  <el-table
    v-loading="loading"
    :data="page.list"
    border
    style="width: 100%"
  >
    <el-table-column
      label="编号"
      width="170"
      align="center"
    >
      <template #default="scope">
        <span style="margin-left: 10px">{{ scope.row.mxid }}</span>
      </template>
    </el-table-column>
    <el-table-column
      label="文件名"
      width="500"
      align="center"
    >
      <template #default="scope">
        <span style="margin-left: 10px">{{ scope.row.title }}</span>
      </template>
    </el-table-column>
    <el-table-column
      label="文件内容"
      width="600"
      align="center"
    >
      <template #default="scope">
        <a style="margin-left: 10px" :href="scope.row.info" target="_blank">{{ scope.row.contentName }}</a>
      </template>
    </el-table-column>
    <el-table-column
      label="发布时间"
      width="250"
      align="center"
    >
      <template #default="scope">
        <span style="margin-left: 10px">{{ scope.row.createdTime }}</span>
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
import ManagementApi from '@/apis/management/management'

export default {
  name: 'Management',
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
      Project: {
        mid: '',
        mXid: '',
        title: ''
      },
      loading: true
    }
  },
  created() {
    this.getByPage()
  },
  methods: {
    getByPage() {
      ManagementApi.getByPage(this.page).then(res => {
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
