import { Component, OnInit } from '@angular/core';
import { Store } from '@ngrx/store';
import { Observable } from 'rxjs';
import { Router } from '@angular/router';
import { AppState } from 'src/app/interfaces/app-state.interface';
import { GetService } from 'src/app/services/client/get.service';
import { USER_SIGNOUT_ACTION } from 'src/app/store/actions/user.actions';
import { IUserModel } from 'src/app/interfaces/user.interface';

@Component({
  selector: 'app-navbar',
  templateUrl: './navbar.component.html',
  styleUrls: ['./navbar.component.css']
})
export class NavbarComponent implements OnInit {
  user: IUserModel;

  constructor(
    private store: Store<AppState>,
    private GET: GetService,
    private router: Router,
  ) { }

  ngOnInit() {
    this.store.subscribe(state => {
      console.log(this, state);
      this.user = state.user;
    });
  }

  onSignout() {
    this.GET.sign_out().subscribe((response) => {
      this.router.navigate(['/']);
    });
  }
}
