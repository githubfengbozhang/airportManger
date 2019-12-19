<!--
 * @Author: fengbozhang
 * @Date: 2019-10-28 14:36:23
 * @LastEditors: fengbozhang
 * @LastEditTime: 2019-11-01 17:21:09
 -->
<template>
  <div class="app-container">
    <div class="box-left">
      <div class="ordernum">
        <h3>订单号：<span>#8888</span></h3>
        <p>订单服务：<span>回国流量包20G</span></p>
        <p>账单时间：<span>2019-10-16 11:19:34</span></p>
      </div>
      <div class="person">
        <p>购买人</p>
        <h3><span>#8888</span><span>TITIASS</span></h3>
        <p>11111@qq.com</p>
      </div>
      <div class="serinfo">
        <table>
          <tr>
            <th>订购服务</th>
            <th>流量</th>
            <th>状态</th>
            <th>价格</th>
          </tr>

          <tr>
            <td>回国流量包</td>
            <td>10G</td>
            <td>待支付</td>
            <td>￥16</td>
          </tr>
        </table>
      </div>
      <div class="paym">
        <p>支付方式</p>
        <h4>支付宝</h4>
      </div>
      <div class="discount">
        <p>优惠卷</p>
        <h4><span>SAGDSD</span><span>￥10</span></h4>
      </div>
    </div>
    <div class="line" :style="lineHeight" />
    <div class="box-right">
      <div class="bill">
        <p>账单信息</p>
        <ul>
          <li>账单金额：<span>￥16</span></li>
          <li>优惠金额：<span>￥0</span></li>
          <li class="paynum" style="border-bottom: #797979 1px solid;">支付金额：<span>￥16</span></li>
        </ul>
      </div>
      <div class="orderlog">
        <p>订单日志</p>
        <div style="height: 130px;margin-left: 25px; font-size: 20px;">
          <el-steps direction="vertical" :active="2" finish-status="success">
            <el-step title="创建订单">
              <template slot="description">
                <div class="slotd"><span>2019-10-16 11:19:34</span></div>
              </template>
            </el-step>
            <el-step title="已支付" process-status="finish">
              <template slot="description">
                <div class="slotd"><span>2019-10-16 11:19:34</span></div>
              </template>
            </el-step>
          </el-steps>
        </div>
        <div class="carinfo">
          <ul>
            <li>信用卡</li>
            <li>账号：<span>123456</span></li>
            <li>所属银行：<span>xx银行</span></li>
            <li>姓名：<span>yry</span></li>
            <li>手机号：<span>12324356</span></li>
            <li>账单流水号：<span>132424234</span></li>
          </ul>
        </div>
      </div>
    </div>
  </div>
</template>
<script>

export default {
  data() {
    return {
      lineHeight: {
        height: '800px'
      }
    }
  },
  mounted() {
  },
  created() {
    var that = this
    this.getHeight()
    window.onresize = function() {
      that.getHeight()
    }
  },
  methods: {
    handleClick(tab, event) {
      // console.log(tab, event);
    },
    getHeight() {
      var height = window.innerHeight
      height = height - 100
      this.lineHeight.height = height + 'px'
    }
  }
}
</script>
<style lang="scss" scoped>
 *{
   font-family: "宋体";
   }
.box-left{
  float: left;
  width: 60%;
  position: relative;
}
.line{
  float: left;
  margin-left:20px ;
  width: 4px;
  background-color: #f2f3f4;
}
.ordernum{
  margin-top: 30px;
}
.person{
  position:absolute;
  right: 10px;
  top: 20px;
  }
.person p{
  text-align: right;
}
.serinfo{
  width: 100%;
  height: 120px;
  margin-top: 50px;
  background-color: #f2f3f4;
}
table {
  width: 100%;
  height: 120px;
}
table tr{
  margin-top: 20px;
  text-align: center;

}
table tr th{
  border-bottom: #e4e4e4 2px solid;
  text-align: left;
  color: #7e7e7e;
  padding-left: 15px;
}
table tr td{
  text-align: left;
  font-size: 18px;
  font-weight: bold;
  padding-left: 15px;
}
.paym{
  margin-top: 50px;
}
.paym h4{
  margin-top: 20px;
}
.discount{
  margin-top: 40px;
}
.box-right{
  float: left;
  width: 35%;
  margin-left: 20px ;
}
.bill{
 height: 200px;
 width: 100%;
}
.bill p{
  margin-left: 20px;
  color: #999999;
}
.bill ul li{
  width: 100%;
  border-bottom: #e4e4e4 2px solid;
  height: 50px;
  line-height: 50px;
  font-size: 18px;
  list-style: none;
}
.bill ul li span{
  float: right;
  font-family: "微软雅黑";
}
.paynum span{
  color: #6ea8fa;
  font-weight: bold;
}
.orderlog{
  width: 100%;
  margin-top: 30px;
}
.orderlog p{
  color: #999999;
  margin-left: 20px;
}
.slotd{
  float: left;
  margin-left: 40px;
  font-size: 17px;
  position: absolute;
  top: 0;
  left: 80px;
}
.carinfo{
  margin: 20px 20px;
}
.carinfo ul li{
  list-style: none;
  margin-top: 10px;
  color: #999999;
}
</style>
