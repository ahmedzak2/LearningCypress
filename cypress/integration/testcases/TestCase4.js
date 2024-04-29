/// <reference types="Cypress" />

describe('My fourth Test Suite', function() {
    it('Practice hover by mouse', function() {
        cy.visit("https://rahulshettyacademy.com/AutomationPractice/");
        cy.get("div.mouse-hover-content").invoke("show").then(function() {
            cy.contains('Top').click();
            cy.wait(2000);  // Consider using a more deterministic wait condition if possible
        });

        cy.url().then(url => {
            cy.log(url);  // Logs the current URL
            console.log("URL after navigation: " + url);  // Outputs the current URL to console
        });

        cy.url().should("include", "top");  // Check that URL includes 'top'
    });
    it('Practice hover by mouse part 2 ', function() {
        cy.visit("https://rahulshettyacademy.com/AutomationPractice/");
            cy.contains('Top').click({force:true});
            cy.wait(2000);  // Consider using a more deterministic wait condition if possible

        cy.url().then(url => {
            cy.log(url);  // Logs the current URL
            console.log("URL after navigation: " + url);  // Outputs the current URL to console
        });

        cy.url().should("include", "top");  // Check that URL includes 'top'
    });
});
