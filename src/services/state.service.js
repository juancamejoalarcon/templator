class State {

    constructor() {
        /**
         * When a block is deleted the destroy function is fired
         * this flagg is used to prevent this to happen
         * @type {boolean}
         */
        this.preventDestroyFunctToFireFlag = false
    }

    setApi(API) {
        this.api = API
    }

    setPreventDestroyFunctToFire(value) {
        this.preventDestroyFunctToFireFlag = value
    }
}

export default new State()