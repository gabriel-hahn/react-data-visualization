import { call, put, select } from 'redux-saga/effects';
import api from '../../services/api';

import { Notification } from '../../utils/Notification';

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

      // Remove last coma
      coinsSymbolsStr = coinsSymbolsStr.substring(0, coinsSymbolsStr.length - 1);

      const { data } = yield call(
        api.get,
        `/data/pricemultifull?fsyms=${coinsSymbolsStr}&tsyms=USD`,
      );

      yield put(FavoritesActions.setPricesRequest(Object.values(data.RAW)));
    }
  } catch (err) {
    yield put(ErrorActions.setError('Something wrong happened! Try again'));
    Notification.somethingWrong();
  }
}

export function* getFavoriteHistorical({ payload }) {
  try {
    const { data } = yield call(
      api.get,
      `/data/histoday?fsym=${payload.coin.Name}&tsym=USD&limit=10`,
    );

    const { coin } = payload;
    coin.historical = data.Data;

    yield put(FavoritesActions.setCurrent(coin));
  } catch (err) {
    yield put(ErrorActions.setError('Something wrong happened! Try again'));
    Notification.somethingWrong();
  }
}
