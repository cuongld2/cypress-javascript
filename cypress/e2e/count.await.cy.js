

describe('Count Test', () => {
  it('Does not do much!', async () => {
    cy.visit("https://twilio-music-info-app-ha8m.vercel.app/");
      cy.get('a[class*="bg-gray-100"]').its('length').then(number => {
        console.log(number);
      }
        )
      
      const numberOfElements = await cy.get('a[class*="bg-gray-100"]').its('length');
      console.log(numberOfElements);
  })
})