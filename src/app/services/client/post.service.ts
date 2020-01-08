import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { ClientService } from './client.service';
import { map } from 'rxjs/operators';
import {
  USER_SIGNUP_ACTION
} from '../../store/actions/user.actions';
import { Store } from '@ngrx/store';
import { AppState } from '../../interfaces/app-state.interface';

@Injectable({
  providedIn: 'root'
})
export class PostService extends ClientService {
  constructor(
    public http: HttpClient,
    private store: Store<AppState>,
  ) {
    super(http);
  }

  sign_up(data) {
    return this.sendRequest('/users', 'POST', data, null).pipe(
      map((response: any) => {
        const action = USER_SIGNUP_ACTION(response.user);
        this.store.dispatch(action);
        return response;
      })
    );
  }
}
