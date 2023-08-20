

describe('Count Test', () => {
  beforeEach('Prepare to run before each test', ()=>{
    cy.visit("");
  })
  it('Does not do much!', async () => {
      cy.get('a[class*="bg-gray-100"]').its('length').then(number => {
        console.log(number);
      }
        )
      
      const numberOfElements = await cy.get('a[class*="bg-gray-100"]').its('length');
      console.log(numberOfElements);
  })
})