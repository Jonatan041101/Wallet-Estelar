describe('Transactions Component', () => {
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

  it('Should see the transactions component', () => {
    cy.contains('Historial de Pagos').should('be.visible');
  });

  it('Should see an updated history message when making a payment', () => {
    cy.contains('button', 'Enviar').should('be.visible').click();
    cy.get('input[name="publicKey"]')
      .should('be.visible')
      .type(Cypress.env('public_key_send'));
    cy.get('input[name="amount"]').type('200');
    cy.get('button[data-testid="send-transaction"]')
      .should('be.visible')
      .click();
    cy.contains('Espere un momento a que se termine la transacción').should(
      'be.visible',
    );
    cy.wait(4000);
    cy.contains('Se ha enviado').should('be.visible');
    cy.contains('Historial actualizado').should('be.visible');
  });
});
