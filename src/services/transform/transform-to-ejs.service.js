import edjsHTML from 'editorjs-html'
import {DOMParser, parseHTML} from 'linkedom';


import { 
    replaceVariablesInElement, 
    replaceSpecialCharsInHtml, 
    findAndReplaceStartOfCondition,
    findAndReplaceEndOfCondition
} from './shared'

import { transformTable } from './transform-table'




export const transformToEjs = async (editor) => {

    const jsDOM = parseHTML('');


    try {
        
        const outputData = await editor.save();
        const cloneData = JSON.parse(JSON.stringify(outputData))

        cloneData.blocks.forEach(block => {
            if (block.type === 'header' || block.type === 'paragraph') {

                const ephemeralElement = jsDOM.document.createElement('div')
                ephemeralElement.innerHTML = block.data.text

                findAndReplaceStartOfCondition(ephemeralElement, jsDOM.document)

                findAndReplaceEndOfCondition(ephemeralElement, jsDOM.document)

                replaceVariablesInElement(ephemeralElement, jsDOM.document)

                let inner = replaceSpecialCharsInHtml(ephemeralElement.innerHTML)

                block.data.text = inner
            }
        });


        const edjsParser = edjsHTML({
            IfCondition: ({ data }) => `<% if (${data.condition}) { %>`,
            IfElseCondition: ({ data }) => `<% } else if (${data.condition}) { %>`,
            ElseCondition: ({ data }) => `<% } else { %>`,
            IfEndCondition: ({ data }) => `<% } %>`,
            ForCondition: ({ data }) => `<% for (const ${data.condition}) { %>`,
            ForEndCondition: ({ data }) => `<% } %>`,
            table: ({ data }) => transformTable(data) 
        });

        const parsed = edjsParser.parse(cloneData);

        return parsed.join('')

    } catch (error) {
        console.log("Saving failed: ", error);
    }

}


