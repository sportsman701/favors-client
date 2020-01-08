import { ClientService } from './../../services/client/client.service';
import { Injectable } from '@angular/core';
import {
    CanActivate,
    ActivatedRouteSnapshot,
    RouterStateSnapshot,
    Router
} from '@angular/router';
import { Observable } from 'rxjs';
import { map } from 'rxjs/operators';
import { Store } from '@ngrx/store';
import { AppState } from '../../interfaces/app-state.interface';
import { getRouteParamKey } from 'src/app/vault/utils';


@Injectable()
export class UserAuthGuard implements CanActivate {
  constructor(
    private clientService: ClientService,
    private router: Router,
    private store: Store<AppState>
  ) {}

  canActivate(
    route: ActivatedRouteSnapshot,
    state: RouterStateSnapshot,
  ): Observable<boolean> | Promise<boolean> | boolean {
    return this.store.select('user').pipe(map(you => {
      const isSignedIn = !!you;
      if (!isSignedIn) { return false; }
      const id = getRouteParamKey('id', route, true);
      const userId = parseInt(id, 10);
      const youAreUser = userId === you.id;
      // console.log({guardClass: this, route, state, you, isSignedIn, youAreUser, userId});
      return youAreUser;
    }));
  }

  getParamKey(key: string, route: ActivatedRouteSnapshot, recursiveParent: boolean = false) {

  }
}
