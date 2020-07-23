import React from 'react';
import { connect } from 'react-redux'; 
import ExpenseListItem from './ExpenseListItem';
import selectExpenses from '../selectors/expenses';


export const ExpenseList = (props) => (
    <div className={'content-container'}>
        <div className={'list-header'}>
            <div className={'show-for-mobile'}>Expenses</div>
            <div className={'show-for-desktop'}>Expense</div>
            <div className={'show-for-desktop'}>Amount</div>
        </div>
        <div className="list-body">
            {
                props.expenses.length === 0 ?
                    (
                        <div className={'list-item--message'}>
                            <span>No Expenses</span>
                        </div>
                    )
                    :
                    (
                        props.expenses.map(item =>
                            <ExpenseListItem
                                key={item.id}
                                {...item}
                            />
                        )
                    )
            } 
        </div>
    </div>
);

const mapStateToProps = (state) => ({ 
    expenses: selectExpenses(state.expenses, state.filters)
});

export default connect(mapStateToProps)(ExpenseList);