/**
 * Create on 2019/11/13
 * Author : Duke
 * Description: page Information(the page element)
 */
'use strict';


let loginpage = {
  "loginBtn":"div.org-header > ul > li:nth-child(3)",
  "username": "form > div:nth-child(2) > div > div > input",
  "password": "form > div:nth-child(3) > div > div > input",  
  "signinbtn": "form > div:nth-child(4) > div > button",
  "signupbtn": "form > div.el-form-item.operations > div > div:nth-child(2) > span",
  "resetpwdbtn": "form > div.el-form-item.operations > div > div:nth-child(1)",
  "logo": "#org-page > div > div.org-login-container > img#org-page > div > div.org-header > ul > li:nth-child(1) >img",    
  "orgname": "#org-page > div > div.org-header > ul > li:nth-child(2)",    
  "errorMessage": "div[role='alert'] > p",
  "alertWindow":{
    "Close":"body > div[class$='encrypt'] > div > div.el-dialog__header > button"
  },
  "language":{
    "default":"footer > div > div > ul > li:nth-child(6) > span > div > span",
    "chinese":"ul[id^='dropdown-menu']> li:nth-child(1)",
    "english":"ul[id^='dropdown-menu']> li:nth-child(2)"
  }
}

let mainpage = {
  "roles":{
    "admin": "div.org-admin-message > div:nth-child(1) > span",
    "teacher": "div.org-teacher-message > div:nth-child(1) > span",
    "student": "div.org-student-message > div:nth-child(1) > span",
    "selectAdmin": "ul[class$='el-popper'] > li:nth-child(1)",    
    "selectTeacher": "ul[class$='el-popper'] > li:nth-child(2)",  
    "selectStudent": "ul[class$='el-popper'] > li:nth-child(3)"
  },
  "logout": "div.org-header > ul > li:nth-child(3)",
  "logoutConfirm": "div.el-message-box__btns > button:nth-child(2) > span",
  "Admin":{
    "packages":{
      "total": "div.org-packages.org-admin-main > div.org-packages-header > div",
      "detail": "div.org-packages-item"
    }
  }
}


let registerpage = {
  "username": "form.el-form.register-dialog-form >div:nth-child(2)>div >span >div >input",
  "password": "form.el-form.register-dialog-form >div:nth-child(3)>div >div >input",
  "captcha":"form.el-form.register-dialog-form >div:nth-child(4)>div > div >div >div >input",
  "cellphone": " form[class$='register-dialog-form'] > div:nth-child(6) > div > div > input",
  "smsCode": "form > div:nth-child(7) > div > div > div[class^='send-auth-code'] > div > input",
  "sendSMScodebtn": "div[class^='send-auth-send-code'] > button",
  "policycheckbox": "div > label[class^='el-checkbox']> span > span",
  "signupbtn": "form > div:nth-child(8) > div > button",
  "error_notification": "div[role$='alert'] > p",
  "warningInfo": "form > div:nth-child(2) > div > div.el-form-item__error",
  "repeattext": "div.text-danger.ng-binding",
  "closeIcon":"#org-page > div > div.org-header > div > div > div > div.el-dialog__header > button "
}

module.exports = {registerpage, loginpage, mainpage};

