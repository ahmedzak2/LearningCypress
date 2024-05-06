/// <reference types="Cypress" />


describe('My windows  Test Suite', function() {


    it('practice tab window ',function(){

        cy.visit("https://rahulshettyacademy.com/AutomationPractice/")
        cy.get("#opentab").invoke("removeAttr","target").click()
        cy.wait(2000)
        cy.origin("https://www.qaclickacademy.com",()=>{
            cy.get("#navbarSupportedContent a[href*='about']").click();
            cy.get(".mt-50 h2").should('contain','QAClick Academy');  
        })
    
    })
    
    it('practice tab window by using herf',function(){

        cy.visit("https://rahulshettyacademy.com/AutomationPractice/")
        cy.get("#opentab").then(function(el)
        {
         
        const url = el.prop('href')
        cy.visit(url)
        cy.origin(url,()=>{

            cy.get("div.sub-menu-bar a[href*='about']").click()
            cy.get("div.page-banner-cont").should('contain','About Us')

        })

        })
            cy.wait(2000)
            cy.visit("https://rahulshettyacademy.com/AutomationPractice/")

    })
})
