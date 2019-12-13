/**
 * Create on 2019/11/13
 * Author : Duke
 * Description: Login Test
 */

let testData = require('../../fixtures/data/testdata');
let pageInfo = require('../../fixtures/pages/pageInfo');
let common  = require('../../common/common');
let data = '';
let loginSelector = [pageInfo.loginpage.username,pageInfo.loginpage.password,pageInfo.loginpage.signinbtn];
let logoutSelector = [pageInfo.mainpage.logout,pageInfo.mainpage.logoutConfirm]
describe("Lesson sign In test",function () {
  before("visit the login page",function () {
    cy.visit("/login",{
      onBeforeLoad: (contentWindow) => {
        Object.defineProperty(navigator, 'language', { value: 'zh'})          
      }
    })
    cy.get(pageInfo.loginpage.language.default).click()
    cy.get(pageInfo.loginpage.language.chinese).click()   //select the Chinese language
    cy.url().should('eq', testData.testUrl)
    cy.title().should('include', testData.testTitle) 
    cy.wait(500)       
  })

  it("login by the wrong keepwork account",function(){
    data = [testData.signIn.invalidaccount.username,testData.signIn.invalidaccount.password]
    common.login(loginSelector, data)   
    common.verifyContent(pageInfo.loginpage.errorMessage,testData.signIn.expectMsg.errorMsg)                
  })

  it("login by the right keepwork account - admin", function () {
    data = [testData.signIn.account.username, testData.signIn.account.password]
    common.login(loginSelector, data) 
    common.verifyContent(pageInfo.mainpage.roles.admin,testData.signIn.expectMsg.checkStateAdmin)
    common.logout(logoutSelector)
  })

  it("switch admin to teacher", function () {
    data = [testData.signIn.account.username, testData.signIn.account.password]
    common.login(loginSelector, data)  
    common.switchRoles([pageInfo.mainpage.roles.admin,pageInfo.mainpage.roles.selectTeacher])
    cy.wait(300)
    common.verifyContent(pageInfo.mainpage.roles.teacher,testData.signIn.expectMsg.checkStateTeacher)
    common.logout(logoutSelector)
  })

  it("switch admin to student", function () {
    data = [testData.signIn.account.username, testData.signIn.account.password]
    common.login(loginSelector, data)  
    common.switchRoles([pageInfo.mainpage.roles.admin,pageInfo.mainpage.roles.selectStudent])
    cy.wait(300)
    common.verifyContent(pageInfo.mainpage.roles.student,testData.signIn.expectMsg.checkStateStudent)
    common.logout(logoutSelector)
  })

  it("login by the cellphone Number - admin", function () {
    data = [testData.signIn.bindaccount.mobile, testData.signIn.account.password]    
    common.login(loginSelector, data)        
    common.verifyContent(pageInfo.mainpage.roles.admin,testData.signIn.expectMsg.checkStateAdmin)
    common.logout(logoutSelector)
  })

  it("login by the bounded email - admin", function () {
    data = [testData.signIn.bindaccount.email, testData.signIn.account.password]    
    common.login(loginSelector, data)        
    common.verifyContent(pageInfo.mainpage.roles.admin,testData.signIn.expectMsg.checkStateAdmin)
    common.logout(logoutSelector)
  })


})