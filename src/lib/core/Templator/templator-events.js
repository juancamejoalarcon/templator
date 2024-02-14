import state from '@/lib/services/state.service';
import { indent } from '@/lib/services/indent'
import { onSelectionChanged } from '@/lib/services/selection'
import { reapplyConditionsToBlocks } from '@/lib/services/condition.service'

export const setEventListeners = (editor, config = {}) => {

    editor.on('block changed', ({ event }) => {
        const { type } = event
        if (type === 'block-moved' || type === 'block-removed' || type === 'block-added') {
            if (state.api && config.indent) indent(state.api)
        }
    })

    onSelectionChanged();

    setTimeout(() => {
        if (config.indent) indent(state.api)
        reapplyConditionsToBlocks()
    }, 50);

}