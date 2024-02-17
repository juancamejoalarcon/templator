import { variableContainerClassName, getVariableContainer } from '@/lib/services/variable.service'
import VariableComponent from '@/lib/components/VariableComponent.svelte'

import './index.scss'

export class Variable {
    static get isInline() {
        return true;
    }

    constructor() {
        this.button = null;
        this.state = false;
    }

    render() {
        this.button = document.createElement('button');
        this.button.type = 'button';
        this.button.classList.add('ce-inline-tool')
        this.button.classList.add('add-variable-button')

        return this.button;
    }

    surround(range) {


        const selectedText = range.extractContents();

        const variableContainer = getVariableContainer(selectedText)


        range.insertNode(variableContainer);

    }

   
    checkState(selection) {

    }
}