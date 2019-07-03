export const Types = {
  GET_COINS_REQUEST: 'coins/GET_COINS_REQUEST',
  SET_COINS_REQUEST: 'coins/SET_COINS_REQUEST',
  ADD_FAVORITE: 'coins/ADD_FAVORITE',
  ADD_FAVORITE_STORAGE: 'coins/ADD_FAVORITE_STORAGE',
  REMOVE_FAVORITE: 'coins/REMOVE_FAVORITE',
  SET_FILTER: 'coins/SET_FILTER',
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
    case Types.ADD_FAVORITE_STORAGE:
      return { ...state, favorites: action.payload.favorites };
    case Types.REMOVE_FAVORITE:
      return {
        ...state,
        favorites: state.favorites.filter(coin => coin !== action.payload.favorite),
      };
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
  addFavorite: favorite => ({ type: Types.ADD_FAVORITE, payload: { favorite } }),
  addFavoriteStorage: favorites => ({ type: Types.ADD_FAVORITE_STORAGE, payload: { favorites } }),
  removeFavorite: favorite => ({ type: Types.REMOVE_FAVORITE, payload: { favorite } }),
  setFilter: filter => ({ type: Types.SET_FILTER, payload: { filter } }),
};
