import request from '../util/requestnotoken'


export function reqParameter() {
  return request({
    url: '/parameter',
    method: 'get',
  })
}

export function reqAddClient(data) {
  return request({
    url: '/addClient',
    method: 'post',
    data
  })
}

export function reqCompute(clientId,data) {
  return request({
    url: `/compute?clientId=${clientId}`,
    method: 'post',
    data
  })
}