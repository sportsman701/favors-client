import { ClientService } from './../../../services/client.service';
import { Component, OnInit, OnDestroy } from '@angular/core';
import { FormGroup, FormControl, Validators } from '@angular/forms';
import { Subscription } from 'rxjs';
import { Store } from '@ngrx/store';
import { AppState } from 'src/app/store/store';
import { SetUserState } from 'src/app/store/actions/user.actions';
import { Router } from '@angular/router';

@Component({
  selector: 'app-signup',
  templateUrl: './signup.component.html',
  styleUrls: ['./signup.component.css']
})
export class SignupComponent implements OnInit, OnDestroy {
  signupForm = new FormGroup({
    'displayname': new FormControl(null, [Validators.required]),
    'username': new FormControl(null, [Validators.required]),
    'email': new FormControl(null, [Validators.required]),
    'password': new FormControl(null, [Validators.required]),
    'confirmPassword': new FormControl(null, [Validators.required]),
  });
  subscription: Subscription;
  error = false;
  errorMessage: string;

  constructor(
    private clientService: ClientService,
    private store: Store<AppState>,
    private router: Router
  ) { }

  ngOnInit() {
  }

  onSubmit() {
    this.error = false;
    this.subscription = this.clientService.sign_up(this.signupForm.value).subscribe(resp => {
      console.log(resp);
      this.errorMessage = resp['message'];
      if (resp['error']) {
        this.error = true;
        return;
      }
      this.store.dispatch(new SetUserState(resp['user']));
      window.localStorage.setItem('myfavors-token', resp['token']);
      this.router.navigate(['/home']);
    });
  }

  ngOnDestroy() {
    if (this.subscription) {
      this.subscription.unsubscribe();
    }
  }
}
