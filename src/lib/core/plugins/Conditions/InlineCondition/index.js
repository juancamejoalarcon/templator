import { getIdForInlineConditionContainers, getInlineConditionContainers, onRemoveObserver } from '@/lib/services/condition.service'
import { insertNodeAfter } from '@/lib/services/dom-utils.service'

import './index.scss'

export class InlineCondition {
    static get isInline() {
        return true;
    }

    constructor({ config }) {
        this.button = null;
        this.state = false;

        this.type = config.type
    }

    render() {
        this.button = document.createElement('button');
        this.button.type = 'button';
        this.button.classList.add('ce-inline-tool', 'add-condition-button', 'add-condition-button-' + this.type)

        return this.button;
    }

    surround(range) {

        const id = getIdForInlineConditionContainers();
        const selectedText = range.extractContents();

        const { startConditionContainer, endConditionContainer } = getInlineConditionContainers(id, null, this.type)

        range.insertNode(startConditionContainer);

        insertNodeAfter(endConditionContainer, startConditionContainer)
        insertNodeAfter(selectedText, startConditionContainer)

        onRemoveObserver(startConditionContainer, id)
    }

    checkState() {}

}