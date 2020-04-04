import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { ClientService } from './client.service';
import { map } from 'rxjs/operators';
import {
  USER_SIGNUP_ACTION
} from '../../store/actions/user.actions';
import { Store } from '@ngrx/store';
import { AppState } from '../../interfaces/app-state.interface';
import { SignUpResponse } from '../../interfaces/responses.interface';
import { Observable } from 'rxjs';

@Injectable({
  providedIn: 'root'
})
export class PostService extends ClientService {
  private method: 'POST' = 'POST';

  constructor(
    public http: HttpClient,
    private store: Store<AppState>,
  ) {
    super(http);
  }

  sign_up(data): Observable<SignUpResponse> {
    return this.sendRequest<SignUpResponse>('/users', this.method, data).pipe(
      map((response) => {
        const action = USER_SIGNUP_ACTION(response.user);
        this.store.dispatch(action);
        return response;
      })
    );
  }
}
