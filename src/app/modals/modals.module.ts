import { NgModule } from '@angular/core'

import { CoreModule } from 'app/core/core.module'

import * as Modals from 'app/modals'

@NgModule({
  imports: [
    CoreModule
  ],
  declarations: [
    Modals.UserProfilePopupPage,
    Modals.UserPopupPage,
    Modals.PostPopupPage
  ],
  entryComponents: [
    Modals.UserProfilePopupPage,
    Modals.UserPopupPage,
    Modals.PostPopupPage
  ],
  exports: [
    Modals.UserProfilePopupPage,
    Modals.UserPopupPage,
    Modals.PostPopupPage
  ]
})
export class ModalsModule { }
