import { addExpense, editExpense, removeExpense } from '../../actions/expenses';

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
    const expenseData = {
        description: "Rent",
        amount: 109500,
        createdAt: 1000,
        note: "This was last  month's rent"
    };
    const action = addExpense(expenseData);
    expect(action).toEqual({
       type: "ADD_EXPENSE",
       expenses: {
           ...expenseData,
           id: expect.any(String)
       } 
    });
});

test('should setup ADD expense action object with DEFAULT values', () => {
    const action = addExpense();
    expect(action).toEqual({
        type: "ADD_EXPENSE",
        expenses: {
            description: '', 
            note: '', 
            amount: 0,
            createdAt: 0,
            id: expect.any(String)
        }
    });
});