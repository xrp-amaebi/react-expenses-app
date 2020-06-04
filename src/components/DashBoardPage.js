import React from "react";
import ExpenseList from "./ExpensesList";
import ExpenseListFilters from "./ExpenseListFilters";
import ExpenseSummary from './ExpenseSummary';


const ExpenseDashboardPage = () => ( 
    <div>
        <ExpenseSummary /> 
        <ExpenseListFilters />
        <ExpenseList />
    </div>
);

export default ExpenseDashboardPage;