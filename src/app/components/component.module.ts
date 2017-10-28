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
    Components.AlertMessageComponent,
    Components.MessagePopupComponent
  ],
  entryComponents: [
    Components.MessagePopupComponent
  ],
  exports: [
    Components.AlertMessageComponent,
    Components.MessagePopupComponent
  ]
})
export class ComponentModule {}
