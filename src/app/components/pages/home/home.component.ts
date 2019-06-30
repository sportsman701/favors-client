import { Component, OnInit } from '@angular/core';
import { Store } from '@ngrx/store';
import { AppState } from 'src/app/store/store';
import { Router } from '@angular/router';
import { ClientService } from 'src/app/services/client.service';
import { State as UserState } from 'src/app/store/actions/user.actions';

@Component({
  selector: 'app-home',
  templateUrl: './home.component.html',
  styleUrls: ['./home.component.css']
})
export class HomeComponent implements OnInit {

  user: UserState;

  constructor(
    private store: Store<AppState>,
    private router: Router,
    private clientService: ClientService,
  ) { }

  ngOnInit() {
    this.store.subscribe(state => {
      this.user = state.user;
      console.log(this);
    });
  }

}
