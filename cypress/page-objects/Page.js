class Page {
	static navigateToURL(url) {
		cy.visit(url)
	}
}

module.exports = Page
