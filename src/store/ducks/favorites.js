export const Types = {
  GET_PRICES_REQUEST: 'coins/GET_PRICES_REQUEST',
  GET_HISTORICAL_REQUEST: 'coins/GET_HISTORICAL_REQUEST',
  SET_PRICES_REQUEST: 'coins/SET_PRICES_REQUEST',
  ADD_FAVORITE: 'coins/ADD_FAVORITE',
  SET_CURRENT: 'coins/SET_CURRENT',
  ADD_FAVORITE_STORAGE: 'coins/ADD_FAVORITE_STORAGE',
  REMOVE_FAVORITE: 'coins/REMOVE_FAVORITE',
};

const INITIAL_STATE = {
  items: [],
  current: null,
  loading: false,
};

export default function Coins(state = INITIAL_STATE, action) {
  switch (action.type) {
    case Types.GET_PRICES_REQUEST:
      return { ...state, loading: true };
    case Types.SET_PRICES_REQUEST:
      return {
        ...state,
        loading: false,
        items: state.items.map(favorite => ({
          ...favorite,
          price: action.payload.prices.find(price => price.USD.FROMSYMBOL === favorite.Name),
        })),
      };
    case Types.ADD_FAVORITE:
      return { ...state, items: [...state.items, action.payload.favorite.CoinInfo] };
    case Types.SET_CURRENT:
      return { ...state, current: action.payload.current };
    case Types.ADD_FAVORITE_STORAGE:
      return { ...state, items: action.payload.favorites };
    case Types.REMOVE_FAVORITE:
      return {
        ...state,
        items: state.items.filter(coin => coin.Id !== action.payload.favorite.CoinInfo.Id),
      };
    default:
      return state;
  }
}

export const Creators = {
  getPricesRequest: () => ({ type: Types.GET_PRICES_REQUEST }),
  getHistoricalRequest: coin => ({ type: Types.GET_HISTORICAL_REQUEST, payload: { coin } }),
  setPricesRequest: prices => ({ type: Types.SET_PRICES_REQUEST, payload: { prices } }),
  addFavorite: favorite => ({ type: Types.ADD_FAVORITE, payload: { favorite } }),
  setCurrent: current => ({ type: Types.SET_CURRENT, payload: { current } }),
  addFavoriteStorage: favorites => ({ type: Types.ADD_FAVORITE_STORAGE, payload: { favorites } }),
  removeFavorite: favorite => ({ type: Types.REMOVE_FAVORITE, payload: { favorite } }),
};
