<!--
 * @Author: fengbozhang
 * @Date: 2019-11-04 10:53:08
 * @LastEditors: fengbozhang
 * @LastEditTime: 2019-11-05 13:47:55
 -->
<template>
  <el-dialog :title="dialogTitle" :visible="formVisible" width="600px" @close="cancel">
    <el-form ref="dataForm" :rules="rules" :model="form">
      <el-form-item label="手机号码" prop="loginName" label-width="80px">
        <el-input v-model="form.loginName" placeholder="请输入手机号码" autocomplete="off" />
      </el-form-item>
      <el-form-item label="姓名" prop="realName" label-width="80px">
        <el-input v-model="form.realName" placeholder="请输入姓名" autocomplete="off" />
      </el-form-item>
      <el-form-item label="权限组" prop="roleName" label-width="80px">
        <el-input v-model="form.roleName" placeholder="请输入权限组" autocomplete="off" />
      </el-form-item>
    </el-form>
    <div slot="footer" class="dialog-footer">
      <el-button @click="cancel">取 消</el-button>
      <el-button type="primary" @click="ok">确 定</el-button>
    </div>
  </el-dialog>
</template>
<script>
import { backapplyList } from '@/api/system/notice'

export default {
  name: 'ComponeDiglog',
  props: {
    dialogFormVisible: Boolean,
    dialogFormId: {
      type: String,
      default: ''
    },
    callBack: {
      type: Function,
      default: () => {}
    }
  },
  data() {
    return {
      form: {
        id: '',
        loginName: '',
        realName: '',
        roleName: ''
      },
      formVisible: this.dialogFormVisible,
      dialogTitle: '',
      formId: this.dialogFormId,
      rules: {
        loginName: [
          { required: true, message: '请输入手机号码', trigger: 'blur' }
        ],
        realName: [
          { required: true, message: '请输入姓名', trigger: 'blur' }
        ],
        sequenceroleNameNumb: [
          { required: true, message: '请输入权限组', trigger: 'blur' }
        ]
      }
    }
  },
  created() {
    this.getNotice(this.formId)
  },
  mounted() {
    this.dialogTitle = this.dialogFormId ? '编辑人员' : '新增人员'
  },
  methods: {
    getNotice(formId) {
      if (formId) {
        backapplyList({ id: formId, router: 'GET_SYSLOGIN' })
          .then((response) => {
            debugger
            this.form = response.object
          })
      }
    },
    // 取消关闭dialog
    cancel() {
      this.formVisible = false
      this.callBack(this.formVisible)
    },
    // 提交dialog
    ok() {
      this.$refs['dataForm'].validate((vaild) => {
        if (vaild) {
          let data = this.form
          let router = 'UPDATE_SYSLOGIN'
          if (!this.formId) {
            // 新增通告
            data = (({ noticeContent, url, sequenceNumb }) => ({ noticeContent, url, sequenceNumb }))(this.form)
            router = 'ADD_SYSLOGIN'
          }
          backapplyList({ ...data, router: router })
            .then((response) => {
              this.$emit('fetchData')
              this.cancel()
              this.$message({
                type: 'info',
                message: '操作成功'
              })
            })
            .catch(() => {
              this.$message({
                type: 'info',
                message: '操作失败'
              })
            })
        }
      })
    }
  }
}
</script>
