import { Injectable } from '@angular/core';
import {
  CanActivate,
  ActivatedRouteSnapshot,
  RouterStateSnapshot,
  Router,
  CanActivateChild
} from '@angular/router';
import { map, flatMap } from 'rxjs/operators';
import { Store } from '@ngrx/store';
import { CanActivateReturn } from './_guard';
import { GetService } from '../services/client/get.service';
import { of } from 'rxjs';
import { AppState } from '../interfaces/app-state.interface';


@Injectable({
  providedIn: 'root'
})
export class SignedInGuard implements CanActivate, CanActivateChild {
  constructor(
    private GET: GetService,
    private router: Router,
    private store: Store<AppState>
  ) {}

  canActivateChild(
    route: ActivatedRouteSnapshot,
    state: RouterStateSnapshot,
  ): CanActivateReturn {
    return this.canActivate(route, state);
  }

  canActivate(
    route: ActivatedRouteSnapshot,
    state: RouterStateSnapshot,
  ): CanActivateReturn {
    return this.GET.checkUserSession().pipe(
      map((user) => {
        console.log({ user, route, state });
        return !!user;
      })
    );
  }
}
