import { NgModule } from '@angular/core'
import { RouterModule } from '@angular/router';

import { CoreModule } from 'app/core/core.module'

import * as Components from 'app/components'

@NgModule({
  imports: [
    CoreModule
  ],
  declarations: [    
    Components.AlertMessageComponent,
    Components.FooterComponent,
    Components.HeaderComponent,    
    Components.NavBarComponent,
    Components.PageContentComponent,
    Components.WidgetComponent
  ],
  exports: [
    Components.AlertMessageComponent,
    Components.FooterComponent,
    Components.HeaderComponent,    
    Components.NavBarComponent,
    Components.PageContentComponent,
    Components.WidgetComponent
  ]
})
export class ComponentModule {}
