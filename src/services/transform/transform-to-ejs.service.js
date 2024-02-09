import edjsHTML from 'editorjs-html'
import {DOMParser, parseHTML} from 'linkedom';


const replaceVariablesInElement = (element) => {
    element.querySelectorAll('.templator-variable').forEach((variable) => {
        const content = variable.querySelector('.variable-container').textContent
        let textNode = document.createTextNode(`<%= ${content} %>`);
        variable.replaceWith(textNode)
    })
}

const replaceSpecialChars = (html) => {
    html = html.replaceAll('&lt;', '<')
    html = html.replaceAll('&gt;', '>')

    return html
}


export const transformToEjs = async (editor) => {

    const jsDOM = parseHTML('');


    try {
        
        const outputData = await editor.save();
        const cloneData = JSON.parse(JSON.stringify(outputData))

        cloneData.blocks.forEach(block => {
            if (block.type === 'header' || block.type === 'paragraph') {
                const parsedText = jsDOM.document.createElement('div')
                parsedText.innerHTML = block.data.text

                parsedText.querySelectorAll('.condition-start').forEach((conditionEl) => {
                    const statement = conditionEl.firstElementChild.getAttribute('data-statement')
                    const condition = conditionEl.querySelector('.condition-input-edit').textContent
                    const startBracket = statement === 'FOR' ? '(const ' : '('
                    const endBracket = ')'
                    let textNode = jsDOM.document.createTextNode(`<% ${statement.toLowerCase()} ${startBracket}${condition}${endBracket} { %>`);
                    conditionEl.replaceWith(textNode)
                })
                parsedText.querySelectorAll('.condition-end').forEach((conditionEl) => {
                    const statement = conditionEl.firstElementChild.getAttribute('data-statement')
                    let textNode = jsDOM.document.createTextNode(`<% ${statement.toLowerCase()} %>`);
                    conditionEl.replaceWith(textNode)
                })

                replaceVariablesInElement(parsedText)

                let inner = replaceSpecialChars(parsedText.innerHTML)

                block.data.text = inner
            }
        });

        const cleanCellHtml = (html) => {
            return html.replaceAll('\n', '<br>')
        }

        const table = ({ data }) => {

            const makeTable = (content) => `<table>${content}</table>`
            const makeHeader = (content) => `<thead>${content}</thead>`
            const makeBody = (content) => `<tbody>${content}</tbody>`
            const makeRow = (content) => `<tr>${content}</tr>`

            const isConditionRow = (cellContent) => {
                const isCondition = ['if', 'endif'].find((condition) => cellContent === condition)
                return Boolean(isCondition)
            }

            const getCondition = (row) => {
                const statement = row[0]
                const condition = row[1]
                if (statement === 'if') {
                    return `<% if (${condition}) { %>`
                }
                if (statement === 'endif') {
                    return `<% } %>`
                }

                return ''
            }

            const { withHeadings, content } = data
            let header = '';
            if (withHeadings) {
                const headerRow = content[0]

                let headerContent = ''
                headerRow.forEach(cellContent => {
                    const cell = document.createElement('th')
                    cell.innerHTML = cleanCellHtml(cellContent)
                    replaceVariablesInElement(cell)
                    headerContent += cell.outerHTML
                });
                header = makeHeader(headerContent)
            }

            let bodyContent = ''
            content.forEach((row, index) => {
                if (index === 0 && withHeadings) return
                if (isConditionRow(row[0])) {
                    bodyContent += getCondition(row)
                    return
                }
                let rowContent = ''
                row.forEach(cellContent => {
                    const cell = document.createElement('td')
                    cell.innerHTML = cleanCellHtml(cellContent)
                    replaceVariablesInElement(cell)
                    rowContent += cell.outerHTML
                });
                bodyContent += makeRow(rowContent)
            });

            const tableContent = header + makeBody(bodyContent)
            const table = makeTable(tableContent)


            return replaceSpecialChars(table)
        }

        const edjsParser = edjsHTML({
            IfCondition: ({ data }) => `<% if (${data.condition}) { %>`,
            IfElseCondition: ({ data }) => `<% } else if (${data.condition}) { %>`,
            ElseCondition: ({ data }) => `<% } else { %>`,
            IfEndCondition: ({ data }) => `<% } %>`,
            ForCondition: ({ data }) => `<% for (const ${data.condition}) { %>`,
            ForEndCondition: ({ data }) => `<% } %>`,
            table
        });

        const parsed = edjsParser.parse(cloneData);

        return parsed.join('')

    } catch (error) {
        console.log("Saving failed: ", error);
    }

}