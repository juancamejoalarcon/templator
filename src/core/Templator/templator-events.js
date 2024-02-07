import state from '@/services/state.service';
import { indent } from '@/services/indent'
import { onSelectionChanged } from '@/services/selection.service'
import { reapplyConditionsToBlocks } from '@/services/condition.service'

export const setEventListeners = (editor, config = {}) => {

    editor.on('block changed', ({ event }) => {
        const { type } = event
        if (type === 'block-moved' || type === 'block-removed' || type === 'block-added') {
            if (state.api && config.indent) indent(state.api)
        }
    })

    document.addEventListener("mouseup", () => onSelectionChanged(), false);

    setTimeout(() => {
        if (config.indent) indent(state.api)
        reapplyConditionsToBlocks()
    }, 50);

}