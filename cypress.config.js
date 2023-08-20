const { defineConfig } = require("cypress");
const cyAwaitPreprocessor = require('cypress-await/src/preprocessor')
module.exports = defineConfig({
  e2e: {
    setupNodeEvents(on, config) {
      // implement node event listeners here
      on('file:preprocessor', cyAwaitPreprocessor({
        specPattern: '.await.cy.js'
      }))
    },
  },
});
