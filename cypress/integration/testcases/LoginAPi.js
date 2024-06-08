 /// <reference types="Cypress" />
const neatCSV= require("neat-csv")
 describe('My cypress login token Test Suite', function() {
    
     it('use login token  ', function() {
         cy.LoginAPI().then(function(){
             cy.visit("https://rahulshettyacademy.com/client",
             {
                 onBeforeLoad : function(window)
                 {
                     window.localStorage.setItem('token',Cypress.env('token'))
                 }


             })
         }
         )

        
     cy.request('POST','http://216.10.245.166/Library/Addbook.php',{
         "name":"Learn Appium Automation with Java",
         "isbn":"csd",
         "aisle":"228",
         "author":"John foe"
     }).then(function(response){
         expect( response.body).to.have.property("Msg","successfully added")
         expect( response.status).to.eq(200)
    
     })

       
     })
     it("end to end scenario",function(){
        let numberOfItem =1
        let productName 
        cy.visit("https://rahulshettyacademy.com/client",
        {
            onBeforeLoad : function(window)
            {
                window.localStorage.setItem('token',Cypress.env('token'))
            }

        })
        
     cy.get(".card-body button:last-of-type").eq(numberOfItem).click({force: true});
      cy.get(".card-body b").eq(numberOfItem).then(function(ele){
        productName= ele.text()


     })
     cy.get("[routerlink*='cart']").click();
     cy.contains('Checkout').click();
     cy.get("[placeholder*='Country']").type("Cambodia")
     cy.get('.ta-results button').each(($e1, index, $list) => {



        if($e1.text()===" Cambodia")
  
        {
            cy.wrap($e1).click()

            
  
        }
  
    })
    cy.get('.action__submit').click({force: true})
     cy.wait(2000)
     cy.get(".order-summary button").eq(1).click();
     cy.contains('Click To Download Order Details in CSV').click()
     cy.wait(2000)

     cy.readFile(Cypress.config("fileServerFolder")+"/cypress/downloads/order-invoice_anshika.csv").then(async function(text){

        const csv=  await neatCSV(text)
        console.log(csv)
       const actualProductName= csv[0]['Product Name']
       expect(productName).to.equal(actualProductName)

     })
     

    })

       
    
    
     })