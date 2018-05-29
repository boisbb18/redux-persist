const initialState = {
    email: '',
    password: '',
    count: 0
}

export default (state = initialState, action) => {
    let email;
    let password;
    let count;
    switch(action.type) {
        case 'SET_NAME':
        email = action.payload.email,
        password = action.payload.password;
        return {...state, email, password};
        break;
        case 'INCREMENT_COUNT': 
        count = state.count + 1;
        return {...state, count};
        break;
        case 'persist/REHYDRATE':
        console.log("State -----> ", state);
        console.log("Action.Payload ---> ", action.payload);
        return state;
        break;
        default:
        return state;
    }
}