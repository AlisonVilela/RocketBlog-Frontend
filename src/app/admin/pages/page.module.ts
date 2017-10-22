import { NgModule } from '@angular/core'
import { RouterModule } from '@angular/router';

import { CoreModule } from 'app/core/core.module'
import { ComponentModule } from '../components/component.module'

import * as Pages from 'app/admin/pages'

@NgModule({
  imports: [
    CoreModule,
    RouterModule,
    ComponentModule
  ],
  declarations: [
    Pages.AuthPageComponent,
    Pages.DashboardPageComponent,
    Pages.PostsPageComponent,
    Pages.ProfilePageComponent,
    Pages.UsersPageComponent
   ],
  exports: [
    Pages.AuthPageComponent,
    Pages.DashboardPageComponent,
    Pages.PostsPageComponent,
    Pages.ProfilePageComponent,
    Pages.UsersPageComponent
   ]
})
export class PageModule { }
