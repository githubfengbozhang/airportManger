/*
 * @Author: fengbozhang
 * @Date: 2019-10-23 13:44:17
 * @LastEditors: fengbozhang
 * @LastEditTime: 2019-10-31 15:35:21
 */
import { backapplyList } from '@/api/userManger'

const state = {
}

const mutations = {
}

const actions = {
  // user login
  backapplyList({ commit }, userInfo) {
    // const { loginName, loginPwd } = userInfo
    return new Promise((resolve, reject) => {
      backapplyList().then(response => {
        resolve()
      }).catch(error => {
        reject(error)
      })
    })
  }
}

export default {
  namespaced: true,
  state,
  mutations,
  actions
}

