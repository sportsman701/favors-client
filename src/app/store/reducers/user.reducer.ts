
import { Action, createReducer, on } from '@ngrx/store';
import * as UserActions from '../actions/user.actions';
import * as UserHandlers from './handlers/user.handler';

const _userReducer = createReducer(null,
  on(UserActions.USER_SIGNIN_ACTION, UserHandlers.set_user_state),
  on(UserActions.USER_SIGNUP_ACTION, UserHandlers.set_user_state),
  on(UserActions.USER_UPDATE_ACTION, UserHandlers.set_user_state),
  on(UserActions.USER_SIGNOUT_ACTION, UserHandlers.clear_user_state),
);

export function userReducer(state, action: Action) {
  return _userReducer(state, action);
}
