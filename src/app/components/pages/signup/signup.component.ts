import { Component, OnInit } from '@angular/core';
import { FormGroup, FormControl, Validators } from '@angular/forms';
import { Store } from '@ngrx/store';
import { Router } from '@angular/router';
import { AppState } from 'src/app/interfaces/app-state.interface';
import { PostService } from 'src/app/services/client/post.service';
import { USER_SIGNUP_ACTION } from 'src/app/store/actions/user.actions';

@Component({
  selector: 'app-signup',
  templateUrl: './signup.component.html',
  styleUrls: ['./signup.component.css']
})
export class SignupComponent implements OnInit {
  signupForm = new FormGroup({
    'displayname': new FormControl(null, [Validators.required]),
    'username': new FormControl(null, [Validators.required]),
    'email': new FormControl(null, [Validators.required]),
    'password': new FormControl(null, [Validators.required]),
    'confirmPassword': new FormControl(null, [Validators.required]),
  });

  error = false;
  errorMessage: string;

  constructor(
    private POST: PostService,
    private store: Store<AppState>,
    private router: Router
  ) { }

  ngOnInit() {
  }

  onSubmit() {
    this.error = false;
    this.POST.sign_up(this.signupForm.value).subscribe(resp => {
      console.log(resp);
      this.errorMessage = resp['message'];
      if (resp['error']) {
        this.error = true;
        return;
      }
      this.store.dispatch(USER_SIGNUP_ACTION(resp.user));
      this.router.navigate(['/users', resp.user.id]);
    });
  }
}
