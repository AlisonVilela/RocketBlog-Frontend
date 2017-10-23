import {Injectable, Injector} from '@angular/core'
import {
  HttpInterceptor,
  HttpRequest,
  HttpHandler,
  HttpEvent
} from '@angular/common/http'

import { Observable } from 'rxjs/Observable'
import { SessionService } from 'app/services'

@Injectable()
export class AuthInterceptor implements HttpInterceptor {

  private sessionService: SessionService

  constructor(private injector: Injector) {
  }

  intercept(request: HttpRequest<any>, next: HttpHandler): Observable<HttpEvent<any>> {
    let req = request

    this.sessionService = this.injector.get(SessionService)

    if (this.sessionService.isAuthenticated) {
      req = request.clone({
        headers: request.headers.set('Authorization', this.sessionService.token)
      })
    }

    return next.handle(req)
  }
}
