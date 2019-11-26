<!--
 * @Author: fengbozhang
 * @Date: 2019-10-28 14:36:23
 * @LastEditors: fengbozhang
 * @LastEditTime: 2019-11-05 11:58:51
 -->
<template>
  <div class="app-container">
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
      <el-table-column label="日志事件">
        <template slot-scope="scope">
          {{ scope.row.nickName }}
        </template>
      </el-table-column>
      <el-table-column label="操作人" width="110" align="center">
        <template slot-scope="scope">
          <span>{{ scope.row.sex }}</span>
        </template>
      </el-table-column>
      <el-table-column label="IP" width="110" align="center">
        <template slot-scope="scope">
          {{ scope.row.phone ? scope.row.phone: '' }}
        </template>
      </el-table-column>
      <el-table-column sortable="custom" align="center" prop="created_at" label="添加时间" width="200">
        <template slot-scope="scope">
          <i class="el-icon-time" />
          <span>{{ scope.row.rawAddTime | parseTime('{y}-{m}-{d}') }}</span>
        </template>
      </el-table-column>
    </el-table>
    <pagination v-show="total>0" :total="total" :page.sync="listQuery.page" :limit.sync="listQuery.limit" @pagination="fetchData" />
  </div>
</template>

<script>
import { backapplyList } from '@/api/system/operationLog'
import Pagination from '@/components/Pagination'
import { parseTime } from '@/utils'

export default {
  components: { Pagination },
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
