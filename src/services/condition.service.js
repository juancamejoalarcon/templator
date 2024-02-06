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

export const reapplyConditionsToBlocks = (api) => {
    const blockCount = api.blocks.getBlocksCount();
    for (let i = 0; i < blockCount; i++) {
        const block = api.blocks.getBlockByIndex(i);
        if (block.name === 'header' || block.name === 'paragraph') {
            block.holder.querySelectorAll('.condition-start').forEach(element => {
                const statement = element.firstElementChild.getAttribute('data-statement')
                const condition = element.querySelector('.condition-input-edit').textContent
                const id = Array.from(element.classList).find(className => className.includes('condition-id-'))
                const { ifConditionContainer, endifConditionContainer } = getConditionContainers(id, condition, statement.toLowerCase())

                const currentEnd = block.holder.querySelector('.condition-end.' + id)
                element.replaceWith(ifConditionContainer)
                currentEnd.replaceWith(endifConditionContainer)

                onRemoveObserver(ifConditionContainer, id)
            });
        }
    }
}

export const getConditionContainers = (randomId, conditionText, type = 'if') => {
    const condition = conditionText || type === 'if' ? 'condicion == resultado' : 'item in items'
    const ifConditionContainer = document.createElement('span');
    ifConditionContainer.classList.add('condition-start', randomId)
    new ConditionComponent({
        target: ifConditionContainer,
        props: {
            statement: type === 'if' ? 'IF' : 'FOR',
            inline: true,
            condition,
            onRemove: () => {
                const containers = ifConditionContainer.parentElement.querySelectorAll(`.${randomId}`)
                containers.forEach((container) => {
                    container.remove()
                })
            }
        }
    })

    ifConditionContainer.setAttribute('contenteditable', 'false');

    const endifConditionContainer = document.createElement('span');
    endifConditionContainer.classList.add('condition-end', randomId)
    endifConditionContainer.classList.add(randomId)
    new ConditionComponent({
        target: endifConditionContainer,
        props: {
            statement: type === 'if' ? 'ENDIF' : 'ENDFOR',
            inline: true,
            isEndBlock: true
        }
    })

    endifConditionContainer.setAttribute('contenteditable', 'false')

    return {
        ifConditionContainer,
        endifConditionContainer
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