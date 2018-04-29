const home = (state = '', action) => {
    switch (action.type) {
        case 'CHANGE_TEXT':
            return action.text;
        default:
            return state;
    }

};

export default home;