describe('peeps home page', function () {
beforeEach(function () {
    cy.visit('/')
  });
  it('shows a list of peeps', function () {
    cy.get("#peep").should("contain","Hello World!")
  })
})
