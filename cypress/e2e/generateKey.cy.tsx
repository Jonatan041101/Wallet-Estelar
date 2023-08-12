const buttonTextKey = 'Generar par de claves para una nueva cuenta';
const textLiKeyConfirm =
  'Pegar su clave secreta lo hace vulnerable a accidentes, ataques y estafas que pueden provocar la pérdida de fondos.';
describe('Button Component', () => {
  beforeEach(() => {
    cy.visit('/');
    cy.contains('button', buttonTextKey).should('be.visible');
    cy.get('button').contains('span', buttonTextKey).click();
    cy.contains('li', textLiKeyConfirm).as('warning');
    cy.contains('button', 'Continuar').as('buttonContinue');
    cy.contains('button', 'Cerrar').should('not.exist').as('buttonClose');
  });

  it('Should call the handleClick function when the button is clicked and close when the cross is clicked', () => {
    cy.get('@warning').should('exist');
    cy.get('.modal__btn').click();
    cy.get('@warning').should('not.exist');
  });

  it('Should call the handleClick function when the button is clicked and close when the cancel button is clicked', () => {
    cy.get('@warning').should('exist');
    cy.contains('button', 'Cancelar').click();
    cy.get('@warning').should('not.exist');
  });

  it('Should give an error message if the input is not checked', () => {
    cy.get('@buttonContinue').click();
    cy.get('input[type="checkbox"]').should('exist').as('checkboxInput');
    cy.get('@checkboxInput').should('not.be.checked');
    cy.contains('button', 'Cerrar').should('exist').click();
    cy.contains('Guarde sus llaves').should('be.visible');
  });

  it('Should modal close when you click the cancel button if the input is checked', () => {
    cy.get('@buttonContinue').click();
    cy.get('input[type="checkbox"]').should('exist').as('checkboxInput');
    cy.get('@checkboxInput').should('not.be.checked');
    cy.get('@checkboxInput').click();
    cy.get('@checkboxInput').should('be.checked');
    cy.contains('button', 'Cerrar').should('exist').click();
    cy.get('@checkboxInput').should('not.exist');
  });

  it('Should give a copy to clipboard message when i click on copy keys', () => {
    cy.get('@buttonContinue').click();
    cy.get('.copy__button').should('exist').click();
    cy.contains('Copiado al portapapeles').should('be.visible');
  });
});
