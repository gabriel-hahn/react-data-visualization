import React from 'react';
import { shallow } from 'enzyme';
import createStore from 'redux-mock-store';

import CoinSpotlight from '../../components/CoinSpotlight';

const INITIAL_STATE = {
  favorites: {
    current: {
      Id: '1',
      FullName: 'Dogcoin',
      ImageUrl: 'url image 1',
    },
  }
};

const mockStore = createStore();
const store = mockStore(INITIAL_STATE);

let wrapper;

beforeEach(() => {
  wrapper = shallow(<CoinSpotlight store={store} />).dive();
});

describe('CoinSpotlight Component', () => {
  describe('Smoke tests', () => {
    it('Should render the coin spotlight component correctly', () => {
      expect(wrapper.exists());
    });
  });

  describe('Actions tests', () => {
    it('Should has 1 CoinImage element', () => {
      expect(wrapper.dive().find('CoinImage').length).toEqual(1);
    });

    it('Should render coin full name correctly', () => {
      const titleEl = wrapper.dive().find('h2').get(0);
      expect(titleEl.props.children).toEqual('Dogcoin');
    });
  });
});
