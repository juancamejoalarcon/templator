import EditorJS from '@editorjs/editorjs';
import DragDrop from 'editorjs-drag-drop';

import { tools as defaultTools } from '@/lib/services/tools'

import { setEventListeners } from './templator-events';

import state from '@/lib/services/state.service';

import './index.scss'

export class Templator {

    /**
     * @typedef {Object} Config
     * @property {boolean} [indent] - enable indentation
     * @typedef {Object} TemplatorParams
     * @property {string} holder
     * @property {string} [placeholder]
     * @property {() => void} [onReady]
     * @property {() => void} [onChange]
     * @property {Object} [tools]
     * @property {Object} [data]
     * @property {Config} [config]
     * @param {TemplatorParams} params
     */
    constructor(params = { holder: ''}) {

        const { 
            holder,
            placeholder,
            onReady = () => {},
            onChange = () => {},
            tools = {},
            data = {},
            config = {}
         } = params

        if (!holder) throw new Error('Missing holder container')

        this.init({ holder, placeholder, onReady, onChange, tools, data, config })

        return this.editor
    }

    init({ holder, placeholder, onReady = () => { }, onChange = () => { }, tools = {}, data, config = {} }) {
        this.editor = new EditorJS({
            holder,
            placeholder,
            data,
            onReady: () => {
                new DragDrop(this.editor);
                setEventListeners(this.editor, config)
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