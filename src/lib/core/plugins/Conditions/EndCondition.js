import ConditionComponent from '@/lib/components/ConditionComponent.svelte'

import state from '@/lib/services/state.service';

import { getNameOfEndStatement, getBlockNames, blockConditionWrapperStyles } from '@/lib/services/condition.service'
import { applyStylesToHTMLElement } from '@/lib/services/dom-utils.service'

export class EndCondition {

    /**
     * @returns {object} api - Editor.js API
    */
    get api() {
        return state.api
    }

    get nameOfStatement() {
        return getNameOfEndStatement(this.type)
    }

    constructor({ data, api, config}) {
        state.setApi(api)

        /**
         * Block type
         * @type {string}
         */
        this.type = data.type || config.type
        this.type = this.type.replace('end', '').replace('END', '').toLowerCase()
    }

    render() {
        const endConditionWrapper = document.createElement("div");
        applyStylesToHTMLElement(endConditionWrapper, blockConditionWrapperStyles);
        
        new ConditionComponent({ 
            target: endConditionWrapper,
            props: {
                statement: this.nameOfStatement.toUpperCase(),
                isEndBlock: true
            }
        })

        return endConditionWrapper;
    }

    destroy() {
        if (state.preventDestroyFunctToFireFlag) return
        setTimeout(() => this.deletePreviousStartBlock(), 0)
    }

    deletePreviousStartBlock() {
        state.setPreventDestroyFunctToFire(true)

        const index = this.getPreviousStartBlockIndex()
        if (Number.isInteger(index)) this.api.blocks.delete(index)

        state.setPreventDestroyFunctToFire(false)
    }

    getPreviousStartBlockIndex() {
        const blockCount = this.api.blocks.getBlocksCount();
        for (let i = 0; i < blockCount; i++) {
            const block = this.api.blocks.getBlockByIndex(i);

            const blockName = getBlockNames(this.type)
            if (block?.name === blockName) return i
        }
    }

    save() {
        return {
            type: this.nameOfStatement,
        };
    }

}