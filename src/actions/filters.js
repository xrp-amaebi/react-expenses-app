export const setTextFilter = (text = " ") => ({
    type: "SET_TEXT",
    text
});

export const setStartDate = (startdate) => ({
    type: "SET_START_DATE",
    startdate
});

export const setEndDate = (enddate) => ({
    type: "SET_END_DATE",
    enddate
});

export const sortByAmount = () => ({
    type: "SORT_AMOUNT",
    
});

export const sortByDate = () => ({
    type: "SORT_DATE",
});
