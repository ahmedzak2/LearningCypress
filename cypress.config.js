const { defineConfig } = require("cypress");
const preprocessor = require("@badeball/cypress-cucumber-preprocessor");
const browserify = require("@badeball/cypress-cucumber-preprocessor/browserify");

async function setupNodeEvents(on, config) {
  require('cypress-mochawesome-reporter/plugin')(on);
await preprocessor.addCucumberPreprocessorPlugin(on, config);
on("file:preprocessor", browserify.default(config));
return config;

};

module.exports = defineConfig({
  projectId: "7q8djo",
  defaultCommandTimeout: 6000,
  reporter: 'cypress-mochawesome-reporter',

  env:{

    url:"https://rahulshettyacademy.com",
  },
  reporterOptions: {
    reportDir: 'cypress/reports',
    charts: true,
    reportPageTitle: 'Test Report',
    embeddedScreenshots: true,
    inlineAssets: true,
  },
  retries:{
    runMode:1,

  },

  e2e: {
    setupNodeEvents,
    specPattern: ['cypress/integration/**/*.js', 'cypress/integration/**/*.feature'],
    screenshotOnRunFailure: true,
    screenshotsFolder: 'cypress/screenshots',
    taskTimeout: 60000,
  },
});
