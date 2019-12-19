<!--
 * @Author: fengbozhang
 * @Date: 2019-10-28 14:36:23
 * @LastEditors: fengbozhang
 * @LastEditTime: 2019-11-01 17:21:09
 -->
<template>
  <div class="app-container">
    <div>
      <el-row>
        <el-col :span="12">
          <p>选择分类</p>
          <el-button type="primary">回国流量包</el-button>
        </el-col>
        <el-col :span="12">
          <p>状态</p>
          <el-switch
            v-model="value1"
            width="50"
            active-text="上架"
            inactive-text="下架"
          />
        </el-col>
      </el-row>
      <el-row>
        <el-col :span="24">
          <p>选择类型</p>
          <el-button type="primary">流量</el-button>
        </el-col>
      </el-row>
      <el-row>
        <el-col :span="4">
          <p>流量设置</p>
          <el-input v-model="text" type="number" placeholder="" />
          <span>GB/月</span>
        </el-col>
        <el-col :span="4" />
      </el-row>
    </div>
    <div class="message">
      <p>消息内容</p>
      <el-input
        v-model="textarea"
        type="textarea"
        placeholder="请输入内容140字以内"
        maxlength="140"
        rows="6"
      />
    </div>
    <div class="times">
      <p>发送时间（不填写就马上发送）</p>
      <div class="block">
        <el-date-picker
          v-model="value1"
          type="datetime"
          placeholder=""
        />
      </div>
    </div>
    <div class="sendstatus clearfix">
      <p>状态</p>
      <p style="color: #a3a3a3;">待发送</p>
      <ul>
        <li><el-button type="primary">提交</el-button></li>
        <li><el-button plain>返回</el-button></li>
        <li><el-button plain>撤销</el-button></li>
      </ul>
    </div>
  </div>
</template>
<script>
export default {
  data() {
    return {
      value1: true,
      text: '',
      textarea: ''
    }
  },
  created: {
  },
  methods: {
  }
}
</script>
<style lang="scss" scoped>
.el-tag{
  margin-left: 10px;
}
.el-row{
  margin-top: 20px;
}
.el-row .el-col{
  position: relative;
}
.el-row .el-col span{
  position: absolute;
  top: 49px;
  right: -46px;
  display: block;
  height: 41px;
  width: 50px;
  line-height: 41px;
  background-color: #f5f5f5;
  border: 1.4px #e4e4e4 solid;
  color: #696969;
  border-radius: 4px;

}
.message{
  width: 40%;
  margin-top: 60px;
}
.times{
  margin-top: 60px;
}
.sendstatus{
  margin-top: 40px;
  position: relative;
}
.sendstatus ul{
  margin-top: 50px;
  position: absolute;
  top: 40px;
  left: -80px;
}
.sendstatus ul li{
  float: left;
  list-style: none;
  margin-left: 40px;
}
.clearfix:after{
  clear: both;
  content: ".";
  height: 0;
  display: block;
  visibility: hidden;
}
</style>
