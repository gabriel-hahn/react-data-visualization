import { combineReducers } from 'redux';

import error from './error';
import favorites from './favorites';
import coins from './coins';

const reducers = combineReducers({
  coins,
  favorites,
  error,
});

export default reducers;
