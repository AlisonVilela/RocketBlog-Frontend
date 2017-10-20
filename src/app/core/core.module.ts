import { NgModule } from '@angular/core'
import { CommonModule } from '@angular/common'
import { RouterModule } from '@angular/router'

import { NgbModule } from '@ng-bootstrap/ng-bootstrap'

@NgModule({
  imports: [
    CommonModule,
    NgbModule.forRoot()
  ],
  declarations: [

  ],
  exports: [
    CommonModule,
    NgbModule
  ]
})
export class CoreModule {}
