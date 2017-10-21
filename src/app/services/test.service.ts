import { Injectable } from '@angular/core';
import { Observable } from 'rxjs/Rx'
import { HttpClient } from '@angular/common/http'

import { environment } from 'environments/environment'

@Injectable()
export class TestService {

  constructor(private http: HttpClient) {
  }

  get(id): Observable<any> {
    return this.http.get(environment.ApiURL + '/blog/' + id)
  }

  getAll(): Observable<any> {
    return this.http.get(environment.ApiURL + '/blog')
  }

  post(input): Observable<any> {
    return this.http.post(environment.ApiURL + '/addblog', input)
  }

  delete(id): Observable<any> {
    return this.http.delete(environment.ApiURL + '/blog/' + id)
  }
}
