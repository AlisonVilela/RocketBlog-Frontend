import { NgModule } from '@angular/core'
import { RouterModule } from '@angular/router';

import { CoreModule } from 'app/core/core.module'

import * as Components from 'app/components'

@NgModule({
  imports: [
    CoreModule,
    RouterModule
  ],
  declarations: [
    Components.AlertMessageComponent
  ],
  exports: [
    Components.AlertMessageComponent
  ]
})
export class ComponentModule {}
