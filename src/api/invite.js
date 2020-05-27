import request from '@/utils/request'
export function queryInviterId() {
  return request({
    url: '/oper/LoanInviteService/queryInviterId',
    data:{"UserId": "50194574"},
    method: 'post'
  })
}


export function CheckMobile(data) {
  return request({
    url: '/RegisterService/CheckMobile',
    baseURL:'/auth',
    data:{"UserId": "50194574"},
    method: 'post'
  })
}

export function SendSMSRegisterCode(data) {
  return request({
    url: '/RegisterService/SendSMSRegisterCode',
    baseURL:'/auth',
    data:{"UserId": "50194574"},
    method: 'post'
  })
}


export function SMSCodeRegister(data) {
  return request({
    url: '/RegisterService/SMSCodeRegister',
    baseURL:'/auth',
    data:{"UserId": "50194574"},
    method: 'post'
  })
}


export function getVerificationCodeByPhone(params) {
  return request({
    url: '/getVerificationCodeByPhone?mobile=${phone}',
    method: 'get'
  })
}

