import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';

import * as Pages from 'app/pages'
import { MainComponent } from 'app/main.component';

const appRoutes: Routes = [
  {
    path: '', children: [
      {
        path: 'blog', component: MainComponent, children: [
          { path: '', component: Pages.PostsPageComponent },
          { path: 'post/:post', component: Pages.PostPageComponent },
          { path: 'about', component: Pages.AboutPageComponent },
          { path: 'contact', component: Pages.ContactPageComponent },
        ]
      },
      {
        path: 'admin', children: [
          {
            path: '', children: [
              { path: '', redirectTo: 'dashboard', pathMatch: 'full' },
              {
                path: 'login', component: MainComponent
              },
              {
                path: 'dashboard', component: MainComponent
              }
            ]
          }
        ]
      },
      { path: '**', redirectTo: 'blog', pathMatch: 'full' }
    ]
  }
]

@NgModule({
  imports: [RouterModule.forRoot(appRoutes, { useHash: false })],
  exports: [RouterModule]
})
export class AppRoutingModule { }
