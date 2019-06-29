export const Types = {
  GET_COINS_REQUEST: 'coins/GET_COINS_REQUEST',
  SET_COINS: 'coins/SET_COINS',
};

const INITIAL_STATE = {
  items: '',
  loading: false,
};

export default function Coins(state = INITIAL_STATE, action) {
  switch (action.type) {
    case Types.GET_COINS_REQUEST:
      return { ...state, loading: true };
    case Types.SET_COINS:
      return { ...state, loading: false, items: action.payload.coins };
    default:
      return state;
  }
}

export const Creators = {
  getCoinsRequest: () => ({ type: Types.GET_COINS_REQUEST }),
  setCoins: coins => ({ type: Types.SET_COINS, payload: { coins } }),
};
