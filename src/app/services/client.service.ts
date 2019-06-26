import { HttpClient, HttpHeaders } from '@angular/common/http';
import { Injectable } from '@angular/core';

@Injectable()
export class ClientService {
    API_PREFIX: string;

    constructor(
        private http: HttpClient
    ) {
        const isProd = window.location.origin.includes('herokuapp'); // process.env.DEV_OR_PROD === 'PRODUCTION';
        const api_domain = isProd ? 'https://rmw-myfavors-server.herokuapp.com/api' : `http://localhost:6700/api`;
        this.API_PREFIX = api_domain;
        console.log({ isProd, api_domain });
    }

    // GET
    checkSession() {
        const httpOptions = {
            headers: new HttpHeaders({
              'Content-Type':  'application/json',
              'Authorization': window.localStorage.getItem('myfavors-token') || ''
            }),
          withCredentials: true,
        };
        return this.http.get(this.API_PREFIX + '/check_session', httpOptions);
    }
  
  // GET
    signout() {
        const httpOptions = {
            headers: new HttpHeaders({
              'Content-Type':  'application/json'
            }),
            withCredentials: true,
        };
        return this.http.get(this.API_PREFIX + '/sign_out', httpOptions);
    }

    // POST
    sign_up(data) {
        const httpOptions = {
            headers: new HttpHeaders({
              'Content-Type':  'application/json'
            }),
          withCredentials: true,
        };
        return this.http.post(this.API_PREFIX + '/sign_up', data, httpOptions);
    }

    // PUT
    sign_in(data) {
        const httpOptions = {
            headers: new HttpHeaders({
              'Content-Type':  'application/json'
            }),
          withCredentials: true,
        };
        return this.http.put(this.API_PREFIX + '/sign_in', data, httpOptions);
    }
  
  // PUT
    sign_out(data = {}) {
        const httpOptions = {
            headers: new HttpHeaders({
              'Content-Type':  'application/json'
            }),
            withCredentials: true,
        };
        return this.http.put(this.API_PREFIX + '/sign_out', data, httpOptions);
    }
}
