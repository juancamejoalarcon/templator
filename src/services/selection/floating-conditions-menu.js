import state from '@/services/state.service';
import AddConditionButton from '@/components/AddConditionButton.svelte'
import { checkVisible } from '@/services/dom-utils.service'
import { getBlockNames } from '@/services/condition.service'

/**
 * When user selects 2 or more blocks a floating menu is displayed
 * with buttons to add conditions
 * @returns {void} 
 */
export const displayFloatingConditionsMenu = () => {


    const {
        indexOfFirstBlockSelected,
        indexOfLastBlockSelected,
        blocksCount,
        numberOfBlocksSelected
    } = getCurrentSelectionInfo()



    const showDropdown = numberOfBlocksSelected > 1

    if (showDropdown) {
        let firstBlockVisible = getFirstBlockVisibleInScreen(indexOfFirstBlockSelected)

        const iframe = createIframe();
        const { top, left } = firstBlockVisible.getBoundingClientRect()
        iframe.style.top = firstBlockVisible.offsetTop + 'px'
        iframe.style.left = left + 'px'

        state.getEditorRoot().appendChild(iframe)

        ;['if', 'for'].forEach((type) => {
            new AddConditionButton({
                target: iframe.contentDocument.body,
                props: {
                    type,
                    onButtonClicked: () => {
                        addCondition(indexOfFirstBlockSelected - 1, indexOfLastBlockSelected + 1, type)
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


/**
 * @typedef {Object} CurrentSelectionInfo
 * @property {number} indexOfFirstBlockSelected
 * @property {number} indexOfLastBlockSelected
 * @property {number} blocksCount - total amount of blocks in editor 
 * @property {number} numberOfBlocksSelected 
 * @returns {CurrentSelectionInfo} iframe
 */
const getCurrentSelectionInfo = () => {
    const api = state.api

    let indexOfFirstBlockSelected = 0
    let indexOfLastBlockSelected = 0

    const blocksCount = api.blocks.getBlocksCount();
    let numberOfBlocksSelected = 0
    for (let i = 0; i < blocksCount; i++) {
        const block = api.blocks.getBlockByIndex(i);

        if (block.selected) {
            numberOfBlocksSelected += 1
        }

        if (numberOfBlocksSelected > 1 && indexOfFirstBlockSelected === 0) {
            indexOfFirstBlockSelected = i
        }

        if ((numberOfBlocksSelected > 1) && !block.selected) {
            indexOfLastBlockSelected = i
            break
        }

        if (block.selected && (i + 1) === blocksCount) {
            indexOfLastBlockSelected = i + 1
        }
    }
    return {
        indexOfFirstBlockSelected,
        indexOfLastBlockSelected,
        blocksCount,
        numberOfBlocksSelected

    }
}

/**
 * @param {number} startAtIndex - start counting blocks at index
 * @returns {HTMLElement} iframe
*/
const getFirstBlockVisibleInScreen = (startAtIndex) => {
    let firstBlockVisible = null

    const blocksCount = state.api.blocks.getBlocksCount();
    for (let i = startAtIndex - 1; i < blocksCount; i++) {
        const block = state.api.blocks.getBlockByIndex(i);

        if (!firstBlockVisible && checkVisible(block.holder)) {
            firstBlockVisible = block.holder
            break
        }
    }

    return firstBlockVisible
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