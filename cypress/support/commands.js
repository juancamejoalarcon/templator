// ***********************************************
// This example commands.js shows you how to
// create various custom commands and overwrite
// existing commands.
//
// For more comprehensive examples of custom
// commands please read more here:
// https://on.cypress.io/custom-commands
// ***********************************************
//
//
// -- This is a parent command --
// Cypress.Commands.add('login', (email, password) => { ... })
//
//
// -- This is a child command --
// Cypress.Commands.add('drag', { prevSubject: 'element'}, (subject, options) => { ... })
//
//
// -- This is a dual command --
// Cypress.Commands.add('dismiss', { prevSubject: 'optional'}, (subject, options) => { ... })
//
//
// -- This will overwrite an existing command --
// Cypress.Commands.overwrite('visit', (originalFn, url, options) => { ... })

/**
 * Select passed text in element
 * Note. Previous subject should have 'textNode' as firstChild
 *
 * Usage
 * cy.get('[data-cy=editorjs]')
 *  .find('.ce-paragraph')
 *  .selectText('block te')
 *
 * @param text - text to select
 */
Cypress.Commands.add('selectText', {
    prevSubject: true,
  }, (subject, text) => {
    const el = subject[0];
    const document = el.ownerDocument;
    const range = document.createRange();
    const textNode = el.firstChild;
    console.log('----')
    console.log(textNode.textContent)
    const selectionPositionStart = textNode.textContent.indexOf(text);
    const selectionPositionEnd = selectionPositionStart + text.length;
  
    range.setStart(textNode, selectionPositionStart);
    range.setEnd(textNode, selectionPositionEnd);
    document.getSelection().removeAllRanges();
    document.getSelection().addRange(range);
  
    return cy.wrap(subject);
  });


  /**
 * Select element's text by offset
 * Note. Previous subject should have 'textNode' as firstChild
 *
 * Usage
 * cy.get('[data-cy=editorjs]')
 *  .find('.ce-paragraph')
 *  .selectTextByOffset([0, 5])
 *
 * @param offset - offset to select
 */
Cypress.Commands.add('selectTextByOffset', {
    prevSubject: true,
  }, (subject, offset) => {
    const el = subject[0];
    const document = el.ownerDocument;
    const range = document.createRange();
    const textNode = el.firstChild;
    const selectionPositionStart = offset[0];
    const selectionPositionEnd = offset[1];
  
    range.setStart(textNode, selectionPositionStart);
    range.setEnd(textNode, selectionPositionEnd);
    document.getSelection().removeAllRanges();
    document.getSelection().addRange(range);
  
    return cy.wrap(subject);
  });