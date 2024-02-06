/**
 * Insert node after another node
 * @param {Node} newNode
 * @param {Node} existingNode
 * @returns {void}
*/
export const insertNodeAfter = (newNode, existingNode) => {
    existingNode.parentNode.insertBefore(newNode, existingNode.nextSibling);
}