import { call, put, select } from 'redux-saga/effects';
import api from '../../services/api';

import { Creators as FavoritesActions } from '../ducks/favorites';
import { Creators as ErrorActions } from '../ducks/error';

export function* getFavoritesPrice() {
  try {
    const favorites = yield select(state => state.favorites.items);

    if (favorites.length > 0) {
      let coinsSymbolsStr = favorites.reduce((symbols, coin) => symbols.concat(coin.CoinInfo.Name).concat(','), '');
      coinsSymbolsStr = coinsSymbolsStr.substring(0, coinsSymbolsStr.length - 1); // Remove last coma
      
      const prices = yield call(api.get, `/data/pricemultifull?fsyms=${coinsSymbolsStr}&tsyms=USD`);
      console.log(prices);
    }
  } catch (err) {
    yield put(ErrorActions.setError('Something wrong happened!'));
  }
}
