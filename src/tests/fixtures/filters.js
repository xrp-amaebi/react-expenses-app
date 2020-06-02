import moment from 'moment';

const filters = {
    text: "",
    sortBy: 'date',
    endDate: undefined,
    startDate: undefined
};

const altFilters = {
    text: 'bills',
    sortBy: 'amount',
    startDate: moment(0),
    endDate: moment(0).add(3, 'days')
};

export { filters, altFilters }; 