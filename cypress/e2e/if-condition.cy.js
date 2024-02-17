const url = 'http://localhost:5173/'
const editorId = '#editorjs'


describe('template spec', () => {
  it('should create 2 paragraphs and wrapp them in a condition', () => {

    const blockPath = 'div.ce-block'

    cy.visit(url);
    cy.wait(1000);

    // Creates two paragraphs and selects them both
    cy.get(editorId)
    .get(blockPath).click().type('First block ')
    .type('{enter}')
    .get(blockPath).last().type('Second block ')
    .type('{movetostart}')
    .trigger('keydown', {
      shiftKey: true,
      keyCode: 38,
    }).trigger('mouseup');

    // Clicks on ADD IF CONDITION button to wrap them in a condition
    cy.get('iframe').then((body) => {
        body['0'].querySelector('button')
        body['0'].contentDocument.querySelector('button').click()
    });

    cy.wait(200);

    cy.get(editorId).get('[data-statement="ENDIF"]').should('be.visible')

    // Edit condition input
    const condition = 'foo === "ok"'
    cy.get(editorId).get('.condition-input-edit').clear().type(condition);
    cy.get(editorId).get('.condition-input-edit').should("have.text", condition);

    // Delete condition
    cy.get(editorId).get('.close-icon').click({ force: true });
    cy.get(editorId).get('[data-statement="ENDIF"]').should('not.exist');

  })
})