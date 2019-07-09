import { runSaga } from 'redux-saga';
import MockAdapter from 'axios-mock-adapter';
import api from '../../services/api';

import { getCoins } from '../../store/sagas/coins';
import { Creators as CoinsActions } from '../../store/ducks/coins';
import { Creators as ErrorActions } from '../../store/ducks/error';

const apiMock = new MockAdapter(api);

describe('Coins Saga', () => {
  it('Should be able to get coins', async () => {
    const dispatched = [];
    const coinsList = ['Coin 1', 'Coin 2', 'Coin 3'];
    const apiResponse = { Data: coinsList };

    apiMock.onGet('/data/top/totalvolfull?limit=100&tsym=USD').reply(200, apiResponse);

    await runSaga(
      {
        dispatch: action => dispatched.push(action),
      },
      getCoins,
    ).toPromise();

    const { payload } = CoinsActions.setCoinsRequest(apiResponse);

    expect(dispatched[0].payload.coins).toEqual(payload.coins.Data);
    expect(dispatched[0].type).toEqual(CoinsActions.setCoinsRequest(apiResponse).type);
  });
});

it('Should return a network error', async () => {
  const dispatched = [];

  apiMock.onGet('/data/top/totalvolfull?limit=100&tsym=USD').networkError();

  await runSaga(
    {
      dispatch: action => dispatched.push(action),
    },
    getCoins,
  ).toPromise();

  expect(dispatched).toContainEqual(ErrorActions.setError('Something wrong happened! Try again'));
});
