import { ClientService } from './../../services/client.service';
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
import { AppState } from 'src/app/store/store';


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
        return this.store.select('user').pipe(map(data => {
            return !!data;
        }));
    }
}
