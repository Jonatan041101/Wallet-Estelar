const buttonTextKey = 'Generar par de claves para una nueva cuenta';
const textLiKeyConfirm =
  'Pegar su clave secreta lo hace vulnerable a accidentes, ataques y estafas que pueden provocar la pérdida de fondos.';
describe('Button Component', () => {
  beforeEach(() => {
    cy.visit('/');
    cy.contains('button', buttonTextKey).should('be.visible');

    cy.get('button').contains('span', buttonTextKey).click({ force: true });
  });

  it('Should render the button text correctly.', () => {});

  it('Should call the handleClick function when the button is clicked and close when the cross is clicked', () => {
    cy.contains('li', textLiKeyConfirm).should('exist');
    cy.get('.modal__btn').click();
    cy.contains('li', textLiKeyConfirm).should('not.exist');
  });
  it('Should call the handleClick function when the button is clicked and close when the cancel button is clicked', () => {
    cy.contains('li', textLiKeyConfirm).should('exist');
    cy.contains('button', 'Cancelar').click();
    cy.contains('li', textLiKeyConfirm).should('not.exist');
  });

  it('Should give an error message if the input is not checked', () => {
    cy.contains('button', 'Continuar').click();
    cy.get('.check__input').should('exist');
    cy.get('.check__input').should('not.be.checked');
    cy.contains('button', 'Cerrar').should('exist');
    cy.contains('button', 'Cerrar').click();
    cy.contains('Guarde sus llaves').should('be.visible');
  });
  it('Should modal close when you click the cancel button if the input is checked', () => {
    cy.contains('button', 'Continuar').click();
    cy.get('.check__input').should('exist');
    cy.get('.check__input').should('not.be.checked');
    cy.get('.check__input').click();
    cy.get('.check__input').should('be.checked');
    cy.contains('button', 'Cerrar').should('exist');
    cy.contains('button', 'Cerrar').click();
    cy.get('.check__input').should('not.exist');
  });
  it('Should give a copy to clipboard message when i click on copy keys', () => {
    cy.contains('button', 'Continuar').click();
    cy.get('.copy__button').should('exist');
    cy.get('.copy__button').should('exist').click();
    cy.contains('Copiado al portapapeles').should('be.visible');
  });
});
