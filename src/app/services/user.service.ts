import { Injectable } from '@angular/core';
// import { GetService } from './client/get.service';
// import { PostService } from './client/post.service';
// import { PutService } from './client/put.service';
// import { DeleteService } from './client/delete.service';
import { IUser } from '../interfaces/user.interface';
import { ClientService } from './client/client.service';
import { map } from 'rxjs/operators';
import { USER_UPDATE_ACTION } from '../store/actions/user.actions';
import { Store } from '@ngrx/store';
import { AppState } from '../interfaces/app-state.interface';
import { UserModel } from '../models/user.model';

@Injectable()
export class UserService {
  constructor(
    public client: ClientService,
    private store: Store<AppState>,
  ) {}

  updateProfile(user: IUser, requestData: object | FormData) {
    const requestObs = this.client.sendRequest(
      `/users/${user.id}`,
      'PUT',
      requestData,
      null
    );

    return requestObs.pipe(
      map((response: any) => {
        const newUserModel = new UserModel(<IUser> response.user);
        const action = USER_UPDATE_ACTION(newUserModel);
        this.store.dispatch(action);
        return newUserModel;
      })
    );
  }

  checkFollow(userA: UserModel, userB: UserModel) {

  }
}
