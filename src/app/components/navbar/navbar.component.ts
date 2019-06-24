import { ClearUserState } from './../../store/actions/user.actions';
import { AppState } from './../../store/store';
import { Component, OnInit } from '@angular/core';
import { Store } from '@ngrx/store';
import { Observable } from 'rxjs';
import { State as UserState } from 'src/app/store/actions/user.actions';
import { Router } from '@angular/router';

@Component({
  selector: 'app-navbar',
  templateUrl: './navbar.component.html',
  styleUrls: ['./navbar.component.css']
})
export class NavbarComponent implements OnInit {
  user$: Observable<UserState>;

  constructor(
    private store: Store<AppState>,
    private router: Router
  ) { }

  ngOnInit() {
    this.user$ = this.store.select('user');
    this.store.subscribe(state => {

    });
  }

  onSignout() {
    this.store.dispatch(new ClearUserState());
    localStorage.removeItem('myfavors-token');
    this.router.navigate(['/welcome']);
  }
}
