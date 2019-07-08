import React from 'react';
import { shallow } from 'enzyme';
import createStore from 'redux-mock-store';

import ConfirmButton from '../../components/ConfirmButton';

const INITIAL_STATE = {
  favorites: {
    items: [
      {
        Name: 'Bitcoin',
      },
    ],
  },
};

const mockStore = createStore();
const store = mockStore(INITIAL_STATE);

let wrapper;

beforeEach(() => {
  wrapper = shallow(<ConfirmButton store={store} />).dive();
});

describe('ConfirmButton component', () => {
  describe('Smoke tests', () => {
    it('Should render the confirm button correctly', () => {
      expect(wrapper.exists());
    });
  });

  describe('Actions tests', () => {
    it('Should has a confirm button element', () => {
      expect(wrapper.dive().find('Button').length).toEqual(1);
    });

    it('Should has correct favorites items', () => {
      const instance = wrapper.dive().instance();
      expect(instance.props.favorites).toEqual(INITIAL_STATE.favorites.items);
    });

    it('Should stringify favorites and put in local storage', () => {
      const button = wrapper.dive().find('Button');

      button.simulate('click');

      const localStorageFavorites = JSON.parse(localStorage.getItem('cryptodash@dataFavorites'));
      expect(localStorageFavorites).toEqual(INITIAL_STATE.favorites.items);
    });
  });
});
