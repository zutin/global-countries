describe('Country List', () => {
  it('successfully returns country list', () => {
    cy.intercept('POST', 'https://countries.trevorblades.com/graphql').as('getCountries')

    cy.visit('/')
    cy.contains('Loading...').should('be.visible')
    cy.wait('@getCountries').its('response.statusCode').should('eq', 200)
    cy.contains('Loading...').should('not.exist')
    cy.contains('Brazil').should('be.visible')
    cy.contains('Brasília').should('be.visible')
    cy.contains('Argentina').should('be.visible')
    cy.contains('Buenos Aires').should('be.visible')
  })

  it('filters country list by country name', () => {
    cy.intercept('POST', 'https://countries.trevorblades.com/graphql').as('getCountries')

    cy.visit('/')
    cy.wait('@getCountries').its('response.statusCode').should('eq', 200)
    cy.contains('Brazil').should('be.visible')
    cy.contains('Canada').should('be.visible')
    cy.get('#country-filter').type('canada')
    cy.contains('Brazil').should('not.exist')
    cy.contains('Canada').should('be.visible')
    cy.get('#country-filter').clear()
    cy.contains('Brazil').should('be.visible')
    cy.contains('Canada').should('be.visible')
  })

  it('filters country list by capital name', () => {
    cy.intercept('POST', 'https://countries.trevorblades.com/graphql').as('getCountries')

    cy.visit('/')
    cy.wait('@getCountries').its('response.statusCode').should('eq', 200)
    cy.contains('Brazil').should('be.visible')
    cy.contains('Germany').should('be.visible')
    cy.get('#country-filter').type('berlin')
    cy.contains('Brazil').should('not.exist')
    cy.contains('Germany').should('be.visible')
    cy.get('#country-filter').clear()
    cy.contains('Brazil').should('be.visible')
    cy.contains('Germany').should('be.visible')
  })
})