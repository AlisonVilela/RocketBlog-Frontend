import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';

import * as Guard from 'app/guards'

const appRoutes: Routes = [
  {
    path: '', canActivate: [Guard.AppGuard], children: [
      { path: 'blog', loadChildren: 'app/blog/blog.module#BlogModule' },
      { path: 'admin', loadChildren: 'app/admin/admin.module#AdminModule' },
      { path: '', redirectTo: 'blog', pathMatch: 'full' },
      { path: '**', redirectTo: 'blog', pathMatch: 'full' }
    ]
  }
]

@NgModule({
  imports: [RouterModule.forRoot(appRoutes, { useHash: false })],
  exports: [RouterModule]
})
export class AppRoutingModule { }
