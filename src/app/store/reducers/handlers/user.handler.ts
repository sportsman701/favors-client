import { IUser } from 'src/app/interfaces/user.interface';
import { UserModel } from 'src/app/models/user.model';

export function set_user_state(state, action) {
  const userObj: IUser = action.user || action;
  return !!userObj.id && (new UserModel(userObj)) || null;
}

export function clear_user_state(state, action) {
  return null;
}
