Cypress.Cookies.defaults({
  preserve: 'JWTtoken',
});

describe('Ajouter un personnel', () => {
  it('should visit the add page', () => {
    cy.visit('http://localhost:3000/personnels/ajouter');
    cy.url().should('include', '/personnels/ajouter');
  });
  it('should display the add personnel page', () => {
    cy.get('h1').contains('FORMULAIRE EMPLOYÉ');
  });

  it('should feed the form1 with the right values', () => {
    cy.get('input[name="nom"]').type('Sall');
    cy.get('input[name="prenom"]').type('Macky');
    cy.get('input[name="email"]').type('mackysall@gmd.sn');
    cy.get('input[name="telephone"]').type('0612345678');
    cy.get('input[name="dateDeNaissance"]').type('2000-01-01');
    cy.get('#sexes').select('Homme');
    cy.get('#countries').select('Mali');
    cy.get('input[name="nombreConjoint"]').clear().type('1');
    cy.get('input[name="nombreEnfant"]').clear().type('2');
    cy.get('input[name="cni"]').type('123456789');
    cy.get('.next-btn').click();
  });

  it('should feed the form2 with the right values', () => {
    cy.get('#filieres').select(1);
    cy.get('#typeContrats').select('CDI');
    cy.get('#fonctions').select(4);
    cy.get('#statuts').select(3);
    cy.get('input[name="dateDebut"]').type('2020-01-01');
    cy.get('input[name="dateFin"]').type('2021-01-01');
    cy.get('.next-btn').click();
  });

  it('should display the success toast', () => {
    cy.get('button[type="submit"]').click();
    cy.get('#toast-success').contains('ajouté avec succès');
  });
});
