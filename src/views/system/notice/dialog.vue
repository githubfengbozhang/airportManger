<!--
 * @Author: fengbozhang
 * @Date: 2019-11-04 10:53:08
 * @LastEditors: fengbozhang
 * @LastEditTime: 2019-11-04 17:00:00
 -->
<template>
  <el-dialog :title="dialogTitle" :visible="formVisible" width="600px" @close="cancel">
    <el-form ref="dataForm" :rules="rules" :model="form">
      <el-form-item label="通告内容" prop="noticeContent" label-width="80px">
        <el-input v-model="form.noticeContent" placeholder="请输入通告内容" autocomplete="off" />
      </el-form-item>
      <el-form-item label="跳转链接" prop="url" label-width="80px">
        <el-input v-model="form.url" placeholder="请输入跳转链接" autocomplete="off" />
      </el-form-item>
      <el-form-item label="排列序号" prop="sequenceNumb" label-width="80px">
        <el-input v-model="form.sequenceNumb" placeholder="请输入排列序号" autocomplete="off" />
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
        noticeContent: '',
        url: '',
        sequenceNumb: ''
      },
      formVisible: this.dialogFormVisible,
      dialogTitle: '',
      formId: this.dialogFormId,
      rules: {
        noticeContent: [
          { required: true, message: '请输入通告内容', trigger: 'blur' }
        ],
        url: [
          { required: true, message: '请输入跳转链接', trigger: 'blur' }
        ],
        sequenceNumb: [
          { required: true, message: '请输入排列序号', trigger: 'blur' }
        ]
      }
    }
  },
  created() {
    this.getNotice(this.formId)
  },
  mounted() {
    this.dialogTitle = this.dialogFormId ? '编辑通告' : '新增通告'
  },
  methods: {
    getNotice(formId) {
      if (formId) {
        backapplyList({ id: formId, router: 'GET_NOTICE' })
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
          if (!this.formId) {
            // 新增通告
            data = (({ noticeContent, url, sequenceNumb }) => ({ noticeContent, url, sequenceNumb }))(this.form)
          }
          backapplyList({ ...data, router: 'PAGE_NOTICE' })
            .then((response) => {
              this.$emit('fetchData')
              this.cancel()
              this.$message({
                type: 'info',
                message: '新增公告成功'
              })
            })
            .catch(() => {
              this.$message({
                type: 'info',
                message: '新增公告失败'
              })
            })
        }
      })
    }
  }
}
</script>
