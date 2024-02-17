/**
 * Insert node after another node
 * @param {Node} newNode
 * @param {Node} existingNode
 * @returns {void}
*/
export const insertNodeAfter = (newNode, existingNode) => {
    existingNode.parentNode.insertBefore(newNode, existingNode.nextSibling);
}

/**
 * Checks if element is visible in window
 * @param {HTMLElement} element
 * @returns {boolean}
*/
export const checkVisible = (element) => {
    var rect = element.getBoundingClientRect();
    var viewHeight = Math.max(document.documentElement.clientHeight, window.innerHeight);
    return !(rect.bottom < 0 || rect.top - viewHeight >= 0);
}

/**
 * Checks if element is visible in window
 * @param {HTMLElement} element
 * @param {Object} styles
 * @returns {HTMLElement}
*/
export const applyStylesToHTMLElement = (element, styles) => {
    Object.entries(styles).forEach(([ key, value]) => {
        element.style[key] = value
    })
    return element
}