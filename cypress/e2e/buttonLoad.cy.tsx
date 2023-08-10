describe('Buttons Reload', () => {
  beforeEach(() => {
    cy.visit('/');
    cy.contains('button', 'Conectar con una clave secreta').click();
    cy.get('.check__input').should('exist').as('checkboxInput');
    cy.get('@checkboxInput').should('not.be.checked');
    cy.contains('button', 'Continuar').should('exist');
    cy.get('@checkboxInput').check();
    cy.get('@checkboxInput').should('be.checked');
    cy.contains('button', 'Continuar').click();
    cy.contains('label', 'TU CLAVE SECRETA').should('be.visible');
    cy.get('input[type="password"]').type(Cypress.env('secret_key'));
    cy.get('button[class="button button__complete"]').click();
    cy.wait(3000);
    cy.get('div[class="profile__img"]').should('be.visible');
  });

  it('Should see a Your balance has been updated message when you click the reload payments button', () => {
    cy.get('button[data-testid="load-balance"]')
      .should('be.visible')
      .as('buttonBalance');
    cy.get('@buttonBalance').click();
    cy.contains('Su saldo ha sido actualizado').should('be.visible');
  });

  it('Should see an updated history message when you click the reload history button', () => {
    cy.get('button[data-testid="reload-history"]')
      .should('be.visible')
      .as('reloadHistoryButton');
    cy.get('@reloadHistoryButton').click();
    cy.wait(1000);
    cy.contains('Historial actualizado');
  });
});
