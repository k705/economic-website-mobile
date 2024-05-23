import request from '../util/requestnotoken'


export function reqParameter(type) {
  return request({
    url: '/parameter?type=' + type,
    method: 'get',
  })
}

export function reqAddClient(data) {
  return request({
    url: `/addClient`,
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