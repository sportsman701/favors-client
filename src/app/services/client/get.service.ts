import { Injectable } from '@angular/core';
import { ClientService } from './client.service';
import { HttpClient, HttpHeaders } from '@angular/common/http';
import { map, flatMap } from 'rxjs/operators';
import { Store, Action } from '@ngrx/store';
import { AppState } from '../../interfaces/app-state.interface';
import {
  USER_UPDATE_ACTION,
  USER_SIGNOUT_ACTION,
} from '../../store/actions/user.actions';
import { IUserModel } from '../../interfaces/user.interface';
import { Observable, of } from 'rxjs';
import {
  SessionResponse,
  GetUserNotificationsResponse,
  MessageResponse,
} from 'src/app/interfaces/responses.interface';

@Injectable({
  providedIn: 'root'
})
export class GetService extends ClientService {
  private sessionChecked = false;
  private session: SessionResponse;
  private method: 'GET' = 'GET';
  defaultIconUrl: string;
  welcomeWallpaper: string;

  constructor(
    public http: HttpClient,
    private store: Store<AppState>,
  ) {
    super(http);
    this.defaultIconUrl = this.DOMAIN + '/_static/img/anon.png';
    this.welcomeWallpaper = this.DOMAIN + '/_static/img/city-wallpaper-1.jpg';
  }

  getSessionChecked(): boolean {
    return this.sessionChecked;
  }

  checkUserSession(): Observable<IUserModel> {
    return this.store.select('you').pipe(
      flatMap((you: IUserModel) => {
        return !!you
          ? of(you)
          : this.checkSession().pipe(
              map((response: SessionResponse) => {
                return response.user || null;
              })
            );
      })
    );
  }

  private checkSession() {
    const endpoint = '/users/check-session';
    return this.sendRequest<SessionResponse>(endpoint, this.method, null).pipe(
      map((response: SessionResponse) => {
        this.session = response;
        if (response.online) {
          const action = USER_UPDATE_ACTION(response.user);
          this.store.dispatch(action);
          this.sessionChecked = true;
        }
        return response;
      })
    );
  }

  sign_out() {
    return this.sendRequest('/users/sign_out', this.method, null, null).pipe(
      map((response: any) => {
        const action = USER_SIGNOUT_ACTION();
        this.store.dispatch(action);
        return response;
      })
    );
  }

  user_by_id(id) {
    const endpoint = '/users/' + id;
    return this.sendRequest<{ user: IUserModel }>(endpoint, this.method).pipe(
      map((response) => {
        return response;
      })
    );
  }

  user_notifications(id, minId): Observable<GetUserNotificationsResponse> {
    const endpoint = minId
      ? '/users/' + id + '/notifications/' + minId
      : '/users/' + id + '/notifications';
    return this.sendRequest<GetUserNotificationsResponse>(endpoint, this.method).pipe(
      map((response) => {
        return response;
      })
    );
  }

  verify_account(code): Observable<MessageResponse> {
    const endpoint = '/verify-account/' + code;
    return this.sendRequest<MessageResponse>(endpoint, this.method).pipe(
      map((response) => {
        return response;
      })
    );
  }
}
