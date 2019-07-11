import React from 'react';
import { shallow } from 'enzyme';
import ReactHighCharts from 'react-highcharts';
import createStore from 'redux-mock-store';

import PriceChart from '../../components/PriceChart';

const INITIAL_STATE = {
  favorites: {
    current: {
      Id: '1',
      Name: 'DOGC',
      FullName: 'Dogcoin',
      ImageUrl: 'url image 1',
      historical: [{
        close: 123,
        time: 1231232131,
      }]
    },
  },
};

const mockStore = createStore();
const store = mockStore(INITIAL_STATE);

let wrapper;

beforeEach(() => {
  wrapper = shallow(<PriceChart store={store} />).dive();
});

describe('PriceChart Component', () => {
  describe('Smoke tests', () => {
    it('Should render the price chart component correctly', () => {
      expect(wrapper.exists());
    });
  });

  describe('Actions tests', () => {
    it('Should has 1 ReactHighCharts element', () => {
      expect(wrapper.dive().find(ReactHighCharts).length).toEqual(1);
    });
  });
});
