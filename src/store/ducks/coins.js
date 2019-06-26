export const Types = {
    GET_COINS: "coins/GET_COINS"
};

const INITIAL_STATE = {
    items: ""
};

export default function Coins(state = INITIAL_STATE, action) {
    switch (action.type) {
        case Types.GET_COINS:
            return { ...state, items: action.payload.coins };
        default:
            return state;
    }
}

export const Creators = {
    getCoins: coins => ({ type: Types.GET_COINS, payload: { coins } })
};
