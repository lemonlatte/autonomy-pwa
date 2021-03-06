declare var window: any;

import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';

import 'rxjs';
import { Observable } from 'rxjs';

@Injectable({
  providedIn: 'root'
})
export abstract class BaseService {
  constructor(protected http: HttpClient) {}

  protected sendHttpRequest(method: string, url: string, params?, options?) {
    if (url.startsWith('api')) {
      url = `${window.App.config.api_server_url}${url}`
    }
    options = options || {};
    options.headers = options.headers || {};
    options.headers['Client-Type'] = 'ios';
    options.headers['Client-Version'] = '5';

    // if (options.withCredentials === undefined) {
    //   options.withCredentials = true;
    // }
    return Observable.create((observer) => {
      let request;
      switch (method) {
        case 'post':
          request = this.http.post(url, params, options);
          break;
        case 'put':
          request = this.http.put(url, params, options);
          break;
        case 'patch':
          request = this.http.patch(url, params, options);
          break;
        case 'get':
          request = this.http.get(url, options);
          break;
        case 'head':
          request = this.http.head(url);
          break;
        case 'delete':
          request = this.http.delete(url, options);
          break;
        default:
          break;
      }

      // request.map((res) => res.json())
        request.subscribe(
          (data) => {
            observer.next(data);
            observer.complete();
          },
          (error) => observer.error(error.json && error.json() ? new Error(error.json().message) : new Error('can not connect to the server'))
        );
    });
  }
}
