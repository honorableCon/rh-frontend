Cypress.Cookies.defaults({
  preserve: 'JWTtoken',
});

describe('Ajouter un personnel', () => {
  describe('Se connecter à votre compte', () => {
    it('should visit', () => {
      cy.visit('http://localhost:3000/auth/login');
      cy.url().should('include', '/auth/login');
    });

    it('should display the login page', () => {
      cy.get('h1').contains('Se connecter à votre compte');
    });

    it('should feed the form with the right values', () => {
      cy.get("input[name='email']").type('honorablecon@gmd.sn');
      cy.get("input[name='password']").type('passWord@123');
      cy.get("button[type='submit']").click();
    });

    it('should redirect to the home', () => {
      cy.url().should('include', '/');
    });

    it('should display the home page', () => {
      cy.wait(5000);
      cy.get('h1').contains(
        'Direction des Resources Humaines et de la Communication',
      );
    });
  });
});
