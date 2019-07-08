import React from 'react';
import { mount } from 'enzyme';
import { Provider } from 'react-redux';
import createStore from 'redux-mock-store';

import Settings from '../../pages/Settings';

const INITIAL_STATE = {
  coins: {
    items: [
      {
        CoinInfo: {
          Id: '1',
          FullName: 'Bitcoin',
          ImageUrl: 'url image 1',
        },
      },
      {
        CoinInfo: {
          Id: '2',
          FullName: 'Atest coin',
          ImageUrl: 'url image 2',
        },
      },
    ],
  },
  favorites: {
    items: [
      {
        Id: '1',
        FullName: 'Bitcoin',
        ImageUrl: 'url image 1',
      },
    ],
    current: null,
  }
};

const mockStore = createStore();
const store = mockStore(INITIAL_STATE);

let wrapper;

beforeEach(() => {
  wrapper = mount(
    <Provider store={store}>
      <Settings />
    </Provider>);
});

describe('Settings Component', () => {
  describe('Smoke tests', () => {
    it('Should render the settings page correctly', () => {
      expect(wrapper.exists());
    });
  });

  describe('Actions tests', () => {
    it('Should return 1 ConfirmButton component', () => {
      expect(wrapper.find('ConfirmButton').length).toEqual(1);
    });

    it('Should return 1 Search component', () => {
      expect(wrapper.find('Search').length).toEqual(1);
    });
    
    it('Should return 1 CoinGrid component', () => {
      expect(wrapper.find('CoinGrid').length).toEqual(1);
    });
  });
});
