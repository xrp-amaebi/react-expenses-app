import React from 'react';
import { shallow } from 'enzyme';
import { DashBoard }from '../../components/DashBoardPage';

test('should render Dashboard Page correctly', () => {
    const wrapper = shallow(<DashBoard />);
    expect(wrapper).toMatchSnapshot();
});