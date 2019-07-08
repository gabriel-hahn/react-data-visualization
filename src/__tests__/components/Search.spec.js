import React from 'react';
import { shallow } from 'enzyme';
import createStore from 'redux-mock-store';

import Search from '../../components/Search';

const INITIAL_STATE = {
  coins: {
    items: [
      {
        CoinInfo: {
          FullName: 'Bitcoin',
        },
      },
      {
        CoinInfo: {
          FullName: 'Atest coin',
        },
      },
    ],
  },
};

const mockStore = createStore();
const store = mockStore(INITIAL_STATE);

let wrapper;

beforeEach(() => {
  wrapper = shallow(<Search store={store} />).dive();
});

describe('Search Component', () => {
  describe('Smoke tests', () => {
    it('Should render the search component correctly', () => {
      expect(wrapper.exists());
    });
  });

  describe('Actions tests', () => {
    it('Should return 1 search input', () => {
      expect(wrapper.find('SearchInput').length).toEqual(1);
    });

    it('Should set current filter when user tap a new key', () => {
      const searchInput = wrapper.find('SearchInput');
      searchInput.simulate('keyUp', { target: { value: 'A' } });
    });
  });
});
