import { combineReducers } from "redux";

import bar from "./bar";
import coins from "./coins";

const reducers = combineReducers({
    bar, 
    coins
});

export default reducers;
