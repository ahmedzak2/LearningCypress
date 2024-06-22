const { defineConfig } = require("cypress");
const preprocessor = require("@badeball/cypress-cucumber-preprocessor");
const browserify = require("@badeball/cypress-cucumber-preprocessor/browserify");
const sqlServer = require('cypress-sql-server');
const excelToJson = require('convert-excel-to-json');
const fs = require('fs');
const ExcelJs= require('exceljs');


async function setupNodeEvents(on, config) {
  config.db= {
    userName: "default",
    password: "ctlLEWrJiyFP3RxGSC1dfCykgvvmolyq",
    server: 'redis-18446.c282.east-us-mz.azure.redns.redis-cloud.com:18446',
    options: {
        database: "ahmed-free-db",
        encrypt: true,
        rowCollectionOnRequestCompletion : true
    }
  }

  require('cypress-mochawesome-reporter/plugin')(on);
  await preprocessor.addCucumberPreprocessorPlugin(on, config);
  on("file:preprocessor", browserify.default(config));
  config.baseUrl = Boolean(config.env.USE_URL2) ? config.env.url2 : config.env.url;
  console.log('Base URL:', config.baseUrl);
  tasks = sqlServer.loadDBPlugin(config.db);
  on('task', tasks);

  on('task',{
    excelconvertToJson(filePath){
      const result = excelToJson({
        source: fs.readFileSync(filePath) // fs.readFileSync return a Buffer
    });
    return result
    }

  })

 
  on('task', {
 
    async writeExcelTest({searchText,replaceText,change,filePath})
     {
         
       const workbook = new ExcelJs.Workbook();
       await workbook.xlsx.readFile(filePath);
       const worksheet = workbook.getWorksheet('Sheet1');
       const output= await readExcel(worksheet,searchText);
     
       const cell = worksheet.getCell(output.row,output.column+change.colChange);
       cell.value = replaceText;
       //pending resolved rejected
       return workbook.xlsx.writeFile(filePath).then(()=>
       {
         return true;
       })
       .catch((error)=>
         {
           return false;
         })
  
     
     }
  
   })
  
return config;
}
async function readExcel(worksheet,searchText)
{
    let output = {row:-1,column:-1};
    worksheet.eachRow((row,rowNumber) =>
    {
          row.eachCell((cell,colNumber) =>
          {
              if(cell.value === searchText)
              {
                  output.row=rowNumber;
                  output.column=colNumber;
              }
  
  
          }  )
    
    })
    return output;
}
module.exports = defineConfig({
  projectId: "7q8djo",
  defaultCommandTimeout: 6000,
  reporter: 'cypress-mochawesome-reporter',
  env: {
    url: "https://rahulshettyacademy.com",
    url2: "https://example2.com",
  },
  reporterOptions: {
    reportDir: 'cypress/reports',
    charts: true,
    reportPageTitle: 'Test Report',
    embeddedScreenshots: true,
    inlineAssets: true,
  },
  retries: {
    runMode: 1,
  },
  e2e: {
    setupNodeEvents,
    specPattern: ['cypress/integration/**/*.js', 'cypress/integration/**/*.feature'],
    screenshotOnRunFailure: true,
    screenshotsFolder: 'cypress/screenshots',
    taskTimeout: 60000,
  },
});
