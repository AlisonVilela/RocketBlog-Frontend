import { NgModule } from '@angular/core'
import { RouterModule } from '@angular/router';

import { CoreModule } from 'app/core/core.module'

import * as Components from 'app/blog/components'

@NgModule({
  imports: [
    CoreModule,
    RouterModule
  ],
  declarations: [
    Components.FooterComponent,
    Components.HeaderComponent,
    Components.NavBarComponent,
    Components.WidgetComponent,
    Components.WidgetCardComponent,
    Components.PostCardComponent
  ],
  exports: [
    Components.FooterComponent,
    Components.HeaderComponent,
    Components.NavBarComponent,
    Components.WidgetComponent,
    Components.WidgetCardComponent,
    Components.PostCardComponent
  ]
})
export class ComponentModule {}
