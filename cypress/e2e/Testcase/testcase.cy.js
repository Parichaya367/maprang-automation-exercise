const Homepage = require('../../page-objects/Homepage')
const Register_Login = require('../../page-objects/Register_Login')
const SignUp = require('../../page-objects/SignUp')
const AccountCreate = require('../../page-objects/AccountCreate')
const AccountDeleted = require('../../page-objects/AccountDeleted')

describe.only('Test Case 1: Register User', () => {
	//To P'Nut! This one is contained register acc part and delete acc part be careful if you want the acc to still exist!

	beforeEach(() => {
		cy.fixture('mydata.json').as('data')
	})
	it('Register"	', function () {
		//2. Navigate to url 'http://automationexercise.com'
		Homepage.navigateToURL('https://automationexercise.com/')

		//3. Verify that home page is visible successfully
		Homepage.canDisplayWebsiteIcon()

		//4. Click on 'Signup / Login' button
		Homepage.clickSignUpLogin()

		//5. Verify 'New User Signup!' is visible
		Register_Login.canDisplaynewUserSignUpHeader()

		//6. Enter name and email address
		Register_Login.inputSignUpForm(this.data.NAME, this.data.EMAIL)

		//7. Click 'Signup' button
		Register_Login.canClickSignUp()

		//8. Verify that 'ENTER ACCOUNT INFORMATION' is visible
		SignUp.CanDisplayEnterAccInfoText()

		//9. Fill details: Title, Name, Email, Password, Date of birth
		SignUp.fillDetail1(this.data.PASSWORD)

		//10. Select checkbox 'Sign up for our newsletter!'
		SignUp.selectCheckBoxNews()

		//11. Select checkbox 'Receive special offers from our partners!'
		SignUp.selectCheckBoxPartner()

		//12. Fill details: First name, Last name, Company, Address, Address2, Country, State, City, Zipcode, Mobile Number
		SignUp.fillDetail2(
			this.data.FName,
			this.data.LName,
			this.data.Company,
			this.data.Address,
			this.data.Address2,
			this.data.State,
			this.data.City,
			this.data.Zipcode,
			this.data.MobileNum
		)

		//13. Click 'Create Account button'
		SignUp.canClickCreateButton()

		//14. Verify that 'ACCOUNT CREATED!' is visible
		AccountCreate.canDisplayAccCreatedText()

		//15. Click 'Continue' button
		AccountCreate.clickContinue()

		//16. Verify that 'Logged in as username' is visible
		Homepage.canDisplaylogInSuccess()

		//------DELETE PART----------

		// //17. Click 'Delete Account' button
		// Homepage.canDeletteAcc()

		// //18. Verify that 'ACCOUNT DELETED!' is visible and click 'Continue' button
		// AccountDeleted.canDisplayAccDelText()
		// AccountDeleted.clickContinue()
	})
})

describe('Test Case 2: Login User with correct email and password', () => {
	//To P'Nut! if you want to review this test case, you need to run test case 1 but comment the delete part!

	beforeEach(() => {
		cy.fixture('mydata.json').as('data')
	})
	it('Success Login', function () {
		//2. Navigate to url 'http://automationexercise.com'
		Homepage.navigateToURL('https://automationexercise.com/')

		//3. Verify that home page is visible successfully
		Homepage.canDisplayWebsiteIcon()

		//4. Click on 'Signup / Login' button
		Homepage.clickSignUpLogin()

		//5. Verify 'Login to your account' is visible
		Register_Login.canDisplayloginToYourAccHeader()

		//6. Enter correct email address and password
		Register_Login.inputLoginForm(this.data.EMAIL, this.data.PASSWORD)

		//7. Click 'login' button
		Register_Login.canClickLogin()

		//8. Verify that 'Logged in as username' is visible
		Homepage.canDisplaylogInSuccess()

		//9. Click 'Delete Account' button
		//Homepage.canDeletteAcc()

		//10. Verify that 'ACCOUNT DELETED!' is visible
		//AccountDeleted.canDisplayAccDelText()
	})
})

describe('Test Case 3: Login User with incorrect email and password', () => {
	beforeEach(() => {
		cy.fixture('mydata.json').as('data')
	})
	it('NOT Success Login', function () {
		// 2. Navigate to url 'http://automationexercise.com'
		Homepage.navigateToURL('https://automationexercise.com/')

		// 3. Verify that home page is visible successfully
		Homepage.canDisplayWebsiteIcon()

		// 4. Click on 'Signup / Login' button
		Homepage.clickSignUpLogin()

		// 5. Verify 'Login to your account' is visible
		Register_Login.canDisplayloginToYourAccHeader()

		// 6. Enter incorrect email address and password
		Register_Login.inputLoginForm(
			this.data.EMAIL_FOR_TEST,
			this.data.PASSWORD_FOR_TEST
		)

		// 7. Click 'login' button
		Register_Login.canClickLogin()

		// 8. Verify error 'Your email or password is incorrect!' is visible
		Register_Login.canDisplayincorrectloginText()
	})
})

describe('Test Case 4: Logout User', () => {
	beforeEach(() => {
		cy.fixture('mydata.json').as('data')
	})
	it('Log out', function () {
		// 1. Launch browser
		// 2. Navigate to url 'http://automationexercise.com'
		Homepage.navigateToURL('https://automationexercise.com/')

		// 3. Verify that home page is visible successfully
		Homepage.canDisplayWebsiteIcon()

		// 4. Click on 'Signup / Login' button
		Homepage.clickSignUpLogin()

		//5. Verify 'Login to your account' is visible
		Register_Login.canDisplayloginToYourAccHeader()

		//6. Enter correct email address and password
		Register_Login.inputLoginForm(this.data.EMAIL, this.data.PASSWORD)

		//7. Click 'login' button
		Register_Login.canClickLogin()

		//8. Verify that 'Logged in as username' is visible
		Homepage.canDisplaylogInSuccess()

		// 9. Click 'Logout' button
		Homepage.canClickLogOut()

		// 10. Verify that user is navigated to login page
		Register_Login.canDisplayloginToYourAccHeader()
	})
})

describe('Test Case 5: Register User with existing email', () => {
	beforeEach(() => {
		cy.fixture('mydata.json').as('data')
	})
	it('Log out', function () {
		// 1. Launch browser
		// 2. Navigate to url 'http://automationexercise.com'
		Homepage.navigateToURL('https://automationexercise.com/')

		// 3. Verify that home page is visible successfully
		Homepage.canDisplayWebsiteIcon()

		// 4. Click on 'Signup / Login' button
		Homepage.clickSignUpLogin()

		//5. Verify 'New User Signup!' is visible
		Register_Login.canDisplaynewUserSignUpHeader()

		//6. Enter name and email address
		Register_Login.inputSignUpForm(this.data.NEW_NAME, this.data.EMAIL)

		//7. Click 'Signup' button
		Register_Login.canClickSignUp()

		//7. Click 'login' button
		Register_Login.canClickLogin()

		//8. Verify error 'Email Address already exist!' is visible
		Register_Login.canDisplayemailAlreadyExist()
	})
})
