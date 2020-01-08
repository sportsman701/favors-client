import { createAction, props } from '@ngrx/store';



export const USER_SIGNIN = '[SigninPageComponent] USER_SIGNIN';
export const USER_SIGNIN_ACTION = createAction(USER_SIGNIN, props<{ [key: string]: any }>());

export const USER_SIGNUP = '[SignupPageComponent] USER_SIGNUP';
export const USER_SIGNUP_ACTION = createAction(USER_SIGNUP, props<{ [key: string]: any }>());

export const USER_SIGNOUT = '[NavbarComponent] USER_SIGNOUT';
export const USER_SIGNOUT_ACTION = createAction(USER_SIGNOUT);

export const USER_UPDATE = '[UserSettingsComponent] USER_UPDATE';
export const USER_UPDATE_ACTION = createAction(USER_UPDATE, props<{ [key: string]: any }>());
