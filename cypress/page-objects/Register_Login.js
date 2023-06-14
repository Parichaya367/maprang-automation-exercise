const Page = require('./Page')

class Register_Login extends Page {
	static newUserSignUpHeader = '#form > div > div > div:nth-child(3) > div > h2'
	static nameBox =
		'#form > div > div > div:nth-child(3) > div > form > input[type=text]:nth-child(2)'
	static emailBox =
		'#form > div > div > div:nth-child(3) > div > form > input[type=email]:nth-child(3)'
	static btnSignUp =
		'#form > div > div > div:nth-child(3) > div > form > button'
	static loginToYourAccHeader =
		'#form > div > div > div.col-sm-4.col-sm-offset-1 > div > h2'
	static emailBoxForLogin =
		'#form > div > div > div.col-sm-4.col-sm-offset-1 > div > form > input[type=email]:nth-child(2)'
	static passwordBoxForLogin =
		'#form > div > div > div.col-sm-4.col-sm-offset-1 > div > form > input[type=password]:nth-child(3)'
	static btnLogin =
		'#form > div > div > div.col-sm-4.col-sm-offset-1 > div > form > button'

	static incorrectloginText =
		'#form > div > div > div.col-sm-4.col-sm-offset-1 > div > form > p'

	static emailAlreadyExist =
		'#form > div > div > div:nth-child(3) > div > form > p'

	static canDisplaynewUserSignUpHeader() {
		cy.get(this.newUserSignUpHeader).should('have.text', 'New User Signup!')
	}

	static inputSignUpForm(name, email) {
		cy.get(this.nameBox).type(name)
		cy.get(this.emailBox).type(email)
	}

	static canClickSignUp() {
		cy.get(this.btnSignUp).click()
	}

	static canDisplayloginToYourAccHeader() {
		cy.get(this.loginToYourAccHeader).should(
			'have.text',
			'Login to your account'
		)
	}

	static inputLoginForm(email, password) {
		cy.get(this.emailBoxForLogin).type(email)
		cy.get(this.passwordBoxForLogin).type(password)
	}

	static canClickLogin() {
		cy.get(this.btnLogin).click()
	}

	static canDisplayincorrectloginText() {
		cy.get(this.incorrectloginText)
			.should('exist')
			.and('have.text', 'Your email or password is incorrect!')
	}

	static canDisplayemailAlreadyExist() {
		cy.get(this.emailAlreadyExist)
			.should('exist')
			.and('have.text', 'Email Address already exist!')
	}
}
module.exports = Register_Login
