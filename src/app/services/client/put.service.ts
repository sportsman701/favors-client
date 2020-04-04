import { Injectable } from '@angular/core';
import { HttpClient, } from '@angular/common/http';
import { ClientService } from './client.service';
import { map } from 'rxjs/operators';
import {
  USER_SIGNIN_ACTION
} from '../../store/actions/user.actions';
import { Store } from '@ngrx/store';
import { AppState } from '../../interfaces/app-state.interface';
import {
  SignInResponse,
  PutUserProfileSettingsResponse,
  PutUserProfileIconResponse,
  PutUserPasswordResponse,
} from '../../interfaces/responses.interface';
import { Observable } from 'rxjs';

@Injectable({
  providedIn: 'root'
})
export class PutService extends ClientService {
  private method: 'PUT' = 'PUT';

  constructor(
    public http: HttpClient,
    private store: Store<AppState>,
  ) {
    super(http);
  }

  sign_in(data): Observable<SignInResponse> {
    return this.sendRequest<SignInResponse>('/users', this.method, data).pipe(
      map((response) => {
        const action = USER_SIGNIN_ACTION(response.user);
        this.store.dispatch(action);
        return response;
      })
    );
  }

  update_profile_settings(data, id): Observable<PutUserProfileSettingsResponse> {
    const endpoint = '/users/' + id + '/settings';
    return this.sendRequest<PutUserProfileSettingsResponse>(endpoint, this.method, data).pipe(
      map((response) => {
        this.store.dispatch(USER_SIGNIN_ACTION(response.user));
        return response;
      })
    );
  }

  update_profile_icon(formData, id): Observable<PutUserProfileIconResponse> {
    const endpoint = '/users/' + id + '/icon';
    return this.sendRequest<PutUserProfileIconResponse>(endpoint, this.method, formData).pipe(
      map((response) => {
        this.store.dispatch(USER_SIGNIN_ACTION(response.user));
        return response;
      })
    );
  }

  update_profile_password(data, id): Observable<PutUserPasswordResponse> {
    const endpoint = '/users/' + id + '/password';
    return this.sendRequest<PutUserPasswordResponse>(endpoint, this.method, data).pipe(
      map((response) => {
        return response;
      })
    );
  }
}
