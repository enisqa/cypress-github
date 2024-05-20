describe('Cypress Studio Demo', () => {});

/* ==== Test Created with Cypress Studio ==== */
it('New Login', function() {
  /* ==== Generated with Cypress Studio ==== */
  cy.visit('https://www.saucedemo.com/v1/index.html');
  cy.get('[data-test="username"]').clear('s');
  cy.get('[data-test="username"]').type('standard_user');
  cy.get('[data-test="password"]').clear('s');
  cy.get('[data-test="password"]').type('secret_sauce');
  cy.get('#login-button').should('be.visible');
  cy.get('.login_logo').should('be.visible');
  cy.get('#login-button').click();
  cy.get(':nth-child(1) > .pricebar > .btn_primary').click();
  cy.get('path').click();
  cy.get('.cart_footer > .btn_secondary').click();
  cy.get('.product_label').should('have.text', 'Products');
  cy.get('.bm-burger-button > button').click();
  cy.get('#logout_sidebar_link').click();
  /* ==== End Cypress Studio ==== */
});