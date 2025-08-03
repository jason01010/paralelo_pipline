const { defineConfig } = require("cypress");

module.exports = defineConfig({
  projectId: '2w54gy',
  e2e: {
    setupNodeEvents(on, config) {
      // implement node event listeners here
    },
  },
});
