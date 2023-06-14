const Page = require('../page-objects/Page')

class SignUp extends Page {
	static enterAccInfoText = '#form > div > div > div > div.login-form > h2 > b'
	static checkTitles = '#id_gender1'
	static fillPassword = '#password'
	static selectDay = '#days'
	static selectMonth = '#months'
	static selectYear = '#years'
	static selectNews = '#newsletter'
	static selectReceiveOff = '#optin'
	static fillfname = '#first_name'
	static filllname = '#last_name'
	static fillCompany = '#company'
	static fillAddress1 = '#address1'
	static fillAddress2 = '#address2'
	static fillCountry = '#country'
	static fillState = '#state'
	static fillCity = '#city'
	static fillZipcode = '#zipcode'
	static fillMobliePhone = '#mobile_number'
	static clickCreateAcc =
		'#form > div > div > div > div.login-form > form > button'

	static CanDisplayEnterAccInfoText() {
		cy.get(this.enterAccInfoText).should('exist')
	}

	static fillDetail1(password) {
		cy.get(this.checkTitles).check().should('be.checked')
		cy.get(this.fillPassword).type(password)
		cy.get(this.selectDay).select(15)
		cy.get(this.selectMonth).select('November')
		cy.get(this.selectYear).select('2002')
	}

	static fillDetail2(
		fname,
		lname,
		company,
		Add1,
		Add2,
		state,
		city,
		zipcode,
		mobilephone
	) {
		cy.get(this.fillfname).type(fname)
		cy.get(this.filllname).type(lname)
		cy.get(this.fillCompany).type(company)
		cy.get(this.fillAddress1).type(Add1)
		cy.get(this.fillAddress2).type(Add2)
		cy.get(this.fillCountry)
			.select('Australia')
			.should('have.value', 'Australia')
		cy.get(this.fillState).type(state)
		cy.get(this.fillCity).type(city)
		cy.get(this.fillZipcode).type(zipcode)
		cy.get(this.fillMobliePhone).type(mobilephone)
	}

	static selectCheckBoxNews() {
		cy.get(this.selectNews).check()
	}
	static selectCheckBoxPartner() {
		cy.get(this.selectReceiveOff).check()
	}

	static canClickCreateButton() {
		cy.get(this.clickCreateAcc).click()
	}
}

module.exports = SignUp
