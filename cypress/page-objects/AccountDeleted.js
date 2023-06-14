const Page = require('../page-objects/Page')

class AccountDeleted extends Page {
	static AccDelText = '#form > div > div > div > h2 > b'
	static btnContinue = '#form > div > div > div > div > a'

	static canDisplayAccDelText() {
		cy.get(this.AccDelText).should('exist')
	}

	static clickContinue() {
		cy.get(this.btnContinue).click()
	}
}

module.exports = AccountDeleted
