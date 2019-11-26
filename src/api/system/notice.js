/*
 * @Author: fengbozhang
 * @Date: 2019-11-04 14:41:33
 * @LastEditors: fengbozhang
 * @LastEditTime: 2019-11-04 14:42:37
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
