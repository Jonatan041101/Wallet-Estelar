import expect from '../../setupTests';

const buttonTextKey = 'Generar par de claves para una nueva cuenta';
const textLiKeyConfirm =
  'Pegar su clave secreta lo hace vulnerable a accidentes, ataques y estafas que pueden provocar la pérdida de fondos.';
describe('', () => {
  beforeEach(() => {
    cy.visit('/');
    cy.contains('button', buttonTextKey).click();
  });

  it('Renders the button text correctly', () => {
    cy.contains('button', buttonTextKey).should('be.visible');
  });

  it('Calls function handleClick when the button is clicked and close when the cross is clicked', () => {
    cy.contains('li', textLiKeyConfirm).should('exist');
    cy.get('.modal__btn').click();
    cy.contains('li', textLiKeyConfirm).should('not.exist');
  });
  it('Calls the handleClick function when the button is clicked and close when the cancel button is clicked', () => {
    cy.contains('li', textLiKeyConfirm).should('exist');
    cy.contains('button', 'Cancelar').click();
    cy.contains('li', textLiKeyConfirm).should('not.exist');
  });

  it('When clicking without check give error message', () => {
    cy.contains('button', 'Continuar').click();
    cy.get('.check__input').should('exist');
    cy.get('.check__input').should('not.be.checked');
    cy.contains('button', 'Cerrar').should('exist');
    cy.contains('button', 'Cerrar').click();
    cy.contains('Guarde sus llaves').should('be.visible');
  });
  it('When clicked with check close the modal', () => {
    cy.contains('button', 'Continuar').click();
    cy.get('.check__input').should('exist');
    cy.get('.check__input').should('not.be.checked');
    cy.get('.check__input').click();
    cy.get('.check__input').should('be.checked');
    cy.contains('button', 'Cerrar').should('exist');
    cy.contains('button', 'Cerrar').click();
    cy.get('.check__input').should('not.exist');
  });
  it('When I click copy to clipboard give copy message', () => {
    cy.contains('button', 'Continuar').click();
    cy.get('.copy__button').should('exist');
    cy.get('.copy__button').click();
    cy.wrap(30000);
    cy.contains('Copiado al portapapeles').should('be.visible');
  });
});
