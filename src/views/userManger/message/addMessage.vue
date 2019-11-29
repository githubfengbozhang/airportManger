<!--
 * @Author: fengbozhang
 * @Date: 2019-10-28 14:36:23
 * @LastEditors: fengbozhang
 * @LastEditTime: 2019-11-01 17:21:09
 -->
<template>
  <div class="app-container">
    <div>
      <p>选择用户&nbsp;&nbsp;&nbsp;<el-button type="text">添加</el-button></p>
      <div class="tag-group">
        <el-tag
          v-for="item in items"
          :key="item.label"
          :type="item.type"
          closable
          effect="plain"
        >
          {{ item.label }}
        </el-tag>
      </div>
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
      text: '',
      textarea: '',
      items: [{ type: '', label: '标签一' },
        { type: 'success', label: '标签二' },
        { type: 'info', label: '标签三' },
        { type: 'danger', label: '标签四' },
        { type: 'warning', label: '标签五' }],
      value1: ''
    }
  },
  created: {
  },
  methods: {
  }
}
</script>
<style lang="scss" scoped>
  *{
    color: #4e4e4e;
  }
.el-tag{
  margin-left: 10px;
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
