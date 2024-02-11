import state from '@/services/state.service';
import ConditionComponent from '@/components/ConditionComponent.svelte'

/**
 * @param {(string)} type
 */
export const getDefaultCondition = (type) => {
    const defaults = {
        'if': 'variable == "result"',
        'else': 'variable == "result"',
        'else if': 'variable == "result"',
        'for': 'item in items'
    }
    return defaults[type]
}

/**
 * @param {(string)} type
 */
export const getNameOfEndStatement = (type) => {
    const endStatements = {
        'if': 'endif',
        'for': 'endfor'
    }
    return endStatements[type]
}

/**
 * @param {(string)} type
 */
export const getBlockNames = (type) => {
    const blockNames = {
        'if': 'IfCondition',
        'elseif': 'IfElseCondition',
        'else': 'ElseCondition',
        'endif': 'IfEndCondition',
        'for': 'ForCondition',
        'endfor': 'ForEndCondition',
    }

    return blockNames[type]
}


export const startOfIdForInlineConditionContainers = 'condition-id-'

/**
 * @returns {string} id - is used to coordinate all condition containers of the same closure
 */
export const getIdForInlineConditionContainers = () => {
    return startOfIdForInlineConditionContainers + (Math.random() + 1).toString(36).substring(7);
}

export const startOfInlineConditionClassName = 'condition-start'
export const endOfInlineConditionClassName = 'condition-end'
export const conditionContentClassName = 'condition-input-edit'

/**
 * @param {(string)} id - is used to coordinate all condition containers of the same closure
 * @param {(string)} conditionText
 * @param {(string)} type
 * @typedef {Object} ConditionContainers
 * @property {HTMLElement} startConditionContainer
 * @property {HTMLElement} endConditionContainer
 * @returns {(ConditionContainers)}
 */
export const getInlineConditionContainers = (id, conditionText, type = 'if') => {

    const condition = conditionText || getDefaultCondition(type);

    const createWrapper = (className) => {
        const wrapper = document.createElement('span');
        wrapper.classList.add(className, id);
        wrapper.setAttribute('contenteditable', 'false');
        return wrapper
    };

    const startConditionContainer = createWrapper(startOfInlineConditionClassName);
    new ConditionComponent({
        target: startConditionContainer,
        props: {
            statement: type.toUpperCase(),
            inline: true,
            condition,
            onRemove: () => {
                const containers = startConditionContainer.parentElement.querySelectorAll(`.${id}`)
                containers.forEach((container) => {
                    container.remove()
                })
            }
        }
    })

    const endConditionContainer = createWrapper(endOfInlineConditionClassName);
    new ConditionComponent({
        target: endConditionContainer,
        props: {
            statement: ('end' + type).toUpperCase(),
            inline: true,
            isEndBlock: true
        }
    })

    return {
        startConditionContainer,
        endConditionContainer
    }

}

/**
 * Raw HTML needs to be replaced with elements with listeners
 * @returns {void}
 */
export const reapplyConditionsToBlocks = () => {
    const api = state.api

    const blockCount = api.blocks.getBlocksCount();
    const shouldApplyConditionsToBlock = (block) => block.name === 'header' || block.name === 'paragraph'

    for (let i = 0; i < blockCount; i++) {
        const block = api.blocks.getBlockByIndex(i);

        if (shouldApplyConditionsToBlock(block)) {

            block.holder.querySelectorAll('.' + startOfInlineConditionClassName).forEach(element => {
                
                const statement = element.firstElementChild.getAttribute('data-statement')
                const condition = element.querySelector('.' + conditionContentClassName).textContent
                const id = Array.from(element.classList).find(className => className.includes(startOfIdForInlineConditionContainers))

                const { startConditionContainer, endConditionContainer } = getInlineConditionContainers(id, condition, statement.toLowerCase())

                const currentEnd = block.holder.querySelector(`.${endOfInlineConditionClassName}.${id}`)
                element.replaceWith(startConditionContainer)
                currentEnd.replaceWith(endConditionContainer)

                onRemoveObserver(startConditionContainer, id)
            });

        }
    }
}

/**
 * When element is removed from DOM all elements with
 * same id should be deleted too
 * @param {(HTMLElement)} el
 * @param {(string)} id
 * @returns {void}
 */
export const onRemoveObserver = (el, id) => {
    const observer = new MutationObserver((mutations_list) => {
        mutations_list.forEach((mutation) => {
            mutation.removedNodes.forEach((removed_node) => {
                if (removed_node.classList.contains(id)) {
                    const containers = el.parentElement?.querySelectorAll(`.${id}`)
                    containers?.forEach((container) => container.remove())
                    observer.disconnect()
                }
            });
        });
    });

    observer.observe(el.parentElement, { subtree: false, childList: true });
}