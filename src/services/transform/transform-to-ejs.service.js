import edjsHTML from 'editorjs-html'
import { parseHTML } from 'linkedom';

import { 
    replaceVariablesInElement, 
    replaceSpecialCharsInHtml, 
    findAndReplaceStartOfCondition,
    findAndReplaceEndOfCondition
} from './shared'


import { buildBlockParser } from './block-parser'




export const transformToEjs = async (editor) => {

    const jsDOM = parseHTML('');


    try {
        
        const outputData = await editor.save();
        const cloneData = JSON.parse(JSON.stringify(outputData))

        cloneData.blocks.forEach(block => {
            if (block.type === 'header' || block.type === 'paragraph') {

                const ephemeralElement = jsDOM.document.createElement('div')
                ephemeralElement.innerHTML = block.data.text

                findAndReplaceStartOfCondition(ephemeralElement, jsDOM.document, 'ejs')

                findAndReplaceEndOfCondition(ephemeralElement, jsDOM.document, 'ejs')

                replaceVariablesInElement(ephemeralElement, jsDOM.document, 'ejs')

                let inner = replaceSpecialCharsInHtml(ephemeralElement.innerHTML)

                block.data.text = inner
            }
        });

        const parser = buildBlockParser('ejs');


        const edjsParser = edjsHTML(parser);

        const parsed = edjsParser.parse(cloneData);

        return parsed.join('')

    } catch (error) {
        console.log("Saving failed: ", error);
    }

}


