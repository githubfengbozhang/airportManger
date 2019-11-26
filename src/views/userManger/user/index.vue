<!--
 * @Author: fengbozhang
 * @Date: 2019-10-28 14:36:23
 * @LastEditors: fengbozhang
 * @LastEditTime: 2019-11-01 17:21:09
 -->
<template>
  <div class="app-container">
    <div class="filter-container">
      <el-input v-model="listQuery.id" placeholder="请输入ID" style="width: 200px;" class="filter-item" @keyup.enter.native="handleFilter" />
      <el-input v-model="listQuery.nickNameLike" placeholder="请输入微信昵称" style="width: 200px;" class="filter-item" @keyup.enter.native="handleFilter" />
      <el-input v-model="listQuery.phoneLike" placeholder="请输入手机号" style="width: 200px;" class="filter-item" @keyup.enter.native="handleFilter" />
      <el-date-picker
        v-model="listQuery.createTime"
        class="filter-item"
        style="width: 380px;"
        clearable
        type="monthrange"
        range-separator="至"
        start-placeholder="注册开始月份"
        end-placeholder="注册结束月份"
        @change="getCreateTime"
      />
      <el-button v-waves class="filter-item" type="primary" icon="el-icon-search" @click="handleFilter">
        Search
      </el-button>
      <!-- <el-button class="filter-item" style="margin-left: 10px;" type="primary" icon="el-icon-edit" @click="handleCreate">
        Add
      </el-button> -->
      <!-- <el-button v-waves :loading="downloadLoading" class="filter-item" type="primary" icon="el-icon-download" @click="handleDownload">
        Export
      </el-button> -->
      <!-- <el-checkbox v-model="showReviewer" class="filter-item" style="margin-left:15px;" @change="tableKey=tableKey+1">
        reviewer
      </el-checkbox> -->
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
      <el-table-column align="center" label="ID" width="95">
        <template slot-scope="scope">
          {{ scope.row.id }}
        </template>
      </el-table-column>
      <el-table-column label="微信昵称">
        <template slot-scope="scope">
          {{ scope.row.nickName }}
        </template>
      </el-table-column>
      <el-table-column label="性别" width="110" align="center">
        <template slot-scope="scope">
          <span>{{ scope.row.sex }}</span>
        </template>
      </el-table-column>
      <el-table-column label="手机号" width="110" align="center">
        <template slot-scope="scope">
          {{ scope.row.phone ? scope.row.phone: '' }}
        </template>
      </el-table-column>
      <el-table-column sortable="custom" class-name="status-col" label="创建的组" width="110" align="center">
        <template slot-scope="scope">
          <span>{{ scope.row.creatGroupCount }}</span>
        </template>
      </el-table-column>
      <el-table-column sortable="custom" align="center" prop="created_at" label="加入的组" width="200">
        <template slot-scope="scope">
          <span>{{ scope.row.joinGroupCount }}</span>
        </template>
      </el-table-column>
      <el-table-column sortable="custom" align="center" prop="created_at" label="个人的事" width="200">
        <template slot-scope="scope">
          <span>{{ scope.row.createTaskCount }}</span>
        </template>
      </el-table-column>
      <el-table-column sortable="custom" align="center" prop="created_at" label="参与的事" width="200">
        <template slot-scope="scope">
          <span>{{ scope.row.addTaskCount }}</span>
        </template>
      </el-table-column>
      <el-table-column sortable="custom" align="center" prop="created_at" label="邀请人数累计" width="200">
        <template slot-scope="scope">
          <span>{{ scope.row.inviteUserCount }}</span>
        </template>
      </el-table-column>
      <el-table-column sortable="custom" align="center" prop="created_at" label="打卡积分" width="200">
        <template slot-scope="scope">
          <span>{{ scope.row.checkInCount }}</span>
        </template>
      </el-table-column>
      <el-table-column sortable="custom" align="center" prop="created_at" label="注册日期" width="200">
        <template slot-scope="scope">
          <i class="el-icon-time" />
          <span>{{ scope.row.rawAddTime | parseTime('{y}-{m}-{d}') }}</span>
        </template>
      </el-table-column>
      <el-table-column fixed="right" label="管理" align="center" width="230" class-name="small-padding fixed-width">
        <template slot-scope="{row}">
          <el-button v-if="row.status!='deleted'" size="mini" type="danger" @click="deleteConfirm(row,'deleted')">
            删除用户
          </el-button>
        </template>
      </el-table-column>
    </el-table>
    <pagination v-show="total>0" :total="total" :page.sync="listQuery.page" :limit.sync="listQuery.limit" @pagination="fetchData" />
  </div>
</template>

<script>
import { backapplyList } from '@/api/userManger'
import waves from '@/directive/waves'
import Pagination from '@/components/Pagination'
import { parseTime } from '@/utils'

export default {
  components: { Pagination },
  directives: { waves },
  filters: {
    statusFilter(status) {
      const statusMap = {
        published: 'success',
        draft: 'gray',
        deleted: 'danger'
      }
      return statusMap[status]
    }
  },
  data() {
    return {
      tableKey: 0,
      list: null,
      listLoading: true,
      listQuery: {
        createTime: undefined,
        page: 1,
        createTimeStart: undefined,
        createTimeEnd: undefined,
        limit: 20,
        importance: undefined,
        id: undefined,
        nickNameLike: undefined,
        phoneLike: undefined,
        sort: '+id'
      },
      importanceOptions: [1, 2, 3],
      sortOptions: [{ label: 'ID Ascending', key: '+id' }, { label: 'ID Descending', key: '-id' }],
      total: 0
    }
  },
  computed: {
    createTime() {
      return this.listQuery.createTime
    }
  },
  watch: {
    createTime(value) {
      if (!value) {
        this.listQuery.createTimeStart = undefined
        this.listQuery.createTimeEnd = undefined
      }
    }
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
      backapplyList({ ...listQuery, router: 'PAGE_USERINFO' }).then(response => {
        const { list, total } = response.object
        this.list = list
        this.total = total
        this.listLoading = false
      })
    },
    handleFilter() {
      this.listQuery.page = 1
      this.fetchData()
    },
    getCreateTime(dataArray) {
      debugger
      const [createTimestart, createTimeend] = dataArray
      this.listQuery.createTimeStart = parseTime(createTimestart)
      this.listQuery.createTimeEnd = parseTime(createTimeend)
    },
    deleteConfirm(row, status) {
      this.$confirm('此操作将永久删除该用户, 是否继续?', '提示', {
        confirmButtonText: '确定',
        cancelButtonText: '取消',
        type: 'warning'
      }).then(() => {
        this.$message({
          type: 'success',
          message: '删除成功!'
        })
      }).catch(() => {
        this.$message({
          type: 'info',
          message: '已取消删除'
        })
      })
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
