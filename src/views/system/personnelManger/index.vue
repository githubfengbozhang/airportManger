<!--
 * @Author: fengbozhang
 * @Date: 2019-10-28 14:36:23
 * @LastEditors: fengbozhang
 * @LastEditTime: 2019-11-05 10:45:55
 -->
<template>
  <div class="app-container">
    <div class="filter-container">
      <el-button v-waves class="filter-item" type="primary" icon="el-icon-edit-outline" @click="addDialog">
        新增人员
      </el-button>
    </div>
    <el-table
      :key="tableKey"
      v-loading="listLoading"
      :data="list"
      border
      fit
      highlight-current-row
      style="width: 100%;"
      @sort-change="sortChange"
    >
      <el-table-column align="center" label="ID" width="200">
        <template slot-scope="scope">
          {{ scope.row.id }}
        </template>
      </el-table-column>
      <el-table-column label="手机号">
        <template slot-scope="scope">
          {{ scope.row.loginName }}
        </template>
      </el-table-column>
      <el-table-column label="姓名" width="110" align="center">
        <template slot-scope="scope">
          <span>{{ scope.row.realName }}</span>
        </template>
      </el-table-column>
      <el-table-column label="发布人" width="110" align="center">
        <template slot-scope="scope">
          {{ scope.row.roleName }}
        </template>
      </el-table-column>
      <el-table-column sortable="custom" class-name="status-col" label="权限组" width="110" align="center">
        <template slot-scope="scope">
          <span>{{ scope.row.roleName }}</span>
        </template>
      </el-table-column>
      <el-table-column sortable="custom" align="center" prop="created_at" label="添加时间" width="200">
        <template slot-scope="scope">
          <span>{{ scope.row.rawAddTime }}</span>
        </template>
      </el-table-column>
      <el-table-column fixed="right" label="管理" align="center" width="230" class-name="small-padding fixed-width">
        <template slot-scope="{row}">
          <el-button v-if="row.status!='deleted'" size="mini" type="primary" @click="editDiglog(row.id)">
            编辑
          </el-button>
          <el-button v-if="row.status!='deleted'" size="mini" type="primary" @click="editDiglog(row.id)">
            密码重置
          </el-button>
        </template>
      </el-table-column>
    </el-table>
    <pagination v-show="total>0" :total="total" :page.sync="listQuery.page" :limit.sync="listQuery.limit" @pagination="fetchData" />
    <componeDiglog v-if="dialogFormVisible" :dialog-form-visible="dialogFormVisible" :dialog-form-id="dialogFormId" :call-back="componeVisible" @fetchData="fetchData" />
  </div>
</template>

<script>
import { backapplyList } from '@/api/userManger'
import waves from '@/directive/waves'
import Pagination from '@/components/Pagination'
import ComponeDiglog from '@/views/system/notice/dialog'
export default {
  components: { Pagination, ComponeDiglog },
  directives: { waves },
  data() {
    return {
      tableKey: 0,
      list: null,
      listLoading: true,
      listQuery: {
        page: 1,
        limit: 20,
        sort: '+id'
      },
      sortOptions: [{ label: 'ID Ascending', key: '+id' }, { label: 'ID Descending', key: '-id' }],
      total: 0,
      dialogFormVisible: false,
      dialogFormId: ''
    }
  },
  computed: {
  },
  watch: {
  },
  created() {
    this.fetchData()
  },
  methods: {
    fetchData() {
      this.listLoading = true
      const {
        createTime,
        ...listQuery
      } = this.listQuery
      console.log(createTime)
      backapplyList({ ...listQuery, router: 'PAGE_SYSLOGIN' }).then(response => {
        const { list, total } = response.object
        this.list = list
        this.total = total
        this.listLoading = false
      })
    },
    addDialog() {
      this.dialogFormId = ''
      this.dialogFormVisible = true
    },
    editDiglog(dialogId) {
      this.dialogFormVisible = true
      this.dialogFormId = dialogId + ''
    },
    componeVisible(visible) {
      this.dialogFormVisible = visible
    },
    sortChange(data) {
      const { prop, order } = data
      if (prop === 'id') {
        this.sortByID(order)
      }
    }
  }
}
</script>
