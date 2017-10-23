import { Injectable } from '@angular/core';
import { Observable } from 'rxjs/Rx'
import { HttpClient } from '@angular/common/http'


import { environment } from 'environments/environment'

@Injectable()
export class UserService {

  constructor(private http: HttpClient) {
  }

  post(input): Observable<any> {
    return this.http.post(environment.ApiURL + '/', input)
  }

}
