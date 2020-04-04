import { IUserModel } from './user.interface';
import { NotificationModel } from './notification.interface';

/** Common Response */

export interface MessageResponse {
  message: string;
}

export interface SignOutResponse {
  online: boolean;
  successful: boolean;
  message: string;
}

export interface ErrorResponse {
  error: boolean;
  message: string;
  [key: string]: any;
}

export interface SessionResponse {
  online: boolean;
  session_id?: string;
  user?: IUserModel;
}

/** GET Responses */

export interface GetUserNotificationsResponse {
  notifications: NotificationModel[];
}

/** POST Responses */

export interface SignUpResponse {
  online: boolean;
  user: IUserModel;
  message: string;
  token: string;
  session_id: string;
}

/** PUT Responses */

export interface SignInResponse {
  online: boolean;
  user: IUserModel;
  message: string;
  token: string;
  session_id: string;
}

export interface PutUserProfileSettingsResponse {
  user: IUserModel;
  message: string;
}

export interface PutUserProfileIconResponse {
  user: IUserModel;
  message: string;
}

export interface PutUserProfileSettingsResponse {
  user: IUserModel;
  message: string;
}

export interface PutUserProfileIconResponse {
  user: IUserModel;
  message: string;
}

export interface PutUserPasswordResponse {
  updates: number[];
  message: string;
}