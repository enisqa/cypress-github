describe('Cypress Studio Demo', () => {});

/* ==== Test Created with Cypress Studio ==== */
it('registerfail', function() {
  /* ==== Generated with Cypress Studio ==== */
  cy.visit('https://www.intersport.ba/');
  cy.get('[style="padding: 0.5em 2em 0.6em; background-color: rgb(255, 255, 255); border: 1px solid rgb(22, 65, 150); border-radius: 2em; cursor: pointer;"] > span').click();
  cy.get('[style="display: flex; flex-direction: row; align-items: flex-end;"] > :nth-child(2) > a > svg').click();
  cy.get('[style="text-align: center; color: rgb(102, 102, 102); font-size: 0.86em; line-height: 1; letter-spacing: 0.01em; margin-top: 16px;"] > a').click();
  cy.get(':nth-child(1) > [style="display: grid; grid-template-columns: 1fr;"] > [style="height: 40px; background-color: rgb(245, 245, 245); margin-top: 7px; grid-row-start: 1; grid-column-start: 1; display: flex;"] > input').clear('e');
  cy.get(':nth-child(1) > [style="display: grid; grid-template-columns: 1fr;"] > [style="height: 40px; background-color: rgb(245, 245, 245); margin-top: 7px; grid-row-start: 1; grid-column-start: 1; display: flex;"] > input').type('enispqa@gmail.com');
  cy.get(':nth-child(2) > [style="display: grid; grid-template-columns: 1fr;"] > [style="height: 40px; background-color: rgb(245, 245, 245); margin-top: 7px; grid-row-start: 1; grid-column-start: 1; display: flex;"] > input').clear('E');
  cy.get(':nth-child(2) > [style="display: grid; grid-template-columns: 1fr;"] > [style="height: 40px; background-color: rgb(245, 245, 245); margin-top: 7px; grid-row-start: 1; grid-column-start: 1; display: flex;"] > input').type('Enis');
  cy.get(':nth-child(3) > [style="display: grid; grid-template-columns: 1fr;"] > [style="height: 40px; background-color: rgb(245, 245, 245); margin-top: 7px; grid-row-start: 1; grid-column-start: 1; display: flex;"] > input').clear();
  cy.get(':nth-child(3) > [style="display: grid; grid-template-columns: 1fr;"] > [style="height: 40px; background-color: rgb(245, 245, 245); margin-top: 7px; grid-row-start: 1; grid-column-start: 1; display: flex;"] > input').type('Pestek');
  cy.get(':nth-child(4) > [style="display: grid; grid-template-columns: 1fr;"] > [style="height: 40px; background-color: rgb(245, 245, 245); margin-top: 7px; grid-row-start: 1; grid-column-start: 1; display: flex;"] > input').clear('R');
  cy.get(':nth-child(4) > [style="display: grid; grid-template-columns: 1fr;"] > [style="height: 40px; background-color: rgb(245, 245, 245); margin-top: 7px; grid-row-start: 1; grid-column-start: 1; display: flex;"] > input').type('Razdego123');
  cy.get(':nth-child(1) > :nth-child(1) > span > svg').click();
  cy.get('span > strong').click();
  cy.get('[style="min-height: 32px; color: rgb(229, 6, 6); font-size: 0.75em; padding-top: 1px; font-weight: 500; border-top: 2px solid; margin-top: -2px;"]').should('be.visible');
  /* ==== End Cypress Studio ==== */
});