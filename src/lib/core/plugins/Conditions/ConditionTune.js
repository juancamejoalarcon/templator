import state from '@/lib/services/state.service';
import logicIcon from '@/lib/assets/icons/logic-icon.svg?raw'
import { getDefaultCondition, getBlockNames } from '@/lib/services/condition.service'


export default class ConditionTune {

    /**
     * @returns {object} api - Editor.js API
    */
    get api() {
        return state.api
    }

    constructor({ api, config }) {
        state.setApi(api)

        /**
         * Block type, (if, for)
         * @type {string}
        */
        this.type = config.type
    }

    static get isTune() {
        return true;
    }

    render() {
        let wrapper = document.createElement('div');
        const button = this.getAddConditionButton();

        wrapper.appendChild(button)

        return wrapper;
    }

    getAddConditionButton() {
        const button = document.createElement('div');

        button.classList.add('ce-popover-item');
        button.innerHTML = `
            <div class="ce-popover-item__icon">${logicIcon}</div>
            <div class="ce-popover-item__title">${this.type.toUpperCase()}</div>
            `
        button.addEventListener('click', this.onAddConditionButtonClicked.bind(this))

        return button
    }

    onAddConditionButtonClicked() {
        const index = this.api.blocks.getCurrentBlockIndex();
        const blockName = getBlockNames(this.type);
        this.api.blocks.insert(blockName, { skipEndBlock: true }, {}, index, true);
        // add end block
        const endBlockName = getBlockNames('end' + this.type)
        this.api.blocks.insert(endBlockName, {}, {}, index + 2, true)
    }
}