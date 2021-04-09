<template>
  <el-table
    v-loading="loading"
    :data="page.list"
    border
    style="width: 100%"
  >
    <el-table-column
      label="获奖成果名称"
      width="450"
      align="center"
    >
      <template #default="scope">
        <span style="margin-left: 10px">{{ scope.row.information }}</span>
      </template>
    </el-table-column>
    <el-table-column
      label="奖励名称"
      width="350"
      align="center"
    >
      <template #default="scope">
        <span style="margin-left: 10px">{{ scope.row.ranking }}</span>
      </template>
    </el-table-column>
    <el-table-column
      label="颁奖单位"
      width="180"
      align="center"
    >
      <template #default="scope">
        <span style="margin-left: 10px">{{ scope.row.rewardUnit }}</span>
      </template>
    </el-table-column>
    <el-table-column
      label="科时"
      width="180"
      align="center"
    >
      <template #default="scope">
        <span style="margin-left: 10px">{{ scope.row.keshi }}</span>
      </template>
    </el-table-column>
    <el-table-column
      label="审核结果"
      width="150"
      align="center"
    >
      <template #default="scope">

        <el-tag
          v-if="scope.row.reviewResult === 'Y'"
          type="success"
          effect="plain"
        >
          审核通过
        </el-tag>
        <el-tag
          v-if="scope.row.reviewResult === 'N'"
          type="danger"
          effect="plain"
        >
          未通过
        </el-tag>
        <el-tag
          v-if="scope.row.reviewResult === 'O'"
          type="warning"
          effect="plain"
        >
          未审核
        </el-tag>
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
import AwardApi from '@/apis/achievement/award/award'

export default {
  name: 'Award',
  data() {
    return {
      page: {
        currentPage: 1, // 当前页
        pageSize: 10, // 每页显示条数
        totalPage: 0, // 总页数
        totalCount: 0, // 总条数
        params: {}, // 查询参数对象
        list: [], // 数据
        sortColumn: 'date', // 排序列
        sortMethod: 'asc' // 排序方式
      },
      Paper: {
        aid: '',
        information: ''
      },
      loading: true
    }
  },
  created() {
    this.getByPage()
  },
  methods: {
    getByPage() {
      AwardApi.getByPage(this.page).then(res => {
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
