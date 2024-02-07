import EditorJS from '@editorjs/editorjs';
import DragDrop from 'editorjs-drag-drop';

import { tools as defaultTools } from '@/services/tools'

import { setEventListeners } from './templator-events';

import state from '@/services/state.service';

import './index.scss'

export class Templator {

    /**
     * @param {{ 
     * holder?:string,
     * placeholder?:string,
     * onReady?:() => void,
     * onChange?:() => void,
     * tools?:Object,
     * data?:Object,
     * config?:Object,
     * }} params
     */
    constructor(params = {}) {

        const { 
            holder,
            placeholder,
            onReady = () => {},
            onChange = () => {},
            tools = {},
            data = {},
            config = {
                indent: false
            }
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