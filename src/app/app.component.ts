import { ClientService } from './services/client.service';
import { Component, OnInit, OnDestroy } from '@angular/core';
import { Store } from '@ngrx/store';
import { AppState } from './store/store';
import { Router } from '@angular/router';
import { Subscription } from 'rxjs';
import { SetUserState, ClearUserState } from './store/actions/user.actions';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent implements OnInit, OnDestroy {
  title = 'myfavors-app';
  subscription: Subscription;

  constructor(
    private store: Store<AppState>,
    private router: Router,
    private clientService: ClientService
  ) {}

  ngOnInit() {
    this.subscription = this.clientService.checkSession().subscribe(resp => {
      // console.log(resp);
      if (!resp['online']) {
        this.store.dispatch(new ClearUserState());
      } else {
        this.store.dispatch(new SetUserState(resp['user']));
        this.router.navigate(['/home']);
      }
    });
  }

  ngOnDestroy() {}
}
