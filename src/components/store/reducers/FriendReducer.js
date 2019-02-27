import { ADD_FRIEND } from '../../actions/types';

const initialState = {
    current: [],
    possible: [
        'Amanda',
        'Igor',
        'Excelencia'
    ]
}

export default friendReducer = (state = initialState, action ) => {
    switch(action.type) {
        case ADD_FRIEND:
            // Pulls current and possible out of previous state
            // We do not want to alter state directly in case
            // another action is altering it at the same time
            const { current, possible } = state

            // Pull friend out of friends.possible
            // Note that action.payload === friendIndex
            const addedFriend = possible.splice(action.payload, 1);

            //And put friend in friends.current
            current.push(addedFriend);

            //Finaly, update our redux state
            const newState = {current, possible};
            return newState;
        default:
            return state;
    }
};
