const { Given ,When,Then,And} = require("@badeball/cypress-cucumber-preprocessor");

Given ('Customer open the shop Page',function(){

    cy.visit(Cypress.env('url')+"/angularpractice/");
    cy.contains('.nav-link', 'Shop').click();

})

When('i add the items to cart',()=>{
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

})

And('validate the  Total price is equal to which i order',()=>{

    
    Promise.all([
        checkOut.getAllPricesOfProducts(), 
        checkOut.getTotalPrice()
    ]).then(([calculatedTotal, displayedTotal]) => {
        expect(calculatedTotal).to.eq(displayedTotal);
        cy.log(calculatedTotal)
        cy.log(displayedTotal)
    });
    checkOut.getAllPricesOfProducts().then(calculatedTotal => {
        checkOut.getTotalPrice().then(displayedTotal => {
            // Now we compare the totals within a then to ensure they have both resolved
            expect(calculatedTotal).to.eq(displayedTotal);
            cy.log(`Calculated Total: ${calculatedTotal}`);
            cy.log(`Displayed Total: ${displayedTotal}`);
        });
    });

})
Then('Select the country for delvier and verify the message',()=>{

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


})

Given('Customer open the form Page',()=>{
    cy.visit(Cypress.env('url')+"/angularpractice/");
    this.data = data;


})
When('i fill the from',()=>{
    homePage.getEditBox().type(this.data.name)
    cy.wait(1000)
   homePage.getGender().select(this.data.gender).should('have.value', 'Male');
    cy.wait(5000);  // Waits for 1000 milliseconds (5 second)
    
}) 

Then('validate the  from',()=>{
    homePage. getTwoWayDataBinding().should('have.value',this.data.name)
   homePage.getCondionForName().should('have.attr','minlength','2')

})
