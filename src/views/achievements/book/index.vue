<template>
  <el-table
    v-loading="loading"
    :data="page.list"
    border
    style="width: 100%"
  >
    <el-table-column
      label="ISBN"
      width="170"
      align="center"
    >
      <template #default="scope">
        <span style="margin-left: 10px">{{ scope.row.isbn }}</span>
      </template>
    </el-table-column>
    <el-table-column
      label="书籍名称"
      width="350"
      align="center"
    >
      <template #default="scope">
        <span style="margin-left: 10px">{{ scope.row.bookName }}</span>
      </template>
    </el-table-column>
    <el-table-column
      label="出版社"
      width="180"
      align="center"
    >
      <template #default="scope">
        <span style="margin-left: 10px">{{ scope.row.press }}</span>
      </template>
    </el-table-column>
    <el-table-column
      label="出版日期"
      width="180"
      align="center"
    >
      <template #default="scope">
        <span style="margin-left: 10px">{{ scope.row.publishDate }}</span>
      </template>
    </el-table-column>
    <el-table-column
      label="科时"
      width="250"
      align="center"
    >
      <template #default="scope">
        <span style="margin-left: 10px">{{ scope.row.keshi }}</span>
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
import BookApi from '@/apis/achievement/book/book'

export default {
  name: 'Book',
  data() {
    return {
      page: {
        currentPage: 1, // 当前页
        pageSize: 10, // 每页显示条数
        totalPage: 0, // 总页数
        totalCount: 0, // 总条数
        params: {}, // 查询参数对象
        list: [], // 数据
        sortColumn: 'publish_date', // 排序列
        sortMethod: 'asc' // 排序方式
      },
      Book: {
        isbn: '',
        bookName: ''
      },
      loading: true
    }
  },
  created() {
    this.getByPage()
  },
  methods: {
    getByPage() {
      BookApi.getByPage(this.page).then(res => {
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
