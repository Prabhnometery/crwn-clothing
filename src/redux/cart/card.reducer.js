import { addItemToCart } from './cart.utils'; 

const INITIAL_STATE = {
    hidden: true,
    cartItems: []
}

const cardReducer = (state = INITIAL_STATE, action) => {
    switch(action.type) {
        case 'TOGGLE_CART_HIDDEN':
            return {
                ...state,
                hidden: !state.hidden // also we can write action.payload
            };
        case 'ADD_ITEM':
            return {
                ...state,
                cartItems: addItemToCart(state.cartItems, action.payload)  //Spreading in the array values
            }
            default:
                return state;
    }
}

export default cardReducer;


