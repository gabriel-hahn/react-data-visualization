import React from "react";
import { Provider } from "react-redux";

import "./config/reactotron";
import { GlobalStyle } from "./styles/global";

import store from "./store";

import Main from "./pages/Main";

function App() {
    return (
        <Provider store={store}>
            <GlobalStyle />
            <Main />
        </Provider>
    );
}

export default App;
