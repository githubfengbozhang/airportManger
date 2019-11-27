<!--
 * @Author: fengbozhang
 * @Date: 2019-10-28 14:36:23
 * @LastEditors: fengbozhang
 * @LastEditTime: 2019-11-01 17:21:09
 -->
<template>
  <div class="app-container">
    <div>
      <el-tabs v-model="activeName" @tab-click="handleClick">
        <el-tab-pane label="用户管理" name="first">
          <div class="userManger">
            <div class="userdata">

              <el-row>
                <el-col :span="6"><div class="userid"><h2><span>ID:</span>{{ userData.id }}</h2></div> </el-col>
                <el-col :span="6"><div class="useremail"><h2><span>email:</span>{{ userData.email }}</h2></div></el-col>
                <el-col :span="6" />
                <el-col :span="6" />
              </el-row>
              <el-row>
                <el-col :span="12"><div><p>用户名：{{ userData.username }}</p></div></el-col>
                <el-col :span="12"><div><p>账号状态：{{ userData.state }}</p></div></el-col>
              </el-row>

            </div>
          </div>
        </el-tab-pane>
        <el-tab-pane label="配置管理" name="second">配置管理</el-tab-pane>
        <el-tab-pane label="角色管理" name="third">角色管理</el-tab-pane>
        <el-tab-pane label="定时任务补偿" name="fourth">定时任务补偿</el-tab-pane>
      </el-tabs>
    </div>
  </div>
</template>
<script>
// import { backapplyList } from '@/api/userManger'
// import waves from '@/directive/waves'
// import Pagination from '@/components/Pagination'
// import { parseTime } from '@/utils'

export default {
  data() {
    return {
      activeName: 'first',
      userData: { id: 1, username: 'user1', email: '1235@qq.com', state: '有效', userstate: '已激活', times: '2019-06-15 22:48:47', ip: '12.200.230.122' }
    }
  },
  mounted() {
    const a = this.$route.params
    console.log(a)
  },
  methods: {
    handleClick(tab, event) {
      // console.log(tab, event);
    }
  }
}
</script>
<style lang="scss" scoped>
  .userid{
    margin-left: 44px;
  }
</style>
