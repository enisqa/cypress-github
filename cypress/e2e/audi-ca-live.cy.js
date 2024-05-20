describe('Cypress Studio MTT Test', () => {});

/* ==== Test Created with Cypress Studio ==== */
it('audilivedemo', function() {
  /* ==== Generated with Cypress Studio ==== */
  cy.visit('https://www.audi.ca/ca/web/en.html');
  cy.get('#ensCloseBanner').click();
  cy.get('.nm-stage-8913157 > .nm-stage-infocluster > .nm-stage-infocluster-linkarea > .nm-stage-infocluster-primarylink > .audi-button__text').click();
  cy.get('.audi-headline-order-1').should('be.visible');
  cy.get('.Promotionsstyle__FilterIconContainer-sc-ielxxr-5 > p').click();
  cy.get('[data-testid="USED-CAR"] > .RegionListstyle__Checkbox-sc-1mpulvv-5').click();
  cy.get('.rc-slider-handle-1').click();
  cy.get('[data-cy="SUV + image"]').click();
  cy.get('[data-testid="confirm-filters-btn"]').click();
  cy.get('[data-cy="2023,2025"] > .Globalstyle__P-sc-16mlan7-4').should('be.visible');
  cy.get('[data-cy="clear-filters-btn"] > .Globalstyle__P-sc-16mlan7-4').click();
  /* ==== End Cypress Studio ==== */
});