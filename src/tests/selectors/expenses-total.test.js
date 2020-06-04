import selectExpensesTotal from '../../selectors/expenses-total';
import expenses from '../fixtures/expenses';

test('should return 0 if no expenses', () => {
    const result = 0;
    expect(selectExpensesTotal([])).toBe(result);
});

test('should correctly add up a single expense', () => {
    const result = 109500;
    expect(selectExpensesTotal([expenses[1]])).toBe(result);
});

test('should correctly add up multiple expenses', () => {
    const result = 114195;
    expect(selectExpensesTotal(expenses)).toBe(result);
});