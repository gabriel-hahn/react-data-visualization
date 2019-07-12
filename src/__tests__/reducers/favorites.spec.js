import favoritesReducer, { Creators as FavoritesActions } from '../../store/ducks/favorites';

const INITIAL_STATE = {
  items: [
    {
      Id: '1',
      Name: 'BTC',
      FullName: 'Bitcoin',
    },
    {
      Id: '2',
      Name: 'DOGC',
      FullName: 'Dogcoin',
    },
  ],
  current: {
    Id: '2',
    Name: 'DOGC',
    FullName: 'Dogcoin',
  },
};

describe('Favorites reducer', () => {
  it('Should be able to set prices request', () => {
    const prices = [
      { USD: { FROMSYMBOL: 'BTC', PRICE: 323 } },
      { USD: { FROMSYMBOL: 'DOGC', PRICE: 12300 } },
    ];

    const state = favoritesReducer(INITIAL_STATE, FavoritesActions.setPricesRequest(prices));

    expect(state.items[0].price).toEqual(prices[0]);
    expect(state.items[1].price).toEqual(prices[1]);
  });

  it('Should be able to add a new favorite', () => {
    const newFavorite = { CoinInfo: { Id: '3', Name: 'PCON', FullName: 'PeaceCoin' } };
    const state = favoritesReducer(INITIAL_STATE, FavoritesActions.addFavorite(newFavorite));

    expect(state.items).toEqual([...INITIAL_STATE.items, { ...newFavorite.CoinInfo }]);
  });

  it('Should be able to set a new current favorite', () => {
    const state = favoritesReducer(
      INITIAL_STATE,
      FavoritesActions.setCurrent(INITIAL_STATE.items[0]),
    );
    expect(state.current).toEqual(INITIAL_STATE.items[0]);
  });

  it('Should be able to add a list of favorites', () => {
    const state = favoritesReducer({}, FavoritesActions.addFavoriteStorage(INITIAL_STATE));
    expect(state.items).toEqual(INITIAL_STATE);
  });

  it('Should be able to remove a favorite from items list', () => {
    const favoriteToRemove = { CoinInfo: { Id: '1', Name: 'BTC', FullName: 'Bitcoin' } };
    const state = favoritesReducer(
      INITIAL_STATE,
      FavoritesActions.removeFavorite(favoriteToRemove),
    );

    expect(state.items).toEqual([INITIAL_STATE.items[1]]);
  });

  it('Should return current state when a wrong action be set or nothing be passed', () => {
    const state = favoritesReducer(INITIAL_STATE, { type: 'SET_WRONG_ACTION' });
    expect(state).toBe(state);
  });
});
