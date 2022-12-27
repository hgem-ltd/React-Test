describe ('Adding items to basket and checkout', () => {
  it('Basket counter reflects added items', () => {
      // Go to menu
      cy.visit('http://localhost:3000')
      cy.get('[data-cy="cartCounter"]').should('have.text', "0")
      cy.get('[data-cy="addItem"]').first().click()
      cy.get('[data-cy="cartCounter"]').should('have.text', "1")
      cy.get('[data-cy="addItem"]').first().click()
      cy.get('[data-cy="cartCounter"]').should('have.text', "2")
      cy.get('[data-cy="addItem"]').eq(2).click().click()
      cy.get('[data-cy="cartCounter"]').should('have.text', "4")
      // Go to basket
  })
  it('Added items can be seen in the basket', () => {
    cy.visit('http://localhost:3000')
    // Add one item
    cy.get('[data-cy="addItem"]').eq(5).click()
    // Add two identical items
    cy.get('[data-cy="addItem"]').eq(1).click().click()
    // Get their IDs
    cy.get('[data-type="menuItem"]').eq(5).invoke('attr', 'data-id')
      .then((firstItemID) => {
        cy.get('[data-type="menuItem"]').eq(1).invoke('attr', 'data-id')
          .then((secondItemID) => {
            // Go to basket
            cy.get('[data-cy="basketLink"]').click()
            // Check if items in basket are the ones we added
            cy.get('[data-type="basketItem"]').first()
              .should('have.attr', 'data-id', firstItemID) 
            cy.get('[data-type="basketItem"]').eq(1)
              .should('have.attr', 'data-id', secondItemID) 
            // Check quantity of second item
            cy.get('[data-cy="qty"]').eq(1).should('have.text', "2")
          })
      })
  })
  it('Basket items with 0 quantity are removed', () => {
    cy.visit('http://localhost:3000')
    cy.get('[data-cy="addItem"]').eq(2).click().click()
    cy.get('[data-cy="basketLink"]').click()
    cy.get('[data-type="basketItem"]').should('exist')
    cy.get('[data-cy="decr"]').click().click()
    cy.get('[data-type="basketItem"]').should('not.exist')
  })
})