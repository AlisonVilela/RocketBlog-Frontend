import { Injectable } from '@angular/core';
import { Observable } from 'rxjs/Rx'
import { HttpClient, HttpParams } from '@angular/common/http'


import { environment } from 'environments/environment'

@Injectable()
export class PostService {

  constructor(private http: HttpClient) {
  }

  blogGetAll(page, size): Observable<any> {
    let params = new HttpParams()
    params = params.append('page', page)
    params = params.append('size', size)
    return this.http.get(environment.ApiURL + '/blog/post', {params: params})
  }

  blogGet(id: string): Observable<any> {
    return this.http.get(environment.ApiURL + `/blog/post/${id}`)
  }

  getAll(): Observable<any> {
    return this.http.get(environment.ApiURL + '/admin/post')
  }

  get(id: string): Observable<any> {
    return this.http.get(environment.ApiURL + `/admin/post/${id}`)
  }

  edit(id: string, input): Observable<any> {
    return this.http.put(environment.ApiURL + `/admin/post/${id}`, input)
  }

  create(input): Observable<any> {
    return this.http.post(environment.ApiURL + '/admin/post', input)
  }

  delete(id: string): Observable<any> {
    return this.http.delete(environment.ApiURL + `/admin/post/${id}`)
  }
}
