import { Injectable } from '@angular/core';
import { Observable } from 'rxjs/Rx'
import { HttpClient } from '@angular/common/http'


import { environment } from 'environments/environment'

@Injectable()
export class AuthService {
        
  constructor(private http: HttpClient) {

  }

  auth(input): Observable<any> {
    return this.http.post(environment.ApiURL + '/admin/auth', input)
  }

  getMe(): Observable<any> {
    return this.http.get(environment.ApiURL + '/admin/me')
  }
}
