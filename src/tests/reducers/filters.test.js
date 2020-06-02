import moment from 'moment';
import filtersReducer from '../../reducers/filters';

test('should setup default filter values', () => {
    const state = filtersReducer( undefined, { type:' @@INIT' });
    expect(state).toEqual({
        text: '',
        sortBy: "date",
        startDate: moment().startOf('month'),
        endDate: moment().endOf('month')
    });
});

test("should set sortBy to amount", () => {
    const state = filtersReducer(undefined, { type: 'SORT_AMOUNT' });
    expect(state.sortBy).toBe('amount');
});

test('should set SortBy to date', () => {
    const currentState = {
        text: '',
        startDate: undefined,
        endDate: undefined,
        sortBy: 'amount'
    };

    const action =  {type: "SORT_DATE"};

    const state = filtersReducer(currentState, action);
    expect(state.sortBy).toBe('date');
});

test('should set text filter', () => {
    const text = "THIS"
    const action =  { type: "SET_TEXT", text }
    const state = filtersReducer(undefined, action);
    expect(state.text).toBe(text);
});

test('should set startDate filter', () => {
    const startdate = moment();
    const action = {
        type: "SET_START_DATE",
        startdate
    };

    const state = filtersReducer(undefined, action);
    expect(state.startDate).toEqual(startdate);
});

test('should set endDate filter', () => {
    const enddate = moment();
    const action = {
        type: "SET_END_DATE",
        enddate
    };

    const state = filtersReducer(undefined, action);
    expect(state.endDate).toEqual(enddate);
});