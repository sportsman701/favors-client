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


@Injectable()
export class SignedInGuard implements CanActivate {
    constructor(
      private clientService: ClientService,
      private router: Router,
      private store: Store<AppState>
    ) {}

    canActivate(
      route: ActivatedRouteSnapshot,
      state: RouterStateSnapshot,
    ): Observable<boolean> | Promise<boolean> | boolean {
      return this.store.select('user').pipe(map(user => {
        const isSignedIn = !!user;
        if (!isSignedIn) {
          this.router.navigate(['/signin']);
        }
        return isSignedIn;
      }));
    }
}
