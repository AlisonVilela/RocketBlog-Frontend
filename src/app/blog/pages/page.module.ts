import { NgModule } from '@angular/core'
import { RouterModule } from '@angular/router';

import { CoreModule } from 'app/core/core.module'
import { ComponentModule } from '../components/component.module'
import { FroalaViewModule } from 'angular-froala-wysiwyg';

import * as Pages from 'app/blog/pages'

@NgModule({
  imports: [
    CoreModule,
    RouterModule,
    ComponentModule,
    FroalaViewModule
  ],
  declarations: [
    Pages.PostPageComponent,
    Pages.PostsPageComponent,
    Pages.AboutPageComponent,
    Pages.ContactPageComponent
   ],
  exports: [
    Pages.PostPageComponent,
    Pages.PostsPageComponent,
    Pages.AboutPageComponent,
    Pages.ContactPageComponent
   ]
})
export class PageModule { }
