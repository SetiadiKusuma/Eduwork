/// <reference types="cypress" />

describe('Searchbox Test',() => {
    before(() => {
        cy.visit('http://zero.webappsecurity.com/index.html');
    })
    
    it('Should type into searchbox and submit', () => {
        cy.get('#searchTerm').type('online {enter}')
    })

    it('Should show search result page', () => {
        cy.get('h2').should('contain.text', 'Search Results:')

        cy.get('a[href="/online-banking.html"]')
            .should('have.length', 1)
            .and('have.text', 'Zero - Free Access to Online Banking')
        
        cy.get('a[href="/bank/online-statements.html"]')
            .should('have.length', 1)
            .and('have.text', 'Zero - Online Statements')
    })

});