import { put } from 'redux-saga/effects';
import cc from 'cryptocompare';

import { Creators as CoinsActions } from '../ducks/coins';
import { Creators as ErrorActions } from '../ducks/error';

export function* getCoins() {
  try {
    const response = yield cc.coinList();
    yield put(CoinsActions.setCoins(response.Data));
  } catch (err) {
    yield put(ErrorActions.setError('Something wrong happened!'));
  }
}
