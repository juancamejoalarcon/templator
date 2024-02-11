import { parseHTML } from 'linkedom';
import { 
    getNameOfEndStatement
} from '@/services/condition.service'

import { replaceVariablesInElement, buildStartCondition, buildEndCondition, replaceSpecialCharsInHtml } from './shared'

/**
 * @typedef {Object} data
 * @property {boolean} [withHeadings] - if true first row is the heading of table
 * @property {object} content - content of table
 * @param {data} data
 * @returns {string}
 */
export const transformTable = (data) => {

    const jsDOM = parseHTML('');

    const { withHeadings, content } = data
    let header = '';
    if (withHeadings) {
        const headerRow = content[0]

        let headerContent = ''
        headerRow.forEach(cellContent => {
            const cell = jsDOM.document.createElement('th')
            cell.innerHTML = cleanCellHtml(cellContent)
            replaceVariablesInElement(cell, jsDOM.document)
            headerContent += cell.outerHTML
        });
        header = makeHeader(headerContent)
    }

    let bodyContent = ''
    content.forEach((row, index) => {
        if (index === 0 && withHeadings) return
        if (isConditionRow(row)) {
            bodyContent += getRowCondition(row)
            return
        }
        let rowContent = ''
        row.forEach(cellContent => {
            const cell = document.createElement('td')
            cell.innerHTML = cleanCellHtml(cellContent)
            replaceVariablesInElement(cell, jsDOM.document)
            rowContent += cell.outerHTML
        });
        bodyContent += makeRow(rowContent)
    });

    const tableContent = header + makeBody(bodyContent)
    const table = makeTable(tableContent)


    return replaceSpecialCharsInHtml(table)
}

/**
 * Checks if row is not an actual row but a condition (if, for,...) 
 * @param {Array} row
 * @returns {boolean}
 */
const isConditionRow = (row) => {

    const firstCell = row[0]
    if (!firstCell) return false

    const isCondition = [
        'if',
        'for',
        getNameOfEndStatement('if'),
        getNameOfEndStatement('for'),
    ].find((condition) => firstCell === condition)

    return Boolean(isCondition)
}

/**
 * @param {Array} row
 * @returns {string}
 */
const getRowCondition = (row) => {
    const statement = row[0]
    const condition = row[1]
    
    if (!statement.includes('end')) return buildStartCondition(statement, condition, 'ejs')
    if (statement.includes('end')) return buildEndCondition(statement, 'ejs')

    return ''
}

const makeTable = (content) => `<table>${content}</table>`
const makeHeader = (content) => `<thead>${content}</thead>`
const makeBody = (content) => `<tbody>${content}</tbody>`
const makeRow = (content) => `<tr>${content}</tr>`

const cleanCellHtml = (html) => {
    return html.replaceAll('\n', '<br>')
}