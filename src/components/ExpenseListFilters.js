import React from 'react';
import { connect } from 'react-redux';
import { setTextFilter, sortByAmount, sortByDate, setStartDate, setEndDate } from '../actions/filters';
import { DateRangePicker } from 'react-dates';


export class ExpenseListFilters extends React.Component {
    state = {
        focused: null
    }

    onDatesChange = ({startDate, endDate}) => {
        this.props.setStartDate(startDate);
        this.props.setEndDate(endDate);
    };

    onFocusChange = focused => {
        this.setState(() => ({ focused }));
    };

    onSortChange = e => { 
        if (e.target.value === 'amount') {
            this.props.sortByAmount();
        } else if(e.target.value === 'date' ) {
            this.props.sortByDate();
        }
    }

    onTextChange = e => this.props.setTextFilter(e.target.value);

    render() {
        return ( 
            <div className={'content-container'}>
                <div className={'input-group'}>
                    <div className={'input-group__item'}>
                        <input
                            className={'text-input'}
                            onChange={this.onTextChange}
                            placeholder={'search expenses'}
                            type={"text"}
                            value={this.props.filters.text}
                        />
                    </div>
                    <div className={'input-group__item'}>
                        <select
                            className={'select'}
                            value={this.props.filters.sortBy}
                            onChange={this.onSortChange}
                        >
                            <option value="date">{'Date'}</option>
                            <option value="amount">{'Amount'}</option>
                        </select>
                    </div>
                    <div className={'input-group__item'}>
                        <DateRangePicker
                            startDate={this.props.filters.startDate}
                            endDate={this.props.filters.endDate}
                            onDatesChange={this.onDatesChange}
                            focusedInput={this.state.focused}
                            onFocusChange={this.onFocusChange}
                            showClearDates={true}
                            numberOfMonths={1}
                            isOutsideRange={() => false}
                        />
                    </div>
                </div>
            </div> 
        );
    }
};

const mapStateToProps = (state) => ({
    filters: state.filters
});

const mapDispatchToProps = (dispatch, props) => ({
    setTextFilter: (target) => dispatch(setTextFilter(target)),
    sortByAmount: () => dispatch(sortByAmount()),
    sortByDate: () => dispatch(sortByDate()),
    setStartDate: (startdate) => dispatch(setStartDate(startdate)),
    setEndDate: (enddate) => dispatch(setEndDate(enddate))
});

export default connect(mapStateToProps, mapDispatchToProps)(ExpenseListFilters); 