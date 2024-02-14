import state from '@/lib/services/state.service';

import logicIcon from '@/lib/assets/icons/logic-icon.svg?raw'
import ConditionComponent from '@/lib/components/ConditionComponent.svelte'
import { getDefaultCondition, getBlockNames } from '@/lib/services/condition.service'

export class ElseCondition {

    static get toolbox() {
        return {
            icon: logicIcon,
        };
    }

    /**
     * @returns {object} api - Editor.js API
    **/
    get api() {
        return state.api
    }

    constructor({ api, data = { condition: '' }, config = { type: 'else' } }) {
        state.setApi(api)
        /**
         * Block type, (else, else if)
         * @type {string}
         */
        this.type = config.type

        /**
         * Value inside the parentheses of the statement
         * (For example: if (condition))
         * @type {string}
        **/
        this.condition = data.condition || getDefaultCondition(this.type)
    }

    render() {
        const conditionWrapper = document.createElement("div");
        const app = new ConditionComponent({
            target: conditionWrapper,
            props: {
                statement: this.type.toUpperCase(),
                condition: this.condition,
                conditionChanged: (condition) => {
                    this.condition = condition
                },
                onRemove: () => {
                    const index = this.api.blocks.getCurrentBlockIndex()
                    this.api.blocks.delete(index)
                }
            }
        })

        return conditionWrapper;
    }

    /**
     * It fires every time this block changes positions
     * @returns {void}
    **/
    moved(event) {
        const { fromIndex, toIndex } = event.detail
        this.preventElseConditionToMoveOutOfClosure(fromIndex, toIndex)
    }

    preventElseConditionToMoveOutOfClosure(fromIndex, toIndex) {
        const blockCount = this.api.blocks.getBlocksCount();
        let indexOfFirstIfCondition = null
        for (let i = 0; i < blockCount; i++) {
            const block = this.api.blocks.getBlockByIndex(i);
            if (block?.name === getBlockNames('if')) {
                indexOfFirstIfCondition = i
                break
            }
        }
        if (indexOfFirstIfCondition && indexOfFirstIfCondition > toIndex) {
            setTimeout(() => this.api.blocks.move(fromIndex, toIndex), 10);
            return
        }

        let indexOfLastEndIfCondition = null

        for (let i = blockCount - 1; i >= 0; i--) {
            const block = this.api.blocks.getBlockByIndex(i);
            if (block?.name === getBlockNames('endif')) {
                indexOfLastEndIfCondition = i
                break
            }
        }
        if (indexOfLastEndIfCondition && indexOfLastEndIfCondition < toIndex) {
            setTimeout(() => this.api.blocks.move(fromIndex, toIndex), 10);
            return
        }
    }

    save() {
        return {
            type: this.type,
            condition: this.condition
        };
    }

}