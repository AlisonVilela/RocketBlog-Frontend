import { NgModule } from '@angular/core'
import { CommonModule } from '@angular/common'
import { FormsModule } from '@angular/forms'

import { NgbModule } from '@ng-bootstrap/ng-bootstrap'
import { CustomConfig, Ng2UiAuthModule } from 'ng2-ui-auth'

import {environment} from 'environments/environment'
import { PermissionService } from 'angular2-permission'

export class AuthConfig extends CustomConfig {
  defaultHeaders = {'Content-Type': 'application/json'}  
  tokenName = 'accessToken'
  tokenPrefix = ''
  baseUrl = environment.ApiURL
}

@NgModule({
  imports: [
    FormsModule,
    NgbModule.forRoot(),
    CommonModule,
    Ng2UiAuthModule.forRoot(AuthConfig)
  ],
  declarations: [

  ],
  providers: [
    PermissionService
  ],
  exports: [
    FormsModule,
    NgbModule,
    CommonModule,
    Ng2UiAuthModule
  ]
})
export class CoreModule {}
