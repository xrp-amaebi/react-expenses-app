import React from 'react';
import ReactDOM from 'react-dom';
import { Provider } from 'react-redux';
import AppRouter from "./routers/AppRouter";
import Config from './store/configureStore';
import { addExpense } from './actions/expenses';
import getVisibleExpenses from './selectors/expenses';
import 'normalize.css';
import './styles/styles.scss';
import 'react-dates/lib/css/_datepicker.css';

const store = Config();

store.dispatch(addExpense({description: "Water bill", amount: 100}));

store.dispatch( addExpense({description: "Gas bill", amount: 200, createdAt: 1000}));

store.dispatch( addExpense({description: "Rent", amount: 109500}));

const state = store.getState();
const visibleExpenses = getVisibleExpenses(state.expenses, state.filters);
console.log(visibleExpenses);

const jsx = ( 
  <Provider store={store} >
    <AppRouter /> 
  </Provider>
);

ReactDOM.render(jsx, document.getElementById('app'));