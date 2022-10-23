/// <reference types="cypress" />

describe('Navbar Test', () => {
    before(() => {
        cy.visit('http://zero.webappsecurity.com/index.html');
    });

    it('Should display online banking content', () => {
        cy.get('#onlineBankingMenu').contains('Online Banking').should('have.text', 'Online Banking').click()
        cy.url().should('include', 'online-banking.html')
        
        cy.get('h1').should('be.visible')
    });

    it('Should display feedback content', () => {
        cy.get('#feedback').contains('Feedback').should('have.text', 'Feedback').click()
        cy.url().should('include', 'feedback.html')
    });

    it('Should display homepage content', () => {
        cy.contains('Zero Bank').should('have.text', 'Zero Bank').click()
        cy.url().should('include', 'index.html')
    });
});