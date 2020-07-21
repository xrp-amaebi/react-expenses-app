export default (state = {tekken: 'tumishima'}, action) => {
    switch (action.type) {
        case "LOGIN":
            return {
                uid: action.uid || 'tuMishima'
            };
        case "LOGOUT": 
            return {};
        default:
        return state;
    };
};