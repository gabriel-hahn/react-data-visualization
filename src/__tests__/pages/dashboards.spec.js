import React from 'react';
import { shallow } from 'enzyme';

import Dashboard from '../../pages/Dashboard';
import PriceGrid from '../../components/PriceGrid';
import CoinSpotlight from '../../components/CoinSpotlight';

const fn = jest.fn();

const props = {
  history: {
    push: fn,
  }
};

let wrapper;

beforeEach(() => {
  wrapper = shallow(<Dashboard {...props} />);
});

describe('Dashboard Component', () => {
  describe('Smoke tests', () => {
    it('Should render the dashboard page correctly', () => {
      expect(wrapper.exists());
    });
  });

  describe('Actions tests', () => {
    it('Should has 1 PriceGrid component', () => {
      expect(wrapper.find(PriceGrid).length).toEqual(1);
    });

    it('Should has 1 CoinSpotlight component', () => {
      expect(wrapper.find(CoinSpotlight).length).toEqual(1);
    });
  });
});
