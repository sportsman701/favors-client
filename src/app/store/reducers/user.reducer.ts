import {
    ActionTypes,
    State,
    ActionsUnion
} from '../actions/user.actions';


export const initialState: State = null;

export function userReducer(state = initialState, action: ActionsUnion): State {
    switch (action.type) {
        case ActionTypes.SET_USER_STATE:
            return action.payload;

        case ActionTypes.CLEAR_USER_STATE:
            return null;

        default:
            return state;
    }
}
