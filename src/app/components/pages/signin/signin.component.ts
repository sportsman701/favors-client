import { Component, OnInit, OnDestroy } from '@angular/core';
import { FormGroup, FormControl, Validators } from '@angular/forms';
import { Subscription } from 'rxjs';
import { Store } from '@ngrx/store';
import { Router } from '@angular/router';
import { AppState } from 'src/app/interfaces/app-state.interface';
import { PutService } from 'src/app/services/client/put.service';
import { USER_SIGNIN_ACTION } from 'src/app/store/actions/user.actions';

@Component({
  selector: 'app-signin',
  templateUrl: './signin.component.html',
  styleUrls: ['./signin.component.css']
})
export class SigninComponent implements OnInit, OnDestroy {
  signinForm = new FormGroup({
    'email': new FormControl(null, [Validators.required]),
    'password': new FormControl(null, [Validators.required]),
  });
  subscription: Subscription;
  error = false;
  errorMessage: string;

  constructor(
    private PUT: PutService,
    private store: Store<AppState>,
    private router: Router
  ) { }

  ngOnInit() {
  }

  onSubmit() {
    this.error = false;
    this.subscription = this.PUT.sign_in(this.signinForm.value).subscribe(resp => {
      this.errorMessage = resp['message'];
      if (resp['error']) {
        this.error = true;
        return;
      }
      this.store.dispatch(USER_SIGNIN_ACTION(resp.user));
      this.router.navigate(['/users', resp.user.id]);
    });
  }

  ngOnDestroy() {
    if (this.subscription) {
      this.subscription.unsubscribe();
    }
  }
}
