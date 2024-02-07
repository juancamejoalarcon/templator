import state from '@/services/state.service';
import AddConditionButton from '@/components/AddConditionButton.svelte'
import { checkVisible } from '@/services/dom-utils.service'
import { getBlockNames } from '@/services/condition.service'


export const onSelectionChanged = () => {
    const api = state.api
    let start = 0
    let end = 0

    let blockReference = null

    if (api) {
        const blockCount = api.blocks.getBlocksCount();
        let blocksSelectedCount = 0
        for (let i = 0; i < blockCount; i++) {
            const block = api.blocks.getBlockByIndex(i);

            if (block.selected) {
                blocksSelectedCount += 1
            }

            if (blocksSelectedCount > 1) {
                start = i
                break
            }
        }
        const showDropdown = blocksSelectedCount > 1

        if (showDropdown) {


            for (let i = start - 1; i < blockCount; i++) {
                const block = api.blocks.getBlockByIndex(i);

                if (!blockReference && checkVisible(block.holder)) {
                    blockReference = block.holder
                }

                if (!block.selected) {
                    end = i
                    break
                }

            }

            const iframe = createIframe();
            const { top, left } = blockReference.getBoundingClientRect()
            iframe.style.top = blockReference.offsetTop + 'px'
            iframe.style.left = left + 'px'

            document.querySelector('.' + state.classNameOfEditorJs).appendChild(iframe)

            var ifrDoc = iframe.contentWindow || iframe.contentDocument;
            if (ifrDoc.document) ifrDoc = ifrDoc.document;

            ['if', 'for'].forEach((type) => {
                new AddConditionButton({
                    target: iframe.contentDocument.body,
                    props: {
                        type: 'if',
                        onButtonClicked: () => {
                            addCondition(start - 1, end + 1, type)
                            iframe.remove()
                        }
                    }
                })
            })

            const onSelectionChanged = () => {
                iframe.remove()
                document.removeEventListener('selectionchange', onSelectionChanged)
            }
            document.addEventListener('selectionchange', onSelectionChanged)

        }
    }
}

/**
 * @returns {HTMLIFrameElement} iframe
*/
const createIframe = () => {
    const iframe = document.createElement('iframe');
    const styles = {
        position: 'absolute',
        top: '0',
        width: '60px',
        height: '120px',
        right: '0',
        border: 'none',
        zIndex: '99',
    }
    for (const [key, value] of Object.entries(styles)) {
        iframe.style[key] = value
    }
    return iframe
}

/**
 * @param {number} start - position of start condition (if, for)
 * @param {number} end - position of end condition (endif, endfor)
 * @returns {void}
*/
const addCondition = (start, end, type) => {
    const api = state.api
    api.blocks.insert(getBlockNames(type), { skipEndBlock: true }, {}, start, true);
    api.blocks.insert(getBlockNames('end' + type), {}, {}, end, true);
}