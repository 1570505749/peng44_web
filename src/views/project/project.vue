<template>
  <div>
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
        width="150"
        align="center"
      >
        <template #default="scope">
          <span style="margin-left: 10px">{{ scope.row.source }}</span>
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
        label="项目状态"
        width="310"
        align="center"
      >
        <template>
          <span style="margin-left: 10px">已结题</span>
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
            @click="detail(scope.$index, scope.row)"
          >查看详情</el-button>
          <el-button
            size="mini"
            type="danger"
            @click="handleDelete(scope.$index, scope.row)"
          >删除</el-button>
        </template>
      </el-table-column>
    </el-table>
  </div>
</template>

<script>
import ProjectApi from '@/apis/achievement/project/project'
export default {
  name: 'Project',
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
    detail(index, row) {
      this.$router.push({
        path: '/project/read/' + row.projectId
      })
    },
    handleDelete(index, row) {
      console.log(index, row)
    }
  }
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
