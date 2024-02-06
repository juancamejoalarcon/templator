import ConditionComponent from '@/components/ConditionComponent.svelte'
import { getConditionContainers, onRemoveObserver } from '@/services/condition.service'
import { insertNodeAfter } from '@/services/dom-utils.service'

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


        const randomId = 'condition-id-' + (Math.random() + 1).toString(36).substring(7);
        const selectedText = range.extractContents();

        const { ifConditionContainer, endifConditionContainer } = getConditionContainers(randomId, null, this.type)

        range.insertNode(ifConditionContainer);

        insertNodeAfter(endifConditionContainer, ifConditionContainer)
        insertNodeAfter(selectedText, ifConditionContainer)

        onRemoveObserver(ifConditionContainer, randomId)
    }

}