 
 The command 
 ```
  npm -i init  
```
Is used to create package of json to install what you need 

 ```
 npm install cypress --save-dev
```

 When to install cypress  if I not give  the version in json package it wil download the latest version 
 ```
--save-dev
```
 I use it create entity in json package 

 To open the cypress navigate to node modules then to bin then enter 

 ```
 .\cypress open 
 ```
 It will open the cypress terminal 

 It will open on two option we will choose the E2E testing it for the tester 
 the component testing is for developer 
 when choose the   E2E testing it will add some files to project 
 
 Choose the browser after then clik on start to open cypress box to run the tests 

 There was floder name integration in old version so there write test cases under it but in the new versions is removed 
 
 To write test cases the file  must be extensions of js, and it called is Spec 

 ## to tell cypress where to find paths of test cases 
 
 Write in cypress.config.js  

```
    specPattern:"cypress/integration/testcases/*.js",
```
Once upate the path the cypress in browser will display the all test cases files  

You  need to write the test as test framework standard  for javascript as jasmine and mocha and cypress recommend to use mocha 

describe is used to describe test suite and

It use for test case as in example 

Function is warp all block and code 

```
describe('my first test suite  ',function(){

    it('Does not do much!',function(){

   expect(true).to.equal(false)     
    })

})
```

As similar to drive in selenium use the command to go to url 
 
  ```
  cy.visit("https://rahulshettyacademy.com/seleniumPractice#/");
  ```

  Electron browser in cypress is used chrome under hood but exculde many option it make the automation run faster 

  When run cypress in command line it will run headless  and also in electron browser  you can change the browser and make it not run headless 

  To make it run headed and choose the browser 
 ```
 npx  cypress run --headed --browser chrome 
```
## Folder in cypress 

1- fixtures
  - Folder is used to store test data

2- plugins 
  - Plugins are kind as listener 
  - Grab information  like make the browser full screen or when the test is failed what will happen 

  3- support folder
   - You can write the customized method which will use  in all test cases 
   - You test cases will scan the support folder by default  
     - If you need to write it another folder you need to make import to tell cypress this folder will use form it the method 

4- cypress.config.js
  - Tell the path of test spec 
  

## cypress notes 
- cypress only support CSS selectors 
- #IDNmae this is id 
- .classname  css for specific element bz using 
  - if you see spaces between class name replace it by dot 
    - if you have more than one element for class you use unique as tag name 
    
    ```
    tagname.classname
    ```
     
      ## <span style="color:blue;"> **you can take  any  attribute / CSS selecotrs  and use it as** 

     ```
     tagname[attribute=value]
     ```

     example :
     
     ```
     cy.get("input[type=checkbox]").check()
     ```

     - tag name form parent to child by using space to deferential between them

     ## to get command to use on cypress 

     ```
     cy.get("input[type='search']").type("cac")
     ```
    - to get element and send word to search box 

    - you can use cypress browser to get it generate element for you add as locaters

     ```
     /// <reference types="Cypress" />

    ```
    it will get all method in cypress so can i use as find element in selenium 

   ```
   cy.get(".products ").find(".product").should('have.length',4)
   ```
     
    - used to find child element search only after his parent 

     ```
      cy.get(".products").find(".product").eq(2).click()
     ````
     - use eq (index ) to find element of array of locators 

    ```
    cy.get(".products").find(".product").eq(2).contains("ADD TO CART").click()
    ```
     - use contains to search for specific text in dom 

    ## to use assert 

    ```
        cy.get(".product:visible").should('have.length',4)
    ```
    - should is form library chi  as assert and have more than on assert type in above case i use it to asser about lenght 
    - add visible to make it show all visible of class product 

  ```
    cy.get(".products").find(".product").each(($el, index, $list)=> {
       ($el.someMethod() === 'something') {
    // wrap this element so we can
    // use cypress commands on it
    cy.wrap($el).click()
     } else {
    // do something else
     }

        })
   ```


  - It uses for when the return is more than one element it will take the elements as array and do methods on them
    
     - each(($el, index, $list)=> {
       - this is method and $el is index for first element
        -        ($el.someMethod() === 'something') {

          this method is will repeat till all elements of array return as if there 4 elements return it will loop 4 times 


```
$el.find("h4.product-name").text()       
```
- To find text  it's not cypress method it's jQuery objects 

```
text.include( 'cash')
```
 - to find text inside element 

 ```
 .then(()=>{
  the code to do after the pervious step is executed 
 })
 ```
  - this method is wait until the step is executed ( promise is resolved )
   - this method is done internally by cypress 


```
  cy.get(".products").as('productLocater')
```
 - this command is used to make it as varible yo use it as in down 

 ```
 cy.get("@productLocater")
 ```
  - use this  as variable for all 

  ## radio buttons 

  ```
  cy.get("#checkBoxOption1").check()
  ```
   - use it to click on check radio box

   ```
    cy.get("#checkBoxOption1").check().should("be.checked").and('have.value',"option1")
  ```
   - to assert if the box is checked or not 
   - the and is use as to make more than one assertion 
      - as instead  write should  
      - and have.value to  check the text of it is found or not 


###### static radio 

```
cy.get('select').select('Option2')
```
- the select is method used when have select radio static and type is select 
  - as shown above the choose option by pass value, or it's name 

 #### the promise state 
 - it states of the action of our step 
 - there are 3 state 
   - executed / pending  which is promise resolved  
   - promise is rejected there in error in step 
   - promise is pending the step is yet to execute 

#### there two way of console 
   - The console log will proint it on console of website 
  
  ```
  console.log("success ahmed")
  ```
  - the console of cypress will print on cypress


```
 cy.log(logo.text())
```

## Alert 

 **<span style="color:blue;"> cypress is auto accept alert and pop** 

 ```
cy.on("window:alert",(str)=>{

        expect(str).to.be.equal("Hello , share this practice page and share your knowledge")
    })
 ```
 - use this to trigger the event and assert it  as how to check in mocha 
 - use the  catch unexpected method to filter what the alert happen 

 ```
 cy.on("window:confirm",(str)=>{

        expect(str).to.be.equal("Hello , Are you sure you want to confirm?")
    })
 ```
 - To catch the text of confirm alert and expect it 

 ## new tab 

 - cypress not aas selenium can switch to child windows by default  
   - you can write some code to make it switch, but it will make it default to finish end to end scenario  ( because  cypress execute all methods in same tab )

   - so we use another way to make it reload in same tab 
    - so i need to remove attribute  target="_blank" form DOM then refresh it to make it open in same tab 

    ```
    .invoke()
    ```
    - to execute one jquery function we use it 

    ```
    cy.get("#opentab").invoke("removeAttr","target").click()
    ```
    - To remove the attribute then open the website in same tab instead of new one 

    - when go to new website (new domain ) I need to tell cypress that we on new domain and this functions which we will do 
    ```
    cy.origin("https://www.qaclickacademy.com",()=>{
        
    })
    ```
    

    ### How to handle table and find element 
    - this scenario we need to find raw by specific text then get the value in next raw 

    ```
    cy.get("tr td:nth-child(2)").each(($el, index, $list) => {

    const text = $el.text()

if(text.includes("QA Expert Course :Software Testing + Bugzilla + SQL + Agile	"))
 {
const message =  cy.get("tr td:nth-child(2)").eq(index).next().text()
message.should.be.equal("25")

}
        
    })
    ```
 - so we use array  for get for every raw of table to serach for text then when find it 
  - we will pass the index with locater  which we use to find column which have the raws off texts then use .eq(index) 
   - then use next() to move to next sibling 


### Hover in cypress 

- we don't have action class like selenium so we use method form jquery using invoke ()  then show to show any hidden eleemnts 
```
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
```

- or if you goal to vlivk only on hidden eleement you can use 
```
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
```