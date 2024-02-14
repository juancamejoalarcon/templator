class State {

    constructor() {
        /**
         * When a block is deleted the destroy function is fired
         * this flag is used to prevent this to happen
         * @type {boolean}
         */
        this.preventDestroyFunctToFireFlag = false

        this.classNameOfEditorJs = 'codex-editor'
    }

    setApi(API) {
        this.api = API
    }

    setPreventDestroyFunctToFire(value) {
        this.preventDestroyFunctToFireFlag = value
    }

    /**
     * Returns the element that contains the editor
     * @returns {HTMLElement}
     */
    getEditorRoot() {
        return document.querySelector('.' + this.classNameOfEditorJs)
    }
}

export default new State()