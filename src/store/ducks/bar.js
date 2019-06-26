export const Types = {
    SET_CURRENT: "bar/SET_CURRENT"
};

const INITIAL_STATE = {
    current: ""
};

export default function Bar(state = INITIAL_STATE, action) {
    switch (action.type) {
        case Types.SET_CURRENT:
            return { ...state, current: action.payload.current };
        default:
            return state;
    }
}

export const Creators = {
    setCurrent: current => ({ type: Types.SET_CURRENT, payload: { current } })
};
