import { NgModule } from '@angular/core';

import { CoreModule } from 'app/core/core.module'
import { AdminRoutingModule } from './admin.routing.module'
import { PageModule } from './pages/page.module'
import { ComponentModule } from './components/component.module'


import { AdminComponent } from './admin.component'

@NgModule({
  imports: [
    CoreModule,
    AdminRoutingModule,
    PageModule,
    ComponentModule
  ],
  declarations: [
    AdminComponent
  ]
})
export class AdminModule { }
