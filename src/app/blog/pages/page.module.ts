import { NgModule } from '@angular/core'
import { RouterModule } from '@angular/router';

import { CoreModule } from 'app/core/core.module'
import { ComponentModule } from '../components/component.module'
import { ScrollToModule } from 'ng2-scroll-to';

import * as Pages from 'app/blog/pages'

@NgModule({
  imports: [
    CoreModule,
    RouterModule,
    ComponentModule,
    ScrollToModule.forRoot()
  ],
  declarations: [
    Pages.PostsPageComponent,
    Pages.PostPageComponent,
    Pages.AboutPageComponent,
    Pages.ContactPageComponent
   ],
  exports: [
    Pages.PostsPageComponent,
    Pages.PostPageComponent,
    Pages.AboutPageComponent,
    Pages.ContactPageComponent
   ]
})
export class PageModule { }
