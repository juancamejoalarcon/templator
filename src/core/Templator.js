import EditorJS from '@editorjs/editorjs';
import DragDrop from 'editorjs-drag-drop';

import { tools as defaultTools } from '@/services/tools'

import { indent } from '@/services/indent'

import { reapplyConditionsToBlocks } from '../services/condition.service'
import { onSelectionChanged } from '../services/selection.service'
import state from '@/services/state.service';


export class Templator {

    constructor({
        holder,
        placeholder,
        onReady = () => { },
        onChange = () => { },
        tools = {},
        data = {}
    } = {}) {

        if (!holder) throw new Error('Missing holder container')

        this.init({ holder, placeholder, onReady, onChange, tools, data })

        return this.editor
    }

    init({ holder, placeholder, onReady = () => { }, onChange = () => { }, tools = {}, data }) {
        this.editor = new EditorJS({
            holder,
            placeholder,
            data,
            onReady: () => {
                this.editor.on('block changed', ({ event }) => {
                    const { type } = event
                    if (type === 'block-moved' || type === 'block-removed' || type === 'block-added') {
                        if (state.api) indent(state.api)
                    }
                })
                new DragDrop(this.editor);

                document.addEventListener("mouseup", () => {
                    onSelectionChanged(state.api)
                }, false);

                setTimeout(() => {
                    indent(state.api)
                    reapplyConditionsToBlocks(state.api)
                }, 50);

                onReady()
            },
            onChange: (API) => {
                state.setApi(API)
                onChange()
            },
            tunes: ['IfConditionTune', 'ForConditionTune'],
            tools: {
                ...defaultTools,
                ...tools
            },
        })
    }

}