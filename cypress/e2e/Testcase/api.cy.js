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
			// Assert the response code is 200
			expect(response.status).to.eq(200)
			expect(response.body.length).to.eq(1121)
			cy.writeFile('response_API3.json', response.body)
		})
		//status
		// cy.get('@res').its('status').should('equal', 200)
		// cy.log(JSON.stringify('@res'))
	})
})

describe.only('API 4: PUT To All Brands List', () => {
	it('Put request', () => {
		cy.request({
			method: 'PUT',
			url: 'https://automationexercise.com/api/brandsList/',
			failOnStatusCode: false,
			body: { id: 1, brand: 'ABCDE' },
		}).then(response => {
			// expect(response.responseCode).to.eq(405)
			// expect(response.body).to.eq('This request method is not supported.')
			cy.writeFile('response_API4.json', response.body)
		})
		//--------------------------------
		// cy.intercept('PUT', 'https://automationexercise.com/api/brandsList/*', {
		// 	statusCode: 405,
		// 	body: { id: 1, brand: 'ABCDE' },
		// })
	})
})
