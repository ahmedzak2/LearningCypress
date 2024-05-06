/// <reference types="Cypress" />
describe('My Calendars  Test Suite', function() {
    it('practice iFrame ',function(){
        const monthName="August"
        const monthNumber = '8'
        const year="2025"
        const day = "10"
        const expectedList = [monthNumber,day,year];

        
        cy.visit("https://rahulshettyacademy.com/seleniumPractise/#/offers")
        cy.get("button[class*='react-date-picker__calendar-button react-date-picker__button']").click()
        cy.get("button[class*='react-calendar__navigation__label']").click()
        cy.get("button[class*='react-calendar__navigation__label']").click()

        cy.get(" button[class*='react-calendar__decade-view__years__year']").each(($el, index, $list) => {

            if($el.text()===year)
             {
               cy.wrap($el).click()
        }
        })
        
       
        cy.get(" button[class*='react-calendar__year-view__months__month']").each(($el, index, $list) => {

            if($el.text()===monthName)
             {
               cy.wrap($el).click()
        }
        })
          
        cy.get(" button[class*='react-calendar__month-view__days__day']").each(($el, index, $list) => {

            if($el.text()===day)
             {
               cy.wrap($el).click()
        }
        })
        
        
        cy.wait(2000)
        cy.get(".react-date-picker__inputGroup__input").each(($el,index)=>
        {
            cy.wrap($el).invoke('val').should('eq',expectedList[index]);
        }
    )

    }) 

    it('Verify date selection',()=>{
 
        const monthNumber = "6";
        const date = "15";
        const year = "2027";
        const expectedList = [monthNumber,date,year];
 
        cy.visit("https://rahulshettyacademy.com/seleniumPractise/#/offers");
        cy.wait(5000)
        cy.get(".react-date-picker__inputGroup").click();
 
        cy.get(".react-calendar__navigation__label").click();
        cy.get(".react-calendar__navigation__label").click();
        cy.contains("button",year).click();
        cy.get(".react-calendar__year-view__months__month").eq(Number(monthNumber)-1).click();
        cy.contains("abbr",date).click();
 
        //Assertion
        cy.get(".react-date-picker__inputGroup__input").each(($el,index)=>
        {
            cy.wrap($el).invoke('val').should('eq',expectedList[index]);
        }
        
        
        
        
        )
    })     
})
