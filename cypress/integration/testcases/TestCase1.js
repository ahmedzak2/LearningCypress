/// <reference types="Cypress" />

describe('My First Test Suite', function() {
    beforeEach(function() {
        // Visits the URL before each test
        cy.visit("https://rahulshettyacademy.com/seleniumPractise/#/");
    });

    it('Enters word in search box', function() {
        cy.get("input[type='search']").type("ca");
        cy.wait(2000); // Consider replacing with cy.waitUntil() or assertions that wait for specific conditions
        cy.get(".product").should('have.length', 5);
        cy.get(".product:visible").should('have.length', 4);
        cy.get(".products").find(".product").should('have.length', 4);
        cy.get(".products").find(".product").eq(2).contains("ADD TO CART").click().then(function(){
            console.log('sf ')

        });

        cy.get(".products").find(".product").each(($el, index, $list) => {
            const text = $el.find("h4.product-name").text();
            if(text.includes('Cashews')) {
                cy.log('This is a log message to help debug the test');

                cy.wrap($el).find('button').click()
            }
            cy.log('Product text: ' + text); // Log each product's text

        })
    
    });
    it('another way to try ',function(){

  cy.get(".products").as('productLocater')
        cy.get("input[type='search']").type("ca");

        cy.get("@productLocater").find(".product").should('have.length.at.least', 1)
        .then($products => {
            cy.log('Number of products found: ' + $products.length);
        });
        cy.get(".products").find(".product").eq(2).contains("ADD TO CART").click()


    cy.get("@productLocater").find(".product").each(($el, index) => {
        const text = $el.find("h4.product-name").text();
        cy.log('Processing product: ' + text);
          if(text.includes('Cashews')) {
                cy.wrap($el).find('button').click();
                console.log("success ahmed")
            }
            cy.log('Product text: ' + text); // Log each product's text

        });


     cy.get('.brand').should('have.text',"GREENKART").then(function(logo){
        
    cy.log(logo.text())
    const logoItem= logo;
    })
    cy.get('.cart-icon > img').click()
    cy.get(".action-block").find("button").contains("PROCEED TO CHECKOUT").click()

    cy.get('button').contains("Place Order").click()
    })

  
});
