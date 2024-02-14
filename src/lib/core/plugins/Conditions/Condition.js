import state from '@/lib/services/state.service';

import logicIcon from '@/lib/assets/icons/logic-icon.svg?raw'
import ConditionComponent from '@/lib/components/ConditionComponent.svelte'
import { getDefaultCondition, getBlockNames } from '@/lib/services/condition.service'


export class Condition {

    static get toolbox() {
        return {
            icon: logicIcon,
        };
    }
    /**
     * @returns {object} api - Editor.js API
    */
    get api() {
        return state.api
    }

    /**
     * @returns {string}
    */
    get endConditionBlockName() {
        return getBlockNames('end' + this.type)
    }

    constructor({ api, data = { skipEndBlock: false, condition: '' }, config = { type: 'if' } }) {
        state.setApi(api)

        /**
         * Block type, (if, for)
         * @type {string}
         */
        this.type = config.type
        /**
         * Determines whether to add a block to close the closure
         * For example: if the type of condition is equal to "for"
         * a block of tpye "endfor" should be added or not depending on this value
         * @type {boolean}
         */
        this.skipEndBlock = data.skipEndBlock !== undefined ? data.skipEndBlock : !this.dataObjectIsEmpty(data)
        /**
         * Value inside the parentheses of the statement
         * (For example: if (condition))
         * @type {string}
        **/
        this.condition = data.condition || getDefaultCondition(this.type)
    }

    dataObjectIsEmpty(data) {
        for (const prop in data) {
            if (Object.hasOwn(data, prop)) return false;
        }
        return true;
    }

    render() {
        const conditionWrapper = document.createElement("div");
        new ConditionComponent({
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

        if (!this.skipEndBlock) this.addEndBlock()

        return conditionWrapper;
    }

    /**
     * A condition must have a closure, this function adds
     * the end of the condition ('endif', 'endfor')
     * @returns {void}
    */
    addEndBlock() {
        const index = this.api.blocks.getCurrentBlockIndex() + 1
        this.api.blocks.insert(this.endConditionBlockName, { type: this.type }, {}, index, true);
    }

    destroy() {
        if (state.preventDestroyFunctToFireFlag) return
        setTimeout(() => this.deleteNextEndBlock(), 0)
    }

    deleteNextEndBlock() {
        state.setPreventDestroyFunctToFire(true)

        const index = this.getNextEndBlockIndex()
        if (Number.isInteger(index)) this.api.blocks.delete(index)

        state.setPreventDestroyFunctToFire(false)
    }

    getNextEndBlockIndex() {
        const blockCount = this.api.blocks.getBlocksCount();
        for (let i = 0; i < blockCount; i++) {
            const block = this.api.blocks.getBlockByIndex(i);
            if (block?.name === this.endConditionBlockName) return i
            if (this.shouldDeleteBlockOnDestroy(block)) {
                this.api.blocks.delete(i)
            }
        }
    }

    shouldDeleteBlockOnDestroy(block) {
        return this.type === 'if' && (block?.name === getBlockNames('else') || block?.name === getBlockNames('elseif'))
    }

    save() {
        return {
            type: this.type,
            condition: this.condition
        };
    }

}