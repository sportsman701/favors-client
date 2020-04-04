import { HttpClient, HttpRequest, HttpHeaders } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Observable } from 'rxjs';

@Injectable()
export class ClientService {
  DOMAIN: string;
  API_PREFIX: string;
  isProd: boolean;
  apiDomain: string;

  constructor(
    public http: HttpClient
  ) {
    this.isProd = window.location.origin.includes('herokuapp'); // process.env.DEV_OR_PROD === 'PRODUCTION';
    this.DOMAIN = this.isProd ? 'https://rmw-myfavors-server.herokuapp.com' : `http://localhost:6700`;
    this.apiDomain = this.DOMAIN + '/main';
    this.API_PREFIX = this.apiDomain;
    console.log(this);
  }

  sendRequest<T>(
    route: string,
    method: 'GET' | 'POST' | 'PUT' | 'DELETE',
    data?: object | FormData,
    report_progress: boolean = false
  ): Observable<T> {
    const api_url = this.API_PREFIX + route;

    const httpOptions: any = {
      withCredentials: true,
      reportProgress: report_progress,
      headers: new HttpHeaders({
        Accept: 'application/json',
      }),
    };
    if (data && data.constructor === Object) {
      httpOptions.headers.set('Content-Type', 'application/json');
    }

    let requestObservable: Observable<T>;

    switch (method) {
      case 'GET':
        requestObservable = (<any> this.http.get(api_url, httpOptions)) as Observable<T>;
        break;
      case 'POST':
        requestObservable = (<any> this.http.post(api_url, data, httpOptions)) as Observable<T>;
        break;
      case 'PUT':
        requestObservable = (<any> this.http.put(api_url, data, httpOptions)) as Observable<T>;
        break;
      case 'DELETE':
        requestObservable = (<any> this.http.delete(api_url, httpOptions)) as Observable<T>;
        break;
    }

    return requestObservable;
  }
}
