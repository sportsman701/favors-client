import { userReducer } from './reducers/user.reducer';
import { UserEffects } from './effects/user.effect';


export const AppStoreObj = {
  user: userReducer
};

export const AppEffectsList = [
  UserEffects
];
