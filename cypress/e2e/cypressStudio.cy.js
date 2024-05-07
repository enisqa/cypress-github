describe('Cypress Studio Demo', () => {});

/* ==== Test Created with Cypress Studio ==== */
it('simpletest', function() {
  /* ==== Generated with Cypress Studio ==== */
  cy.visit('https://www.saucedemo.com/v1/index.html');
  cy.get('[data-test="username"]').clear('s');
  cy.get('[data-test="username"]').type('standard_user');
  cy.get('[data-test="password"]').clear('s');
  cy.get('[data-test="password"]').type('secret_sauce');
  cy.get('#login-button').click();
  cy.get('#item_4_img_link > .inventory_item_img').click();
  cy.get('.btn_primary').click();
  cy.get('path').click();
  cy.get('.btn_action').click();
  cy.get('[data-test="firstName"]').clear('fi');
  cy.get('[data-test="firstName"]').type('first');
  cy.get('[data-test="lastName"]').clear('la');
  cy.get('[data-test="lastName"]').type('last');
  cy.get('[data-test="postalCode"]').clear('1');
  cy.get('[data-test="postalCode"]').type('10004');
  cy.get('.btn_primary').click();
  cy.get('.btn_action').click();
  cy.get('.complete-header').should('be.visible');
  cy.get('.bm-burger-button > button').click();
  cy.get('#logout_sidebar_link').click();
  /* ==== End Cypress Studio ==== */
});