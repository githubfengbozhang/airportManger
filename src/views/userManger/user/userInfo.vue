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
        <el-tab-pane label="用户信息" name="first">
          <div class="userManger">
            <div class="userdata">
              <el-row>
                <el-col :span="6"><div class="userid"><h2><span>ID:</span>{{ userData.id }}</h2></div> </el-col>
                <el-col :span="6"><div class="useremail"><h2><span>邮箱:</span>{{ userData.email }}</h2></div></el-col>
                <el-col :span="6" />
                <el-col :span="6" />
              </el-row>
              <el-row>
                <el-col :span="12"><div><p>用户名：{{ userData.username }}</p></div></el-col>
                <el-col :span="12"><div><p>账号状态：{{ userData.state }}</p></div></el-col>
              </el-row>
              <el-row>
                <el-col :span="12"><div><p>邀请人：{{ userData.username }}</p></div></el-col>
                <el-col :span="12"><div><p>用户状态：{{ userData.userstate }}</p></div></el-col>
              </el-row>
              <el-row>
                <el-col :span="12"><div><p>注册时间：{{ userData.times }}</p></div></el-col>
                <el-col :span="12"><div><p>注册IP：{{ userData.ip }}</p></div></el-col>
              </el-row>
            </div>
            <div class="userService">
              <h2>用户服务</h2>
              <div class="send">
                <el-button>赠送</el-button>
              </div>
              <div v-for="(item,i) in userSer">
                <div class="userlist">
                  <div class="list clearfix">
                    <ul>
                      <li><p>服务：{{item.name}}</p></li>
                      <li><p>有效期：{{item.endtime}}</p></li>
                    </ul>
                  </div>
                  <div class="details">
                      <p>本月流量使用情况：<span>{{item.startime}}</span>~<span>{{item.endtime}}</span></p>
                      <div class="progressbar">
                          <div class="barname">套餐(32G)</div>
                          <div class="bar"> <el-progress :text-inside="true" :stroke-width="26" :percentage="70"></el-progress></div>
                          <div class="baruse">4GB13.87M/32GB</div>
                       </div>
                       <div class="progressbar">
                           <div class="barname">套餐(32G)</div>
                           <div class="bar"> <el-progress :text-inside="true" :stroke-width="26" :percentage="70"></el-progress></div>
                           <div class="baruse">4GB13.87M/32GB</div>
                        </div>
                  </div>
                  </div>
              </div>
            </div>
          </div>
        </el-tab-pane>
        <el-tab-pane label="用户订单" name="second">
          <div class="tables">
            <el-table
              :data="userSer"
              height="650px"
              border
              style="width: 100%"
            >
              <el-table-column
                prop="id"
                label="订单号"
                width="180"
              />
              <el-table-column
                prop="name"
                label="订购项目"
                width="180"
              />
              <el-table-column
                prop="name"
                width="180"
                label="内容"
              />
              <el-table-column
                prop="startime"
                label="创建时间"
              />
              <el-table-column
                prop="endtime"
                label="支付时间"
              />
              <el-table-column
                prop="money"
                label="订单金额"
              />
              <el-table-column
                prop="name"
                label="支付状态"
              />
              <el-table-column
                fixed="right"
                label="操作"
                width="100"
              >
                <template slot-scope="scope">
                  <el-button type="text" size="small" @click="handleClick(scope.row)">查看</el-button>
                </template>
              </el-table-column>
            </el-table>
            <div class="block">
                <el-pagination
                  @size-change="handleSizeChange"
                  @current-change="handleCurrentChange"
                  :current-page.sync="currentPage2"
                  :page-sizes="[100, 200, 300, 400]"
                  :page-size="100"
                  layout="sizes, prev, pager, next"
                  :total="1000">
                </el-pagination>
              </div>
          </div>
        </el-tab-pane>
        <el-tab-pane label="用户日志" name="third">
          <div class="log">
          <el-table
              :data="tableData"
              border
              style="width: 100%">
              <el-table-column
                prop="date"
                label="时间"
               >
              </el-table-column>
              <el-table-column
                prop="name"
                label="IP"
                >
              </el-table-column>
              <el-table-column
                prop="address"
                label="动作">
              </el-table-column>
              <el-table-column
                prop="address"
                label="操作人">
              </el-table-column>
            </el-table>
            <div class="block2">
                <el-pagination
                  @size-change="handleSizeChange"
                  @current-change="handleCurrentChange"
                  :current-page.sync="currentPage2"
                  :page-sizes="[100, 200, 300, 400]"
                  :page-size="100"
                  layout="sizes, prev, pager, next"
                  :total="1000">
                </el-pagination>
              </div>
             </div>
        </el-tab-pane>
        <el-tab-pane label="用户邀请" name="fourth">
          <div class="userinv">
          <el-table
              :data="tableData"
              border
              style="width: 100%">
              <el-table-column
                prop="date"
                label="邀请用户"
               >
              </el-table-column>
              <el-table-column
                prop="name"
                label="注册时间"
                >
              </el-table-column>
              <el-table-column
                prop="address"
                label="购买套餐">
              </el-table-column>
              <el-table-column
                prop="address"
                label="激活时间">
              </el-table-column>
              <el-table-column
                prop="address"
                label="状态">
              </el-table-column>
            </el-table>
            <div class="block3">
                <el-pagination
                  @size-change="handleSizeChange"
                  @current-change="handleCurrentChange"
                  :current-page.sync="currentPage2"
                  :page-sizes="[100, 200, 300, 400]"
                  :page-size="100"
                  layout="sizes, prev, pager, next"
                  :total="1000">
                </el-pagination>
              </div>
              </div>
        </el-tab-pane>
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
      tableData: [{
                date: '2016-05-02',
                name: '王小虎',
                address: '上海市普陀区金沙江路 1518 弄'
              }, {
                date: '2016-05-04',
                name: '王小虎',
                address: '上海市普陀区金沙江路 1517 弄'
              }, {
                date: '2016-05-01',
                name: '王小虎',
                address: '上海市普陀区金沙江路 1519 弄'
              }, {
                date: '2016-05-03',
                name: '王小虎',
                address: '上海市普陀区金沙江路 1516 弄'
              }],
      customColor: '#409eff',
      activeName: 'first',
      userData: { id: 1, username: 'user1', email: '1235@qq.com', state: '有效', userstate: '已激活', times: '2019-06-15 22:48:47', ip: '12.200.230.122' },
      userSer:[{id:1,name:"回国流量包",startime:"2019-06-15 22:48:47",endtime:"2019-06-15 22:48:47",combo:"32G",addp:"10G",combouse:"4G",addpu:"4G",money:'￥10'},
               {id:2,name:"回国流量包32*一年",startime:"2019-06-15 22:48:47",endtime:"2019-06-15 22:48:47",combo:"32G",addp:"10G",combouse:"4G",addpu:"4G",money:'￥10'}]
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
  *{font-family: "微软雅黑";list-style: none;}
  .userid{
    margin-left: 44px;
  }
  .el-row{
    margin-left: 100px;
  }
  .send{
    float: right;
    margin-right: 50px;
  }
  .userdata{
    border-bottom: #f3f4f5 3px solid;
  }
  .userlist{
    padding-left: 20px;
  }
  .list ul li{
    float: left;
    padding: 10px;
    list-style: none;
  }
  .clearfix:after{
    content: ".";
    height: 0;
    visibility: hidden;
    clear: both;
  }
  .details{
    width: 100%;
    background-color:#F2F2F2 ;
    padding: 20px;
    color: #767676;
  }
  .progressbar{
    position: relative;
    margin-top: 40px;
  }
  .progressbar .barname{
    float: left;
    margin-left: 7%;
  }
  .progressbar .bar{
    width: 60%;
    margin: 0 auto;
  }
  .progressbar .baruse{
    position: absolute;
    top: 0;
    right: 100px;
  }
  .tables{
    margin-top: 40px;
    width: 100%;
    position: relative;
  }
  .el-table-column{
    text-align: center;
    vertical-align: middle;
  }
  .log, .userinv{
    height: 700px;
    position: relative;
  }
  .block, .block2, .block3{
    position: absolute;
    right: 100px;
    bottom: 50px;
  }

</style>
