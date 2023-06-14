const Page = require('../page-objects/Page')

class AccountCreate extends Page {
	static AccCreatedText = '#form > div > div > div > h2 > b'
	static btnContinue = '#form > div > div > div > div > a'

	static canDisplayAccCreatedText() {
		cy.get(this.AccCreatedText).should('exist')
	}

	static clickContinue() {
		cy.get(this.btnContinue).click()
	}
}

module.exports = AccountCreate
