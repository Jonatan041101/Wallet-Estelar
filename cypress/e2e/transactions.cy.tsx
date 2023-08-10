describe('Transactions Component', () => {
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

  it('Should see the transactions component', () => {
    cy.contains('Historial de Pagos').should('be.visible');
  });

  it('Should see an updated history message when making a payment', () => {
    cy.contains('button', 'Enviar').should('be.visible').as('buttonAsset');
    cy.get('@buttonAsset').click();
    cy.get('input[name="publicKey"]').should('be.visible').as('inputPublicKey');
    cy.get('input[name="amount"]').as('inputAssets');
    cy.get('button[data-testid="send-transaction"]')
      .should('be.visible')
      .as('buttonSend');
    cy.get('@inputPublicKey').type(Cypress.env('public_key_send'));
    cy.get('@inputAssets').type('200');
    cy.get('@buttonSend').click();
    cy.contains('Espere un momento a que se termine la transacción').should(
      'be.visible',
    );
    cy.wait(4000);
    cy.contains('Se ha enviado').should('be.visible');
    cy.contains('Historial actualizado').should('be.visible');
  });
});
