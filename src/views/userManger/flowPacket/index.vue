<!--
 * @Author: fengbozhang
 * @Date: 2019-10-28 14:36:23
 * @LastEditors: fengbozhang
 * @LastEditTime: 2019-11-01 17:21:09
 -->
<template>
  <div class="app-container">
    <div class="header">
      <el-row type="flex" class="row-bg" justify="space-around">
        <el-col :span="12"><span>流量包管理</span></el-col>
        <el-col :span="6">
          <el-input v-model="input2" placeholder="请输入内容" prefix-icon="el-icon-search" />
        </el-col>
        <el-col :span="4">
          <el-button type="primary" icon="el-icon-search">搜索</el-button>
        </el-col>
      </el-row>
    </div>
    <div class="app-body clearfix">
      
     <el-row class="row-bg" >
        <el-col :span="6" class="box-1" >
          <div @click="handleClick(e)"><span>+ 新增产品</span></div>
        </el-col>
        <el-col :span="6" class="box-2" v-for="o in 7">
          <el-card class="box-card" >
            <div class="box-2-1">
              <div class="imgs"><i class="el-icon-picture"></i></div>
            </div>
            <div class="box-2-2">
              <h4>回国流量包<span style="margin-left: 20px;">32G</span></h4>
              <ul>
                <li>一月&nbsp;<span>￥18</span></li>
                <li>一季&nbsp;<span>￥45</span></li>
                <li>半年&nbsp;<span>￥88 (优惠5%)</span></li>
                <li>一年&nbsp;<span>￥1231 (优惠5%)</span></li>
              </ul>
            </div>
            <div class="box-2-3">
              <p><span style="font-size: 30px;">&bull;</span>上架</p>
            </div>
          </el-card>
        </el-col>
      </el-row>
    </div>
    <div class="footer">
      <div class="total">
        <span>共计：1111</span>
      </div>
      <div class="page">
        <el-pagination @size-change="handleSizeChange" @current-change="handleCurrentChange" :current-page.sync="currentPage2"
          :page-sizes="[100, 200, 300, 400]" :page-size="100" background layout="sizes, prev, pager, next" :total="1000">
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
        input2: '',
        test:[{name:1},{name:2},{name:3}]
      }
    },
    created: {},
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
   .app-container{
     overflow: scroll;
   }
  .header {
    border-bottom: 3px solid #f3f4f5;
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

  .tables {
    margin-top: 20px;
  }

  .footer {
    width: 100%;
    margin-top: 200px;
  }

  .total {
    margin-top: 100px;
  }

  .page {
    width: 500px;
    margin: 0 auto;
  }

  .app-body {
    margin-top: 20px;
    // overflow: hidden;
  }

  .box-1 {
    margin-top: 20px;
    margin-left: 5%;
    height: 175px;
    border: 2px #d9d9d9 dashed;
    text-align: center;
    line-height: 175px;
    cursor: pointer;
    float: left;
  }

  .box-1 span {
    color: #929292;
  }
  .box-2{
    margin-left: 5%;
    margin-top: 20px;
    height: 175px;
    position: relative;
  }
  .imgs {
    width: 60px;
    height: 60px;
    text-align: center;
    background-color: #009dff;
    border-radius: 60px;
  }

  .imgs i {
    font-size: 47px;
    margin-top: 7px;
    color: white;
  }
  .clearfix:after {
    height: 0;
    content: ".";
    display: block;
    clear: both;
    visibility: hidden;
  }
  .box-2-1{
    float: left;
    margin-top: 10px;
    width: 80px;
    height: 80px;
  }
  .box-2-2{
    float: left;
  }
  .box-2-2 ul{
    padding-left: 20px;
  }
  .box-2-2 ul li{
    color: #9e9e9e;
    font-size: 14px;
    font-style: normal;
    margin-top: 3px;
  }
  .box-2-3{
   height: 40px;
   width: 60px;
   float: left;
   position: absolute;
   top: 13px;
   right: 10px;
   color: #409EFF;
   line-height: 40px;
  }
  .box-2-3 p {
    text-align: center;
  }
  .box-2-3 p span{
    vertical-align: bottom;
  }
</style>
