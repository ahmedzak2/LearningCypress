describe("upload/Download test",()=>{


    it("verify excelupload ",()=>{
       let  path = Cypress.config("fileServerFolder")+"/cypress/downloads/download.xlsx"

        cy.visit("https://rahulshettyacademy.com/upload-download-test/index.html")
        cy.get("#downloadButton").click();
        cy.task('writeExcelTest',{searchText:"Apple",replaceText:"ahmed",change:{rowChange:0,colChange:0},filePath:path})

        cy.get("#fileinput").selectFile(path);
        cy.contains("ahmed").parent().parent().find("#cell-4-undefined")
        .should('have.text',345);
        })
})