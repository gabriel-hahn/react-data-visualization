import { runSaga } from 'redux-saga';
import MockAdapter from 'axios-mock-adapter';
import api from '../../services/api';

import { getFavoritesPrice, getFavoriteHistorical } from '../../store/sagas/favorites';
import { Creators as FavoritesActions } from '../../store/ducks/favorites';
import { Creators as ErrorActions } from '../../store/ducks/error';

const apiMock = new MockAdapter(api);

const STATE = {
  favorites: {
    items: [
      {
        Id: '1',
        FullName: 'Bitcoin',
        Name: 'BTC',
        ImageUrl: 'url image 1',
      },
      {
        Id: '2',
        FullName: 'Atest coin',
        Name: 'ACO',
        ImageUrl: 'url image 2',
      },
      {
        Id: '3',
        FullName: 'Dog coin',
        Name: 'DOGC',
        ImageUrl: 'url image 3',
      },
    ]
  }
};

describe('Favorites Saga', () => {
  it('Should get prices from favorites list correctly', async () => {
    const dispatched = [];
    const coinInfo = { price: 100.12, endDay: 102.32, CoinName: 'Dog Coin' };
    const apiResponse = { RAW: coinInfo };

    apiMock.onGet('/data/pricemultifull?fsyms=BTC,ACO,DOGC&tsyms=USD').reply(200, apiResponse);

    await runSaga(
      {
        dispatch: action => dispatched.push(action),
        getState: () => ({ ...STATE }),
      },
      getFavoritesPrice,
    ).toPromise();

    expect(dispatched[0]).toEqual(FavoritesActions.setPricesRequest(Object.values(coinInfo)));
  });

  it('Should retrieve historical of current favorite selected', async () => {
    const dispatched = [];
    const apiResponse = { Data: { Id: 3 } };
    const coin = { payload: { coin: { Name: 'DOGC' } } };

    apiMock.onGet('/data/histoday?fsym=DOGC&tsym=USD&limit=10').reply(200, apiResponse);

    await runSaga(
      {
        dispatch: action => dispatched.push(action),
      },
      () => getFavoriteHistorical(coin),
    ).toPromise();

    expect(dispatched[0]).toEqual(FavoritesActions.setCurrent({ ...coin.payload.coin, historical: apiResponse.Data }));
  });

  it('Should return a network error', async () => {
    const dispatched = [];

    apiMock.onGet('/data/pricemultifull?fsyms=BTC&tsyms=USD').networkError();

    await runSaga(
      {
        dispatch: action => dispatched.push(action),
      },
      getFavoritesPrice,
    ).toPromise();

    expect(dispatched).toContainEqual(ErrorActions.setError('Something wrong happened! Try again'));
  });
});
