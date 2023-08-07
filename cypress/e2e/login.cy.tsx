const buttonText = 'Conectar con una clave secreta';
const textLiLoginConfirm =
  'Copiar y pegar su clave secreta lo hace vulnerable a accidentes, ataques y estafas que pueden provocar la pérdida de fondos.';
describe('Button Component', () => {
  beforeEach(() => {
    cy.visit('/');
    cy.contains('button', buttonText).click();
  });

  it('renders the button text correctly', () => {
    cy.contains('button', buttonText).should('be.visible');
  });

  it('calls function handleClick when the button is clicked and close when the cross is clicked', () => {
    cy.contains('li', textLiLoginConfirm).should('exist');
    cy.get('.modal__btn').click();
    cy.contains('li', textLiLoginConfirm).should('not.exist');
  });
  it('calls the handleClick function when the button is clicked and close when the cancel button is clicked', () => {
    cy.contains('li', textLiLoginConfirm).should('exist');
    cy.contains('button', 'Cancelar').click();
    cy.contains('li', textLiLoginConfirm).should('not.exist');
  });
  it('When clicking without check give error message', () => {
    cy.get('.check__input').should('exist');
    cy.get('.check__input').should('not.be.checked');
    cy.contains('button', 'Continuar').should('exist');
    cy.contains('button', 'Continuar').click();
    cy.contains('Lee con atención').should('be.visible');
  });
  it('When clicking with check see the login', () => {
    cy.get('.check__input').should('exist');
    cy.get('.check__input').should('not.be.checked');
    cy.contains('button', 'Continuar').should('exist');
    cy.get('.check__input').check();
    cy.get('.check__input').should('be.checked');
    cy.contains('button', 'Continuar').click();
    cy.contains('label', 'TU CLAVE SECRETA').should('be.visible');
  });
  it('When clicking on the cross of the login modal, close it.', () => {
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
