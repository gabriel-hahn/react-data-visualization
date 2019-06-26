import { call, put } from 'redux-saga/effects';
import cc from 'cryptocompare';

import { Creators as CoinsActions } from '../ducks/coins';
import { Creators as ErrorActions } from '../ducks/error';

export function* getCoins() {
    try {
        const response = yield cc.coinList();
        console.log(response);
    } catch(err) {
        console.log(err);
    }
}
