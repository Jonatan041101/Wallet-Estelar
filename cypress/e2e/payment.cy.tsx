describe('Payment', () => {
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
    cy.contains('button', 'Enviar').click();
    cy.get('input[name="publicKey"]').as('inputPublicKey');
    cy.get('input[name="amount"]').as('inputAssets');
    cy.get('button[data-testid="send-transaction"]').as('buttonSend');
  });

  it('Should send the transaction', () => {
    cy.get('@inputPublicKey').type(Cypress.env('public_key_send'));
    cy.get('@inputAssets').type('200');
    cy.get('@buttonSend').click();
    cy.contains('Espere un momento a que se termine la transacción').should(
      'be.visible',
    );
    cy.wait(5000);
    cy.contains('Se ha enviado').should('be.visible');
  });

  it("Should give an error message when you don't type an amount", () => {
    cy.get('@inputPublicKey').type(Cypress.env('public_key_send'));
    cy.get('@buttonSend').click();
    cy.contains('El valor ingresado no es numero').should('be.visible');
  });

  it("Should give an error message when you don't type a public key", () => {
    cy.get('@inputAssets').type('200');
    cy.get('@buttonSend').click();
    cy.contains('La llave publica que ha ingresado es incorrecta').should(
      'be.visible',
    );
  });
});
