/**
 * Create on 2019/11/13
 * Author : Duke
 * Description: test data
 */

'use strict';

const Info = {
  testUrl: 'https://keepwork.com/org/newchild/login',
  testTitle:'KeepWork',  
  signup: {
    emptyaccount: {
      username: '',
      password: '',
      cellphone: '',
      smsCode: ''
    },
    invalidaccount: {
      username: 'a4u',
      password: '123',
      cellphone: '9999',
      smsCode: '1111'
    },
    numberaccount: {
      username: 1111
    },
    accountrules: {
      username: '名字规则'
    },
    account: {
      username: 'test001',
      password: '123456',
      captcha: 'keep',
      cellphone: '15219998888',
      smsCode: '123456'
    },
    expectMsg: {
      warningInfo: '用户名必须以字母开头',
      sensitiveWarning: '您输入的内容包含敏感词！',
      notificationMsg: '您输入的内容不符合互联网安全规范，请修改',
      errorSMScode: '发生创建异常，请重试',
      repeataccount: '用户名已存在'
    },
    saveFilePath:'./accountInfo.txt'
  },
  signIn: {
    emptyaccount: {
      username: '',
      password: ''
    },
    invalidaccount: {
      username: '11',
      password: '123'
    },
    numberaccount: {
      username: 110111,
      password: '110111'
    },
    account: {
      username: 'autotest',
      password: 'auto123456'
    },
    bindaccount: {
      mobile: '15219998888',
      email: '138@qq.com'
    },
    expectMsg: {
      errorMsg: '账号密码错误',
      checkStateAdmin:'管理员',
      checkStateTeacher:'教师',
      checkStateStudent:'学生'
    }
  }  
}

module.exports = Info;