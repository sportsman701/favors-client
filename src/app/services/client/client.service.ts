import { HttpClient, HttpRequest, HttpHeaders } from '@angular/common/http';
import { Injectable } from '@angular/core';

@Injectable()
export class ClientService {
  API_PREFIX: string;

  constructor(
    public http: HttpClient
  ) {
    const isProd = window.location.origin.includes('herokuapp'); // process.env.DEV_OR_PROD === 'PRODUCTION';
    const api_domain = isProd ? 'https://rmw-myfavors-server.herokuapp.com/main' : `http://localhost:6700/main`;
    this.API_PREFIX = api_domain;
    console.log({ isProd, api_domain });
  }

  sendRequest(route: string, method: string, data: object | FormData, content_type: string) {
    const api_url = this.API_PREFIX + route;

    const httpOptions: any = {
      withCredentials: true,
      reportProgress: true,
      headers: new HttpHeaders({
        Accept: 'application/json'
      }),
    };
    if (data && data.constructor === Object) {
      httpOptions.headers.set('Content-Type', 'application/json');
    }

    switch (method) {
      case 'GET':
        return this.http.get(api_url, httpOptions);
      case 'POST':
        return this.http.post(api_url, data, httpOptions);
      case 'PUT':
        return this.http.put(api_url, data, httpOptions);
      case 'DELETE':
        return this.http.delete(api_url, httpOptions);
    }
  }
}
