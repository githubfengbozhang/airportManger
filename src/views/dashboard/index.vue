<!--
 * @Author: fengbozhang
 * @Date: 2019-10-23 13:44:17
 * @LastEditors: fengbozhang
 * @LastEditTime: 2019-11-05 14:55:44
 -->
<template>
  <div class="dashboard-container">
    <el-row :gutter="20">
      <el-col :span="6">
        <div class="dashboard-block">
          <div class="header">
            <el-col :span="12">
              <el-col :span="24">
                <div>用户新增</div>
              </el-col>
            </el-col>
            <el-col :span="12">
              <el-radio-group v-model="radio1">
                <el-radio-button label="日" />
                <el-radio-button label="周" />
                <el-radio-button label="月" />
              </el-radio-group>
            </el-col>
          </div>
          <div class="footer">
            <el-col :span="24" class="footer-header">
              <el-col :span="24">
                <div>33,555</div>
              </el-col>
            </el-col>
            <el-col :span="24">
              <el-col :span="12">
                <div>总计用户</div>
              </el-col>
              <el-col :span="12">
                <div style="float:right">88,888</div>
              </el-col>
            </el-col>
          </div>
        </div>
      </el-col>
      <el-col :span="6">
        <div class="dashboard-block">
          <div class="header">
            <el-col :span="12">
              <el-col :span="24">
                <div>活跃用户</div>
              </el-col>
            </el-col>
            <el-col :span="12">
              <el-radio-group v-model="radio1">
                <el-radio-button label="日" />
                <el-radio-button label="周" />
                <el-radio-button label="月" />
              </el-radio-group>
            </el-col>
          </div>
          <div class="footer">
            <el-col :span="24" class="footer-header">
              <el-col :span="24">
                <div>33,555</div>
              </el-col>
            </el-col>
            <el-col :span="24">
              <el-col :span="12">
                <div>最近一个月</div>
              </el-col>
              <el-col :span="12">
                <div style="float:right">88,888</div>
              </el-col>
            </el-col>
          </div>
        </div>
      </el-col>
      <el-col :span="6">
        <div class="dashboard-block">
          <div class="header">
            <el-col :span="12">
              <el-col :span="24">
                <div>事情新增</div>
              </el-col>
            </el-col>
            <el-col :span="12">
              <el-radio-group v-model="radio1">
                <el-radio-button label="日" />
                <el-radio-button label="周" />
                <el-radio-button label="月" />
              </el-radio-group>
            </el-col>
          </div>
          <div class="footer">
            <el-col :span="24" class="footer-header">
              <el-col :span="24">
                <div>666,666</div>
              </el-col>
            </el-col>
            <el-col :span="24">
              <el-col :span="12">
                <div>事情总计</div>
              </el-col>
              <el-col :span="12">
                <div style="float:right">88,888</div>
              </el-col>
            </el-col>
          </div>
        </div>
      </el-col>
      <el-col :span="6">
        <div class="dashboard-block">
          <div class="header">
            <el-col :span="12">
              <el-col :span="24">
                <div>小组新增</div>
              </el-col>
            </el-col>
            <el-col :span="12">
              <el-radio-group v-model="radio1">
                <el-radio-button label="日" />
                <el-radio-button label="周" />
                <el-radio-button label="月" />
              </el-radio-group>
            </el-col>
          </div>
          <div class="footer">
            <el-col :span="24" class="footer-header">
              <el-col :span="24">
                <div>33,555</div>
              </el-col>
            </el-col>
            <el-col :span="24">
              <el-col :span="12">
                <div>小组总计</div>
              </el-col>
              <el-col :span="12">
                <div style="float:right">88,888</div>
              </el-col>
            </el-col>
          </div>
        </div>
      </el-col>
    </el-row>
    <el-row :gutter="20" style="background:#fff;padding:16px 16px 0;margin-bottom:32px;margin:0 0 32px 0">
      <el-col :span="16">
        <line-chart :chart-data="lineChartData" />
      </el-col>
      <el-col :span="8">
        <div>
          <p>月事情数</p>
          <p class="color-gray">同上期增长</p>
          <el-progress :text-inside="true" :stroke-width="18" :percentage="80" color="rgba(142, 113, 199, 0.7)" />
        </div>
        <div>
          <p>月转化率</p>
          <p class="color-gray">同上期增长</p>
          <el-progress :text-inside="true" :stroke-width="18" :percentage="100" status="success" />
        </div>
        <div>
          <p>月小组数</p>
          <p class="color-gray">同上期增长</p>
          <el-progress :text-inside="true" :stroke-width="18" :percentage="50" status="exception" />
        </div>
      </el-col>
    </el-row>
  </div>
</template>

<script>
import { mapGetters } from 'vuex'
import LineChart from './components/LineChart'

const lineChartData = {
  newVisitis: {
    expectedData: [100, 120, 161, 134, 105, 160, 165],
    actualData: [120, 82, 91, 154, 162, 140, 145]
  },
  messages: {
    expectedData: [200, 192, 120, 144, 160, 130, 140],
    actualData: [180, 160, 151, 106, 145, 150, 130]
  },
  purchases: {
    expectedData: [80, 100, 121, 104, 105, 90, 100],
    actualData: [120, 90, 100, 138, 142, 130, 130]
  },
  shoppings: {
    expectedData: [130, 140, 141, 142, 145, 150, 160],
    actualData: [120, 82, 91, 154, 162, 140, 130]
  }
}
export default {
  name: 'Dashboard',
  components: {
    LineChart
  },
  data() {
    return {
      radio1: '日',
      lineChartData: lineChartData.newVisitis
    }
  },
  computed: {
    ...mapGetters([
      'name'
    ])
  }
}
</script>

<style lang="scss" scoped>
.dashboard-container {
  padding: 20px;
  background-color: rgba(95, 94, 94, 0.1);
  & .dashboard-block {
    background-color: rgba(255, 255, 255, 1);
    // padding: 0 !important;
    // margin: 0 10px;
  }
  & .color-gray{
    color: #99a9bf
  }
}
.header {
  min-height: 60px;
  font-size: 18px;
  display: flex;
  align-items: center;
  border-bottom: 1px solid rgba(106, 106, 106, 0.2);
}
.footer {
  min-height: 120px;
  padding-top: 20px;
  padding-bottom: 20px;
  & > .footer-header {
    min-height: 50px;
    line-height: 50px;
  }
}
.el-row {
  margin-bottom: 20px;
  margin-left: 0;
  margin-right: 0;
  &:last-child {
    margin-bottom: 0;
  }
}
.el-col {
  border-radius: 4px;
}
.bg-purple-dark {
  background: #99a9bf;
}
.bg-purple {
  background: #d3dce6;
}
.bg-purple-light {
  background: #e5e9f2;
}
.grid-content {
  min-height: 36px;
  // display: flex;
  // justify-content: space-between;
  // flex-direction: row
}
.row-bg {
  padding: 10px 0;
  background-color: #f9fafc;
}
</style>
