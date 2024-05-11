/// <reference types="Cypress" />
import Products from "../pageObject/Products"
import Checkouts from "../pageObject/Checkouts"

describe('My end to end Test Suite', function() {
    const products = new Products();
    const checkOut = new Checkouts();
    
    before(function() {
        // Setup code if needed
    });

    beforeEach(function() {
        cy.visit("https://rahulshettyacademy.com/angularpractice/");
        cy.fixture('example').then(function(data) {
            this.data = data;
        });
    });

    it('Customer buy mobile', function() {
        cy.contains('.nav-link', 'Shop').click();
        products.getItemsName().each(function($el, index) {
            if ($el.text().includes('Blackberry')) {
                products.getAddButton().eq(index).click();
            }
        });
        products.getCheckout().click();
        checkOut.getCheckoutButton().click();
        checkOut.getCheckBox().click({force: true} );
        checkOut.getDeliveryLocationField().type(this.data.home);
        checkOut.getPurchaseButton().click();
        checkOut.getAlertMessage().contains('Success! Thank you! Your order will be delivered in next few weeks ')
    });

    it('Customer buy multiple mobiles', function() {
        products.getshop().click();
        this.data.productName.forEach(function(element) {
            cy.selectProduct(element);
        });
        products.getCheckout().click();
        checkOut.getCheckoutButton().click();
        checkOut.getCheckBox().click({force: true} );
        checkOut.getDeliveryLocationField().type(this.data.home);
        checkOut.getPurchaseButton().click();
        checkOut.getAlertMessage().contains('Success! Thank you! Your order will be delivered in next few weeks ')

        
    });

    it('Customer buys mobile by Page object', function() {
        Cypress.config('defaultCommandTimeout' ,9000)
        products.getshop().click();
        products.getItemsName().each(function($el, index) {
            if ($el.text().includes('Blackberry')) {
                products.getAddButton().eq(index).click();
            }
        });
        products.getCheckout().click();
        checkOut.getCheckoutButton().click();
        checkOut.getCheckBox().click({force: true} );
        checkOut.getDeliveryLocationField().type(this.data.home);
        checkOut.getSuggesstions().each(($el, index, $list) => {

            if($el.text()===this.data.countryChecked)
             {
               cy.wrap($el).click()
        }
        })
        
        checkOut.getPurchaseButton().click();
        checkOut.getAlertMessage().contains('Success! Thank you! Your order will be delivered in next few weeks ')

    });
    it('check the toatl of cost of items ', function() {
        Cypress.config('defaultCommandTimeout' ,9000)
        products.getshop().click();
        products.getItemsName().each(function($el, index) {
            if ($el.text().includes('Blackberry')) {
                products.getAddButton().eq(index).click();
            }
            if ($el.text().includes('Blackberry')) {
                products.getAddButton().eq(index).click();
            } 
            if ($el.text().includes('iphone X')) {
                products.getAddButton().eq(index).click();
            }
            if ($el.text().includes('iphone X')) {
                products.getAddButton().eq(index).click();
            }
        });
        
        products.getCheckout().click();
        
        Promise.all([
            checkOut.getAllPricesOfProducts(), 
            checkOut.getTotalPrice()
        ]).then(([calculatedTotal, displayedTotal]) => {
            expect(calculatedTotal).to.eq(displayedTotal);
            cy.log(calculatedTotal)
            cy.log(displayedTotal)
        });

        checkOut.getCheckoutButton().click();
        checkOut.getCheckBox().click({force: true} );
        checkOut.getDeliveryLocationField().type(this.data.home);
        checkOut.getSuggesstions().each(($el, index, $list) => {

            if($el.text()===this.data.countryChecked)
             {
               cy.wrap($el).click()
        }
        })
        
        checkOut.getPurchaseButton().click();
        checkOut.getAlertMessage().contains('Success! Thank you! Your order will be delivered in next few weeks ')

    });

    afterEach(function() {
       
    })
})