import { NgModule } from '@angular/core'
import { RouterModule } from '@angular/router';

import { CoreModule } from 'app/core/core.module'

import * as Components from 'app/components'

@NgModule({
  imports: [
    CoreModule
  ],
  declarations: [
    Components.NavBarComponent,
    Components.AlertMessageComponent
  ],
  exports: [
    Components.NavBarComponent,
    Components.AlertMessageComponent
  ]
})
export class ComponentModule {}
