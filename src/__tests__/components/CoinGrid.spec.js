import React from 'react';
import { shallow } from 'enzyme';
import createStore from 'redux-mock-store';

import CoinGrid from '../../components/CoinGrid';
import { Types as FavoritesTypes } from '../../store/ducks/favorites';

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
        excluded: false,
      },
      {
        CoinInfo: {
          Id: '3',
          FullName: 'Dog coin',
          ImageUrl: 'url image 3',
        },
        excluded: true,
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

const INITIAL_STATE_EMPTY = { coins: { items: [] }, favorites: { items: [] } };

const mockStore = createStore();

let store;
let storeEmpty;
let wrapper;
let wrapperWithoutCoins;

beforeEach(() => {
  store = mockStore(INITIAL_STATE);
  storeEmpty = mockStore(INITIAL_STATE_EMPTY);

  wrapper = shallow(<CoinGrid store={store} />).dive();
  wrapperWithoutCoins = shallow(<CoinGrid store={storeEmpty} />).dive();
});

afterEach(() => {
  wrapper.unmount();
});

describe('CoinGrid Component', () => {
  describe('Smoke tests', () => {
    it('Should render the coin grid component correctly', () => {
      expect(wrapper.exists());
    });
  });

  describe('Actions tests', () => {
    it('Should shows Loading element when there are not coins in the state', () => {
      expect(wrapperWithoutCoins.dive().find('Loading').length).toEqual(1);
      expect(wrapperWithoutCoins.dive().find('SelectableTile').length).toEqual(0);
    });

    it('Should has 2 SelectableTile elements', () => {
      expect(wrapper.dive().find('SelectableTile').length).toEqual(2);
    });

    it('Should has 2 CoinImage elements', () => {
      expect(wrapper.dive().find('CoinImage').length).toEqual(2);
    });

    it('Should has 2 CoinText elements', () => {
      expect(wrapper.dive().find('CoinText').length).toEqual(2);
    });

    it('Should add a favorite when click on it', () => {
      const selectableEl = shallow(wrapper.dive().find('SelectableTile').get(1));
      selectableEl.simulate('click');

      expect(store.getActions().length).toEqual(1);
      expect(store.getActions()[0].type).toEqual(FavoritesTypes.ADD_FAVORITE);
    });

    it('Should remove a item from favorites', () => {
      const selectableEl = shallow(wrapper.dive().find('SelectableTile').get(0));
      selectableEl.simulate('click');

      expect(store.getActions().length).toEqual(1);
      expect(store.getActions()[0].type).toEqual(FavoritesTypes.REMOVE_FAVORITE);
    });
  });
});
