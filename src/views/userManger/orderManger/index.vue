<!--
 * @Author: fengbozhang
 * @Date: 2019-10-28 14:36:23
 * @LastEditors: fengbozhang
 * @LastEditTime: 2019-11-01 17:21:09
 -->
<template>
  <div class="app-container">
    <div class="header">
      <el-row :gutter="10">
        <el-col :xs="6" :sm="6" :md="12" :lg="12" :xl="16"><span>订单管理</span></el-col>
        <el-col :xs="12" :sm="12" :md="8" :lg="8" :xl="4">
          <el-input
            v-model="input2"
            placeholder="ID/邮箱/用户名"
            prefix-icon="el-icon-search"
          />
        </el-col>
        <el-col :xs="6" :sm="6" :md="4" :lg="4" :xl="4">
          <el-button type="primary" icon="el-icon-search">搜索</el-button>
        </el-col>
      </el-row>
    </div>
    <div class="totals clearfix">
      <ul>
        <li>订单：<span>{{ oderdata.ordernum }}</span></li>
        <li>成交订单：<span>{{ oderdata.complete }}</span></li>
        <li>成交金额:￥<span>{{ oderdata.money }}</span></li>
        <li>订单金额:￥<span>{{ oderdata.ordermoney }}</span></li>
      </ul>
    </div>
    <div class="app-body">
      <div class="expotbu">
        <el-button type="primary">导出<i class="el-icon-upload el-icon--right" /></el-button>
      </div>
      <div class="tables">
        <el-table
          :data="tableData"
          height="350"
          border
          style="width: 100%"
          @selection-change="handleSelectionChange"
        >
          <el-table-column
            type="selection"
            width="50"
            align="center"
          />
          <el-table-column
            prop="date"
            label="订单号"
            width="180"
            align="center"
          />
          <el-table-column
            prop="name"
            label="订购项目"
            width="180"
            align="center"
          />
          <el-table-column
            prop="name"
            width="180"
            label="类容"
            align="center"
          />
          <el-table-column
            prop="name"
            label="创建时间"
            align="center"
          />
          <el-table-column
            prop="name"
            label="支付时间"
            align="center"
          />
          <el-table-column
            prop="name"
            label="订购用户"
            align="center"
          />
          <el-table-column
            prop="name"
            label="订购金额"
            align="center"
          />
          <el-table-column
            prop="state"
            label="优惠金额"
            align="center"
          />
          <el-table-column
            prop="state"
            label="支付金额"
            align="center"
          />
          <el-table-column
            prop="state"
            label="支付状态"
            align="center"
          />
          <el-table-column
            fixed="right"
            label="操作"
            width="100"
            align="center"
          >
            <template slot-scope="scope">
              <el-button type="text" size="small" @click="handleClick(scope.row)">查看</el-button>
            </template>
          </el-table-column>
        </el-table>
      </div>
    </div>
    <div class="footer">
      <div class="total">
        <span>共计：1111</span>
      </div>
      <div class="page">
        <el-pagination
          :current-page.sync="currentPage2"
          :page-sizes="[100, 200, 300, 400]"
          :page-size="100"
          layout="sizes, prev, pager, next"
          :total="1000"
          @size-change="handleSizeChange"
          @current-change="handleCurrentChange"
        />
      </div>
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
        province: '上海',
        city: '普陀区',
        address: '上海市普陀区金沙江路 1518 弄',
        zip: 200333,
        checked: true,
        state: 1
      }, {
        date: '2016-05-04',
        name: '王小虎',
        province: '上海',
        city: '普陀区',
        address: '上海市普陀区金沙江路 1517 弄',
        zip: 200333,
        checked: true,
        state: 2
      }, {
        date: '2016-05-01',
        name: '王小虎',
        province: '上海',
        city: '普陀区',
        address: '上海市普陀区金沙江路 1519 弄',
        zip: 200333,
        checked: true,
        state: 3
      }, {
        date: '2016-05-03',
        name: '王小虎',
        province: '上海',
        city: '普陀区',
        address: '上海市普陀区金沙江路 1516 弄',
        zip: 200333,
        checked: true
      }],
      oderdata: { ordernum: 121, complete: 121, money: 10000.00, ordermoney: 10000.00 },
      multipleSelection: [],
      input2: ''
    }
  },
  created: {
  },
  methods: {
    handleClick(row) {
      console.log(row)
      var id = '123'
      this.$router.push({
        name: 'OrderInfo',
        params: {
          id: id
        }
      })
    },
    handleSelectionChange(val) {
      this.multipleSelection = val
    }
  },
  colorChange(e) {
    // for(let i=0;i<)
  }
}
</script>
<style lang="scss" scoped>
  .header{
      border-bottom:3px solid #f3f4f5;
      line-height: 30px;
  }
   .el-row {
    margin-bottom: 20px;
    &:last-child {
      margin-bottom: 10px;
    }
  }
  .el-col {
    border-radius: 4px;
  }
  .expotbu{
    margin-top: 5px;
  }
  .tables{
    margin-top: 20px;
  }
  .footer{
    width: 100%;
    margin-top: 200px;
  }
  .total{
    margin-top: 100px;
  }
  .page{
    width: 500px;
    margin: 0 auto;
  }
  .totals{
    margin: 0;
  }
  .totals ul li{
    color: blue;
    margin: 10px 10px 30px 30px;
    float: left;
  }
  .clearfix:after{
    clear: both;
    display: block;
    content: ".";
    visibility: hidden;
    height: 0;
  }
</style>
