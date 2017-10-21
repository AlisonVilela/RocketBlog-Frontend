import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';

import * as Pages from 'app/pages'
import { MainComponent } from 'app/main.component';

const appRoutes: Routes = [
  {
    path: '', children: [
      {
        path: 'blog', component: MainComponent, children: [
          { path: '', component: Pages.InitialPageComponent },
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
