describe('First rendering of the app', () => {
  beforeEach(() => {
    cy.visit(process.env.NEXT_PUBLIC_URL ?? 'http://localhost:3000/');
  });
  it('Frontpage can be opened', () => {
    cy.contains('Wallet Estellar');
  });
});
