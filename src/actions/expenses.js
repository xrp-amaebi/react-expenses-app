import uuid from 'uuid';
import database from '../firebase/firebase';


export const addExpense = (expenses) => ({
    type: 'ADD_EXPENSE',
    expenses
});

export const startAddExpense = (expenseData = {}) => {
    return (dispatch, getState) => {
        const uid = getState().auth.uid;
        const { description = '', text = '', amount = 0, createdAt = 0 } = expenseData; // Object Destructuring

        const expense = { description, text, amount, createdAt } // expense-Object initialization with destructured properties

        return database.ref(`users/${uid}/expenses`).push(expense).then((ref) => {
            console.log(ref.key);
            dispatch(addExpense({
               id: ref.key,
               ...expense
            }));
        });
    };
};

export const removeExpense = ({ id } = {}) => ({
    type: "REMOVE_EXPENSE",
    id
});

export const editExpense = (id, updates) => ({
    type: "EDIT_EXPENSE",
    id,
    updates
});

export const setExpenses = expenses => ({
    type: 'SET_EXPENSES',
    expenses
});

export const startSetExpenses = () => {
    return (dispatch, getState) => {
        const uid = getState().auth.uid;
        return database.ref(`users/${uid}/expenses`).once('value').then((snapshot) => {
            const expenses = [];

            snapshot.forEach(childSnapshot => { 
                expenses.push({
                   id: childSnapshot.key,
                   ...childSnapshot.val() 
                });
            });

            dispatch(setExpenses(expenses));
        });
    };
};

export const startRemoveExpense = ({ id } = {}) => {
    return (dispatch, getState) => { 
        const uid = getState().auth.uid;
        return database.ref(`users/${uid}/expenses/${id}`).remove().then(() => {
            dispatch(removeExpense({ id }));
        });
    };
};

export const startEditExpense = (id, updates) => {
    return (dispatch, getState) => {
        const uid = getState().auth.uid;
        return database.ref(`users/${uid}/expenses/${id}`).update(updates).then(() => {
            dispatch(editExpense(id, updates));
        });
    };
};