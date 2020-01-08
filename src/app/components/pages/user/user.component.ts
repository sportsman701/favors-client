import { Component, OnInit } from '@angular/core';
import { Store } from '@ngrx/store';
import { AppState } from 'src/app/interfaces/app-state.interface';
import { Router, ActivatedRoute } from '@angular/router';
import { UserModel } from 'src/app/models/user.model';
import { GetService } from 'src/app/services/client/get.service';

@Component({
  selector: 'app-user',
  templateUrl: './user.component.html',
  styleUrls: ['./user.component.css']
})
export class UserPageComponent implements OnInit {
  you: UserModel;
  user: UserModel;

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
