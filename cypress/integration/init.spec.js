it('visits the app', () => {
  cy.visit('/')
})

describe('Home page', () => {
  beforeEach(() => {
    cy.visit('/')
  })

  it('it check loader', () => {
    cy.get('svg').should('be.visible')
  })
})

describe('Settigns page', () => {
  it('successfuly loads', () => {
    cy.visit('/settings')
  })

})
