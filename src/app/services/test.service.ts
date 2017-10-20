import { Injectable } from '@angular/core';
import { Observable } from 'rxjs/Rx'
import { HttpClient } from '@angular/common/http'

import { environment } from 'environments/environment'

@Injectable()
export class TestService {

  constructor(private http: HttpClient) {
  }

  get(): Observable<any> {
    return this.http.get(environment.ApiURL + '/blog')
  }

}
