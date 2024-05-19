const { defineConfig } = require("cypress");

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
    setupNodeEvents(on, config) {
      require('cypress-mochawesome-reporter/plugin')(on);
    },
    specPattern:"cypress/integration/*/*.js",
    screenshotOnRunFailure: true,
    screenshotsFolder: 'cypress/screenshots',
    taskTimeout: 60000,
  },
});
