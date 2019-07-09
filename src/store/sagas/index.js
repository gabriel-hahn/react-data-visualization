import { all, takeLatest } from 'redux-saga/effects';

import { Types as CoinsTypes } from '../ducks/coins';
import { Types as FavoritesTypes } from '../ducks/favorites';

import { getCoins } from './coins';
import { getFavoritesPrice, getFavoriteHistorical } from './favorites';

export default function* rootSaga() {
  yield all([
    takeLatest(CoinsTypes.GET_COINS_REQUEST, getCoins),
    takeLatest(FavoritesTypes.GET_PRICES_REQUEST, getFavoritesPrice),
    takeLatest(FavoritesTypes.GET_HISTORICAL_REQUEST, getFavoriteHistorical),
  ]);
}
