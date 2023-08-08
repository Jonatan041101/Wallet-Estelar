const buttonText = 'Conectar con una clave secreta';
const textLiLoginConfirm =
  'Copiar y pegar su clave secreta lo hace vulnerable a accidentes, ataques y estafas que pueden provocar la pérdida de fondos.';
describe(`You should be able to log in with a secret key and give warnings that it's risky to share your secret key.`, () => {
  beforeEach(() => {
    cy.visit('/');
    cy.contains('button', buttonText).click();
  });

  it('Should render the button text correctly', () => {
    cy.contains('button', buttonText).should('be.visible');
  });

  it('It should call the handleClick function when the button is clicked and close when the cross is clicked', () => {
    cy.contains('li', textLiLoginConfirm).should('exist');
    cy.get('.modal__btn').click();
    cy.contains('li', textLiLoginConfirm).should('not.exist');
  });
  it('The modal should close when the cancel button is clicked', () => {
    cy.contains('li', textLiLoginConfirm).should('exist');
    cy.contains('button', 'Cancelar').click();
    cy.contains('li', textLiLoginConfirm).should('not.exist');
  });
  it('It should give an error message when clicking continue regardless of the risks', () => {
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
  it('The login modal should close when I click the cross button', () => {
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
});
