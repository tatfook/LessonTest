/**
 * Created on 2019/11/13
 * Author: Duke
 * Description: Sign up test
 */

let testData = require('../../fixtures/data/testdata');
let pageInfo = require('../../fixtures/pages/pageInfo');
let common  = require('../../common/common');
let data = '';
let signupSelector = '';

describe('Lesson sign up test', function () {
  before("visit the organization homepage",function () {
    cy.visit('/index',{
      onBeforeLoad: (contentWindow) => {
        Object.defineProperty(navigator, 'language', { value: 'zh-CN'})          
      }
    })
    cy.get(pageInfo.loginpage.language.default).click()
    cy.get(pageInfo.loginpage.language.chinese).click()   //select the Chinese language
    cy.url().should('eq', testData.testUrl)
    cy.title().should('include', testData.testTitle)
  })
    
  it("use the sensitive words to sign up",function () {  
    cy.get(pageInfo.loginpage.loginBtn).click()  
    cy.get(pageInfo.loginpage.signupbtn).click()    
    cy.get(pageInfo.registerpage.username).clear()
    cy.get(pageInfo.registerpage.username).type(testData.signup.invalidaccount.username).should('have.value', testData.signup.invalidaccount.username)
    cy.get(pageInfo.registerpage.password).clear()
    cy.get(pageInfo.registerpage.warningInfo).then((text)=>{
      expect(text[0].innerText.trim()).to.be.eq(testData.signup.expectMsg.sensitiveWarning)
    })
    
  })  

  it('register with the Number account', function () {
    let username = common.GenStr(6)     
    cy.get(pageInfo.registerpage.username).clear()
    cy.get(pageInfo.registerpage.username).type(username).should('have.value', username)
    cy.get(pageInfo.registerpage.password).clear()
    cy.get(pageInfo.registerpage.warningInfo).then((text)=>{
      expect(text[0].innerText.trim()).to.be.eq(testData.signup.expectMsg.warningInfo)
    })
    
  })

  it('register with the exist account', function () {    
    //cy.get(pageInfo.loginpage.signupbtn).click()
    cy.get(pageInfo.registerpage.username).clear()
    cy.get(pageInfo.registerpage.username).type(testData.signIn.account.username).should('have.value', testData.signIn.account.username)
    cy.get(pageInfo.registerpage.password).click()
    cy.wait(500)
    cy.get(pageInfo.registerpage.warningInfo).then((text) => {
      expect(text[0].innerText.trim()).to.be.eq(testData.signup.expectMsg.repeataccount)
    })
    cy.get(pageInfo.registerpage.closeIcon).click({force:true})
  })

  it('register with the invalid SMS code', function () {
    let username = "test" + common.GenStr(5, 'alphabetic');
    signupSelector = [pageInfo.registerpage.username,pageInfo.registerpage.password,pageInfo.registerpage.captcha,pageInfo.registerpage.cellphone,pageInfo.registerpage.sendSMScodebtn,pageInfo.registerpage.smsCode,
      pageInfo.registerpage.policycheckbox,pageInfo.registerpage.signupbtn];
    data = [username, testData.signup.account.password, testData.signup.account.captcha,testData.signup.account.cellphone, testData.signup.invalidaccount.smsCode]
    cy.get(pageInfo.loginpage.loginBtn).click() 
    cy.get(pageInfo.loginpage.signupbtn).click()
    common.signup(signupSelector, data)  
    cy.wait(100)  
    cy.on('window:alert',(str)=>{  
      console.log(str) 
      expect(str).to.equal(testData.signup.expectMsg.errorSMScode)  
    })
    cy.get(pageInfo.registerpage.closeIcon).click({force:true})
  })

  // it('register with the valid SMS code',function(){    
  //   let username = common.GenStr(4, 'alphabetic') + common.GenStr(6, 'numeric')   
  //   let content = username + '\n';
  //   const ops = {
  //     flag: 'a+',
  //     encoding: 'utf8'
  //   }
  //   let logoutselector = [pageInfo.mainpage.logout,pageInfo.mainpage.logoutConfirm];
  //   cy.writeFile(testData.signup.saveFilePath, content, ops)
  //   data = [username, testData.signup.account.password, testData.signup.account.captcha, testData.signup.account.cellphone, testData.signup.account.smsCode]   
  //   cy.get(pageInfo.loginpage.loginBtn).click()
  //   cy.get(pageInfo.loginpage.signupbtn).click()
  //   common.signup(signupSelector, data)
  //   cy.wait(300)
  //   cy.get(pageInfo.loginpage.alertWindow.Close).click()
  //   common.verifyContent(pageInfo.mainpage.roles.student,testData.signIn.expectMsg.checkStateStudent)
  //   common.logout(logoutselector)
  // })

  
   
})