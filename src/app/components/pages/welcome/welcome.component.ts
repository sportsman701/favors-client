import { Component, OnInit } from '@angular/core';
import { AppState } from 'src/app/store/store';
import { Store } from '@ngrx/store';
import { Observable } from 'rxjs';
import { State as UserState } from 'src/app/store/actions/user.actions';

@Component({
  selector: 'app-welcome',
  templateUrl: './welcome.component.html',
  styleUrls: ['./welcome.component.css']
})
export class WelcomeComponent implements OnInit {
  user$: Observable<UserState>;

  constructor(
    private store: Store<AppState>
  ) { }

  ngOnInit() {}

}
