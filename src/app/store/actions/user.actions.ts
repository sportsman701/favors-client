import { Action } from '@ngrx/store';

export enum ActionTypes {
    SET_USER_STATE = 'SET_USER_STATE',
    CLEAR_USER_STATE = 'CLEAR_USER_STATE'
}

export interface State {
    id?: number;
}

export class SetUserState implements Action {
  readonly type = ActionTypes.SET_USER_STATE;
  constructor(public payload: State | {}) {}
}

export class ClearUserState implements Action {
  readonly type = ActionTypes.CLEAR_USER_STATE;
}

export type ActionsUnion = SetUserState | ClearUserState;
