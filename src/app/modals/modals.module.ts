import { NgModule } from '@angular/core'

import { CoreModule } from 'app/core/core.module'

import * as Modals from 'app/modals'

@NgModule({
  imports: [
    CoreModule
  ],
  declarations: [
    Modals.UserProfilePopupPage,
    Modals.UserPopupPage
  ],
  entryComponents: [
    Modals.UserProfilePopupPage,
    Modals.UserPopupPage
  ],
  exports: [
    Modals.UserProfilePopupPage,
    Modals.UserPopupPage
  ]
})
export class ModalsModule { }
