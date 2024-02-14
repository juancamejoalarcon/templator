import { 
    startOfInlineConditionClassName,
    endOfInlineConditionClassName,
    conditionContentClassName,
    getNameOfEndStatement
} from '@/lib/services/condition.service'
import { variableEditContainerClassName, variableContainerClassName } from '@/lib/services/variable.service'

/**
 * Finds all variables component in element and replaces
 * @param {(HTMLElement)} el
 * @param {(Document)} doc - document window object
 * @param {(string)} engineType - jinja, ejs,...
 * @returns {void}
 */
export const replaceVariablesInElement = (el, doc, engineType) => {
    el.querySelectorAll('.' + variableContainerClassName).forEach((variable) => {
        const content = variable.querySelector('.' + variableEditContainerClassName).textContent
        let textNode = doc.createTextNode(buildVariable(content, engineType));
        variable.replaceWith(textNode)
    })
}

/**
 * @param {(string)} variableContent
 * @param {(string)} engineType - jinja, ejs,...
 * @returns {string}
 */
const buildVariable = (variableContent, engineType) => {
    const engines = {
        'ejs': `<%= ${variableContent} %>`,
        'jinja': `{{ ${variableContent} }}`
    }
    return engines[engineType]
}

/**
 * @param {(string)} statement - if, for,...
 * @param {(string)} condition - if (condition)
 * @param {(string)} engineType - jinja, ejs,...
 * @returns {string}
 */
export const buildStartCondition = (statement, condition, engineType) => {

    const engines = {
        'ejs': () => {
            const startBracket = statement === 'FOR' ? '(const ' : '('
            const endBracket = ')'
            return `<% ${statement.toLowerCase()} ${startBracket}${condition}${endBracket} { %>`
        },
        'jinja': () => {
            return `{% ${statement.toLowerCase()} ${condition} %}`
        }
    }
    return engines[engineType]()
}


/**
 * @param {(string)} statement - if, for,...
 * @param {(string)} engineType - jinja, ejs,...
 * @returns {string}
 */
export const buildEndCondition = (statement, engineType) => {
    const engines = {
        'ejs': () => {
            return `<% } %>`
        },
        'jinja': () => {
            const end = statement.toLowerCase() === 'FOR' ? 'endfor' : 'endif'
            return `{% ${end} %}`
        }
    }
    return engines[engineType]()
}

/**
 * @param {(string)} html
 * @returns {string}
 */
export const replaceSpecialCharsInHtml = (html) => {
    html = html.replaceAll('&lt;', '<')
    html = html.replaceAll('&gt;', '>')

    return html
}

/**
 * Finds all elements that are starts of a condition (if, for)
 * and replaces it with a string
 * @param {(HTMLElement)} el
 * @param {(Document)} doc - document window object
 * @param {(string)} engineType - jinja, ejs,...
 * @returns {void}
 */
export const findAndReplaceStartOfCondition = (el, doc, engineType) => {
    el.querySelectorAll('.' + startOfInlineConditionClassName).forEach((conditionEl) => {

        const statement = conditionEl.firstElementChild.getAttribute('data-statement')
        const condition = conditionEl.querySelector('.' + conditionContentClassName).textContent

        let textNode = doc.createTextNode(buildStartCondition(statement, condition, engineType));
        conditionEl.replaceWith(textNode)
    })
}

/**
 * Finds all elements that are ends of a condition (endif, endfor)
 * and replaces it with a string
 * @param {(HTMLElement)} el
 * @param {(Document)} doc - document window object
 * @param {(string)} engineType - jinja, ejs,...
 * @returns {void}
 */
export const findAndReplaceEndOfCondition = (el, doc, engineType) => {
    el.querySelectorAll('.' + endOfInlineConditionClassName).forEach((conditionEl) => {

        const statement = conditionEl.firstElementChild.getAttribute('data-statement')
        let textNode = doc.createTextNode(buildEndCondition(statement, engineType));
        conditionEl.replaceWith(textNode)
    })
}