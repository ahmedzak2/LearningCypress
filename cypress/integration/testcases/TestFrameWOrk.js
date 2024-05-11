/// <reference types="Cypress" />
import HomePage from "../pageObject/Homepage"

describe('My end to end   Test Suite', function() {
    const homePage= new HomePage()
    before(function(){
    

    })
    this.beforeEach(function(){

        cy.visit("https://rahulshettyacademy.com/angularpractice/")
        cy.fixture('example').then(function(data){

            // this have access to entire class  and initlize globalvirable 
        this.data =data
        })
    })


    it('practice fill form ',function(){
        
        cy.get(':nth-child(1) > .form-control').type(this.data.name)
        cy.wait(1000)
        cy.get('select').select(this.data.gender).should('have.value', 'Male');
        cy.wait(5000);  // Waits for 1000 milliseconds (5 second)
        cy.get("input[class*='ng-untouched ng-pristine ng-valid'").should('have.value',this.data.name)
        cy.get("input[class*='ng-touched']").should('have.attr','minlength','2')



    })
    it('practice fill form with missing char  ',function(){
        cy.get(':nth-child(1) > .form-control').type(this.data.oneletter);
        cy.get("alert alert-danger").should('contain','Name should be at least 2 characters')
        cy.wait(1000)
        cy.get('select').select(this.data.gender).should('have.value', 'Male');
        cy.wait(5000);  // Waits for 1000 milliseconds (5 second)



    })
    it('The button is disable or not',function(){
        cy.get('#inlineRadio3').should('be.disabled')
        cy.wait(1000)
       



    })
    it('practice fill form  by using page object ',function(){
      
       homePage.getEditBox().type(this.data.name)
        cy.wait(1000)
       homePage.getGender().select(this.data.gender).should('have.value', 'Male');
        cy.wait(5000);  // Waits for 1000 milliseconds (5 second)
        homePage. getTwoWayDataBinding().should('have.value',this.data.name)
       homePage.getCondionForName().should('have.attr','minlength','2')



    })


})