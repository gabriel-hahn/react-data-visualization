import { all, takeLatest } from 'redux-saga/effects';

import { Types as CoinsTypes } from '../ducks/coins';

import { getCoins } from './coins';

export default function* rootSaga() {
  yield all([takeLatest(CoinsTypes.GET_COINS_REQUEST, getCoins)]);
}
