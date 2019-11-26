/*
 * @Author: fengbozhang
 * @Date: 2019-10-23 13:44:17
 * @LastEditors: fengbozhang
 * @LastEditTime: 2019-11-01 15:12:04
 */
import request from '@/utils/request'
import qs from 'qs'

export function backapplyList(data) {
  return request({
    url: '/api/backApp/user/backapply',
    method: 'post',
    data: qs.stringify(data)
  })
}
