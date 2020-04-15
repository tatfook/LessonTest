/**
 * Created on 2019/12/03
 * Author: Duke
 * Description: check the package Number
 */

let testData = require('../../fixtures/data/testdata');
let pageInfo = require('../../fixtures/pages/pageInfo');
let common  = require('../../common/common');
let loginSelector = [pageInfo.loginpage.username,pageInfo.loginpage.password,pageInfo.loginpage.signinbtn];
let logoutSelector = [pageInfo.mainpage.logout,pageInfo.mainpage.logoutConfirm]



let data = [testData.signIn.account.username, testData.signIn.account.password]
let maxwaittime = 15000
let renamesite = 'new'

describe("the package content verification", function () {
  before("login by amdin", function () {
    cy.visit("/login")
    cy.get(pageInfo.loginpage.language.default).click()
    cy.get(pageInfo.loginpage.language.chinese).click() 
    cy.url().should('eq', testData.testUrl)
    cy.title().should('include', testData.testTitle) 
    cy.wait(500)  
    cy.get(pageInfo.loginpage.loginBtn).click()     
    common.login(loginSelector, data)
    common.verifyContent(pageInfo.mainpage.roles.admin,testData.signIn.expectMsg.checkStateAdmin)   
  })

  //save cookies to avoid the UI login
  beforeEach(function () {
    Cypress.Cookies.preserveOnce('token')
  })

  it("check the package total sum", function () {
    
    
    
    
  })

  



})