<!--
 * @Author: fengbozhang
 * @Date: 2019-11-04 16:26:59
 * @LastEditors: fengbozhang
 * @LastEditTime: 2019-11-05 10:16:24
 -->
<template>
  <div>
    <div class="top">
      功能配置
    </div>
    <el-form ref="form" :model="form" :rules="rules" class="form">
      <el-form-item label="普通会员创建小组最大值" prop="creatGroupMax" label-width="200px">
        <el-input v-model="form.creatGroupMax" placeholder="请输入普通会员创建小组最大值" />
      </el-form-item>
      <el-form-item label="高级会员创建小组最大值" prop="vipCreatGroupMax" label-width="200px">
        <el-input v-model="form.vipCreatGroupMax" placeholder="请输入高级会员创建小组最大值" />
      </el-form-item>
      <el-form-item label="普通会员加入小组最大值" prop="joinGroupMax" label-width="200px">
        <el-input v-model="form.joinGroupMax" placeholder="请输入普通会员加入小组最大值" />
      </el-form-item>
      <el-form-item label="高级会员加入小组最大值" prop="vipJoinGroupMax" label-width="200px">
        <el-input v-model="form.vipJoinGroupMax" placeholder="请输入高级会员加入小组最大值" />
      </el-form-item>
      <el-form-item label="普通小组最大成员值" prop="groupMemberMax" label-width="200px">
        <el-input v-model="form.groupMemberMax" placeholder="请输入普通小组最大成员值" />
      </el-form-item>
      <el-form-item label="高级小组最大成员值" prop="vipGroupMemberMax" label-width="200px">
        <el-input v-model="form.vipGroupMemberMax" placeholder="请输入高级小组最大成员值" />
      </el-form-item>
      <el-form-item class="button">
        <el-button type="primary" @click="submitForm('ruleForm')">保存配置</el-button>
      </el-form-item>
    </el-form>
  </div>
</template>
<script>
import { backapplyList } from '@/api/system/configuration'

export default {
  data() {
    return {
      form: {
        joinGroupMax: '',
        creatGroupMax: '',
        groupMemberMax: '',
        vipGroupMemberMax: '',
        vipJoinGroupMax: '',
        vipCreatGroupMax: ''
      },
      rules: {
        creatGroupMax: [
          { required: true, message: '请输入普通会员创建小组最大值', trigger: 'blur' }
        ],
        vipCreatGroupMax: [
          { required: true, message: '请输入高级会员创建小组最大值', trigger: 'blur' }
        ],
        joinGroupMax: [
          { required: true, message: '请输入普通会员加入小组最大值', trigger: 'blur' }
        ],
        vipJoinGroupMax: [
          { required: true, message: '请输入高级会员加入小组最大值', trigger: 'blur' }
        ],
        groupMemberMax: [
          { required: true, message: '请输入普通小组最大成员值', trigger: 'blur' }
        ],
        vipGroupMemberMax: [
          { required: true, message: '请输入高级小组最大成员值', trigger: 'blur' }
        ]
      }
    }
  },
  created() {
    backapplyList({ router: 'GET_SYSTEMCONFIG' })
      .then((response) => {
        this.form = response.object
      })
  },
  methods: {}
}
</script>
<style scoped>
  .form{
    max-width: 650px;
    padding-top: 20px
  }
  .top{
    height: 50px;
    line-height: 50px;
    border-bottom: 1px solid rgba(128,128,128,0.2);
    padding-left: 20px
  }
  .button{
    padding-left: 200px
  }
</style>
