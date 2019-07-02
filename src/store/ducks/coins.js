export const Types = {
  GET_COINS_REQUEST: 'coins/GET_COINS_REQUEST',
  SET_COINS_REQUEST: 'coins/SET_COINS_REQUEST',
  ADD_FAVORITE: 'coins/ADD_FAVORITE',
  REMOVE_FAVORITE: 'coins/REMOVE_FAVORITE',
};

const INITIAL_STATE = {
  items: [],
  favorites: [],
  loading: false,
};

export default function Coins(state = INITIAL_STATE, action) {
  switch (action.type) {
    case Types.GET_COINS_REQUEST:
      return { ...state, loading: true };
    case Types.SET_COINS_REQUEST:
      return { ...state, loading: false, items: action.payload.coins };
    case Types.ADD_FAVORITE:
      return { ...state, favorites: [...state.favorites, action.payload.favorite] };
    case Types.REMOVE_FAVORITE:
      return {
        ...state,
        favorites: state.favorites.filter(coin => coin !== action.payload.favorite),
      };
    default:
      return state;
  }
}

export const Creators = {
  getCoinsRequest: () => ({ type: Types.GET_COINS_REQUEST }),
  setCoinsRequest: coins => ({ type: Types.SET_COINS_REQUEST, payload: { coins } }),
  addFavorite: favorite => ({ type: Types.ADD_FAVORITE, payload: { favorite } }),
  removeFavorite: favorite => ({ type: Types.REMOVE_FAVORITE, payload: { favorite } }),
};
