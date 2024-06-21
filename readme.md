
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

## config file

- it use it to make edit for all configuration as
  ```
  defaultCommandTimeout: 6000,
  ```

- you can make  specific edit for config to make it work only inside specific socpe as test as above
```

```

- If you have link need to use it for all your test use this  instead your config file

```
  env:{

    url:"https://rahulshettyacademy.com/angularpractice/",
  },

```

- you can use this link to make env filr work on all  write it insi de your test file
```
Cypress.env('url')
```
- you can run your cypress form  terminal and over write the env in config file  as show

```
 npx cypress run --spec cypress/integration/testcases/TestFrameWork2.js --headed --browser chrome --env url="https://rahulshettyacademy.com"  
```

## Plugin for screen show
follow this link in page
```
https://www.npmjs.com/package/cypress-mochawesome-reporter
```

- This is lisnter is required, and it writes inside stepupNode  & stepupNode is which change behaviour of cypress

```
setupNodeEvents(on, config) {
        require('cypress-mochawesome-reporter/plugin')(on);
      },
```
- install it first

```
npm i --save-dev cypress-mochawesome-reporter
```
- You need to register all event in support pacakge in e2e.js (it place for all global variable and edit for configiration )

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
      ### improtants
        - his line is a directive for TypeScript, known as a triple-slash directive, that tells the TypeScript compiler to include the type definitions for Cypress.

      This is crucial for enabling intelligent code completion (IntelliSense), type checking, and other features that

      enhance the development experience in IDEs that support TypeScript.

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

  ### to use assert

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

- To use assert to check for attritubte
```
cy.get("nth-child(1) > .form-control").should('have.attr','minlength','2')
```
- To chek the element is disabled mode or not
```
cy.get('#inlineRadio3').should('be.disabled')

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


- We use jquery to find value of element  but because it's not a cypress command we use function
```
 cy.get("#opentab").then(function(el)
        {
         
        const url = el.prop('herf')
        cy.visit(url)
        })
```

- To convert form string to number use method Number ()
```
cy.get(".react-calendar__year-view__months__month").eq(Number(monthNumber)-1).click();
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

- or if you goal to visit only on hidden element you can use
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

### Frames
- You must download this plugin for frames to make cypress work with it

```
npm install -D cypress-iframe

```

- To load frame  into cypress
```
cy.frameLoaded("courses-iframe")
```
- To tell the cypress to switch for iFrame mood and any method you use it will be in frame
```
 cy.iframe()
```
- to find element inside frame
```
cy.iframe().find("a [href*='mentorship']").eq(0).click()

```
- in cypress you can't see the screen shot of other frames

### Hooks
- You use hooks as  same in selenium  before & after as

```
  before(function(){
       code 

    })
```

### fixtures
- Use fixtures floder to create file of jason for Data
- Add data in jason format as
 ```
{
  "name":"ahmed",
  "gender":"male"
}

 ```
- Use this command to acccess the file to get data to braek the promise and make the data scope is global and use it outside the function
 ```
   cy.fixture('exmaple').then(function(data){

            // this have access to entire class  and initlize globalvirable 
        this.data =data
        })
  ```

- To access the data we use this
```
  cy.get('select').select(this.data.gender).should('have.value', 'Male');
```

- if use multi data for same var use this

```
  "productName":["Blackberry","Nokia Edge","Samsung Note 8"]

```
- And to use it we use this method
```
 this.data.productName.forEach(function(element){
            cy.selectProduct(element)

      });
```

## Command.js in support

- use it make custom command  by add it to file  as see
- cyprees.comands.to tell the cypress we make comand to use as common method in selenium
```
Cypress.Commands.overwrite('selectProduct', (productName) => { 
    cy.get('h4.card-title').each(($el, index, $list) => {
        // const textVeg=$el.text()
        if($el.text().includes(productName))
        {
        cy.get('button.btn.btn-info').eq(index).click()
        }
        })

 })
```

### Class

#### To create class for page use as
```
class HomePage{

}
```
- To make all element aviable to use for all pages

```
export default HomePage
```

##### you make the variable as methods so you can use it in all the test cases
```
getEditBox(){
        return         cy.get(':nth-child(1) > .form-control')
    }
```
- you need to import your page as  shown

 ```
 import HomePage from "../pageObject/Homepage"
```

- You need to create object of class so we can use it

```
const HomePage= new HomePage()
```

## fix errors
- Use the {force: true}  if your locater is covered by another one to make sure it worked

```
checkOut.getCheckBox().click({force: true} );

```
cy.all():

cy.all() is not a built-in Cypress command but a pattern often used with third-party utilities or custom implementations to handle multiple promises simultaneously. It is typically used to mimic the behavior of Promise.all(),

which resolves when all of its constituent promises have resolved.
In the context of Cypress, cy.all() can be achieved with a helper function that uses Promise.all() under the hood to wait for multiple Cypress commands (which are promise-like but not actual promises) to complete.

.spread():

.spread() is a method that comes from the Bluebird promise library, which was more commonly used in earlier versions of JavaScript for handling promises. It takes an array of resolved values and spreads them out as arguments to a function.
In more modern JavaScript (ES6 and beyond), this behavior can typically be handled with Promise.all() combined with destructuring in the .then() callback.

## connect to cloud of Cypress
- use make accoount then create project and take the id of the project and put in config as
```
projectId: "7q8djo"
```
```
npx cypress run --record --key 7dc7f590-a366-4fd3-b913-09d7347499e6
```

to run for terminal to make it record your project on clud
- the key is change and you take it form cloud

## cypress cucumber preprocessor
- Open the link and the follow the instructions

```
https://github.com/badeball/cypress-cucumber-preprocessor

```
- It will added dependcy in pacakage.json

- Sperate the setupNodeEvent form E2E to make the code clean
- And make all plugin information alone and to make readable
- I need to to import browserify preprocessor and i need to browserify pacakge as shown  all thes java script compiler enginge
- In cypress.config
```
  addCucumberPreprocessorPlugin,
} = require("@badeball/cypress-cucumber-preprocessor");
const {
  preprocessor,
} = require("@badeball/cypress-cucumber-preprocessor/browserify");

async function setupNodeEvents(on, config) {
  require('cypress-mochawesome-reporter/plugin')(on);

  // This is required for the preprocessor to be able to generate JSON reports after each run, and more,
  await addCucumberPreprocessorPlugin(on, config);

  on("file:preprocessor", preprocessor(config));

  // Make sure to return the config object as it might have been modified by the plugin.
  return config;
}

```

- In pacakageJson

```
  "dependencies": {
    "@badeball/cypress-cucumber-preprocessor": "^20.0.5",
    "@cypress/browserify-preprocessor": "latest"

  }
```

- The feature file will look for step definitions for floder which have the same name of feature file



- add data by using cucmber
- feature file


  ```
Scenario: Filling the frome2
    Given Customer open the form Page
    When  I fill the form details
    |name|gender|
    |aya |female|
    Then validate the form 

  ```


- as see  yo add the data as seen shwon above
- and in step def use convert this to array of 2 demintions and and use index to naviagate to data you need as shown

 ```
  homePage.getEditBox().type(dataTable.rawTable[1][0]);
    cy.wait(1000);
    homePage.getGender().select(dataTable.rawTable[1][1]).should('have.value', 'Female');
    cy.wait(5000); // Waits for 5000 milliseconds (5 seconds)
 ```

- as in cypress config we make configuration which take boolen true or flase and if false it make it choose the url as shown

   ```
   npx cypress run --env USE_URL2=false --spec "cypress/integration/testcases/TestFrameWork2.js" --headed --browser chrome
   ```

the configuration

   ```
     config.baseUrl = Boolean(config.env.USE_URL2) ? config.env.url2 : config.env.url;
   ```  
## JsonReports

   ```
    "cypress-cucumber-preprocessor":
  {
    "json": {
      "enabled": true
    }
  },
 ```
- You add this in jason package to use it to make it run test using json
- To generate cucmber reports
- to more information use

  ```
  https://github.com/badeball/cypress-cucumber-preprocessor/blob/master/docs/json-report.md
  ```

- you need to donwlaond plugin  to convert it tml report

  ```
  https://www.npmjs.com/package/multiple-cucumber-html-reporter
  ```

**There file name cucumber-html-report.js**
- this have the configuration to generate reports  and you edit in this

- then enter the command
 ```
 node cucumber-html-report.js
 ````
- to convert json file to report

- And itwhen config it in step def we definer by which it follow if follow when then the step will be with when

## Cypress intercept

- which make cypress unique

 ---
cy.intercept({requestobject},{responseobject})
---

- we use this in jason to determine the request object and response object  mock which what responce we need

 ```
 cy.intercept(
            {
                method:'GET',
                url:'https://rahulshettyacademy.com/Library/GetBook.php?AuthorName=shetty'


        },
        
        {
            
        statusCode:200,
        body: [
            {
            "book_name": "RestAssured with Java",
            "isbn": "RSU",
            "aisle": "2301"    
            }
              ]

        })as('bookretrievals')
        
 ```

- this is how we mock the responce
- as is using to refer that as variable

 ```
         cy.wait('@bookretrievals')
```
- use this wait until the cypress send the mock respone to  website

```
cypress.Commands.add('LoginAPI',()=>{

    cy.request('POST',"https://rahulshettyacademy.com/api/ecom/auth/login",
        {"userEmail":"anshika@gmail.com","userPassword":"Iamking@000"}
    ).then(function(response){
        expect(response.status).to.eq(200)
        Cypress.env('token', response.body.token)

    })
```
- we use this to make command  to use in any page

- Cypress.env is to make token as enviroment variable to use it in any where for the enviroment


##  CSV 
- T load CSV file you should add this plugin  in package.json 

```
    "neat-csv":"5.1.0"
```


```
const csv=   neatCSV(text)

```

- to converrt the CSV file to texxt 
  - to access to the element inside the CSV file 

  ```
       Cypress.config("fileServerFolder")

  ```
- To get you path of project 



 ```
cy.readFile(Cypress.config("fileServerFolder")+"/cypress/downloads/order-invoice_anshika.csv").then(async function(text){

        const csv=  await neatCSV(text)

     })

 ```
 - To call the function and use it to access the element of CSV file 

 - To access CSV element 

 ```
         csv[0]['product Name']

```
- we use this if the property have space betwen word 

- And if not have space 
-  we use this 
```
csv[0].productName
```

- Zero refer to first raw of excel 


## SQL 

- we need to folow step to install sql plugin 

```
https://www.udemy.com/course/cypress-tutorial/learn/lecture/24204072#overview
```
- it will add in dependcy for sql server

  - you need to add in config file to define the pluging 
  - in side setupnode

  ```
tasks = sqlServer.loadDBPlugin(config.db);
  on('task', tasks);

  ```

  - And define this above stepupnode

  ```
const sqlServer = require('cypress-sql-server');

  ```


## excel 

- To convert excel to json  use command 

```
npm i convert-excel-to-json

```

- It don't work with cypress so you need to use the read file and use it to convert excel to json

- use this code in test to convert excel to java 

```
const excelToJson = require('convert-excel-to-json');
const fs = require('fs');

const result = excelToJson({
        source: fs.readFileSync('SOME-EXCEL-FILE.xlsx') // fs.readFileSync return a Buffer
    });
    
```   

- cypress xeceute all code on browser so you can't access the data base or file  beacuse browser don't support 

  - so write all file as tasks  in config.js so it can read   so when define it as task it tell cypress that it something that browser engine don't support so use node engine .

  in json config

  ```
 
  on('task',{
    excelconvertToJson(filePath){
      const result = excelToJson({
        source: fs.readFileSync(filePath) // fs.readFileSync return a Buffer
    });
    return result
    }

  })

  return config;
}
  
  ```

- To call the task follow as shown 

```
 cy.task('excelconvertToJson',filePath).then(function(result){
        console.log(result)


     })
```

thius function return all content of file as text regradless of  type of file 

```
 cy.readFile(downloadPath).then(function(text){
        expect(text).to.include(productName)


    })
```

- How to use excel and edit and use it 

```
npm install exceljs --savedev
```
