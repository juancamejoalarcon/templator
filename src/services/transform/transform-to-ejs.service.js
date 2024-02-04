import edjsHTML from 'editorjs-html'


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

    try {
        
        const outputData = await editor.save();
        const cloneData = JSON.parse(JSON.stringify(outputData))

        cloneData.blocks.forEach(block => {
            if (block.type === 'header' || block.type === 'paragraph') {
                const parsedText = document.createElement('div')
                parsedText.innerHTML = block.data.text

                parsedText.querySelectorAll('.condition-start').forEach((conditionEl) => {
                    const statement = conditionEl.firstElementChild.getAttribute('data-statement')
                    const condition = conditionEl.querySelector('.condition-input-edit').textContent
                    const startBracket = statement === 'FOR' ? '(const ' : '('
                    const endBracket = ')'
                    let textNode = document.createTextNode(`<% ${statement.toLowerCase()} ${startBracket}${condition}${endBracket} { %>`);
                    conditionEl.replaceWith(textNode)
                })
                parsedText.querySelectorAll('.condition-end').forEach((conditionEl) => {
                    const statement = conditionEl.firstElementChild.getAttribute('data-statement')
                    let textNode = document.createTextNode(`<% ${statement.toLowerCase()} %>`);
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
            const { withHeadings, content } = data
            const table = document.createElement('table')
            if (withHeadings) {
                const header = document.createElement('thead')
                const headerRow = content[0]
                table.appendChild(header)
                headerRow.forEach(cellContent => {
                    const cell = document.createElement('th')
                    cell.innerHTML = cleanCellHtml(cellContent)
                    header.appendChild(cell)
                });
            }
            const body = document.createElement('tbody')
            table.appendChild(body)
            content.forEach((row, index) => {
                if (index === 0 && withHeadings) return
                const rowEl = document.createElement('tr')
                row.forEach(cellContent => {
                    const cell = document.createElement('td')
                    cell.innerHTML = cleanCellHtml(cellContent)
                    rowEl.appendChild(cell)
                });
                body.appendChild(rowEl)
            });

            replaceVariablesInElement(table)

            return replaceSpecialChars(table.outerHTML)
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