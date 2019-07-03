export const Types = {
  GET_PRICES_REQUEST: 'coins/GET_PRICES_REQUEST',
  ADD_FAVORITE: 'coins/ADD_FAVORITE',
  ADD_FAVORITE_STORAGE: 'coins/ADD_FAVORITE_STORAGE',
  REMOVE_FAVORITE: 'coins/REMOVE_FAVORITE',
};

const INITIAL_STATE = {
  items: [],
  loading: false,
};

export default function Coins(state = INITIAL_STATE, action) {
  switch (action.type) {
    case Types.GET_PRICES_REQUEST:
      return { ...state, loading: true };
    case Types.ADD_FAVORITE:
      return { ...state, items: [...state.items, action.payload.favorite] };
    case Types.ADD_FAVORITE_STORAGE:
      return { ...state, items: action.payload.favorites };
    case Types.REMOVE_FAVORITE:
      const { favorite } = action.payload;
      return {
        ...state,
        items: state.items.filter(coin => coin.CoinInfo.Id !== favorite.CoinInfo.Id),
      };
    default:
      return state;
  }
}

export const Creators = {
  getPricesRequest: () => ({ type: Types.GET_PRICES_REQUEST }),
  addFavorite: favorite => ({ type: Types.ADD_FAVORITE, payload: { favorite } }),
  addFavoriteStorage: favorites => ({ type: Types.ADD_FAVORITE_STORAGE, payload: { favorites } }),
  removeFavorite: favorite => ({ type: Types.REMOVE_FAVORITE, payload: { favorite } }),
};
