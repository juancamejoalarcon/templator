import state from '@/services/state.service';
import { indent } from '@/services/indent'
import { onSelectionChanged } from '@/services/selection.service'
import { reapplyConditionsToBlocks } from '@/services/condition.service'

export const setEventListeners = (editor) => {

    editor.on('block changed', ({ event }) => {
        const { type } = event
        if (type === 'block-moved' || type === 'block-removed' || type === 'block-added') {
            if (state.api) indent(state.api)
        }
    })

    document.addEventListener("mouseup", () => onSelectionChanged(state.api), false);

    setTimeout(() => {
        indent(state.api)
        reapplyConditionsToBlocks(state.api)
    }, 50);

}