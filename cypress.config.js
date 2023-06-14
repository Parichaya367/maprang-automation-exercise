const { defineConfig } = require('cypress')

module.exports = defineConfig({
	e2e: {
		setupNodeEvents(on, config) {
			// implement node event listeners here
		},
		defaultCommandTimeout: 10000,
		//baseUrl: 'https://katalon-demo-cura.herokuapp.com/', //-> cy.visit('/') can do it now
		watchForFileChanges: false,
		pageLoadTimeout: 180000,
		video: false,
		retries: {
			runMode: 1, // Configure retry attempts for 'cypress run'
			openMode: 1, // configure retry attempts for 'cypress open'
		},
		reporter: 'nyan',
		chromeWebSecurity: false,
		experimentalModifyObstructiveThirdPartyCode: true,
	},
})
