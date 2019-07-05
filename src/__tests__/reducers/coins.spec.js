import coinsReducer, { Creators as CoinsActions } from '../../store/ducks/coins';

const INITIAL_STATE = {
  items: [
    {
      CoinInfo: {
        FullName: 'Bitcoin'
      },
      excluded: false,
    },
    {
      CoinInfo: {
        FullName: 'DogCoin'
      },
      excluded: false,
    }
  ],
  loading: false,
};

describe('Coins reducer', () => {
  it('Should be able to set loading true when make a request to retrieve coins', () => {
    const state = coinsReducer(INITIAL_STATE, CoinsActions.getCoinsRequest());

    expect(state.loading).toBe(true);
    expect(state.items).toBe(INITIAL_STATE.items);
  });

  it('Should be able to set new items', () => {
    const state = coinsReducer({ items: [], loading: true }, CoinsActions.setCoinsRequest(INITIAL_STATE.items));

    expect(state.loading).toBe(false);
    expect(state.items).toBe(INITIAL_STATE.items);
  });

  it('Should be able to set filter by name', () => {
    const state = coinsReducer(INITIAL_STATE, CoinsActions.setFilter('Dog'));

    expect(state.items[0].excluded).toBe(true);
    expect(state.items[1].excluded).toBe(false);
    expect(state.loading).toBe(false);
  });

  it('Should return current state when a wrong action be set or nothing be passed', () => {
    const state = coinsReducer(INITIAL_STATE, { type: 'SET_WRONG_ACTION' });
    expect(state).toBe(state);
  });
});
