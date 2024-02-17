export const variableContainerClassName = 'templator-variable'
export const variableEditContainerClassName = 'variable-edit-container'
import VariableComponent from '@/lib/components/VariableComponent.svelte'


/**
 * @param {(Element)} text
 * @returns {HTMLElement}
 */
export const getVariableContainer = (text) => {
    const variableContainer = document.createElement('span');
    variableContainer.classList.add(variableContainerClassName)

    new VariableComponent({ 
        target: variableContainer, 
        props: { 
            text,
            onRemove: () => {
                variableContainer.remove()
            }
        } 
    })

    return variableContainer
}