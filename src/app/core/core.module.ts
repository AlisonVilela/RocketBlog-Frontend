import { NgModule } from '@angular/core'
import { CommonModule } from '@angular/common'
import { FormsModule } from '@angular/forms'

import { NgbModule } from '@ng-bootstrap/ng-bootstrap'
import { CustomConfig, Ng2UiAuthModule } from 'ng2-ui-auth'
import { GravatarModule } from 'ng2-gravatar-directive';
import { OrderModule } from 'ngx-order-pipe';
import { environment } from 'environments/environment'
import { PermissionService } from 'angular2-permission'
import { ScrollToModule } from 'ng2-scroll-to';

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
    Ng2UiAuthModule.forRoot(AuthConfig),
    GravatarModule,
    OrderModule,
    ScrollToModule.forRoot()
  ],
  providers: [
    PermissionService
  ],
  exports: [
    FormsModule,
    NgbModule,
    CommonModule,
    Ng2UiAuthModule,
    GravatarModule,
    OrderModule,
    ScrollToModule
  ]
})
export class CoreModule {}
