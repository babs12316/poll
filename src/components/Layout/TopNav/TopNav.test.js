import React from 'react';
import { expect } from 'chai';
import { shallow } from 'enzyme';
import TopNav from './TopNav';

describe('<TopNav />', () => {
    it('renders list', () => {
        const wrapper = shallow(<TopNav  title="My App"/>);
        expect(wrapper.find('ul')).to.have.lengthOf(1);
      });

      it('has class topNav', () => {
        const wrapper = shallow(<TopNav  title="My App" />);
        expect(wrapper.find('.topNav')).to.have.lengthOf(1);
      });


})