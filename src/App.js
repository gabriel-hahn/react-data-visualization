import React, { Fragment } from 'react';
import { Provider } from 'react-redux';
import { BrowserRouter } from 'react-router-dom';
import { ToastContainer } from 'react-toastify';
import 'react-toastify/dist/ReactToastify.css';

import './config/reactotron';
import { GlobalStyle } from './styles/global';

import Bar from './components/Bar';

import Routes from './routes';
import store from './store';

const App = () => (
  <Provider store={store}>
    <BrowserRouter>
      <Fragment>
        <GlobalStyle />
        <ToastContainer />
        <Bar />
        <Routes />
      </Fragment>
    </BrowserRouter>
  </Provider>
);

export default App;
