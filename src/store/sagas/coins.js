import { call, put } from 'redux-saga/effects';
import api from '../../services/api';

import { Creators as CoinsActions } from '../ducks/coins';
import { Creators as ErrorActions } from '../ducks/error';

export function* getCoins() {
  try {
    const { data } = yield call(api.get, '/data/top/totalvolfull?limit=30&tsym=USD');
    yield put(CoinsActions.setCoins(data.Data));
  } catch (err) {
    yield put(ErrorActions.setError('Something wrong happened!'));
  }
}
