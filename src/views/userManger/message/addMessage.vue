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
       <el-tag
           v-for="item in items"
           :key="item.label"
           :type="item.type"
           closable
            >
           {{ item.label }}
         </el-tag>
      </div>
  </div>
</template>
<script>
export default {
  data() {
    items: [
              { type: '', label: '用户一' },
              { type: 'success', label: '标签二' },
              { type: 'info', label: '标签三' },
              { type: 'danger', label: '标签四' },
              { type: 'warning', label: '标签五' }
            ]
  },
  created: {
  },
  methods: {
  }
}
</script>
<style lang="scss" scoped>

</style>
