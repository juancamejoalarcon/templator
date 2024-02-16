const url = 'http://127.0.0.1:5173/'
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

    cy.wait(200);

    // Clicks on ADD IF CONDITION button to wrap them in a condition
    cy.get('iframe').then((body) => {
        body['0'].querySelector('button')
        body['0'].contentDocument.querySelector('button').click()
    });

    cy.wait(200);

    cy.get(editorId).get('.condition-input-edit').clear().type('foo === "ok"');



  })
})