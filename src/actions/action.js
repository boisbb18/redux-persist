const SET_NAME = 'SET_NAME';
const INCREMENT_COUNT = 'INCREMENT_COUNT';

export const addName = (data) => ({
    type: SET_NAME,
    payload: data
});

export const increment = () => ({ 
    type: INCREMENT_COUNT
})