import { NgModule } from '@angular/core'
import { RouterModule } from '@angular/router';

import { CoreModule } from 'app/core/core.module'

import * as Components from 'app/admin/components'

@NgModule({
  imports: [
    CoreModule,
    RouterModule
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
