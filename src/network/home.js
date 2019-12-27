import {request} from './request.js'

export function getHomeMultidata() {
  return request({
    url:'api/w1/home/multidata'
  })
}
export function getHomeGoods(type,page) {
  return request({
    url:'api/w1/home/data',
    params :{
      type,
      page
    }
  })
}