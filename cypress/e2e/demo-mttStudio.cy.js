describe('Cypress Demo MTT Test', () => {});

/* ==== Test Created with Cypress Studio ==== */
it('EditorConfirmFail', function() {
  /* ==== Generated with Cypress Studio ==== */
  cy.visit('https://pre-cms1-author.audi.com/etc/vms_browser/vb.editor.html?fieldId=ext-comp-1485&jcrContentPath=%2Fcontent%2Fca%2Fweb%2Fen%2Fmodels%2Fa4%2Fa4-sedan%2Fjcr%3Acontent%2Fcontent%2Ffeature_app_include_305241142&schemaUrl=https%3A%2F%2Ffa-mtt.cdn.prod.arcade.apps.one.audi%2Fv2.9.4%2Feditor.json&contentType=');
  cy.get('#username').clear('e');
  cy.get('#username').type('epestek@bimm.com');
  cy.get('#password').clear('R');
  cy.get('#password').type('RazdegoGorazde123!');
  cy.get('#submit-button').click();
  cy.get('#root\\[themeContent\\]\\[theme\\]\\[0\\]').check();
  cy.get('.btn-primary').click();
  /* ==== End Cypress Studio ==== */
});

