const { defineConfig } = require("cypress");

module.exports = defineConfig({
  e2e: {
    setupNodeEvents(on, config) {
      // implement node event listeners here
    },
    specPattern:"cypress/integration/testcases/*.js",
    screenshotOnRunFailure: true,
    screenshotsFolder: 'cypress/screenshots',
    taskTimeout: 60000,

  },
});