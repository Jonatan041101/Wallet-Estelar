describe('Buttons Reload', () => {
  beforeEach(() => {
    cy.visit('/');
    cy.contains('button', 'Conectar con una clave secreta').click();
    cy.get('.check__input').as('checkboxInput');
    cy.contains('button', 'Continuar').as('buttonContinue');
    cy.get('@checkboxInput').check();
    cy.get('@buttonContinue').click();
    cy.get('input[type="password"]').type(Cypress.env('secret_key'));
    cy.get('button[class="button button__complete"]').click();
    cy.wait(3000);
  });

  it('Should see a Your balance has been updated message when you click the reload payments button', () => {
    cy.get('button[data-testid="load-balance"]')
      .should('be.visible')
      .as('buttonBalance');
    cy.get('@buttonBalance').click();
    cy.contains('Su saldo ha sido actualizado').should('be.visible');
  });

  it('Should see an updated history message when you click the reload history button', () => {
    cy.get('button[data-testid="reload-history"]').should('be.visible').click();
    cy.wait(1000);
    cy.contains('Historial actualizado');
  });
});
