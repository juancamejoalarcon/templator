import edjsHTML from 'editorjs-html'


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

                parsedText.querySelectorAll('.templator-variable').forEach((variable) => {
                    const content = variable.querySelector('.variable-container').textContent
                    let textNode = document.createTextNode(`<%= ${content} %>`);
                    variable.replaceWith(textNode)
                })

                let inner = parsedText.innerHTML
                inner = inner.replaceAll('&lt;', '<')
                inner = inner.replaceAll('&gt;', '>')

                block.data.text = inner
            }
        });

        const edjsParser = edjsHTML({
            IfCondition: ({ data }) => `<% if (${data.condition}) { %>`,
            IfElseCondition: ({ data }) => `<% } else if (${data.condition}) { %>`,
            ElseCondition: ({ data }) => `<% } else { %>`,
            IfEndCondition: ({ data }) => `<% } %>`,
            ForCondition: ({ data }) => `<% for (const ${data.condition}) { %>`,
            ForEndCondition: ({ data }) => `<% } %>`
        });

        const parsed = edjsParser.parse(cloneData);
        console.log(parsed)

        return parsed.join('')

    } catch (error) {
        console.log("Saving failed: ", error);
    }

}