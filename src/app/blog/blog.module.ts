import { NgModule } from '@angular/core';

import { CoreModule } from 'app/core/core.module'
import { BlogRoutingModule } from './blog.routing.module'
import { PageModule } from './pages/page.module'
import { ComponentModule } from './components/component.module'

import { BlogComponent } from './blog.component'

@NgModule({
  imports: [
    CoreModule,
    BlogRoutingModule,
    ComponentModule,
    PageModule
  ],
  declarations: [
    BlogComponent
  ]
})
export class BlogModule { }
