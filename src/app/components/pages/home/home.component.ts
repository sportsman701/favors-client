import { Component, OnInit } from '@angular/core';
import { Store } from '@ngrx/store';
import { Router } from '@angular/router';
import { AppState } from 'src/app/interfaces/app-state.interface';

@Component({
  selector: 'app-home',
  templateUrl: './home.component.html',
  styleUrls: ['./home.component.css']
})
export class HomeComponent implements OnInit {
  user: any;

  constructor(
    private store: Store<AppState>,
    private router: Router,
  ) { }

  ngOnInit() {
    this.store.subscribe(state => {
      this.user = state.user;
      console.log(this);
    });
  }

}
