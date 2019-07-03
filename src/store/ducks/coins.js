export const Types = {
  GET_COINS_REQUEST: 'coins/GET_COINS_REQUEST',
  SET_COINS_REQUEST: 'coins/SET_COINS_REQUEST',
  SET_FILTER: 'coins/SET_FILTER',
};

const INITIAL_STATE = {
  items: [],
  loading: false,
};

export default function Coins(state = INITIAL_STATE, action) {
  switch (action.type) {
    case Types.GET_COINS_REQUEST:
      return { ...state, loading: true };
    case Types.SET_COINS_REQUEST:
      return { ...state, loading: false, items: action.payload.coins };
    case Types.SET_FILTER:
      return {
        ...state,
        items: state.items.map(coin => ({
          ...coin,
          excluded: !coin.CoinInfo.FullName.startsWith(action.payload.filter),
        })),
      };
    default:
      return state;
  }
}

export const Creators = {
  getCoinsRequest: () => ({ type: Types.GET_COINS_REQUEST }),
  setCoinsRequest: coins => ({ type: Types.SET_COINS_REQUEST, payload: { coins } }),
  setFilter: filter => ({ type: Types.SET_FILTER, payload: { filter } }),
};
