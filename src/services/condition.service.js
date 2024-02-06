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

    const startConditionContainer = createWrapper('condition-start');
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

    const endConditionContainer = createWrapper('condition-end');
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


export const reapplyConditionsToBlocks = (api) => {

    const blockCount = api.blocks.getBlocksCount();
    const shouldApplyConditionsToBlock = (block) => block.name === 'header' || block.name === 'paragraph'

    for (let i = 0; i < blockCount; i++) {
        const block = api.blocks.getBlockByIndex(i);

        if (shouldApplyConditionsToBlock(block)) {

            block.holder.querySelectorAll('.condition-start').forEach(element => {
                const statement = element.firstElementChild.getAttribute('data-statement')
                const condition = element.querySelector('.condition-input-edit').textContent
                const id = Array.from(element.classList).find(className => className.includes(startOfIdForInlineConditionContainers))
                const { startConditionContainer, endConditionContainer } = getInlineConditionContainers(id, condition, statement.toLowerCase())

                const currentEnd = block.holder.querySelector('.condition-end.' + id)
                element.replaceWith(startConditionContainer)
                currentEnd.replaceWith(endConditionContainer)

                onRemoveObserver(startConditionContainer, id)
            });

        }
    }
}

export const onRemoveObserver = (el, randomId) => {
    const observer = new MutationObserver(function (mutations_list) {
        mutations_list.forEach(function (mutation) {
            mutation.removedNodes.forEach(function (removed_node) {
                if (removed_node.classList.contains(randomId)) {
                    const containers = el.parentElement?.querySelectorAll(`.${randomId}`)
                    containers?.forEach((container) => {
                        container.remove()
                    })
                    observer.disconnect()
                }
            });
        });
    });

    observer.observe(el.parentElement, { subtree: false, childList: true });
}