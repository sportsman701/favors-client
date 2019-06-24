import { HttpClient, HttpHeaders } from '@angular/common/http';
import { Injectable } from '@angular/core';

@Injectable()
export class ClientService {
    API_PREFIX = 'http://localhost:6700/api';

    constructor(
        private http: HttpClient
    ) {}

    // GET
    checkSession() {
        const httpOptions = {
            headers: new HttpHeaders({
              'Content-Type':  'application/json',
              'Authorization': window.localStorage.getItem('myfavors-token')
            })
        };
        return this.http.get(this.API_PREFIX + '/check_session', httpOptions);
    }

    // POST
    sign_up(data) {
        const httpOptions = {
            headers: new HttpHeaders({
              'Content-Type':  'application/json'
            })
        };
        return this.http.post(this.API_PREFIX + '/sign_up', data, httpOptions);
    }

    // PUT
    sign_in(data) {
        const httpOptions = {
            headers: new HttpHeaders({
              'Content-Type':  'application/json'
            })
        };
        return this.http.put(this.API_PREFIX + '/sign_in', data, httpOptions);
    }
}
