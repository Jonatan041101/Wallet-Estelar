const buttonText = 'Conectar con una clave secreta';
const textLiLoginConfirm =
  'Copiar y pegar su clave secreta lo hace vulnerable a accidentes, ataques y estafas que pueden provocar la pérdida de fondos.';
const secretKeyFail = 'AASDASD0ASDASD0ASDASD0ASDSA0DASDJASDAKS';
describe('Button Component', () => {
  beforeEach(() => {
    cy.visit('/');
    cy.contains('button', buttonText).should('be.visible');
    cy.contains('button', buttonText).click();
  });

  it('Should render the button text correctly', () => {
    cy.contains('button', buttonText).should('be.visible');
  });

  it('Should call the handleClick function when the button is clicked and close when the cross is clicked', () => {
    cy.contains('li', textLiLoginConfirm).should('exist');
    cy.get('.modal__btn').click();
    cy.contains('li', textLiLoginConfirm).should('not.exist');
  });
  it('Should modal close when the cancel button is clicked', () => {
    cy.contains('li', textLiLoginConfirm).should('exist');
    cy.contains('button', 'Cancelar').click();
    cy.contains('li', textLiLoginConfirm).should('not.exist');
  });
  it('Should give an error message when clicking continue regardless of the risks', () => {
    cy.get('.check__input').should('exist');
    cy.get('.check__input').should('not.be.checked');
    cy.contains('button', 'Continuar').should('exist');
    cy.contains('button', 'Continuar').click();
    cy.contains('Lee con atención').should('be.visible');
  });
  it('Should when clicking on continue taking into account the risks with the input in check show the login modal', () => {
    cy.get('.check__input').should('exist');
    cy.get('.check__input').should('not.be.checked');
    cy.contains('button', 'Continuar').should('exist');
    cy.get('.check__input').check();
    cy.get('.check__input').should('be.checked');
    cy.contains('button', 'Continuar').click();
    cy.contains('label', 'TU CLAVE SECRETA').should('be.visible');
  });
  it('Should login modal close when I click the cross button', () => {
    cy.get('.check__input').should('exist');
    cy.get('.check__input').should('not.be.checked');
    cy.contains('button', 'Continuar').should('exist');
    cy.get('.check__input').check();
    cy.get('.check__input').should('be.checked');
    cy.contains('button', 'Continuar').click();
    cy.contains('label', 'TU CLAVE SECRETA').should('be.visible');
    cy.get('.modal__btn').click();
    cy.get('.modal__btn').should('not.exist');
  });
  it('Should log in by entering the secret key and changing to the wallet path', () => {
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
    cy.contains('h3', 'Su clave pública estelar').should('be.visible');
  });
  it('Should log in by entering the secret key and changing to the wallet path', () => {
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
    cy.contains('h3', 'Su clave pública estelar').should('be.visible');
  });
  it.only('Should give an error message when entering an invalid secret key', () => {
    cy.get('.check__input').should('exist');
    cy.get('.check__input').should('not.be.checked');
    cy.contains('button', 'Continuar').should('exist');
    cy.get('.check__input').check();
    cy.get('.check__input').should('be.checked');
    cy.contains('button', 'Continuar').click();
    cy.contains('label', 'TU CLAVE SECRETA').should('be.visible');
    cy.get('input[type="password"]').type(secretKeyFail);
    cy.get('button[class="button button__complete"]').click();
    cy.wait(1000);
    cy.contains('La llave secreta que a ingresado es incorrecta');
  });
  it('Should show a message that the account has been activated when clicking on the activate account button', () => {
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
    cy.contains('h3', 'Su clave pública estelar').should('be.visible');
    cy.contains('button', 'Activar Cuenta').should('exist');
    cy.contains('button', 'Activar Cuenta').click();
    cy.wait(8000);
    cy.contains('La cuenta a sido activada').should('be.visible');
  });
});
