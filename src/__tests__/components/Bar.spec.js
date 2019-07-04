import React from 'react';
import { shallow } from 'enzyme';

import Bar from '../../components/Bar';

let wrapper;

beforeEach(() => {
  wrapper = shallow(<Bar />);
});

describe('Bar Component', () => {
  describe('Smoke tests', () => {
    it('Should render the bar component correctly', () => {
      expect(wrapper.exists());
    });
  });

  describe('Actions tests', () => {
    it('Should return 2 bar options', () => {
      expect(wrapper.find('Button').length).toEqual(2);
    });

    it('Should start with Settings option selected', () => {
      const instance = wrapper.instance();
      expect(instance.state.current).toEqual('Settings');
    });

    it('Should start with Dashboard option selected', () => {
      const favorites = [{ id: 1 }, { id: 2 }];
      localStorage.setItem('cryptoDash', JSON.stringify(favorites));

      wrapper = shallow(<Bar />);

      const instance = wrapper.instance();
      expect(instance.state.current).toEqual('Dashboard');
    });

    it('Should change current state to Dashboard', () => {
      const button = shallow(wrapper.find('Button').get(0));
      button.simulate('click');
      
      const instance = wrapper.instance();
      expect(instance.state.current).toEqual('Dashboard');
    });

    it('Should change current state to Settings', () => {
      const button = shallow(wrapper.find('Button').get(1));
      button.simulate('click');
      
      const instance = wrapper.instance();
      expect(instance.state.current).toEqual('Settings');
    });
  });
});
