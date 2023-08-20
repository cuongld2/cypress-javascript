

describe('Count Test', () => {
    it('Modify response', () => {

        // Modify response for API retrieving favorite tracks to only return 1 track
        cy.intercept('GET', '/api/stats/tracks', {
            body: [{"title":"Past Lives","artist":"Martin Arteta, creamy, 11:11 Music Group","url":"https://open.spotify.com/track/3YaRY9vbpnggTArCdGVXnS","coverImage":{"height":300,"url":"https://i.scdn.co/image/ab67616d00001e02281229a3fdf6a77dd5c1c97f","width":300}}],
        })
        cy.visit("/");
        cy.get('a[class*="bg-gray-100"]').its('length').should('eq',11);
        // cy.get('a[class*="bg-gray-100"]').its('length').then(number => {
        //   cy.log(number);
        // }
        //   )
    }),

    it('Block the API', () => {

        // Modify response for API retrieving favorite tracks to only return 1 track
        cy.intercept('GET', '/api/stats/tracks',(req) => {
            req.destroy();
          })
        cy.visit("/");
        // cy.get('a[class*="bg-gray-100"]').its('length').then(number => {
        //   cy.log(number);
        // }
        //   )
        cy.get('a[class*="bg-gray-100"]').its('length').should('eq',10);
    })

  })    