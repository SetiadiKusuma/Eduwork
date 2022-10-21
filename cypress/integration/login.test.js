/// <reference types="cypress" />

describe('Login/Logout Test', () => {
    before(() => {
        cy.visit('http://zero.webappsecurity.com/index.html');
        cy.url().should('include', 'index.html')
        cy.get('#signin_button').click();
    });

    // NEGATIVE SCENARIO

    it('Should try to login with invalid data', () => {
        cy.get('#login_form').should('be.visible');
        cy.get('#user_login').type('invalid username');
        cy.get('#user_password').type('invalid password');
        cy.get('input[name="submit"]').click();
    });

    it('Should display error message', () => {
        cy.get('.alert-error')
            .should('be.visible')
            .and('contain.text', 'Login and/or password are wrong.')
    });

    // POSITIVE TEST

    it('Should login to application with valid data', () => {
        cy.fixture("user").then((user) => {

            cy.login('username', 'password')

            cy.get('h2').should('contain.text', 'Cash Accounts');
        })
    });

    it('Should logout from the application', () => {
        cy.contains('username').click()
        cy.get('#logout_link')
            .should('have.attr', 'href')
            .and('include', 'logout.html')
        cy.get('#logout_link').click()

        cy.get('strong').should('contain.text', 'Home')
    });
});