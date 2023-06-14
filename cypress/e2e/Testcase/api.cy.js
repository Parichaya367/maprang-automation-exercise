describe('API 1: Get All Products List', () => {
	it('Get request', () => {
		cy.request({
			method: 'GET',
			url: 'https://automationexercise.com/api/productsList',
		}).then(response => {
			// Assert the response code is 200
			expect(response.status).to.eq(200)
			expect(response.body.length).to.eq(5549)
			cy.writeFile('response_API1.json', response.body)
		})
	})
})

describe('API 3: Get All Brands List', () => {
	it('Get request', () => {
		cy.request({
			method: 'GET',
			url: 'https://automationexercise.com/api/brandsList',
		}).then(response => {
			expect(response.status).to.eq(200)
			expect(response.body.length).to.eq(1121)
			cy.writeFile('response_API3.json', response.body)
		})
	})
})

describe('API 4: PUT To All Brands List', () => {
	it('Put request', () => {
		cy.request({
			method: 'PUT',
			url: 'https://automationexercise.com/api/brandsList',
			failOnStatusCode: false,
			body: { id: 1, brand: 'ABCDE' },
		}).then(response => {
			expect(response.body.responseCode).to.eq(405)
			expect(response.body.message).to.eq(
				'This request method is not supported.'
			)
			cy.writeFile('response_API4.json', response.body)
		})
	})
})

describe('API 6: POST To Search Product without search_product parameter', () => {
	it('Post request', () => {
		cy.request({
			method: 'POST',
			url: 'https://automationexercise.com/api/searchProduct',
			headers: { 'Content-Type': 'application/json' },
			form: true,
			// body: {
			// 	search_product: 'jean',
			// },
			failOnStatusCode: false,
		}).then(response => {
			expect(response.body).to.eq(
				'{"responseCode": 400, "message": "Bad request, search_product parameter is missing in POST request."}'
			)
			cy.writeFile('response_API6.json', response.body)
		})
	})
})

describe('API 8: POST To Verify Login without email parameter', () => {
	it('Post request', () => {
		cy.request({
			method: 'POST',
			url: 'https://automationexercise.com/api/verifyLogin',
			headers: { 'Content-Type': 'application/json' },
			form: true,
			body: {
				password: '12123',
			},
			failOnStatusCode: false,
		}).then(response => {
			expect(response.body).to.eq(
				'{"responseCode": 400, "message": "Bad request, email or password parameter is missing in POST request."}'
			)
			cy.writeFile('response_API8.json', response.body)
		})
	})
})
