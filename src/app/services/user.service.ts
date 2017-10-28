import { Injectable } from '@angular/core';
import { Observable } from 'rxjs/Rx'
import { HttpClient } from '@angular/common/http'


import { environment } from 'environments/environment'

@Injectable()
export class UserService {

  constructor(private http: HttpClient) {
  }

  getAll(): Observable<any> {
    return this.http.get(environment.ApiURL + '/admin/user')
  }

  get(id: string): Observable<any> {
    return this.http.get(environment.ApiURL + `/admin/user/${id}`)
  }

  edit(id: string, input): Observable<any> {
    return this.http.put(environment.ApiURL + `/admin/user/${id}`, input)
  }

  create(input): Observable<any> {
    return this.http.post(environment.ApiURL + '/admin/user', input)
  }

  delete(id: string): Observable<any> {
    return this.http.delete(environment.ApiURL + `/admin/user/${id}`)
  }
}
