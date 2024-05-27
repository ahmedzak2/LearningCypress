const report = require("multiple-cucumber-html-reporter");

report.generate({
  jsonDir: "./cypress/cucumberReports/",
  reportPath: "./reports/cucumber-htmlreport.html",
  metadata: {
    browser: {
      name: "chrome",
      version: "125",
    },
    device: "Local test machine",
    platform: {
      name: "ubuntu",
      version: "16.04",
    },
  },
  customData: {
    title: "Run info",
    data: [
      { label: "Project", value: "ziko project" },
      { label: "Release", value: "11.2.3" },
      { label: "Cycle", value: "30" },
      { label: "Execution Start Time", value: "May 21th 2024, 02:31 PM EST" },
      { label: "Execution End Time", value: "May 22th 2024, 02:56 PM EST" },
    ],
  },
});