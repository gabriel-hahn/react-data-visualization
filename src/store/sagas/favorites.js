import { call, put, select } from 'redux-saga/effects';
import api from '../../services/api';

import { Creators as FavoritesActions } from '../ducks/favorites';
import { Creators as ErrorActions } from '../ducks/error';

export function* getFavoritesPrice() {
  try {
    const favorites = yield select(state => state.favorites.items);

    if (favorites.length > 0) {
      let coinsSymbolsStr = favorites.reduce(
        (symbols, coin) => symbols.concat(coin.Name).concat(','),
        '',
      );
      coinsSymbolsStr = coinsSymbolsStr.substring(0, coinsSymbolsStr.length - 1); // Remove last coma

      const { data } = yield call(
        api.get,
        `/data/pricemultifull?fsyms=${coinsSymbolsStr}&tsyms=USD`,
      );

      yield put(FavoritesActions.setPricesRequest(Object.values(data.RAW)));
    }
  } catch (err) {
    yield put(ErrorActions.setError('Something wrong happened!'));
  }
}
