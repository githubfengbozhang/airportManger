<template>
  <div class="addFlowPacket">
    <el-form ref="ruleForm" :model="ruleForm" :rules="rules" label-width="100px" class="demo-ruleForm">
      <el-row :gutter="10">
        <el-col :xs="24" :sm="24" :md="18" :lg="18" :xl="18">
          <el-form-item prop="flowClassify" label="选择分类">
            <el-radio v-model="ruleForm.flowClassify" label="1" border>回国流量包</el-radio>
            <el-radio v-model="ruleForm.flowClassify" label="2" border>高速流量包</el-radio>
          </el-form-item>
          <el-form-item prop="flowType" label="选择类型">
            <el-radio v-model="ruleForm.flowType" label="1" border>流量</el-radio>
            <el-radio v-model="ruleForm.flowType" label="2" border>增量包</el-radio>
          </el-form-item>
          <el-form-item prop="flowType" label="单价设置">
            <el-input v-model="ruleForm.priceSet" placeholder="请输入金额">
              <template slot="append">GB</template>
            </el-input>
          </el-form-item>
          <el-form-item prop="flowSpecifList" label="购买方式">
            <el-row v-for="(item1, index) in ruleForm.flowSpecifList" :key="index" :gutter="10" class="addFlowPacket-payAdd">
              <el-col :span="4">
                <el-input v-model="item1.totalFlow" placeholder="请输入流量">
                  <template slot="append">GB</template>
                </el-input>
              </el-col>
              <el-col :span="4">
                <el-input v-model="item1.price" placeholder="请输入金额">
                  <template slot="prepend">￥</template>
                </el-input>
              </el-col>
              <el-col :span="3">
                <!-- <el-select v-model="item1.discount" placeholder="请选择">
                  <el-option
                    v-for="item in options"
                    :key="item.value"
                    :label="item.label"
                    :value="item.value"
                  />
                </el-select> -->
                <el-input v-model="item1.discount" placeholder="请输入折扣" />
              </el-col>
              <el-col :span="3">
                <i class="el-icon-circle-plus-outline addFlowPacket-add-button" @click="addItem(index)" />
                <i v-if="index !== 0 || ruleForm.flowSpecifList.length>1" class="el-icon-remove-outline addFlowPacket-add-button" @click="deleteItem(index)" />
              </el-col>
            </el-row>
          </el-form-item>
          <el-form-item prop="remark" label="说明">
            <el-input
              v-model="ruleForm.remark"
              type="textarea"
              :autosize="{ minRows: 3, maxRows: 5}"
              placeholder="请输入内容"
            />
          </el-form-item>
          <el-form-item prop="status" label="上架">
            <el-select v-model="ruleForm.status" placeholder="请选择">
              <el-option
                v-for="item in options"
                :key="item.value"
                :label="item.label"
                :value="item.value"
              />
            </el-select>
          </el-form-item>
          <el-form-item>
            <el-button type="primary" @click="submit('ruleForm')">提交</el-button>
            <el-button @click="resetForm('ruleForm')">重置</el-button>
          </el-form-item>
        </el-col>
      </el-row>
    </el-form>
  </div>
</template>
<script>
import { addOrUpdate } from '@api/manger/facade'

export default {
  data() {
    const flowSpecifList = (rule, value, callback) => {
      debugger
      value.map((item, idnex) => {
        const newValue = (({ totalFlow, price, discount }) => ({ totalFlow, price, discount }))(item)
        for (const param in newValue) {
          if (Boolean(newValue[param]) === false) {
            return callback(new Error(`第将${idnex + 1}行的数据请填写完整或删除空白行`))
          } else {
            return callback()
          }
        }
      })
    }
    return {
      options: [
        {
          value: 1,
          label: '上架'
        },
        {
          value: 0,
          label: '下架'
        }
      ],
      ruleForm: {
        flowSpecifList: [{ deleted: '', totalFlow: '', price: '', discount: '' }],
        flowClassify: '',
        flowSet: '',
        flowType: '',
        priceSet: '',
        remark: '',
        status: ''
      },
      rules: {
        flowSpecifList: [
          { required: true, validator: flowSpecifList, trigger: 'blur' }
        ],
        flowClassify: [
          { required: true, message: '请选择流量包分类', trigger: 'change' }
        ],
        flowSet: [
          { required: true, message: '请填写流量设置', trigger: 'change' }
        ],
        flowType: [
          { required: true, message: '请填写流量类型', trigger: 'blur' }
        ],
        priceSet: [
          { required: true, message: '请填写单价', trigger: 'blur' }
        ],
        remark: [
          { required: true, message: '请填写说明', trigger: 'blur' }
        ],
        status: [
          { required: true, message: '请选择是否上架', trigger: 'change' }
        ]
      }
    }
  },
  methods: {
    addItem(index) {
      // this.flowSpecifList.push({ deleted: '', totalFlow: '', price: '', discount: '' })
      this.ruleForm.flowSpecifList.splice(index + 1, 0, { deleted: '', totalFlow: '', price: '', discount: '' })
    },
    deleteItem(index) {
      this.ruleForm.flowSpecifList.splice(index, 1)
    },
    submit(ruleForm) {
      this.$refs[ruleForm].validate(valid => {
        if (valid) {
          debugger
          addOrUpdate(this.ruleForm)
            .then((res) => {
              this.$message({
                type: 'info',
                message: '新增流量成功'
              })
              this.$router.push({ name: 'FlowPacket' })
            })
            .catch(() => {
              this.$message({
                type: 'info',
                message: '新增流量失败'
              })
            })
        } else {
          console.log('error submit!!')
          return false
        }
      })
    },
    resetForm(formName) {
      this.$refs[formName].resetFields()
    }
  }
}
</script>
<style lang="scss" scoped>
  .addFlowPacket{
    padding: 15px;
    &-left-title{
      margin: 10px 5px
    }
    &-add-button{
      font-size: 38px;
      color: rgba(210,210,210,1)
    }
    &-payAdd{
      padding: 10px 0
    }
    .el-radio{
      min-width: 125px;
    }
  }
</style>
