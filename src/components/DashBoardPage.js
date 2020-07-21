import React from "react";
import ExpenseList from "./ExpensesList";
import ExpenseListFilters from "./ExpenseListFilters";
import ExpenseSummary from './ExpenseSummary';


export const DashBoard = () => ( 
    <div>
        <ExpenseSummary /> 
        <ExpenseListFilters />
        <ExpenseList />
    </div>
);