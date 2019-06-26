import { combineReducers } from "redux";

import error from "./error";
import coins from "./coins";

const reducers = combineReducers({
    coins,
    error
});

export default reducers;
