/// <reference types="Cypress" />

describe('My tables  Test Suite', function() {
it('practice table  ',function(){

    cy.visit("https://rahulshettyacademy.com/AutomationPractice/")

/*
* use this method to git the second column of table then search for text 
*/ 
cy.get("tr td:nth-child(2)").each(($el, index, $list) => {

    const text = $el.text()

if(text.includes("QA Expert Course :Software Testing + Bugzilla + SQL + Agile	"))
 {
const message =  cy.get("tr td:nth-child(2)").eq(index).next().text()
message.should.be.equal("25")
cy.log(message)

}
})

cy.get("tr td:nth-child(2)").each(($el, index, $list) => {

    const text = $el.text()

if(text.includes("Advanced Selenium Framework Pageobject, TestNG, Maven, Jenkins,C"))
 {
 cy.get("tr td:nth-child(2)").eq(index).next().then(function(price){
    const priceText =price.text()

    expect(priceText).to.equal("20")
    cy.log(priceText)
 })


}
})
})
})