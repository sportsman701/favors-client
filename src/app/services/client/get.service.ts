import { Injectable } from '@angular/core';
import { ClientService } from './client.service';
import { HttpClient, HttpHeaders } from '@angular/common/http';
import { map } from 'rxjs/operators';
import { Store, Action } from '@ngrx/store';
import { AppState } from '../../interfaces/app-state.interface';
import {
  USER_UPDATE_ACTION,
  USER_SIGNOUT_ACTION,
} from '../../store/actions/user.actions';
import { UserModel } from 'src/app/models/user.model';
import { IUser } from 'src/app/interfaces/user.interface';

@Injectable({
  providedIn: 'root'
})
export class GetService extends ClientService {

  constructor(
    public http: HttpClient,
    private store: Store<AppState>,
  ) {
    super(http);
  }

  checkSession() {
    return this.sendRequest('/check_session', 'GET', null, null).pipe(
      map((response: any) => {
        let action: Action;
        if (response.online) {
          action = USER_UPDATE_ACTION(response.user);
        } else {
          action = USER_SIGNOUT_ACTION();
        }

        this.store.dispatch(action);
        return response;
      })
    );
  }

  sign_out() {
    return this.sendRequest('/users/sign_out', 'GET', null, null).pipe(
      map((response: any) => {
        const action = USER_SIGNOUT_ACTION();
        this.store.dispatch(action);
        return response;
      })
    );
  }

  user_by_id(id) {
    return this.sendRequest(`/users/${id}`, 'GET', null, null).pipe(
      map((response: any) => {
        const newUserModel = new UserModel(<IUser> response.user);
        return { user: newUserModel };
      })
    );
  }
}
