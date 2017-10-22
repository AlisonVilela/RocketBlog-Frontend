import { NgModule } from '@angular/core'
import { RouterModule } from '@angular/router';

import { CoreModule } from 'app/core/core.module'
import { GravatarModule } from 'ng2-gravatar-directive';

import * as Components from 'app/admin/components'

@NgModule({
  imports: [
    CoreModule,
    RouterModule,
    GravatarModule
  ],
  declarations: [
    Components.FooterComponent,
    Components.HeaderComponent,
    Components.NavBarComponent
  ],
  exports: [
    Components.FooterComponent,
    Components.HeaderComponent,
    Components.NavBarComponent
  ]
})
export class ComponentModule {}
