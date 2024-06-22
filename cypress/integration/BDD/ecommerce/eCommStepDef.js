const { Given, When, Then } = require('@badeball/cypress-cucumber-preprocessor');

import Checkouts from '../../pageObject/Checkouts';
import Products from '../../pageObject/Products';
import HomePage from '../../pageObject/HomePage';
let name ;

const products = new Products();
const checkout = new Checkouts();
const homePage = new HomePage();

Given('Customer open the shop Page', function() {
    cy.visit(Cypress.env('url') + "/angularpractice/");
    cy.contains('.nav-link', 'Shop').click();
});

When('i add the items to cart', () => {
    products.getItemsName().each(($el, index) => {
        if ($el.text().includes('Blackberry')) {
            products.getAddButton().eq(index).click();
        }
        if ($el.text().includes('iphone X')) {
            products.getAddButton().eq(index).click();
        }
    });
    products.getCheckout().click();
});

When('validate the  Total price is equal to which i order', () => {
    Promise.all([
        checkout.getAllPricesOfProducts(),
        checkout.getTotalPrice()
    ]).then(([calculatedTotal, displayedTotal]) => {
        expect(calculatedTotal).to.eq(displayedTotal);

    });
    checkout.getAllPricesOfProducts().then(calculatedTotal => {
        checkout.getTotalPrice().then(displayedTotal => {
            expect(calculatedTotal).to.eq(displayedTotal);
            cy.log(`Calculated Total: ${calculatedTotal}`);
            cy.log(`Displayed Total: ${displayedTotal}`);
        });
    });
});

Then('Select the country for delvier and verify the message', function() {
    checkout.getCheckoutButton().click();
    checkout.getCheckBox().click({ force: true });
    checkout.getDeliveryLocationField().type(this.data.home);
    checkout.getSuggesstions().each(($el, index, $list) => {
        if ($el.text() === this.data.countryChecked) {
            cy.wrap($el).click();
        }
    });
    checkout.getPurchaseButton().click();
    checkout.getAlertMessage().contains('Success! Thank you! Your order will be delivered in next few weeks');
});

Given('Customer open the form Page', function() {
    cy.visit(Cypress.env('url') + "/angularpractice/");
});

When('I fill the form', function() {
    homePage.getEditBox().type(this.data.name);
    cy.wait(1000);
    homePage.getGender().select(this.data.gender).should('have.value', 'Male');
    cy.wait(5000); // Waits for 5000 milliseconds (5 seconds)
});
When('I fill the form details', function(dataTable) {
    name =dataTable.rawTable[1][0];
    homePage.getEditBox().type(dataTable.rawTable[1][0]);
    cy.wait(1000);
    homePage.getGender().select(dataTable.rawTable[1][1]).should('have.value', 'Female');
    cy.wait(5000); // Waits for 5000 milliseconds (5 seconds)
});

Then('validate the form', function() {
    homePage.getTwoWayDataBinding().should('have.value',name);
    homePage.getCondionForName().should('have.attr', 'minlength', '2');
});
