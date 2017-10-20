import { NgModule, ModuleWithProviders } from '@angular/core'
import { HttpClientModule } from '@angular/common/http'

import * as Services from 'app/services'


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
        Services.AlertMessage,
        Services.TestService
      ]
    }
  }
}

