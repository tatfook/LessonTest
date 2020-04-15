/**
 * Created on 2019/11/13
 * Author: Duke
 * Description: provide the common method
 */
let randomStr = require('randomstring');

/** 引入第三方库，随意生成数据
 * @length  - define the length of the random string
 * @charset - define the character set for the string. (default: 'alphanumeric') 
    options:{
      alphanumeric - [0-9 a-z A-Z]
      alphabetic - [a-z A-Z]
      numeric - [0-9]
      hex - [0-9 a-f]
      custom - any given characters
    }    
   @capitalization - define whether the output should be lowercase / uppercase only. (default: null) 
    options:{
      lowercase
      uppercase
    }
 */

function GenStr(length, option ='numeric'){  
  let str = randomStr.generate({ length: length, charset: option, capitalization:'lowercase'})
  return str;
}


function verifyContent(selector, expected){
  cy.get(selector).should(($val) => {
    expect($val[0].innerText).to.be.include(expected)
  })
}

function verifyIsExist(selector,expected){
  cy.get(selector).should(($val) => {
    expect($val).to.be.exist()
  })
}

function filterby(selectors,type){
  let testelements = selectors;
  cy.get(testelements[0]).trigger('mouseenter')    
  cy.get(testelements[1]).contains(type).click()
}

function logout(selectors) {
  cy.get(selectors[0]).click()
  cy.wait(100)
  cy.get(selectors[1]).click()
}

function login(selectors, data) {
  let testelements = selectors;
  let testdata = data;
  cy.get(testelements[0]).clear()
  cy.get(testelements[0]).type(testdata[0]).should('have.value', testdata[0])
  cy.get(testelements[1]).clear()
  cy.get(testelements[1]).type(testdata[1]).should('have.value', testdata[1])
  cy.get(testelements[2]).click()
}

function switchRoles(selectors){  
  cy.get(selectors[0]).click()
  cy.wait(200)
  cy.get(selectors[1]).click()
}

function signup(selectors, data) {
  let testelements = selectors;
  let testdata = data;
  if(testelements.length < 6){
    cy.get(testelements[0]).clear()
    cy.get(testelements[0]).type(testdata[0]).should('have.value', testdata[0])
    cy.get(testelements[1]).clear()
    cy.get(testelements[1]).type(testdata[1]).should('have.value', testdata[1])
    cy.get(testelements[2]).clear()
    cy.get(testelements[2]).type(testdata[2]).should('have.value', testdata[2])    
    cy.get(testelements[3]).click()    
    cy.get(testelements[4]).click()    
  }else{
    cy.get(testelements[0]).clear()
    cy.get(testelements[0]).type(testdata[0]).should('have.value', testdata[0])
    cy.get(testelements[1]).clear()
    cy.get(testelements[1]).type(testdata[1]).should('have.value', testdata[1])
    cy.get(testelements[2]).clear()
    cy.get(testelements[2]).type(testdata[2]).should('have.value', testdata[2])
    cy.get(testelements[3]).clear()
    cy.get(testelements[3]).type(testdata[3]).should('have.value', testdata[3])
    cy.wait(100) 
    cy.get(testelements[4]).click({force:true})                           
    cy.get(testelements[5]).clear()
    cy.get(testelements[5]).type(testdata[4]).should('have.value', testdata[4])
    cy.get(testelements[6]).click({force:true}) 
    cy.wait(500)             
    cy.get(testelements[7]).click() 
      
  }
  
}

module.exports = { GenStr, login, logout, signup, filterby, verifyContent, switchRoles}