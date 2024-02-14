import edjsHTML from 'editorjs-html'
import { parseHTML } from 'linkedom';

import { 
    replaceVariablesInElement, 
    replaceSpecialCharsInHtml, 
    findAndReplaceStartOfCondition,
    findAndReplaceEndOfCondition
} from './shared'


import { buildBlockParser } from './block-parser'

/**
 * @param {(string)} editorOutputData - editor js output data
 * @param {(string)} type - jinja, ejs, ...
 * @returns {Promise<string>}
 */
export const transform = async (editorOutputData, type) => {

    if (type !== 'ejs' && type !== 'jinja') {
        throw new Error(`Type ${type} is not supported`)
    }

    const jsDOM = parseHTML('');


    try {
        const cloneData = JSON.parse(JSON.stringify(editorOutputData))

        cloneData.blocks.forEach(block => {
            if (block.type === 'header' || block.type === 'paragraph') {

                const ephemeralElement = jsDOM.document.createElement('div')
                ephemeralElement.innerHTML = block.data.text

                findAndReplaceStartOfCondition(ephemeralElement, jsDOM.document, type)

                findAndReplaceEndOfCondition(ephemeralElement, jsDOM.document, type)

                replaceVariablesInElement(ephemeralElement, jsDOM.document, type)

                let inner = replaceSpecialCharsInHtml(ephemeralElement.innerHTML)

                block.data.text = inner
            }
        });

        const parser = buildBlockParser(type);


        const edjsParser = edjsHTML(parser);

        const parsed = edjsParser.parse(cloneData);

        return parsed.join('')

    } catch (error) {
        console.log("Saving failed: ", error);
    }

}


