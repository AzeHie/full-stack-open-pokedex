const { defineConfig } = require("cypress"); // eslint-disable-line

module.exports = defineConfig({ // eslint-disable-line
  e2e: {
    setupNodeEvents(on, config) { // eslint-disable-line
      // implement node event listeners here
    },
  },
});
