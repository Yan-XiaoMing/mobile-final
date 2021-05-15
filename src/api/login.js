import request from '../utils/request'
import {POST} from '../config/requestType';

export function registerUser(data){
  return request({
    method: POST,
    url: '/user/create',
    data
  })
}

export function userLogin(data){
  return request({
    method: POST,
    url: '/user/login',
    data
  })
}
