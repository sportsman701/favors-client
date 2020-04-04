import { Component, OnInit } from '@angular/core';
import { Store } from '@ngrx/store';
import { AppState } from '../../../interfaces/app-state.interface';
import { Router, ActivatedRoute } from '@angular/router';
import { GetService } from '../../../services/client/get.service';
import { IUserModel } from '../../../interfaces/user.interface';

@Component({
  selector: 'app-user',
  templateUrl: './user.component.html',
  styleUrls: ['./user.component.css']
})
export class UserPageComponent implements OnInit {
  you: IUserModel;
  user: IUserModel;

  get youAreUser(): boolean {
    return (
      !!this.you &&
      !!this.user &&
      this.user.id === this.you.id
    );
  }

  constructor(
    private store: Store<AppState>,
    private GET: GetService,
    private router: Router,
    private route: ActivatedRoute,
  ) { }

  ngOnInit() {
    this.store.subscribe(state => {
      this.you = state.user;
    });

    this.route.params.subscribe((params) => {
      const userId = parseInt(params.id, 10);
      this.getUser(userId);
    });
  }

  getUser(id: number) {
    this.GET.user_by_id(id).subscribe((response) => {
      this.user = response.user;
      console.log(this);
    });
  }
}
