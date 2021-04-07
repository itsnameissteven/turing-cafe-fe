describe('Turing Cafe', () => {
  beforeEach(() =>{
    cy.visit('http://localhost:3000/')
  })

  it('Should have a header with content', () =>{
    cy.get('h1').contains('Turing Cafe Reservations')
  });

  it('Should have reservation cards', () =>{
    cy.get('.reservations > .reservation-card').contains('Christie')
    cy.get('.reservations > .reservation-card').contains('12/29')
    cy.get('.reservations > .reservation-card').contains('7:00')
    cy.get('.reservations > .reservation-card').contains('Number of guest: 12')
    cy.get('.reservation-card__btn').contains('Cancel')
  })

  it('Should have a form with inputs', () =>{
    cy.get('form > input[name="name"]')
    cy.get('form > input[name="time"]')
    cy.get('form > input[name="date"]')
    cy.get('form > input[name="number"]')
  })


})