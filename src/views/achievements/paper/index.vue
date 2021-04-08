<template>
  <el-table
    v-loading="loading"
    :data="page.list"
    border
    style="width: 100%"
  >
    <el-table-column
      label="论文编号"
      width="170"
      align="center"
    >
      <template #default="scope">
        <span style="margin-left: 10px">{{ scope.row.pid }}</span>
      </template>
    </el-table-column>
    <el-table-column
      label="论文名称"
      width="350"
      align="center"
    >
      <template #default="scope">
        <span style="margin-left: 10px">{{ scope.row.pname }}</span>
      </template>
    </el-table-column>
    <el-table-column
      label="第一作者"
      width="180"
      align="center"
    >
      <template #default="scope">
        <span style="margin-left: 10px">{{ scope.row.firstWriterId }}</span>
      </template>
    </el-table-column>
    <el-table-column
      label="作者列表"
      width="180"
      align="center"
    >
      <template #default="scope">
        <span style="margin-left: 10px">{{ scope.row.writers }}</span>
      </template>
    </el-table-column>
    <el-table-column
      label="发表日期-卷号"
      width="250"
      align="center"
    >
      <template #default="scope">
        <span style="margin-left: 10px">{{ scope.row.journalDate }}</span>
      </template>
    </el-table-column>
    <el-table-column
      label="扫描件名称"
      width="250"
      align="center"
    >
      <template #default="scope">
        <span style="margin-left: 10px">{{ scope.row.scanFile }}</span>
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
import PaperApi from '@/apis/achievement/paper/paper'

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
        sortColumn: 'created_time', // 排序列
        sortMethod: 'asc' // 排序方式
      },
      Paper: {
        pid: '',
        pname: '',
        firstWriterId: '',
        writers: '',
        journalDate: '',
        scanFile: ''
      },
      loading: true
    }
  },
  created() {
    this.getByPage()
  },
  methods: {
    getByPage() {
      PaperApi.getByPage(this.page).then(res => {
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
