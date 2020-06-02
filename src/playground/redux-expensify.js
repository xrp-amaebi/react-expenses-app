import {createStore, combineReducers} from 'redux';
import uuid from 'uuid';

const addExpense = (
    { 
        description =  '', 
        note = '', 
        amount = 0,
        createdAt = 0
    } = {}
) => ({
    type: 'ADD_EXPENSE',
    expenses: {
        id: uuid(),
        description,
        note,
        amount,
        createdAt
    }
});

const removeExpense = ({id} = {}) => ({
    type: "REMOVE_EXPENSE",
    id
});

const editExpense = ( id, updates) => ({
    type: "EDIT_EXPENSE",
    id,
    updates

});

const setTextFilter = (text = " ") => ({
    type: "SET_TEXT",
    text
});
const setStartDate = (startdate) => ({
    type: "SET_START_DATE",
    startdate
});
const setEndDate = (enddate) => ({
    type: "SET_END_DATE",
    enddate
});

const sortByAmount = () => ({
    type: "SORT_AMOUNT",
    
});

const sortByDate = () => ({
    type: "SORT_DATE",
});

const expensesReducerDefaultState = [];
const filtersReducerDefaultState = {
    text: '',
    sortBy: '',
    startDate: undefined,
    endDate: undefined
};

const expensesReducer = ( state = expensesReducerDefaultState, action) => {
    switch (action.type){
        case "ADD_EXPENSE":
            return [
                ...state,
                action.expenses
            ]

        case "REMOVE_EXPENSE":
            return state.filter( ({ id }) => id !== action.id );
          
        case "EDIT_EXPENSE":
            return state.map((expense) => {
                if (expense.id === action.id) {
                    return {
                        ...expense,
                        ...action.updates
                    }
                } else {
                    return expense;
                }
            } )

        default:
            return state;
    }
};

const filtersReducer = ( state = filtersReducerDefaultState, action) => {
    switch (action.type){
        case "SET_TEXT":
               return {
                    ...state,
                    text: action.text
               }
        case "SORT_AMOUNT":
            return {
                ...state,
                sortBy: 'amount'
            }
        case "SORT_DATE":
            return {
                ...state,
                sortBy: 'date'
            }
        case "SET_START_DATE":
            return {
                ...state,
                startDate: action.startdate
            }
        case "SET_END_DATE":
            return {
                ...state,
                endDate: action.enddate
            }
            
        default:
            return state;
    }
};


 
// Get Visible Expenses
const getVisibleExpenses = (expenses, {text, sortBy, startDate, endDate}) => {
    return expenses.filter((expense)=>{
        const startDateMatch = typeof startDate !== 'number' || expense.createdAt >= startDate;
        const endDateMatch = typeof endDate !== 'number' || expense.createdAt <= endDate;
        const textMatch = expense.description.toLowerCase().includes(text.toLowerCase());

        return startDateMatch && endDateMatch && textMatch; 

    }).sort((a, b) => {
        if(sortBy === 'date') {
           return a.createdAt < b.createdAt ? 1 : -1;
        } else if ( sortBy === 'amount' ) {
            return a.amount < b.amount ? 1 : -1;
        }
    });
};

const store = createStore(
    combineReducers({
        expenses: expensesReducer,
        filters: filtersReducer
    })
);

store.subscribe(() => {
    const state = store.getState();
    const visibleExpenses = getVisibleExpenses( state.expenses, state.filters);
    console.log(visibleExpenses);
});

const ExpenseOne = store.dispatch( addExpense({description: 'Rent', amount: 100, createdAt: -21000})); 

const ExpenseTwo = store.dispatch( addExpense({description: 'Coffee', amount: 300, createdAt: -1000})); 

// store.dispatch( removeExpense({ id: ExpenseOne.expenses.id}));

// store.dispatch( editExpense(ExpenseTwo.expenses.id, { amount: 500}));
// store.dispatch( setTextFilter('rent'));
// store.dispatch( setTextFilter(''));

store.dispatch( sortByAmount()); // amount
// store.dispatch( sortByDate()); // date

// store.dispatch(setStartDate(0));
// store.dispatch(setStartDate());
// store.dispatch(setEndDate(1000));

const demoState = {
    expenses: [{
        id: 'cauli-flower',
        description: 'January  Rent',
        note: 'This was the final payment for that address',
        amount: 5400,
        createdAt: 0
    }],
    filters: {
        text: 'rent',
        sortBy: 'amount', //date or amount 
        startDate: undefined,
        endDate: undefined
    }
};
