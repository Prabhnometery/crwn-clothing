const INITIAL_STATE = {
    hidden: true
}

const cardReducer = (state = INITIAL_STATE, action) => {
    switch(action.type) {
        case 'TOGGLE_CART_HIDDEN':
            return {
                ...state,
                hidden: !state.hidden // also we can write action.payload

            }
            default:
                return state;
    }
}

export default cardReducer;


