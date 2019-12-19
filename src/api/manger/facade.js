import request from '@/utils/request'
import qs from 'qs'

export function facade() {
  return request({
    url: '/api/admin/flowPacket/facade',
    method: 'post'
  })
}
export function addOrUpdate(data) {
  debugger
  return request({
    url: '/api/admin/flowPacket/addOrUpdate',
    method: 'post',
    data: qs.stringify(data)
  })
}
