// change this to true to see test results on the black diamond section.
export const BLACK_DIAMOND = false;

//TYPES
const INCREMENT = 'INCREMENT';
const DECREMENT = 'DECREMENT';//const: throws an error when they try to change the string.

//ACTION BUILDERS
//every piece of data is called payload so that it can be kept track of and you dont have to remember.
//Action builders always return a object
//!!!And they always have a type!!!
//Make sure to export them.
export function increment(amount) {
    return {
        type: INCREMENT,
        payload: amount
    }
}
export function decrement(amount) {
    return {
        type: DECREMENT,
        payload: amount
    }
}

//defining initial state.
const initialState = {
    currentValue: 0
}

export default function reducer(state = initialState, action) {//running an if statement in the back to look to see if state is initialized. not making changes to state.

    switch (action.type) {
        case INCREMENT:
            let sum = state.currentValue + action.payload;//action.payload is refering to the type and the value of payload.
            return Object.assign({}, state, { currentValue: sum })//still reference the name on the left of the equals. state has to go first or it will get overid.
        case DECREMENT:
            let difference = state.currentValue - action.payload
            return Object.assign({}, state, { currentValue: difference })
    }

}