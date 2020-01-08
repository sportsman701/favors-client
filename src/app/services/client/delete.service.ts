import { Injectable } from '@angular/core';
import { HttpClient, HttpHeaders } from '@angular/common/http';
import { ClientService } from './client.service';
import { Store } from '@ngrx/store';
import { AppState } from '../../interfaces/app-state.interface';

@Injectable({
  providedIn: 'root'
})
export class DeleteService extends ClientService {

  constructor(
    public http: HttpClient,
    private store: Store<AppState>,
  ) {
    super(http);
  }

}
