import configureMockStore from 'redux-mock-store';
import thunk from 'redux-thunk';
import { 
    addExpense, 
    editExpense,
    startEditExpense,
    removeExpense, 
    startAddExpense, 
    setExpenses, 
    startSetExpenses, 
    startRemoveExpense 
} from '../../actions/expenses';
import expenses from '../fixtures/expenses';
import database from '../../firebase/firebase';


const uid = 'thisistestuid';
const defaultAuthState = { auth: { uid } };
const createMockStore = configureMockStore([thunk]); 

beforeEach(() => {
    const expensesData = {};
    expenses.forEach(({ id, description, note, amount, createdAt }) => {
        expensesData[id] = { description, note, amount, createdAt };
    });

    database.ref(`users/${uid}/expenses`).set(expensesData).then(() => console.log('poop'));
});

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

test('should EDIT expense from FIREBASE', () => {
    const store = createMockStore(defaultAuthState);
    const id = expenses[0].id;
    const updates = { amount: 21045 };
    store.dispatch(startEditExpense(id, updates)).then(() => {
        const actions = store.getActions();
        expect(actions[0]).toEqual({
            type: "EDIT_EXPENSE",
            id, 
            updates
        });
        return database.ref(`users/${uid}/expenses/${id}`).once('value');  
    }).then(() => {
        expect(snapshot.val().amount).toBe(updates.amount);
        done();
    });
});

test('should remove expense from firebase', () => {
    const store = createMockStore(defaultAuthState);
    const id = expenses[2].id;

    store.dispatch(startRemoveExpense({ id })).then(() => {
        const actions = store.getActions();
        expect(actions[0].toEqual({
            type: 'REMOVE_EXPENSE',
            id
        }));
        return database.ref(`users/${uid}/expenses/${id}`).once('value');
    }).then((snapshot) => {
        expect(snapshot.val()).toBeFalsy();
        done();
    });
});

test('should setup ADD expense action object with provided values', () => {
    const action = addExpense(expenses[2]);
    expect(action).toEqual({
       type: "ADD_EXPENSE",
       expenses: expenses[2]
    });
});

test('should add expense to database and store', () => {
    const store = createMockStore(defaultAuthState);
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

        return database.ref(`users/${uid}/expenses/${actions[0].expense.id}`).once('value');
    }).then((snapshot) => {
        expect(snapshot.val()).toEqual(expenseData);
        done();
    });
});

test('should add expense with defaults to database and store', () => {
    const store = createMockStore(defaultAuthState);
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

        return database.ref(`users/${uid}/expenses/${actions[0].expense.id}`).once('value');
    }).then((snapshot) => {
        expect(snapshot.val()).toEqual(expenseDefaults);
        done();
    });
});

test('should setup set expense action object with data', () => {
    const action = setExpenses(expenses);
    expect(action).toEqual({
        type: 'SET_EXPENSES',
        expenses
    });
});

test('should fetch expenses from firebase', (done) => {
    const store = createMockStore(defaultAuthState);
    store.dispatch(startSetExpenses()).then(() => {
        const actions = store.getActions();
        expect(actions[0]).toEqual({
            type: "SET_EXPENSES",
            expenses
        });
        done();
    });
});