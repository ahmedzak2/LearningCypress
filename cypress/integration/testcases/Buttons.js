/// <reference types="Cypress" />

describe('My button Test Suite', function() {

it('practice radio button ',function(){

    cy.visit("https://rahulshettyacademy.com/AutomationPractice/")
    cy.get("#checkBoxOption1").check().should("be.checked").and('have.value',"option1")
    cy.get("#checkBoxOption1").uncheck().should("not.be.checked")
    // to check all element of radio button
    cy.get("input[type=checkbox]").check()
    cy.get("input[type=checkbox]").uncheck()
    // to check specific element 
    cy.get("input[type=checkbox]").check(["option1","option2"])
    cy.wait(5000);  // Waits for 1000 milliseconds (5 second)

})

it('practice static button ',function(){
    cy.visit("https://rahulshettyacademy.com/AutomationPractice/")

// Assuming the correct value is "option2" as per your HTML
cy.get('select').select('option2').should('have.value', 'option2');
cy.wait(5000);  // Waits for 1000 milliseconds (5 second)

cy.get("#autocomplete").type("eg")

cy.get(".ui-menu-item div")

// for each element to found the text 

/**
 * it use to retrieve  all options then choose what word you search for it
 */
cy.get(".ui-menu-item div").each(($el, index, $list) => {

    if($el.text()==="Egypt")
     {
       cy.wrap($el).click()
}
})
cy.get("#autocomplete").should('have.value',"Egypt")
cy.get("#displayed-text").should("be.visible")
cy.get("#hide-textbox").click()
cy.get("#displayed-text").should("not.be.visible")
cy.get("#show-textbox").click()
cy.get("#displayed-text").should("be.visible")

// radio button 

cy.get("[value = radio2]").check()


})
it('practice alert button ',function(){

    cy.visit("https://rahulshettyacademy.com/AutomationPractice/")
    cy.get("#alertbtn").click()


    cy.on("window:alert",(str)=>{

        expect(str).to.be.equal("Hello , share this practice page and share your knowledge")
    })
    cy.get("#confirmbtn").click()

    cy.on("window:confirm",(str)=>{

        expect(str).to.be.equal("Hello , Are you sure you want to confirm?")
    })

    cy.wait(3000)
    cy.get("#confirmbtn").click()

    // to cancel the pop 
    cy.on("window:confirm",(str)=>{

        expect(str).to.be.equal("Hello , Are you sure you want to confirm?")
        return false; // Cancel the confirmation dialog

    })
})
it('practice auto complete button ',function(){
    cy.visit("https://rahulshettyacademy.com/AutomationPractice/")

// Assuming the correct value is "option2" as per your HTML
cy.get('select').select('option2').should('have.value', 'option2');
cy.wait(5000);  // Waits for 1000 milliseconds (5 second)

cy.get("#autocomplete").type("eg")

cy.get(".ui-menu-item div")

// for each element to found the text 

/**
 * it use to retrieve  all options then choose what word you search for it
 */
cy.get(".ui-menu-item div").each(($el, index, $list) => {

    if($el.text()==="Egypt")
     {
       cy.wrap($el).click()
}
})
cy.get("#autocomplete").should('have.value',"Egypt")
cy.get("#displayed-text").should("be.visible")
cy.get("#hide-textbox").click()
cy.get("#displayed-text").should("not.be.visible")
cy.get("#show-textbox").click()
cy.get("#displayed-text").should("be.visible")

// radio button 

cy.get("[value = radio2]").check()


})

})