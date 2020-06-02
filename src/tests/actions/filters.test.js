import moment from 'moment';
import { setTextFilter, setEndDate, setStartDate, sortByAmount, sortByDate } from '../../actions/filters';


test("should generate set START_DATE action object with provided DATE", () => {
    const action = setStartDate(moment(0));
    expect(action).toEqual({
        type: "SET_START_DATE",
        startdate: moment(0)
    });
});

test("should generate set END_DATE action object", () => {
    const action = setEndDate(moment(1000));
    expect(action).toEqual({
        type: "SET_END_DATE",
        enddate: moment(1000)
    });
});

test("should set TEXT_FILTER action object with ARGUMENT", () => {
    const action = setTextFilter('args');
    expect(action).toEqual({
        type: "SET_TEXT",
        text: "args"
    });
});

test("should set TEXT_FILTER action object without ARGUMENT", () => {
    const action = setTextFilter();
    expect(action).toEqual({
        type: "SET_TEXT",
        text: " "
    });
});

test("should generate SORT_BY_AMOUNT action generator", () => {
    const action = sortByAmount();
    expect(action).toEqual({
        type: "SORT_AMOUNT"
    });
});

test("should generate SORT_BY_DATE action generator", () => {
    const action = sortByDate();
    expect(action).toEqual({
        type: "SORT_DATE"
    });
});