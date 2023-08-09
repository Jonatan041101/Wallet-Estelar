describe('Footer Component', () => {
  beforeEach(() => {
    cy.visit('/');
  });

  it('Should open another tab each link in the footer', () => {
    cy.get('.footer__ul a[href="https://www.stellar.org/terms-of-service"]')
      .should('exist')
      .and('have.attr', 'target', '_blank');
    cy.contains('.footer__ul a', 'Términos de servicio').should('exist');

    cy.get('.footer__ul a[href="https://www.stellar.org/privacy-policy"]')
      .should('exist')
      .and('have.attr', 'target', '_blank');
    cy.contains('.footer__ul a', 'Política de privacidad').should('exist');

    cy.get('.footer__git')
      .should('exist')
      .and(
        'have.attr',
        'href',
        'https://github.com/Jonatan041101/Wallet-Stellar',
      )
      .and('have.attr', 'target', '_blank');
    cy.get('.footer__git i.footer__i').should('exist');
    cy.contains('.footer__git', 'GitHub').should('exist');
  });
});
