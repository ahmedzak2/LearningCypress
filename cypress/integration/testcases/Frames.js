/// <reference types="Cypress" />
/// <reference types="Cypress-iframe" />
import 'cypress-iframe'

describe('My Frames  Test Suite', function() {
    it('practice iFrame ',function(){
        cy.visit("https://rahulshettyacademy.com/AutomationPractice/")
        cy.wait(1000)
        cy.frameLoaded("#courses-iframe")
        cy.iframe().find("a[href*='mentorship']").eq(0).click()
        cy.wait(1000)
        cy.iframe().find("h1[class*=pricing-title]").should('have.length',2)


    })

})