import { ClientService } from './../../../services/client.service';
import { Component, OnInit, OnDestroy } from '@angular/core';
import { FormGroup, FormControl, Validators } from '@angular/forms';
import { Subscription } from 'rxjs';
import { Store } from '@ngrx/store';
import { AppState } from 'src/app/store/store';
import { Router } from '@angular/router';
import { SetUserState } from 'src/app/store/actions/user.actions';

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
    private clientService: ClientService,
    private store: Store<AppState>,
    private router: Router
  ) { }

  ngOnInit() {
  }

  onSubmit() {
    this.error = false;
    this.subscription = this.clientService.sign_in(this.signinForm.value).subscribe(resp => {
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
