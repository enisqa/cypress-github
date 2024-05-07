const { defineConfig } = require("cypress");

module.exports = defineConfig({
  e2e: {
    projectId: "61q3f2",
    experimentalStudio:true,
    video:true,
    setupNodeEvents(on, config) {
      // implement node event listeners here
    },
  },
});
