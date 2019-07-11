import React from 'react';
import { shallow } from 'enzyme';

import PriceTile from '../../components/PriceTile';

let wrapper;

const fn = jest.fn();
const props = {
  index: 0,
  selected: true,
  selectFavorite: fn,
  coin: {
    Id: '1',
    Name: 'DOGC',
    FullName: 'Dogcoin',
    ImageUrl: 'url image 1',
    price: {
      USD: {
        CHANGEPCT24HOUR: -123,
        PRICE: 2131,
      }
    },
  },
}

beforeEach(() => {
  wrapper = shallow(<PriceTile {...props} />);
});

describe('PriceTile Component', () => {
  describe('Smoke tests', () => {
    it('Should render the price tile component correctly', () => {
      expect(wrapper.exists());
    });
  });

  describe('Actions tests', () => {
    it('Should has 1 CoinHeader component', () => {
      expect(wrapper.find('CoinHeader').length).toEqual(1);
    });

    it('Should format price with correctly length', () => {
      const instance = wrapper.instance();
      const priceFormated = instance.formatPrice(253213235458);

      expect(priceFormated).toEqual("2532132");
    });
  });
});
