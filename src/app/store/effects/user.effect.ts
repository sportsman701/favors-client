import { Injectable } from '@angular/core';
import { Actions, createEffect, ofType } from '@ngrx/effects';
import { map, mergeMap, catchError, exhaustMap } from 'rxjs/operators';
import { EMPTY, of } from 'rxjs';
import * as UserActions from '../actions/user.actions';
import { GetService } from '../../services/client/get.service';
import { PostService } from '../../services/client/post.service';
import { PutService } from '../../services/client/put.service';

@Injectable({
  providedIn: 'root'
})
export class UserEffects {

  constructor(
    private actions$: Actions,
    private GET: GetService,
    private POST: PostService,
    private PUT: PutService,
  ) {}

  login$ = createEffect(() => {
    return this.actions$.pipe<any, any>(
      ofType(UserActions.USER_SIGNIN),
      exhaustMap((action) => {
        return this.PUT.sign_in(action.data).pipe(
          map(user => {
            UserActions.USER_SIGNIN_ACTION(user);
          }),
          catchError(error => {
            return of(error);
          })
        );
      })
    );
  });
}
