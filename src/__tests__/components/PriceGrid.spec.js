import React from 'react';
import { shallow } from 'enzyme';
import createStore from 'redux-mock-store';

import PriceGrid from '../../components/PriceGrid';

import { Types as FavoritesTypes } from '../../store/ducks/favorites';

const INITIAL_STATE = {
  favorites: {
    items: [
      {
        Id: '1',
        Name: 'DOGC',
        FullName: 'Dogcoin',
        ImageUrl: 'url image 1',
        price: {
          USD: {
            CHANGEPCT24HOUR: -123,
            PRICE: 2131,
          },
        },
      },
      {
        Id: '2',
        Name: 'BTC',
        FullName: 'Bitcoin',
        ImageUrl: 'url image 2',
        price: {
          USD: {
            CHANGEPCT24HOUR: 23,
            PRICE: 113122,
          },
        },
      },
    ],
    current: {
      Id: '1',
      Name: 'DOGC',
      FullName: 'Dogcoin',
      ImageUrl: 'url image 1',
      price: {
        USD: {
          CHANGEPCT24HOUR: -123,
          PRICE: 2131,
        },
      },
    },
  },
};

const mockStore = createStore();

let store;
let wrapper;

beforeEach(() => {
  store = mockStore(INITIAL_STATE);
  wrapper = shallow(<PriceGrid store={store} />).dive();
});

describe('PriceGrid Component', () => {
  describe('Smoke tests', () => {
    it('Should render the price chart component correctly', () => {
      expect(wrapper.exists());
    });

    it('Should has 2 PriceTile components', () => {
      expect(wrapper.dive().find('PriceTile').length).toEqual(2);
    });
  });

  describe('Actions tests', () => {
    it('Should change the current favorite when another was clicked', () => {
      const instance = wrapper.dive().instance();

      instance.handleFavoriteClick(INITIAL_STATE.favorites.items[1]);

      expect(store.getActions().length).toEqual(1);
      expect(store.getActions()[0].type).toEqual(FavoritesTypes.GET_HISTORICAL_REQUEST);
    });
  });
});
