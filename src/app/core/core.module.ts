import { NgModule } from '@angular/core'
import { CommonModule } from '@angular/common'
import { FormsModule } from '@angular/forms'

import { NgbModule } from '@ng-bootstrap/ng-bootstrap'

@NgModule({
  imports: [
    FormsModule,
    NgbModule.forRoot(),
    CommonModule
  ],
  declarations: [

  ],
  exports: [
    FormsModule,
    NgbModule,
    CommonModule
  ]
})
export class CoreModule {}
