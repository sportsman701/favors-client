import { Component, OnInit, OnDestroy } from '@angular/core';
import { Store } from '@ngrx/store';
import { Router } from '@angular/router';
import { AppState } from './interfaces/app-state.interface';
import { GetService } from './services/client/get.service';
import { USER_SIGNOUT_ACTION, USER_UPDATE_ACTION } from './store/actions/user.actions';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent implements OnInit, OnDestroy {
  title = 'myfavors-app';

  constructor(
    private store: Store<AppState>,
    private router: Router,
    private GET: GetService,
  ) {}

  ngOnInit() {
  }

  ngOnDestroy() {}
}
