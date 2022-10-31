describe('Login', () => {
    it('Redirect to /login', () => {
      cy.visit('/');
      cy.location('pathname').should('eq', '/login');
    });
  
  it('Incorrect login', () => {
    cy.get('input[name=username]').type('pepe')

    cy.get('input[name=password]').type('pepe{enter}')
  
    cy.location('pathname').should('eq', '/login');
    });
  
    it('Login correcto', () => {
      cy.get('input[name=username]').type('admin')

      cy.get('input[name=password]').type('admin{enter}')
      cy.location('pathname').should('eq', '/');
    });

})