import { ClearUserState } from './../../store/actions/user.actions';
import { AppState } from './../../store/store';
import { Component, OnInit } from '@angular/core';
import { Store } from '@ngrx/store';
import { Observable } from 'rxjs';
import { State as UserState } from 'src/app/store/actions/user.actions';
import { Router } from '@angular/router';
import { ClientService } from 'src/app/services/client.service';

@Component({
  selector: 'app-navbar',
  templateUrl: './navbar.component.html',
  styleUrls: ['./navbar.component.css']
})
export class NavbarComponent implements OnInit {
  user$: Observable<UserState>;

  constructor(
    private store: Store<AppState>,
    private router: Router,
    private clientService: ClientService,
  ) { }

  ngOnInit() {
    this.user$ = this.store.select('user');
    this.store.subscribe(state => {

    });
  }

  onSignout() {
    const subscription = this.clientService.sign_out().subscribe(resp => {
      this.store.dispatch(new ClearUserState());
      localStorage.removeItem('myfavors-token');
      this.router.navigate(['/welcome']);
    });
  }
}
