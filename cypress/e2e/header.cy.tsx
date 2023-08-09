describe('Header Component', () => {
  beforeEach(() => {
    cy.visit('/');
    cy.contains('button', 'Conectar con una clave secreta').should(
      'be.visible',
    );
    cy.contains('button', 'Conectar con una clave secreta').click();
  });
  it('Should see the header', () => {
    cy.contains('h3', 'Visor de cuenta').should('be.visible');
  });
  it('Should profile seen when you login', () => {
    cy.get('.check__input').should('exist');
    cy.get('.check__input').should('not.be.checked');
    cy.contains('button', 'Continuar').should('exist');
    cy.get('.check__input').check();
    cy.get('.check__input').should('be.checked');
    cy.contains('button', 'Continuar').click();
    cy.contains('label', 'TU CLAVE SECRETA').should('be.visible');
    cy.get('input[type="password"]').type(Cypress.env('secret_key'));
    cy.get('button[class="button button__complete"]').click();
    cy.wait(3000);
    cy.get('div[class="profile__img"]').should('be.visible');
  });
  it('Should log out when the log out button is clicked', () => {
    cy.get('.check__input').should('exist');
    cy.get('.check__input').should('not.be.checked');
    cy.contains('button', 'Continuar').should('exist');
    cy.get('.check__input').check();
    cy.get('.check__input').should('be.checked');
    cy.contains('button', 'Continuar').click();
    cy.contains('label', 'TU CLAVE SECRETA').should('be.visible');
    cy.get('input[type="password"]').type(Cypress.env('secret_key'));
    cy.get('button[class="button button__complete"]').click();
    cy.wait(3000);
    cy.get('div[class="profile__img"]').should('be.visible');
    cy.contains('button', 'Cerrar sesión').should('be.visible');
    cy.contains('button', 'Cerrar sesión').should('be.visible').click();
    cy.wait(3000);
    cy.contains('button', 'Cerrar sesión').should('not.exist');
  });
  it('Should copy the public key when you click on it', () => {
    cy.get('.check__input').should('exist');
    cy.get('.check__input').should('not.be.checked');
    cy.contains('button', 'Continuar').should('exist');
    cy.get('.check__input').check();
    cy.get('.check__input').should('be.checked');
    cy.contains('button', 'Continuar').click();
    cy.contains('label', 'TU CLAVE SECRETA').should('be.visible');
    cy.get('input[type="password"]').type(Cypress.env('secret_key'));
    cy.get('button[class="button button__complete"]').click();
    cy.wait(3000);
    cy.get('div[class="profile__img"]').should('be.visible');
    cy.get('button[data-testid="public-key"]').should('be.visible');
    cy.get('button[data-testid="public-key"]').should('be.visible').click();
    cy.wait(500);
    cy.contains('Copiado al portapapeles').should('be.visible');
  });
});
