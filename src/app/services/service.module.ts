import { NgModule, ModuleWithProviders } from '@angular/core'
import { HttpClientModule, HTTP_INTERCEPTORS } from '@angular/common/http'

import * as Services from 'app/services'

import { AuthInterceptor } from 'app/services/auth.interceptor.service'


@NgModule({
  imports: [
    HttpClientModule
  ]
})
export class ServiceModule {
  static forRoot(): ModuleWithProviders {
    return {
      ngModule: ServiceModule,
      providers: [
        { provide: HTTP_INTERCEPTORS, useClass: AuthInterceptor, multi: true },
        Services.AlertMessage,
        Services.AuthService,
        Services.SessionService,
        Services.UserService,
        Services.PostService,
        Services.ModalsService
      ]
    }
  }
}

