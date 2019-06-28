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
      expect(wrapper.find('ControlButton').length).toEqual(2);
    });

    it('Should start with Dashboard option selected', () => {
      // Mock local storage
    });
  });
});
