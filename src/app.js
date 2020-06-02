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

const jsx = ( 
  <Provider store={store} >
    <AppRouter /> 
  </Provider>
);

ReactDOM.render(jsx, document.getElementById('app'));