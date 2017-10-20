import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';

import * as Pages from 'app/pages'

const appRoutes: Routes = [
  { path: '', children: [
    { path: 'blog', component: Pages.InitialPageComponent },
    { path: '**', redirectTo: 'blog', pathMatch: 'full' }
    ]
  }
]

@NgModule({
  imports: [RouterModule.forRoot(appRoutes, { useHash: false })],
  exports: [RouterModule]
})
export class AppRoutingModule { }
