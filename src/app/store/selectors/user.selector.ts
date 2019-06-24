import { createSelector } from '@ngrx/store';
import { State as UserState } from '../actions/user.actions';



export interface AppState {
    user: UserState;
}

export const selectUser = (state: AppState) => state.user;
