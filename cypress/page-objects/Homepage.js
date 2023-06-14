const Page = require('../page-objects/Page')

class Homepage extends Page {
	static websiteIcon =
		'#header > div > div > div > div.col-sm-4 > div > a > img'
	static signUpLogIn = '.fa.fa-lock'
	static btnlogInSuccess = '.fa.fa-user'
	static btndelAcc = '.fa.fa-trash-o'
	static logOut = '.fa.fa-lock'

	static canDisplayWebsiteIcon() {
		cy.get(this.websiteIcon).should('exist')
	}

	static clickSignUpLogin() {
		//cy.get(this.signUpLogIn).should('exist')
		cy.get(this.signUpLogIn).click()
	}

	static canDisplaylogInSuccess() {
		cy.get(this.btnlogInSuccess).should('exist')
	}

	static canDeletteAcc() {
		cy.get(this.btndelAcc).click()
	}

	static canClickLogOut() {
		cy.get(this.logOut).click()
	}
}

module.exports = Homepage
