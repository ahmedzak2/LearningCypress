 /// <reference types="Cypress" />

 describe('My cypress mock Test Suite', function() {
    
     it('mcok response cypess ', function() {
        
     cy.request('POST','http://216.10.245.166/Library/Addbook.php',{
         "name":"Learn Appium Automation with Java",
         "isbn":"bcsd",
         "aisle":"228",
         "author":"John foe"
     }).then(function(response){
         expect( response.body).to.have.property("Msg","successfully added")
         expect( response.status).to.eq(200)
    
     })

       
     })

       
    
    
     })