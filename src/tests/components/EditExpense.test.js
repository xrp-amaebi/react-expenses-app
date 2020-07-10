import React from 'react';
import { shallow } from 'enzyme';
import expenses from '../fixtures/expenses';
import { EditPage } from '../../components/EditPage';

let startEditExpense, startRemoveExpense, history, wrapper;

beforeEach( () => {
    startEditExpense = jest.fn();
    startRemoveExpense = jest.fn();
    history = { push: jest.fn() };
    wrapper = shallow(
    <EditPage 
        startEditExpense={startEditExpense} 
        startRemoveExpense={startRemoveExpense}
        history={history}
        expense={expenses[2]}
    />
    );
});

test('should render edit Page correctly', () => {
    expect(wrapper).toMatchSnapshot();
});

test('should handle startEditExpense correctly', () => {
    wrapper.find('ExpenseForm').prop('onSubmit')(expenses[2]);
    expect(history.push).toHaveBeenLastCalledWith('/');
    expect(startEditExpense).toHaveBeenLastCalledWith(expenses[2].id, expenses[2]);
});

test('should handle startRemoveExpense correctly', () => {
    wrapper.find('button').simulate('click');
    expect(history.push).toHaveBeenLastCalledWith('/');
    expect(startRemoveExpense).toHaveBeenLastCalledWith({ 
        id: expenses[2].id 
    });
});

