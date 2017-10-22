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
    Components.FooterComponent,
    Components.HeaderComponent,
    Components.NavBarComponent,
    Components.WidgetComponent,
    Components.WidgetCardComponent,
    Components.PostCardComponent
  ],
  exports: [
    Components.AlertMessageComponent,
    Components.FooterComponent,
    Components.HeaderComponent,
    Components.NavBarComponent,
    Components.WidgetComponent,
    Components.WidgetCardComponent,
    Components.PostCardComponent
  ]
})
export class ComponentModule {}
