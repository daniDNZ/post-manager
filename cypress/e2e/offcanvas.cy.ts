describe('Offcanvas', () => {
  it('Enable offcanvas', () => {
    cy.visit('/');
    cy.get('input[name=username]').type('admin')
    cy.get('input[name=password]').type('admin{enter}')

    cy.get('[data-cy="offcanvas"]')
      .should('have.css', 'display')
      .and('match', /none/);

    cy.get('[data-cy="editButton"]').first().click();

    cy.get('[data-cy="offcanvas"]')
      .should('have.css', 'display')
      .and('match', /flex/);
  });

  it('Disable offcanvas', () => {
    cy.get('[data-cy="closeOffcanvasButton"]').click();

    cy.get('[data-cy="offcanvas"]')
      .should('have.css', 'display')
      .and('match', /none/);
  });
});