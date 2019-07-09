import { runSaga } from 'redux-saga';
import MockAdapter from 'axios-mock-adapter';
import api from '../../services/api';

import { getFavoritesPrice } from '../../store/sagas/favorites';
import { Creators as FavoritesActions } from '../../store/ducks/favorites';
import { Creators as ErrorActions } from '../../store/ducks/error';

const apiMock = new MockAdapter(api);

describe('Favorites Saga', () => {
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
