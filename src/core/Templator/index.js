import EditorJS from '@editorjs/editorjs';
import DragDrop from 'editorjs-drag-drop';

import { tools as defaultTools } from '@/services/tools'

import { setEventListeners } from './templator-events';

import state from '@/services/state.service';

import './index.scss'


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
                new DragDrop(this.editor);
                setEventListeners(this.editor)
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