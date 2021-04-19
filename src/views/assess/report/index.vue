<template>
  <div>
    <div style="width: 100%;height: 100%"><h1>张三 - 湖南信息学院二级学院（部）2020年度科研工作考核</h1><p>创建者：李四 | 创建时间：2021-04-12 11:08:18</p></div>
    <a-divider orientation="left">考核信息</a-divider>
    <a-row type="flex">
      <a-col :flex="2">
        <a-descriptions :column="2" bordered>
          <a-descriptions-item label="完成科研处下达申报指标100%、80-99%">1000科时</a-descriptions-item>
          <a-descriptions-item label="是否达到要求">是</a-descriptions-item>
          <a-descriptions-item label="省级及以上项目立项">2500科时</a-descriptions-item>
          <a-descriptions-item label="是否达到要求">是</a-descriptions-item>
          <a-descriptions-item label="E级及以上级别论文">4500科时</a-descriptions-item>
          <a-descriptions-item label="是否达到要求">是</a-descriptions-item>
          <a-descriptions-item label="百佳出版社独著、第一著、第二著；其他出版社独著、第一著">2500科时</a-descriptions-item>
          <a-descriptions-item label="是否达到要求">是</a-descriptions-item>
          <a-descriptions-item label="国家发明、实用新型、外观设计第一、二发明人">2500科时</a-descriptions-item>
          <a-descriptions-item label="是否达到要求">是</a-descriptions-item>
          <a-descriptions-item label="哲学社会科学成果奖、自然科学成果奖、创作作品排名前三">
            5000科时
          </a-descriptions-item>
          <a-descriptions-item label="是否达到要求">是</a-descriptions-item>
          <a-descriptions-item label="获批立项建设的校级及以上科研平台（含学科、基地、中心、实验室等）">10000科时</a-descriptions-item>
          <a-descriptions-item label="是否达到要求">是</a-descriptions-item>
          <a-descriptions-item label="总计">28000科时</a-descriptions-item>
          <a-descriptions-item label="考核是否通过">是</a-descriptions-item>
          <a-descriptions-item label="二级学院(部)排名">2</a-descriptions-item>
          <a-descriptions-item label="学校排名">4</a-descriptions-item>
        </a-descriptions>
      </a-col>
    </a-row>
    <a-divider orientation="left">科研项目列表</a-divider>
    <project />
    <a-divider orientation="left">科研成果-获奖列表</a-divider>
    <award />
    <a-divider orientation="left">科研成果-论文列表</a-divider>
    <paper />
    <a-divider orientation="left">科研成果-著作列表</a-divider>
    <book />
  </div>
</template>
<script>
import Paper from '../../achievements/paper'
import Award from '../../achievements/award'
import Project from '../../project/project'
import Book from '../../achievements/book'
export default {
  name: 'AssessReport',
  components: { Paper, Award, Project, Book}
}
</script>

<style scoped>
h1 {
  font-size: 30px;
  font-family: inherit;
  font-weight: 500;
  line-height: 1.1;
  color: inherit;
  margin: 0 auto;
  text-align: center;
}
p {
  padding-top: 10px;
  margin: 0 auto;
  text-align: center;
}
</style>
