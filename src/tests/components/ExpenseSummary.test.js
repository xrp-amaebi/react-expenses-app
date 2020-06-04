import React from 'react';
import { shallow } from 'enzyme';
import { ExpenseSummary } from '../../components/ExpenseSummary';


test('should correctly render expense summary with 1 expense', () => {
    const wrapper = shallow(<ExpenseSummary expenseCount={1} expensesTotal={100}/>);
    expect(wrapper).toMatchSnapshot();
});

test('should correctly render expense summary with multiple expenses', () => {
    const wrapper = shallow(<ExpenseSummary expenseCount={10} expensesTotal={10000} />);
    expect(wrapper).toMatchSnapshot();
});