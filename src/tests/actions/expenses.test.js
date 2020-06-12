import configureMockStore from 'redux-mock-store';
import thunk from 'redux-thunk';
import { addExpense, editExpense, removeExpense, startAddExpense } from '../../actions/expenses';
import expenses from '../fixtures/expenses';
import database from '../../firebase/firebase';


const createMockStore = configureMockStore([thunk]); 

test("should setup REMOVE expense action object", () => {
    const action = removeExpense({ id: '123abc' });
    expect(action).toEqual({
        type: "REMOVE_EXPENSE",
        id: "123abc"
    })
});

test("should setup EDIT expense action object", () => {
    const action = editExpense('id', {update: '123abc'});
    expect(action).toEqual({
        type: "EDIT_EXPENSE",
        id: "id",
        updates: {
            update: '123abc'
        }
    });
});

test('should setup ADD expense action object with provided value', () => {
    const action = addExpense(expenses[2]);
    expect(action).toEqual({
       type: "ADD_EXPENSE",
       expenses: expenses[2]
    });
});

test('should add expense to database and store', () => {
    const store = createMockStore({});
    const expenseData = { description: 'MouseEvent', amount: 3000, note: "This one bites", createdAt: 1000 };

    store.dispatch(startAddExpense(expenseData)).then(() => {
        const actions = store.getActions();
        expect(actions[0]).toEqual({
            type: "ADD_EXPENSE",
            expenses: {
                id: expect.any(String),
                ...expenseData
            }
        });

        return database.ref(`database/${actions[0].expense.id}`).once('value');
    }).then((snapshot) => {
        expect(snapshot.val()).toEqual(expenseData);
        done();
    });
});

test('should add expense with defaults to database and store', () => {
    const store = createMockStore({});
    const expenseDefaults = { description: '', amount: 0, note: "", createdAt: 0 }

    store.dispatch(startAddExpense({})).then(() => {
        const actions = store.getActions();
        expect(actions[0]).toEqual({
            type: "ADD_EXPENSE",
            expenses: {
                id: expect.any(String),
                ...expenseDefaults
            }
        });

        return database.ref(`database/${actions[0].expense.id}`).once('value');
    }).then((snapshot) => {
        expect(snapshot.val()).toEqual(expenseDefaults);
        done();
    });
});