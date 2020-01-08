import { Injectable } from '@angular/core';
import { HttpClient, } from '@angular/common/http';
import { ClientService } from './client.service';
import { map } from 'rxjs/operators';
import {
  USER_SIGNIN_ACTION
} from '../../store/actions/user.actions';
import { Store } from '@ngrx/store';
import { AppState } from '../../interfaces/app-state.interface';
import { UserModel } from 'src/app/models/user.model';
import { IUser } from 'src/app/interfaces/user.interface';

@Injectable({
  providedIn: 'root'
})
export class PutService extends ClientService {
  constructor(
    public http: HttpClient,
    private store: Store<AppState>,
  ) {
    super(http);
  }

  sign_in(data) {
    return this.sendRequest('/users', 'PUT', data, null).pipe(
      map((response: any) => {
        const action = USER_SIGNIN_ACTION(response.user);
        this.store.dispatch(action);
        return response;
      })
    );
  }
}
