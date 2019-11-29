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
        <el-col :xs="6" :sm="6" :md="12" :lg="12" :xl="16"><span>流量包管理</span></el-col>
        <el-col :xs="12" :sm="12" :md="8" :lg="8" :xl="4">
          <el-input
            v-model="input2"
            placeholder="请输入内容"
            prefix-icon="el-icon-search"
          />
        </el-col>
        <el-col :xs="6" :sm="6" :md="4" :lg="4" :xl="4">
          <el-button type="primary" icon="el-icon-search">搜索</el-button>
        </el-col>
      </el-row>
    </div>
    <div class="app-body clearfix">
        <div class="box-1" @click="handleClick(e)"><span>+ 新增产品</span></div>
        <div class="box-2">
          <el-card class="box-card">
            <div class="box-2-1">
              <div class="imgs"><i class="el-icon-picture"></i></div>
            </div>

            <div class="box-2-2">
              <h4>回国流量包<span>32G</span></h4>
              <ul>
                <li>一月&nbsp;<span>￥18</span></li>
                <li>一季&nbsp;<span>￥18</span></li>
                <li>半年&nbsp;<span>￥18</span></li>
                <li>一年&nbsp;<span>￥18</span></li>
              </ul>
            </div>
            <div class="box-2-3">
                <p><span>&bull;</span>上架</p>
            </div>
        </el-card>
        </div>
<div class="box-2">
          <el-card class="box-card">
            <div class="box-2-1">
              <div class="imgs"><i class="el-icon-picture"></i></div>
            </div>

            <div class="box-2-2">
              <h4>回国流量包<span>32G</span></h4>
              <ul>
                <li>一月&nbsp;<span>￥18</span></li>
                <li>一季&nbsp;<span>￥18</span></li>
                <li>半年&nbsp;<span>￥18</span></li>
                <li>一年&nbsp;<span>￥18</span></li>
              </ul>
            </div>
            <div class="box-2-3">
                <p><span>&bull;</span>上架</p>
            </div>
        </el-card>
        </div>
        <div class="box-2">
          <el-card class="box-card">
            <div class="box-2-1">
              <div class="imgs"><i class="el-icon-picture"></i></div>
            </div>

            <div class="box-2-2">
              <h4>回国流量包<span>32G</span></h4>
              <ul>
                <li>一月&nbsp;<span>￥18</span></li>
                <li>一季&nbsp;<span>￥18</span></li>
                <li>半年&nbsp;<span>￥18</span></li>
                <li>一年&nbsp;<span>￥18</span></li>
              </ul>
            </div>
            <div class="box-2-3">
                <p><span>&bull;</span>上架</p>
            </div>
        </el-card>
        </div>
        <div class="box-2">
          <el-card class="box-card">
            <div class="box-2-1">
              <div class="imgs"><i class="el-icon-picture"></i></div>
            </div>

            <div class="box-2-2">
              <h4>回国流量包<span>32G</span></h4>
              <ul>
                <li>一月&nbsp;<span>￥18</span></li>
                <li>一季&nbsp;<span>￥18</span></li>
                <li>半年&nbsp;<span>￥18</span></li>
                <li>一年&nbsp;<span>￥18</span></li>
              </ul>
            </div>
            <div class="box-2-3">
                <p><span>&bull;</span>上架</p>
            </div>
        </el-card>
        </div>
    </div>
    <div class="footer">
      <div class="total">
        <span>共计：1111</span>
      </div>
      <div class="page">
          <el-pagination
            @size-change="handleSizeChange"
            @current-change="handleCurrentChange"
            :current-page.sync="currentPage2"
            :page-sizes="[100, 200, 300, 400]"
            :page-size="100"
            background
            layout="sizes, prev, pager, next"
            :total="1000">
          </el-pagination>
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
        name: 'Userinfo',
        params: {
          id: id
        }
      })
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
  .app-body{
    width: 100%;
    }
   .box-1{
     margin-top: 60px;
     margin-left: 3%;
     width: 30%;
     height: 150px;
     border: 2px #d9d9d9 dashed;
     text-align: center;
     line-height: 150px;
     cursor:pointer;
     float: left;
   }
   .box-1 span{
     color: #929292;
   }
   .imgs{
     width: 60px;
     height: 60px;
     position: relative;
     background-color: #009dff;
     border-radius: 100px;
     }
   .imgs i{
     font-size: 30px;
     position: absolute;
     top: 16px;
     left: 15px;
     color: white;
   }
  .box-2{
    float: left;
    margin-top: 50px;
    width: 30%;
    height: 160px;
    margin-left: 3%;
    position: relative;
  }
  .clearfix:after{
    height: 0;
    content: ".";
    display: block;
    clear: both;
    visibility: hidden;
  }
  .box-2-1{
    width: 20%;
    float: left;
    height: 140px;
    margin-top: 20px;
  }
  .box-2-2{
    width: 50%;
    float: left;
    height: 160px;
    text-align: center;

  }
  .box-2-2 ul{
    color: #9e9e9e;
  }
  .box-2-2 ul li{
    margin-top: 2px;
    font-size: 13px;
    text-align: left;
  }
  .box-2-2 h4 span{
    margin-left: 20px;
  }
  .box-2-3{
    width: 30%;
    float: left;
    height: 160px;
    color: #009dff;
  }
  .box-2-3 p{
    display: block;
    text-align: right;
  }
  .box-2-3 p span{
    font-size: 30px;
    margin-right: 2px;
    vertical-align: middle;
  }
</style>
