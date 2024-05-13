const { defineConfig } = require("cypress");

module.exports = defineConfig({
  defaultCommandTimeout: 6000,
  reporter: 'cypress-mochawesome-reporter',

  env:{

    url:"https://rahulshettyacademy.com",
  },

  e2e: {
    setupNodeEvents(on, config) {
        require('cypress-mochawesome-reporter/plugin')(on);
      },
    specPattern:"cypress/integration/testcases/*.js",
    screenshotOnRunFailure: true,
    screenshotsFolder: 'cypress/screenshots',
    taskTimeout: 60000,
    

  },
});
