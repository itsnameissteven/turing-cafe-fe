describe('Turing Cafe', () => {
  beforeEach(() =>{
    cy.visit('http://localhost:3000/')
  })

  it('Should have a header with content', () =>{
    cy.get('h1').contains('Turing Cafe Reservations')
  });

  it('Should have reservation cards', () =>{
    cy.get('.reservations > .reservation-card').contains('Christie')
      .get('.reservations > .reservation-card').contains('12/29')
      .get('.reservations > .reservation-card').contains('7:00')
      .get('.reservations > .reservation-card').contains('Number of guest: 12')
      .get('.reservation-card__btn').contains('Cancel')
  });

  it('Should have a form with inputs', () =>{
    cy.get('form > input[name="name"]')
      .get('form > input[name="time"]')
      .get('form > input[name="date"]')
      .get('form > input[name="number"]')
      .get('form > button').contains('Make Reservation')
  });

  it('Should be able to type into the form and submit new resy to be displayed', () => {
    cy.get('form > input[name="name"]').type('Steven').should('have.value', 'Steven')
      .get('form > input[name="date"]').type('4/19').should('have.value', '4/19')
      .get('form > input[name="time"]').type('7:13').should('have.value', '7:13')  
      .get('form > input[name="number"]').type('5').should('have.value', '5')
      .get('form > button').click()
    cy.get('.reservations > .reservation-card').contains('Steven')
      .get('.reservations > .reservation-card').contains('4/19')
      .get('.reservations > .reservation-card').contains('7:13')
      .get('.reservations > .reservation-card').contains('Number of guest: 5')
  })
})