describe('Cypress MTT Test', () => {});

/* ==== Test Created with Cypress Studio ==== */
it('demo test', function() {
  /* ==== Generated with Cypress Studio ==== */
  cy.visit('https://fa-mtt.cdn.prod.arcade.apps.one.audi/v2.9.4/demo/index.html');
  cy.get('.editor-wrapper__EditorButton-sc-1y3otti-1').click();
  cy.get(':nth-child(1) > .je-object__container > .card > :nth-child(1) > :nth-child(1) > .row > .col-md-12 > .form-group > #undefined > :nth-child(1) > :nth-child(2) > .form-check-label').click();
  cy.get('#root\\[themeContent\\]\\[theme\\]\\[1\\]').check();
  cy.get('.btn-primary').click();
  /* ==== End Cypress Studio ==== */
});